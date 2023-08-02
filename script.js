
// carrossel
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentItem = 0;

function nextSlide() {
  currentItem = (currentItem + 1) % carouselItems.length;
  updateCarousel();
}

function updateCarousel() {
  const translateXValue = -currentItem * 100;
  carousel.style.transform = `translateX(${translateXValue}%)`;
}
setInterval(nextSlide, 3000); 

// direcionamento via botão
function direciona() {
    const destino = document.getElementById('slide');
    destino.scrollIntoView({ behavior: 'smooth' });
}
// áudio

function togglePopup() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('show');

    const audioPlayer = document.getElementById('audioPlayer');
    if (popup.classList.contains('show')) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }

  function playPause() {
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }

  function stop() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }

  function changeVolume() {
    const audioPlayer = document.getElementById('audioPlayer');
    const volumeSlider = document.getElementById('volumeSlider');
    audioPlayer.volume = volumeSlider.value;
  }