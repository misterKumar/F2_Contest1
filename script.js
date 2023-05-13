/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((e)=>{
    if(e.marks>50) console.log(e);
});
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((element)=>{
    if(element.marks>50){
        console.log(element);
    }
});
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"Mister",age:"22",marks: 90})
    console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr= arr.filter((e)=>{
    return e.marks>50
})
console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let array_to_concatenate=[
    {id:4,name:"ravi",age:"20",marks:45},
    {id:5,name:"ram",age:"22",marks:60},
    {id:6,name:"das",age:"19",marks:75}
];

arr=arr.concat(array_to_concatenate)
console.log(arr);
}
