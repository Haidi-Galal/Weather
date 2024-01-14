// http://api.weatherapi.com/v1/forecast.json?key=afa91ea0b4f844738f2211329241201&q=lond&days=7
// const d = new Date("2023-12-24");
// let day= d.getDay();


let data ;
var input =document.getElementById("input");

let container =document.getElementsByClassName('section');
async function getDataByCity(city){
    let respone = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=afa91ea0b4f844738f2211329241201&q=${city}&days=7`);
//    console.log(respone);
if(respone.ok){
     data=await respone.json();
 console.log(data);
}
else{
    console.log("Error!");
}

}

 async function getParameter(){
let city =input.value;
 await getDataByCity(city);
 displayData();

}
input.addEventListener('input',getParameter);

function displayData(){
  let  days= data.forecast.forecastday;
 
//   console.log(days[0].date);
var i=0;
 let d = new Date( days[i].date);
  console.log(days[i].date);
  let splittedDate=days[i].date.split("-");
//  console.log( splittedDate[2]);

let month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novembe","December"]

  console.log(d.getMonth() );


//  console.log(getDays(d.getDay()));

    let  content =  `               
    <div class="col-md-4  ">
      <div class="card mb-3  " >
          <div class="card-header bg-head d-flex  justify-content-between   ">
           <p class="text-white-50 ">${getDays(d.getDay())}</p>
           <p class="text-white-50 ">${splittedDate[2]} ${month[d.getMonth()]}</p>
          </div>
          <div class="card-body bg-content py-5    ">
            <h5 class="card-title text-white-50 ">${data.location.name}</h5>
            <div class=d-flex   align-items-center  justify-content-center   >
            <h3 class="text-white  ">${data.current.temp_c}<span >&#176;</span>C</h3>
            <img src="https:${data.current.condition.icon}" alt="icon-umberella"  >

            </div>

            <p>${data.current.condition.text}</p>
            <div class="">
            <span class="p-2 text-white-50  fw-lighter ">20%</span>
            <img src="images/icon-wind.png" alt="wind">
            <span class="p-2 text-white-50  fw-lighter">18km/h</span>
            <img src="images/icon-compass.png" alt="compass">
            <span class="p-2 text-white-50  fw-lighter">East</span>
            </div>
      </div>
  </div>
      </div>
      <div class="col-md-4 ">
          <div class="card mb-3  " >
              <div class="card-header bg-head1 d-flex  justify-content-between   ">
               <p class="text-white-50 ">${getDays(d.getDay()+1)}</p>
               <p class="text-white-50 ">${Number(splittedDate[2])+1} ${month[d.getMonth()]}</p>
              </div>
              <div class="card-body  py-5 h-100  bg-content1 d-flex flex-column   justify-content-space-between align-items-center  ">
              <img src="https:${days[1].day.condition.icon}" class="" >
                <h4 class="text-white fs-3 ">${days[1].day.maxtemp_c}<span>&#176;</span>C</h4>
                <p class=" text-white-50 fs-4 ">${days[1].day.mintemp_c}<span>&#176;</span></p>
  
                <p class="fs-6 m-2">${days[1].day.condition.text}</p>
                
          </div>
      </div>
      </div>

      <div class="col-md-4 ">
      <div class="card mb-3  " >
          <div class="card-header bg-head1 d-flex  justify-content-between   ">
           <p class="text-white-50 ">${getDays(d.getDay()+2)}</p>
           <p class="text-white-50 ">${Number(splittedDate[2])+2} ${month[d.getMonth()]}</p>
          </div>
          <div class="card-body  py-5 h-100  bg-content d-flex flex-column   justify-content-space-between align-items-center  ">
          <img src="https:${days[2].day.condition.icon}" class="" >
            <h4 class="text-white fs-3 ">${days[2].day.maxtemp_c}<span>&#176;</span>C</h4>
            <p class=" text-white-50 fs-4 ">${days[2].day.mintemp_c}<span>&#176;</span></p>

            <p class="fs-6 m-2">${days[2].day.condition.text}</p>
            
      </div>
  </div>
  </div>
    
`
    
     container[0].innerHTML=content;
    //  console.log();
}

function getDays(num){
    let day;
    switch (num) {
        case 0:
            day="Sunday";
            break;
        
        case 1:
          day="Monday";
          break;
        case 2:
            day="Tuesday"
            break;
        case 3:
          day="Wednesday";
          break;
        case 4:
          day="Thursday";
          break;
        case 5:
          day="Friday";
          break;
        case 6:
          day="Saturday";
          break;
    
        default:
            break;
    }
    return day;
    
}
 

async function getDataByLocation(latitude,longitude){
 
     console.log(latitude,longitude);
    //  var loc1=51.52;
    //  var loc2=-0.11;
    
    let respone = await fetch("http://api.weatherapi.com/v1/forecast.json?key=afa91ea0b4f844738f2211329241201&q="+latitude+","+longitude+"&days=7");
//    console.log(respone);
if(respone.ok){
     data=await respone.json();
 console.log(data);
}
else{
    console.log("Error!");
}
}

// function geoFindMe() {
//     let latitude;
//     let longitude;
    
//   function success(position) {
//      latitude = position.coords.latitude;
//      longitude = position.coords.longitude;
//      getLattiudeAndLangttiude(latitude,longitude);
//     //  loc.toString();
//     //  console.log(loc.toString());
    

   
  

   
//   }

//   function error() {
    
//     console.log("Failed !");

   
   
  
//   }

//   if (!navigator.geolocation) {
    
   
//   } else {
//    navigator.geolocation.getCurrentPosition(success, error);
   
//   }
// }

//    geoFindMe();
 async function getLattiudeAndLangttiude(latitude ,langtiude){
    // console.log( latitude,langtiude);
     await getDataByLocation(latitude,langtiude);
     displayData();

    

 }
   
 



 $.getJSON('https://geolocation-db.com/json/')
         .done (function(location) {
          let latitude=location.latitude;
    let longitude=location.longitude;
    getLattiudeAndLangttiude(latitude,longitude);
            // $('#country').html(location.country_name);
            // $('#state').html(location.state);
            // $('#city').html(location.city);
            // $('#latitude').html(location.latitude);
             
            // $('#longitude').html(location.longitude);
            // $('#ip').html(location.IPv4);
         });
