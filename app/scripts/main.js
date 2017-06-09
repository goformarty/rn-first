function convert(arabic){
  roman = "";
  if (arabic === 5) {
    roman = "V";
    arabic = arabic - 5;
  }
  if (arabic === 4) {
    roman = "IV";
    arabic = arabic - 4;
  }
  while (arabic >= 1) {
    roman += "I";
    arabic --;
  }
  return roman;
}
