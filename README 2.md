MDB Project Starter Template
=========

A basic template I use as a starting point when beginning a new web project that contains SASS / SCSS files.

## Installation

There is no 'installation' exactly - assuming you have npm and sass installed.

## Get the starter project

#### Either

1. Download directly as a zip, extract it and you're ready to go.  

  **Or**

2. Use __terminal__ to clone the repository.  

    1. in terminal, move to whatever directory you'd like the template to be downloaded into  
    2. run  
            `git clone https://github.com/mattdanielbrown/MDB-Starter-Project-2.git   `   
    3. move into in the _MDB-Starter-Project-2_ directory (run `cd MDB-Starter-Project-2`), and go nuts.

## Setup

The following are suggestions of what to do following downloading the project starter in order to get everything setup and ready for development.

  * Choose (or add) fonts via the *scss/vendor/_google-fonts.scss* partial (see [Fonts](https://github.com/mattdanielbrown/MDB-Starter-Project-2/blob/master/README.md#fonts) below)
  * Edit the partials, *scss/partials/_variables.scss, -mixins.scss, and -layout.scss* to suit project's needs
  * Add partials to the *partials* directory
    * ...and update *scss/main.scss* (see [Adding Partials](https://github.com/mattdanielbrown/MDB-Starter-Project-2/blob/master/README.md#adding-partials) below)


## Fonts

This starter template attempts to provided an easy way to get up and running quickly and effeciently.

Thus, to handle fonts, there is a SCSS partial that offers a few of the most common typefaces on Google Fonts.

'Source Sans Pro' is the default, and the only font that is enabled. However, 'Source Sans Pro', as well as all the others, include ALL of the typefaces font weights. This is only for development purposes and to help speed up the project setup, and as such, SHOULD NEVER be used like this in a production enviroment, as not doing so could severly impact perfomrance. As a general rule, only ever include the exact fonts (and of them, only the specific weights) that are used.

To select a font other than 'Source Sans Pro':

  1. Open *scss/vendor/_google-fonts.scss*, and either
   * uncomment the reference for the desired google font.
   * Or add a google font reference for the desired font.
  
  2. Comment-out or delete the 'Source Sans Pro' import statement (unless you are still going to use it).
  
  3. Open *scss/partials/_variables.scss*, and update the *primary-font-main* varialbe to the new font.
  
#### Contents of the */scss/vendor/_google-fonts.scss* partial

```scss
// Google font references
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Lato Font
//@import url(https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900);

// Source Sans Pro Font
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900);      // Default Font

// Roboto Font
//@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900);

// Montserrat Font
//@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
```

## Adding Partials

#### Contents of _/scss/main.scss_
```scss
// Import the (S)CSS Reset
@import "vendor/reset";                 // SCSS version of a CSS Reset; customized version of Meyer's CSS Reset

// Import the Google font reference
//      ( These are all commented out by default; To activate, go into the file and uncomment desired font. )
@import "vendor/google-fonts";

// Import the basics
@import 'partials/base/variables';      // colors, fonts etc...
@import 'partials/base/mixins';         // custom mixins
@import 'partials/base/layout';         // responsive grid and media queries
@import 'partials/base/typography';     // styles typographic elements

// Import the project specific styles
@import "partials/defaults";            // place for primary / final styling and overrides
```

_scss/main.scss_ serves as the parent of all styling files (SASS-based, at least), and it's only job is to collect all other SASS files and combine them in preparation to be compiled from SASS into CSS.

In this project, _scss/main.scss_ is meant to contain no actual/direct styles, and, as mentioned above, is only there to round up all the other SASS files to be converted into CSS. 

The resulting CSS file (_css/main.css_, or _css/main.min.css_) is the main, and ideally, only stylesheet to be used in the project.

#### However, alternate stylesheets for other .html files would be acceptable. (The main goal is to limit the number of stylesheets in each .html to one).

So, to add new styles to the project, here is the reccomended process:

 1. create a new SASS file (a SCSS partial is suggested)
 2. write any desired styles
 3. import the newly created file into _scss/main.scss_
 4. (IF NECCESSARY) re-compile SASS files
 
 #### For example:
 
 * Create a new partial:  
 
 ```scss
 // scss/partials/_my-style.scss
 //
 //  This is an example partial.
 //  It will be imported into /scss/main.scss
 //
 
 .my-style-class {
    display: block;
    text-align: center;
    border: red solid thin;
 }
 
 #my-style-id {
    display: inline;
    background: red;
    border: red solid thin;
    border-radius: .25em;
 }
```  

 * Add the import statement to _/scss/main.scss_ (last line in the example below)
 
 ```scss
// Import the (S)CSS Reset
@import "vendor/reset";                 // SCSS version of a CSS Reset; customized version of Meyer's CSS Reset

// Import the Google font reference
//      ( These are all commented out by default; To activate, go into the file and uncomment desired font. )
@import "vendor/google-fonts";

// Import the basics
@import 'partials/base/variables';      // colors, fonts etc...
@import 'partials/base/mixins';         // custom mixins
@import 'partials/base/layout';         // responsive grid and media queries

// Import the project specific styles
@import "partials/defaults";            // place for primary / final styling and overrides

// Import the new partial
@import "partials/my-styles";
```

* If neccessary, re-compile _scss/main.scss

 In terminal at **project root**, run:
 ```bash
 sass -scss scss/main.scss > css/main.css
 ```
 

## File Structure

![File-Structure](https://raw.githubusercontent.com/mattdanielbrown/MDB-Starter-Project-2/master/img/FileStructure.png)

### Workflow Reminder

#### *This setup is meant to allow the user to manipulate styles in the project by __only__ editing SCSS partials.*

All of the SCSS partials are combined inside the parent SCSS file, **main.scss** (including all of the files that aren't intened to be edited directly, i.e., partials in the _vendor_ directory), which will then be compiled into either **main.css**, or **main.min.css** (depending on which is specified in the SASS compilation). Whichever one is chosen is the final stylesheet that is referenced in the index.html file.

This setup and workflow is meant to help ensure there is only **one** stylehseet referenced in the index.html file.

While it's not life or death, it is best practice and Google reccomends it as part of their fundamental site optimization guide. Not to mention the fact that it helps readibility.

#### So, to summarize, the following files are *__intended__* to be edited directly:

* index.html
* _variables.scss
* _mixins.scss
* _layout.scss
* (and anything else inside the _partials_ directory)
* main.js

#### ... And the following files are *__Not__* *__intended__* to be edited directly:

* main.css / main.min.css
* jQuery.js
* modernizr.js
* _reset.scss
