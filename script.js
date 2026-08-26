const links = document.querySelectorAll("nav a");

links.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const section = document.querySelector(this.getAttribute("href"));

section.scrollIntoView({
behavior:"smooth"
});

});

});

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});