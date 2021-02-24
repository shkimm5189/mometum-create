const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const currentTime = {
        getHour : date.getHours(),
        getMin : date.getMinutes()
    } ;
    clockTitle.innerText = `${currentTime.getHour} :${currentTime.getMin}`;
}
function init(){
    setInterval(getTime,1000);
}

init();