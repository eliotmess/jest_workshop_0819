// 4.1
export const someStorage = {
    setItem: (key: string, value: string) => {
        return `${key}--${value}`;
    }
}

export class Class1 {
    public method() {
        someStorage.setItem('key', '42');
    }
}

// 4.2
