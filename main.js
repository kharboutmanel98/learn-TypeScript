//  function affiche(msg) {
//     console.log(msg)
// }
// var msg = "developer";
// affiche(msg)
// function varTest() {
//     var x = 1;
//     if (true) {
//         let x = 2;
//         console.log(x)
//     }
//     console.log(x)
// }
// varTest();
// function varTest() {
//     for (var i = 0; i< 5; i++) {
//         console.log(i)
//     }
//     console.log("msg : dernier element" , i)
// }
// varTest();
// let age = 20;
// age = "20 ans";
// let a: number;
// a = 12;
// a = "string";
// a = true;
var a;
var b;
var d = [1, 2, 3];
var f = [1, "b", true];
var g;
var Color;
(function (Color) {
    Color[Color["red"] = 3] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 5] = "blue";
})(Color || (Color = {}));
var background = Color.blue;
