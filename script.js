let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");

let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");
let copyIcon = document.getElementById("copyIcon");



sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", function() {
    sliderValue.textContent = inputSlider.value;
});

genbtn.addEventListener("click", function() {
   passbox.value = generatePassword();
});

let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
  let genPassword = "";
  let allChars = "";

  allChars += lowercase.checked ? lowercaseChars : "";
  allChars += uppercase.checked ? uppercaseChars : "";
  allChars += numbers.checked ? allnumbers : "";
  allChars += symbols.checked ? allsymbols : "";

  if(allChars== "" || allChars.length === 0) {
    return genPassword;
  }

  let i=1;
  while(i <= inputSlider.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }
  return genPassword;
    
}

copyIcon.addEventListener("click", function() {
    if(passbox.value != "" || passbox.value.length >= 1) {
         navigator.clipboard.writeText(passbox.value);
         copyIcon.innerText= "check";
        copyIcon.title = "Password Copied";

        setTimeout(() => {
            copyIcon.innerText= "content_copy";
            copyIcon.title = "";
        }, 3000);

      
    }
   
});