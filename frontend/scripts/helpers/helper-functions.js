function changeVisibility(id) {
    var element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

function setVisibility(id, visible) {
    var element = document.getElementById(id);
    if (visible) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}