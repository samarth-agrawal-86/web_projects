module.exports.getDateDay = getDateDay;

function getDateDay(params) {
    // const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // var dt = new Date();
    // var d = dt.getDay();
    // var dayName = weekday[d];
    // res.render('list', {day:dayName, listItems:personalItems});
    let options = {
        weekday: "long",
        day: 'numeric',
        month: "long",
    };
    let dt = new Date();
    let dateDay = dt.toLocaleDateString('en-US', options);
    return dateDay
}

module.exports.getDayName = getDayName;

function getDayName(params) {
    let options = {
        weekday: "long"
    };
    let dt = new Date();
    let dayName = dt.toLocaleDateString('en-US', options);
    return dayName
}