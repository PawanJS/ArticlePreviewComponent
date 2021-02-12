"use strict";
const shareBtn = document.querySelector(".js-share");
const shareBox = document.querySelector(".js-box");

shareBtn.addEventListener("click", function () {
  shareBox.classList.toggle("active");
});
