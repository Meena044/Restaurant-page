export let main;
export default function homePage(){
    const content = document.querySelector('#content');

    content.innerHTML = '';
    content.style.backgroundColor = " rgba(250, 213, 191, 1)";

    main = document.createElement("div");
    main.classList.add('block');
    content.append(main);
    
    const title = document.createElement('h1');
    title.textContent = "The Velvet Spoon";
    title.id='title';
    main.append(title);

    const mainimg =  document.createElement('img');
    mainimg.src ="./images/sweety.jpg";
    mainimg.id = 'banner';
    main.append(mainimg);
}

homePage();



