function firstDuplicateValue(array){
    let number=[];
    for (let i = 0; i < array.length; i++) {
        if (number.indexOf(array[i]) !== -1) {
            return (array[i]);
        }
        number.push(array[i]);
    }
    return -1
}

exports.firstDuplicateValue =  firstDuplicateValue;
