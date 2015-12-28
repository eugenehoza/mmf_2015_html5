var matrix = [
    [16,5,3],
    [111,86,13],
    [7,99,2]];

function arrayMax(arr) {
    var max = arr[0][0];

    for(var i=0; i<arr.length;i++ ){
        for (var j=0; j<arr.length; j++){
            if(max<arr[i][j]) {
                max = arr[i][j];
            }
        }
    }
    return "Maximum is equals to: " + max;
}

function arrayMin(arr){
    var min = arr[0][0];
    for(var i=0; i<arr.length;i++ ){
        for (var j=0; j<arr.length; j++){
            if(min>arr[i][j]) {
                min = arr[i][j];
            }
        }
    }
    return "Minimum is equals to: "+ min;
}

console.log(arrayMax(matrix));
console.log(arrayMin(matrix));


