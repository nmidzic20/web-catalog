# Project documentation

Optional documentation notes during development can be written into this document.

## Branch notes: Frontend

Frontend folder will contain all documents for serving the UI which the user will see via a web browser.
Simple, dark-theme catalog UI.

### Architecture
Currently hoping this will be a single-page app which will load/unload content dynamically, in order to avoid unnecessarily creating additional HTML pages. Might result in a bit more clutter in terms of JS and loading a bunch of stylesheets, but for the purposes of this project it should be manageable.

### DB
Implemented mock database to load food cards dynamically. This will have to be changed later, but should make implementing actual API calls simple.

### Food
Food class will help create its own card elements.
`load-food-catalog.js` will load the foods into the HTMl element with the id `#foods`.

### Styles
Lots of styles added for the different items just to keep from having one monster CSS document during development.
`index.css` contains all the main styles that will be used throughout all pages.