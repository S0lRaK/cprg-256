//read data with jquery

$( document ).ready(function() {
    console.log( "ready!" );
    var output="";
    $.ajax({ 
    type: 'GET', 
    url: 'newrecords.json', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        $.each(data, function(index, element) {
         output+=element.name;
         output+=element.email;
         output+=element.company;
         output+="<br>";
        });
        $("#records").html(output);
    }
});
});