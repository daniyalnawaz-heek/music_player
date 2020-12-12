
 
var call = (url)=>{
  

  fetch(`api.openweathermap.org/data/2.5/weather?q=London&appid={9269bb17f6283e5b4281dd9412c9cac7}`).then((res)=>{
    res.json();
   }).then((data)=>{
     console.log(data)});
};
