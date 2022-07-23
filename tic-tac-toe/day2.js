// Hoisting

getName();
// console.log(x);
// console.log(getName);

let x = 5;
function getName() {
    console.log('Arvind Prime');
}

// myFunc();
// myFunc2();
// console.log(myFunc2);

// Function Statement
function myFunc() {
    console.log('Function Statement');
}

// Function Expression
// here myFunc2 will now behave like a variable and not a function
var myFunc2 = function() {
    console.log('Function Expression');
}





let myObj = {a:10}
// let myObj2 = myObj;
// myObj.a = 20;
// let myObj2 = Object.assign({hey: true}, myObj, person);
// console.log(myObj, myObj2);


// this.addEventListener("click", () => {
//     document.write("Surprise")
// });

let person = {
    name: "Arvind",
    lastName: "Prime",
    printName: function (a, b) { 
        // console.log(this);
        console.log(a, b);
        console.log(this.name + " " + this.lastName);
    }
}

let name = "Goapl";
// console.log(this);
// person.printName();
// let myPrintName = person.printName;
// let thisContext = myPrintName.bind(person, "bind1", "bind2");
// thisContext();
// myPrintName.call(this, "call1", "call2");
// myPrintName.apply(person, ["apply1", "apply2"]);


// Function.prototype.myBind = function (obj, context, ...args) {
//     obj.call(context, args);
// }

// myPrintName.myBind(person, person);
