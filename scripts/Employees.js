import { getEmployees, getOrders, getProducts } from "./database.js"


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target //this sets the value clicked to a variable

        if (itemClicked.id.startsWith("employee")) { //this sorts out what is clicked
            
            const [,employeeId] = itemClicked.id.split("--") //this splits the class name and sets it to a variable employeeId

            let total = 0 //sets total number of sales to 0
            let totalCash = 0

            const employee = employees[employeeId - 1] //finds the employee based on the relation of index and ID

            for (const order of orders) { //iterate over the orders
                
                if (order.employeeId === parseInt(employeeId)) { //if the employeeId of the order matches the employee Id clicked...
                    
                    total++ // add one to the total

                    const product = products[order.productId] //~~ just for fun
                    totalCash += product.price //~~ just for fun
                }
                
            }
            window.alert(`${employee.name} sold ${total} products worth $${totalCash}`) //send alert when iteration is complete
        }
    }
)


const employees = getEmployees()
const orders = getOrders()
const products = getProducts()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

