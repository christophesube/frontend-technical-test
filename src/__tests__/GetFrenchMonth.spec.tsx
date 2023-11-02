import { getFrenchMonth } from "../utils/getFrenchMonth";

describe("getFrenchMonth function", () => {
  it("returns the correct French month for a given timestamp", () => {
    const timestamp = 1698951125000;
    const frenchMonth = getFrenchMonth(timestamp);

    expect(frenchMonth).toBe("novembre");
  });

  it("returns the correct French month for a different timestamp", () => {
    const timestamp = 1688331738000;
    const frenchMonth = getFrenchMonth(timestamp);

    expect(frenchMonth).toBe("juillet");
  });
});
