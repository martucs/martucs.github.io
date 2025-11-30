/* esperamos a que la pagina este cargada */
document.addEventListener("DOMContentLoaded", function(){

  // guardamos todos los <a> links del <nav>
  const navLinks = document.querySelectorAll("nav a");

  for (let i = 0; i < navLinks.length; i++) {

    navLinks[i].addEventListener("click", function (event) {

      event.preventDefault(); // prq el default va directo al link
      const sectionId = this.getAttribute("href");
      const sectionElement = document.querySelector(sectionId); // find the section element

      console.log("Clicked navbar link:", this.textContent);

      if (sectionElement) {
        sectionElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  }
  
});