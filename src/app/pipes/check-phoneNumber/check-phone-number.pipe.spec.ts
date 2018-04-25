import { CheckPhoneNumberPipe } from './check-phone-number.pipe';

describe('CheckPhoneNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new CheckPhoneNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
