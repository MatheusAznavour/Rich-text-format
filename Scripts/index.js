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
const linkURL = document.querySelector('.link')

let clickedTimes = 0
function formatString(){
    const self = {
        h1: () => {
            if(clickedTimes < 1){document.execCommand('fontSize', true,'5pt'); clickedTimes += 1} 
            else { document.execCommand('fontSize', true,'3pt'); clickedTimes = 0}
        },
        bold: () => { document.execCommand('bold') },
        italic: () => {document.execCommand('italic')  },
        subscript: () => { document.execCommand('subscript') },
        horizontalLine: () => { document.execCommand('insertHTML', true, '<hr/>') },
        underline: () => { document.execCommand('underline') },
        link: () => { document.execCommand('createLink', true, linkURL.value) }
    }
    return self
}

toolbox[0].addEventListener('click', ()=>{
    formatString().h1()
})
toolbox[1].addEventListener('click', ()=>{
    formatString().bold()
})
toolbox[2].addEventListener('click', ()=>{
    formatString().italic()
})
toolbox[3].addEventListener('click', ()=>{
    formatString().subscript()
})
toolbox[4].addEventListener('click', ()=>{
    formatString().horizontalLine()
    console.log('aa')
})
toolbox[5].addEventListener('click', ()=>{
    formatString().underline()
})
toolbox[6].addEventListener('click', ()=>{
    formatString().link()
})
