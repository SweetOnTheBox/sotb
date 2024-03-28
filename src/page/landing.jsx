import { Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../components/NavigationBar";
import "../index.css";
import CardProduct from "../components/CardProduct";
import Faq from "../components/Faq";
import Loader from "../components/Loader";

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
      {document.readyState === "loading" ? (
        <Loader />
      ) : (
        <div className="background">
          {/* Hero Section */}
          <div id="hero">
            <NavigationBar />
            <div className="container gap-3 d-md-flex ">
              <div className="col-md-6 col-12 d-flex flex-column  justify-content-center align-items-center mx-auto">
                <div className="mt-4">
                  <h1 className="hero-text text-center fw-bold text-wrap">
                    Sweet On The Box
                  </h1>
                  <blockquote className="hero-text text-center lh-base mx-auto ">
                    <q>
                      Taste Your{" "}
                      <span className="fst-italic fw-bold">
                        Sweet Happiness
                      </span>
                    </q>
                  </blockquote>
                </div>
                <div
                  id="icons"
                  className="hero-text black d-flex justify-content-between gap-4 align-items-center w-100 text-center mx-auto mt-4"
                >
                  <div className="">
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
                {/* About */}
                <div className=" container mt-4">
                  <div>
                    <h1 id="about" className="hidden text-left mt-2 fw-bold">
                      About <span className="sotb">SOTB</span>
                    </h1>
                    <p className="hidden text-left lh-base w-100 ">
                      In 2024, <q className="fst-italic">Sweet on the Box</q>{" "}
                      was introduced as a convenient and affordable way to enjoy
                      delicious sweets. Made with fresh, quality ingredients, we
                      aims to be a part of your happy moments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                <img className="kue img-fluid " src="assets/kue.png" alt="" />
              </div>
            </div>
          </div>
          {/* Hero Section end */}

          {/* Price */}
          <div className="hidden container mt-4 ">
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
        </div>
      )}
    </Fragment>
  );
}

export default App;
