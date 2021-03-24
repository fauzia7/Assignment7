// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load' , () => {


// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON


// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
 
 let btn = window.document.getElementById('btnAddEmployee'); 
   btn.addEventListener('click', function () {       
  window.open('add-employee.html', 'popup', 'width=400,height=400');    });






});