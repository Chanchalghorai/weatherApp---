const cityName=document.getElementById('cityName');
const submitBtn=document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');
const data_hide=document.querySelector('.middle_layer');
const day1=document.getElementById("day");
const today_data=document.getElementById("today_data");
const month2=document.getElementById("month");


const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText=`plz write the name before search`;
        data_hide.classList.add('data_hide');
    }else{
        try{
            let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=e8127b190b9899d88133ada16148dc09`;
            //e8127b190b9899d88133ada16148dc09
            const response = await fetch(url);
            const data=await response.json();
            const arrData=[data];
            console.log(arrData);



            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText=arrData[0].main.temp;
            const tempMood=arrData[0].weather[0].main;

           //condition to check sunny or cloudy
           if(tempMood==="Clear"){
            temp_status.innerHTML="<i class='fa-solid fa-sun' style='color:#eccc68'></i>";
           }else if(tempMood==="Clouds"){
            temp_status.innerHTML="<i class='fa-solid fa-cloud' style='color:#eccc68'></i>";
           }else if(tempMood==="Rain"){
            temp_status.innerHTML="<i class='fa-solid fa-cloud-rain' style='color:#eccc68'></i>";
           }else{
            temp_status.innerHTML="<i class='fa-solid fa-sun' style='color:#eccc68'></i>";
           }

           data_hide.classList.remove('data_hide');

           //day
           
           const d = new Date();
           let day = d.getDay()
           let date = d.getDate();

           day1.innerHTML = day;
           today_data.innerText=date;
           
           
           const m = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
           day1.innerHTML =m[day];
           const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
           let name = month[d.getMonth()];
           month2.innerHTML=name;
           console.log(name);

        //SwitchCase statement.........>>

        // let t=day;
        // switch(t){
        //     case 0:document.getElementById("day").innerHTML ="Sunday" ;
        //     break;
        //     case 1:document.getElementById("day").innerHTML ="Monday" ;
        //     break;
        //     case 2:document.getElementById("day").innerHTML ="Tuesday" ;
        //     break;
        //     case 3:document.getElementById("day").innerHTML ="Wednesday" ;
        //     break;
        //     case 4:document.getElementById("day").innerHTML ="Thrasday" ;
        //     break;
        //     case 5:document.getElementById("day").innerHTML ="Friday" ;
        //     break;
        //     case 6:document.getElementById("day").innerHTML ="Suturday" ;
        //     break;
        // }


        }catch{
            city_name.innerText=`plz enter the city name properly`;
            data_hide.classList.add('data_hide');
        }
       
    }
}

submitBtn.addEventListener("click",getInfo);