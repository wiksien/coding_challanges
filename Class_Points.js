//16.05.2022

function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((a, b) => a + b) / classPoints.length < yourPoints;
}
