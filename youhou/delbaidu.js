// ==UserScript==
// @name      屏蔽百度广告
// @version   1.0
// @match     *://*.baidu.com/*
// @connect   baidu.com
// @connect *
// ==/UserScript==

var zkddomain = document.domain;
var zkdurldomain = location.href;

function delbaidu() {
  $("div[id='content_left'] >div").each(function (index, element) {
    let t = $(element).children(':last-child').children(':last-child').text();
    if (t == "广告") {
      $(element).remove();
    }
    let xzggbt = $(element).find("span");
    if (xzggbt) {
      xzggbt.each(function (index, elnt) {
        if ($(elnt).text() == "广告") {
          $(element).remove();
        }
      })
    }
  })
}

delbaidu();

setInterval(function () {
  delbaidu()
}, 1000);
