const controls = document.getElementById('controls');
const boxesContainer = document.getElementById('boxes');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');

createButton.addEventListener('click', () => {
    const amount = parseInt(input.value);
    if (amount < 1 || amount > 100 || isNaN(amount)) return;
    createBoxes(amount);
    input.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    destroyBoxes();
    const boxes = [];
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.push(box);
    }
    boxesContainer.append(...boxes);
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
