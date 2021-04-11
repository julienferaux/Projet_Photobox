import photoloader from "./photoloader.js";
import gallery from "./gallery.js";
import ui from "./gallery_ui.js";
import load from "./lightbox.js";

document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    let promesse = gallery.load();
    promesse.then(ui.display_galerie);
  })

document.querySelector('#previous')
  .addEventListener('click',  e => {
    let promesse = gallery.prev();
    promesse.then(ui.display_galerie);
  }) 

document.querySelector('#next')
  .addEventListener('click',  e => {
    let promesse = gallery.next();
    promesse.then(ui.display_galerie);
  }) 