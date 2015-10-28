(function() {

  /*
var multiarray = [[1,"2",false], [3,2,5]];
console.log(multiarray);

var str1="two";
var str2="three";
var str3 = str1 + str2;
console.log(str3[3]);

var count = 0;
count++;
count +=3 ;
console.log(count);

console.log(str1 > str2);

var variablE = "abc"
console.log(variablE);

*/
/*
return
true;
*/
var x = 1;
var y = 2;

x
=
3

console.log(x);
//console.log(y);

var x16 = 0xFFFF;
console.log(x16);
var x8 = 0715;
console.log(x8);

console.log(1/0);
console.log(-1/0);
console.log(0/0);


var x = 0.2 - 0.1;
var y = 0.4 - 0.3;

var epsilon = 0.0001;
console.log(epsilon);
console.log(Math.abs(x-y) < epsilon);

var a = "1";
var b = 1;
console.log("-1" == true);
console.log("1" === true);
console.log("--------------");
console.log(null == undefined);
console.log(null === undefined);


var x = null;
var y = null;

console.log("++++++++++");
console.log(x == y);
console.log(x === y);

console.log(parseInt("123"));
1+2;


var x = undefined;
console.log(x * 1);

var x = {"a": 1, "b": true, c:"abc", d: [1,2,true]}
console.log(JSON.stringify(x));

console.log("---------------- Поднятие");


console.log(vv);
var vv = "abc"



var v = "global";

function f () {
  console.log(v);
  var v = "local"
  console.log(v);
}

f();



function Point (x, y){
   this.x = x;
   this.y = y;

   var xlocal = x;

   this.f = function(){return 1;}
   var flocal = function(){return 2;}
}


var pt = new Point(1,2);

console.log(pt);
console.log(pt.x);
console.log(pt.xlocal);
console.log(pt.f());
console.log(pt.flocal);

pt.z = 4;

Point.prototype.r = function () {
  return this.x;
}

console.log(pt.r());
console.log(pt);

console.log(pt instanceof Point);
console.log(pt instanceof Object);
console.log(pt instanceof Number);


console.log(typeof pt);
console.log(typeof 123);

delete pt.z;
console.log(pt);

var array = ["a","b","d"];

console.log("a" in array);

var b = {"x":2, "y":3};

var serialized = JSON.stringify(b);
console.log(serialized);

var deserialized = JSON.parse(serialized);
console.log(deserialized);

}());
