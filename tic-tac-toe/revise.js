// call, apply, bind
let myObj = {
    firstname: "arvind",
    lastname: "prime",
    printName: function () {
        console.log(this.firstname + " " + this.lastname);

    }
}

// let myFunc = myObj.printName;
// myFunc.call(myObj, "Pune", "India")
// myFunc.apply(myObj, ["pune", "India"])
// let myFunc2 = myFunc.bind(myObj, "Pune", "India")
// myFunc2()


// let myArrowFn = (a, b) => a+b;
// console.log(myArrowFn(2, 4));
let myObj2 = {
    firstname: "arvind",
    lastname: "prime",
    printName: () => {
        console.log(this.firstname + " " + this.lastname);
    }
}

// firstname = "Ayush"
// lastname = "Ahija"
let myFuncNormal = myObj.printName;
let myFuncArrow = myObj2.printName;

// myObj.printName();
// myObj2.printName();

// myFuncNormal()
// myFuncArrow()


var bunny = {
    firstname: 'Usagi',
    tasks: ['transform', 'eat cake', 'blow kisses'],
    _this: this,
    showTasks: function() {
        console.log(this)
      this.tasks.forEach(function(task) {
          console.log(this)
        // console.log(this.firstname + " wants to " + task);
      });
    },
    showTasksArrow: () => {
        console.log(this)
    }
};

// console.log(bunny._this)

  
// bunny.showTasks();
// bunny.showTasksArrow();

var standAloneFunc = function(){
    console.log(this);
}
  
// standAloneFunc();



// Console log quirk behavior
let p = {
    name: "ayush",
    city: "Bhilwara",
    d: {
        state: "rajasthan"
    }
}

let copyObj = {
    ...p,
    d: {...p.d}
}
console.log(copyObj)
copyObj.d.state = "Bihar";
console.log(p);


const varp = (a) => {
    console.log("Inside the fn: ", a, a.d.state,);
    console.log(p.d.state,)
    let m = { 
        ...a
    };
    m.d.state = "Maharastra";
}



// console.info("this is early of the function call ", p, p.d.state);

// setTimeout(() => {
//     varp(p);
//     console.log("After", p, p.d.state);
// }, 5000);


