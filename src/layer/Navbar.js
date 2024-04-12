import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import {ButtonGroup} from "reactstrap";

function NavBar(props) {
    return (
        <div id="Navigation" style={{width:"100%", background:"#212529"}}>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" style={{marginLeft:"100px"}}>
                <Container fluid style={{marginLeft: "0px"}}>
                    <Navbar.Brand href="/">
                        <img alt="" src="titlelog.png"
                             width="30" height="30"
                             className="d-inline-block align-top"
                        />{' '}
                        Finance
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px'}}
                            navbarScroll
                        >
                            <Nav.Link href="/recommend">종목추천</Nav.Link>
                            <Nav.Link href="/price-menu">주가메뉴</Nav.Link>
                            <Nav.Link href="/news" disabled>뉴스</Nav.Link>
                            <Nav.Link href="/community" disabled>커뮤니티</Nav.Link>
                            <Nav.Link href="/support" disabled>지원</Nav.Link>
                        </Nav>
                        <ButtonGroup style={{marginRight:"100px"}}>
                            <Button variant={"outline-light"}>로그인</Button>
                            <Button variant={"outline-light"}>회원가입</Button>
                        </ButtonGroup>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;