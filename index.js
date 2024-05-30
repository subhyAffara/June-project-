function picrotate() {

    for (let i = 1; i <= 9; i++) {
        var f = Math.floor(Math.random() * 4) + 1;
        console.log(i);
        console.log(f);
        document.querySelector("#leftpic").innerHTML += `<img src="colomn${f}.jpeg" alt="">`;
    }
    for (let i = 1; i <= 7; i++) {
        var f = Math.floor(Math.random() * 4) + 1;
        console.log(i);
        console.log(f);
        document.querySelector("#midpic").innerHTML += `<img src="colomn${f}.jpeg" alt="">`;
    }
    for (let i = 1; i <= 9; i++) {
        var f = Math.floor(Math.random() * 4) + 1;
        console.log(i);
        console.log(f);
        document.querySelector("#rightpic").innerHTML += `<img src="colomn${f}.jpeg" alt="">`;
    }

}


function colomnadd() {

    for (let i = 1; i <= 8; i++) {
        // var f = Math.floor(Math.random() * 8) + 1;
        console.log(i);
        // console.log(f);
        document.querySelector("#allproducts").innerHTML += `<div><img src="products${i}.jpeg" alt=""><div>
        <h3>available on site </h3>
        </div> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae omnis est magni at esse doloribus,
        amet aut! Odit repudiandae ducimus aspernatur maxime facilis ad consequuntur.</p></div>`;
    }
}
// attemt to create a system to make obect and remmeber costumer info in a way where it can stored and revitsed from signup page

// get a boatload more pics to spice it up

let arrForNav = [
    { href: "products.html", displayText: "Products" },
    { href: "index.html", displayText: "Home Page" },
    { href: "signup.html", displayText: "Sign UP" }
];

function createNavBar(arrOfNavItems, thePageName) {
    let theNav = document.createElement('nav');
    for (const curr of arrOfNavItems) {
        let newA = document.createElement('a');
        newA.setAttribute("href", curr.href);
        newA.appendChild(document.createTextNode(curr.displayText));
        newA.classList.add("nav-item");
        if (curr.displayText === thePageName) {
            newA.classList.add("active");
        }
        theNav.appendChild(newA);
    }
    return theNav;
}


//     { href: "hobbies.html", displayText: "Hobbies" }
function processForm() {
    // Your form handling logic goes here
    // For example, you can validate form fields or send data to the server

    // Return false to prevent the default form submission behavior
    return false;
}