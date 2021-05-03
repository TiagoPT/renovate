import { RenovateConfig, getConfig, getName } from '../../../../test/util';
import { initializeCaches } from './cache';

describe(getName(), () => {
  describe('initializeCaches()', () => {
    let config: RenovateConfig;
    beforeEach(() => {
      config = { ...getConfig() };
    });
    it('initializes', async () => {
      expect(await initializeCaches(config)).toBeUndefined();
    });
  });
});
