/**
 * @kebabize
 * Convert a camel case string into a kebab case.
 * @param {String} 
 *  
 * @returns {String} string is returned in Kebab case 'camels-have-humps'
 */


function kebabize(kebab){
    kebab = kebab.split('')
    for(l in kebab ){
        if (kebab[l] === kebab[l].toUpperCase()){
            kebab[l] = '-' + kebab[l].toLowerCase();
        }
    } 
    return kebab.join('')
}
console.log(kebabize('camelsHaveHumps'))