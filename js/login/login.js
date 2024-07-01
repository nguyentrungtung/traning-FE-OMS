// var loginForm = document.forms['loginForm']
// element from input login
var username = document.getElementById('login-username');
var userpwd = document.getElementById('login-userpassword');
var inputContainer = document.getElementsByClassName('input-group-login')
// element from input signup
var suInputContainer = document.getElementsByClassName('input-group-signup')
var su_userrepwd = document.getElementById('signup-userrepassword')
var su_username = document.getElementById('signup-username')
var su_userpwd = document.getElementById('signup-userpassword')
// alert text for login input
var nameAlert = document.getElementsByClassName('login-alert')[0]
var pwdAlert = document.getElementsByClassName('login-alert')[1]
// alert text for signup input
var suNameAlert = document.getElementsByClassName('signup-alert')[0]
var suPwdAlert = document.getElementsByClassName('signup-alert')[1]
var suRePwdAlert = document.getElementsByClassName('signup-alert')[2]
var timer = document.getElementById('timer')
function checkNotSymbol(letter){
    if(isNaN(letter)){
        return (letter.toLowerCase() != letter.toUpperCase());
    }
    return true
}
function showPwd(idIcon, idInput){
    var idIcon = document.getElementById(idIcon)
    var idInput = document.getElementById(idInput)
    if(idInput.type === 'text'){
        idIcon.classList.remove('fa-eye-slash')
        idIcon.classList.add('fa-eye')
        idInput.type = 'password'
    }
    else if(idInput.type === 'password'){
        idIcon.classList.add('fa-eye-slash');
        idIcon.classList.remove('fa-eye');
        idInput.type = 'text';
    }
}
function danger(item, container){
    item.classList.remove('d-none')
    container.classList.remove('border-dark')
    container.classList.add('border-danger')
}
function notDanger(item, container){
    item.classList.add('d-none')
    container.classList.remove('border-danger')
    container.classList.add('border-dark')
}
function checkUsername(item){
    item = item.value
    if(item == ''){
        return false
    }
    else{
        if(!isNaN(item)){
            console.log(item.length)
            if(item.length < 10 || item.length >11){
                return false
            }
            return true
        }
        else{
            if(item.includes('..') || item[0] == '.' || item[0] == '@' || !item.includes('@')){
                return false
            }
            else if(item.includes('@') && item.includes('.')){
                var count = 0;
                for(var i in item){
                    if(item[i] == '@'){
                        count++;
                    }
                }
                if(count > 1){
                    return false
                }
                else{
                    count = item.indexOf('@')
                    return checkNotSymbol(item[count-1])
                }
            }
        }
    }
}
function checkPwd(item){
    item = item.value;
    if(item == ''){
        return false
    }
    return true
}
function clearInput(item){
    item.value = '';
}
function setAlert(item, text){
    item.innerHTML = text;
}
// Valid login form
function validLoginForm(){
    if(checkUsername(username)){
        notDanger(nameAlert, inputContainer[0])
        if(checkPwd(userpwd)){
            notDanger(pwdAlert, inputContainer[1])
            return true;
        }
        else{
            danger(pwdAlert, inputContainer[1])
            return false
        }
    }
    else{
        danger(nameAlert, inputContainer[0])
        setAlert(nameAlert, 'Số điện thoại hoặc email không đúng định dạng!')
        if(checkPwd(userpwd)){
            notDanger(pwdAlert, inputContainer[1])
            return false;
        }
        else{
            danger(pwdAlert, inputContainer[1])
            setAlert(pwdAlert, 'Không được để trống trường này')
            return false;
        }
    }
}
// Valid Signup form
function validSignupForm(){
    if(checkUsername(su_username)){
        notDanger(suNameAlert, suInputContainer[0])
        if(checkPwd(su_userpwd)){
            notDanger(suPwdAlert, suInputContainer[1])
            if(!checkPwd(su_userrepwd)){
                setAlert(suRePwdAlert, 'Không được để trống mục này');
                danger(suRePwdAlert, suInputContainer[2])
                clearInput(su_userpwd)
                return false;
            }
            else{
                if(su_userpwd.value != su_userrepwd.value){
                    setAlert(suPwdAlert, 'Mật khẩu và Mật khẩu nhập lại phải giống nhau.');
                    danger(suPwdAlert, suInputContainer[1])
                    setAlert(suRePwdAlert, 'Mật khẩu và Mật khẩu nhập lại phải giống nhau.');
                    danger(suRePwdAlert, suInputContainer[2])
                    clearInput(su_userpwd)
                    clearInput(su_userrepwd)
                    return false
                }
                else{
                    notDanger(suPwdAlert, suInputContainer[1])
                    notDanger(suRePwdAlert, suInputContainer[2])
                }
            }
        }
        else{
            setAlert(suPwdAlert, 'Không được để trống mục này');
            danger(suPwdAlert, suInputContainer[1])
            if(!checkPwd(su_userrepwd)){
                setAlert(suRePwdAlert, 'Không được để trống mục này');
                danger(suRePwdAlert, suInputContainer[2])
            }
            clearInput(su_userrepwd)
            clearInput(su_userpwd)
            return false;
        }
    }
    else{
        danger(suNameAlert, suInputContainer[0])
        setAlert(suNameAlert, 'Số điện thoại hoặc email không đúng định dạng.')
        if(checkPwd(su_userpwd)){
            notDanger(suPwdAlert, suInputContainer[1])
            if(!checkPwd(su_userrepwd)){
                setAlert(suRePwdAlert, 'Không được để trống mục này');
                danger(suRePwdAlert, suInputContainer[2])
                clearInput(su_userpwd)
            }
            else{
                if(su_userpwd.value != su_userrepwd.value){
                    setAlert(suPwdAlert, 'Mật khẩu và Mật khẩu nhập lại phải giống nhau.');
                    danger(suPwdAlert, suInputContainer[1])
                    setAlert(suRePwdAlert, 'Mật khẩu và Mật khẩu nhập lại phải giống nhau.');
                    danger(suRePwdAlert, suInputContainer[2])
                    clearInput(su_userpwd)
                    clearInput(su_userrepwd)
                    return false
                }
                else{
                    notDanger(suPwdAlert, suInputContainer[1])
                    notDanger(suRePwdAlert, suInputContainer[2])
                }
            }
        }
        else{
            setAlert(suPwdAlert, 'Không được để trống mục này');
            danger(suPwdAlert, suInputContainer[1])
            if(!checkPwd(su_userrepwd)){
                setAlert(suRePwdAlert, 'Không được để trống mục này');
                danger(suRePwdAlert, suInputContainer[2])
            }
            clearInput(su_userrepwd)
            clearInput(su_userpwd)
        }
        return false;
    }
    alert('Bạn đã đăng ký tài khoản thành công, Tài khoản sẽ được kích hoạt trong vài ngày nữa, vui lòng quay lại sau :)))')
    return true;
}
var OTP = document.querySelectorAll('input-number')
OTP.forEach((item, index)=>
item.addEventListener('input',(event)=>{
    var value = event.target.value
    console.log(value)
}))
function validOTP(){
}
function send(){
    timer.innerHTML = "<span class='btn border-0 text-muted'>Méo gửi lại mã nữa, mệt rồi</span>"
}
setInterval(()=>{timer.innerHTML = "<button onclick='send()' class='btn border-0 text-green fw-bold'>Gửi lại mã</button>"}, 5000)