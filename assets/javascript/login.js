
  var config = {
  	apiKey: "AIzaSyDi_hh8Al-BcWhprUm5Amx0f2wgxIxO_DU",
  	authDomain: "mydatabaseproj-mosh.firebaseapp.com",
  	databaseURL: "https://mydatabaseproj-mosh.firebaseio.com",
  	projectId: "mydatabaseproj-mosh",
  	storageBucket: "mydatabaseproj-mosh.appspot.com",
  	messagingSenderId: "812655889128"
  }



  firebase.initializeApp(config)


  var database = firebase.database()



$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});