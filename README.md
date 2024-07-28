# Ideal Gas Law Calculations

This project provides functions to calculate unknown variables in the ideal gas law equation using functional programming in JavaScript.

## Description

The ideal gas law is represented by the equation:

\[ PV = nRT \]

where:
- \( P \) is the pressure of the gas.
- \( V \) is the volume of the gas.
- \( n \) is the number of moles of the gas.
- \( R \) is the ideal gas constant.
- \( T \) is the temperature of the gas in Kelvin.

This project includes functions to calculate the unknown variable given two sets of conditions. The calculations are performed using the combined gas law:

\[ PV = nRT \]

## Some examples of using functions:

### calculateV2

Calculates the final volume (\( V_2 \)).

```javascript
function calculateV2(P1, V1, n1, T1, P2, n2, T2)
```

### calculateP2

Calculates the final pressure (P2).
```javascript
function calculateP2(P1, V1, n1, T1, V2, n2, T2)
```

### calculateT2

Calculates the final temperature (T2).
```javascript
function calculateT2(P1, V1, n1, T1, P2, V2, n2)
```

## Using:
```javascript
// Example usage:
const P1 = 1; // Initial pressure
const V1 = 1; // Initial volume
const n1 = 1; // Initial number of moles
const T1 = 300; // Initial temperature in Kelvin
const P2 = 2; // Final pressure
const V2 = 1; // Final volume
const n2 = 1; // Final number of moles
const T2 = 600; // Final temperature in Kelvin

console.log("Calculated V2:", calculateV2(P1, V1, n1, T1, P2, n2, T2)); // Calculate and print V2
console.log("Calculated P2:", calculateP2(P1, V1, n1, T1, V2, n2, T2)); // Calculate and print P2
console.log("Calculated T2:", calculateT2(P1, V1, n1, T1, P2, V2, n2)); // Calculate and print T2
console.log("Calculated T1:", calculateT1(P1, V1, n1, P2, V2, n2, T2)); // Calculate and print T1
```
## Installation
To use these functions, simply include them in your JavaScript project. No additional installation is required.

##Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.


