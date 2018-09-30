// document ready
$(document).ready(function () {

    // run time display function

    setInterval(myTimer, 1000);

    // add firebase

    var config = {
        apiKey: "AIzaSyBc_admZir4gKCOodym4IudAJ3vkh5lxjY",
        authDomain: "train-basic.firebaseapp.com",
        databaseURL: "https://train-basic.firebaseio.com",
        projectId: "train-basic",
        storageBucket: "train-basic.appspot.com",
        messagingSenderId: "91262479364"
    };

    firebase.initializeApp(config);

    // define variables

    var database = firebase.database();
    var trainName = "";
    var destination = "";
    var trainTime = "";
    var frequency = "";
    var time = "Loading";
    $("#display-time").html(time);

    

    // set functions

    function myTimer() {
        var date = new Date();
        time = date.toLocaleTimeString();
        $("#display-time").html(time);
    }

    // set values onlick to submit

    $("#add-train").on("click", function (event) {
        event.preventDefault();
        trainName = $("#train-input").val().trim();
        destination = $("#destination-input").val().trim();
        trainTime = $("#time-input").val().trim();
        frequency = $("#freq-input").val().trim();

        // difine firebase object

        database.ref().push({
            name: trainName,
            destination: destination,
            time: trainTime,
            frequency: frequency
        });

        
    });

    // call database object to display

    database.ref().on("child_added", function (snapshot) {
        
        // define firebase variables

        var snap = snapshot.val();
        var convert = moment(snap.time, "HH:mm").format();
        var timeRemain = moment().diff(convert, "minutes") % snap.frequency;
        var minAway = frequency - timeRemain;
        var arrival = moment().add(minAway, "m").format("h:mm:ss a");
        
        // append the table values

        $(".input").append(
            `<tr class="border-top">
                <td>${snap.name}</td>
                <td>${snap.destination}</td>
                <td>${snap.frequency}</td>
                <td>${arrival}</td>
                <td>${minAway} mins</td>`
        );
    });
});