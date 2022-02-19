const toggleBtn = document.querySelectorAll(".btn-dark-mode");
// console.log(toggleBtn);
var localStorageTheme = localStorage.getItem('theme');

if(localStorageTheme==="dark"){
    document.documentElement.setAttribute('data-theme',localStorageTheme);
    toggleBtn.forEach((eachBtn)=>{
        eachBtn.innerHTML='<i class="fas fa-sun"></i>';
    });
} else{
    document.documentElement.setAttribute('data-theme',"light");
    toggleBtn.forEach((eachBtn)=>{
        eachBtn.innerHTML='<i class="fas fa-moon"></i>';
    });
}

toggleBtn.forEach((eachBtn)=>{

    eachBtn.addEventListener("click",(e)=>{
    
        e.preventDefault();
    
        let currentTheme = document.documentElement.getAttribute("data-theme");
    
        if(currentTheme==="light"){
            currentTheme = "dark";
            // console.log("light");
            eachBtn.innerHTML='<i class="fas fa-sun"></i>';
        } else {
            currentTheme = "light";
            // console.log("dark");
            eachBtn.innerHTML='<i class="fas fa-moon"></i>';
        }
    
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);

    })

})