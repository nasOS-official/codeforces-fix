// ==UserScript==
// @name         Codeforces Fix (Fork)
// @namespace    http://tampermonkey.net/
// @version      2025-10-28
// @description  Исправление проблем с codeforces
// @author       nasOS-official
// @match        https://codeforces.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

  let scripts = document.getElementsByTagName("script")

  let src;
  for (let i in scripts) {
    if (!scripts[i] || !scripts[i].attributes) continue;
    src = scripts[i].attributes.src;
    if (src) {
      src.value = src.value.replace("//codeforces.org", "/codeforces.org")
    }
  }

  let images = document.getElementsByTagName("img")
  for (let i in images) {
    if (!images[i] || !images[i].attributes) continue;
    src = images[i].attributes.src;
    if (src) {
      src.value = src.value.replace("//codeforces.org", "/codeforces.org")
    }
  }

  let links = document.getElementsByTagName("link")
  for (let i in links) {
    if (!links[i] || !links[i].attributes) continue;
    src = links[i].attributes.href;
    if (src) {
      src.value = src.value.replace("//codeforces.org", "/codeforces.org")
    }
  }

})();

