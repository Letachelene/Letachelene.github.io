redirectIfLog();

function signin()
{
  //XMLHttpRequest is an javascript object who let us to communicate with the API.
  var request = new XMLHttpRequest();

  //The XMLHttpRequest method open() initializes a newly-created request
  //or re-initializes an existing one.
  //here we prepare the request for a connection
  var url = API_URL + "connection"
  request.open('POST', url, true);

  //setRequestHeader initialize the value of an HTTP request header.
  //you must call it after calling open(), but before calling send().
  request.setRequestHeader("Content-Type", "application/json");


  //this 3line take the value of the input of the html page
  //and create an object to prepare the data to be send
  var email = document.getElementById("emailR").value;
  var password = document.getElementById("passwordR").value;
  var data = {'email' : email , 'password' : password};

  //when the API give an answer we can check if everything work or not
  //the function onload is call when the API give an answer
  request.onload =  function ()
  {
    console.log("API answer " + this.status + " " + this.responseText);
    if (this.status >= 200 && this.status <= 299)
    {
      createCookie('token', JSON.parse(this.responseText).data.token);
      window.location.href = ROUTE_HOME;
    }
    else
    {
      //JSON.parse take a string in parameter
      //and convert it in an javascript object
      document.getElementById("errorStatus").innerHTML = "Error " + this.status + " : " + JSON.parse(this.responseText).data;
    }
  };

  //stringify transform the javascript object data in a string to be send
  //and understand by the server
  //the send function send your request.
  //the parameter of send is the content of your request you are sending
  request.send(JSON.stringify(data));
}

window.onload = function()
{
  var registerButton = document.getElementById("buttonR");
  registerButton.addEventListener("click", signin);
}
