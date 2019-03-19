//read data with jquery


$( document ).ready(function() {

$.getJSON('newrecords.json', null, function(data) {
  processData(data);
});



function processData(data) {
var output="";
  $.each(data, function(index, element) {
         output+=element.name;
         output+=element.email;
         output+=element.company;
         output+="<br>";
        });
        $("#records").html(output);

}
});