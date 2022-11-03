const darkFilter = document.querySelector("#darkenFilter");
const dialogConsumers = document.querySelectorAll(".dialogConsumer");

dialogConsumers.forEach((consumer) => {
  const messageForComponent = consumer.getAttribute("data-message");
  const componentOutputMessage = consumer.querySelector("article");
  const componentTriggerButton = consumer.querySelector("button");

  const component = consumer.querySelector(".dialogComponent");
  const componentMessage = component.querySelector("section div");

  const componentYesButton = component.querySelector("button:first-of-type");
  const componentNoButton = component.querySelector("button:last-of-type");

  componentTriggerButton.addEventListener("click", () => {
    darkFilter.classList.add("show");
    component.classList.add("show");
    componentMessage.textContent = messageForComponent;
  });

  componentYesButton.addEventListener("click", () => {
    darkFilter.classList.remove("show");
    component.classList.remove("show");
    componentOutputMessage.textContent = "You just clicked 'Yes'";
  });

  componentNoButton.addEventListener("click", () => {
    darkFilter.classList.remove("show");
    component.classList.remove("show");
    componentOutputMessage.textContent = "You just clicked 'No'";
  });
});