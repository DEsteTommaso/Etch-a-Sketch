
function buildDiv(number){

    const tale = document.querySelector("#tale");

    //clear inner code
    tale.innerHTML = "";

    let flexvert = document.createElement("div");
    flexvert.classList.add("flexvert");

    tale.appendChild(flexvert);


    for(let i = 0; i < number; i++){
        //creation of row

        let flexorr = document.createElement("div");
        flexorr.classList.add("flexorr");

        flexvert.appendChild(flexorr);

        for(let j = 0; j < number; j++){
            //creation of every single div
            let div = document.createElement("div");
            div.classList.add("square");
            flexorr.appendChild(div);

            div.addEventListener("mouseover", () => {
                // Change the button's background color
                div.setAttribute("style", "background-color: red;border: solid; border-color: black;");
              });
        }


    }
}

let btn = document.querySelector("button");
btn.addEventListener("click", function (e) {
    let v = prompt("Insert the number of square (max: 100)");
    
    while(v > 100)
        v = prompt("Insert the number of square (max: 100)");
        
    buildDiv(v);
  });



buildDiv(16);