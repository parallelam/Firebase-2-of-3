let arr = [2, 5, 6, 4, 5];
// Less efficient solution:
var findDuplicate = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j ++){
            return arr[i];
        }
    }
}
// More efficient solution:
var firstDup = function(arr) {
    var dupArr = [];
    for (var i = o; i < arr.length; i++) {
        var val = arr[i]
        if (dupArr[val]) {
            return val;
        }
        else {
            dupArr[val] = true;
        }
    }
}