
// Your Code Here
async function getBookList() {
    const response = await fetch('http://localhost:9001/updateBook')
    const result = await response.json()
  result.forEach(bookQuantityChange)

}



async function bookQuantityChange() {
    let root = document.querySelector('#root')
    
    let li = document.createElement('li')
    li.textContent = book.title

   let quantityInput = document.createElement('input')
   quantityInput.value = book.quantityInput

   let saveButton = document.createElement('button')
   saveButton.textContent = 'Save'

   


}
