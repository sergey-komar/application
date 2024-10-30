$(function () {
    $('.inactive-item__top-input').change(function(){
		if (+$(this).attr('max') < $(this).val()) {
			$(this).val($(this).attr('max'));
		}
	});
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
   
//Высота на мобилках 
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

//прелоадер
    let mask = document.querySelector('.mask')
    window.addEventListener('load', () => {
        mask.classList.add('mask-hide');
        setTimeout(() => {
        mask.remove();
        }, 600);
    });



});
   
   

