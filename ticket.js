/* 
1. if ticket numbers less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100 
   rest tickets will be 90 tk per piece
3. if you purchase more than 200 tickets
   first 100 ---> 100tk
   101-200 ---> 90tk
   200+ ---> 70tk 

*/

function ticketPrice(ticketQuantiy) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if (ticketQuantiy <= 100) {
        const price = ticketQuantiy * first100Rate;
        console.log(price);
    }
}
ticketPrice(20);