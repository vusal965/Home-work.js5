let num = prompt("ders qiymetinizi daxil edin:")
// let num2 = num.split("")
let a = num < 100; 
let b = num < 89;
let c = num < 79;
let d = num < 69;
let f = num < 59;
 


if((a > b) || (a > c) || (a > d) || (a > f)){
    console.log(a + " - A");
}else if((b < a) || (b > c) || (b > d) || (b > f)){
    console.log(b + " - B");
}else if((c < a) || (c < b) || (c > d) || (c > f)){
    console.log(c + " - C");
}else if((d < a) || (d < b) || (d < c) || (d > f)){
    console.log(d + " - D");
}else if((f < a) || (f < b) || (f < c) || (f > d)){
    console.log(f + " - F");
}