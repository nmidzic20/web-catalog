function changeVisibility(id) {
  var element = document.getElementById(id);
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}

function setVisibility(id, visible) {
  var element = document.getElementById(id);
  if (visible) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}

function setActive(clickedElement) {
  var navLinks = document.getElementsByClassName("nav-link");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("active");
  }

  clickedElement.classList.add("active");
}

function setActiveLink() {
  var currentUrl = window.location.href;

  if (currentUrl.includes("recipes")) {
    setActive(document.querySelector('a[href="/recipes"]'));
  } else {
    setActive(document.querySelector('a[href="/groceries"]'));
  }
}

function isValidNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}

function isEmptyField(value) {
  return value.length === 0;
}

function areGroceryAmountsValid() {
  let groceryAmounts = document.querySelectorAll(".grocery-amounts");
  let isValid = Array.from(groceryAmounts).every((amount) => {
    const floatValue = parseFloat(amount.value);
    return floatValue > 0 && Number.isInteger(floatValue);
  });
  return isValid;
}

function openCustomAlert(message) {
  var modalText = document.getElementById("modal-text");
  modalText.innerHTML = message;
  document.getElementById("modal").style.display = "flex";
}

function closeCustomAlert() {
  document.getElementById("modal").style.display = "none";
}

function closeForm(id) {
  changeVisibility(id);
}

function removeRow(button) {
  const rowToRemove = button.parentElement;
  rowToRemove.remove();
}

function setGroceryAmountInputId(row) {
  let selectedOption = row.querySelector("select option:checked");

  // set the id attribute of the groceryAmount input number to be equal to that grocery's id
  if (selectedOption) {
    let selectedGroceryId = selectedOption.value;
    row.querySelector(".grocery-amounts").id = `${selectedGroceryId}`;
    console.log("Changed to id " + selectedOption.value);
  }
}

function setSelectOnChangeListeners() {
  let selectInputs = document.querySelectorAll("#recipe-groceries-list");
  selectInputs.forEach(
    (selectInput) =>
      (selectInput.onchange = function (event) {
        const changedSelect = event.target;
        // find the closest ancestor with class 'row'
        const row = changedSelect.closest(".row");

        setGroceryAmountInputId(row);
      })
  );
}

function removeSelectOnChangeListeners() {
  let selectInputs = document.querySelectorAll("#recipe-groceries-list");
  selectInputs.forEach((selectInput) => {
    if (selectInput.onchange) {
      selectInput.removeEventListener("change", selectInput.onchange);
    }
  });
}

function saveImage(image, type, id) {
  const reader = new FileReader();

  reader.onload = function (e) {
    const imageData = e.target.result;
    localStorage.setItem(`${type}-${id}`, imageData);
  };

  reader.readAsDataURL(image);
}
