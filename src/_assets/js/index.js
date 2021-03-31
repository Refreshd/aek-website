let scrollpos = window.scrollY
const header = document.querySelector(".l-site-header")
const headerHeight = header.offsetHeight
let headerStickyClass = "is-sticky";

const add_class_on_scroll = () => header.classList.add(headerStickyClass)
const remove_class_on_scroll = () => header.classList.remove(headerStickyClass)

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= headerHeight) { 
    add_class_on_scroll()
  }
  else { 
    remove_class_on_scroll()
  }
})