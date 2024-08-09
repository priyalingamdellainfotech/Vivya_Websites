var allValue = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y', 'Z','1','2','3','4','5','6','7','8','9','0',];
function newCaptcha() {
    var cVal1 = allValue[Math.floor(Math.random() * allValue.length)];
    var cVal2 = allValue[Math.floor(Math.random() * allValue.length)];
    var cVal3 = allValue[Math.floor(Math.random() * allValue.length)];
    var cVal4 = allValue[Math.floor(Math.random() * allValue.length)];
    var cVal5 = allValue[Math.floor(Math.random() * allValue.length)];
    var cVal6 = allValue[Math.floor(Math.random() * allValue.length)];
    var cValue = cVal1 + cVal2 + cVal3 + cVal4 + cVal5 + cVal6;
    captchaValue.innerHTML = cValue;
  }
  newCaptcha();
  document.querySelector("#new_captcha").addEventListener("click", newCaptcha);

  
thisValue = "";
captcha_code.addEventListener("change", function () {
  thisValue = captcha_code.value;
});
function restrictAlphabets(e) {
    var x = e.which || e.keycode;
    if ((x >= 48 && x <= 57))
        return true;
    else
        return false;
}

       