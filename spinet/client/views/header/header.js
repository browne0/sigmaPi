Template.header.created = function() {
    Session.set('isActive', false);
    Session.set('showLogin', false);
};

Template['header'].helpers({
    showLogin: function() {
        return Session.get('showLogin');
    },
    isActive: function() {
        return Session.get('isActive') ? 'active' : '';
    },
    animateClass: function() {
        return Session.get('isActive') ? 'fadeIn' : 'fadeOut';
    },
    iconClass: function() {
        return Meteor.user() ? 'user' : 'sign in';
    },
    loadbg: function() {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "/backgrounds", false); // false for synchronous request
        xmlHttp.send(null);
        var returnedData = JSON.parse(xmlHttp.responseText);
        //console.log(returnedData[randomNumber(2, returnedData.length)]);
        console.log("data length:" + returnedData.length);
        var randomIndex = randomNumber(2, returnedData.length-1);
        var randomImageName = returnedData[randomIndex];
        console.log(randomIndex);
        var path = "../images/background/"+randomImageName;
        console.log(path);
        return path;   
    }
});

//both are inclusive
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
Template['header'].events({
    'click .resize.button': function() {
        var showLogin = Session.get('showLogin');

        Session.set('isActive', !Session.get('isActive'));

        setTimeout(function() {
            Session.set('showLogin', !Session.get('showLogin'));
        }, 600);
    },
    'click .log-out.button': function() {
        Meteor.logout();
    },
});