



function insertSort(array) {
  
    for (let j = 0; j < array.length; j++) {

        let i = j - 1;
        let current = array[j];

        while (i >= 0 && array[i] > current) {

            array[i + 1] = array[i];
            i--;
        }

        array[i + 1] = current;
    }
    return array;
}


console.log(insertSort([3, 5, 1, 7]))