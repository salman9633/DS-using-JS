function seatAudience(seats) {
//   var row, col, seated = 0;
//   for (row = 0; row < seats.length; row++) {
//     for (col = 0; col < seats[row][0]; col++) {
//       if (col === 0 || col === seats[row][0] - 1) {
//         // Fill aisle seats first
//         console.log("Passenger seated at row " + (row + 1) + ", aisle seat " + (col + 1));
//         seated++;
//       } else if (col === 1 || col === seats[row][0] - 2) {
//         // Fill window seats next
//         console.log("Passenger seated at row " + (row + 1) + ", window seat " + (col + 1));
//         seated++;
//       } else {
//         // Fill center seats last
//         console.log("Passenger seated at row " + (row + 1) + ", center seat " + (col + 1));
//         seated++;
//       }
//     }
//   }
//   console.log("Total number of passengers seated: " + seated);
let seat=[]
let num=1
seats.forEach(element => {
    let row=element[0]
    let col=element[1]
    for(let i=0;i<col-1;i++){
        for(let j=0;j<row-1;j++){
            seat[[i][j]]=num
            num++
        }
    }
    

});
console.log(seat);

}

var seats = [[3,4], [4,5], [2,3], [3,4]];
seatAudience(seats);
