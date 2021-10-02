/*
<!-- <H1> -->
<!-- Bold -->
<!-- Italic -->
<!-- subscrip -->
<!-- insert a horizontal line -->
<!-- Underline -->
<!-- link -->
*/
let textArea = document.querySelector('.textarea')
const text = `In publishing and graphic design\n
Lorem ipsum is a placeholder
text commonly used to demonstrate the visual form of a document
or a typeface without relying on meaningful content. Lorem ipsum may
be used as a placeholder before final copy is available.`

textArea.innerText = text


const toolbox = document.querySelectorAll('button')


let clickedTimes = 0
function formatString(){
    const self = {
        H1: () => {
            if(clickedTimes < 1){
                document.execCommand('fontSize', true,'5pt')
                clickedTimes += 1
            } else {
                document.execCommand('fontSize', true,'3pt')
                clickedTimes = 0
            }
        },
        Bold: () => { document.execCommand('bold') },
        Italic: () => {document.execCommand('italic')  },
        Subscript: () => { document.execCommand('subscript') },
        horizontalLine: () => { document.execCommand('insertHTML', true, '<hr/>') },
        Underline: () => { document.execCommand('underline') }
    }
    return self
}

toolbox[0].addEventListener('click', ()=>{
    formatString().H1()
})
toolbox[1].addEventListener('click', ()=>{
    formatString().Bold()
})
toolbox[2].addEventListener('click', ()=>{
    formatString().Italic()
})
toolbox[3].addEventListener('click', ()=>{
    formatString().Subscript()
})
toolbox[4].addEventListener('click', ()=>{
    formatString().horizontalLine()
    console.log('aa')
})
toolbox[5].addEventListener('click', ()=>{
    formatString().Underline()
})
