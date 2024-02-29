
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

/*
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
*/

const sleep = () => new Promise(resolve => setTimeout(resolve, 2000));

const asyncFunc = async () => {
    //console.log("start");
    await sleep();
    //console.log("end");
};
asyncFunc();

module.exports = {sleep};