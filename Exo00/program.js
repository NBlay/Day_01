array = [1, 2 , 4, 5, 9];

function tabTriCarre(array){
    multipliedArr = [];
    array.forEach(element =>{
        multipliedArr.push(element*element)
    })
    multipliedArr.sort((a,b) =>a-b)
    return multipliedArr
}

// Merci de ne pas effacer la ligne en dessous.
exports.tabTriCarre =  tabTriCarre;
