$(document).ready(function() {
    $("#train-name").on("click", function(event){
        event.preventDefault();
        var trainName = $("#train-input").val().trim();
        var dest = $("#destination-input").val().trim();
        var trainTime = $("#time-input").val().trim();
        var frequency = $("#freq-input").val().trim();

        console.log(trainName);
        console.log(dest);
        console.log(trainTime);
        console.log(frequency);

        
        

    })
})