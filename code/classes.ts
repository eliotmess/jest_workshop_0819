// 2.1
export class Class1 {
    public attr = 42;

    public setAttr(value: number) {
        this.attr = value;
    }
}

// 2.2
export class Class2 {
    public attr = 42;

    public increment() {
        return ++this.attr;
    }
}

// 2.3
export class Class3 {
    constructor(private someService) { }

    public isCorrent(): boolean {
        return this.someService.value >= 42;
    }
}

// 2.4
export class Class4 {

    public method() {
        return new Promise((resolve) => {
            resolve(this.importantCalculation());
        })
    }

    private importantCalculation() {
        return 44;
    }
}
