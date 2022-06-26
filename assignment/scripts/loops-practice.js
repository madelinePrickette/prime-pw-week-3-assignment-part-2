console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for(i=0; i<6; i++) {
  console.log(i);
}// I needed to change the limit of i to 6 so I could count up, including the number 5.

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for(i=3; i<6; i++) {
  console.log(i);
}// I changed the start number to 3 and the limit to 6. This allows 3, 4, 5 to be counted.

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for(i=2; i<11; i++) {
  if(i%2 === 0) {
    console.log(i);
  }
}// Here I changed the start number to 2, the limit to 11, and actually added an if statement.
 // I did this because I had to console log only the even numbers, so for every i that had a 
 // remainder of 0 when divided by 2, should be printed. 

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for(i=5; i>(-1); i--){
  console.log(i);
}// Here I changed the start number to 5 since we are counting down. Then chaged the limit or
 // stop point to -1 which I placed in parenthesis to contain the -1, and I decremented i.

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (star of stars) {
  console.log(star);
}// here i made each iteration of the array named star. Then I had each iteration console logged.

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
while(i < stars.length) {
  console.log(stars[i]);
  i++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let count = 0;
while(count < 6){
  console.log(count)
  count++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
count = 10;
while(count > 4) {
  console.log(count);
  count--;
}
