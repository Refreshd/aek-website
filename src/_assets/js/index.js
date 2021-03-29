let scrollpos = window.scrollY
const header = document.querySelector(".l-site-header")
const header_height = header.offsetHeight
let headerStickyClass = "is-sticky";

const add_class_on_scroll = () => header.classList.add(headerStickyClass)
const remove_class_on_scroll = () => header.classList.remove(headerStickyClass)

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) { 
    add_class_on_scroll()
  }
  else { 
    remove_class_on_scroll()
  }
})