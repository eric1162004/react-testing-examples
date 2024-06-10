import { it, expect, describe } from "vitest";
import { faker } from "@faker-js/faker";
import { db } from "./mocks/db";

describe("group", () => {
  it("should", async () => {
    const product = db.product.create();
    console.log(product);
  });
  it("should", async () => {
    const response = await fetch("/products");
    const product = await response.json();
    console.log(product);
  });
});
