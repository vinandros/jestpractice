const client = {
  nombre: "Kevin",
  balance: 5000,
};

describe("probando objectos", () => {
  test("should be premium", () => {
    expect(client.balance).toBeGreaterThan(4000);
  });

  test("should be kevin", () => {
    expect(client.nombre).toBe("Kevin");
  });

  test("should not be kevin", () => {
    expect(client.nombre).not.toBe("Andres");
  });

  test("should balance not be 5000", () => {
    expect(client.balance).not.toBe(3000);
  });
});
