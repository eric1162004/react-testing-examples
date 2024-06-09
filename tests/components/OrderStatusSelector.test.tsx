import { render, screen } from "@testing-library/react";
import OrderStatusSelector from "../../src/components/OrderStatusSelector";
import { Theme } from "@radix-ui/themes";
import userEvent from "@testing-library/user-event";

// Must wrap radix ui component inside the Theme component

// ResizeObserver is not defined in our JSdom test env, you need to install resize-observer-polyfill
// npm i -D resize-observer-polyfill

describe("OrderStatusSelector", () => {
  it("should render New as the default value", () => {
    render(
      <Theme>
        <OrderStatusSelector onChange={vi.fn()} />
      </Theme>
    );

    // const button = screen.getByRole('button') // In the Radix component, the button has custom role of combobox
    const button = screen.getByRole("combobox");
    expect(button).toHaveTextContent(/new/i);
  });

  it("should render corrent statuses", async () => {
    render(
      <Theme>
        <OrderStatusSelector onChange={vi.fn()} />
      </Theme>
    );

    const button = screen.getByRole("combobox");
    const user = userEvent.setup();
    await user.click(button);

    // the list option appear asynchronously, so use findBy
    const options = await screen.findAllByRole("option");
    expect(options).toHaveLength(3);
    const labels = options.map((option) => option.textContent); // HTMLElement has property textContent
    expect(labels).toEqual(["New", "Processed", "Fulfilled"]);
  });
});
