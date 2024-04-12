import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdb-react-ui-kit';

function Footer(props) {
    return (
            <MDBFooter bgColor='light' className='text-center text-lg-center text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div style={{width:"100%",display:"flex", justifyContent:"center",alignItems:"center"}}>
                        <div className='me-5 d-none d-lg-block'>
                            <span>Get All of source code on our github:&nbsp;&nbsp;</span>
                            <a href='https://github.com/jaekyungshon/Capstone-Finance-Frontend' className='me-4 text-reset'
                            target={"_blank"} rel={"noreferrer"}>
                                Frontend
                            </a>
                            <a href='https://github.com/jaekyungshon/Capstone-Finance-Backend' className='me-4 text-reset'
                            target={"_blank"} rel={"noreferrer"}>
                                Backend
                            </a>
                        </div>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact: 박주승</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2' />
                                    Hansung University
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    judang0322@gmail.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> 010-9101-3085
                                </p>
                                <p>
                                    <a href='https://github.com/ParkJuseung'
                                       className='me-4 text-reset' target={"_blank"} rel={"noreferrer"}>
                                        <MDBIcon color='secondary' fab icon='github'/>
                                    </a>
                                </p>
                                <p>
                                    <p>역할</p>
                                    <ul>
                                        <li>추천종목 페이지 서버 MC 구축</li>
                                        <li>주가메뉴 페이지 서버 MC 구축</li>
                                        <li>주가상세 페이지 서버 MC 구축</li>
                                        <li>뉴스 홈페이지 서버 MC 구축</li>
                                        <li>마이페이지 서버 MC 구축</li>
                                    </ul>
                                </p>
                            </MDBCol>
                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact: 손재경</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2'/>
                                    Hansung University
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3'/>
                                    jksohn28@naver.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3'/> 010-2084-1328
                                </p>
                                <p>
                                    <a href='https://github.com/jaekyungshon'
                                       className='me-4 text-reset' target={"_blank"} rel={"noreferrer"}>
                                        <MDBIcon color='secondary' fab icon='github'/>
                                    </a>
                                </p>
                                <p>
                                    <p>역할</p>
                                    <ul>
                                        <li>강화학습 Python 시스템</li>
                                        <li>ChatGPT Python 시스템</li>
                                        <li>뉴스데이터 NaverAPI Python 시스템</li>
                                        <li>주가데이터 CreonAPI Python 시스템</li>
                                        <li>대시보드(index) View 페이지</li>
                                        <li>추천종목 View 페이지</li>
                                        <li>주가메뉴 View 페이지</li>
                                        <li>주가상세 View 페이지</li>
                                        <li>뉴스홈 View 페이지</li>
                                        <li>마이페이지 View 페이지</li>
                                    </ul>
                                </p>
                            </MDBCol>
                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact: 김상헌</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2'/>
                                    Hansung University
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3'/>
                                    shdhkims@naver.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3'/> 010-9513-7997
                                </p>
                                <p>
                                    <a href='https://github.com/shdhkim'
                                       className='me-4 text-reset' target={"_blank"} rel={"noreferrer"}>
                                        <MDBIcon color='secondary' fab icon='github'/>
                                    </a>
                                </p>
                                <p>
                                    <p>역할</p>
                                    <ul>
                                        <li>로그인 View 페이지</li>
                                        <li>회원가입 View 페이지</li>
                                        <li>커뮤니티 View 페이지</li>
                                        <li>글 작성 View 페이지</li>
                                        <li>글 상세 View 페이지</li>
                                    </ul>
                                </p>
                            </MDBCol>
                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact: 김원준</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2'/>
                                    Hansung University
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3'/>
                                    wonjunkim520@gmail.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3'/> 010-4179-5765
                                </p>
                                <p>
                                    <MDBIcon color='secondary' fab icon='github'/>
                                </p>
                                <p><br/></p>
                                <p>
                                    <p>역할</p>
                                    <ul>
                                        <li>로그인 페이지 서버 MC 구축</li>
                                        <li>회원가입 페이지 서버 MC 구축</li>
                                        <li>커뮤니티 페이지 서버 MC 구축</li>
                                        <li>글 작성 페이지 서버 MC 구축</li>
                                        <li>글 상세 페이지 서버 MC 구축</li>
                                    </ul>
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    © Finance, Inc. 2024 Copyright:&nbsp;&nbsp;
                    <strong>Capstone-418</strong>
                </div>
            </MDBFooter>
    );
}

export default Footer;