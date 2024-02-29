const {sleep} = require("../exos-react/10_promise.js");

/**
 * Créez une fonction synchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser .then
 * 
 * contrainte:
 *    - votre fonction doit être synchrone et ne pas retourner de Promise
 *    - ne pas utiliser async await
 * 
 */
const usingThen = (cb) => {
    //console.log("start");
    sleep().then(() => {
        //console.log("end");
    });
};
usingThen();

/**
 * Créez une fonction asynchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser await
 * 
 * contrainte:
 *   - votre fonction doit être asynchrone et retourner une Promise
 *   - ne pas utiliser .then
 */

const usingAwait = async (cb) => {
    //console.log("start");
    await sleep();
    //console.log("end");
};
usingAwait();

/**
 * Créez une fonction asynchrone qui effectue un appel api vers l'url passé en paramètre
 * retourne le résultat de la requête (body)
 * 
 * Vous pouvez utiliser axios, mais n'oubliez pas d'installer le package et de l'importer
 * npm install axios
 * 
 * votre réponse doit être un objet json
 * 
 * url de test: https://jsonplaceholder.typicode.com/todos/1
 */

//décommentez la ligne suivante une fois le package installé

const axios = require("axios");

/*const apiResponse = async (url) => {
    const request = () => new Promise(resolve => setTimeout(resolve, axios.get(url)));
    request().then(data => {
        console.log("Résultat de la requête API :", data);
    });
};*/

const apiResponse = async (url) => {
    const response = await axios.get(url);
    return response.data;
};

apiResponse("https://jsonplaceholder.typicode.com/todos/1")
.then(data => {
    console.log("Résultat de la requête API :", data);
});

module.exports = {usingThen, usingAwait, apiResponse};