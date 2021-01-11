import getUser from './src/getUser.js';
import get from './src/getElement.js';

const URL = "https://randomuser.me/api/";
const img = get('.form img');
const caption = get('.caption');
const value = get('.value');
const btn = get('.random-btn');
const btn_icons = [...document.querySelectorAll('.btn-icon')];  

btn.addEventListener('click',randomUser)
window.addEventListener("DOMContentLoaded",randomUser);

async function randomUser(){
    const user =await getUser(URL);
    //console.log(user);
    displayUser(user);
}

function displayUser(user){
   // const form = get('.form');
    
    caption.textContent = `My name is`;
    value.textContent = user.name;
    img.src = user.image;
    //console.log(user);
   
    btn_icons[0].classList.add('active');
    btn_icons.forEach((icon)=>{
        icon.addEventListener('click',(e)=>{
            let label = e.target.dataset.label;
            console.log(e.target);
            caption.innerHTML = `My ${label} is`;
            value.innerHTML = user[label];
            icon.classList.add('active');
            btn_icons.forEach((button)=>{
                if(button!==icon){
                    button.classList.remove('active');
                }
            })
        })
    })

}
