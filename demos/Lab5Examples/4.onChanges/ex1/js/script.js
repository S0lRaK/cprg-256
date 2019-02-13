function convertImperialValue(val) {
  //converts imperial  amount 'val' into centimetres
  var cm = parseFloat(0);
  cm = val * 12 * 2.54;
  //push back into metric value
  document.getElementById("metric").value = cm.toFixed(2);
}

function convertMetricValue(val) {
  //converts metric amount 'val' to feet
  var feet = parseFloat(0);
  feet = val * 0.0328084;
  document.getElementById("imperial").value = feet.toFixed(2);
}