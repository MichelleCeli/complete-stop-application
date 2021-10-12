/* var test = fetch("/data/driver_route_sample.json")
  .then(response => response.json());
 */

 async function getStops(){
 const response = await fetch("/data/driver_route_sample.json");
 const data = await response.json();
console.log(data.stops[1]);
 }

 getStops();