let apiKey = "8Deb4/jm3m+dL15YgAA1sg==JLTzSuojTxebyp9T";
let apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

let jokeElement = document.getElementById("joke");
let jokeButton = document.getElementById("generate");
let copyButton = document.getElementById("copy-button");
let copy = document.getElementById("copy");


jokeButton.addEventListener("click", async () => {
    try {
        jokeElement.innerText = "Updating.....";
        jokeButton.disabled = true;
        jokeButton.innerText = "LOADING....."

        copyButton.style.display = "none";
        copy.innerText = "";

        let response = await fetch(apiURL, {
            method: "GET",
            headers: {
                "X-Api-Key": apiKey,
            },
        })

        let data = await response.json();

        jokeButton.disabled = false;
        jokeButton.innerText = "TELL ME A JOKE";
        jokeElement.innerText = data[0].joke;
        copyButton.style.display = "inline";
    } catch (err) {
        jokeElement.innerText = "Please try again!";
        jokeElement.style.color = "red";
        jokeButton.disabled = false;
        jokeButton.innerText = "Tell me a joke";
        console.log(err);
    }
})

copyButton.addEventListener('click', () => {
    const text = jokeElement.textContent;
    navigator.clipboard.writeText(text)
    copy.innerText = "copied!";
});

