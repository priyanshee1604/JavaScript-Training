// const image = document.getElementById('image');
// image.addEventListener('error', loadingfallbackimage);

// function loadingfallbackimage(){
//     alert('img not found');
// }

const image = document.getElementById('image');
console.log(image);
image.onerror = function() {
    image.src = 'image2.png'
    alert("Error in loading image, loading the fallback image.");
  };

