let countElement= document.getElementById('count');
let saveElement = document.getElementById("save");
let count = 0; 
const increment = ()=>{
   count+=1;
countElement.textContent=count;
}

const save = ()=>{
   const save = count + ' - ';
   saveElement.textContent+= save;
   countElement.textContent=0;
   count = 0; 
 }
 