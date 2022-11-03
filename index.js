const body = document.querySelector("body");

const dialogs = document.querySelectorAll("dialogArea");

const dialogMessage = document.querySelector(".dialogArea div");
const dialogYesButton = document.querySelector(
  ".dialogArea button:first-child"
);
const dialogCancelButton = document.querySelector(
  ".dialogArea button:last-child"
);

const dialogConsumers = document.querySelectorAll(".dialogConsumer");
console.log(dialogConsumers.length);

dialogConsumers.forEach((consumer) => {
  const dialogMessage = consumer.getAttribute("data-message");
  const triggerButton = consumer.querySelector("button");

  const dialogArea = consumer.querySelector(".dialogArea");
  const dialogMessageArea = document.querySelector(".dialogArea section div");

  const dialogYesButton = consumer.querySelector(
    ".dialogArea button:first-child"
  );
  const dialogNoButton = consumer.querySelector(
    ".dialogArea button:last-child"
  );

  triggerButton.addEventListener("click", () => {
    //showDialog(dialogMessage);
    dialogArea.classList.add("show");
    dialogMessageArea.textContent = dialogMessage;
    console.log(dialogArea);
  });
});

/* function showDialog(message) {
    console.log(message);
    console.log(dialog);
    dialog.classList.add("show");

    dialogMessage.textContent = message;
}

function closeDialog(isYesClicked) {
    dialog.classList.remove("show");

    return isYesClicked ? 'You just clicked "Yes"' : 'You just clicked "Cancel"';
} */
