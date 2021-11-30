function firstDuplicateValue(array){
    let ref = {};
for (let i = 0; i < array.length; i++) {
    if (array[i] in ref){
        return array[i];
    }
    ref[array[i]] = i;
}
     return -1;
}

exports.firstDuplicateValue =  firstDuplicateValue;
