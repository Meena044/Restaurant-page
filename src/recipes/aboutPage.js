export function aboutPage(){
    
    const main = document.querySelector('.block');
    main.innerHTML= '';
    // main.style.backgroundColor = ' rgb(228, 143, 33)';

    const heading = document.createElement('h1');
    heading.textContent = 'About Us';
    heading.id = 'title';
    main.append(heading);

    const aboutdetail = document.createElement('div');
    aboutdetail.innerHTML = "Welcome to The Velvet Spoon, where comfort meets creativity on every plate. We’re passionate about crafting flavorful dishes using fresh ingredients and bold spices - from juicy grilled chicken to rich tikka masala skewers and hearty burgers.Our cozy, elegant space is designed for great food, good company, and genuine hospitality. At The Velvet Spoon, every meal is made to be memorable - simple, soulful, and served with care.";
    aboutdetail.id = "ourStory";
    main.append(aboutdetail);

    // timing
    let timing = document.createElement('div');
    timing.id = 'timing';
    main.append(timing);

    const hoursTitle = document.createElement('h1');
    hoursTitle.textContent = "Hours";
    hoursTitle.id = 'subtitle';
    timing.append(hoursTitle);

    const hours = document.createElement('ul');

    const hoursList = ['Sunday: 8am - 8pm', 'Monday: 6am - 6pm', 'Tuesday: 6am - 6pm','Wednesday: 6am - 6pm', 'Thursday: 6am - 10pm', 'Friday: 6am - 10pm', 'Saturday: 8am - 10pm'];

    hoursList.forEach(item => {
         const hoursList = document.createElement('li');
         hoursList.textContent = item;
         hours.append(hoursList);
    });

    timing.append(hours);

    about.addEventListener('mouseout', ()=>{
        about.style.boxShadow = "none";
    });
}