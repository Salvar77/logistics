import classes from "./Cart.module.scss";

const Cart = () => {
  return (
    <section id="cart" className={classes.cart}>
      <div className={classes.cart__box}>
        <div className={classes.cart__boxOne}>
          <h3>1</h3>
          <p>1</p>
          <button>1</button>
        </div>
        <div className={classes.cart__boxTwo}>
          <h3>1</h3>
          <p>1</p>
          <button>1</button>
        </div>
        <div className={classes.cart__boxTwo}>
          <h3>1</h3>
          <p>1</p>
          <button>1</button>
        </div>
        <div className={classes.cart__boxTwo}>
          <h3>1</h3>
          <p>1</p>
          <button>1</button>
        </div>
        <div className={classes.cart__boxTwo}>
          <h3>1</h3>
          <p>1</p>
          <button>1</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
