const languageButton = document.querySelector(".lang-button");

languageButton.addEventListener("click", () => {
  languageButton.querySelector("p").innerHTML === "EN"
    ? (languageButton.querySelector("p").innerHTML = "RU")
    : (languageButton.querySelector("p").innerHTML = "EN");
});
