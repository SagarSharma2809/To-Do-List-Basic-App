let response = prompt("What would you like to do?")
const arr = []

while (response != 'quit') {


    if (response === 'new') {

        let item = prompt("Enter a new todo")
        arr.push(item)
        console.log(`${item} added to the list`)



    }
    else if (response === 'list') {
        console.log("************")
        // let count = 0

        // for (i of arr) {
        //     console.log(`${count} : ${i}`)
        //     count++

        // }
        for (let i = 0; i < arr.length; i++) {
            console.log(`${i} : ${arr[i]}`)
        }
        console.log("************")

    }
    else if (response === 'delete') {

        let i = prompt("Enter the index to delete")
        arr.splice(i, 1)
        console.log("todo is deleted")

    }
    else
        console.log("Pls enter a valid todo")

    response = prompt("What would you like to do?")


}