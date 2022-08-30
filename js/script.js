const $ = document;
let themesBtns = $.querySelectorAll(".btn");
themesBtns.forEach((btns)=>{
    btns.addEventListener('click', (event)=>{
        let btnDataColor = event.target.dataset.color;
        $.documentElement.style.setProperty("--theme-color", btnDataColor);
    });
});