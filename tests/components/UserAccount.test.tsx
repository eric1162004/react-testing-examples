import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

/* 
Username should render in the dom - getByText
render a button if user is admin
do not render a button if user is not admin
*/

describe("UserAccount", () => {
  it("Username should be rendered in the dom", () => {
    const user: User = { id: 1, name: "eric", isAdmin: true };

    render(
      <UserAccount user={user} />
    ); /* render the component is a virtual dom */

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("Edit button should be rendered if the user is admin", () => {
    const user: User = { id: 1, name: "eric", isAdmin: true };

    render(<UserAccount user={user} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it("Edit button should be not rendered if the user is not admin", () => {
    const user: User = { id: 1, name: "eric", isAdmin: false };

    render(<UserAccount user={user} />);

    const button =
      screen.queryByRole(
        "button"
      ); /* cannot use getByRole because the absence of a button will throw error */

    expect(button).not.toBeInTheDocument();
  });
});
