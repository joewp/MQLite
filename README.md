# MQLite
A simple memory queue
# Example Usage:

```javascript


var MQLite = require('.././MQLite');
var mq = new MQLite();

function saveData(){
	var data = mq.pop(100);
	console.log('save data:',data);
	//todo:save data...
}
setInterval(saveData, 1000);

setInterval(function(){
	var data = {name:'xx name',time:Date.now()};
	mq.push(data);
	console.log('push data:',data);
},100);



```

