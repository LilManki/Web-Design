let burgerBtn = document.querySelector('.container');
let status = false;
burgerBtn.addEventListener('click', () => {
    if(status == false){
        status = true;
        document.querySelector('.menu').classList.add('show');
    }
    else{
        status= false;
        document.querySelector('.menu').classList.remove('show');
    }
})