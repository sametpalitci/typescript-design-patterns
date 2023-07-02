// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const car = {
  model: "Model A",
  yearOfProduction: 2022,
};

const carProxy = new Proxy(car, {
  get(target, property) {
    return target[property];
  },
  set(target, property, value: string | number) {
    if (property === "yearOfProduction" && value >= new Date().getFullYear()) {
      console.log(`There is no production in 2023`);
      return false;
    } 
    target[property] = value;
    console.log("Value is set");
    return true;
  },
});

carProxy.yearOfProduction = 2021;
console.log(carProxy.model);
