var myPenguin = {
	name    :"Pinga", 
	gender  :"Female", 
	ppenergy:"High"
};
console.log("Hello, I'm a penguin and my name is " + myPenguin.name + "!");

myPenguin.canFly = function() {
	return false
};
console.log(myPenguin.canFly());

myPenguin.chirp = "CHIRP CHIRP! Is this what penguins sound like?";
console.log(myPenguin.chirp);

myPenguin.sayHello = function() {
	return "Hello, I'm a penguin and my name is " + this.name + "!";
}
console.log(myPenguin.sayHello());

myPenguin.name = "Penguin McPenguinFace";
console.log(myPenguin.sayHello());

myPenguin.fly = function() {
	if (myPenguin.canFly() == true) {
 		return "I can fly!"
	} else {
		return "No flying for me!"
	}
};
console.log(myPenguin.fly());

myPenguin.canFly = function() {
	return true
};
myPenguin.fly = function() {
	if (myPenguin.canFly() == true) {
 		return "I can fly!"
	} else {
		return "No flying for me!"
	}
};
console.log(myPenguin.fly());

var text = "";
for (x in myPenguin) {
   console.log(x);
};

var i
var text = "";
for (x in myPenguin) {
   console.log(myPenguin[x])
};