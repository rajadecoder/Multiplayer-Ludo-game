
const reducer = (accumulator, currentValue) => accumulator + currentValue;
var aptitude_score;
var pont;

var level_point;
var db_score;
var final_score;
var e;//variable to store user email

var db_scores;
var db_levels;

var level1=[];
var data={topic:[]};
var to_send=[];
var point=0;
var level_point=0;
var main_topic;
var ans;
var topic;
var aptitude;
var gk;
var reasoning;
var english;
var i = 0;
var db;
var head;
var selected_level; ////taking the initial value of level selected by user
var level=0;  ///making it equal to level
var ques_num=1;
var main_top=0;

///////////////////////variables to store english data
var english_data;
var hindi_data;

var reasoning_data;
var aptitude_data;
var gk_data;


var resoning_array=[];
var reasoning_q;

var aptitude_array=[];
var aptitude_q;

var gk_array=[];
var gk_q;

var english_array=[];
var english_q;

var total_question;


var topic_levels;
var step;

var english_topics=[];
var eng=[];
var english_total;


$("document").ready(function(){
  document.addEventListener("backbutton", onBackKeyDown, false);
  function onBackKeyDown() {
    window.history.back(-1);
  }


})

var english_data = JSON.parse(localStorage.getItem('english_data'));


console.log(english_data);
  //storing data for every main topic
  aptitude_data=english_data[2];
  gk_data=english_data[1];
  reasoning_data=english_data[0];


  //loop for reasoning question
  for(var p=0;p<english_data[0].reasoning.length;p++){
    for(var j=0;j<english_data[0].reasoning[p].sub.length;j++){

         resoning_array.push(english_data[0].reasoning[p].sub[j].level.length);
    }

  };

  //loop for aptitude question
  for(var p=0;p<english_data[2].aptitude.length;p++){
    for(var j=0;j<english_data[2].aptitude[p].sub.length;j++){

         aptitude_array.push(english_data[2].aptitude[p].sub[j].level.length);
    }

  }

  //loop for gk question
  for(var p=0;p<english_data[1].gk.length;p++){
    for(var j=0;j<english_data[1].gk[p].sub.length;j++){

         gk_array.push(english_data[1].gk[p].sub[j].level.length);
    }

  }

  //looop for english question
  for(var p=0;p<english_data[3].english.length;p++){
    for(var j=0;j<english_data[3].english[p].sub.length;j++){

         english_array.push(english_data[3].english[p].sub[j].level.length);
    }

  }



  //adding elemnts of array to get total question in the topic
  reasoning_q=resoning_array.reduce(reducer);
  aptitude_q=aptitude_array.reduce(reducer);
  gk_q=gk_array.reduce(reducer);
  english_q=english_array.reduce(reducer);

  //consoling the totlal questions of each topic
  console.log("reasoning-question-- "+reasoning_q);
  console.log("aptitude-question-- "+aptitude_q);
  console.log("gk-question-- "+gk_q);
  console.log("english-question-- "+english_q);
  //console.log(english_total);










      $.get("https://spotdoit14812.firebaseio.com/users.json", function(users) {

        firebase.auth().onAuthStateChanged(function(user) {

          if (user) {
            var user = firebase.auth().currentUser;
              var str=user.email;
              var e=str.replace(/[^a-zA-Z0-9]/g, "");
              console.log(e);
              if(users.eng[e]==null){
            console.log("email "+e);
              var ref = firebase.database().ref("users/"+"eng/"+e);
              ref.update(english);   // Creates a new ref with a new "push key"
              }
console.log(e);
    //location.load;
console.log(users.eng[e].reasoning[1][1]);
//}
/////calculating reasonign score
var sum_reasoning=[];
for(var k=0;k<=20;k++){
sum_reasoning.push(parseInt(users.eng[e].reasoning[k][1]));
}
//console.log(sum);
var reasoning_score=sum_reasoning.reduce(reducer);
console.log(reasoning_score);
/////calculating aptitude score
/////////////////
var sum_aptitude=[];
for(var l=0;l<=20;l++){
sum_aptitude.push(parseInt(users.eng[e].aptitude[l][1]));
}
//console.log(sum_aptitude);
 aptitude_score=sum_aptitude.reduce(reducer);
console.log(aptitude_score);
///////////////
///calculating gk score
var sum_gk=[];
for(var s=0;s<=20;s++){
sum_gk.push(parseInt(users.eng[e].gk[s][1]));
}
//console.log(sum);
var gk_score=sum_gk.reduce(reducer);
console.log(gk_score);
//calculating english score
var sum_english=[];
for(var r=0;r<=20;r++){
sum_english.push(parseInt(users.eng[e].english[r][1]));
}
//console.log(sum);
var english_score=sum_english.reduce(reducer);
console.log(english_score);

/////////////////calculating total score////

var total_score_english=reasoning_score+aptitude_score+gk_score+english_score;



///////calculating number of question soved in each maintopic///////////////////////////////////////////////////////////////////////////////////////////////////////////

/////calculating the numbers of questions user completed in reasoning
var ques_completed_reasoning_array=[];
for(var c=0;c<users.eng[e].reasoning.length;c++){
  ques_completed_reasoning_array.push(parseInt(users.eng[e].reasoning[c][0]));
}
console.log(ques_completed_reasoning_array);
var ques_completed_reasoning=ques_completed_reasoning_array.reduce(reducer)*10;
console.log(ques_completed_reasoning);


/////calculating the numbers of questions user completed in aptitude
//console.log(users.eng[e].aptitude);
var ques_completed_aptitude_array=[];
for(var a=0;a<users.eng[e].aptitude.length;a++){
   ques_completed_aptitude_array.push(parseInt(users.eng[e].aptitude[a][0]));
}
var ques_completed_aptitude=ques_completed_aptitude_array.reduce(reducer)*10;
console.log(ques_completed_aptitude);

/////calculating the numbers of questions user completed in gk
//console.log(users.eng[e].aptitude);
var ques_completed_gk_array=[];
for(var b=0;b<users.eng[e].gk.length;b++){
   ques_completed_gk_array.push(parseInt(users.eng[e].gk[b][0]));
}
var ques_completed_gk=ques_completed_gk_array.reduce(reducer)*10;
console.log(ques_completed_gk);

/////calculating the numbers of questions user completed in english
//console.log(users.eng[e].aptitude);
var ques_completed_english_array=[];
for(var d=0;d<users.eng[e].english.length;d++){
   ques_completed_english_array.push(parseInt(users.eng[e].english[d][0]));
}
var ques_completed_english=ques_completed_english_array.reduce(reducer)*10;
console.log(ques_completed_english);
////calculating tottal question user solved///////////
var ques_completed_total=ques_completed_english+ques_completed_aptitude+ques_completed_gk+ques_completed_reasoning;

//////////////////user solved ques finfsh/////////////////////
var score="Your Score is : "+ total_score_english;
  $('#score').html(score);    //showing how much he scored


//for total questions
english_total=reasoning_q+aptitude_q+gk_q+english_q;

console.log(english_total);
var total=english_total;     //total questions in the topic
total_moved=ques_completed_total;      //question he finished
var overall_per=(total_moved/total)*100;        //calculating percentage
overall_per=overall_per+"%";

console.log(overall_per);
    $('#overall_show').css("width", overall_per); //setting width of progress bar
    $('#overall_moved').html(total_moved+"/"+total);    //showing how much questions he solved
//for total question finished

//for reasoning
var reasoning_total=reasoning_q;     //total questions in the topic
reasoning_total_moved=ques_completed_reasoning;      //question he finished
var reasoning_per=(reasoning_total_moved/reasoning_total)*100;        //calculating percentage
reasoning_per = reasoning_per+"%";

console.log(reasoning_per);
    $('#reasoning_show').css("width", reasoning_per); //setting width of progress bar
    $('#reasoning_moved').html(reasoning_total_moved+"/"+reasoning_total);    //showing how much questions he solved
////////////


//for aptitude
var aptitude_total=aptitude_q;     //total questions in the topic
aptitude_total_moved=ques_completed_aptitude;      //question he finished
var aptitude_per=(aptitude_total_moved/aptitude_total)*100;        //calculating percentage
aptitude_per = aptitude_per+"%";

console.log(aptitude_per);
    $('#aptitude_show').css("width", aptitude_per); //setting width of progress bar
    $('#aptitude_moved').html(aptitude_total_moved+"/"+aptitude_total);    //showing how much questions he solved

//////////

//for aptitude
var gk_total=gk_q;     //total questions in the topic
gk_total_moved=ques_completed_gk;      //question he finished
var gk_per=(gk_total_moved/gk_total)*100;        //calculating percentage
gk_per = gk_per+"%";

console.log(gk_per);
    $('#gk_show').css("width", gk_per); //setting width of progress bar
    $('#gk_moved').html(gk_total_moved+"/"+gk_total);    //showing how much questions he solved

/////
//for aptitude
var english_total=english_q;     //total questions in the topic
english_total_moved=ques_completed_english;      //question he finished
var english_per=(english_total_moved/english_total)*100;        //calculating percentage
english_per = english_per+"%";

console.log(english_per);
    $('#english_show').css("width", english_per); //setting width of progress bar
    $('#english_moved').html(english_total_moved+"/"+english_total);    //showing how much questions he solved

  }
  })


  })


  document.addEventListener('deviceready', function () {
      if(typeof Fullscreen !== 'undefined'){
          //It's safe to use Fullscreen here
  Fullscreen.on();

      }
  });
