var pet =("");
var allergic = confirm(" are you allergic ? ");
if (allergic == true) {
    var cute = confirm("cute [ok] creepy [cancel]? ")
    if (cute == true) pet = "bird";
    else pet = "snake";
}
else {
var outside = confirm("outside [ok] inside [cancel] pet ?")
} 
alert("try a"+ pet)
