import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import cafeLogo from "../../assets/cafeLogo.png";
import classes from "./Header.module.css";


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>CAFE</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={cafeLogo} alt="logo of cafe" />
      </div>
    </Fragment>
  );
};

export default Header;
