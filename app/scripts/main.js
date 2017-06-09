function convert(arabic){
  roman = "";
  while (arabic >= 10) {
    roman = "X";
    arabic = arabic - 10;
  }
  while (arabic >= 5) {
    roman = "V";
    arabic = arabic - 5;
  }
  while (arabic === 4) {
    roman = "IV";
    arabic = arabic - 4;
  }
  while (arabic >= 1) {
    roman += "I";
    arabic --;
  }
  return roman;
}
