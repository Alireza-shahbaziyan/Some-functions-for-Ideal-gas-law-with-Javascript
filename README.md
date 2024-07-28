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

\[ \frac{P_1 V_1}{T_1} = \frac{P_2 V_2}{T_2} \cdot \frac{n_2}{n_1} \]

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

