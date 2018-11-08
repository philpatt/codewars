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
        console.log('**',kebab[l])
        if (kebab[0] === kebab[0].toUpperCase()){
            console.log('here 1', kebab[l]);
            kebab[l] = kebab[l].toLowerCase();
        } else if (parseInt(kebab[l])) {
            console.log('here 2', kebab[l]);
            kebab.splice(l, 1);
        } else if (kebab[l] === kebab[l].toUpperCase()) {
            console.log('here 3', kebab[l]);
            kebab[l] = '-' + kebab[l].toLowerCase();
        }
    } 
    return kebab.join('')
}
console.log(kebabize('myCamelHas3Humps'))