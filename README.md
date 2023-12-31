# Frontend Mentor - Article preview component solution

![Design preview for the Article preview component coding challenge](./design/desktop-preview.jpg)


This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

## My process

My working order will be like:

1. Build a whole HTML at first
2. Then deal with the share button to make it alive
3. Last but not the least, deal with CSS and fix some design issue

### Built with

- HTML
- CSS custom properties
- Pure JavaScript with no framework
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css
:root {
    --body-font: "Manrope", sans-serif;
    --very-dark-grayish-blue: hsl(217, 19%, 35%);
    --desaturated-dark-blue: hsl(214, 17%, 51%);
    --grayish-blue: hsl(212, 23%, 69%);
    --light-grayish-blue: hsl(210, 23%, 69%);
    --white: white;
    --box-shadow: -1px 1px 25px 0px rgba(0, 0, 0, 0.17);
}
```
```js
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
```

### Continued development
I will take the further challenge with using React! ;)

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/)  - If you just only use pure HTML/CSS/JavaScript for the solution, then MDN Docs is enough to search for.


## Author

- Frontend Mentor - [@FrancineHuang](https://www.frontendmentor.io/profile/FrancineHuang)
- Twitter - [@Francine_webdev](https://twitter.com/Francine_webdev)
