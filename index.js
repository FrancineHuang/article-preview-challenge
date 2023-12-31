"use strict";

// Make the definition about the share button and toggler
const shareBtn = document.querySelector(".share-btn");
const hiddenShareBtn = document.querySelector(".hidden-share-btn");
const shareSection = document.querySelector(".share-section");
const shareLink = document.querySelector(".share-link");
const socialMediaSection = document.querySelector(".social-icons");

// Make a definition for use and remove(close) the toggle section
const toggleSection = () => shareSection.classList.toggle("shown");
const removeHiddenSection = () => shareSection.classList.remove("shown");

// Make a function for the event
shareBtn.addEventListener("click", function() {
    toggleSection();
});

hiddenShareBtn.addEventListener("click", function() {
    toggleSection();
});

// Hide section event
document.addEventListener("click", function(e) {
    let targetSection = shareBtn.contains(e.target);
    let shownTargetSection = hiddenShareBtn.contains(e.target);
    let sharableLink = shareLink.contains(e.target);
    let socialIcons = socialMediaSection.contains(e.target);

    if (!targetSection && !shownTargetSection && !sharableLink && !socialIcons) {
        removeHiddenSection();
    }

});


