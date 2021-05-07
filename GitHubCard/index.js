import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
.get("https://api.github.com/users/Bobby-Tav")
.then( res =>{
  console.log("my Data: ",res)
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const cardHolder = document.querySelector('div.cards');

function cardMaker(obj){
  //Elements
  const card = document.createElement('div');
  const profileImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardName = document.createElement('h3');
  const userName = document.createElement('p');
  const loc = document.createElement('p');
  const profileAdd = document.createElement('p');
  const profileLink = document.createElement('a');
  const follower = document.createElement('p');
  const followings = document.createElement('p');
  const cardBio = document.createElement('p');
  

  //Class
  card.classList.add('card');
  cardInfo.classList.add("card-info");
  cardName.classList.add('name');
  userName.classList.add('username');

  profileImg.src = obj.avatar_url;
  cardName.textContent = obj.name;
  userName.textContent = obj.login;
  loc.textContent = "Location:" + obj.location;
  profileAdd.textContent  = "Profile: ";
  profileLink.href = obj.html_url;
  profileLink.textContent = obj.html_url;
  follower.textContent = "Follower: " + obj.followers;
  followings.textContent ="Following: " + obj.following;
  cardBio.textContent = "Bio: " + obj.bio;
  //events

    //Strt
  card.appendChild(profileImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(loc);
  cardInfo.appendChild(profileAdd);
  cardInfo.appendChild(follower);
  cardInfo.appendChild(followings);
  cardInfo.appendChild(cardBio);
  profileAdd.appendChild(profileLink);

  return card;
}


const followersArray = ['Bobby-Tav','tetondan','dustinmyers','justsml','luishrd','bigknell'];
followersArray.forEach( item =>{
  axios
  .get(`https://api.github.com/users/${item}`)
  .then(res => {
    // const info = res.data;
    const cardMake = cardMaker(res.data);
    cardHolder.appendChild(cardMake);
    console.log(res.data.name)
  })
  .catch(err => {
    console.log("on no" , err);  
  })
  .finally( (item) => console.log("done"))
  
})

