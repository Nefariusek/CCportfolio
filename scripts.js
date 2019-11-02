function count() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    mminutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById("clock").innerHTML =
    hours + ":" + minutes + ":" + seconds;

    setTimeout("count();", 1000);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }