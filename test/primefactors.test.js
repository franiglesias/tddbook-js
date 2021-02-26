import primefactors from "../src/primefactors";

describe('Calculate prime factors', function () {
    it('1 should not have factors', () => {
        expect(primefactors(1)).toEqual([]);
    });

    it ('prime numbers cannot be decomposed', () => {
        expect(primefactors(2)).toEqual([2])
        expect(primefactors(3)).toEqual([3])
        expect(primefactors(5)).toEqual([5])
    })

    it ('4 is 2 * 2', () => {
        expect(primefactors(4)).toEqual([2, 2])
    })

    it ('6 is 2 * 3', () => {
        expect(primefactors(6)).toEqual([2, 3])
    })

    it ('9 is 3 * 3', () => {
        expect(primefactors(9)).toEqual([3, 3])
    })

    it ('8 is 2 * 2 * 2', () => {
        expect(primefactors(8)).toEqual([2, 2, 2])
    })
});
