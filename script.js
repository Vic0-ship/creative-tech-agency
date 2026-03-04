<script>
const reveals = document.querySelectorAll('[data-reveal]');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.9; // when 90% of viewport

  reveals.forEach(reveal => {
    const top = reveal.getBoundingClientRect().top;

    if(top < triggerBottom){
      reveal.classList.add('active');
    } else {
      reveal.classList.remove('active'); // disappears when scrolling up
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // trigger once on load
</script>