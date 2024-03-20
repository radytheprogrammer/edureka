var promise = new Promise(function (resolve, reject) {
    const a = "Node.js";
    const b = "Node.js";
    if (a == b) {
        resolve();
    } else {
        reject();
    }

}).then(function () {
    console.log("Strings are the same");
}).catch(function () {
    console.log("Strings are not the same or some error occured");
});