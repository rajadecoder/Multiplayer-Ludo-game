

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
var hindi_data;





//var hindi_data = JSON.parse(localStorage.getItem('user'));



var hindi_level_score;
const reducer = (accumulator, currentValue) => accumulator + currentValue;
var topic_levels;
//////////////variables to store hindi data
var level_point=0;
var reasoning_reahindi;
var history_hindi;
var indian_hindi;
var world_hindi;
var up_hindi;
var sports_hindi;
var aptitude_hindi;
var railway_hindi;

var hindi_main_top;
var newArr = [];
var array=[];
var hindi_ans;


//array to store hindi question length
var reasoning_array_hindi=[];
var reasoning_q_hindi;

var history_array_hindi=[];
var history_q_hindi;


var indian_gk_array_hindi=[];
var indian_gk_q_hindi;


var history_array_hindi=[];
var history_q_hindi;


var world_gk_array_hindi=[];
var world_gk__q_hindi;


var up_gk_array_hindi=[];
var up_gk_q_hindi;


var sports_gk_array_hindi=[];
var sports_gk_q_hindi;


var aptitude_array_hindi=[];
var aptitude_q_hindi;

var railway_array_hindi=[];
var railway_q_hindi;

////////////////////////////////////////////////////////////////////////////////
var hindi_total;
var total_question_completer_hindi_array=[];
var total_question_completer_hindi;
var e;


var hindi_data = JSON.parse(localStorage.getItem('hindi'));

$("#loader").show("slow");



$(document).ready(function(){

  document.addEventListener('deviceready', function () {
      if(typeof Fullscreen !== 'undefined'){
          //It's safe to use Fullscreen here
  Fullscreen.on();

      }
  });



  //if(path=="hindi.html" || path=="progress_bar_hindi.html"){
  firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
      var user = firebase.auth().currentUser;
        var str=user.email;
         e=str.replace(/[^a-zA-Z0-9]/g, "");
        console.log(e);
}
  $.get("https://spotdoit14812.firebaseio.com/users/hindi/"+e+".json", function(completed) {

          $("#user").html(str);
          if(completed==null){
        console.log("email "+e);
          var ref = firebase.database().ref("users/"+"hindi/"+e);
          ref.update(initial);   // Creates a new ref with a new "push key"
          }

    })


  })


console.log(hindi_data);
console.log(hindi_data.hindi[0]);
 reasoning_hindi = hindi_data.hindi.length;
history_hindi = hindi_data.hindi[1];
indian_hindi = hindi_data.hindi[2];
world_hindi = hindi_data.hindi[3];
up_hindi = hindi_data.hindi[4];
sports_hindi = hindi_data.hindi[5];
aptitude_hindi = hindi_data.hindi[6];
railway_hindi = hindi_data.hindi[7];

console.log(hindi_data.hindi[0].reasoning);
console.log("level "+hindi_data.hindi[0].reasoning.length);
console.log(hindi_data.hindi[0].reasoning[1].level.length);
///for loop for hindi
//for resononing








for(var p=0;p<hindi_data.hindi[0].reasoning.length;p++){

       reasoning_array_hindi.push(hindi_data.hindi[0].reasoning[p].level.length);
  }

  //for aotitude
  for(var p=0;p<hindi_data.hindi[1].history.length;p++){

         history_array_hindi.push(hindi_data.hindi[1].history[p].level.length);
    }


    for(var p=0;p<hindi_data.hindi[2].indian_gk.length;p++){

           indian_gk_array_hindi.push(hindi_data.hindi[2].indian_gk[p].level.length);
      }


      for(var p=0;p<hindi_data.hindi[3].world_gk.length;p++){

             world_gk_array_hindi.push(hindi_data.hindi[3].world_gk[p].level.length);
        }


              for(var p=0;p<hindi_data.hindi[4].up_gk.length;p++){

                     up_gk_array_hindi.push(hindi_data.hindi[4].up_gk[p].level.length);
                }


                      for(var p=1;p<hindi_data.hindi[5].sports_gk.length;p++){

                             sports_gk_array_hindi.push(hindi_data.hindi[5].sports_gk[p].level.length);
                        }


                                              for(var p=0;p<hindi_data.hindi[6].aptitude.length;p++){

                                                     aptitude_array_hindi.push(hindi_data.hindi[6].aptitude[p].level.length);
                                                }


                                                for(var p=0;p<hindi_data.hindi[7].railway.length;p++){

                                                       railway_array_hindi.push(hindi_data.hindi[7].railway[p].level.length);
                                                  }


reasoning_q_hindi=reasoning_array_hindi.reduce(reducer);
console.log("reasoning_q_hindi "+reasoning_q_hindi);


history_q_hindi=history_array_hindi.reduce(reducer);
console.log("history_q_hindi "+history_q_hindi);

indian_gk_q_hindi=indian_gk_array_hindi.reduce(reducer);
console.log("indian_gk_q_hindi "+indian_gk_q_hindi);


world_gk_q_hindi=world_gk_array_hindi.reduce(reducer);
console.log("world_gk_q_hindi "+world_gk_q_hindi);


up_gk_q_hindi=up_gk_array_hindi.reduce(reducer);
console.log("up_gk_q_hindi "+up_gk_q_hindi);


sports_gk_q_hindi=sports_gk_array_hindi.reduce(reducer);
console.log("sports_gk_q_hindi "+sports_gk_q_hindi);

aptitude_q_hindi=aptitude_array_hindi.reduce(reducer);
console.log("aptitude_q_hindi "+aptitude_q_hindi);

 railway_q_hindi=aptitude_array_hindi.reduce(reducer);
console.log("railway_q_hindi "+railway_q_hindi);


hindi_total=reasoning_q_hindi+history_q_hindi+indian_gk_q_hindi+world_gk_q_hindi+up_gk_q_hindi+sports_gk_q_hindi+aptitude_q_hindi+railway_q_hindi;



console.log(hindi_total);
//////////////////////////////


  firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
      var user = firebase.auth().currentUser;
        var str=user.email;
         e=str.replace(/[^a-zA-Z0-9]/g, "");
        console.log(e);

        $("#loader").hide("slow");

}

  $.get("https://spotdoit14812.firebaseio.com/users/hindi/"+e+".json", function(users) {
  var hindi_data = JSON.parse(localStorage.getItem('hindi'));
  var level_completed_reasoning= users.reasoning[0];
  var ques_completed_reasoning=level_completed_reasoning*10;

  var level_completed_aptitude= users.aptitude[0];
  var ques_completed_aptitude=level_completed_aptitude*10;

  var level_completed_indian_gk= users.indian_gk[0];
  var ques_completed_indian_gk=level_completed_indian_gk*10;

  var level_completed_world_gk= users.world_gk[0];
  var ques_completed_world_gk=level_completed_world_gk*10;


  var level_completed_history= users.history[0];
  var ques_completed_history=level_completed_history*10;



  var level_completed_up_gk= users.up_gk[0];
  var ques_completed_up_gk=level_completed_up_gk*10;

  var level_completed_railway= users.railway[0];
  var ques_completed_railway=level_completed_railway*10;


  var level_completed_sports_gk= users.sports_gk[0];
  var ques_completed_sports_gk=level_completed_sports_gk*10;



  total_question_completer_hindi= ques_completed_sports_gk + ques_completed_railway + ques_completed_up_gk + ques_completed_history + level_completed_world_gk + level_completed_aptitude + ques_completed_reasoning + ques_completed_indian_gk ;
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var score = total_question_completer_hindi*3;
    $('#score').html(score);    //showing how much he scored


  var total=hindi_total;     //total questions in the topic
  var total_moved=total_question_completer_hindi;      //question he finished
  var overall_per=(total_moved/total)*100;        //calculating percentage
  overall_per=overall_per+"%";

  console.log(overall_per);
      $('#overall_show').css("width", overall_per); //setting width of progress bar
      $('#overall_moved').html(total_moved+"/"+total);    //showing how much questions he solved
  //for total question finished

  //for reasoning
  var reasoning_total=reasoning_q_hindi;     //total questions in the topic
  reasoning_total_moved=ques_completed_reasoning;      //question he finished
  var reasoning_per=(reasoning_total_moved/reasoning_total)*100;        //calculating percentage
  var reasoning_per = reasoning_per+"%";

  console.log(reasoning_per);
      $('#reasoning_show').css("width", reasoning_per); //setting width of progress bar
      $('#reasoning_moved').html(reasoning_total_moved+"/"+reasoning_total);    //showing how much questions he solved
  ////////////


  //for aptitude
  var aptitude_total=aptitude_q_hindi;     //total questions in the topic
  var aptitude_total_moved=ques_completed_aptitude;      //question he finished
  var aptitude_per=(aptitude_total_moved/aptitude_total)*100;        //calculating percentage
  var aptitude_per = aptitude_per+"%";

  console.log(aptitude_per);
      $('#aptitude_show').css("width", aptitude_per); //setting width of progress bar
      $('#aptitude_moved').html(aptitude_total_moved+"/"+aptitude_total);    //showing how much questions he solved

  //////////

  //for aptitude
  var indian_gk_total=indian_gk_q_hindi;     //total questions in the topic
  indian_gk_total_moved=ques_completed_indian_gk;      //question he finished
  var indian_gk_per=(indian_gk_total_moved/indian_gk_total)*100;        //calculating percentage
  var indian_gk_per = indian_gk_per+"%";

  console.log(indian_gk_per);
      $('#indian_gk_show').css("width", indian_gk_per); //setting width of progress bar
      $('#indian_gk_moved').html(indian_gk_total_moved+"/"+indian_gk_total);    //showing how much questions he solved

  /////
  //for aptitude
  var world_gk_total=world_gk_q_hindi;     //total questions in the topic
  var world_gk_total_moved=ques_completed_world_gk;      //question he finished
  var world_gk_per=(world_gk_total_moved/world_gk_total)*100;        //calculating percentage
  var world_gk_per = world_gk_per+"%";

  console.log(world_gk_per);
      $('#world_gk_show').css("width", world_gk_per); //setting width of progress bar
      $('#world_gk_moved').html(world_gk_total_moved+"/"+world_gk_total);    //showing how much questions he solved

      var history_total=history_q_hindi;     //total questions in the topic
      var history_total_moved=ques_completed_history;      //question he finished
      var history_per=(history_total_moved/history_total)*100;        //calculating percentage
      var history_per = history_per+"%";

      console.log(history_per);
          $('#history_show').css("width", history_per); //setting width of progress bar
          $('#history_moved').html(history_total_moved+"/"+history_total);    //showing how much questions he solved


              var up_gk_total=history_q_hindi;     //total questions in the topic
              var up_gk_total_moved=ques_completed_up_gk;      //question he finished
              var up_gk_per=(up_gk_total_moved/up_gk_total)*100;        //calculating percentage
              var up_gk_per = up_gk_per+"%";

              console.log(up_gk_per);
                  $('#up_gk_show').css("width", up_gk_per); //setting width of progress bar
                  $('#up_gk_moved').html(up_gk_total_moved+"/"+up_gk_total);    //showing how much questions he solved



                              var railway_total=railway_q_hindi;     //total questions in the topic
                              var railway_total_moved=ques_completed_railway;      //question he finished
                              var railway_per=(railway_total_moved/railway_total)*100;        //calculating percentage
                              var railway_per = railway_per+"%";

                              console.log(railway_per);
                                  $('#railway_show').css("width", railway_per); //setting width of progress bar
                                  $('#railway_moved').html(railway_total_moved+"/"+railway_total);    //showing how much questions he solved


                                                              var sports_gk_total=sports_gk_q_hindi;     //total questions in the topic
                                                              var sports_gk_total_moved=ques_completed_sports_gk;      //question he finished
                                                              var sports_gk_per=(sports_gk_total_moved/sports_gk_total)*100;        //calculating percentage
                                                              var sports_gk_per = sports_gk_per+"%";

                                                              console.log(sports_gk_per);
                                                                  $('#sports_gk_show').css("width", sports_gk_per); //setting width of progress bar
                                                                  $('#sports_gk_moved').html(sports_gk_total_moved+"/"+sports_gk_total);    //showing how much questions he solved




                                                                })

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  })



//}
})
