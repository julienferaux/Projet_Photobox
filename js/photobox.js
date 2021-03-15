import photoloader from "./photoloader.js";
import gallery from "./gallery.js";
import ui from "./gallery_ui.js";

document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    let promesse = gallery.load();
    promesse.then(ui.display_galerie);
  })
