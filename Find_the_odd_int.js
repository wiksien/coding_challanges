//25.03.2022

function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    if (A.filter((comparingNumber) => comparingNumber === A[i]).length % 2 !== 0) {
      return A[i];
    }
  }
}
