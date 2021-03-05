function squareDigits(num){
    let s = num.toString()
    let arr = [];
    for(let i = 0; i < s.length; i++){
        arr[i] = s[i] * s[i];
    }
    return +(arr.join(''));
}
//function squareDigits(num){
//  let s = num.toString()
//  let arr = [];
//   for(let i = 0; i < s.length; i++){
//   arr[i] = s[i] * s[i];
//   }
//   return +(arr.join(''));
// }