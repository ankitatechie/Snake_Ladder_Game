var Game = function(player1,player2){
	this.turn="1";
	this.snakes=new Map();
	this.snakes.set(11,4);
	this.snakes.set(10,3);
	this.ladders=new Map();
	this.ladders.set(2,16);
	this.player1=player1;
	this.player2=player2;
}

var turn="1";
var snakes=new Map();
snakes.set(22,4);
snakes.set(11,2);
snakes.set(17,8);
var ladders=new Map();
ladders.set(9,20);
ladders.set(5,16);
ladders.set(14,23);
var player1,player2;
var Player = function (name) {
  this.name = name;
  this.position =0;
};

Player.prototype.move = function(number,color) {
	lastPosition=this.position;
  	this.position+= number
	if(this.position>25){
		this.position=lastPosition;
		return;
	}
	if(this.position==25){
		alert(this.name+" won. See you again.");
		window.location.reload();
	}
	if(snakes.has(this.position)){
		this.position=snakes.get(this.position);
	}
	if(ladders.has(this.position)){
		this.position=ladders.get(this.position);
	}
	if(lastPosition!=0){
		document.getElementById(lastPosition).style.backgroundColor='rgba(' + 186 + ',' + 191 + ',' + 222 + ','+0.3+')';
	}
	document.getElementById(this.position).style.backgroundColor=color;
	document.getElementById(this.position).style.opacity='0.9';
	
};
var game;
player1 = new Player("Alice");
player2 = new Player("Bob");
	
	
function init(){
	game=new Game(player1,player2);
}

function showNumber(){
var x = Math.floor((Math.random() * 6) + 1);
//document.getElementById('number').innerText=x;
document.getElementById('number').style.display="block";
if(turn=="1"){
	document.getElementById('number').innerText=player1.name+" got "+x;
	player1.move(x,'#FFB52B');
	document.getElementById("fp_position").innerText=player1.position;
	turn="2";
}
else{
	document.getElementById('number').innerText=player2.name+" got "+x;
	player2.move(x,'#7CFC00');
	document.getElementById("sp_position").innerText=player2.position;
	turn="1";
}
}
