
    var xhttp=new XMLHttpRequest();
    var myTableBody=document.querySelector("tbody");
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
        //
          let users=JSON.parse(this.responseText);
          for(let i=0;i<users.length;i++){
              myTableBody.insertAdjacentHTML("beforeend",
              "<tr><td>"+users[i].Sujet+
              "</td><td>"+users[i].dateExpose+"</td><td>"+users[i].Tags+
              "</td><td>"+users[i].lien+"</td><td>"+users[i].Membres+"</td>");
          }
        }
    }
    xhttp.open("GET","users.json");
    xhttp.send();
