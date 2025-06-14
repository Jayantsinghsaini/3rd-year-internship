const images = document.querySelectorAll('.zoom-img');

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  images.forEach(img => {
    const imgTop = img.getBoundingClientRect().top;
    const imgBottom = img.getBoundingClientRect().bottom;

    if (imgTop < triggerBottom && imgBottom > 0) {
      img.classList.add('show');
    } else {
      img.classList.remove('show'); // 👈 removes it when not in view
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);
