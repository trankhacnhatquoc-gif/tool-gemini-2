// ==UserScript==
// @name         AUTO FILL FFSB (MY TOOL)
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Tool tự động điền + Giải Captcha (Của bạn)
// @author       Trần Khắc Nhật Quốc
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // --- CẤU HÌNH CÁ NHÂN ---
    window.__FFSB_CHAT_ID = "NHẬP_CHAT_ID_CỦA_BẠN_VÀO_ĐÂY"; 
    window.__START_MINIMIZED = true;

    // --- LINK GITHUB CỦA BẠN ---
    // Tool sẽ tự động tải file ffsb.js từ kho GitHub cá nhân của bạn
    const GITHUB_USER = "trankhacnhatquoc-gif";
    const REPO_NAME = "tool-gemini";
    const SCRIPT_UI_URL = `https://raw.githubusercontent.com/${GITHUB_USER}/${REPO_NAME}/main/ffsb.js?v=` + Date.now();

    // --- LOGIC NẠP TOOL ---
    function initTool() {
        if (document.getElementById('_ffsb') || document.getElementById('custom-reg-tool-menu')) return;
        
        console.log("🚀 Đang nạp Tool từ GitHub cá nhân...");
        var s = document.createElement('script');
        s.src = SCRIPT_UI_URL;
        document.head.appendChild(s);
    }

    window.addEventListener('load', function() {
        setTimeout(initTool, 1000);
    });
    
    setTimeout(initTool, 2000);

})();
