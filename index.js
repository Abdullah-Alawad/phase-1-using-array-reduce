const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


    let totalBatteries = batteryBatches.reduce((acc, el) => {return el + acc}, 0);
    

console.log(totalBatteries);