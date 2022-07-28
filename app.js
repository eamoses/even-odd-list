let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")

function updateWord(element) {
    usersWord = element.value
    console.log('Update word function')
}

function handleSubmit() {

    if (usersWord.length % 2 != 0) {
        let newListItem = document.createElement('li')
        newListItem.innerText = usersWord
    
        oddList.appendChild(newListItem)
    } else {
        let newListItem = document.createElement('li')
        newListItem.innerText = usersWord
    
        evenList.appendChild(newListItem)
    }

    usersWord = ""
    document.getElementById("even-odd-form").reset()
}