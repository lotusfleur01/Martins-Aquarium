/**
 *  FishList which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module

import { useFish } from "./FishDataProvider.js";

import Fish from "./Fish.js"

const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const fishObjectArray = useFish()

   // Generate all of the HTML for all of the fish
   for (const fishObject of fishObjectArray) {
       
      
       const fishHTMLRepresentation = Fish(fishObject)
       /*
           Invoke the Fish component function
           and pass the current fish object as an argument.
           Each time, add the return value to the
           fishHTMLRepresentations variable with `+=`
       */

      contentElement.innerHTML += fishHTMLRepresentation
   } 

    // Add a section, and all of the fish to the DOM
}


export default FishList