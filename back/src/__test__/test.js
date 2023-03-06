const { multiply } = require("../calcul");

describe('Tests bidon', () => {
    it('Multiply 6 by 7, must return 42', async() => {
        const calcul = multiply(6, 7);
        expect(calcul).toBe(42);
    })
})