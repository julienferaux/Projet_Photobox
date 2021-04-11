let photoboxServer = "https://webetu.iutnc.univ-lorraine.fr"

/*
let photoboxPointEntre = "https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/"

function loadPicture(idPicture){
    return fetch(photoboxPointEntre+"/photos/"+idPicture,{credentials : 'include'})
    .then(response => {
      if (response.ok){
        return response.json();
      }
      console.log("response error : "+response.status);
    })
    .catch(error => {
      console.log("Ooops il y a eu une erreur : "+error);
    });
}
*/

function loadRessource(uri){
    return fetch(photoboxServer+uri, {
      credentials: 'include'
    })
    .then(response => {
      if (response.ok)return response.json();
      console.log("response error : "+response.status);
    })
    .catch(error => {
      console.log("Ooops une erreur s'est produite: "+error);
    })
}

export default{
    loadRessource: loadRessource
}