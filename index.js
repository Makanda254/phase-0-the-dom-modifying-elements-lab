// Write your code here!
//const newHeader= document.getElementById('h1');


const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent="Victor is the champion";
document.body.append(newHeader);

const main = document.getElementById('main');
main.remove();




