const menu_box=document.querySelector('.menu-box');
const menu_button=document.querySelector('.menu-button');

// 绑定点击事件
menu_button.addEventListener('click',function(){
    menu_box.classList.toggle('active');
})

