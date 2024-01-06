let allInpts = document.querySelectorAll('.bgItm input')

let whoStart = "X"

allInpts.forEach(allInpt => {
    function fullInpt(){
        allInpt.style.backgroundColor = "var(--cl3)"
        allInpt.style.color = "var(--cl1)"
    }
    allInpt.addEventListener('click', () => {
        if(whoStart == "X"){
            allInpt.value = whoStart
            fullInpt()
            whoStart = "O"
        }else{
            allInpt.value = whoStart
            fullInpt()
            whoStart = "X"
        }
    })
})

