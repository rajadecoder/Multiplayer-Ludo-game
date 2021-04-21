
var english_data = JSON.parse(localStorage.getItem('english'));
var main_top;
var arr=[];

var chk_1;
var chk_2;
var chk_3;
var chk_4;
var ans;
var correct=0;
var wrong=0;
var level_point=0;
var main_num=0;
var move=0;

var id;
document.addEventListener('deviceready', function () {
    if(typeof Fullscreen !== 'undefined'){
        //It's safe to use Fullscreen here
Fullscreen.on();
    }
});



$(document).ready(function() {

              $("#random_mcq").fadeIn("fast");
              $("body").css("background-image","url()");
              $("#next_previous").show("fast");

var b=$("#w").text();
console.log(b);
b=parseInt(b);

//[art fpr randpm random_questions
if(b===1){

main_top="aptitude";
main_num=2;
//$('#nav_p').append('<span >'+" "+"Aptitude Mix" +'</span>');//+ heading;
  var topic=[];
  var level_arr=[];
var topic_length = english_data[main_num].aptitude.length;
console.log(topic_length);

var level= english_data[main_num].aptitude[0].sub.length;
console.log(level);

for (var i=0;i<=topic_length;i++){
topic.push(i);


}
for (var j=0;j<=level;j++){

level_arr.push(j);
}
console.log(english_data[main_num].aptitude[0].sub[0].level[0]);
var top=Math.floor((Math.random() * 17) + 1)
var top=topic[top];
var lev=Math.floor((Math.random() * 3) + 1);
console.log(lev);
console.log(top);
console.log(main_top);
$("#random_question").html(english_data[main_num][main_top][top].sub[0].level[lev].ques);
$("#random_1 ").html(english_data[main_num][main_top][top].sub[0].level[lev].obt1);
$("#random_2").html(english_data[main_num][main_top][top].sub[0].level[lev].obt2);
$("#random_3 ").html(english_data[main_num][main_top][top].sub[0].level[lev].obt3);
$("#random_4").html(english_data[2][main_top][top].sub[0].level[lev].obt4);
 ans = english_data[main_num][main_top][top].sub[0].level[lev].ans;
 console.log(ans);

 //showInterstitialFunc();


}

//////for reasoning_q

//[art fpr randpm random_questions
if(b===2){

main_top="reasoning";
main_num=0;
$('#nav_p').append('<span >'+" "+"Reasoning Mix" +'</span>');//+ heading;
  var topic=[];
  var level_arr=[];
var topic_length = english_data[0].reasoning.length;
console.log(topic_length);

var level= english_data[0].reasoning[0].sub.length;
console.log(level);

for (var i=0;i<topic_length;i++){
topic.push(i);


}
for (var j=0;j<level;j++){

level_arr.push(j);
}
console.log(topic);
console.log(level_arr);
console.log(english_data[main_num].reasoning[0].sub[0].level[0]);
var top=Math.floor((Math.random() * 8) + 1)
var top=topic[top];
var lev=Math.floor((Math.random() * 2) + 1);
console.log(lev);
console.log(top);
console.log(main_top);
$("#random_question").html(english_data[main_num][main_top][top].sub[0].level[lev].ques);
$("#random_1 ").html(english_data[main_num][main_top][top].sub[0].level[lev].obt1);
$("#random_2").html(english_data[main_num][main_top][top].sub[0].level[lev].obt2);
$("#random_3 ").html(english_data[main_num][main_top][top].sub[0].level[lev].obt3);
$("#random_4").html(english_data[main_num][main_top][top].sub[0].level[lev].obt4);
 ans = english_data[main_num][main_top][top].sub[0].level[lev].ans;
 console.log(ans);



}


if(b===3){

main_top="gk";
main_num=1;
$('#nav_p').append('<span >'+" "+"Gk Mix" +'</span>');//+ heading;
  var topic=[];
  var level_arr=[];
var topic_length = english_data[main_num][main_top].length;
console.log(topic_length);

var level= english_data[main_num][main_top][0].sub.length;
console.log(level);

for (var i=0;i<=topic_length;i++){
topic.push(i);


}
for (var j=0;j<=level;j++){

level_arr.push(j);
}
console.log(english_data[main_num][main_top][0].sub[0].level[0]);
var top=Math.floor((Math.random() * 17) + 1)
var top=topic[top];
var lev=Math.floor((Math.random() * 2) + 1);
console.log(lev);
console.log(top);
console.log(main_top);
$("#random_question").html("1)  "+english_data[main_num][main_top][top].sub[0].level[lev].ques);
$("#random_1 ").html(english_data[main_num][main_top][top].sub[0].level[lev].obt1);
$("#random_2").html(english_data[main_num][main_top][top].sub[0].level[lev].obt2);
$("#random_3 ").html(english_data[main_num][main_top][top].sub[0].level[lev].obt3);
$("#random_4").html(english_data[main_num][main_top][top].sub[0].level[lev].obt4);
 ans = english_data[main_num][main_top][top].sub[0].level[lev].ans;
 console.log(ans);



}

if(b===4){

main_top="english";
main_num=3;
$('#nav_p').append('<span >'+" "+"English Mix" +'</span>');//+ heading;
  var topic=[];
  var level_arr=[];
var topic_length = english_data[main_num].english.length;
console.log(topic_length);

var level= english_data[main_num].english[0].sub.length;
console.log(level);

for (var i=0;i<=topic_length;i++){
topic.push(i);


}
for (var j=0;j<=level;j++){

level_arr.push(j);
}
console.log(english_data[main_num].english[0].sub[0].level[0]);
var top=Math.floor((Math.random() * 6) + 1)
var top=topic[top];
var lev=Math.floor((Math.random() * 3) + 1);
console.log(lev);
console.log(top);
console.log(main_top);
$("#random_question").html(english_data[main_num][main_top][top].sub[0].level[0].ques);
$("#random_1 ").html(english_data[main_num][main_top][top].sub[0].level[0].obt1);
$("#random_2").html(english_data[main_num][main_top][top].sub[0].level[0].obt2);
$("#random_3 ").html(english_data[main_num][main_top][top].sub[0].level[0].obt3);
$("#random_4").html(english_data[main_num][main_top][top].sub[0].level[0].obt4);
 ans = english_data[main_num][main_top][top].sub[0].level[0].ans;
 console.log(ans);



}



})
//
function repeat(){

}
var show=0;
var ans_key;
function next_random(){
//Fullscreen.on();
  $(document).ready(function(){

      $("#random1").css('background-color', '');
      $("#random1").css('border', '');

      $("#random2").css('background-color', '');
      $("#random2").css('border', '');

      $("#random3").css('background-color', '');
      $("#random3").css('border', '');

      $("#random4").css('background-color', '');
      $("#random4").css('border', '');

      $("#random1").attr('onclick', 'check(1)');
      $("#random2").attr('onclick', 'check(2)');
      $("#random3").attr('onclick', 'check(3)');
      $("#random4").attr('onclick', 'check(4)');


  })

  var topic=[];
  var level_arr=[];
var topic_length = english_data[main_num][main_top].length;
console.log(topic_length-1);

var level= english_data[main_num][main_top][0].sub.length;
console.log(level);

for (var i=0;i<topic_length;i++){
topic.push(i);


}
for (var j=0;j<=level;j++){

level_arr.push(j);
}
console.log(english_data[main_num][main_top][0].sub[0].level[0]);
var top=Math.floor((Math.random() * topic_length) + 1)
var top=topic[top];
var lev=Math.floor((Math.random() * 2) + 1);
console.log(lev)


$("#random_question").html(english_data[main_num][main_top][top].sub[lev].level[0].ques);
$("#random_1 ").html(english_data[main_num][main_top][top].sub[lev].level[0].obt1);
$("#random_2").html(english_data[main_num][main_top][top].sub[lev].level[0].obt2);
$("#random_3 ").html(english_data[main_num][main_top][top].sub[lev].level[0].obt3);
$("#random_4").html(english_data[main_num][main_top][top].sub[lev].level[0].obt4);
 ans = english_data[main_num][main_top][top].sub[lev].level[0].ans;
 console.log(ans);



show=show+1;
for(var t=0;t<1000;t=t+10){
if(show===t){

  showInterstitialFunc();
}
}

}
var cor;

///////
function check(q){
move=move+5;
  chk_1 = $('#random_1').text();
  chk_2 = $('#random_2').text();
  chk_3 = $('#random_3').text();
  chk_4 = $('#random_4').text();

if(q===1){

  id="random1";
  var cor= $('#random_1').text();
console.log(cor);
}
else if(q===2){
  id="random2";
  cor= $('#random_2').text();

}
else if(q===3){
  id="random3";
  cor = $('#random_3').text();

}
else if(q===4){
  id="random4";
  cor = $('#random_4').text();

}

if(ans==cor){
  level_point=level_point+3;
  correct=correct+1;

$("#"+id).css('background-color', '#00ff00');
$("#"+id).css('border', 'solid green');
$("#"+id).attr('onclick', 'repeat()');

}
else{
  level_point=level_point-1;
  wrong=wrong+1;
  $("#"+id).css('background-color', "#e82e2e");
  $("#"+id).css('border', 'solid red');
navigator.vibrate(50);
$("#"+id).attr('onclick', 'repeat()');

}

console.log(level_point);


  if (ans == chk_1) {
    $("#random1").css('background-color', '#00ff00');
    $("#random1").css('border', 'solid green');
    $("#random1").attr('onclick', 'repeat()');
  }
  else {
    $("#random1").attr('onclick', 'repeat()');

  }


  if (ans == chk_2) {
    $("#random2").css('background-color', '#00ff00');
    $("#random2").css('border', 'solid green');
    $("#random2").attr('onclick', 'repeat()');
  } else {
    $("#random2").attr('onclick', 'repeat()');

  }


  if (ans == chk_3) {
    $("#random3").css('background-color', '#00ff00');
    $("#random3").css('border', 'solid green');
      console.log("level_point= "+level_point);
    $("#th_3").attr('class', 'btn btn-success');
    $("#random3").attr('onclick', 'repeat()');
  }

  else {
    $("#random3").attr('onclick', 'repeat()');

  }



  if (ans == chk_4) {
    //    alert("righht");
    $("#random4").css('background-color', '#00ff00');
    $("#random4").css('border', 'solid green');
    $("#th_4").attr('class', 'btn btn-success');
    $("#random4").attr('onclick', 'repeat()');
  }

  else {
    $("#random4").attr('onclick', 'repeat()');

    }
$("#random_score").html(level_point);
$("#random_correct").html(correct);
$("#random_wrong").html(wrong);



}






 function favourite_(){
alert("fav")
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
