import { Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../components/NavigationBar";
import ProductCarousels from "../components/Carousels";
import "../index.css";
import ReadMoreModal from "../components/Modal";
import CardProduct from "../components/CardProduct";
import FormContact from "../components/Forms";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
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
      <div className="background">
        <NavigationBar />

        {/* Hero Section */}
        <div id="hero">
          <div className="container gap-3 d-md-flex ">
            <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center  mx-auto">
              <h1 className="hero-text text-center mt-4 fw-bold text-wrap">
                Sweet On The Box
              </h1>
              <blockquote className="hero-text text-center lh-base w-75 mx-auto p-2 ">
                <q>
                  Taste Your{" "}
                  <span className="fst-italic fw-bold">Happiness</span> Drug
                </q>
              </blockquote>
            </div>
          </div>
          <ProductCarousels />
        </div>
        {/* Hero Section end */}

        {/* About */}
        <div>
          <div className="container">
            <h1 id="about" className="hidden text-center mt-4 fw-bold">
              About <span className="sotb">SOTB</span>
            </h1>
            <p className="hidden text-center lh-base w-75 mx-auto p-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              natus, neque hic fuga dolores reiciendis labore? Obcaecati eos
              officiis magnam ullam at. Alias architecto corporis ratione
              eligendi
              <ReadMoreModal>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                blanditiis inventore sed harum iusto iste numquam expedita
                aliquam libero consectetur, repellendus mollitia modi illo aut.
                Suscipit, deleniti magnam, eos corporis repellendus architecto
                sint ut eius repellat veritatis aliquam deserunt quam fugiat
                ullam, dolore a recusandae hic sit neque ipsum. Doloribus.
              </ReadMoreModal>
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="hidden container">
          <h1 id="price" className="text-center mt-4 fw-bold">
            Price
          </h1>
          <p className="text-center lh-base w-75 mx-auto p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            natus, neque hic fuga dolores reiciendis labore? Obcaecati eos
            officiis magnam ullam at. Alias architecto corporis ratione eligendi
          </p>
          <CardProduct />
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
