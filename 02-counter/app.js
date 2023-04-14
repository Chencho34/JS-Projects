const value = document.querySelector("#value");
const btns = document.querySelectorAll(".main__btn");

let count = 0;
// console.log(btns)
// console.log(values.textContent)

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const styles = event.currentTarget.classList;

    switch (styles[1]) {
      case "decrease":
        count--;
        (count < 0) ? value.style.color = 'red' : "";
        break;
      case "reset":
        count = 0;
        value.style.color = "black";
        break;
      case "increase":
        count++;
        (count > 0) ? value.style.color = 'green' : "";
        break;
      default:
        console.log("Error");
        break;
    }
    value.textContent = count;
  });
});
