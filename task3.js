function showImage(image) {
    const displayArea = document.getElementById('displayArea');
    displayArea.innerHTML = `<img src="${image.src}" class="largeImage">`;
  }
  