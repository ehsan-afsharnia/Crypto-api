// -----------------|classes|------------------


const ui = new UI()
const crypto = new CryptoAPI()






//------------------|variables|---------------

const form = document.querySelector('#form')










//------------------|eventlisteners|-----------------

eventlisteners()

function eventlisteners() {
    
    form.addEventListener('submit', getvaluation)
}












//------------------|functions|-------------------


// get values from API

function getvaluation(e){
    e.preventDefault()

    // read values after submit the form
    const currency = document.querySelector('#currency').value
    const cryptocurrency = document.querySelector('#cryptocurrency').value

    // validate fields(all fileds must be selected)
    if (currency ==='' || cryptocurrency ==='') {
        
    } else {
        
    }

}