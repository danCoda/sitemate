const dialog = document.getElementById("dialogArea");
const dialogMessage = document.querySelector("#dialogArea div");
const body = document.querySelector("body");

function showDialog(message) {
    console.log(message);
    console.log(dialog);
    dialog.classList.add("show");
    body.classList.add("darken");

    dialogMessage.textContent = message;
}

function hideDialog() {
    dialog.classList.remove("show");
}