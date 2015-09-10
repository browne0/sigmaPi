// Home Route
Router.route('/', {
    name: 'home',
    action: function() {
        this.render('home');
        SEO.set({
            title: 'Home - ' + Meteor.App.NAME
        });
    }
});



Router.route("/backgrounds", {
        where: "server"
    })
    .get(function() {
        var getOS = process.platform;
        if (getOS == "darwin") {
            var fs = Npm.require("fs");
            var backgroundDirectoryPath = process.env.PWD + '/public/images/background/';
            var backgroundPaths = fs.readdirSync(backgroundDirectoryPath);
            console.log(backgroundPaths);
            this.response.statusCode = 200;
            this.response.end(JSON.stringify(backgroundPaths));
        }

        else if (getOS == "win32") {
            var fs = Npm.require("fs");
            console.log(process.cwd());
            var backgroundDirectoryPath = '../../../../../public/images/background'; 
            var backgroundPaths = fs.readdirSync(backgroundDirectoryPath);
            console.log(backgroundPaths);
            this.response.statusCode = 200;
            this.response.end(JSON.stringify(backgroundPaths));
        }
    })
    .post(function() {
        // If a POST request is made, create the user's profile.
    })
    .put(function() {
        // If a PUT request is made, either update the user's profile or
        // create it if it doesn't already exist.
    })
    .delete(function() {
        // If a DELETE request is made, delete the user's profile.
    });