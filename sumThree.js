var sumThree = function(array) {
	// input: array of integers
  // constraint: no repeats, no doubly counted numbers

  // for each element in array
    // for each secondary element in array at greater starting index
      // for each tertiary element in array at greater starting index
        // if that third element to-be-compared is defined
          // sum three elements
          // if sum === 0
            // push subarray into results array


	// output: array of arrays, with each subarray's contents summing to zero


	var zeroSums = [];

	for (var i = 0; i < array.length - 2; i++) {
		for (var j = i + 1; j < array.length - 1; j++) {
			for (var k = j + 1; k < array.length; k++) {
				if (array[k] !== undefined) {
					var sum = array[i] + array[j] + array[k];
					if (sum === 0) {
						zeroSums.push([array[i], array[j], array[k]]);
					}
				}
			}
		}
	}

	return zeroSums;
};

	// sort each subarray
	// for each element in results array
	  // for each element afterwards in results array
	  	// if equal with an element after
	      // tag location of subarray for later splicing
	// splice out tagged elements


	// var spliceThese = [];

	// for (var i = 0; i < zeroSums.length - 1; i++) {
	// 	for (var j = i + 1; j < zeroSums.length; j++) {

	// 	}
	// }
