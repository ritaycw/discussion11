let subscribe = document.querySelector("#subscribe");

function challenge1() {
    let emailStyle = document.querySelector("#emailDiv");
    if (subscribe.checked) {
        emailStyle.style.display = "block";
    }
    else {
        emailStyle.style.display ="none";
    }
    console.log("hi");
}

// (event, function name)
subscribe.addEventListener("click", challenge1)
