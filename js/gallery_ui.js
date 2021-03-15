

function display_galerie(galerie){
    let galleryHTML = galerie.photo.forEach(e => 
        `<div class="vignette">
        <img data-uri="${galerie.photos.links.self.href}"
          src="${galerie.photos.photo.thumbnail.href}">
        </div>
        `);

    let galleryContainer = document.getElementById("gallery_container");
    galleryContainer.innerHTML = galleryHTML;
}

export default{
    display_galerie
}