// Write your solution in this file!
const employee = {
            name: "Sam",
            streetAddress: "11 Broadway",
        };

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return{
        ...obj,
        [key]:value,
    };
}

employee = updateEmployeeWithKeyAndValue();

function destructivelyUpdateEmployeeWithKeyAndValue() {
        employee.streetAddress = "12 Broadway";

};





 