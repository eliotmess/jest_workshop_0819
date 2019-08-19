import { Class1, Class2, Class3, Class4 } from '../classes';

describe('tests for classes.ts', () => {
    //2.1
    it('should set value of Class1.attr', () => {
        const class1 = new Class1();
        class1.setAttr(45);
        expect(class1.attr).toBe(45);
    });
    //2.2
    it('should increment value of Class2.attr', () => {
        const class2 = new Class2();
        let prevAtrrValue = class2.attr;
        class2.increment();
        expect(class2.attr).toBe(++prevAtrrValue);
    });
    //2.3
    it('should return true if Class3.someService.value >= 42', () => {
        const class3 = new Class3({value: 42});
        expect(class3.isCorrent()).toBe(true);
    });

    it('should false true if Class3.someService.value < 42', () => {
        const class3 = new Class3({value: 41});
        expect(class3.isCorrent()).toBe(false);
    });
    //2.4
    it('should check if Class4.method returns promise resolves with 44', () => {
        const class4 = new Class4();
        expect(class4.method()).resolves.toBe(44);
    });
    
})