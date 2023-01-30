import { Fragment } from "react";
import cafeLogo from "../../assets/cafeLogo.png";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Cafe</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={cafeLogo} alt="logo of cafe" />
      </div>
    </Fragment>
  );
};

export default Header;
