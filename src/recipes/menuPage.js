import shrimp from '../images/shrimp long.jpeg';
import tandoori from '../images/tandoori.jpg';
import tikkaMasala from '../images/tikka masala.jpg';
import burger from '../images/burgerr.jpg';
import jello from '../images/cran jello.jpeg';

export function menuPage(){
    const main = document.querySelector('.block');
    main.innerHTML= '';

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
    heading.id = 'title';
    main.append(heading);

    // spicy shrimp
    function menuDetails(url, dishName, desc, price){
        const eachDish = document.createElement('div');
        eachDish.id ="dish";
        const dishImg = document.createElement('img');
        dishImg.src = url;
        dishImg.id = "dishImg";
        const p = document.createElement('p');
        p.classList.add('para');
        p.innerHTML = `<h2 style="font-weight: 600;">${dishName}</h2><br>${desc}<br><br><h6 style="font-family: Times New Roman;">${price}</h6>`;
        eachDish.append(dishImg, p);
        main.append(eachDish);
    }

    menuDetails(shrimp, 'Spicy shrimp','Spicy shrimp is a flavorful and bold dish that combines the sweetness of fresh shrimp with the heat of chili peppers and aromatic spices. Often marinated in a blend of garlic, paprika, cayenne, and citrus juice.', 'INR 300');

    menuDetails(tandoori, 'Grilled Chicken','this easy cranberry Jell-O salad for Thanksgiving is the most popular dish we had! Cherry-flavored gelatin teams up with jellied cranberry sauce and crushed pineapple for a fruity flavor that cant be beat.', 'INR 260');

    menuDetails(tikkaMasala, 'Chicken Tikka Masala','Juicy, marinated tikka pieces grilled on sticks to smoky perfection, then brushed with a rich, creamy masala sauce that blends aromatic spices, garlic, and a hint of charred flavor.', 'INR 180');

    menuDetails(burger, 'Tasty beef burger','Juicy grilled beef patty layered with cheese, lettuce, and a special sauce, served in a toasted bun.', 'INR 200');

    menuDetails(jello, 'Jell-O','this easy cranberry Jell-O salad for Thanksgiving is the most popular dish we had! Cherry-flavored gelatin teams up with jellied cranberry sauce and crushed pineapple for a fruity flavor that cant be beat.', 'INR 260');

    menu.addEventListener('mouseout', ()=>{
        menu.style.boxShadow = "none";
    });
}