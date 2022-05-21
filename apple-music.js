// ==UserScript==
// @name         Apple Music App Themer
// @namespace    https://beta.music.apple.com/
// @version      1.0
// @description  Makes browser title bars match the Apple Music color scheme when opened as a PWA.
// @author       Dylan Umsted
// @match        https://*.music.apple.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let meta = document.createElement("meta")
    meta.name = "theme-color"
    meta.content = "#fa2d48"
    document.head.append(meta)
})();
