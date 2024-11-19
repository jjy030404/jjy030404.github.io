const images = [
  { src: 'images/crosswalk.jpg', answer: 'incorrect' },
  { src: 'images/road.jpg', answer: 'correct' },
  { src: 'images/traffic-light.jpg', answer: 'incorrect' },
  { src: 'images/crosswalk-2.jpg', answer: 'incorrect' },
  { src: 'images/person-back.jpg', answer: 'correct' },
  { src: 'images/traffic-light-2.jpg', answer: 'incorrect' },
  { src: 'images/traffic-light-3.jpg', answer: 'incorrect' },
  { src: 'images/crosswalk-3.jpg', answer: 'incorrect' },
  { src: 'images/crosswalk-4.jpg', answer: 'incorrect' },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function renderImages() {
  const imageGrid = document.getElementById('captchaImageGrid');
  shuffleArray(images);
  imageGrid.innerHTML = '';
  images.forEach(image => {
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('captcha-image');
    imageDiv.setAttribute('data-answer', image.answer);
    const imgTag = document.createElement('img');
    imgTag.src = image.src;
    imgTag.alt = "Captcha Image";
    imageDiv.appendChild(imgTag);
    imageGrid.appendChild(imageDiv);
  });

  document.querySelectorAll('.captcha-image').forEach(image => {
    image.addEventListener('click', () => {
      image.classList.toggle('selected');
    });
  });
}

document.getElementById('captchaYesButton').addEventListener('click', switchToImageSelection);
document.getElementById('captchaNoButton').addEventListener('click', switchToImageSelection);

function switchToImageSelection() {
  document.getElementById('captchaQuestion').textContent = "Select the correct pedestrian signal and crosswalk below (2 items):";
  document.getElementById('captchaYesNoButtons').style.display = 'none';
  document.getElementById('captchaImageSelection').style.display = 'block';
  renderImages();
}

document.getElementById('captchaVerifyBtn').addEventListener('click', () => {
  const selectedImages = document.querySelectorAll('.captcha-image.selected');
  const correctAnswers = [...selectedImages].filter(img => img.dataset.answer === 'correct');
  const result = document.getElementById('captchaResult');

  if (correctAnswers.length === 2 && selectedImages.length === 2) {
    result.textContent = "Congrats, you're a true New Yorker! 🌆";
    result.style.color = 'green';

    console.log("Success message displayed. Redirecting to index.html in 5 seconds...");

    setTimeout(() => {
      console.log("Attempting to redirect to index.html...");
      window.location.href = "index.html";
    }, 5000);
  } else {
    result.textContent = "Hmm, are you sure you're from New York? 🤔 Try again!";
    result.style.color = 'red';
    console.log("Incorrect selection. Prompting user to try again.");
  }
});
