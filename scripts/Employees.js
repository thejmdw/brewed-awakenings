import { getEmployees, getOrders } from "./database.js"


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) { //this sorts out what is clicked
            const [,employeeId] = itemClicked.id.split("--") //this splits the class name and sets it to a variable employeeId

            let total = 0
            const employee = employees[employeeId - 1]
            for (const order of orders) {
                
                if (order.employeeId === parseInt(employeeId)) {
                    total += 1
                    
                }
                
            }
            window.alert(`${employee.name} sold ${total} products`)
        }
    }
)


const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

