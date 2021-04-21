
document.addEventListener('deviceready', function () {
    if(typeof Fullscreen !== 'undefined'){
        //It's safe to use Fullscreen here
Fullscreen.on();

    }
});



var topic_levels;
var e;
var db_level;
var rest;
var db_scores;
$("#loader").show();

$(document).ready(function() {

  document.getElementById("nav_p").innerHTML = "";


  document.getElementById("mySidenav").style.width = "0";



  var topic=localStorage.getItem("topic");
  var main_top=localStorage.getItem("main_top");
  var head=localStorage.getItem("head");
  var db=localStorage.getItem("db");
  var topic_levels=localStorage.getItem("topic_levels");




//console.log(db_scores);
$('#nav_p').append('<span >'+" "+head +'</span>');//+ heading;


var dv_leve;
firebase.auth().onAuthStateChanged(function(user) {


    var user = firebase.auth().currentUser;
  var str=user.email;
var d=str.replace(/[^a-zA-Z0-9]/g, "");

var c="'"+d+"'"
console.log(d);
alert(d);
alert(head)
$.get("https://spotdoit14812.firebaseio.com/users/eng/"+d+".json", function(users) {
console.log(users);
alert(users.aptitude[0][0])
  var main_topic=localStorage.getItem("main_topic");

        db_level=users[main_topic][topic][0];
dv_leve=db_level;
        console.log(db_level);

console.log(dv_leve);
$("#loader").hide();
    for(var p=1;p<=topic_levels;p++){
    var na=p-1;
    if(p<=dv_leve){
    $('#MyDiv').append('<button onclick="run('+na+')"  id="test+'+p+'" class="btn btn-success" >Level-'+p+'</button>');
    //$(".btn").prop('disabled', false);
  }
    else if(p===1){
    $('#MyDiv').append('<button onclick="run('+na+')"  id="test+'+p+'" class="btn btn-success" >Level-'+p+'</button>');
    }
    else{
      $('#MyDiv').append('<button onclick="run('+na+')"  id="test+'+p+'" class="btn btn-primary" disabled>Level-'+p+'</button>');

    }
  }

})

})

});

function run(x){
  localStorage.setItem("x",x);

window.location="question.html"

}


function goBack(){

window.history.back();
}
