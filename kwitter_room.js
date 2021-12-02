var firebaseConfig = {
    apiKey: "AIzaSyBW5Y73EsAtetFpHdsauY9qBJWk0B1kcpw",
    authDomain: "project-93-6f223.firebaseapp.com",
    projectId: "project-93-6f223",
    storageBucket: "project-93-6f223.appspot.com",
    messagingSenderId: "521942058333",
    appId: "1:521942058333:web:920583f9bc83bda16cd4b4"
  };
  
  
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!" ;
function addRoom(){
    var room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name" , room_name);
    window.location = "kwitter_page.html";
};

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey ;

    console.log("Room Name - "+ Room_names);
    row = "<div class = 'room_name' id ="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML = row ;

  
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

