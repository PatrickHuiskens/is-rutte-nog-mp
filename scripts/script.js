window.onload = function() {
    // Month Day, Year Hour:Minute:Second, id-of-element-container
    countUpFromTime("Oct 14, 2010 13:15:00", 'countup1');

    var timerText = getRandom(chooseOption, 'timer');
    document.getElementsByClassName('timertext')[0].innerHTML = timerText.value;
};

var chooseOption = {
    timer: ["Het duurt al...", "Volgens mijn actieve herinnering is dit al...", "Nog geen functie elders sinds...", "Al normaal en rustig voor...", "Voor 16 miljoen bazen sinds..."], 
}

function getRandom(obj, item){
  var itemArr = obj[item];
  var index = Math.round((Math.random() * itemArr.length)) % itemArr.length;

  return {
    property:itemArr,
    index: index,
    value: itemArr[index],
  }
}

function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);
        
    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;
        
    days = Math.floor(timeDifference / (secondsInADay) * 1);
    years = Math.floor(days / 365);
    if (years > 1){ days = days - (years * 365) }
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('years')[0].innerHTML = years;
    idEl.getElementsByClassName('days')[0].innerHTML = days;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
    idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
}