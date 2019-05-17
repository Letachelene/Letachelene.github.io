
/* Contantes */

const API_URL = "https://api.snapchat.wac.epitech.eu/"; // URL of API

const ROUTE_SIGNIN = 'signin.html';
const ROUTE_HOME = 'index.html';

const TOKEN_COOKIE_NAME = 'token'; // Name of token's cookie

/* Cookie's functions */

/*
** @brief   Create a cookie
** @param   cname : name of the cookie
** @param   value : value store in the cookie
** @param   expHours : number of hours before cookie's expiration
*/
function createCookie(cname, value, expHours = 1)
{
    var d = new Date();
    /*new date = la date d'aujourd'hui */

    d.setTime(d.getTime() + (expHours*60*60*1000));
    /*1000 signifie millième de seconde: formule
    totale= expire au bout d'une heure */
    var expires = "expires="+ d.toUTCString();
    /*c'est le string UTCS (format de date) */
    document.cookie = cname + "=" + value + ";" + expires + ";path=/";
      /*explication : le ";" indique le format d'écriture du cookie */
}

/*
** @brief   Delete a cookie
** @param   cname : name of the cookie
*/
function deleteCookie(cname)
{
    var d = new Date();
    /* je récupère la date d'aujourd'hui*/
    d.setTime(0);
    /* formule pour que le cookie expire*/
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + ";" + expires + ";path=/";
}

/*
** @brief   Get value of cookie
** @param   cname : name of the cookie.
** @return  value store on the cookie or empty string if not found.
*/
  function getCookie(cname)
  /* cname = le nom du cookie + = */
  {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    /* decodeURIComponent : traduit en format URL*/
    var carray = decodedCookie.split(';');
    /* split : permet de découper une string en tableau*/

    for(var i = 0; i <carray.length; i++)

    {
        var c = carray[i];
        while (c.charAt(0) == ' ')
        /* = tant que mon 1er caractère est un espace,
        je génère une nouvelle string en supprimant le 1er caractère*/
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0)
        /* Index of = va chercher une occurence d'une string*/
        {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }

  /* Layout functions */

  function logout()
  {
      deleteCookie(TOKEN_COOKIE_NAME);
      window.location.href = ROUTE_SIGNIN;
  }

  function redirectIfLog()
  {
      if (getCookie(TOKEN_COOKIE_NAME) !== '')
      /* cad = si mon cookie n'est pas vide, j'ai qque chose...
      donc(ci dessous): */
      {
        window.location.href = ROUTE_HOME;
        /* .... alors redirige toi vers ma page HOME): */
      }
  }

  function redirectIfNotLog()
  {
      if (getCookie(TOKEN_COOKIE_NAME) === '')
      {
        window.location.href = ROUTE_SIGNIN;
      }
  }
