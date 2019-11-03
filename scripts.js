function countStart() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;

    time = setTimeout("countStart()", 1000);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }