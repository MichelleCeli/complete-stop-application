/* var test = fetch("/data/driver_route_sample.json")
  .then(response => response.json());
 */


var stop_number = 1;
var stop_data;

var stop_name;
var street;
var postal_code;
var city;
var country;
var latitude;
var longitude;

 async function getStops(stop_number){
 const response = await fetch("/data/driver_route_sample.json");
 const data = await response.json();
  console.log(data.stops[stop_number].name);

  stop_name = data.stops[stop_number].name;
  street = data.stops[stop_number].address.street;
  postal_code = data.stops[stop_number].address.postal_code;
  city = data.stops[stop_number].address.town;
  country = data.stops[stop_number].address.country;
  latitude = data.stops[stop_number].address.lat;
  longitude = data.stops[stop_number].address.lon;

  document.getElementById("stop-name").innerHTML = stop_name; 
  document.getElementById("street-pc").innerHTML = street + " " + postal_code; 
  document.getElementById("city-country").innerHTML = city + ", " + country; 
  document.getElementById("lat_long").innerHTML = latitude + ", " + longitude;  


 }

 

 getStops(stop_number);