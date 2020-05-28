function mulBase(num, base) {
function Stack(){ 
var s=[];
do {
s.push(num % base);
num = Math.floor(num /= base);
} while (num > 0);
var converted = "";
while (s.length() > 0) {
converted += s.pop();
}
return converted;
}
}
var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " convertido a base " + base + " es " + newNum);
num = 125;
base = 8;
var newNum = mulBase(num, base);
console.log(num + " convertido a base " + base + " es " + newNum);