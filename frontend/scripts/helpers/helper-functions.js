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
  }

  if (currentUrl.includes("groceries")) {
    setActive(document.querySelector('a[href="/groceries"]'));
  }
}
