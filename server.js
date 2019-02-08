const express = require("express")
const app = express()
const checkTime = () => {
  let date = new Date()
  let current_hour = date.getHours()
  let result
  current_hour >= 8 && current_hour <= 17 ? (result = true) : (result = false)
  return result
}
app.get("/", (req, res) => {
  checkTime()
    ? res.sendFile(__dirname + "/public/home.html")
    : res.sendFile(__dirname + "/public/notworking.html")
})
app.get("/contact", (req, res) => {
  checkTime()
    ? res.sendFile(__dirname + "/public/contact.html")
    : res.sendFile(__dirname + "/public/notworking.html")
})
app.get("/ourservices", (req, res) => {
  checkTime()
    ? res.sendFile(__dirname + "/public/ourservices.html")
    : res.sendFile(__dirname + "/public/notworking.html")
})
const port = process.env.PORT || 3000
app.listen(port, err => (err ? console.log("ERROR") : console.log("RUNING")))
// app.listen(3000)



