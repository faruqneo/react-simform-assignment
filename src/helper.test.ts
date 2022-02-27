import { random } from "./helper";

test('should return 4 digit unique number', () => {
    const unique = random(0, 4);
    expect(unique).not.toBeNull();
    expect(unique).not.toBeNaN();
  });