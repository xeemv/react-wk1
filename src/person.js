/* ============================================ */
                /* webpack */
/* ============================================ */
import $ from 'jquery';
// import classes or files that we are using inside of any file
// in this case, we will import the "$" method from Jquery
// we now have access inside this file to use the dollar sign



// export default = will make this available in the other classes
export default class Person{
    constructor(firstName, lastName){
        // takes parameters for first n last name
        this.firstName = firstName;
        this.lastName = lastName;
    }

    display(elementId){
        // display method
        // change innerhtml or the text of that element to first N last name info
        // use jquery and template literal
        $(`#${elementId}`).text(`${this.firstName} ${this.lastName}`);
        // this will grab element id
        // will change it to first name and last name

    }
}