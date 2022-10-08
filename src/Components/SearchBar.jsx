import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import "../Assests/SearchBar.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../StoreData";
import Card from "react-bootstrap/Card";
import WishlistBtn from "./WishlistBtn";

export default function SearchBar() {
  const [isShown, setIsShown] = useState(false); // Setting up  react state here
  const [filter, setFilter] = useState(" ");

  // in this portion of the code i am filltering my json data and storing it in dataSearch variable
  let dataSearch = Data.CardData.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase());
    });
  });

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12 mb-5">
          <div className="mb-3 col-4 mx-auto text-center">
            <label className="form-lable h4">Search 🔍</label>
            <input
              type="text"
              className="form-control"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              list="Trending-products"
            />
            <datalist id="Trending-products">
              <option value="Laptop" />
              <option value="Mouse" />
              <option value="Keyboard" />
            </datalist>
          </div>
        </div>
        {/* below code i am maping through cart and search for the value which i got as an input from the user in dataSearch variable */}
        {dataSearch.map((item, index) => {
          return (
            <div className="col-11 col-md-3 col-lg-3 mx-0 mb-4">
              <div className="card p-0 overflow-hidden h-80 shadow">
                <Card key={index}>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.title} </Card.Title>
                    <Card.Text>{item.desc}</Card.Text>
                    <WishlistBtn /> 
                    <div
                      onMouseEnter={() => setIsShown(true)}
                      onMouseLeave={() => setIsShown(false)}
                    >
                      🛒{" "}
                      {isShown && (
                        <Button variant="outline-dark">View Product ➡</Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
