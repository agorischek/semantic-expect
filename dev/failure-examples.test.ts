describe("toHeed", () => {
  it("Should detect business jargon", async () => {
    const description =
      "Let's circle back and cross-synergize the leveraged assets!";
    await expect(description).toHeed("Be business jargon-free");
  });

  it("Should detect a color", async () => {
    const description = "The ball is large, round, and blue.";
    await expect(description).toHeed("Do not include any colors");
  });

  it("Should detect a planet", async () => {
    const description = "Let's fly to Mars!";
    await expect(description).not.toHeed("Mention a planet");
  });
});
