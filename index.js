function picrotate() {

    for (let i = 1; i < 5; i++) {
        console.log(i);
        var f = Math.floor(Math.random() * 4) + 1

        var fuckedup = document.getElementById("#rightpic")
        fuckedup.innerHTML += `<img src="colomn${f + 1}.jpeg" alt=""`;
        document.getElementById("#mainsighnup").innerText += ` <img src="colomn${f}.jpeg" alt="">`;
        document.querySelector("#leftpic").innerHTML += `<img src="colomn${f + 2}.jpeg" alt=""`;
        //im trying to put randomized pic in sighnup page
    }

}
picrotate()