/*
<!-- <H1> -->
<!-- Bold -->
<!-- Italic -->
<!-- subscrip -->
<!-- add a line -->
<!-- Underline -->
<!-- link -->
*/

const toolbox = document.querySelectorAll('button')
let textArea = document.querySelector('textarea')

var text = ''

function getSelectedText(){
    if (window.getSelection) {
        text = window.getSelection().toString();
        console.log(text)
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function formatString(){
    const self = {
        H1: () => {
            let textAreaText = textArea.value.includes(text)
            getSelectedText()

            textAreaa.value = textArea.value.replace(text.toLowerCase(), text.toUpperCase())
            console.log('SSS')
            console.log(text)
        }
    }
    return self
}

toolbox[0].addEventListener('click', ()=>{
    formatString().H1()
})
