/* списки в выпадающем окне */
document.addEventListener('DOMContentLoaded', function() {

    const filterGroups = document.querySelectorAll('.filter-group');
    
    filterGroups.forEach(group => {
        const labelDiv = group.querySelector('.lab');
        const iconSpan = labelDiv.querySelector('.icon');
        const content = group.querySelector('.artistFilter, .years-group');
        
        if (content && content.style.display !== 'none') {
            iconSpan.textContent = '+';
            content.style.display = 'none';
        } else {
            iconSpan.textContent = '-';
            content.style.display = 'block';
        }
        
        labelDiv.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (content.style.display === 'none') {
                content.style.display = 'block';
                iconSpan.textContent = '-';
            } else {
                content.style.display = 'none';
                iconSpan.textContent = '+';
            }
        });
    });
});

/* выпадающее окно */
const closeButton = document.getElementById('closeSett');/*крестик*/
const settingsBlock = document.getElementById('sett');/*окно*/
const settingButton = document.getElementById('setting');/*настройки*/

if (closeButton) {
    closeButton.addEventListener('click', function() {
        settingsBlock.style.display = 'none';
    });
}

if (settingButton) {
    settingButton.addEventListener('click', function() {
        settingsBlock.style.display = 'block';
    });
}

/* смена темы */
let dark = true;
const body = document.body;
const themeButton = document.getElementById('select');
if (themeButton) {
    const themeIcon = themeButton.querySelector('img');
    
    // функция переключения темы
    function darkLight() {
        if (dark) {
            // переключаем на светлую тему
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
            if (themeIcon) {
                themeIcon.src = './img/луна.svg';
                themeIcon.alt = 'dark theme';
            }
        } else {
            // переключаем на темную тему
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
            if (themeIcon) {
                themeIcon.src = './img/солнце.svg';
                themeIcon.alt = 'light theme';
            }
        }
        
        dark = !dark;
    }
    
    // добавляем обработчик события на кнопку
    themeButton.addEventListener('click', darkLight);
}

// устанавливаем начальную тему (темная)
if (body) {
    body.classList.add('theme-dark');
}