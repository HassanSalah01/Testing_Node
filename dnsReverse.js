dns.reverse("8.8.8.8", (err, val) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(`8.8.8.8 IP Belong To : ${val}`);
    }
});
