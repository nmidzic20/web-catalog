window.onload = () => {
  async function init() {
    setActiveLink();
    loadAddRecipeForm();
    initAddRecipeForm();
    initAddRecipeButton();
  }
  try {
    init();
  } catch (e) {
    init();
  }
};
