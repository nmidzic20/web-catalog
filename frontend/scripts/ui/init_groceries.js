window.onload = () => {
  function init() {
    setActiveLink();
    loadAddGroceryForm();
    initAddGroceryButton();
  }
  try {
    init();
  } catch (e) {
    init();
  }
};
