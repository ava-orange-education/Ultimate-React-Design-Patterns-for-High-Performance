class Car {
    private model: string; 

    constructor(model: string) {
        this.model = model;
    }

    public getModel(): string {
        return this.model;
    }
}

const myCar = new Car("Tata Tiago");
console.log(myCar.getModel());
