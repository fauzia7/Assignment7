// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', () => {

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
let width = 800;
let height = 700;

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
window.resizeTo(width,height);
// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW 
let cancel = document.getElementById('cancel');
cancel.addEventListener('click', () => {
   window.close();
});

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
let btns = document.getElementById('empForm');
btns.addEventListener('submit', (e) => {
    e.preventDefault();
    let digit = document.getElementById("id").value;
    let name =document.getElementById('name').value;
    let extt =document.getElementById('extension').value;
    let ema =document.getElementById('email').value;
    let dept =document.getElementById('department').value;

    // GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
    // SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
    let parentoutput = window.opener.document.getElementById('loginDetails');
    parentoutput.innerHTML= `ID : ${digit} <br>  Name : ${name} <br> Extension : ${extt} <br> Email : ${ema} <br> Department : ${dept}` ;
    

   // CLOSE THE POPUP
   window.close();

});




});