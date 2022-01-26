function first() {
    console.log(`First`);
}
function second() {
    console.log(`Second`);
}
function third() {
    console.log(`Third`);
}
function fourth() {
    console.log(`Fourth`);
}
export default function (){
    console.log(`Fifth`);
}


export {first, second, third, fourth};