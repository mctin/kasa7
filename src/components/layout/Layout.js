import HeaderSection from "./HeaderSection";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <HeaderSection />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
