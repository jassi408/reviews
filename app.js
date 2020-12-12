//create an array of reviewList

const reviewList = [
    {
        id : 1,
        img : 'https://images.unsplash.com/photo-1601705776515-b55faf59eb09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        name : 'Gauri Khan',
        job : 'Actrees',
        text : 'Before the age of 12 months it can be really difficult sticking to any particular schedule. Your baby seems to grow every day and just when you got the hang of one routine, everything changes again. '
    },{
        id : 2,
        img : 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        name : 'Shanti Devi',
        job : 'Cook',
        text : 'Routines can be great for a number of reasons. They help to provide children with comfort and security through predictability, but they also help parents when planning their day.'
    },
    {
        id : 3,
        img : 'https://images.unsplash.com/photo-1573497490790-9053816a01d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        name : 'Seema Rani',
        job : 'Engineer',
        text : 'Set bedtimes and nap times will help to support your child in getting enough sleep instead of becoming grumpy and throwing one of those infamous toddler tantrums in the middle of the supermarket. '
    },
    {
        id : 4,
        img : 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        name : 'John Cena',
        job : 'BusinessMan',
        text : 'Toddlers are often at their best in the morning, making them more receptive to learning and new challenges. Make the most of this time by teaching them new games and skills.'
    }
];

//Selecting elements

const image = document.querySelector('.imgPerson');
const personName = document.querySelector('.name');
const personJob = document.querySelector('.job');
const personText =document.querySelector('.text');

const prevbtn = document.querySelector('.btn-prev');
const nextbtn = document.querySelector('.btn-next');
const randombtn = document.querySelector('.random-btn');

let count = 0;

//Load window
window.addEventListener('DOMContentLoaded',person(count));


function person(number){
    const item = reviewList[number];
    image.src = item.img;
    personName.innerText = item.name;
    personJob.innerText = item.job;
    personText.innerText = item.text;
};

nextbtn.addEventListener('click',function(){
    count++;
    if(count > 3){
        count = 0;
    }
    person(count);
});

prevbtn.addEventListener('click',function(){
    count--;
    if(count <0){
        count = (reviewList.length-1);
    }
    person(count);
});

randombtn.addEventListener('click',function(){
    const randomNum = Math.floor(Math.random()*reviewList.length);
    person(randomNum);
});