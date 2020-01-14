describe('declaring variables', () => {
    it('an exsample', () => {
        const name = 'Bob';
        expect(name).toBe('Bob');
    });
    it('what happened above?', () => {
        const name = 'Carl';
    });
    it('declaring a variable with let', () => {
        let age: number | string;
        age = 50;
        age = 51;
        age = 'Old';

        let x: any;
        x = 'dog';
        x = 34;
        x = [];

        function add(a: any, b: any) {
            return a + b;
        }
    });
    it('initializing a variable defines (infers) the type', () => {
        let name = 'Bob';
        name = 'Steve';
        name = 'Kara';
        // name = 1138; // Error! It is inferred to be a string beacuse we created it that way.
    });
    describe('a bit about strings', () => {
        it('can be delintied with single or double', () => {
            const name = 'Bob';
            // tslint:disable-next-line: quotemark
            expect(name).toBe("Bob");

            const story = 'She said "Hello! How is your day going?" on the way out the door.';

            // tslint:disable-next-line: quotemark
            const author = "Flannery O'Connor";
            const auther2 = 'Flannery O\'Connor';
        });
        it('string literals - interpreted strings', () => {
            const name = `Bob`;
            expect(name).toBe('Bob');

            const story = `Chapter 1

           It was a dark and story night.

           the End`;

            const age = 27;

            const message = 'The name is ' + name + ' and the age is ' + age + '.';
            const message2 = `The name is ${name} and the age is ${age}.`;
            expect(message).toBe(message2);

            const newElement = `<div>
            <h2>${name} is ${age}</h2>
            </div>`;

            // this is the C# way
            // string thing = $"The name is {name} and the age is {age}.";

        });
    });
    it('const - be careful', () => {
        const x = 12;
        // x = 14;
        // const favoriteNumbers (string | number)[] = [2, 4, 9, 20];
        const favoriteNumbers = [2, 4, 9, 20];

        favoriteNumbers[2] = 10;
        console.log(favoriteNumbers);

        interface Movie {
            title: string;
            yearReleased?: number;
        }
        const movie: Movie = {
            title: 'The Rise of Skywaler',
            yearReleased: 2020
        };

        const otherMovie: Movie = {
            title: 'Jaws',
            yearReleased: 1977
        };
        movie.yearReleased = 2019;

    });
});
