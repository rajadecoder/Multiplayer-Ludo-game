admob.rewardvideo.config({
 id: 'ca-app-pub-7555788873308464/9878963488',
})

admob.rewardvideo.prepare()
setTimeout(function(){
  admob.rewardvideo.show()
alert("running");
},5000)
