import { add } from "./calculator";

test("should add two numbers", () => {
  expect(add(1, 2)).toBe(3);
});
