document.getElementById("signupPage").style.display = 'none';

document.getElementById("signupbtn").addEventListener("click", (e)=>{
    document.getElementById("signupPage").style.display = 'flex';
    document.getElementById("info").style.display = 'none';
});


document.getElementById("backtologin").addEventListener("click",(e)=>{
    document.getElementById("signupPage").style.display = 'none';
    document.getElementById("info").style.display = 'flex';
});