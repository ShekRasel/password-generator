const uperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialSymbl = '!@#$%^&*()_+-=[]{}|;:,.<>?~/`';
const passLegth = 10;
const allCharacters = uperCase + lowerCase + numbers + specialSymbl;
const input = document.querySelector('.pass-input');
const passWordGenerator = document.querySelector('.pass-gen');
const copyPass = document.querySelector('.copy');

passWordGenerator.addEventListener('click',()=>{
    generatePassword();
});

copyPass.addEventListener('click',()=>{
    copyValue();
});

function generatePassword(){
    let passWord = '';

    passWord+= uperCase[Math.floor(Math.random() * uperCase.length)];
    passWord+= lowerCase[Math.floor(Math.random() * lowerCase.length)];
    passWord+= numbers[Math.floor(Math.random() * numbers.length)];
    passWord+= specialSymbl[Math.floor(Math.random() * specialSymbl.length)];

    while(passLegth>passWord.length){
       passWord += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    input.value = passWord;
};

function copyValue(){
    input.select();
    document.execCommand('copy');
}

input.value = "";