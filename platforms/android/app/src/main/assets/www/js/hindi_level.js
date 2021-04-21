
var value;
var newArr=[];
var hindi_main_top;
var array;
var y;
var e;
$("#loader").show();

$(document).ready(function() {
  //var hindi_data = JSON.parse($("#hindi_data").text());

                       hindi_main_top=$("#main_topic_name").text();
                       console.log(hindi_main_top);

                       $("#head").html(hindi_main_top);
                       y=parseInt($("#main_topic_no").text());
                       console.log(y);
                       topic_levels=hindi_data.hindi[y][hindi_main_top].length; ///taking the number of levels from each topic when clicked

                       console.log(hindi_data);
                       console.log(y);
                       console.log(hindi_main_top);
                       console.log(topic_levels);

      firebase.auth().onAuthStateChanged(function(user) {

        if (user) {
          var user = firebase.auth().currentUser;
            var str=user.email;
             e=str.replace(/[^a-zA-Z0-9]/g, "");
    }
console.log(e);


$.get("https://spotdoit14812.firebaseio.com/users/hindi/"+e+".json", function(completed) {

  $("#loader").hide();
console.log(completed);

var hindi_level_completed = completed[hindi_main_top][0];
var hindi_level_score=completed[hindi_main_top][1];
console.log(hindi_level_completed);

////
for(var p=1;p<=topic_levels;p++){
  var na=p-1;
  if(p<=hindi_level_completed){

    $('#MyDiv_hindi').append('<button onclick="run('+na+')"  id="test+'+p+'" class="btn1 btn-success" ><span class="glyphicon glyphicon-ok pull-left" style="margin-top:0px;background-color:green;padding:10px 10px 10px 10px;margin-left:-30px"></span>Level-'+p+'</button>');

  }
  else if(p<=hindi_level_completed+1){
    $('#MyDiv_hindi').append('<button onclick="run('+na+')"  id="test+'+p+'" class="btn1 btn-success" ><span class="glyphicon glyphicon-lock pull-left" style="margin-top:0px;background-color:red;padding:10px 10px 10px 10px;margin-left:-30px"></span>Level-'+p+'</button>');

  }
  else if(p===1){
    $('#MyDiv_hindi').append('<button onclick="run('+na+')"  id="test+'+p+'" class="btn1 btn-success" ><span class="glyphicon glyphicon-lock pull-left" style="margin-top:0px;background-color:red;padding:10px 10px 10px 10px;margin-left:-30px"></span>Level-'+p+'</button>');
  }
  else{
    $('#MyDiv_hindi').append('<button onclick="run('+na+')"  id="test+'+p+'" class="btn1 btn-primary" disabled><span class="glyphicon glyphicon-lock pull-left" style="margin-top:0px;background-color:red;padding:10px 10px 10px 10px;margin-left:-30px"></span>Level-'+p+'</button>');

  }
}

//}
                                  })

                                })

})
