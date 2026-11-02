# Project Changelog - EcoGlow Skincare Website

All updates, bug fixes, and feature enhancements made across Part 2 and Part 3 of the project.

## [3.0.0] - Part 3 Implementation & Enhancements

### Added
- **JavaScript Form Validation (`js/script.js`):** Added real-time input checking and validation for the enquiry form to ensure all mandatory fields and valid email formats are completed prior to submission.
- **Interactive FAQ Accordion (`about.html` & `css/style.css`):** Implemented an expandable dropdown accordion component for frequently asked questions with smooth CSS transitions and DOM manipulation.
- **Real-Time Product Search & Filtering (`product.html` & `js/script.js`):** Added a dynamic search bar allowing users to filter skincare products instantly as they type.
- **Interactive Google Map (`contact.html`):** Embedded an interactive Google Maps iframe to display the brand's Cape Town headquarters and business location.

### Fixed
- **Code Separation:** Successfully decoupled all embedded internal `<style>` blocks across all HTML pages, routing all styles exclusively through `css/style.css`.
- **HTML Syntax Fixes:** Corrected unclosed tags (such as the `<video>` element on `index.html`) and cleaned up overlapping contact details on `contact.html`.

## [2.0.0] - Part 2 Submission & Layout Refactoring

### Added
- **External Stylesheet (`css/style.css`):** Established centralized styling rules, responsive CSS grids, and Flexbox layouts.
- **Responsive Breakpoints:** Integrated media queries supporting tablet and mobile viewports (`max-width: 900px` and `max-width: 600px`).
- **Scalable Units:** Converted static pixel sizing to relative units (`rem`, `em`, `%`).

### References
- MDN Web Docs. (2026). *Responsive design*. Available at: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
- W3C. (2026). *CSS Flexible Box Layout Module Level 1*. Available at: https://www.w3.org/TR/css-flexbox-1/