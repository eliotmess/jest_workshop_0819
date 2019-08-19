// 3.1
export const fn1 = (axios) => {
    axios();
}

// 3.2
export const fn2 = (axios) => {
    axios({
        url: 'https://google.pl',
        method: 'POST',
    })
}

// 3.3
export const fn3 = (axios) => {
    axios({
        body: { data: { importantKey: 42, notImportantKey: 44 } }
    })
}


// 3.4
export const fn4 = (axios) => {
    return axios();
}


//3.5
export class Class4 {
    private attr: number;
    private intervalId;

    constructor(private service1) { }

    public method() {
        this.intervalId = setInterval(() => {
            if (this.service1.get() > 42) {
                this.end()
            } else {
                this.attr++;
            }
        }, 100);
    }

    public getAttr() {
        return this.attr;
    }

    private end() {
        clearInterval(this.intervalId);
    }
}

// 3.5 MODIFIED
export class Class4Mod {
    private attr: number = 0;
    private intervalId;

    constructor(private service1) { }

    public method() {
        this.intervalId = setInterval(() => {
            if (this.service1.get() > 42) {
                this.end()
            } else {
                this.attr++;
            }
        }, 100);
    }

    public getAttr() {
        return this.attr;
    }

    private end() {
        clearInterval(this.intervalId);
    }
}
