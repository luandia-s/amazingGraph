const navbar = document.querySelector('.navbar')
const toggle = document.getElementById('toggle')

toggle.addEventListener('click', () => {
    
    if ( toggle.checked ) {
        console.log('CheckBox marcado');
        document.querySelector('h4').innerHTML = 'FECHAR'
        navbar.classList.add('active')
    } else {
        console.log('CheckBox desmarcado');
        document.querySelector('h4').innerHTML = 'MENU'
        navbar.classList.remove('active')
    }
})

