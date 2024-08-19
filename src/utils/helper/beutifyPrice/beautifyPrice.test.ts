import { describe, test, expect } from 'vitest';

import { beautifyPrice } from './beutifyPrice';

describe('beautifyPrice ', () => {
  test('should display 96 000 ', () => {
    const result = beautifyPrice(96000);

    expect(result).toBe('96 000');
  });
  test('should display 964 000 ', () => {
    const result = beautifyPrice(964000);

    expect(result).toBe('964 000');
  });
});
