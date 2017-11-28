

$('#addJourney').on('click', function(event){
	event.preventDefault()

	document.location.href = "Add_Journey.html"
})



$(document).ready(function(){


	firebase.auth().onAuthStateChanged(function(user){

		if(user){
			retrieveDatabase(user.uid)

		} else {
			console.log("The user is not logged-in")
			document.location.href = "Login.html"
		}
	})


})

function retrieveDatabase(uid) {
	console.log(uid)

	var numOfBlogs = 0
	var representativePreviewPicture
	var isThisFirstPicture = false

	database.ref('/user/' + uid + '/blogs/').once('value',function(snapshot){

		numOfBlogs = snapshot.numChildren()
		

		for(var i = numOfBlogs; i > 0; i--) {
			database.ref('/user/'+uid).child('blogs').child(i.toString()).child('Locations').once('value', function(value){
				console.log(value.val())
				var locationObjectArray = value.val()

				for(var i = 0; i < locationObjectArray.length; i++){
					if(locationObjectArray[i].photo_1 != null || locationObjectArray[i].photo_1 != undefined){
						
						var description_photo1 = locationObjectArray[i].photo_1.description
						var imgFileURL_photo1 = locationObjectArray[i].photo_1.imgFileURL

						if(isThisFirstPicture != true){
							isThisFirstPicture = true
							representativePreviewPicture = imgFileURL_photo1
						}
						
						console.log('photo1_des' + description_photo1)
						console.log('photo1_url' + imgFileURL_photo1)

						if(locationObjectArray[i].photo_2 != null || locationObjectArray[i].photo_2 != undefined){
							var description_photo2 = locationObjectArray[i].photo_2.description
							var imgFileURL_photo2 = locationObjectArray[i].photo_2.imgFileURL
							console.log('photo2_des' + description_photo2)
							console.log('photo2_url' + imgFileURL_photo2)
						}
					} else {


					}
				}
			})

		}
	})





}