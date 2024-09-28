document.addEventListener('DOMContentLoaded', () => {  
    const start = document.getElementById('start');  
    const stop = document.getElementById('stop');  
    const reset = document.getElementById('reset');  
    const counter = document.querySelector('.counter');  

    let hours = 0;  
    let minutes = 0;  
    let seconds = 0;  
    let intervalId;  

    
    const formatTime = (value) => (value < 10 ? `0${value}` : value);  

start.addEventListener('click', () => {  
        intervalId = setInterval(() => {  
            seconds++;  
            if (seconds >= 60) {  
                seconds = 0;  
                minutes++;  
                if (minutes >= 60) {  
                    minutes = 0;  
                    hours++;  
                }  
            }  
            counter.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;  
        }, 1000);  
    });   
stop.addEventListener('click', () => {  
        clearInterval(intervalId);  
        counter.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;  
    });  
reset.addEventListener('click', () => {  
        hours = 0;  
        minutes = 0;  
        seconds = 0;  
        counter.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;  
    });
    
});












