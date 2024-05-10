export const MPaToKgCm2 = (Mpa: number): number => {
  // 1 kgf/cm² = 98,066.5 Pascals (Pa)
  // 1 MPa = 1,000,000 Pascals (Pa)
  // kgf/cm² value x 98,066.5 Pa = MPa value x 1,000,000 Pa
  // kgf/cm² value = MPa value x 10.1972
  return Mpa * 10.1972;
};

export const roundNumber = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100;
