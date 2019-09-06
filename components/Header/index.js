// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
const headerdiv= document.createElement('div');
 const headerdate= document.createElement('span');
 const headerheadline=document.createElement('h1');
 const headertemp=document.createElement('span');

 headerdiv.classList.add('header');
 headerdate.classList.add('date');
 headertemp.classList.add('temp');

 headerdate.textContent="SMARCH 28, 2019 ";
 headerheadline.textContent="Lambda Times";
 headertemp.textContent="98\u00B0"

 headerdiv.appendChild(headerdate);
 headerdiv.appendChild(headerheadline);
 headerdiv.appendChild(headertemp);

 return headerdiv;
}

const container= document.querySelector('.header-container');

container.appendChild(Header());