function metricConverter(input) {
    let num = Number(input.shift());
    let from = input.shift();
    let to = input.shift();
if (from === 'm' && to === 'cm') {
    console.log((num*100).toFixed(3));
} else if (from === 'm' && to === 'mm' ) {
    console.log((num*1000).toFixed(3));
} else if (from === 'cm' && to === "mm") {
    console.log((num*10).toFixed(3));
} else if (from === 'cm' && to === 'm') {
    console.log((num/100).toFixed(3));
} else if (from === 'mm' && to === 'cm') {
    console.log((num/10).toFixed(3));
} else if (from === 'mm' && to === 'm') {
    console.log((num/1000).toFixed(3));
    }
}

metricConverter(['150','m','cm'])