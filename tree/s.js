

function seating(seat) {

    let arr = []
    let row = 0;
    let col = 0;
    let num = 1

    for (let k = 0; k < seat.length; k++) {
        console.log(seat.length);
        row = seat[k][0]
        col = seat[k][1]
        console.log(row,'__________',col);

        for (let i = 0; i < col; i++) {
            arr[i] = []
            for (let j = 0; j < row; j++) {
                arr[i][j] = k
                
            }

        }

    }

    console.log(arr);

}



seating([[3, 4], [4, 5], [2, 3], [3, 4]])