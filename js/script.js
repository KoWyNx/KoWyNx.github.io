var slogan = document.querySelector('#title')

let word = 'Développeur'
let dev =  'front-end  '
let back = 'back-end   '
let full = 'Full-stack '
let totalDuration = 100 * word.length + 500;



for (let index in word) {
            index = parseInt(index);
            let duration = 100;
            let trye = 2000;
            

            setTimeout(function () {
                slogan.textContent += word[index];
                slogan.style.color = 'blue'
            }, duration * (index + 1));

            setTimeout(function () {
                slogan.textContent = word.substr(0, word.length - (index + 1));
            }, totalDuration + duration * (index + 1));

            setTimeout(function(){
                console.log(slogan.textContent[index + 5])
                slogan.textContent += dev[index];
                slogan.style.color = 'white'
            },3000 + duration * (index +1 ))

            setTimeout(function () {
                slogan.textContent = dev.substr(0, dev.length - (index + 1));
            }, 4500 + duration * (index + 1));

            setTimeout(function(){
                console.log(slogan.textContent[index + 5])
                slogan.textContent += back[index];
                slogan.style.color = 'red'
            },6000 + duration * (index +1 ))

            setTimeout(function () {
                slogan.textContent = back.substr(0, back.length - (index + 1));
            }, 7500 + duration * (index + 1));

            setTimeout(function(){
                console.log(slogan.textContent[index + 5])
                slogan.textContent += full[index];
                slogan.style.color = 'red'
            },9000 + duration * (index +1 ))




           
}

