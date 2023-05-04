const nav = document.querySelector('.active');
const btn = document.querySelector('.icon');

btn.addEventListener('click' , ()=>{
  nav.classList.toggle('active');
});