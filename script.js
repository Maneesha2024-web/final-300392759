// get the date from the input field
function getDate() {
    let targetDate =document.getElementById('birthday').value;
    console.log(targetDate);
    return targetDate;
}

// start the countdown
function start() {

    // Set the date we're counting down to
    let targetDate=getDate();
    

    var countDownDate = new Date(targetDate);
    console.log(countDownDate);
    setInterval("start()", 10000)
    // Update the count down every 0.1 second

        // Get today's date and time
            var now = new Date()
        // Find the distance between now and the count down date
            var timeDistance = countDownDate - now
            
        if(timeDistance<0){
            //document.getElementById('demo').innerHTML = "Expired"
            alert("Date is Expired");
        }else{
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(timeDistance/1000/60/60/24)
            var hours = Math.floor((timeDistance %(1000*60*60*24))/1000/60/60)
            var minutes = Math.floor((timeDistance %(1000*60*60))/1000/60)
            var seconds = Math.floor((timeDistance %(1000*60))/1000)
            var deciseconds = Math.floor((timeDistance %(1000*60))/10000)
        // Output the result in an element with id="demo"
            document.getElementById('demo').innerHTML =`${days} <sub>days</sub> ${hours} <sub>hrs</sub> ${minutes}  <sub>mins</sub> ${seconds}  <sub>scnds</sub> ${deciseconds}  <sub>decscnd</sub></p>`;
        // If the count down is over, write some text 
    

        }
}

