import { it, expect, describe } from "vitest";
import { faker } from "@faker-js/faker";
import { db } from "./mocks/db";

describe("group", () => {
  it("should", async () => {
    const product = db.product.create()
    console.log(product);
  });
});
