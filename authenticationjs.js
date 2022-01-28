var sign_in = document.getElementById('signin')
login_button.addEventListener('click', funclogin)
//login_button.style.opacity = 0.6    

var sign_up= document.getElementById('signup')
register_button.addEventListener('click', funcregister)
//register_button.style.opacity = 0.6  

var login = document.getElementById('login')

var register = document.getElementById('register')

register.style.display = 'none'

function funclogin(e) {
    register.style.display = 'none'
    login.style.display = 'block'
}

function funcregister(e) {
    login.style.display = 'none'
    register.style.display = 'block'
}