//15.08.2022

function abbrevName(name){
  let nameArray = name.split(" ");
  
  return nameArray[0][0].toUpperCase() + "." + nameArray[1][0].toUpperCase();
}