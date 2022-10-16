const dns = require("dns");
dns.lookup("www.facebook.com", (err, add, ipVer) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(`FaceBook IP : ${add}`);
        console.log(`Ip Version ${ipVer}`);
    }
});


