// এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

// input: [-1,2,-3,4,5,6,-7,8,-9,10]

// Output: 3


// let num = 4;
// if(num < 5){
//     console.log('yes');
// }
// else{
//     console.log('no')
// }

// let numbers = [-1,2,-3,4,5,6,-7,8,-9,10];

// let count = 0;
// for(let i = 0; i< numbers.length; i++){
//     const element = numbers[i];
//     // console.log(element);
//     if(element > 5){
//         console.log('Yes bro', element);
//         count = count + 1;
//     }
//     else{
//         console.log('5 er thake soto', element);
//     }
// }
// console.log(count);

function greatheThanFive(numbers){
    let count = 0;
    for(let i = 0; i< numbers.length; i++){
        const element = numbers[i]; 
        if(element > 5)
        count ++;
    }
    return count;
}

const result = greatheThanFive([-1,2,-3,4,5,6,-7,8,-9,10]);
console.log(result);





