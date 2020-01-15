import { isEven, IHaveAMessage } from './utils';

describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('checking the membership of an array', () => {
        const allEvens = numbers.every(isEven);
        expect(allEvens).toBe(false);

        const someEven = numbers.some(isEven);
        expect(someEven).toBe(true);
    });
    it('visiting every member of an array', () => {
        // this is a less than optional example
        let total = 0;
        numbers.forEach(n => total += n);
        expect(total).toBe(45);
    });
    describe('array methods that create new arrays', () => {
        it('', () => {
            function doubleIt(n: number) {
                return n + n;
            }
            const doubled = numbers.map(doubleIt);

            expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
            expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

        });
        it('has a filter', () => {

            // in LINQ it is where
            const evens = numbers.filter(isEven);
            expect(evens).toEqual([2, 4, 6, 8]);
        });
        it('using reduce', () => {
            let total = numbers.reduce((s, n) => s + n);
            expect(total).toBe(45);

            total = numbers.reduce((s, n) => s + n, 100);
            expect(total).toBe(145);
        });
    });
    describe('an example', () => {
        it('the example', () => {
            interface CartItem {
                description: string;
                qty: number;
                price: number;
            }

            const cart: CartItem[] = [
                { description: `Eggs`, qty: 3, price: 2.37 },
                { description: `Bread`, qty: 2, price: 3.50 },
                { description: `Beer`, qty: 6, price: 7.50 },
            ];

            // I want to know the total qty and total price

            interface ShippingInfo {
                totalQty: number;
                totalPrice: number;
            }

            const starter: ShippingInfo = {
                totalQty: 0,
                totalPrice: 0
            };

            const result = cart.reduce((s: ShippingInfo, n: CartItem) => {
                return {
                    totalQty: s.totalQty += n.qty,
                    totalPrice: s.totalPrice += n.price
                };
            }, starter);

            expect(result.totalPrice).toBeCloseTo(13.37, 2);
            expect(result.totalQty).toBe(11);
        });
    });
});

describe('two loops you might use but probably wont', () => {
    it('for in loop', () => {
        // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        // let total = 0;
        // for (const num in numbers) {
        //     total += num;
        // }
        // expect(total).toBe(45);
        // enumarate the prpperties of an obect
        const book = {
            title: 'Hyperobjects',
            author: 'Morton'
        };

        for (const prop in book) {
            console.log(`Book's ${prop} is ${book[prop]}`);
        }
    });
    it('for of loop', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let total = 0;
        for (const n of numbers) {
            total += n;
        }
        expect(total).toBe(45);
    });

});

describe('strucrural typing', () => {
    function logIt(thingy: IHaveAMessage): void {
        console.log(thingy.message + ' from: ' + thingy.from);
    }

    const call = {
        from: 'Mom',
        message: 'Call me.',
        time: '4:00 PM'
    };

    logIt(call);

    // logIt({ from: 'Joe', message: 'Tacos are ready', time: 'Noon'})


});
