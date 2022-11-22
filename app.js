/**
 * creating sections dynamically
 * by using createSection function and add them to the main tag
 * ES6
 */
// counter to specify attributes and number of section
/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const navBarList = document.getElementById("navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * make list items equal to the number of sections by iterate on them
 * but I need to remove all items to avoid the duplicating
 */
// build the nav

const createNavItems = () => {
  navBarList.innerHTML = "";
  sections.forEach((section) => {
    const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
    navBarList.insertAdjacentHTML("beforeend", listItem);
  });
};

createNavItems();

/* Start Helper Functions*/
///////// using Element.getBoundingClientRect() instead of Intersection Observer API ///////////////////

window.onscroll = function() {
	sections.forEach(function(active) {
    let activeLink = navBarList.querySelector(`[data-nav=${active.id}]`);
	if(active.getBoundingClientRect().top >= -350 && active.getBoundingClientRect().top <= 125){
    
// Add class 'active' to section when near top of viewport

    active.classList.add("your-active-class");
    activeLink.classList.add("active-link");

    }
    else{
         active.classList.remove("your-active-class");
         activeLink.classList.remove("active-link");
    }
	});
}
/**
 * when you click on nav links will go smoothly to the correct section
 * i can shortcut this code just using CSS (html{ scroll-behavior: "smooth"})
 * but I think it better to use what I learn
 **/

navBarList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
  
  }
});
