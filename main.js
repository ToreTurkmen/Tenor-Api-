var apikey = "AIzaSyAgJm7cIZIbsBdmKK4wet_bk_-hl6WfQtg";
var clientkey = "My Project";
var lmt = 10;

$( "#main-form" ).submit(function( event ) {
  event.preventDefault();
 
  var search_term = $("input").val();
    

  var search_url = "https://tenor.googleapis.com/v2/search?q=" + search_term + "&key=" +
  apikey +"&client_key=" + clientkey +  "&limit=" + lmt;


  var xhr = new XMLHttpRequest();
  xhr.open("GET", search_url);
  xhr.onload = function()
  {
      if (xhr.readyState == 4 && xhr.status == 200)
      {
        var user = JSON.parse(this.responseText)
        
        for(let i = 0; i < user["results"].length; i++){
          
          var myImg = user["results"][i]["media_formats"].gif.url;
          $("#result").append("<img src=" + myImg +">")
        }
      }
  }
 
  xhr.send();


 
});