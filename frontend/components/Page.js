import Header from "./Header";
import Meta from "./Meta";

const Page = ({ children }) => (
  <>
    <Meta />
    <Header />
    {children}
  </>
);

export default Page;
