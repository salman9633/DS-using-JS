// let seats:number[][]={{3,4},{4,5},{2,3},{3,4}}
let seat: number[][] = [[3, 4], [4, 5], [2, 3], [3, 4]]
let row = 0;
let col = 0;
let seatType=1
let planeSeat:number[][]

for(let i=0;i<seat.length;i++){
    row=seat[i][0]
    col=seat[i][1]
    console.log(row,'...........',col);
    
    for(let j=0;j<=col;j++){
        for(let k=0;k<=row;k++){
            if(col==3){
                if(seatType==1){
                    console.log("Window Seat[ row:",(j+1),"col:",(k+1),"]"); 
                    seatType=2   
                }else if(seatType==2){
                    console.log("Middle Seat[ row:",(j+1),"col:",(k+1),"]");
                    seatType=3
                }else{
                    console.log("Aisle Seat[ row:",(j+1),"col:",(k+1),"]");
                    seatType= (seatType+1)%3
                }
            }else if(col >3){
                if(seat[j][0]==0||seat[i][col]==col){

                }
            }
        }
    }
}

export {}