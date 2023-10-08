const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const toggleColor= document.getElementById('toggle-colors');
const rootStyle = document.documentElement.style;
const flagsElements = document.getElementById('flags');
const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguage = async language=>{
    const requestJson = await fetch(`./lenguages/${language}.json`);
    const texts = await requestJson.json();
    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML= texts[section][value]
    }
}

flagsElements.addEventListener('click',(e) => {
    changeLanguage(e.target.parentElement.dataset.language)
})


toggleTheme.addEventListener('click', ()=> {
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src='assets/icons/sun.svg'
        toggleText.textContent = "Light mode"
    }else{
        toggleIcon.src='assets/icons/moon.svg'
        toggleText.textContent = "Dark mode"
    }
});

toggleColor.addEventListener("click",(e) => {
    rootStyle.setProperty("--primary-color",e.target.dataset.color);
});