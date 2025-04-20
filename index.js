document.getElementById('about').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('internships').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('internships-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
});

//FAQ Toggle

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const arrow = item.querySelector('.arrow');

  question.addEventListener('click', () => {
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    arrow.classList.toggle('open');
  });
});