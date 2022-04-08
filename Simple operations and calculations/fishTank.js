function fishTank(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let percent = Number(input.shift()) * 0.01;
    let aquariumVolume = (length * width * height);
    let aquariumInLiters = (aquariumVolume * 0.001);
    let neededWater = (aquariumInLiters * (1 - percent));
    console.log(neededWater.toFixed(3));
}

fishTank(['85', '75', '47', '17'])