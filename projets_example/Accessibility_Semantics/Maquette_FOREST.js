window.onload = function()
{
  var box = document.getElementsByTagName("button");
  box[0].onclick = function()
  {
      var send = prompt("Confirmez vos coordonnées !");
      while (send == null || send == "")
        {
          send = prompt("Please fill the form");
        }
      if (send !== null || send !== "")
        if(confirm("Please could you confirm your name and email ?"))
        {
          alert("Envoyé !");
        }
        else {
          alert("error!");
        }

  box.innerHTML = "Envoyé !";
  }
}
