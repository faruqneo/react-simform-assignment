import { random } from "./helper";

test('should return 4 digit unique number', () => {
    const unique = random;
    expect(unique).not.toBeNull();
    expect(unique).not.toBeNaN();
  });