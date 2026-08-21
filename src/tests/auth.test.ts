import { describe, expect, test } from "vitest";

const person = {
  isActive: true,
  age: 32,
};

describe("person", () => {
  tes("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });
});
