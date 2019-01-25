// Initialize Firebase (YOUR OWN APP)
// Make sure that your configuration matches your firebase script version
// (Ex. 3.0 != 3.7.1)
// Create a variable to reference the database
// var database = ...
// Use the below initialValue
var initialValue = 100;
// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;
// --------------------------------------------------------------
    // Initialize Firebase
    // This is the code we copied and pasted from our app page
   // Initialize Firebase
var config = {
    apiKey: "AIzaSyAPASJoDr9QVhBYzh1QexKomG8sy9fq4I8",
    authDomain: "p-click-counter.firebaseapp.com",
    databaseURL: "https://p-click-counter.firebaseio.com",
    projectId: "p-click-counter",
    storageBucket: "p-click-counter.appspot.com",
    messagingSenderId: "387807132093"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
  
  database.ref().on("value", function(snapshot) {
    clickCounter = snapshot.val().clickCount;
    $("#click-value").text(clickCounter);
  });
  
  $("#increase-button").on('click', function(){
    clickCounter++;
    database.ref().set({
      clickCount: clickCounter
    });
    database.ref().on('value', function(snapshot){
      $('#click-value').text(clickCounter);
      console.log(snapshot.val());
  })});

  $('#decrease-button').on('click', function(){
    clickCounter--;
    database.ref().set({
      clickCount: clickCounter
    });
    database.ref().on('value', function(snapshot){
      $('#click-value').text(clickCounter);
      console.log(snapshot.val());
    });
    if (clickCounter === 0) {
      alert("Phew! You made it! That sure was a lot of clicking.");
      clickCounter = initialValue;
    }
  });

  $('#restart-button').on('click', function(){
    clickCounter = initialValue;
    database.ref().set({
      clickCount: clickCounter
    });
    database.ref().on('value', function(snapshot){
      $('#click-value').text(clickCounter);
      console.log(snapshot.val());
    })});