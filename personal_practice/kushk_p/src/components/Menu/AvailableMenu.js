import classes from "./AvailableMenu.module.css";
import Card from "../UI/Card";
import MenuItem from "./MenuItem/MenuItem";

const DUMMY_MENU = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMenu = () => {
  const menuList = DUMMY_MENU.map((menu) => (
    <MenuItem
      key={menu.id}
      id={menu.id}
      name={menu.name}
      description={menu.description}
      price={menu.price}
    />
  ));

  return (
    <section className={classes.menuu}>
      <Card>
        <ul>{menuList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMenu;
