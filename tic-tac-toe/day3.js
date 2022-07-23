// Q1: An list of employees along with their each month salary they have received. Calculate the total salary each employee has received till date. Write a function which takes the below input & prints the output as shown

let employeeDetails = [
    {
      name: 'Ramesh',
      salary: 15000,
      received_date: '2020-10-26T12:35:24+00:00',
    },
    {
      name: 'Ramesh',
      salary: 10000,
      received_date: '2020-12-01T12:35:24+00:00',
    },
    {
      name: 'Kamlesh',
      salary: 7000,
      received_date: '2020-11-01T12:35:24+00:00',
    },
    {
      name: 'Suresh',
      salary: 10000,
      received_date: '2020-11-01T12:35:24+00:00',
    },
    {
      name: 'Kamlesh',
      salary: 8000,
      received_date: '2020-12-01T12:35:24+00:00',
    },
];

function findSalary (input) {
    let output = [];
    input.forEach(ele => {
        const userObj = output.find(e => e.name === ele.name);
        if (userObj) {
            userObj.salary += ele.salary;
        } else {
            let {received_date, ...tempObj} = ele;
            output.push(tempObj);
        }
    });
    return output;
}

console.log(findSalary(employeeDetails));


let result = employeeDetails.reduce((allEmp, emp) => {
    let empObj = allEmp.find(ele => ele.name === emp.name);
    if (empObj) {
        empObj.salary += emp.salary;
    } else {
        allEmp.push({name: emp.name, salary: emp.salary})
    }
    return allEmp;
}, []);

console.log(result);


// Q2: Write your own groupBy function (Don't use any thirdparty library or inbuilt function). The function should take below input as argument and print the output in given format

let showDetails = [
    { type: 'Movie', name: 'M1'},
    { type: 'TV Show', name: 'TS1'},
    { type: 'Movie', name: 'M2'},
    { type: 'TV Show', name: 'TS2'},
    { type: 'Serial', name: 'S1'}
];

function groupBy(showDetails) {
    let output = {};
    for (let i = 0; i < showDetails.length; ++i) {
        let showType = showDetails[i].type;
        let outputTypes = Object.keys(output);
    
        if (outputTypes.includes(showType)) {
            output[showType].push(showDetails[i]);
        } else {
            output[showType] = [showDetails[i]];
        }
    }
    return output;
}

console.log(groupBy(showDetails));


let groupByReduce = showDetails.reduce((allShows, currShow) => {
    let flag = Object.keys(allShows).includes(currShow.type);
    if (flag) {
        allShows[currShow.type].push(currShow);
    } else {
        allShows[currShow.type] = [currShow];
    }
    return allShows;
}, {});

console.log(groupByReduce);



// Map

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

function myFunction(num) {
  return num * 10;
}

// console.log(numbers);
// console.log(newArr);

// Polyfill for map
Array.prototype.myMap = function(callbackFunction) {
    let newArr = [];
    this.forEach(ele => {
        newArr.push(callbackFunction(ele));
    });

    return newArr;
};

// console.log(numbers.myMap(num => num*100));


const names = ["Arvind", "Suraj", "Sameed", "Shivprasad"];
console.log(names);
// console.log(names.toString());
// console.log(names.toLocaleString());

delete names[0];        // not preferred, as it leaves that place empty
console.log(names);

const myArr = names.concat(numbers, newArr);
console.log(myArr);

const filteredArray = myArr.filter(ele => {
    return ele > 100;
});
// console.log(filteredArray);

const reducedVal = filteredArray.reduce((total, val, index, array) => {
    return total + val;
});
// console.log(reducedVal);

const [a, b, c, ...d] = myArr;
console.log(a, b, c, d);

const person = {
    name: "Arvind",
    lastName: "Prime",
    age: 21,
    address :{
        city: "Patna",
        state: "Bihar"
    }
}

let {name, age, address} = person;
console.log(name, age, address);
address.city = "Pune";
name = "Suraj"
console.log(name, age, address);
console.log(person)

const newPerson = {...person};
console.log(newPerson)
newPerson.address.city = "Patna";
console.log(person)
console.log(newPerson)


// pehle fn ke run hone ke baad hi agla fn chale
function A(a, b) {
    console.log(a+b);
}

function B(c) {
    console.log(c*c);
}

A(2,4, ()=> {
    B(6);
});

// B(6);



