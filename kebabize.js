/**
 * @kebabize
 * Convert a camel case string into a kebab case.
 * @param {String} 
 *  
 * @returns {String} string is returned in Kebab case 'camels-have-humps'
 */


function kebabize(kebab){
    var kebab = kebab.split('')
    for(l in kebab ){
        if (kebab[l] === kebab[l].toUpperCase()){
            console.log(kebab[l]);
        }
    } 
    return kebab
}

console.log(kebabize('camelsHaveHumps'))