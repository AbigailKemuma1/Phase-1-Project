fetch ("http://localhost:3000/posts")
.then (res =>res.json()) 
.then (data => {const bigCard = document.querySelector(".bigCard");
    data.forEach (card => {const div = document.createElement ("div")
        div.className = "card"
        div.innerHTML = `
        <img src = "${card.image}" alt = "${card.breed}"/>
        <h3>${card.breed}</h3>
        <p>${card.description}</p>
        <button class = "likeButton">Like</button>
        <button class = "adoptMe">Adopt Me</button>
        `;
        const likebtn = div.querySelector('.likeButton')
        likebtn.addEventListener('click', addlikes)
        const adoptMebtn = div.querySelector('.adoptMe')
        adoptMebtn.addEventListener('click', adoption)
        div.addEventListener("mouseover", () => {
        div.style.transform = "scale(1.03)";
        div.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
});
       div.addEventListener("mouseout", () => {
       div.style.transform = "scale(1)";
       div.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
});
        bigCard.appendChild(div)
    })
})
function addlikes(){
    alert("Since you like me, why don't you adopt me.")
}
function adoption(){
    alert("Thank you for giving me a new home.")
}
const form = document.querySelector("#addPetForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newPet = {
    petType: document.querySelector("#petType").value,
    breed: document.querySelector("#breed").value,
    image: document.querySelector("#image").value,
    description: document.querySelector("#description").value
  };
  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPet)
  })
    .then(res => res.json())
    .then(addedPet => {
      alert("New pet added!");
      location.reload(); 
    });
});

