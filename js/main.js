"use strict";
const shareBtn = document.querySelector(".js-share");
const shareBox = document.querySelector(".js-box");
const facebookBtn = document.querySelector(".js-fb");
const twitterBtn = document.querySelector(".js-twitter");
const pinterestBtn = document.querySelector(".js-pinterest");

//Making share button working
shareBtn.addEventListener("click", function () {
  shareBox.classList.toggle("active");
});

/* Share links are: =>
Facebook:-> https://www.facebook.com/sharer.php?u=[post-url]
Twitter:-> https://twitter.com/share?url=[post-url]&text=[post-title]
Pinterest:-> https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&description=[post-title]
*/

// Making share-links working
function init() {
  // Selecting Links
  const facebookBtn = document.querySelector(".js-fb");
  const twitterBtn = document.querySelector(".js-twitter");
  const pinterestBtn = document.querySelector(".js-pinterest");

  // Creating Elements
  const pinterestImage = document.querySelector("js-image");
  let postURL = encodeURI(document.location.href);
  let postTitle = encodeURI(document.querySelector(".js-title"));
  let postDescription = encodeURI(document.querySelector(".js-description"));

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postURL}`
  );
  twitterBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${postURL}&text=${postTitle}`
  );
  pinterestBtn.setAttribute(
    "href",
    ` https://pinterest.com/pin/create/bookmarklet/?media=${pinterestImage}&url=${postURL}&description=${postDescription}`
  );
}
init();
