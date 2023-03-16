import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BannerName from "./components/BannerName";
import SubMenuContainer from "./components/styles/SubMenuContainer";
import MenuCard from "./components/MenuCard";
import "./components/styles/itemcard.css";
import "./components/styles/menuCard.css";
import "./components/styles/dishContainer.css";
import DebitCard from "./components/DebitCard";
import ItemCard from "./components/ItemCard";
import { MenuItems, Items } from "./components/data";
import CartItems from "./components/CartItems";
import { useStateValue } from "./components/styles/StateProvider";

const App = () => {
  // main dish state variable
  const [mainData, setMainData] = useState(
    Items.filter((element) => element.itemId == "buger01")
  );

  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    // toggle the active class for menu card when they clicked
    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // menu card active toggle
    const menuCards = document
      .querySelector(".row-container")
      .querySelectorAll(".row-menu-card");

    function setMenuActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuCards.forEach((n) => n.addEventListener("click", setMenuActive));
  }, [mainData, cart]);

  // set main dish items on filter passed item id

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  };

  return (
    <div className="app">
      {/* header section */}
      <Header />
      {/* main container */}
      <main>
        <div className="main-container">
          {/* banner */}
          <div className="banner">
            <BannerName name={"praveen"} discount={"20"} link="#" />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc33"
              alt=""
              className="delivery-pic"
            />
          </div>
          {/* dish container */}
          <div className="dish-container">
            <div className="menu-card">
              <SubMenuContainer />
            </div>
            {/* categories row  */}
            <div className="row-container">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      name={data.name}
                      imgSrc={data.imgSrc}
                      isActive={data.itemId === "buger01" ? true : false}
                    />
                  </div>
                ))}
              ;
            </div>

            {/* dish items container */}
            <div className="dish-item-container">
              {mainData &&
                mainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
              ;
            </div>
          </div>
        </div>
        {/* right menu */}
        <div className="right-menu">
          <div className="debit-card-container">
            <div className="debit-card">
              <DebitCard />
            </div>
          </div>

          {/* cart checkout */}
          {/* if cart state is false it will render an empty div otherwise it will render a sub menu container */}
          {!cart ? (
            <div></div>
          ) : (
            <div className="cart-checkout-container">
              <div className="cart-container">
                <SubMenuContainer name={"cartItems"} />

                <div className="cart-items">
                  {cart &&
                    cart.map((data) => (
                      <CartItems
                        name={data.name}
                        imgSrc={data.imgSrc}
                        price={data.price}
                        key={data.id}
                        itemId={data.id}
                      />
                    ))}
                </div>
              </div>
              <div className="total-section">
                <h3>total</h3>
                <p>
                  <span>$</span>45.0
                </p>
              </div>
              <button className="check-out">checkout</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
