let arr = [5,4,3,2,1]

const Reduce = arr.reduce((acc,ele)=>{
   ele=acc+ele;
  return ele;
},0)
console.log(Reduce/arr.length)