* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

.captcha-container {
  text-align: center;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 1.8em;
  color: #333;
}

.captcha-button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.captcha-button:hover {
  background-color: #555;
}

.captcha-image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 20px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.captcha-image {
  width: 100px;
  height: 100px;
  cursor: pointer;
  transition: transform 0.2s;
  overflow: hidden;
}

.captcha-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
}

.captcha-image.selected {
  transform: scale(0.95);
  border: 2px solid #4CAF50;
}

#captchaResult {
  margin-top: 15px;
  font-weight: bold;
}

.center-result {
  font-size: 2em;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-top: 20px;
}
