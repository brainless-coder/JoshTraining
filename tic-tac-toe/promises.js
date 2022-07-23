const url = 'https://api.github.com/users';

let myPromise = new Promise((resolve, reject) => {
    let error = false;
    if (!error) {
        resolve("I am successfull");
    } else {
        reject("I failed");
    }
});


// myPromise.then(data => console.log(data))
// .catch(err => console.log(err));

// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(e => console.log(e))

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    return data;
}

// let data = getData(url);
// console.log("Outside: ", data);
// data.then(d => console.log(d))

(async () => {
    let data = await getData(url);
    // console.log("Inside: ", data);
})()

let arr = [1, 2, 3, 4];

// ye bhi ek higher order fn hai, bcoz ye args me ek func le rha hai
arr.forEach((ele) => {
    console.log(ele);
})