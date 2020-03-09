import primefactors from "../src/primefactors";

describe('Calculate prime factors', function () {
    it('0 should fail', () => {
        expect(() => { primefactors(0); }).toThrow();
    });

    it('1 should not have factors', function () {
        expect(primefactors(1)).toEqual([]);
    });

    it ('2 is prime number', function () {
        expect(primefactors(2)).toEqual([2]);
    });

    it ('3 is prime number', function () {
        expect(primefactors(3)).toEqual([3]);
    });

    it('4 should have 2 * 2', function () {
        expect(primefactors(4)).toEqual([2, 2]); 
    });

    it('8 is 2 * 2 * 2',  () => {
        expect(primefactors(8)).toEqual([2, 2, 2]);
    });

    it('9 is 3 * 3 * 3',  () => {
        expect(primefactors(8)).toEqual([2, 2, 2]);
    });

    it('12 is 2 * 2 * 3',  () => {
        expect(primefactors(8)).toEqual([2, 2, 2]);
    });
});

