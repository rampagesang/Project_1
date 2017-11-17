

// toggle between login and signup
$('.message a').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});


// login in button clicked!
$('#loginButton').on('click', function(event){

  event.preventDefault()
  //get the email value from textfield
  var email = $('#emailForLogin').val()

  //get the password value from textfield
  var password = $('#passwordForLogin').val()


  console.log(email)
  console.log(password)

  firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){

    document.location.href = "Profile.html"

    if(user){
      console.log("success : " + user.val().name)
    } else {
      console.log("no such user")
    }
  }).catch(function(error) {
   // Handle errors
  })

})





/*// Sign out user
firebase.auth().signOut()
 .catch(function (error) {
   // Handle errors
 });
*/