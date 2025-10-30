import "./RestaurantMenu.css";
import { Fragment } from "react";

export default function RestaurantMenu({ data }) {
  return (
    <div className="menu">
      <h1 className="menu-title">Меню ресторану</h1>
      {data.map((category) => (
        <Fragment key={`${category.id}-${category.categoryName}`}>
          <div className="category">
            <h2 className="category-name">{category.categoryName}</h2>

            <div className="items-list">
              {category.items.map((item) => (
                <Fragment key={`${item.id}-${item.name}`}>
                  <div className="menu-item">
                    <div className="item-header">
                      <h3 className="item-name">{item.name}</h3>
                      <span className="item-price">{item.price} грн</span>
                    </div>
                    <p className="item-description">{item.description}</p>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
