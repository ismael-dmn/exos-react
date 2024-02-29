/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 tableaux passés en paramètres
 * 
 * ex: [1, 2, 3], [4, 5, 6] => [1, 2, 3, 4, 5, 6]
 * 
 * contrainte: 
 *  - ne pas utiliser la méthode concat, map, merge, push
 *  - for, foreach, while, do while sont interdits
 */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concat = (arr1, arr2) => (newArr = [...arr1, ...arr2])
//console.log(concat(arr1, arr2))

/**
 * utiliser l'opérateur de composition ... afin d'ajouter un élément à un tableau
 * 
 * ex: [1, 2, 3], 4 => [1, 2, 3, 4]
 * 
 * contrainte:
 * - ne pas utiliser la méthode push
 */

const push = (arr1, item) => (newArr2 = [...arr1, item])
//console.log(push(arr1, 4))

/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 objets passés en paramètres
 * 
 * ex: {a: 1, b: 2}, {c: 3, d: 4} => {a: 1, b: 2, c: 3, d: 4}
 */

const obj1 = {a: 1, b: 2};
const obj2 = {c: 4, d: 5};
const merge = (obj1, obj2) => (newObj = {...obj1, ...obj2})
//console.log(merge(obj1, obj2))

/**
 * utiliser l'opérateur de composition ... afin de modifier la propriété name de l'objet
 * 
 * ex: {name: 'toto'}, 'titi' => {name: 'titi'}
 * 
 * contrainte:
 *  - interdiction d'utiliser l'opérateur d'affectation "="
 */

const obj = {name: 'toto', age: 20};
const setName = (obj, name) => (newObj2 = {...obj, name: name})
//console.log(setName(obj, 'titi'))

// astuce: {...obj} crée une copie de l'objet, c'est un des principes de l'immutabilité et évite les problèmes de référence
module.exports = {concat, push, merge, setName}