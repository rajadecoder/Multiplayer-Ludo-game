var correct=0;
var wrong=0;


var selected_level;
var step;
var x;
var level;
var ques_num=1;
var english_data;
var  db;
var main_topic;
var topic;
var topic_levels;
var db_scores;
var english_topics=[];

var eng=[];
var data={topic:[]};
var to_send=[];
var level_point=0;
var db_scores;


var ques;
var obt1;
var obt2;
var obt3;
var obt4;
var ans_f;

//var english_data = JSON.parse(localStorage.getItem('english'));
var move;

$(document).ready(function() {

  document.addEventListener('deviceready', function () {
      if(typeof Fullscreen !== 'undefined'){
          //It's safe to use Fullscreen here
  Fullscreen.on();

      }
  });
  $("#card").hide("slow");

 level= parseInt($("#level_no").text());
//alert(level);
db=$("#main_topic_no").text();
console.log("main_tiop"+db);
  //function for calling first question

  var x=level;
   topic_levels=$("#topic_levels").text();
   //db_scores=localStorage.getItem("db_scores");
   console.log(db);
    console.log(main_topic);
    console.log(topic);
    console.log(x);
step=level*10+1;
topic=parseInt(topic);
            $("#question").html(ques_num+"-" +english_data[db][main_topic][topic].sub[x].level[0].ques);
           $("#option_1 ").html(english_data[db][main_topic][topic].sub[x].level[0].obt1);
            $("#option_2").html(english_data[db][main_topic][topic].sub[x].level[0].obt2);
            $("#option_3 ").html(english_data[db][main_topic][topic].sub[x].level[0].obt3);
            $("#option_4").html(english_data[db][main_topic][topic].sub[x].level[0].obt4);
            ans = (english_data[db][main_topic][topic].sub[x].level[0].ans);
            ans = ans.trim();

            $("#foot").hide("fast");
            $("body").css("background-image","url()");
            $("#next_previous").show("fast");
            $("#mcq").show("fast");


ques=english_data[db][main_topic][topic].sub[x].level[0].ques;
obt1=english_data[db][main_topic][topic].sub[x].level[0].obt1;
obt2=english_data[db][main_topic][topic].sub[x].level[0].obt2;
obt3=english_data[db][main_topic][topic].sub[x].level[0].obt3;
obt4=english_data[db][main_topic][topic].sub[x].level[0].obt4;
ans_f=english_data[db][main_topic][topic].sub[x].level[0].ans;

})



var step=1;
var i=0;
function next(){
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


  console.log("topicleave"+topic_levels)
step=step+1;
console.log("level "+level);
console.log(db);
console.log(main_topic);
console.log(topic);
console.log(level);

var le=english_data[db][main_topic][topic].sub[level].level.length;   //taking the length of level queestion
console.log(le);
var topic_length = english_data[db][main_topic][topic].sub.length;  //taking the length of topic level
var mul=31;//le*topic_length+1;  //taking the length of all question present in each leevel in slelected topics
console.log("mul " +mul);
console.log("step "+step);

if(step===mul && level_point>15){
send();

}
else if(level_point<15 && step===mul){
  tryagain()
  level=level+1;
}

console.log("topiclevels--"+ topic_levels);
console.log("step"+step);
console.log("mul"+mul);
if(i<9){
i=i+1;
ques_num=ques_num+1;
}
else{
  i=0;
  ques_num=1;
  if(level<topic_levels-1){    // taking the length of level in selected topics

    level=parseInt(level);
  level=level+1;             //inccreasing the level by one if 10 questions finishes
if(level_point>15 && step!=mul){

level_completed();

}
else if(level_point<15){
  tryagain();

}
}

 }

//for refrence

for (var j=0;j<english_data.length;j++){
var keys=Object.keys(english_data[j]); //getting hindi main topics
english_topics.push(keys);
    eng = eng.concat(english_topics[j]); ///converting mukti dimensiona aray into single dimension

english_topics.push(Object.keys(english_data[j]));

};
console.log(main_topic);
        $("#question").html(ques_num+"-" +english_data[db][main_topic][topic].sub[level].level[i].ques);
        $("#option_1 ").html(english_data[db][main_topic][topic].sub[level].level[i].obt1);
        $("#option_2").html(english_data[db][main_topic][topic].sub[level].level[i].obt2);
        $("#option_3 ").html(english_data[db][main_topic][topic].sub[level].level[i].obt3);
        $("#option_4").html(english_data[db][main_topic][topic].sub[level].level[i].obt4);
        ans = (english_data[db][main_topic][topic].sub[level].level[i].ans);


        ques=english_data[db][main_topic][topic].sub[level].level[i].ques;
        obt1=english_data[db][main_topic][topic].sub[level].level[i].obt1;
        obt2=english_data[db][main_topic][topic].sub[level].level[i].obt2;
        obt3=english_data[db][main_topic][topic].sub[level].level[i].obt3;
        obt4=english_data[db][main_topic][topic].sub[level].level[i].obt4;
        ans_f=english_data[db][main_topic][topic].sub[level].level[i].ans;


}

function showquestion(){

  i=-1;
  ques_num = 0;
  step=step-1;
  next()

  //$("#topic").show("fast");
  $("#completed").html("")
  $('body').css('background-image', 'url("")');
$("#next_level").html("Next Level");
  $("#mcq").show("fast");
  $("#card").hide("fast");
//.show("fast");

if(move===1){
  move=0;
  $("#mcq").hide("fast");
  $("#card").fadeOut("fast");
  $("#level_page").fadeIn("slow");


}

//showInterstitialFunc();
//Fullscreen.on();
}




function previous(){

  if(i>0){
ques_num = ques_num - 2;
i=i-2;
step = step-2
next();
}
}

function repeat(){

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////
var cor;
var chk_1;
var chk_2;
var chk_3;
var chk_4;



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


if(ans==cor){
  level_point=level_point+3;

  $(id).css('background-color', '#00ff00');
$(id).css('border', 'solid green');
$(id).attr('onclick', 'repeat()');
correct=correct+1;
}
else{
  $(id).css('background-color', "#e82e2e");
  level_point=level_point-1;
  wrong=wrong-1;
  $(id).css('border', 'solid red');
//navigator.vibrate(50);
$(id).attr('onclick', 'repeat()');
}

console.log(level_point);
console.log(ans);
console.log(chk_1);

  if (ans==chk_1) {

    $("#check1").css('background-color', '#00ff00');
    $("#check1").css('border', 'solid green');
    $("#check1").attr('onclick', 'repeat()');
  }
  else {
    $("#check1").attr('onclick', 'repeat()');
  }


  if (ans == chk_2) {
    $("#check2").css('background-color', '#00ff00');
    $("#check2").css('border', 'solid green');
    $("#check2").attr('onclick', 'repeat()');
  } else {
    $("#check2").attr('onclick', 'repeat()');

  }


  if (ans == chk_3) {
    $("#check3").css('background-color', '#00ff00');
    $("#check3").css('border', 'solid green');
      console.log("level_point= "+level_point);
  //  $("#th_3").attr('class', 'btn btn-success');
    $("#check3").attr('onclick', 'repeat()');
  }

  else {
    $("#check3").attr('onclick', 'repeat()');

  }



  if (ans == chk_4) {
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



// funcion for calling hte topic data
function tryagain(){


//$(".footer").hide("fast");
$("#next_level").attr("class","btn btn-warning btn-lg");
$("#next_level").html("Try Again");

$("#completed").html("<strong>Failed !!</strong>");
  $("#mcq").hide("fast");
  $("#wrong").html("Wrong :"+wrong);
  $("#correct").html("Correct : "+correct);

  $("#card").fadeIn(10);
//showInterstitialFunc();



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

$("#starsCount").html(level_point);


level_point=0;
level=level-1;
step=step-10;



}


function level_completed(){

  //$(".footer").hide("fast");

  $("#completed").html("<strong>Completed</strong>")
  $("#mcq").fadeOut(0);
  $("#wrong").html("Wrong :"+wrong);
  $("#correct").html("Correct : "+correct);

//  showInterstitialFunc();


var value=level_point/6;
console.log(value);
document.querySelectorAll('.rating')
  .forEach((element) => {

  const fill = value * 20;
  element.style.backgroundImage =
    `linear-gradient(to right, gold, #000 ${fill}%,#000 10%, #000 99%)`;
  element.setAttribute('aria-label', 'Rating: ' + value + ' of 5');
  element.innerHTML = element.innerHTML.replace(/\s/gm, '');
});



    $("#starsCount").html(level_point);
    $("#card").fadeIn();
    firebase.auth().onAuthStateChanged(function(user) {


        var user = firebase.auth().currentUser;
      var str=user.email;
    var d=str.replace(/[^a-zA-Z0-9]/g, "");

    console.log(d);


    $.get("https://spotdoit14812.firebaseio.com/users/eng/"+d+".json", function(users) {


var db_scores=users[main_topic][topic][1];
console.log(db_scores);
db_scores=parseInt(db_scores);
db_scores=db_scores+level_point;



to_send.push(level);
to_send.push(db_scores);
level_point=0;
i=0

var user = firebase.auth().currentUser;
var str=user.email;

var e=str.replace(/[^a-zA-Z0-9]/g, "");
data[topic]=to_send;

var ref = firebase.database().ref("users/eng/"+e+"/"+ main_topic);
console.log(to_send);
ref.update (data);   // Creates a new ref with a new "push key"
to_send=[];
data={topic:[]}
})
})
}











function send(){
//var head=localStorage.getItem("head");
  //$(".footer").hide("fast");
  $("#completed").html("<strong>Completed All Levels Of </strong>"+ head)
  $("#mcq").fadeOut(0);
  //$('body').css('background-image', 'url("img/back2.jpg")');
$("#next_level").html("Level Page");
  //showInterstitialFunc();

  $("#wrong").html("Wrong :"+wrong);
  $("#correct").html("Correct : "+correct);

  var value=level_point/6;
  console.log(value);
  document.querySelectorAll('.rating')
  .forEach((element) => {

  const fill = value * 20;
  element.style.backgroundImage =
    `linear-gradient(to right, gold, #000 ${fill}%,#000 10%, #000 99%)`;
  element.setAttribute('aria-label', 'Rating: ' + value + ' of 5');
  element.innerHTML = element.innerHTML.replace(/\s/gm, '');
  });



  $("#starsCount").html(level_point);
  $("#card").show("slow");


  firebase.auth().onAuthStateChanged(function(user) {


      var user = firebase.auth().currentUser;
    var str=user.email;
  var d=str.replace(/[^a-zA-Z0-9]/g, "");

  var c="'"+d+"'"
  console.log(d);


  $.get("https://spotdoit14812.firebaseio.com/users/eng/"+d+".json", function(users) {


  var db_scores=users[main_topic][topic][1];
  console.log(db_scores);
  db_scores=parseInt(db_scores);
  db_scores=db_scores+level_point;
  //  db_score=level_point;
  //console.log(db_score);


  to_send.push(level+1);
  to_send.push(db_scores);
  level_point=0;
  i=0

  var user = firebase.auth().currentUser;
  var str=user.email;

  var e=str.replace(/[^a-zA-Z0-9]/g, "");
  console.log(e);

  data[topic]=to_send;

  var ref = firebase.database().ref("users/eng/"+e+"/"+ main_topic);
  console.log(to_send);
  ref.update (data);   // Creates a new ref with a new "push key"
  to_send=[];
  data={topic:[]}
  move=1;

  })
  })
}









 function favourite_(){

    var currentUser;
        firebase.auth().onAuthStateChanged(function(user) {

          if (user) {
            var user = firebase.auth().currentUser;
              var str=user.email;
    //    document.getElementById("user_e").innerHTML=str;

        var e=str.replace(/[^a-zA-Z0-9]/g, "");
    currentUser=e;
      }


console.log(main_topic);
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
console.log(currentUser);
   $.get("https://spotdoit14812.firebaseio.com/favourite/eng/"+currentUser+"/"+main_topic+".json", function(users) {

     if(users){
       increase=users.length;
       console.log(users.length);
     }
     else{
       increas=0;
     }


   var e=currentUser;
   var ref = firebase.database().ref("favourite/eng/"+e+"/"+main_topic+"/"+increase);
   ref.set (chk);   // Creates a new ref with a new "push key"

 })
})

 }
