const modal = document.querySelector('.modal')
const okButton = document.querySelector('.ok-button')

const orderButtons = document.querySelectorAll('.order-button')


let disabled = true
okButton.addEventListener('click',()=>{
    modal.classList.add('modal-disabled')
    
    disabled = true
})

orderButtons.forEach(b=>{
    b.addEventListener('click',()=>{
        if(disabled){
            modal.classList.remove('modal-disabled')
            disabled=false
        }
    })
})
