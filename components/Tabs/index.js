// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((url) => {
    // console.log(url.data.topics);
    url.data.topics.forEach((topics) => {
    const tabappend= document.querySelector('.topics');
        tabappend.appendChild(Tabcreator(topics));
        // console.log(url.data.topics);
    });
})
.catch((error) => {
    console.log(error);
    console.log("poops, this call didn't go through");
})


function Tabcreator(topics){
    const tabdiv= document.createElement('div');
    tabdiv.classList.add('tab');
    tabdiv.textContent= `${topics}`
    tabdiv.addEventListener('click', (event)=>{
  
        event.currentTarget.classList.toggle('active-tab');
        console.log('Something Clicked');
        // const cardDiv=document.querySelectorAll('.card');
        // cardDiv.forEach((item)=>{
        //     item.remove();
        // })
        // if(cardDiv.match("javascript")){
        //  cardDiv.remove();
        // }
    });
    return tabdiv;
}
console.log(Tabcreator())
