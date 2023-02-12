const rowsAndColumns = [[3,2], [4,3], [2,3], [3,4]];
const numPassengers = 30;

let seatIndex = 0;
for (let i = 0; i < rowsAndColumns.length; i++) {
  let row = rowsAndColumns[i];
  let numAisleSeats = row[0];
  let numWindowSeats = row[1];
  
  
  for (let j = 0; j < numAisleSeats; j++) {
    if (seatIndex >= numPassengers) break;
    console.log(`Aisle seat: ${++seatIndex}`);
  }
  
  // Fill window seats
  for (let j = 0; j < numWindowSeats; j++) {
    if (seatIndex >= numPassengers) break;
    console.log(`Window seat: ${++seatIndex}`);
  }
  
  // Fill center seats
  for (let j = 0; j < numAisleSeats; j++) {
    if (seatIndex >= numPassengers) break;
    console.log(`Middle seat: ${++seatIndex}`);
  }
}
