var add = function(string) {
  var digits = function() {

  	var findCustomDelimiter = function(string){
    	return string.substring(2, findNewline(string));  
  	};

  	var hasCustomDelimiter = function(string){
    	return string.indexOf('//') > -1;
  	};

		var findNewline = function(string) {
    	return string.indexOf('\n');
		};
  	var extractString = function(string){ 
  		return hasCustomDelimiter(string) ? string.slice(findNewline(string) + 1) : string;
  	};
    
  	var createDelimiter = function(string){
    	var delimiter = ',\n';
   		if(hasCustomDelimiter(string)){
				delimiter = findCustomDelimiter(string) + delimiter; 
    	}
	  	return '[' + delimiter + ']';
  	};
 
		var arr = [], delimiter = new RegExp(createDelimiter(string)),
        tokens = extractString(string).split(delimiter);
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
