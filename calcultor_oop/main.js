class Calculator {
    constructor() {
      this.buttons = [
        {
          value: "Additional",
          color: "#1080DD",
        },
        {
          value: "Minus",
          color: "#1BA1E2",
        },
        {
          value: "Division",
          color: "#F09609",
        },
        {
          value: "Multiplication",
          color: "#E51400",
        },
      ];
  
      this.sum = 0;
  
      this.buttonsContainer = document.querySelector(".operational_buttons_container");
      this.taskForm = document.querySelector("#task-form");
      this.actualAnswer = document.querySelector(".actual_answer");
      this.firstNumberInput = document.querySelector("#first_number_input");
      this.secondNumberInput = document.querySelector("#second_number_input");
  
      this.initializeButtons();
    }
  
    initializeButtons() {
      this.buttons.forEach((btn) => {
        const buttonElement = document.createElement("button");
        buttonElement.innerHTML = btn.value;
        buttonElement.classList.add("operation_button");
        buttonElement.style.backgroundColor = btn.color;
        this.buttonsContainer.appendChild(buttonElement);
  
        buttonElement.addEventListener("click", () => this.validate(btn));
      });
    }
  
    validate(btn) {
      const firstNumber = this.firstNumberInput.value.trim();
      const secondNumber = this.secondNumberInput.value.trim();
  
      if (firstNumber.length === 0 || secondNumber.length === 0) {
        alert("Input all numbers correctly");
  
        if (isNaN(firstNumber) || isNaN(secondNumber)) {
          alert("Values should be numbers");
        }
      } else {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);
  
        if (btn.value === "Additional") {
          this.sum = num1 + num2;
        } else if (btn.value === "Minus") {
          this.sum = num1 - num2;
        } else if (btn.value === "Division") {
          this.sum = num1 / num2;
        } else {
          this.sum = num1 * num2;
        }
  
        this.actualAnswer.innerText = this.sum;
        this.firstNumberInput.value = "";
        this.secondNumberInput.value = "";
      }
    }
  }
  
  const calculator = new Calculator();
  