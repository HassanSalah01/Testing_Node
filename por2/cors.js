var express = require("express")
var cors = require("cors")
var app = express()

app.use(cors())

app.get("/", function (req, res, next) {
  res.json({
    name: "sara",
    age: 15,
    image:
      "https://www.google.com/search?q=mime+type+css&sxsrf=ALiCzsZ0LrKlK7P6TyLI8ZpDFtiuUZ-zRw:1658610324303&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiCqc359I_5AhWDW_EDHbvhBdMQ_AUoAXoECAEQAw&biw=1920&bih=937&dpr=1#imgrc=z4KBU1s1NUUhoM",
  })
})

app.listen(3000, function () {
  console.log("CORS-enabled web server listening on port 80")
})
