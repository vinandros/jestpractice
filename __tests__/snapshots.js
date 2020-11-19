const client = {
  name: "Kevin Andrés A",
  balance: 5000,
  type: "Premium",
};

describe("testing client", () => {
  test("should Kevin", () => {
    expect(client).toMatchSnapshot();
  });
});
