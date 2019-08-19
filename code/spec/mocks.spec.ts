import { fn1, fn2, fn3, fn4, Class4, Class4Mod } from '../mocks';
import { Class1, someStorage } from '../spieces';

describe('tests for mocks.ts and species.ts', () => {
    //3.1
    it('should be called', () => {
        const axiosMock = jest.fn();
        fn1(axiosMock);
        expect(axiosMock).toBeCalled();
    });
    //3.2
    it('should be called with url and method', () => {
        const axiosMock = jest.fn();
        fn2(axiosMock);
        expect(axiosMock).toBeCalledWith({
            url: 'https://google.pl',
            method: 'POST'
        });
    });
    //3.3
    it('should be called with specified body', () => {
        const axiosMock = jest.fn();
        fn3(axiosMock);
        expect(axiosMock).toBeCalledWith({
            body: {
                data: {
                    importantKey: 42,
                    notImportantKey: 44
                }
            }
        });
    });
    //3.4
    it('should return call', () => {
        const axiosMock = jest.fn().mockReturnValue('');
        const callMock = fn4(axiosMock);
        expect(axiosMock).toBeCalled();
        expect(callMock).toEqual('');
    });

    //3.5
    it('should stop incrementing Class4.attr if it\'s > 42', () => {
        class ServiceMock {
            v = 0;
            set(v) { this.v = v; };
            get() { return this.v; };
        };
        const service1Mock = new ServiceMock;
        const class4 = new Class4(service1Mock);
        service1Mock.set(42);
        let lastAttrVal = service1Mock.get();
        function incrementAttr() {
            service1Mock.set(++lastAttrVal);
            return 'increment';
        };
        const methodSpy = jest.spyOn(class4, 'method');
        methodSpy.mockImplementation(() => lastAttrVal > 42 ? 'end' : incrementAttr());
        class4.method();
        expect(methodSpy.mock.results[0].value).toBe('increment');
        lastAttrVal = service1Mock.get();
        class4.method();
        expect(methodSpy.mock.results[1].value).toBe('end');
    });

    //3.5 MODIFIED
    it('should stop incrementing Class4Mod.attr if it\'s > 42', () => {
        class ServiceMock {
            v = 0;
            set(v) { this.v = v; };
            get() { return this.v; };
        };
        jest.useFakeTimers();
        const service1Mock = new ServiceMock;
        const class4 = new Class4Mod(service1Mock);
        service1Mock.set(40);
        let lastAttrVal = class4.getAttr();
        class4.method();
        jest.advanceTimersByTime(100);
        expect(class4.getAttr()).toBeGreaterThan(lastAttrVal);
        lastAttrVal = class4.getAttr();
        service1Mock.set(43);
        jest.advanceTimersByTime(100);
        expect(class4.getAttr()).not.toBeGreaterThan(lastAttrVal);
        jest.clearAllTimers();
    });

    // FOR SPIECES
    //4.1
    it('should set item in someStorage after calling method in Class1', () => {
        const spy = jest.spyOn(someStorage, 'setItem');
        const class1 = new Class1();
        class1.method();
        expect(spy).toBeCalledWith('key', '42');
    })
});