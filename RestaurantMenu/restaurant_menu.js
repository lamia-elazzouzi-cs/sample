const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];

/*************************** Using map()*/
// 1. convert breakfastmenu items into HTML strings using map()
// 2. use an arrow fct to structure each item into HTML format
// 3. use join() to concatenate the generated HTML strings into one
// 4. insert the final string into the div with id="breakfastMenuItems"
const breakfastMenuItemsHTML = breakfastMenu
    .map(
        (item, index) => `<p>Item ${index + 1}: ${item}</p>`)
    .join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
document.getElementById("breakfastTotalItems").innerHTML = `<p>Number of available items = ${breakfastMenu.length}</p>`;


/*************************** Using forEach()*/
// 1. initialize empty string
// 2. use forEach to loop through each element in the array
let mainCourseItems = "";
mainCourseMenu.forEach((item, index) => {
    mainCourseItems += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItems;


/*************************** Using for loop*/
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;