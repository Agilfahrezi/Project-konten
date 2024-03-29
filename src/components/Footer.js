import { Navbar, Container } from "react-bootstrap";

const Footer = ()=>  {
    return(
        <Navbar  bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Smk Nusantara Indonesia</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                Copyright<a href="#login" className="text-decoration-none">2024</a>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Footer;