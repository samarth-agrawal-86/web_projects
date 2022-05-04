module.exports.getDateDay = getDateDay;

function getDateDay(params) {
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