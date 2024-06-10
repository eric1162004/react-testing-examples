import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

/* Auth0 check if user is log in. If not, bring user to the login page */
const AdminHomePage = withAuthenticationRequired(() => {
  return (
    <div>
      <h1>Admin Area</h1>
      <Link to="products">Products</Link>
    </div>
  );
});

export default AdminHomePage;
