import assert from 'assert';
import Example from '../src/exampletest';

describe('working mocha', function() {
    it('succeeds', () => {
        let myExample = new Example();
        const testResult = myExample.test();
        assert.equal(testResult, 1);
    })
});