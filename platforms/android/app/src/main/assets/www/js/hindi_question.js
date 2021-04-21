

document.addEventListener('deviceready', function () {
    if(typeof Fullscreen !== 'undefined'){
        //It's safe to use Fullscreen here
Fullscreen.on();

    }
});


var move=0;
var level_hindi;
var z;
var value;
var hindi_main_top;
var y;
var topic_levels;
var newArr=[];
var array=[];
var level_point;
var hindi_level_score;
var level_point=0;

var ques;
var obt1;
var obt2;
var obt3;
var obt4;
var ans_f;

$(document).ready(function() {


z=parseInt($("#level_no").text());
y=parseInt($("#main_topic_no").text());


var check=Object.keys(hindi_data.hindi);
 value=y;

 topic_levels=hindi_data.hindi[y][hindi_main_top].length; ///taking the number of levels from each topic when clicked

  level_hindi=z;
  level_hindi=parseInt(level_hindi);

console.log("z---"+z);
  $("#question").html("1. " +hindi_data.hindi[value][hindi_main_top][z].level[0].ques);
  $("#option_2").html("B "+hindi_data.hindi[value][hindi_main_top][z].level[0].opt2);
  $("#option_1").html("A "+hindi_data.hindi[value][hindi_main_top][z].level[0].opt1);
  $("#option_3").html("C "+hindi_data.hindi[value][hindi_main_top][z].level[0].opt3);
  $("#option_4").html("D "+hindi_data.hindi[value][hindi_main_top][z].level[0].opt4);
  ans = (hindi_data.hindi[value][hindi_main_top][z].level[0].ans);

ques=hindi_data.hindi[value][hindi_main_top][z].level[0].ques;
obt1=hindi_data.hindi[value][hindi_main_top][z].level[0].opt2;
obt2=hindi_data.hindi[value][hindi_main_top][z].level[0].opt1;
obt3=hindi_data.hindi[value][hindi_main_top][z].level[0].opt3;
obt4=hindi_data.hindi[value][hindi_main_top][z].level[0].opt4;
ans_f=hindi_data.hindi[value][hindi_main_top][z].level[0].opt4;
  console.log(ans);



})

function repeat(){

}
var step=1;
var i=0;

function next_hindi(){

//Fullscreen.on();
$(document).ready(function(){

$("#check1").css('background-color', '');
$("#check1").css('border', '');

$("#check2").css('background-color', '');
$("#check2").css('border', '');

$("#check3").css('background-color', '');
$("#check3").css('border', '');

$("#check4").css('background-color', '');
$("#check4").css('border', '');

$("#check1").attr("onclick","check(1)")
$("#check2").attr("onclick","check(2)")
$("#check3").attr("onclick","check(3)")
$("#check4").attr("onclick","check(4)")


})
console.log(level_hindi+1);
step=step+1;
if(i<9){
i=i+1;
}

else{
  i=0;
  if(level_hindi+1<=topic_levels){    // taking the length of level in selected topics
//  console.log(data);
  //step=1;
  $("#mcq_hindi").hide("slow");
  $("#hindi_modal").show("slow");

if(level_point>15 && topic_levels!==level_hindi+1){
level_completed();
level_hindi=level_hindi+1;             //inccreasing the level by one if 10 questions finishes
alert("level_completed");
}
else if(level_point>15 && topic_levels==level_hindi+1){
final()
alert("final");
}
else if(level_point<15){
  failed()

}

}
 }

/*console.log("step "+step);
console.log("value i " + i);
console.log(topic_levels);
*/
console.log(level_hindi);


 console.log(hindi_main_top);
 console.log(z);
 console.log(y);
console.log(value);
console.log(level_hindi)


$("#question").html(i+1+ "." +hindi_data.hindi[value][hindi_main_top][level_hindi].level[i].ques);
$("#option_1").html("A "+hindi_data.hindi[value][hindi_main_top][level_hindi].level[i].opt1);
$("#option_2").html("B "+hindi_data.hindi[value][hindi_main_top][level_hindi].level[i].opt2);
$("#option_3").html("C "+hindi_data.hindi[value][hindi_main_top][level_hindi].level[i].opt3);
$("#option_4").html("D "+hindi_data.hindi[value][hindi_main_top][level_hindi].level[i].opt4);
ans = (hindi_data.hindi[value][hindi_main_top][level_hindi].level[i].ans);
console.log(ans);


ques=hindi_data.hindi[value][hindi_main_top][level_hindi].level[i].ques;
obt1=hindi_data.hindi[value][hindi_main_top][level_hindi].level[i].opt2;
obt2=hindi_data.hindi[value][hindi_main_top][level_hindi].level[i].opt1;
obt3=hindi_data.hindi[value][hindi_main_top][level_hindi].level[i].opt3;
obt4=hindi_data.hindi[value][hindi_main_top][level_hindi].level[i].opt4;
ans_f=hindi_data.hindi[value][hindi_main_top][level_hindi].level[i].opt4;



}



function next_level_hindi(){
  $('body').css('background-image', 'url("")');

$("#mcq").show("slow");
$("#hindi_modal").hide("slow");
$(".footer").show("slow");
$("#card").fadeOut("slow");

i=0;

  $("#status").html("");
  $('body').css('background-image', 'url("")');
$("#next_level_hindi").html("Next Level");


      //  showInterstitialFunc()
      //  Fullscreen.on();

if(move===1){
goBack();
}

}

var cor;
var chk_1;
var chk_2;
var chk_3;
var chk_4;
var correct=0;
var wrong=0;


function check(q){

move=move+5;
  chk_1 = $('#option_1').text();
  chk_2 = $('#option_2').text();
  chk_3 = $('#option_3').text();
  chk_4 = $('#option_4').text();

if(q===1){

  id="#check1";
   cor= $('#option_1').text();
console.log(cor);
}
else if(q===2){
  id="#check2";
  cor= $('#option_2').text();

}
else if(q===3){
  id="#check3";
  cor = $('#option_3').text();

}
else if(q===4){
  id="#check4";
  cor = $('#option_4').text();

}

"A "+ans == chk_1
if("A "+ans==cor ||"D "+ans==cor||"C "+ans==cor||"B "+ans==cor){
  level_point=level_point+3;
correct=correct+1;
  $(id).css('background-color', '#00ff00');
$(id).css('border', 'solid green');
$(id).attr('onclick', 'repeat()');

}
else{
  $(id).css('background-color', "#e82e2e");
  level_point=level_point-1;
  $(id).css('border', 'solid red');
//navigator.vibrate(50);
$(id).attr('onclick', 'repeat()');
wrong=wrong+1;
}

console.log(level_point);
console.log(ans);
console.log(chk_1);

  if ("A "+ans == chk_1) {

    $("#check1").css('background-color', '#00ff00');
    $("#check1").css('border', 'solid green');
    $("#check1").attr('onclick', 'repeat()');
  }
  else {
    $("#check1").attr('onclick', 'repeat()');
  }


  if ("B "+ans == chk_2) {
    $("#check2").css('background-color', '#00ff00');
    $("#check2").css('border', 'solid green');
    $("#check2").attr('onclick', 'repeat()');
  } else {
    $("#check2").attr('onclick', 'repeat()');

  }


  if ("C "+ans == chk_3) {
    $("#check3").css('background-color', '#00ff00');
    $("#check3").css('border', 'solid green');
      console.log("level_point= "+level_point);
  //  $("#th_3").attr('class', 'btn btn-success');
    $("#check3").attr('onclick', 'repeat()');
  }

  else {
    $("#check3").attr('onclick', 'repeat()');

  }



  if ("D "+ans == chk_4) {
    //    alert("righht");
    $("#check4").css('background-color', '#00ff00');
    $("#check4").css('border', 'solid green');
    $("#th_4").attr('class', 'btn btn-success');
    $("#check4").attr('onclick', 'repeat()');
  }

  else {
    $("#check4").attr('onclick', 'repeat()');

    }
/*$("#check_score").html(level_point);
$("#check_correct").html(correct);
$("#check_wrong").html(wrong);
*/


}



var testingpoint ;

function level_completed(){
  var current=level_hindi+1;
$("#status").html("Completed level- "+ current);
$("#next_level").html("Next Level");
$("#next_level").attr("class","btn btn-primary");
//$('body').css('background-image', 'url("img/back2.jpg")');
$("#correct").html("Correct - "+ correct);
$("#wrong").html("Wrong - "+ wrong);
correct=0;
wrong=0;
  var data={};
  var to_send=[];

console.log(level_hindi);
console.log(level_point);
testingpoint = level_point;


  firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
      var user = firebase.auth().currentUser;
      var str=user.email;
var e=str.replace(/[^a-zA-Z0-9]/g, "");
}
console.log(e);
$.get("https://spotdoit14812.firebaseio.com/users/hindi/"+e+".json", function(completed) {
console.log(completed);

var hindi_level_score=completed[hindi_main_top][1];
hindi_level_score = hindi_level_score + testingpoint;
console.log(level_hindi);
to_send.push(level_hindi);
to_send.push(hindi_level_score);
data=to_send;
var ref = firebase.database().ref("users/hindi/"+e+"/"+ hindi_main_top);

ref.set(data);   // Creates a new ref with a new "push key"


  })

  })


to_send=[];
data={}

var value=level_point/6;
console.log(value);
document.querySelectorAll('.rating')
  .forEach((element) => {

  const fill = value * 20;
  element.style.backgroundImage =
    `linear-gradient(to right, gold, gold ${fill}%, gold 1%, #000 99%)`;
  element.setAttribute('aria-label', 'Rating: ' + value + ' of 5');
  element.innerHTML = element.innerHTML.replace(/\s/gm, '');
});
$("#mcq").hide();

$("#starsCount").html(level_point);
$("#card").fadeIn();
level_point=0;


}


function previous(){

  if(i>0){
i=i-2;
step = step-2

  next_hindi();
}
  }




function failed(){
  level_hindi=level_hindi-1;

  $("#status").html("Failed  !!");
  $("#next_level").html("Try Again");
  $("#next_level").attr("class","btn btn-warning btn-lg");

  $("#correct").html("Correct - "+ correct);
  $("#wrong").html("Wrong - "+ wrong);
  correct=0;
  wrong=0;

  $("#starsCount").html(level_point);

//$('body').css('background-image', 'url("img/back2.jpg")');
//$(".footer").hide("slow");

var value=level_point/6;
console.log(value);
document.querySelectorAll('.rating')
  .forEach((element) => {

  const fill = value * 20;
  element.style.backgroundImage =
    `linear-gradient(to right, gold, #000 ${fill}%,#000 1%, #000 99%)`;
  element.setAttribute('aria-label', 'Rating: ' + value + ' of 5');
  element.innerHTML = element.innerHTML.replace(/\s/gm, '');
});


step=step-10;
level_point=0;
i=0;

$("#mcq").hide();

$("#card").fadeIn();

  }

function final(){

$("#status").html("Completed All levels of "+ hindi_main_top);
$("#next_level").html("Home Page");
$("#next_level").attr("class","btn btn-primary");
$('body').css('background-image', 'url("img/back2.jpg")');

  var data={};
  var to_send=[];

console.log(level_hindi);
console.log(level_point);
testingpoint = level_point;

console.log(level_point);

firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
    var user = firebase.auth().currentUser;
    var str=user.email;
var e=str.replace(/[^a-zA-Z0-9]/g, "");
}

$.get("https://spotdoit14812.firebaseio.com/users/hindi/"+e+".json", function(completed) {
console.log(completed);


var hindi_level_score=completed[hindi_main_top][1];
hindi_level_score = hindi_level_score + testingpoint;
to_send.push(topic_levels);
to_send.push(hindi_level_score);
data=to_send;
var ref = firebase.database().ref("users/hindi/"+e+"/"+ hindi_main_top);

ref.set(data);   // Creates a new ref with a new "push key"


  })

  })


to_send=[];
data={}

var value=level_point/6;
console.log(value);
document.querySelectorAll('.rating')
  .forEach((element) => {

  const fill = value * 20;
  element.style.backgroundImage =
    `linear-gradient(to right, gold, gold ${fill}%, gold 1%, #000 99%)`;
  element.setAttribute('aria-label', 'Rating: ' + value + ' of 5');
  element.innerHTML = element.innerHTML.replace(/\s/gm, '');
});
$("#starsCount").html(level_point);
$("#correct").html("Correct - "+ correct);
$("#wrong").html("Wrong - "+ wrong);
$("#mcq").fadeOut(1);

$("#card").fadeIn(100);


level_point=0;


 move=1;

}




 $.get("https://spotdoit14812.firebaseio.com/hindi.json", function(obj) {

 //storing hindi data

 localStorage.setItem('hindi', JSON.stringify(obj));

 })







 var currentUser;
     firebase.auth().onAuthStateChanged(function(user) {

       if (user) {
         var user = firebase.auth().currentUser;
           var str=user.email;
     document.getElementById("user_e").innerHTML=str;

     var e=str.replace(/[^a-zA-Z0-9]/g, "");
 currentUser=e;
   }
 })



 function favourite(){


    var chk=
     {
      "obt1" : obt1,
      "obt2" : obt2,
      "obt3" : obt3,
      "obt4" : obt4,
      "ans"  : ans_f,
      "ques" : ques
    };


   var increase=0;

   $.get("https://spotdoit14812.firebaseio.com/favourite/hindi/"+currentUser+"/"+hindi_main_top+".json", function(users) {

     if(users){
       increase=users.length;
       console.log(users.length);
     }
     else{
       increas=0;
     }


   var e=currentUser;
   var ref = firebase.database().ref("favourite/hindi/"+e+"/"+hindi_main_top+"/"+increase);
   ref.set (chk);   // Creates a new ref with a new "push key"

 })

 }
