//Acess D Tree
const input1 = document.querySelectorAll("input")[0];
const input2 = document.querySelectorAll("input")[1];
const input3 = document.querySelectorAll("input")[2];
const p = document.querySelector("textArea");
const div = document.querySelectorAll("div")[1];
const button = document.querySelectorAll("button")[0];
const buttonCoppyer = document.querySelectorAll("button")[1];
const buttonClear = document.querySelectorAll("button")[2];
console.log(p);

//Function Setup;
const MainFunction = ()=>{
    repeatNumber = input1.value;
    textToWrite = input2.value;
    startNumber = input3.value;
    for(let i=0;i<repeatNumber;i++){
       MainText = i+parseInt(startNumber)+"."+textToWrite
  
        p.innerHTML += `${MainText}
`
    }
}

const ClearFunction = ()=>{
   p.innerHTML=" "
   input1.value=null;
   input2.value=null;
   input3.value=null;
}

const CoppyerFunction = ()=>{
    p.select();
    document.execCommand("Copy");
}


button.addEventListener("click",MainFunction);
buttonCoppyer.addEventListener("click",CoppyerFunction);
buttonClear.addEventListener("click",ClearFunction);