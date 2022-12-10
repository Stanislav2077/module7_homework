class Gadjet {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }


    getPowerConsumption (power, t, on) {
        let turnOn = on;
        if(on === 1){
            turnOn = 'Вкл';
        }else{
            turnOn = 'Выкл';
        };


        console.log(`Расход эл. энергии ${this.name} ${this.brand} - за ${t} час. = ${power * t}Вт. ${this.name}: ${turnOn}`);
    }
}

class Lamp extends Gadjet {
    constructor(name, brand, batteryCapacity, powerConsumption) {
        super(name);
        this.brand = brand;
        this.batteryCapacity = batteryCapacity;
        this.powerConsumption = powerConsumption;
    }
}

class laptop extends Gadjet {
    constructor(name, brand, batteryCapacity, powerConsumption) {
        super(name);
        this.brand = brand;
        this.batteryCapacity = batteryCapacity;
        this.powerConsumption = powerConsumption;
    }
}



const lighting = new Lamp ("Лампа", "Nokia", "Нет", 90);
const appliances = new laptop ("Ноутбук", "Asus", 5200, 75);

console.log(lighting, appliances)

lighting.getPowerConsumption(90, 2);
appliances.getPowerConsumption(75, 6, 1);
