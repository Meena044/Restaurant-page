export function menuPage(){
    const main = document.querySelector('.block');
    main.innerHTML= '';
    content.style.backgroundColor = " rgba(250, 213, 191, 1)";

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

    menuDetails('./images/shrimp long.jpeg', 'Spicy shrimp','Spicy shrimp is a flavorful and bold dish that combines the sweetness of fresh shrimp with the heat of chili peppers and aromatic spices. Often marinated in a blend of garlic, paprika, cayenne, and citrus juice, the shrimp are quickly seared or grilled to lock in flavor while maintaining their tender, juicy texture.', 'INR 300');

    menuDetails('./images/tandoori.jpg', 'Grilled Chicken','this easy cranberry Jell-O salad for Thanksgiving is the most popular dish we had! Cherry-flavored gelatin teams up with jellied cranberry sauce and crushed pineapple for a fruity flavor that cant be beat.', 'INR 260');

    menuDetails('./images/tandoor.jpg', 'Chicken Tandoori','this easy cranberry Jell-O salad for Thanksgiving is the most popular dish we had! Cherry-flavored gelatin teams up with jellied cranberry sauce and crushed pineapple for a fruity flavor that cant be beat.', 'INR 260');

    menuDetails('./images/cran jello.jpeg', 'Jell-O','this easy cranberry Jell-O salad for Thanksgiving is the most popular dish we had! Cherry-flavored gelatin teams up with jellied cranberry sauce and crushed pineapple for a fruity flavor that cant be beat.', 'INR 260');

    menu.addEventListener('mouseout', ()=>{
        menu.style.boxShadow = "none";
    });
}