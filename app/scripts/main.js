function convert(arabic){

  var decimals = [10, 9, 5, 4, 1];
  var symbols = ['X', 'IX', 'V', 'IV', 'I'];
  var roman = "";

for (var i = 0; i< symbols.length; i++) {
      	while (arabic>= decimals[i]) {
      		roman += symbols[i];
      		arabic -= decimals[i];
      	}
      }
	return roman;
};
