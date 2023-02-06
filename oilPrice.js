// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 


// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
// প্রতি লিটার অকটেনের এর দাম – 135 টাকা 

// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে। 

function oilPrice(diesel , petrol, octen) {

    var degailPrice = diesel  * 114;
    var petrollPrice = petrol * 130;
    var octenPrice = octen * 135;
    var sum = degailPrice + petrollPrice + octenPrice;
    return sum;
}
let result = oilPrice(1,20,10);
console.log(result);