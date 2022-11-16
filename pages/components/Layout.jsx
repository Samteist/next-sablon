import Menu from "./Menu";

function Layout({ children }) {
  return (
    <div>
      <Menu />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
