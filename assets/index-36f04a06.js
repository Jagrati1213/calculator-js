(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) s(t);
  new MutationObserver((t) => {
    for (const n of t)
      if (n.type === "childList")
        for (const u of n.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && s(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(t) {
    const n = {};
    return (
      t.integrity && (n.integrity = t.integrity),
      t.referrerPolicy && (n.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : t.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function s(t) {
    if (t.ep) return;
    t.ep = !0;
    const n = c(t);
    fetch(t.href, n);
  }
})();
let d = document.querySelector("#previousOperand"),
  p = document.querySelector("#currentOperand"),
  y = document.querySelectorAll('[data-type="number"]'),
  m = document.querySelectorAll('[data-type="operation"]'),
  g = document.querySelector('[data-type="clear"]'),
  O = document.querySelector('[data-type="delete"]'),
  h = document.querySelector('[data-type="equal"]'),
  l = "",
  r = "",
  i;
function v(e) {
  (e === "." && r.toString().includes(".")) || (r += e);
}
function S(e) {
  r !== "" && (l != "" && f(), (i = e), (l = r), (r = ""));
}
function f() {
  let e;
  const o = parseFloat(l),
    c = parseFloat(r);
  if (!(isNaN(c) || isNaN(o))) {
    switch (i) {
      case "+":
        e = o + c;
        break;
      case "-":
        e = o - c;
        break;
      case "×":
        e = o * c;
        break;
      case "÷":
        e = o / c;
        break;
      default:
        return;
    }
    (r = e), (l = ""), (i = void 0);
  }
}
function a() {
  i != null ? (d.textContent = `${l} ${i}`) : (d.textContent = ""),
    (p.textContent = r);
}
function q() {
  (l = ""), (r = ""), (i = void 0);
}
function L() {
  r = r.toString().substring(0, r.toString().length - 1);
}
y.forEach((e) => {
  e.addEventListener("click", () => {
    v(e.textContent), a();
  });
});
m.forEach((e) => {
  e.addEventListener("click", () => {
    S(e.textContent), a();
  });
});
h.addEventListener("click", () => {
  f(), a();
});
g.addEventListener("click", () => {
  q(), a();
});
O.addEventListener("click", () => {
  L(), a();
});
