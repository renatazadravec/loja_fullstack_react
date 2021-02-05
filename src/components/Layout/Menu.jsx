import { Navbar, Nav, Container } from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import "./menu.css";
import logo from "../../images/logo.png";

export const Menu = () => {
  const history = useHistory();

  return (
    <Navbar className="menunav" expand="lg">
      <Container>
        <Navbar.Brand className="logo" onClick={()=> history.push('/')}>
          <img src={logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu-topo" />

        <Navbar.Collapse id="menu-topo">
          <Nav className="menu ml-auto">
            <Nav.Item>
              <Nav.Link className="item" onClick={()=> history.push('/produtos')}>
                Nossos Produtos
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="item" onClick={()=> history.push('/nossas-lojas')}>
                Nossas Lojas
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="item" onClick={()=> history.push('/pedidos')}>
                Pedidos
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="item" onClick={()=> history.push('/contatos')}>
                Contatos
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
