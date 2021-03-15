import photoloader from "./photoloader.js"

let photoboxDepart = "www/canals5/photobox/photos/?offset=0&size=10"

function load(){
    return photoloader.loadRessource(photoboxDepart);
}

export default{
    load
}