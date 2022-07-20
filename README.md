# Etch-A-Sketch

This Etch-A-Sketch project uses vanilla Javascript, HTML, and CSS.


#### Unique features:

 * Click and drag to color (instead of just hovering) so users have more control over their drawing
 * Save, reuse, and remove favorite colors
 * Color with custom color (adjust RGBA values), random color, or rainbow color
 * Adjust number of grid squares
 * Toggle grid lines on and off 


I had many challenges doing this project and learned a ton, especially about using querySelector and addEventListener to link all the elements of the page to their functions.


#### Lessons:

* Creating the grid - learned about createElement and appendChild
* Arranging everything in CSS - got more experience with flexbox
* Creating sliders - learned how to get values from the sliders to appear and use those values in functions
* Color, erase, and clear buttons - got practice getting different values from these buttons and passing them through the coloring functions
* Coloring the grid - learned how to change default values in the root or html element so that the clicked squares could be dragged over without grabbing and moving them
* Heart button - learned how to create layered elements with additional layered text
* Toggle switch - learned how to get the value from a toggle switch, how to manipulate its CSS, and how to link it with the grid size function
* Removing favorite color - learned that clicking on a child element fired both the child and parent event listeners and discovered that I needed a stopPropagation to stop it bubbling up


I got stuck many times, which forced me to become more familiar with the debugger in the browser. It was extremely helpful in discovering why some values were mysteriously disappearing and why certain functions were being called that weren't supposed to be. I had fun added lots of features and conquering tons of bugs.


#### Possible Future Features:

* Save drawing as image file
* Make it mobile-friendly


#### Watch video of Etch-A-Sketch in action:
<a href="http://www.youtube.com/watch?feature=player_embedded&v=olgtiEjygLI" target="_blank">
 <img src="http://img.youtube.com/vi/olgtiEjygLI/mqdefault.jpg" alt="Watch the video" width="400" height="300" border="10" />
</a>