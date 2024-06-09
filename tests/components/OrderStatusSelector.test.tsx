import { render, screen } from "@testing-library/react";
import OrderStatusSelector from "../../src/components/OrderStatusSelector";
import { Theme } from "@radix-ui/themes";
import userEvent from "@testing-library/user-event";

// Must wrap radix ui component inside the Theme component

// ResizeObserver is not defined in our JSdom test env, you need to install resize-observer-polyfill
// npm i -D resize-observer-polyfill

describe("OrderStatusSelector", () => {
  const renderComponent = () => {
    render(
      <Theme>
        <OrderStatusSelector onChange={vi.fn()} />
      </Theme>
    );

    return {
      trigger: screen.getByRole("combobox"),
      getOtions: () => screen.findAllByRole("option"),
    };
  };

  it("should render New as the default value", () => {
    const { trigger } = renderComponent();

    expect(trigger).toHaveTextContent(/new/i);
  });

  it("should render corrent statuses", async () => {
    const { trigger, getOtions } = renderComponent();

    const user = userEvent.setup();
    await user.click(trigger);

    // the list option appear asynchronously, so use findBy
    const options = await getOtions();
    expect(options).toHaveLength(3);
    const labels = options.map((option) => option.textContent); // HTMLElement has property textContent
    expect(labels).toEqual(["New", "Processed", "Fulfilled"]);
  });
});
