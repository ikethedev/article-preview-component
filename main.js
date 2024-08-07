const shareBtn = document.querySelector("#share")

shareBtn.addEventListener("click", () => {
    shareBtn.classList.toggle("active")
    document.querySelector(".share_active").classList.toggle("hide")
})