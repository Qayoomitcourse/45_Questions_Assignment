
function creat_car (manufacturer:string, model:string, ...options:string[] ) {
  let car = {
    manufacturer: manufacturer,
    model: model,
  }
  options.forEach(option => {
    let [key, value] = option.split(":");
    car [key.trim()] = value.trim();
  });
  return car
}