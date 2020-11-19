const password = "123456";

describe("validar password", () => {
  test("should have 6 caracters", () => {
    expect(password).toHaveLength(6);
  });

  test("should not be empty", () => {
    expect(password).not.toHaveLength(0);
  });
});
