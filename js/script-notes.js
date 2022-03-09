// first video - what is react
/*
 * A js library for building user interfaces
		○ Written and maintained by fb
		○ Consider the best option for writing the front-end user interfaces
* Allows us to easily organize our user interface into individual components that we can then use where ever the UI needs them
    - think of it like creating our own html elements w/ custom functionality 
    - then using those elements else where
* the components can be just about anything but they tend to be organized by visual logic segments
    - i.e: specific widgets we'd see on any site
* another valuable feature is:
    - the virtual dom used w/ js or jquery to access and manipulate the dom
* IMPORTANT TO NOTE:
    - WHEN WE MESS W/ THE DOM DIRECTLY, WE DO IT AT THE COST OF THE APPLICATION EFFICENCY 
    - most small changes to elements tend to result in larger unaffected parts of the DOM being rear-ended instead of just the info that was changed.
* the virtual dom that react provides is a light weight representation of the actual DOM
    - used to check for differences in it
    - verse the real DOM
    - only rerender those elements & subsets of those elements that have changed via react
    - will make UI more performant which is an important metric
        - because these features n more react has found itself at the center of FE dev
 */

/* ============================================ */
                /* webpack */
/* ============================================ */

/**
 * put each class or component in it's own file
 * use script for each file on your html
 * webpack allows:
 *  - to import depencies from specific files inot other files
 *  - bundles all of our resources together into a single resource file
 *      - all of our files become one file to be served to the user
 *      - this single file will then be linked to the html file that will also be bundled from all the other html files
 *      - basically allows us to write and manage our codes in separate files but link everything together in a bundle in one place
 * 
 * 
 * - run npm init
 * - run npm install --save-dev 
 *      - this is going to add it as a dev dependency
 * - run npm install webpack-cli --save-dev
 * - run npm install webpack --save-dev
 *      - will make so that webpack will combine all the files into one file
 * - run npx webpack
 * - run npx webpack again
 *      - when you add your new main.js file to the main html file
 *      - this will still work and build it for you
 * - check in the console on the browser
 *      - check network/source
 *          - this should only pull html and main.js(webpack file)
 */