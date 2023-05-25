import CryptoJS from "crypto-js"
import "./style.css"

let menuBtn = document.querySelector("#menu-btn");
let navBar = document.querySelector("#navbar");
menuBtn.addEventListener('click',(e) => {
    e.target.name =='menu-outline'?(e.target.name="close-outline",navBar.classList.add("block"),navBar.classList.remove("hidden")):(e.target.name="menu-outline", navBar.classList.add("hidden"),navBar.classList.remove("block"))
})


const baseUrl = "https://gateway.marvel.com/v1/public";
const publicApiKey = "5a88e19ffd944e42191ced11d6196c37";
const privateApiKey = "edc5292ca2e8d36bdfbff71a93c67a9f2b1850aa";

const hash = generateHash(publicApiKey, privateApiKey);
console.log(hash);

//Script for Characters fetch & list
if(window.location.pathname=="/team.html"){
  getAllCharacters();
}

function getAllCharacters() {
    fetch(`${baseUrl}/comics/32477/characters?ts=1&apikey=${publicApiKey}&hash=${hash}&limit=100`)
        .then(res => res.json())
        .then(response => {
            // Handle the response data
            console.log(response.data);
            var res = response.data.results;
            console.log(response.data.results);
            var index = 0;
            res.forEach(element => {
                var name = element.name;
                var description = (element.description);
                if (description === "") {
                    description = `${name} is a member of the Avengers and a prominent superhero in the Marvel universe. They are known for their exceptional skills, powers, and heroic qualities. ${name} plays a crucial role in fighting against villains and defending the innocent. With a strong sense of justice and unwavering determination, ${name} stands as a symbol of hope and bravery.`;
                }
                if (name != "Thanos") {
                    document.getElementById("team-container").innerHTML += `
                <div class="container">
                    <div id="greeting__card">
                        <div id="card__front" class="card">
                          <img class="h-full w-full" src="${element.thumbnail.path}.${element.thumbnail.extension}" alt="">
                        </div>
                        <div id="card__back" class="card p-8">
                          <h5 class="text-center font-bold text-3xl">${name}</h5>
                          <p class="pt-10">${description}</p>
                        </div>
                    </div>
                </div>
            `;

                }
            });

        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
}


function generateHash(publicKey, privateKey) {
    // timestamp = 1
    const input = "1" + privateKey + publicKey;
    const hash = CryptoJS.MD5(input).toString();
    return hash;
}
