import { useEffect, useState } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'; 
import Home from './pages/Home';
import Ofertas from './pages/Ofertas';
import Contact from './pages/Contact';

function App() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hacer el pedido a la API de FakeStore
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((data) => {
        setProductos(data); // Guardar los productos en el estado
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error de carga de API', err);
        setLoading(false);
      });
  }, []);

return (
    <Router>
      <div>
        <NavBar />
        <Container className="mt-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1>Productos</h1>
                  {loading ? (
                    <h2>Cargando Imagenes...</h2>
                  ) : (
                    <Row>
                      {productos.map((producto) => (
                        <Col key={producto.id} md={3}>
                          <Card className="m-2">
                            <Card.Img src={producto.image} alt={producto.title} />
                            <Card.Body>
                              <Card.Title>{producto.title}</Card.Title>
                              <Card.Text>
                                <strong>Precio: ${producto.price}</strong>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  )}
                </>
              }
            />
            <Route path="/ofertas" element={<Ofertas />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}


export default App;
