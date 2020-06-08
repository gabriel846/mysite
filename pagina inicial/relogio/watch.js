function updateTime () {
    var date = new Date();//variavel data/dia da semana
    var hour = date.getHours();//variavel de horas 
    var minutes = date.getMinutes();//variavel de minutos 
    var seconds = date.getSeconds();//variavel de segundos

    hour = hour < 10 ? '0' + hour : hour;// 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;


    var eHour = document.querySelectorAll('.hour')[0];
    var eMin = document.querySelectorAll('.minutes')[0];
    var eSec = document.querySelectorAll('.seconds')[0];

    eHour.innerHTML = hour;
    eMin.innerHTML = minutes;
    eSec.innerHTML = seconds;

    var today = date.getDay();
    var arrDays = ['domingo',
                   'segunda-feira',
                   'terça-feira',
                   'quarta-feira',
                   'quinta-feira',
                   'sexta-feira',
                   'sabado',];
     var eToday = document.querySelectorAll('.today')[0];
     eToday.innerHTML = arrDays[today];
    }

    updateTime();
    window.setInterval(updateTime, 500);
     