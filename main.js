/*  The ideal gas law, also called the general gas equation, is the equation of state of a hypothetical ideal gas.
  It is a good approximation of the behavior of many gases under many conditions, although it has several limitations.
  It was first stated by Benoît Paul Émile Clapeyron in 1834 as a combination of the empirical Boyle's law, Charles's law, Avogadro's law, and Gay-Lussac's law.*/


//a function for calculate T2
function calculateT2(P1, V1, n1, T1, P2, V2, n2) {
    if (P1 === null || V1 === null || n1 === null || T1 === null || P2 === null || V2 === null || n2 === null) {
        throw new Error("All values must be provided and non-null.");
    }

    const T2 = (P2 * V2 * T1 * n1) / (P1 * V1 * n2);
    return T2;
}

//a function for calculate T1
function calculateT1(P1, V1, n1, P2, V2, n2, T2) {
    if (P1 === null || V1 === null || n1 === null || P2 === null || V2 === null || n2 === null || T2 === null) {
        throw new Error("All values must be provided and non-null.");
    }

    const T1 = (P1 * V1 * T2 * n2) / (P2 * V2 * n1);
    return T1;
}

//a function for calculate P1
function calculateP1(V1, n1, T1, P2, V2, n2, T2) {
    if (V1 === null || n1 === null || T1 === null || P2 === null || V2 === null || n2 === null || T2 === null) {
        throw new Error("All values must be provided and non-null.");
    }

    const P1 = (P2 * V2 * T1 * n1) / (V1 * T2 * n2);
    return P1;
}

//a function for calculate P2
function calculateP2(P1, V1, n1, T1, V2, n2, T2) {
    if (P1 === null || V1 === null || n1 === null || T1 === null || V2 === null || n2 === null || T2 === null) {
        throw new Error("All values must be provided and non-null.");
    }

    const P2 = (P1 * V1 * T2 * n2) / (V2 * T1 * n1);
    return P2;
}

//a function for calculate V1
function calculateV1(P1, n1, T1, P2, V2, n2, T2) {
    if (P1 === null || n1 === null || T1 === null || P2 === null || V2 === null || n2 === null || T2 === null) {
        throw new Error("All values must be provided and non-null.");
    }

    const V1 = (P2 * V2 * T1 * n1) / (P1 * T2 * n2);
    return V1;
}

//a function for calculate V2
function calculateV2(P1, V1, n1, T1, P2, n2, T2) {
    if (P1 === null || V1 === null || n1 === null || T1 === null || P2 === null || n2 === null || T2 === null) {
        throw new Error("All values must be provided and non-null.");
    }

    const V2 = (P1 * V1 * T2 * n1) / (P2 * T1 * n2);
    return V2;
}