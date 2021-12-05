var firebaseConfig = {
  apiKey: "AIzaSyAtn-CGDM_PajJkGSr5SKTnxxMeoiZeruE",
  authDomain: "kwitterapp-a7183.firebaseapp.com",
  databaseURL: "https://kwitterapp-a7183-default-rtdb.firebaseio.com",
  projectId: "kwitterapp-a7183",
  storageBucket: "kwitterapp-a7183.appspot.com",
  messagingSenderId: "492999110263",
  appId: "1:492999110263:web:40f9f9695475dd5c75a072"
};

firebase.initializeApp(firebaseConfig);

function addRoom(){
   var room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
   });
   localStorage.setItem("room_name" , room_name);
   window.location = "kwitter_page.html";
};

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  console.log("Room Name - "+ Room_names);
  row = "<div class = 'room_name' id ="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML = row ;

  //End code
  });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html";
};
function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
}




function addUser(){
user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name" , user_name);

window.location = "kwitter_room.html";

}