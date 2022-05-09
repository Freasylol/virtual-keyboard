const engLayout = {
    symbols: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
        'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
        'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift',
        'Ctrl', 'Win', 'Alt', 'Space', 'left', 'up/down', 'right'],
    shiftSymbols: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+',
        '{', '}', '|',
        ':', '"',
        '<', '>', '?'],
    shiftReplSymbols: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
        '[', ']', '\\',
        ';', '"',
        ',', '.', '/'],
};

const ruLayout = {
    symbols: ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\',
        'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
        'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'Shift',
        'Ctrl', 'Win', 'Alt', 'Space', 'left', 'up/down', 'right'],
    shiftSymbols: ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+',
        '{', '}', '|',
        ','],
    shiftReplSymbols: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
        '[', ']', '\\',
        ','],
};

const container = document.createElement('div');
container.className = 'container';
document.body.append(container);

const keyboardWrap = document.createElement('div');
keyboardWrap.className = 'keyboard-wrap';
container.append(keyboardWrap);

const keyboardLights = document.createElement('div');
keyboardLights.className = 'keyboard-lights';
keyboardWrap.append(keyboardLights);

const keyboardKeys = document.createElement('div');
keyboardKeys.className = 'keyboard-keys';
keyboardWrap.append(keyboardKeys);

let keyRow1 = [];
let keyRow2 = [];
let keyRow3 = [];
let keyRow4 = [];
let keyRow5 = [];

for (let i = 0; i < engLayout.symbols.length; i += 1) {
    let key = document.createElement('div');
    key.className = 'keys';
    if (engLayout.symbols[i] === 'Backspace') {
        key.classList.add('backspace-key');
    } else if (engLayout.symbols[i] === 'Tab') {
        key.classList.add('tab-key');
    } else if (engLayout.symbols[i] === '\\') {
        key.classList.add('slash-key');
    } else if (engLayout.symbols[i] === 'Caps Lock') {
        key.classList.add('capsLock');
    } else if (engLayout.symbols[i] === 'Enter') {
        key.classList.add('enter-key');
    } else if (engLayout.symbols[i] === 'Shift' && i === 41) {
        key.classList.add('shift-key');
        key.classList.add('shift-left');
    } else if (engLayout.symbols[i] === 'Shift' && i === 52) {
        key.classList.add('shift-key');
        key.classList.add('shift-right');
    } else if (engLayout.symbols[i] === 'Ctrl') {
        key.classList.add('ctrl-key');
    } else if (engLayout.symbols[i] === 'Win') {
        key.classList.add('win-key');
    } else if (engLayout.symbols[i] === 'Alt') {
        key.classList.add('alt-key');
    } else if (engLayout.symbols[i] === 'Space') {
        key.classList.add('space-key');
        key.classList.add('space-key');
        key.append(' ');
        keyRow5.push(key);
        continue;
    } else if (engLayout.symbols[i] === 'right') {
        key.classList.add('key-right');
        key.innerHTML = '<img src="../img/slider-arrow-right.svg">';
        keyRow5.push(key);
        continue;
    } else if (engLayout.symbols[i] === 'left') {
        key.classList.add('key-left');
        key.innerHTML = '<img src="../img/slider-arrow-left.svg">';
        keyRow5.push(key);
        continue;
    } else if (engLayout.symbols[i] === 'up/down') {
        key = document.createElement('div');
        let keys = [];
        let upKey = document.createElement('div');
        upKey.className = 'keys';
        upKey.classList.add('two');
        upKey.innerHTML = '<img src="../img/slider-arrow-left.svg">';
        keys.push(upKey);

        let downKey = document.createElement('div');
        downKey.className = 'keys';
        downKey.classList.add('two');
        downKey.innerHTML = '<img src="../img/slider-arrow-right.svg">';

        keys.push(downKey);
        key.append(...keys);
        keyRow5.push(key);
        continue;
    }
    key.append(engLayout.symbols[i]);
    if (i <= 13) {
        keyRow1.push(key);
    } else if (i >= 14 && i <= 27) {
        keyRow2.push(key);
    } else if (i >= 28 && i <= 40) {
        keyRow3.push(key);
    } else if (i >= 41 && i <= 52) {
        keyRow4.push(key);
    } else if (i >= 53 && i <= 60) {
        keyRow5.push(key);
    }
}

for (let i = 0; i < 5; i += 1) {
    const row = document.createElement('div');
    row.className = 'row';
    switch (i) {
    case 0:
        row.append(...keyRow1);
        keyboardKeys.append(row);
        break;
    case 1:
        row.append(...keyRow2);
        keyboardKeys.append(row);
        break;
    case 2:
        row.append(...keyRow3);
        keyboardKeys.append(row);
        break;
    case 3:
        row.append(...keyRow4);
        keyboardKeys.append(row);
        break;
    case 4:
        row.append(...keyRow5);
        keyboardKeys.append(row);
        break;
    default: break;
    }
}

let textArea = document.createElement('textarea');
textArea.className = 'text';
container.append(textArea);

let switchInfo = document.createElement('div');
switchInfo.append('Use Ctrl + Alt to switch language');
switchInfo.classList.add('switch-info');
container.append(switchInfo);

const keys = document.querySelectorAll('.keys');
const spaceKey = document.querySelector('.space-key');
const shiftLeft = document.querySelector('.shift-left');
const shiftRight = document.querySelector('.shift-right');
const capsLock = document.querySelector('.capsLock');
const alt = document.querySelector('.alt-key');
const ctrl = document.querySelector('.ctrl-key');
const textInput = document.querySelector('.text');
const backspace = document.querySelector('.backspace-key');
const tab = document.querySelector('.tab-key');
const right = document.querySelector('.key-right');
const left = document.querySelector('.key-left');
const enter = document.querySelector('.enter-key');
const two = document.querySelector('.two');
let keyboardStorage = window.localStorage;

backspace.addEventListener('click', () => {
    textInput.value = textInput.value.split('').splice(0, textInput.value.length - 1).join('');
});

let capsState = false;

let shiftState = false;

let altState = false;

let ctrlState = false;

keyboardStorage.setItem('lang', 'eng')

ctrl.addEventListener('click', () => {
    ctrlState = ctrlState === false;
    if (ctrlState && altState && keyboardStorage.getItem('lang') === 'eng') {
        let index = 0;
        keys.forEach((key) => {
            if (engLayout.symbols.includes(key.innerText)) {
                key.innerText = ruLayout.symbols[index];
                index += 1;
            }
        });
        keyboardStorage.setItem('lang', 'ru')
    } else if (ctrlState && altState && keyboardStorage.getItem('lang') === 'ru') {
        let index = 0;
        keys.forEach((key) => {
            if (ruLayout.symbols.includes(key.innerText)) {
                key.innerText = engLayout.symbols[index];
                index += 1;
            }
        });
        keyboardStorage.setItem('lang', 'eng')
    }
});

alt.addEventListener('click', () => {
    altState = altState === false;
    if (ctrlState && altState && keyboardStorage.getItem('lang') === 'eng') {
        let index = 0;
        keys.forEach((key) => {
            if (engLayout.symbols.includes(key.innerText)) {
                key.innerText = ruLayout.symbols[index];
                index += 1;
            } else if (engLayout.shiftSymbols.includes(key.innerText)) {
                key.innerText = ruLayout.shiftSymbols[index];
                index += 1;
            }
        });
        keyboardStorage.setItem('lang', 'ru')
    } else if (ctrlState && altState && keyboardStorage.getItem('lang') === 'ru') {
        let index = 0;
        keys.forEach((key) => {
            if (ruLayout.symbols.includes(key.innerText)) {
                key.innerText = engLayout.symbols[index];
                index += 1;
            }
        });
        keyboardStorage.setItem('lang', 'eng')
    }
});

shiftLeft.addEventListener('click', () => {
    if (shiftState === false) {
        let index = 0;
        keys.forEach((key) => {
            if (engLayout.shiftReplSymbols.includes(key.textContent)) {
                key.innerText = engLayout.shiftSymbols[index];
                index += 1;
            }
        });
    } else if (shiftState) {
        let index = 0;
        keys.forEach((key) => {
            if (engLayout.shiftSymbols.includes(key.textContent)) {
                key.innerText = engLayout.shiftReplSymbols[index];
                index += 1;
            }
        });
    }
    shiftState = shiftState === false;
});

tab.addEventListener('click', () => {
    textInput.value += ' ';
});

capsLock.addEventListener('click', () => {
    capsState = capsState === false;
});

spaceKey.addEventListener('click', () => {
    textInput.value += ' ';
});

enter.addEventListener('click', () => {
    textInput.value += '\n';
    textInput.focus();
});

const focusAtEnd = () => textInput.focus();

right.addEventListener('click', () => focusAtEnd());

left.addEventListener('click', () => focusAtEnd());

two.addEventListener('click', () => focusAtEnd());

for (let i = 0; i < keys.length; i += 1) {
    keys[i].addEventListener('click', () => {
        const value = keys[i].innerText;
        
        
        if (value !== 'Backspace' && value !== 'Alt' && value !== 'Ctrl' && value !== 'Win'
        && value !== 'Shift' && value !== 'Enter' && value !== 'Tab' && value !== 'Caps Lock') {
            keys[i].classList.toggle('remove');
            if (capsState) {
                if (shiftState) {
                    textInput.value += value.toLowerCase();
                } else {
                    textInput.value += value.toUpperCase();
                }
            } else if (shiftState) {
                if (capsState) {
                    textInput.value += value.toLowerCase();
                } else {
                    textInput.value += value.toUpperCase();
                }
            } else {
                textInput.value += value.toLowerCase();
            }
        } else {
            keys[i].classList.toggle('active');
        }
    });
}

window.addEventListener('keydown', (e) => {
    for (let i = 0; i < keys.length; i += 1) {
        if (e.key.toUpperCase() === keys[i].innerText) {
            keys[i].classList.add('active');
        }
        if (e.code === 'Space') {
            spaceKey.classList.add('active');
        }
        if (e.code === 'ShiftLeft') {
            shiftRight.classList.remove('active');
        }
        if (e.code === 'ShiftRight') {
            shiftLeft.classList.remove('active');
        }
        if (e.code === 'CapsLock') {
            capsLock.classList.toggle('active');
        }
    }
});

window.addEventListener('keyup', (e) => {
    for (let i = 0; i < keys.length; i += 1) {
        if (e.key.toUpperCase() === keys[i].innerText) {
            keys[i].classList.remove('active');
            keys[i].classList.add('remove');
        }
        if (e.code === 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if (e.code === 'shiftLeft') {
            shiftRight.classList.remove('active');
            shiftRight.classList.remove('remove');
        }
        if (e.code === 'ShiftRight') {
            shiftLeft.classList.remove('active');
            shiftLeft.classList.remove('remove');
        }
        setTimeout(() => {
            keys[i].classList.remove('remove');
        }, 200);
    }
});

