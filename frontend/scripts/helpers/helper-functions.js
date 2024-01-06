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
/*
function displayDeleteButtonForGroceries() {
  let rows = document.querySelectorAll(".row");
  let deleteButton = rows[0].querySelector("#remove-row");
  if (deleteButton) deleteButton.remove();
  for (let i = 0; i < rows.length; i++) {
    let trashButton = rows[i].querySelector("#remove-row");
    if (trashButton) trashButton.style.display = "";
  }
}*/
