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

var orders_listed;
var order_div;
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

  orders_listed = document.getElementById("orders-listed");
  order_div = document.getElementById("order1");
  for (let i in data.stops[stop_number].orders) {
    console.log(data.stops[stop_number].orders[i].stream_type);
      
    if(i == 0){
    order_div.children[1].innerHTML = data.stops[stop_number].orders[i].stream_type;
    order_div.children[4].defaultValue = data.stops[stop_number].orders[i].quantity;
    }
    else {
    var nextOrder;
    nextOrder = $( "#order1" ).clone().appendTo( "#orders-listed" );
    console.log("order: " + nextOrder);
    orders_listed.children[i].children[1].innerHTML = data.stops[stop_number].orders[i].stream_type;
    orders_listed.children[i].children[4].innerHTML = data.stops[stop_number].orders[i].stream_type;
    //nextOrder.children[1].innerHTML = data.stops[stop_number].orders[i].stream_type;
   /*  nextOrder = order_div.clone
    nextOrder = node.appendChild(textnode) */
    }

  } 
  


 }

 

 getStops(stop_number);