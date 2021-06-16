let day = new Date().getDay() //returns the day
let hour = new Date().getHours() //returns curent hour

function byDate(req, res, next) {
    if (hour > 8 && hour < 17 && day > 0 && day < 6) {
        next();
    } else {
        res.send('<h1 style="text-align:center; margin-top:70px"> Sorry we are closed </h1> <h3> Our working hours: from Monday to Friday, 9am to 17pm </h3>')
    }
}

module.exports = byDate