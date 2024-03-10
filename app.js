const endDate = "30 March 2024 9:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate);
    const now = new Date
    const diff = (end - now) / 1000;

    if(diff < 0) return;
    console.log(diff);
    inputs[0].value = Math.floor(diff / 3600 / 24);
    
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff/ 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;



    //firstly converting into days;
    
}

//initial call
clock()



/**
 * 1 day = 24 hrs
 * 1 hr = 60 mins
 * 1 min = 60 sec
 * 60 min = 3600 sec
 */

// setInterval{
//     () => {
//         clock()
//     },
//     1000
// }

setInterval(( ) => {
    clock()
},1000) 