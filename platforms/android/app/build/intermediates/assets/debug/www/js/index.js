
var initial={
  "reasoning" : [0,0],
  "history": [0,0],
  "indian_gk" : [0,0],
  "world_gk": [0,0],
  "up_gk": [0,0],
  "sports_gk": [0,0],
  "aptitude": [0,0],
  "railway": [0,0]
}
var english={
  "aptitude" : [ [ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0" ,"0"],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0" ,"0"],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ] ],

  "reasoning": [[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0" ,"0"],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0" ,"0"],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ]   ],

  "gk" : [ [ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0" ,"0"],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0" ,"0"],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ] ],

  "english": [[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0" ,"0"],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0" ,"0"],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ],[ "0","0" ]   ]

}

function data_receive_hindi(){

  //$("#register").html("Pease wait ..");
$.get("https://spotdoit14812.firebaseio.com/users.json", function(post) {
    firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
      var user = firebase.auth().currentUser;
        var str=user.email;
         var e=str.replace(/[^a-zA-Z0-9]/g, "");
        if(post.hindi[e]==null){
        var ref = firebase.database().ref("users/"+"hindi/"+e);
        ref.update(initial);   // Creates a new ref with a new "push key"
        window.location="hindi.html"

      }else{
        window.location="hindi.html"
      }

    }
  })
})
}








function data_receive_english(){

$.get("https://spotdoit14812.firebaseio.com/users.json", function(users) {
  firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
//lert("haaa");
      var user = firebase.auth().currentUser;
        var str=user.email;
         e=str.replace(/[^a-zA-Z0-9]/g, "");
        console.log(e);
        if(users.eng[e]==null){
        var ref = firebase.database().ref("users/"+"eng/"+e);
        ref.set(english);   // Creates a new ref with a new "push key"
        window.location="english.html"

      }else{
        window.location="english.html"
      }


  }
  })


})



}




function login() {
  $(".loader").show("slow");

  $("#body").css("opacity","0.4");

  $("#body").css("pointer-events","none");

var userlanguage;
  if (document.getElementById('r1').checked) {
    userlanguage = document.getElementById('r1').value;
  }
  else if (document.getElementById('r2').checked) {
    userlanguage = document.getElementById('r2').value;
  }

  var userEmail = document.getElementById("email_field").value;
userEmail = userEmail.replace(/\s/g, "");
  var userPass = document.getElementById("password_field").value;


  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(firebaseUser) {

            if (userlanguage=="english"){
              data_receive_english();


                //  alert(userlanguage);

        }
           else if (userlanguage=="hindi"){
                  data_receive_hindi();
            }
          })
    .catch(function(error) {
      // Error Handling
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Eroor Msg" + errorMessage);
      //$(".loader").hide("slow");
      $("body").css("opacity","1");
      $("body").css("pointer-events","");

    });
};

var userlanguage;//=document.getElementById('r1').value;
function language(v){
if(v==1){
 userlanguage ="english";
}
else if(v==2){
 userlanguage = "hindi";
}

}

function register() {
if(userlanguage==undefined){
  language(2);
}
$(".loader").show("slow");
$("#register").html("Pease wait ..");

$("body").css("opacity","0.4");
$("body").css("pointer-events","none");
console.log(userlanguage)

data={}
to_send=[];

  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;
  userEmail = userEmail.replace(/\s/g, "");
  var e=userEmail.replace(/[^a-zA-Z0-9]/g, "");
  var contact=document.getElementById("contact").value;
  var name=document.getElementById("name").value;

if(contact.length===10){
  var data={}
  var to_send=[];
  if (userlanguage=="english"){
console.log(contact);
    to_send.push(contact);
    to_send.push(name);
    data=to_send;
    var ref = firebase.database().ref("contact/eng/"+e);
    ref.set (data);   // Creates a new ref with a new "push key"
  }
  else if (userlanguage=="hindi"){

//alert(contact);
  to_send.push(contact);
  to_send.push(name);
  data=to_send;
  var ref = firebase.database().ref("contact/hindi/"+e);
  ref.set (data);   // Creates a new ref with a new "push key"
}

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(firebase){

  //  alert(userlanguage)
        if (userlanguage=="english"){
          //alert("success");
          data_receive_english()
                  }

             else if (userlanguage=="hindi"){
            //   alert("success");

               data_receive_hindi();
             }
  }).catch(function(error) {
    // Handle Errors here.
      var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error : " + errorMessage);
  $(".loader").hide("slow");
  $("#register").html("Register");
  $("body").css("opacity","1");
  $("body").css("pointer-events","");
})
}
else  {
  alert("Please give your valid number and email");
  $(".loader").hide("slow");
  $("#register").html("Register");
  $("body").css("opacity","1");
  $("body").css("pointer-events","");

}
};



// funciton for log_out
function logout() {
  firebase.auth().signOut();
  window.location = "index.html";

}


function forgetpassword() {
  $("#log").click()

}


function reset(){
  firebase.auth().onAuthStateChanged(function(user) {

var emailAddress =document.getElementById("email_f").value
emailAddress = emailAddress.replace(/\s/g, "");
var auth = firebase.auth();
auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
  alert("Email sent")
}).catch(function(error) {
  alert("Email not found");
  // An error happened.
});
})
}

document.addEventListener('deviceready', function () {
    if(typeof Fullscreen !== 'undefined'){
        //It's safe to use Fullscreen here
Fullscreen.on();

    }
});
