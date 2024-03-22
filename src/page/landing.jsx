import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../components/NavigationBar";
import ProductCarousels from "../components/Carousels";
import "../index.css";
import ReadMoreModal from "../components/Modal";
import CardProduct from "../components/CardProduct";
import FormContact from "../components/Forms";
function App() {
  return (
    <Fragment>
      <div className="background">
        <NavigationBar />

        {/* Hero Section */}
        <div id="hero">
          <div className="container gap-3 d-sm-flex ">
            <div>
              <h1
                className="text-center mt-4 fw-bold text-wrap"
                id="hero-text"
                // style={{ fontSize: "4rem" }}
              >
                Taste Your Happiness Drug
              </h1>
              <p className="text-center lh-base w-50 mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                debitis et inventore accusamus! Ducimus dolorum error, delectus
                et vero libero?
              </p>
            </div>
          </div>
          <ProductCarousels />
        </div>
        {/* Hero Section end */}

        {/* About */}
        <div>
          <div className="container">
            <h1 id="about" className="text-center mt-4 fw-bold">
              About SOTB
            </h1>
            <p className="text-center lh-base w-75 mx-auto p-2">
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
        <div className="container">
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
        <div className="container pb-5">
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
