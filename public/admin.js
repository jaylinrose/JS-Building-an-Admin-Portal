
// Your Code Here
async function main() {
    const response = await fetch('http://localhost:3001/listBooks')
    const result = await response.json()
  result.forEach(bookQuantityChange)

}



async function bookQuantityChange() {
    let root = document.querySelector('#root')
    
    let li = document.createElement('li')
    li.textContent = book.title

   let quantityInput = document.createElement('input')
   quantityInput.value = book.quantity

   let saveButton = document.createElement('button')
   saveButton.textContent = 'Save'

   saveButton.addEventListener('click', () =>{
    fetch('http://localhost:3001/updateBook', {
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
           id: book.id,
           quantity: quantityInput.value
            
        })

     })

   })

   li.append(quantityInput, saveButton)

   root.append(li)

}

main();
