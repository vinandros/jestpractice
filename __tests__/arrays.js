const carrito = ["carrito 1", "carrito 2", "carrito 3"];

describe("probando arrays", () => {
  test("should have 3 elem", () => {
    expect(carrito).toHaveLength(3);
  });

  test("should not be empty", () => {
    expect(carrito).not.toHaveLength(0);
  });
});
