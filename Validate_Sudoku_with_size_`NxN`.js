//08.06.2022

var Sudoku = function (data) {
  //   Private methods
  // -------------------------

  //   Public methods
  // -------------------------
  return {
    isValid: function () {
      //Checks if sudoku contains a valid amount of rows
      if (Math.sqrt(data[0].length) % 1 !== 0) {
        return false;
      }

      let validSum = (data.length * (data.length + 1)) / 2;

      //This code determines all sums of columns in given Sudoku
      let columsSum = [];

      for (let i = 0; i < data.length; i++) {
        columsSum.push(data.map((row) => row[i]).reduce((a, b) => a + b));
      }

      //This code determines all sums of rows in given Sudoku
      let rowsSum = data.map((x) => x.reduce((a, b) => a + b));

      //This code determines all sums of individual squares in given Sudoku
      let squareSum = [];

      for (
        let sliceFactor = 0;
        sliceFactor < Math.sqrt(data.length);
        sliceFactor++
      ) {
        let currentSquareRowOfNumbers = [];

        for (
          let squareRowFactor = 0;
          squareRowFactor < Math.sqrt(data.length);
          squareRowFactor++
        ) {
          let currentSquareOfNumbers = [];

          for (
            let rowNumber = 0;
            rowNumber < Math.sqrt(data.length);
            rowNumber++
          ) {
            currentSquareOfNumbers.push(
              data[rowNumber + squareRowFactor * Math.sqrt(data.length)].slice(
                sliceFactor * Math.sqrt(data.length),
                sliceFactor * Math.sqrt(data.length) + Math.sqrt(data.length)
              )
            );
          }

          squareSum.push(
            currentSquareOfNumbers
              .reduce((a, b) => a.concat(b))
              .reduce((a, b) => a + b)
          );
        }
      }

      //This code gives us true or false values based on if every number in array is the same as validSum
      columsSum = columsSum.filter((value) => value !== validSum).length === 0;
      rowsSum = rowsSum.filter((value) => value !== validSum).length === 0;
      squareSum = squareSum.filter((value) => value !== validSum).length === 0;

      return columsSum && rowsSum && squareSum;
    },
  };
};

//I am glad I did this kata. It was hard (4kyu), and the code is a totall spaghetti mess. At least it works.
