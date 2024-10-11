// Get the input values
const batasAwal = parseInt(prompt("Enter the starting value: "));
const batasAkhir = parseInt(prompt("Enter the ending value: "));

// Check if the input values are valid
if (batasAwal <= batasAkhir) {
  // Use a loop to iterate through the range of numbers
  for (let i = batasAwal; i <= batasAkhir; i++) {
    // Check if the current number is divisible by 5
    if (i % 5 === 0) {
      console.log(i);
    }
  }
} else {
  console.log("Invalid input. Please enter a valid starting and ending value.");
}