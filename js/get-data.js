var stop_number = 1;
var stop_data;

var stop_name;
var stop_telephone;

var street;
var postal_code;
var city;
var country;
var latitude;
var longitude;

var comment;

var order_type;
var order_quantity;

 async function getStops(stop_number){
 const response = await fetch("/data/driver_route_sample.json");
 const data = await response.json();
  console.log(data.stops[stop_number].name);

  //getting data out of JSON
  stop_name = data.stops[stop_number].name;
  telephone = data.stops[stop_number].telephone;


  street = data.stops[stop_number].address.street;
  postal_code = data.stops[stop_number].address.postal_code;
  city = data.stops[stop_number].address.town;
  country = data.stops[stop_number].address.country;
  latitude = data.stops[stop_number].address.lat;
  longitude = data.stops[stop_number].address.lon;

  comment = data.stops[stop_number].comment;




  //manipulating DOM-Elements
  document.getElementById("stop-name").innerHTML = stop_name; 
  document.getElementById("street-pc").innerHTML = street + " " + postal_code; 
  document.getElementById("city-country").innerHTML = city + ", " + country; 
  document.getElementById("lat_long").innerHTML = latitude + ", " + longitude;  

  //some stops have no telephonenumber: call-btn will be removed
  if(telephone == null){
    //$("#call-btn").remove();
    $('#call-btn').prop('disabled', true);
    console.log("no telephone");
   /*  document.getElementById("#call-btn").style.backgroundColor = "#8E99AF"; */
  }

  //some stops do not have a comment: section will be removed then
  if(comment == null){
    $("#comment").remove();
  } else {
    document.getElementById("comment-text").innerHTML = comment;  
  }

  for (let i in data.stops[stop_number].orders) {
    console.log(data.stops[stop_number].orders[i].stream_type);
      
    

  } 
  


 }

 

 getStops(stop_number);