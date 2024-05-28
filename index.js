function picrotate() {

    for (let i = 1; i < 5; i++) {
        console.log(i);
        // var f = Math.floor(Math.random() * 4) + 1;

        var fuckedup = document.getElementById("#rightpic")
        fuckedup.innerHTML += `<img src="colomn${f + 1}.jpeg" alt=""`;
        document.getElementById("#mainsighnup").innerText += ` <img src="colomn${f}.jpeg" alt="">`;
        document.querySelector("#leftpic").innerHTML += `<img src="colomn${f + 2}.jpeg" alt=""`;
        //im trying to put randomized pic in sighnup page
    }

}


function colomnadd() {

    for (let i = 1; i <= 12; i++) {
        var f = Math.floor(Math.random() * 8) + 1;
        console.log(i);
        console.log(f);
        document.querySelector("#allproducts").innerHTML += `<div><img src="products${f}.jpeg" alt=""> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae omnis est magni at esse doloribus,
        amet aut! Odit repudiandae ducimus aspernatur maxime facilis ad consequuntur.</p></div>`;
    }
}
colomnadd()

// `<img src="products${f}.jpeg" alt="">
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae omnis est magni at esse doloribus,
//     amet aut! Odit repudiandae ducimus aspernatur maxime facilis ad consequuntur.</p>` <--- this is what im trying to print on products page