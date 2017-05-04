$("#iff").click(function(){
var value = $("#iff").attr("value");
$("$mes").toggle("fast");

if (value == "DO"){
$("#iff").attr("value" ,"DONT");
}else if (value == "DONT"){
$("#iff").attr("value" ,"DO");
}

});
