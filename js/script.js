var slogan = document.querySelector('#title');

let word = 'Développeur';
let dev = 'Front-end  ';
let back = 'Back-end   ';
let full = 'Full-stack ';
let totalDuration = 100 * word.length + 500;

for (let index in word) {
  index = parseInt(index);
  let duration = 100;
  let trye = 2000;

  setTimeout(function () {
    console.log(slogan.textContent[index + 5]);
    slogan.textContent += dev[index];
    slogan.style.color = '#50B4E2';
  }, duration * (index + 1));

  setTimeout(function () {
    slogan.textContent = dev.substr(0, dev.length - (index + 1));
  }, totalDuration + duration * (index + 1));

  setTimeout(function () {
    console.log(slogan.textContent[index + 5]);
    slogan.textContent += back[index];
    slogan.style.color = '#1D84B5';
  }, 3000 + duration * (index + 1));

  setTimeout(function () {
    slogan.textContent = back.substr(0, back.length - (index + 1));
  }, 4500 + duration * (index + 1));

  setTimeout(function () {
    console.log(slogan.textContent[index + 5]);
    slogan.textContent += full[index];
    slogan.style.color = '#18548C';
  }, 6000 + duration * (index + 1));
}

let competence = document.querySelector('#competence');
ScrollReveal().reveal(competence, {
  reset: true,
  delay: 100,
  duration: 2000,
  origin: 'left',
  distance: '300px',
});
