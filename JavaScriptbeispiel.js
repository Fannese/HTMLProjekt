let onclickbutton = document.querySelector('#Click-me');
onclickbutton.addEventListener('click', function () {
    let input = document.querySelector('#input');
    let login = document.querySelector('#login_box');
    let firstname = document.querySelector('#Firstname');
    let newDivFirsname = document.createElement('div');
    //let newContent = document.createTextNode(firstname.value);
    let inputfeld = document.createTextNode(input.value);
    newDivFirsname.appendChild(inputfeld);

})


