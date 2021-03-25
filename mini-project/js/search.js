function find(){
    event.preventDefault();
    let xhttp =new XMLHttpRequest();
    let sujet=document.querySelector("input").value;
    let res=document.querySelector("p");
    let lien=document.querySelector(".lien");
    let found=false;
    xhttp.onreadystatechange=function(){
      if (this.readyState==4 && this.status==200){
          let users=JSON.parse(this.responseText);
          for(let i=0;i<users.length;i++){
              if(users[i].Sujet==sujet){
                 res.innerHTML="Date Expose: " +users[i].dateExpose+"<br>"+"Sujet: "+users[i].Sujet
                 +"<br>"+"Tags: "+users[i].Tags+"<br>"+"Membres: "+users[i].Membres;
                 lien.href=users[i].lien;
                 lien.innerText=users[i].lien;
                 found=true;
              }
          }
          if(!found){
              res.innerHTML="Vielle n'exists pas!!!!!!!";
          }
          
      }
    }
    xhttp.open("GET","users.json");
    xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
    xhttp.send();
}