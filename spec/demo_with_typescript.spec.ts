import { add } from './utils';
import { subtract } from '../src/math';

describe('writing specs in typescript', () => {
    it('is easy', () => {
        expect(true).toBe(true);
    });
    it('can add', () => {
        expect(add(2, 2)).toBe(4);
    });
    it('can subtract', () => {
        expect(subtract(4, 2)).toBe(2);
    });
});
