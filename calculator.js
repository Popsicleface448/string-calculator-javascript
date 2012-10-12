var add = function(string) {
  var digits = function() {

  	var findCustomDelimiter = function(){
    		return string.substring(2, findNewline());  
  	};

  	var hasCustomDelimiter = function(){
    		return string.indexOf('//') > -1;
  	};

	var findNewline = function() {
    		return string.indexOf('\n');
	};
  	var extractString = function(){ 
  		return hasCustomDelimiter() ? string.slice(findNewline() + 1) : string;
  	};
    
  	var createDelimiter = function(){
    		var delimiter = ',\n';
   		if(hasCustomDelimiter()){
			delimiter = findCustomDelimiter() + delimiter; 
    		}		
		return '[' + delimiter + ']';
  	};
 
	var arr = [], delimiter = new RegExp(createDelimiter()),
        tokens = extractString().split(delimiter);
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
