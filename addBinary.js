var addBinary = function(a, b) {
  var toDecimal = function(str) {
    var sum = 0;
    var power = 0;
    for (var i = str.length - 1; i >= 0; i--) {
      var num = Number(str[i]);
      if (num) {
        sum += Math.pow(2, power);
      }
      power++;
    }
    return sum;
  };

  var toBinary = function(decimal) {
    var binaries = [];
    var num = decimal;

    var bisect = function(num) {
      if (!num) {
        return;
      }

      binaries.unshift(num % 2);
      num = Math.floor(num / 2);
      bisect(num);
    };

    bisect(num);
    if (!binaries.length) {
      binaries.push(0);
    }
    binaries.forEach(function(x) {
      x = JSON.stringify(x);
    });
    return binaries.join("");
  };

  var decimalSum = toDecimal(a) + toDecimal(b);
  console.log(decimalSum);
  return toBinary(decimalSum);
};

var output = addBinary(
  "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
  "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
);
