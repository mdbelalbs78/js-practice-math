/* 
তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো। 
*/

// let nameOne = 'Jhon'
// let nameTwo = 'Alexis'

// let friendOneLength = nameOne.length;
// let friendTwoLength = nameTwo.length;

// if (friendOneLength > friendTwoLength) {
//     console.log(nameOne.split("") .reverse().join(""));
// } else {
//     console.log(nameTwo.split("") .reverse().join(""));
// }

function reverseName(nameOne, nameTwo) {

    let friendOneLength = nameOne.length;
    let friendTwoLength = nameTwo.length;

    if (friendOneLength > friendTwoLength) {
        return nameOne.split("").reverse().join("");
    } else {
        return nameTwo.split("").reverse().join("");
    }
}

const result = reverseName('John', 'Alexis');
// console.log(result);

let str = 'Alexis'
let reversString = '';
for (let i = str.length - 1; i >= 0; i--) {
    let element = str[i];
    // console.log(element)
    reversString = reversString +element;
}
console.log(reversString);