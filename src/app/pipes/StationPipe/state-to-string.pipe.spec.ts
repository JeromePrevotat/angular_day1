import { StateToStringPipe } from './state-to-string.pipe';

describe('StateToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new StateToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
