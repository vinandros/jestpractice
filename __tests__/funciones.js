function sum(a, b) {
  return a + b;
}

function rest(a, b) {
  return a - b;
}

describe("suma y rest", () => {
  test("sum 20 and 30", () => {
    expect(sum(20, 30)).toBe(50);
  });
  test("rest 20 and 30", () => {
    expect(rest(20, 30)).toBe(-10);
  });
  test("sum 10 +10 no sea 10", () => {
    expect(sum(10, 10)).not.toBe(19);
  });
  test("sum 10 - 10 no sea 9", () => {
    expect(rest(10, 10)).not.toBe(9);
  });
});
