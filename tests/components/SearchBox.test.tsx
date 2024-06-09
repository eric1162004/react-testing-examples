import { render, screen } from "@testing-library/react";
import SearchBox from "../../src/components/SearchBox";
import userEvent from "@testing-library/user-event";

describe("SearchBox", () => {
  const renderSearchBox = () => {
    const onChange = vi.fn(); // create a mock function
    render(<SearchBox onChange={onChange} />); // the mock function is passed as a prop to our testing component
    const user = userEvent.setup(); // create a user to test user interaction

    return {
      input: screen.getByPlaceholderText(/search/i),
      onChange,
      user,
    };
  };
  it("should render an input field for searching", () => {
    const { input } = renderSearchBox();

    expect(input).toBeInTheDocument();
  });

  it("should call the onchange when Enter is pressed", async () => {
    const { input, onChange, user } = renderSearchBox();

    const searchTerm = "SearchTerm";
    await user.type(input, searchTerm + "{enter}"); // simulate user enter some search term and then hit Enter

    expect(onChange).toHaveBeenCalledWith(searchTerm);
  });

  it("should not call the onchange when Enter is pressed if the input is empty", async () => {
    const { input, onChange, user } = renderSearchBox();

    await user.type(input, "{enter}"); // simulate user enter some search term and then hit Enter

    expect(onChange).not.toHaveBeenCalled();
  });
});
