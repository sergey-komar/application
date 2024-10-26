$(function () {

})

window.addEventListener('DOMContentLoaded', () => {

    const logoDark = document.querySelector('.footer-box__logo-dark');
    const logoWhite = document.querySelector('.footer-box__logo-white');

    let styleMode = localStorage.getItem('styleMode');
    let activeMode = localStorage.getItem('activeMode');
    let ativeWhite = localStorage.getItem('ativeWhite');
    const toggle = document.querySelector('.toggle');

    const enableDarkStyle = () => {
        document.body.classList.add('dark');
        localStorage.setItem('styleMode', 'dark');
        localStorage.setItem('activeMode','active');
        localStorage.setItem('ativeWhite','footer-box__logo-white');
    }

    const disableDarkStyle = () => {
        document.body.classList.remove('dark');
        localStorage.setItem('styleMode', null);
        localStorage.setItem('activeMode', null);
        localStorage.setItem('ativeWhite', null);
    }

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        styleMode = localStorage.getItem('styleMode');
       
        logoDark.classList.toggle('hide');
        logoWhite.classList.toggle('show');
        if(styleMode !== 'dark'){
            enableDarkStyle();
        }else{
            disableDarkStyle();
        } 
     
    })

    if(styleMode === 'dark'){
        enableDarkStyle();
    }
    if(activeMode === 'active'){
        toggle.classList.add('active');
    }
    if(ativeWhite === 'footer-box__logo-white'){
        logoDark.classList.toggle('hide');
        logoWhite.classList.toggle('show');
    }
   

})
   
   
