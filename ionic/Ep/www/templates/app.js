var unirest = require("unirest");

var req = unirest("GET", "https://appintel.apispark.net/v1/cadastros/");

req.headers({
  "authorization": "Basic MjY4ZTE3YjktZWZkMS00MDc1LWIxNjAtNWExMDY5NTE5YmIwOjg4OTBiY2YzLTgyMTItNDE0Zi1hOTkyLWZlMWQxZWEzZGNiNA==",
  "content-type": "application/json",
  "accept": "application/json",
  "host": "appintel.apispark.net"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});