
// // Function to reverse array of strings
const places = ["Kitale", "Nairobi", "Meru", "Bungoma"]
function reverseStrings() {
    const places2 = places.sort()
    console.log({ places2 });

    places2.reverse();
    console.log({ places });

}
reverseStrings();

// //function for checking array of numbers if is positive, negative or zero
let numbers = [4, 5, 6, 0, 7, -8]
function checkNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            console.log(numbers[i] + " Number is Posive");
        } else if (numbers[i] < 0) {
            console.log(numbers[i] + " Number is Negative");
        } else {
            console.log(numbers[i] + "Number is zero");

        }


    }
}
checkNumbers();

// //  Function to return an object of employees salary sorted in ascending order
function salaryEmployees() {
    let employees = [
        { id: 3, Name: "Debora", salary: 80000 },
        { id: 4, Name: "Mercy", salary: 500000 },
        { id: 1, Name: "Jane", salary: 30000 },
        { id: 8, Name: "Ruth", salary: 40000 }

    ]
    let employees2 = employees.sort();
    console.log({ employees2 });
}
salaryEmployees();

// // fuction of array of numbers using for each multiply each number by 2

function multiplyNumbers() {
    let nums = [4, 6, 8, 10,9]
    nums.forEach(nums => {
        console.log(nums * 2)

    });

}
multiplyNumbers();

// function that takes in array of numbers multiply first four by 8 and add 5 to the last two elements
let nums = [1, 2, 3, 4, 5, 6, 7]
function operationNumbers() {
    for (let k = 0; k < nums.length; k++) {
        if (nums[k] < 4) {
            nums[k] = nums[k] * 8;

        }
        if (nums[k] < nums.length) {
            nums[k] = nums[k] + 5;
        }
      

        console.log(nums[k]);


    }
}
operationNumbers();