
  let currentImageIndex = 0;
const images = ['img/img1.jpeg', 'img/img2.jpeg', 'img/img3.jpeg', 'img/img4.jpeg',
'img/img5.jpeg', 'img/img6.jpeg', 'img/img7.jpeg', 'img/img8.jpeg', 'img/img9.jpeg',
'img/img10.jpeg'];

function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
  
    currentImageIndex = images.indexOf(imageSrc);
    modalImage.src = imageSrc;
    modal.style.display = 'flex';
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentImageIndex];
  }
  
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentImageIndex];
  }
 
  document.getElementById('prev-button').addEventListener('click', prevImage);
  document.getElementById('next-button').addEventListener('click', nextImage);
  
 
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      openModal(thumbnail.src);
    });
  });
  
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'Escape') {
      closeModal();
    }
  });