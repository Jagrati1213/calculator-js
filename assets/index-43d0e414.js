(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) n(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const l of t.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = s(e);
    fetch(e.href, t);
  }
})();
const main = "",
  screenVal = document.querySelector(".input_box input"),
  AllBtns = document.querySelectorAll(".buttons_box > button"),
  resultVal = document.querySelector(".result");
let butteText = "",
  result = "";
AllBtns.forEach((item) => {
  item.addEventListener("click", (event) => {
    (butteText = event.target.value),
      butteText == "="
        ? ((result = eval(screenVal.value)), (resultVal.textContent = result))
        : event.target.value == "ac"
        ? ((screenVal.value = ""), (resultVal.textContent = "0"))
        : event.target.value == "ce"
        ? (screenVal.value = screenVal.value.substring(
            0,
            screenVal.value.length - 1
          ))
        : (screenVal.value += butteText);
  });
});
