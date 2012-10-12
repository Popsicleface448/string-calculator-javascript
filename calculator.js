var add = function(string) {
  var digits = function() {
    var arr = [],
        tokens = string.split(/[^\d|^-]/);
    for (var i = 0; i<tokens.length; i++) {
      arr.push(Number(tokens[i]));
    }

    return arr;
  }();
  
  var sum = 0;
  for (var i =0; i<digits.length; i++) {
    sum += digits[i];
  }
  return sum;
};
