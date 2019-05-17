function image()
{
  var myWay = document.getElementById("chemin");
  var myImage = document.getElementById("image");
  //console.log(myImage.src);
  //var newImage = new Image;
  //var select_image = input type="file" name="friends" accept="image/*"
  //var files = myWay.files;
  myWay.onchange = function()
  {
  console.log(myImage.src);
    myImage.src = myWay.value;
  //newImage = this;
  }


  document.getElementById("chemin").addEventListener('change', function()
  {
      if (this.files && this.files[0]) {
      var img = document.getElementById('image');
      img.src = URL.createObjectURL(this.files[0]);
    }
  })

}




  //newImage.src = "http://localhost:8888/Jean_et_Bel.jpg";
  //newImage.onload = function()

  //myImage.onclick = function ()
  //{
    //  console.log("bonjour");
      //  myImage.src = newImage;
//  }
  //myImage.src = newImage.src;
  //console.log(newImage);




  /*myImg.addEventListener('load', function()
  { // Étape 1 : on modifie notre événement


  });


  myImg.src = 'adresse_de_mon_image';*/


//nommer les images en variable
/*+ function image(){if(onclick(nom de l'image == true) || (nom de l'image2 == true) )
return [user_list];}

var verif = document.getElementsById("button");
verifAdEventlistener();



  var button = document.getElementsById("button");

  image.onclick = function()
{
  //alert("click");
  song.play();
};

}


var myImage = new Image(100, 200);
myImage.src = 'picture.jpg';*/
