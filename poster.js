const posters = [
    "images_ANS/1.png",
    "images_ANS/2.png",
    "images_ANS/3.png",
    "images_ANS/4.png",
    "images_ANS/Solace-visuals-1.png"
  ];
  
  let index = 0;
  const poster = document.getElementById("poster-slide");
  
  function showPoster(i) {
    poster.style.opacity = 0;
  
    setTimeout(() => {
      poster.src = posters[i];
      poster.style.opacity = 1;
    }, 300);
  }
  
  document.getElementById("nextPoster").onclick = () => {
    index = (index + 1) % posters.length;
    showPoster(index);
  };
  
  document.getElementById("prevPoster").onclick = () => {
    index = (index - 1 + posters.length) % posters.length;
    showPoster(index);
  };
  
  // Auto slide
  setInterval(() => {
    index = (index + 1) % posters.length;
    showPoster(index);
  }, 5000);
  