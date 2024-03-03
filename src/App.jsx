import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header titulo="ADOPTA UN PERRITO" />
      <section className="MyCards">
        <MyCard
          imagen="https://images.pexels.com/photos/3726315/pexels-photo-3726315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          nombre="Bartolo"
          descripcion="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
          color="success"
          tag="Husky"
        />
        <MyCard
          imagen="https://images.pexels.com/photos/1938125/pexels-photo-1938125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          nombre="Messi"
          descripcion="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
          color="primary"
          tag="Border Collie"
        />
        <MyCard
          imagen="https://images.pexels.com/photos/12287391/pexels-photo-12287391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          nombre="Gohan"
          descripcion="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!"
          color="danger"
          tag="Shar Pei"
        />
        <MyCard
          imagen="https://images.pexels.com/photos/4203281/pexels-photo-4203281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          nombre="Princesa"
          descripcion="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
          color="warning"
          tag="Beagle"
        />
      </section>
      <Footer />
    </>
  );
};

export default App;