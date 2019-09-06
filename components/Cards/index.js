// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((url) =>{
 url.data.articles.bootstrap.forEach((items)=>{
     const container=document.querySelector('.cards-container');
     container.appendChild(Cardcreator(items))
    console.log(items);
 })
 
})
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((url) =>{
 url.data.articles.technology.forEach((items)=>{
     const container=document.querySelector('.cards-container');
     container.appendChild(Cardcreator(items))
    console.log(items);
 })
 
})

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((url) =>{
 url.data.articles.node.forEach((items)=>{
     const container=document.querySelector('.cards-container');
     container.appendChild(Cardcreator(items))
    console.log(items);
 })
 
})

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((url) =>{
 url.data.articles.jquery.forEach((items)=>{
     const container=document.querySelector('.cards-container');
     container.appendChild(Cardcreator(items))
    console.log(items);
 })
 
})

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((url) =>{
 url.data.articles.javascript.forEach((items)=>{
     const container=document.querySelector('.cards-container');
     container.appendChild(Cardcreator(items))
    console.log(items);
 })
 
})


function Cardcreator(obj){
    // create elements
    const cardDiv=document.createElement('div');
    const headlineDiv=document.createElement('div');
    const authorDiv=document.createElement('div');
    const imgcontainDiv=document.createElement('div');
    const authorimg=document.createElement('img');
    const authorspan=document.createElement('span');
    
    //class names/attributes
    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgcontainDiv.classList.add('img-container');
    authorimg.src= `${obj.authorPhoto}`;
    
    //text
    headlineDiv.textContent= `${obj.headline}`;
    authorspan.textContent= `${obj.authorName}`;
    
   
    // structure elements
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgcontainDiv);
    authorDiv.appendChild(authorspan);
    imgcontainDiv.appendChild(authorimg);

    // return div
    return cardDiv;
}
