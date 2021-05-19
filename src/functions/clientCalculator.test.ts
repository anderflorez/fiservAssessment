import { clientCalc } from './clientCalculator';

test('Client calculator invalid input version test', () => {
    expect(() => {
        clientCalc('JOHN0000MICHAEL0009994567', 0)
    }).toThrow('Error: Incorrect response version requested')
});