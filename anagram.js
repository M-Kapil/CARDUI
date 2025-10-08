
function anagram (a1,a2){
    
    a1 = a1.split('').sort().join('')
    a2 = a2.split('').sort().join('')
    return a1 === a2;

}

const a1 = "file";
const a2 = "life";

if(anagram(a1,a2)){
    console.log(true)
}
else{
    console.log(false)
}