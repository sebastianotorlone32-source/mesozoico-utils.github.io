document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    console.log("Opening:", card.querySelector("h2").textContent);
  });
});
