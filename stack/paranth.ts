
// function seatAudience(seats:any){
// console.log(seats);

// let seat:number[][]
// let number=1

// seats.forEach((element: any[]) => {
//     let row=element[0]
//     let col=element[1]
//     for(let i=0;i<col;i++){
//         for(let j=0;j<row;j++){
//             seat[i][j]=number
//             number++
//         }
//     }
//     console.log(seat);

// });



// }




let seat: number[][] = [[3, 4], [4, 5], [2, 3], [3, 4]]
// seatAudience(seat);

let seats = new Array(seat.length);
for (let i = 0; i < seat.length; i++) {
    let row = seat[i][0]
    let col = seat[i][1]
    console.log(row, 'ppp');

    console.log(col, ';;;');

    
    for (let j = 0; j < row; j++) {
        seats[i] = new Array(seat[j][i]);
        for (let k = 0; k < col; k++) {
            seats[j][k] = 1;
        }
    }

}
console.log(seats);


export { }
