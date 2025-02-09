document.addEventListener('DOMContentLoaded', () => {
    fetch("./vinilo.svg")
      .then((response) => response.text())
      .then((svg) => {
        const playerContainer = document.getElementById("player-container");
        playerContainer.innerHTML = svg;

        const vinyl = document.querySelector("svg");
        const playButton = document.getElementById("play-button");
        const audio = document.getElementById("love-song");
        let isPlaying = false;

        playButton.addEventListener("click", () => {
          if (!isPlaying) {
            vinyl.style.animation = "spin 2s linear infinite";

            audio.play();

            playButton.textContent = "Pause";
            isPlaying = true;
          } else {
            vinyl.style.animation = "";

            audio.pause();

            playButton.textContent = "Play";
            isPlaying = false;
          }
            document.getElementById("yesButton").addEventListener("click", showAlert);

            function showAlert() {
                alert("Te amo mi vida! nos vemos el viernes <3333");
            }

            var yesButton = document.getElementById("yesButton");
            var no = document.getElementById("no");
            var valentineImage = document.getElementById("valentineImage");

            var noTexts = ["como que no?", "Neta? TT", "Porfis?", "Ya juan de dios TT", "Asi nos vamos a poner?", "voy a llorar verdaderamente", "Argumenta tu pendejada"];
            no.addEventListener("click", change);

            function change() {
                var randomIndex = Math.floor(Math.random() * noTexts.length);
                var randomText = noTexts[randomIndex];
                no.innerText = randomText;

                var i = Math.floor(Math.random() * 1000) + 1;
                var j = Math.floor(Math.random() * 700) + 1;
                no.style.left = i + "px";
                no.style.top = j + "px";

                var currentWidth = yesButton.offsetWidth;
                var currentHeight = yesButton.offsetHeight
                yesButton.style.width = currentWidth + 30 + "px";
                yesButton.style.height = currentHeight + 10 + "px";
            }
        });
      })
      .catch((err) => console.error("Error loading SVG:", err));
});
