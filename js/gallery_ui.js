import load from "./lightbox.js";

function display_galerie(galerie){
    let galleryHTML = galerie.photos.reduce((codeHTML, e)=>codeHTML +
        `<div class="vignette">
        <img data-uri="${e.links.self.href}"
          src="https://webetu.iutnc.univ-lorraine.fr${e.photo.thumbnail.href}" onclick=load();>
        </div>
        `, "");
    let galleryContainer = document.getElementById("gallery_container");
    galleryContainer.innerHTML = galleryHTML;

}

export default{
    display_galerie
}