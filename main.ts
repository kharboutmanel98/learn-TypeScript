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

//! declaration variable typescript
// let age = 20;
// age = "20 ans";

// let a: number;
// a = 12;
// a = "string";
// a = true;

// let a: number;
// let b: string;
// let d: number[] = [1, 2, 3];
// let f: any[] = [1, "b" , true];
// let g: any;

// enum Color {
//     red = 3, green = 2, blue = 5
// }
// let background = Color.blue;

//! type assertion
// let someTh: string[];
// let char = someTh.concat
// console.log(char)

// let someTh;
// someTh = "manel";
// let char = (someTh as string).
// let char = (<string>someTh).

//! arrow function
// let someTh = function (msg: string): string {
//     return msg;
// }
// let affiche = (msg: string): string => msg;

//! notion de l'interface
interface Contact {
    name: string, 
    tel: string
}
let createContact = (contact: Contact) => {
    
  
    
}
createContact({
    name: "manel",
    tel: "20548265"
})