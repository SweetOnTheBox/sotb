import { Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../components/NavigationBar";
import "../index.css";
import CardProduct from "../components/CardProduct";
import FormContact from "../components/Forms";
import Faq from "../components/Faq";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup function
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // Empty dependency array to run this effect only once after initial render

  return (
    <Fragment>
      <div className="background shapes">
        <NavigationBar />

        {/* Hero Section */}
        <div id="hero">
          <div className="container gap-3 d-md-flex ">
            <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center mx-auto">
              <div className="mt-5">
                <h1 className="hero-text text-center fw-bold text-wrap">
                  Sweet On The Box
                </h1>
                <blockquote className="hero-text text-center lh-base mx-auto ">
                  <q>
                    Taste Your{" "}
                    <span className="fst-italic fw-bold">Happiness</span>
                  </q>
                </blockquote>
              </div>
              <div
                id="icons"
                className="hero-text d-flex justify-content-between gap-4 align-items-center w-100 text-center mx-auto mt-5"
              >
                <div>
                  <img src="assets/quality.png" alt="" />
                  <h3>Quality</h3>
                </div>
                <div>
                  <img src="assets/premium.png" alt="" />
                  <h3>Premium</h3>
                </div>
                <div>
                  <img src="assets/taste.png" alt="" />
                  <h3>Taste</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section end */}

        {/* About */}
        <div>
          <div className="container">
            <h1 id="about" className="hidden text-center mt-5 fw-bold">
              About <span className="sotb">SOTB</span>
            </h1>
            <p className="hidden text-center lh-base w-75 mx-auto mt-2 p-2">
              In 2024, <q>Sweet on the Box</q> was introduced as a convenient
              and affordable way to enjoy delicious sweets. Made with fresh,
              quality ingredients, we aims to be a part of your happy moments.
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="hidden container">
          <h1 id="price" className="text-center fw-bold">
            Price
          </h1>
          <CardProduct />
        </div>
        {/* FAQ */}
        <div className="hidden container">
          <h1 id="faq" className="text-center mt-4 mb-4 fw-bold">
            FAQ
          </h1>
          <Faq />
        </div>
        {/* contact */}
        <div className="hidden container pb-5">
          <div className="bg-dark text-white rounded">
            <div id="head">
              <h1 id="contact" className="text-center mt-4 pt-4 fw-bold">
                Contact
              </h1>
              <p className="text-center lh-base w-75 mx-auto">
                Contact us for any suggestion or just to say hello
              </p>
            </div>
            <div id="form">
              <FormContact />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
