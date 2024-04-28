import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import {ButtonGroup} from "reactstrap";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";

function NavBar(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        checkLoginStatus(); // 로그인 상태를 체크하여 state 업데이트
        fetchAccessToken();
        getUsername(); // 유저네임 가져오기
    }, []);

    const checkLoginStatus = () => {
        try {
            const login = localStorage.getItem("login");
            if (login === "1") {
                setIsLoggedIn(true); // "login"이 "1"이면 로그인 상태로 설정
            }
        } catch (error) {
            console.error("네트워크 오류:", error);
        }
    };

    const getUsername = () => {
        try {
            const storedUsername = localStorage.getItem("username");
            if (storedUsername) {
                setUsername(storedUsername);
            }
        } catch (error) {
            console.error("네트워크 오류:", error);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('login', "0");
        localStorage.removeItem('username'); // 유저네임 삭제
        localStorage.removeItem('accessToken');
        localStorage.removeItem('accessTokenExpiresIn');
        expireCookie('refreshToken');
        delete axios.defaults.headers.common["Authorization"];
    };


    const fetchAccessToken = async () => { //페이지 로드시에 accesstoken 만료를 확인하기 위한 함수 모든 페이지에 있는 navbar에 작성함
        try {
            const refreshToken = getCookie('refreshToken');
            if (!refreshToken) return;
            const accessTokenExpiration = localStorage.getItem('accessTokenExpiration');

            if (accessTokenExpiration && (accessTokenExpiration - Date.now()) < 30000) {
                const response = await axios.post('/auth/reissue', {}, {
                    headers: {
                        'Authorization': `Bearer ${refreshToken}`
                    }
                });

                if (response.status === 200) {
                    const { accessToken, accessTokenExpiresIn } = response.data;
                    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('accessTokenExpiresIn', accessTokenExpiresIn);
                    console.log('갱신 성공');
                } else {
                    console.error('갱신 실패:', response.statusText);
                }
            }
        } catch (error) {
            console.error('네트워크 오류:', error);
        }
    };
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        } else {
            return null;
        }
    };

    function expireCookie(name) {
        // 현재 시간을 가져옴
        var now = new Date();
        // 현재 시간보다 1초 전으로 만료 시간을 설정
        now.setSeconds(now.getSeconds() - 1);
        // 만료 시간을 GMT 문자열로 변환
        var expires = now.toGMTString();
        // 쿠키를 만료시키기 위해 동일한 이름의 쿠키를 설정
        document.cookie = name + "=; expires=" + expires + "; path=/";
    }
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