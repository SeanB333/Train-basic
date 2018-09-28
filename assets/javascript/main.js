$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyBc_admZir4gKCOodym4IudAJ3vkh5lxjY",
        authDomain: "train-basic.firebaseapp.com",
        databaseURL: "https://train-basic.firebaseio.com",
        projectId: "train-basic",
        storageBucket: "train-basic.appspot.com",
        messagingSenderId: "91262479364"
    };
    firebase.initializeApp(config);

    var database = firebase.database();
    var trainName = "";
    var dest = "";
    var trainTime = "";
    var frequency = "";

    $("#add-train").on("click", function (event) {
        event.preventDefault();

        trainName = $("#train-input").val().trim();
        dest = $("#destination-input").val().trim();
        trainTime = $("#time-input").val().trim();
        frequency = $("#freq-input").val().trim();

        console.log(trainName);
        console.log(dest);
        console.log(trainTime);
        console.log(frequency);

        database.ref().set({
            name: trainName,
            destination: dest,
            time: trainTime,
            frequency: frequency
        })
    })

    database.ref().on("value", function(snapshot){
        snap = snapshot.val();
        
    })
})