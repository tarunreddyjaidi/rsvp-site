const openingScreen = document.getElementById("openingScreen");
const mainContent = document.getElementById("mainContent");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

bgMusic.volume = 0.35;

function openInvitation() {
  openingScreen.style.display = "none";
  mainContent.classList.remove("hidden");
  window.scrollTo(0, 0);

  bgMusic.play()
    .then(() => {
      musicBtn.textContent = "🔇 Pause Music";
    })
    .catch(() => {
      musicBtn.textContent = "🎵 Play Music";
    });
}

function scrollToRSVP() {
  document.getElementById("rsvpForm").scrollIntoView({
    behavior: "smooth"
  });
}

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = "🔇 Pause Music";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
});

function shareInvitation() {
  const shareData = {
    title: "Kallem Nuthan & Musku Rajitha Wedding Invitation",
    text: "You are invited to our wedding celebration. Please RSVP here:",
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData);
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert("Invitation link copied!");
  }
}