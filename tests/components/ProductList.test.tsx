import { render, screen } from "@testing-library/react";
import ProductList from "../../src/components/ProductList";
import { server } from "../mocks/server";
import { http, HttpResponse } from "msw";
import { db } from "../mocks/db";

describe("ProductList", () => {
  const productIds: number[] = [];

  // Create 3 products for all our test cases
  beforeAll(() => {
    [1, 2, 3].forEach(() => {
      const product = db.product.create();
      productIds.push(product.id);
    });
  });

  // Clean up after all test cases is done
  afterAll(() => {
    db.product.deleteMany({ where: { id: { in: productIds } } });
  });

  it("should render the list of product", async () => {
    render(<ProductList />);

    // wait for backend to return the items
    const items = await screen.findAllByRole("listitem");

    expect(items.length).toBeGreaterThan(0);
  });

  it("should render no products available if no product is found", async () => {
    // overwrite the endpoint to return empty array
    server.use(http.get("/products", () => HttpResponse.json([])));

    render(<ProductList />);

    const message = await screen.findByText(/no products/i);
    expect(message).toBeInTheDocument();
  });
});
