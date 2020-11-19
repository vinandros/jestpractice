import { sum } from "../js/funciones.js";

describe("suma y rest", () => {
  test("sum 20 and 30", () => {
    expect(sum(20, 30)).toBe(50);
  });
});
