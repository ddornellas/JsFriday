var 
    x, 
    now, 
    days, 
    hours, 
    minutes, 
    seconds, 
    distance,
    dia_semana, 
    dia_mes, 
    mes, 
    mes_sexta, 
    ano, 
    proxima_sexta, 
    daysInMonth, 
    countDownDate,
    audioClick,
    redondo,
    contador; 

audioClick = new Audio('friday.mp3');

redondo = document.getElementById('redondo');

contador = document.getElementById('contador');

dia_semana = new Date();
dia_semana = dia_semana.getDay();

dia_mes = new Date();
dia_mes = dia_mes.getDate();

mes = new Date();
mes = mes.getMonth();

mes_sexta = new Date();
mes_sexta = mes_sexta.getMonth();

ano = new Date();
ano = ano.getFullYear();


daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // If evenly divisible by 4 and not evenly divisible by 100,
  // or is evenly divisible by 400, then a leap year
  if ((!(ano % 4) && ano % 100) || !(ano % 400)) {
    daysInMonth[1] = 29;
  }


if (dia_semana === 0){
    
   proxima_sexta = ((5 - dia_semana) + dia_mes)-1;
    
   if (proxima_sexta > daysInMonth[mes]){
       
       proxima_sexta = proxima_sexta - daysInMonth[mes];
       
       mes_sexta++;
       
   }
    
} else if (dia_semana <= 5){
    
    proxima_sexta = ((5 - dia_semana) + dia_mes); 
    
      if (proxima_sexta > daysInMonth[mes]){
       
       proxima_sexta = proxima_sexta - daysInMonth[mes];
       
       mes_sexta++;
       
   }
    
    
} else{
    
    proxima_sexta = (dia_mes + 5); 
    
      if (proxima_sexta > daysInMonth[mes]){
       
       proxima_sexta = proxima_sexta - daysInMonth[mes];
       
       mes_sexta++;
       
   }
    
}



// Set the date we're counting down to
countDownDate = new Date((mes_sexta + 1) + " " + proxima_sexta+", " + ano +" 18:00:00").getTime();

// Update the count down every 1 second
x = setInterval(function() {

// Get todays date and time
now = new Date().getTime();

// Find the distance between now an the count down date
distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
days = Math.floor(distance / (1000 * 60 * 60 * 24));
hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="contador"
if (days === isNaN || hours === isNaN || minutes === isNaN || seconds === isNaN ){

   contador.innerHTML = "error";   
} else{
 
    contador.innerHTML = days + "<span class='horario'>d </span>" + hours + "<span class='horario'>h </span> "
+ minutes + "<span class='horario'>m </span> " + seconds + "<span class='horario'>s </span> ";  
}  


// If the count down is finished, write some text 
if (distance < 0) {
clearInterval(x);
contador.innerHTML = "EXPIRED";
  }
}, 1000);



//detecta click
redondo.addEventListener('click', function(){
audioClick.play();

});