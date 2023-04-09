// 要操作的元素
const menu1_box=document.querySelector('.menu1-box');
const menu1_button=document.querySelector('.menu1-button');

// 为菜单按钮绑定点击事件
menu1_button.addEventListener('click',function(){
    menu1_box.classList.toggle('active');
})