function addToJson(){
    var inputes=document.querySelectorAll("input");
    var info=[inputes[0].value,inputes[1].value,inputes[3].value];
    var tags=inputes[2].value;
    var membres =document.querySelector("textarea").value;
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
         console.log(this.responseText);
       }
     };
     xhttp.open("POST", "main.php", true);
     xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
     xhttp.send("info="+info+"tags="+tags+"membres="+membres+"");
}