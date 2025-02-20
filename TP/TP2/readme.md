# TP - JavaScript Functions
This repository contains a collection of JavaScript functions that perform various tasks, such as temperature conversion, time calculation, number manipulation, and more. Below is a detailed explanation of each function.

## 1. **Temperature Conversion (`degreC`)**
### Description:
This function converts a temperature from Fahrenheit to Celsius.
### Code:
```javascript
function degreC(tempF) {
    return (5 / 9) * (tempF - 32);
}
```
Usage:
-Input: A temperature in Fahrenheit (tempF).

-Output: The equivalent temperature in Celsius.

Example:
```javascript
var tempF = parseInt(prompt("Enter a temperature in Fahrenheit:"));
console.log(`This temperature is equivalent to ${degreC(tempF).toFixed(1)} degrees Celsius.`);
```

## 2. **Time Conversion (`hjms`)**
### Description:
This function converts a duration in seconds into a more readable format, displaying the equivalent time in days, hours, minutes, and seconds.
### Code:
```javascript
function hjms(secondes) {
    let j, h, m, s;

    j = parseInt(secondes / (3600 * 24));
    var reste = secondes % (3600 * 24);

    h = parseInt(reste / 3600);
    reste = reste % 3600;

    m = parseInt(reste / 60);
    s = reste % 60;

    console.log(`Cette durée équivaut à ${j} jours, ${h} heures, ${m} minutes et ${s} secondes.`);
}

Usage:
-Input: A duration in seconds (secondes).

-Output: The equivalent time in days, hours, minutes, and seconds, displayed in the console.

Example:
```javascript
var secondes = parseInt(prompt("Entrez une durée en secondes :"));
hjms(secondes);
```

## 3. **Time Conversion with Conditional Formatting (`hjms1`)**
### Description:
This function converts a duration in seconds into a more readable format, displaying the equivalent time in days, hours, minutes, and seconds. It dynamically constructs the output string, only including non-zero values.
### Code:
```javascript
function hjms1(secondes) {
    let j, h, m, s;

    j = parseInt(secondes / (3600 * 24));
    var reste = secondes % (3600 * 24);

    h = parseInt(reste / 3600);
    reste = reste % 3600;

    m = parseInt(reste / 60);
    s = reste % 60;

    let resultat = 'Cette durée équivaut à ';

    if (j > 0) resultat += `${j} jours `;
    if (h > 0) resultat += `${h} heures `;
    if (m > 0) resultat += `${m} minutes `;
    if (s > 0) resultat += `${s} secondes`;

    console.log(resultat);
}
```
Usage:
-Input: A duration in seconds (secondes).

-Output: The equivalent time in days, hours, minutes, and seconds, displayed in the console. Only non-zero values are included in the output.

Example:
```javascript
var secondes = parseInt(prompt("Entrez une durée en secondes :"));
hjms1(secondes);
```

## 4. **Sort Three Numbers (`troisNombres`)**
### Description:
This function takes three numbers as input and returns them sorted in ascending order.
### Code:
```javascript
function troisNombres(a, b, c) {
    return [a, b, c].sort();
}
```
Usage:
-Input: Three numbers (a, b, c).

-Output: An array containing the three numbers sorted in ascending order.

Example:
```javascript
var a = parseInt(prompt("Entrez le premier nombre :"));
var b = parseInt(prompt("Entrez le deuxième nombre :"));
var c = parseInt(prompt("Entrez le troisième nombre :"));
console.log(`Les nombres triés sont : ${troisNombres(a, b, c).join(', ')}`);
```
## 5. **Print a Right-Angled Triangle (`triangle1`)**
### Description:
This function prints a right-angled triangle pattern using asterisks (`*`). The number of rows in the triangle is determined by the input `n`.
### Code:
```javascript
function triangle1(n) {
    i = 1;
    while (i < n) {
        let row = "*".repeat(i);
        console.log(row);
        i++;
    }
}
```
Usage:
-Input: An integer n representing the number of rows in the triangle.

-Output: A right-angled triangle pattern printed to the console, with each row containing an increasing number of asterisks.

Example:
```javascript
var n = parseInt(prompt("Entrez le nombre de lignes pour le triangle :"));
triangle1(n);
```
## 6. **Print a Right-Angled Triangle Using a For Loop (`triangle2`)**
### Description:
This function prints a right-angled triangle pattern using asterisks (`*`). The number of rows in the triangle is determined by the input `n`. It uses a `for` loop to achieve this.
### Code:
```javascript
function triangle2(n) {
    for (let i = 1; i < n; i++) {
        console.log("*".repeat(i));
    }
}
```
Usage:
-Input: An integer n representing the number of rows in the triangle.

-Output: A right-angled triangle pattern printed to the console, with each row containing an increasing number of asterisks.

Example:
```javascript
var n = parseInt(prompt("Entrez le nombre de lignes pour le triangle :"));
triangle2(n);
```
## 7. **Print a Pyramid Pattern (`pyramide`)**
### Description:
This function prints a pyramid pattern using asterisks (`*`). The number of rows in the pyramid is determined by the input `n`. Each row of the pyramid is centered by adding spaces before the asterisks.
### Code:
```javascript
function pyramide(n) {
    for (let i = 1; i <= n; i++) {
        let espaces = " ".repeat(n - i); // Add spaces to center the stars
        let etoiles = "*".repeat(2 * i - 1); // Create the stars for the current row
        console.log(espaces + etoiles); // Print the row
    }
}
```
Usage:
-Input: An integer n representing the number of rows in the pyramid.

-Output: A pyramid pattern printed to the console, with each row centered and containing an increasing number of asterisks.

Example:
```javascript
var n = parseInt(prompt("Entrez le nombre de lignes pour la pyramide :"));
pyramide(n);
```
## 8. **Check if a Number is Prime (`Premier`)**
### Description:
This function checks if a given number is a prime number. A prime number is a number greater than 1 that has no divisors other than 1 and itself. If the number is not prime, the function also identifies one of its divisors.
### Code:
```javascript
function Premier(val) {
    for (let i = 2; i < val; i++) {
        if (val % i == 0) {
            console.log(`${val} n'est pas un nombre premier, il est divisible par ${i}`);
            return;
        }
    }
    console.log(`${val} est un nombre premier`);
}
```
Usage:
-Input: An integer val greater than 1.

-Output: A message indicating whether the number is prime or not. If the number is not prime, it also prints one of its divisors.

Example:
```javascript
var val = parseInt(prompt("Entrez un nombre pour vérifier s'il est premier :"));
Premier(val);
```
## 9. **Calculate the nth Fibonacci Number (`Fibo1`)**
### Description:
This function calculates the nth Fibonacci number using a recursive approach. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.
### Code:
```javascript
function Fibo1(n) {
    if (n == 0) return 0; // Base case: Fibonacci(0) = 0
    else if (n == 1) return 1; // Base case: Fibonacci(1) = 1
    else {
        return Fibo1(n - 1) + Fibo1(n - 2); // Recursive case
    }
}
```
Usage:
-Input: An integer n representing the position in the Fibonacci sequence.

-Output: The nth Fibonacci number.

Example:
```javascript
var n = parseInt(prompt("Entrez la position dans la suite de Fibonacci :"));
console.log(`Le nombre de Fibonacci à la position ${n} est : ${Fibo1(n)}`);
```
## 10. **Find the Position of a Fibonacci Number (`Fibo2`)**
### Description:
This function determines the position of a given number in the Fibonacci sequence. It uses an iterative approach to generate Fibonacci numbers until it finds a number greater than or equal to the input value.
### Code:
```javascript
function Fibo2(val) {
    let u0 = 0; // First Fibonacci number
    let u1 = 1; // Second Fibonacci number
    let p = u0; // Previous Fibonacci number
    let c = u1; // Current Fibonacci number
    let ind = 1; // Index (position) in the Fibonacci sequence

    while (c < val) {
        let nouv = p + c; // Calculate the next Fibonacci number
        p = c; // Update the previous number
        c = nouv; // Update the current number
        ind++; // Increment the index
    }
    return ind; // Return the position
}
Usage:
-Input: An integer val representing a number to check in the Fibonacci sequence.

-Output: The position of the smallest Fibonacci number greater than or equal to val.

Example:
```javascript
var val = parseInt(prompt("Entrez un nombre pour trouver sa position dans la suite de Fibonacci :"));
console.log(`La position du nombre ${val} dans la suite de Fibonacci est : ${Fibo2(val)}`);
```
## 11. **Calculate the Square Root Using the Babylonian Method (`Raca1`)**
### Description:
This function calculates the square root of a given number `A` using the Babylonian method (also known as Heron's method). It iteratively improves the approximation of the square root until the desired precision is achieved.
### Code:
```javascript
function Raca1(A) {
    let p = A / 2; // Initial guess for the square root
    while (Math.abs(p ** 2 - A) > 10 ** -5) { // Check for precision
        p = (1 / 2) * (p + (A / p)); // Update the approximation
    }
    return p; // Return the calculated square root
}
```
Usage:
-Input: A positive number A for which the square root is to be calculated.

-Output: The approximate square root of A with a precision of 10^-5.

Example:
```javascript
var A = parseFloat(prompt("Entrez un nombre pour calculer sa racine carrée :"));
console.log(`La racine carrée de ${A} est approximativement : ${Raca1(A).toFixed(5)}`);
```

























