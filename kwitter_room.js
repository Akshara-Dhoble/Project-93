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
