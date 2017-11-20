

var userName
var email
var password

//sign up button clicked!
$('#createButton').on('click', function(){


	// get the user_name
	userName = $('#userNameForSignup').val().trim()

	// get the email
	email = $('#emailAddressForSignup').val().trim()

	// get the password
	password = $('#passwordForSignup').val().trim()


	console.log(userName)
	console.log(email)
	console.log(password)


	if(email && password){

		firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
			firebase.auth().onAuthStateChanged(function(user){

				if(user) {
					database.ref('/user/'+user.uid).set({
						name: userName,
						email: email,
						password: password
					})

					document.location.href = "home.html"

				} else {
					console.log("can not grab the user")
				}

			})
		}).catch(function(error) {

			var errorCode = error.code
			var errorMessage = error.message

			console.log(errorCode + " " + errorMessage)

		})


	} else {
		$('#userNameForSignup').val() = " "
		$('#emailAddressForSignup').val() = " "
		$('#passwordForSignup').val() = " "

	}
	


})









