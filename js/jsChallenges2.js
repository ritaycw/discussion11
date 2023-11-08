let sameAddress = document.querySelector("#sameAddress")

function challenge2() {
    let billing = document.querySelector("#bill");
    let home = document.querySelector("#home");
    if (sameAddress.checked) {
        home.value = billing.value;
        home.disabled = true;
    }
    else {
        home.value = ""
        home.disabled = false
    }
}

sameAddress.addEventListener("click", challenge2)