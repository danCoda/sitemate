const body = document.querySelector("body");

const dialogs = document.querySelectorAll("dialogComponent");

const dialogMessage = document.querySelector(".dialogComponent div");
const dialogYesButton = document.querySelector(
  ".dialogComponent button:first-child"
);
const dialogCancelButton = document.querySelector(
  ".dialogComponent button:last-child"
);

const dialogConsumers = document.querySelectorAll(".dialogConsumer");
console.log(dialogConsumers.length);

dialogConsumers.forEach((consumer) => {
  const messageForComponent = consumer.getAttribute("data-message");
  const componentOutputMessage = consumer.querySelector("article");
  const componentTriggerButton = consumer.querySelector("button");

  const component = consumer.querySelector(".dialogComponent");
  const componentMessage = component.querySelector("section div");

  const dialogYesButton = component.querySelector("button:first-of-type");
  const dialogNoButton = component.querySelector("button:last-of-type");

  componentTriggerButton.addEventListener("click", () => {
    component.classList.add("show");
    componentMessage.textContent = messageForComponent;
  });

  dialogYesButton.addEventListener("click", () => {
    component.classList.remove("show");
    componentOutputMessage.textContent = "You just clicked 'Yes'";
  });

  dialogNoButton.addEventListener("click", () => {
    component.classList.remove("show");
    componentOutputMessage.textContent = "You just clicked 'No'";
  });
});
