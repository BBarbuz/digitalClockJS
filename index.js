
function showDate(){

    const now = new Date()

    let hour = now.getHours();                      // Get time
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
 
    if (Number(seconds) < 10){                      // Shows in correct format with zeros
       seconds = "0" + String(seconds); 
    }
    if (Number(minutes) < 10){
        minutes = "0" + String(minutes);
    }

    let timeFormat = document.getElementById("slider").value;
    let showTime;                                  // stores ready to show time formated string 

    if (timeFormat == 0){                          // 24h or 12h checker           

        if (hour < 10){                            // Shows in correct format with zeros
            hour = "0" + String(hour);
        }
        
        showTime = `${hour} : ${minutes} : ${seconds}`;
    }
    else{
        const meridiem = hour >= 12 ? "PM" : "AM";  // Set AM or PM  
        hour = hour % 12 || 12;

        if (hour < 10){                             // Shows in correct format with zeros
            hour = "0" + String(hour);
        }

        showTime = `${hour} : ${minutes} : ${seconds} ${meridiem}`;
        
    }
    
    let timeBlock = document.getElementById("clock");
        timeBlock.textContent = showTime;

        // JavaScript to handle Dark Mode toggle
        const toggleDarkModeButton = document.getElementById('toggleDarkMode');
        const body = document.body;

        toggleDarkModeButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
        });
}

showDate();
setInterval(showDate, 1000);