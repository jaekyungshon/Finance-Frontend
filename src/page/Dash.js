import React from "react";
import GlobalStyle from "../GlobalStyle";
import NavBar from "../layer/Navbar";
import Card from "react-bootstrap/Card";
import Footer from "../layer/Footer";
import {MDBCol, MDBContainer,MDBRow,MDBBtn} from "mdb-react-ui-kit";
import ScrollToTopButton from "../layer/ScrollToTopButton";

function Dash(props) {
    return (
        <>
            <GlobalStyle/>
            <ScrollToTopButton />
            <NavBar />
            <div style={{position: "relative", width: "100%"}}>
                <img
                    src={"https://images.unsplash.com/photo-1529678407585-55ac0053aa47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjI0M3wwfDF8c2VhcmNofDJ8fG1vZGVybnxlbnwwfHx8fDE3MTI4MzA3MzJ8MA&ixlib=rb-4.0.3&q=80&w=1080"}
                    alt={""} width={"100%"} height={"450px"} style={{objectFit: "cover"}}/>
                <div style={{
                    position: "absolute",
                    top: "250px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "60%",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Card style={{width: "100%", height: "400px", position: "relative",
                        boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.1)"}}>
                        <div style={{
                            width: "100%",
                            height: "50%",
                            background: "linear-gradient(180deg, #CCCCCC, white)",
                            position: "absolute",
                            top: 0,
                            left: 0
                        }}>
                            <div style={{textAlign:"center",fontFamily: "Arial, sans-serif",
                            marginTop:"60px"}}>
                                <h1 style={{color:"rgb(87 85 85)"}}>
                                    <strong>최고의 주식 어시스턴트를 경험해보세요!</strong>
                                </h1>
                                <div>
                                    <h2 style={{color:"rgb(100 98 98)", marginTop:"40px"}}>
                                        <strong>주식종목 추천 사이트</strong>
                                    </h2>
                                </div>
                                <div style={{
                                    width: "100%", marginTop: "40px", marginBottom: "10px",
                                    display: "flex", justifyContent: "center", alignItems: "center"
                                }}>
                                    <hr style={{width: "60%", borderTop: "1px solid #999999"}}/>
                                </div>
                                <div style={{
                                    width: "100%",
                                    display: "flex", justifyContent: "center", alignItems: "center"
                                }}>
                                    <MDBRow className={"mb-4"}>
                                        <MDBCol>
                                            <MDBBtn floating
                                                    className={'m-1'}
                                                    style={{background:"white", borderRadius:"50px", border:"2px solid black",
                                                        transition: "background 0.3s"}}
                                                    href={"http://localhost:3000/recommend"}
                                                    role={'button'}
                                                    onMouseEnter={(e) => { e.currentTarget.style.background="gray";}}
                                                    onMouseLeave={(e) => { e.currentTarget.style.background="white";}}>
                                                <img alt={""} src={"home.png"} width={"30"} height={"30"} />
                                            </MDBBtn>
                                            <p><strong>종목추천</strong></p>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBBtn floating
                                                    className={'m-1'}
                                                    style={{background:"white", borderRadius:"50px", border:"2px solid black",
                                                        transition: "background 0.3s"}}
                                                    href={"http://localhost:3000/price-menu"}
                                                    role={'button'}
                                                    onMouseEnter={(e) => { e.currentTarget.style.background="gray";}}
                                                    onMouseLeave={(e) => { e.currentTarget.style.background="white";}}>
                                                <img alt={""} src={"home.png"} width={"30"} height={"30"} />
                                            </MDBBtn>
                                            <p><strong>주가메뉴</strong></p>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBBtn floating
                                                    className={'m-1'}
                                                    style={{background:"white", borderRadius:"50px", border:"2px solid black",
                                                        transition: "background 0.3s"}}
                                                    href={"http://localhost:3000/news"}
                                                    role={'button'}
                                                    onMouseEnter={(e) => { e.currentTarget.style.background="gray";}}
                                                    onMouseLeave={(e) => { e.currentTarget.style.background="white";}} disabled>
                                                <img alt={""} src={"home.png"} width={"30"} height={"30"} />
                                            </MDBBtn>
                                            <p><strong>뉴스</strong></p>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBBtn floating
                                                    className={'m-1'}
                                                    style={{background:"white", borderRadius:"50px", border:"2px solid black",
                                                        transition: "background 0.3s"}}
                                                    href={"http://localhost:3000/community"}
                                                    role={'button'}
                                                    onMouseEnter={(e) => { e.currentTarget.style.background="gray";}}
                                                    onMouseLeave={(e) => { e.currentTarget.style.background="white";}} disabled>
                                                <img alt={""} src={"home.png"} width={"30"} height={"30"} />
                                            </MDBBtn>
                                            <p><strong>커뮤니티</strong></p>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBBtn floating
                                                    className={'m-1'}
                                                    style={{background:"white", borderRadius:"50px", border:"2px solid black",
                                                        transition: "background 0.3s"}}
                                                    href={"http://localhost:3000/support"}
                                                    role={'button'}
                                                    onMouseEnter={(e) => { e.currentTarget.style.background="gray";}}
                                                    onMouseLeave={(e) => { e.currentTarget.style.background="white";}} disabled>
                                                <img alt={""} src={"home.png"} width={"30"} height={"30"} />
                                            </MDBBtn>
                                            <p><strong>지원</strong></p>
                                        </MDBCol>
                                    </MDBRow>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div style={{width:"100%", marginTop:"350px", marginBottom:"100px",
                display: "flex",justifyContent: "center",alignItems:"center"}}>
                <div style={{width:"70%", textAlign:"center", fontFamily: "Arial, sans-serif"}}>
                    <h2>
                        <strong>타사 정보 사이트와 다른 점은 무엇인가?</strong></h2>
                    <p className={"text-muted"} style={{marginTop:"30px"}}>
                        AI를 활용한 기능들과 TradingVeiw API를 통한 고급 차트그래프, 기술 지표 분석 툴을 제공합니다.
                        <br/>이에 필요한 데이터는 Naver API와 Creon API를 이용하였습니다.
                    </p>
                    <MDBContainer style={{marginTop:"40px"}}>
                            <MDBRow className={"mb-4"}>
                                <MDBCol size={"md"}>
                                    <img alt="" src={"checkbox.png"} width={"20"} height={"20"}/>
                                    &nbsp;&nbsp;
                                    <strong>딥러닝</strong>
                                    <p className={"text-muted"} style={{ paddingLeft: "25px", marginTop:"10px"}}>
                                        각 종목의 일별 차트 데이터를 강화학습 모델을 통한 투자 시뮬레이션을 바탕으로, 학습하여 선정된
                                        자산 포트폴리오 가치가 높은 5개의 종목을 추천합니다. 투자자들의 매매 종목 선택의
                                        보조 역할이기에, 언제나 투자 위험성이 존재합니다.
                                    </p>
                                </MDBCol>
                                <MDBCol size={"md"}>
                                    <img alt="" src={"checkbox.png"} width={"20"} height={"20"}/>
                                    &nbsp;&nbsp;
                                    <strong>ChatGPT</strong>
                                    <p className={"text-muted"} style={{paddingLeft: "25px", marginTop: "10px"}}>
                                        추천 종목의 각 일별 차트 및 뉴스 데이터의 상관관계 파악을 통한
                                        주가 동향, 최근 뉴스의 감성(분위기), 주요키워드 5개를 ChatGPT가 분석하여 제공합니다.
                                        또한, 28개의 유명 대기업의 최신 뉴스들에 대해 뉴스 감성(분위기), 주요키워드 5개, 뉴스 요약을
                                        제공합니다.
                                    </p>
                                </MDBCol>
                                <MDBCol size={"md"}>
                                    <img alt="" src={"checkbox.png"} width={"20"} height={"20"}/>
                                    &nbsp;&nbsp;
                                    <strong>기술 분석</strong>
                                    <p className={"text-muted"} style={{paddingLeft: "25px", marginTop: "10px"}}>
                                        TradingView API를 통해 다음의 분석 도구를 제공합니다.
                                        <br/>
                                        <br/>
                                        <ul>
                                            <li>고급 차트그래프</li>
                                            <li>업종별 히트맵</li>
                                            <li>주가 급상승</li>
                                            <li>거래량 급상승</li>
                                            <li>매매 추세 분석</li>
                                        </ul>
                                    </p>
                                </MDBCol>
                                <MDBCol size={"md"}>
                                    <img alt="" src={"checkbox.png"} width={"20"} height={"20"}/>
                                    &nbsp;&nbsp;
                                    <strong>커뮤니티</strong>
                                    <p className={"text-muted"} style={{paddingLeft: "25px", marginTop: "10px"}}>
                                        사이트 회원들과 자유롭게 소통할 수 있는 게시판을 제공합니다. 각종 종목에 관한 이야기를 주고
                                        받을 수 있으며, 분석 자료 등을 공유할 수 있습니다. 또한, 종목마다 관련 뉴스를 제공하며,
                                        다양한 카테고리의 뉴스들의 외부 링크로 이동하여, 추가 정보를 얻을 수 있습니다.
                                    </p>
                                </MDBCol>
                            </MDBRow>
                    </MDBContainer>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Dash;