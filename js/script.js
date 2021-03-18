const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".navigation");
const call = document.querySelector('.contact-btn')
const contact = document.querySelector('#contact')

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav.classList.toggle("active");
});
  
call.addEventListener('click', () => {
contact.classList.toggle('active')
})