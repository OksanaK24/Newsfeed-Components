/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
  "new one",
  "just added here",
  "without anything extra"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

let navcontainer = document.querySelector(".header")

function MenuCreator (arr1){
  let menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");
  
  let listUl = document.createElement("ul");
  menuDiv.appendChild(listUl);

  arr1.forEach((item) =>{
    let listLi = document.createElement("li");
    listLi.textContent = item;
    listUl.appendChild(listLi);
  })

  let menuBut = document.querySelector(".menu-button");
  menuBut.addEventListener("click", (event)=>{
    menuDiv.classList.toggle("menu--open")
  })  
  

  return menuDiv
}

navcontainer.appendChild(MenuCreator(menuItems));

