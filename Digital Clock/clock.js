function updateClock() {
    const now = new Date();
    let dname = now.getDay(), 
    mo = now.getMonth(), 
    dnum = now.getDate(), 
    yr = now.getFullYear(), 
    hou = now.getHours(), 
    min = now.getMinutes(), 
    sec = now.getSeconds(), 
    pe = "AM";

    if(hou == 0) {
        hou = 12;
    }

    if(hou > 12) {
        hou = hou - 12;
        pe = "PM";
    }

    Number.prototype.pad = function(digits) {
        for(var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    let months = ["01", "02", "03", "04", "05", "06", "07", 
    "08", "09", "10", "11", "12"],
    week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    ids = ["year", "month", "daynum", "dayname", "hour", "minutes", "seconds", "period"],
    values = [yr, months[mo], dnum.pad(2), week[dname], hou.pad(2), min.pad(2), sec.pad(2), pe];
    for(let i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];

}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}