import './assurance.css';
import Header from '../components/header'
import Footer from '../components/footer'
import Video1 from '../assets/videos/pexel4.mp4'
import { BsFillTelephoneFill,BsFillStopFill } from 'react-icons/bs'
import { BiDockRight } from 'react-icons/bi'
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const Assurance = () => {
    return (
        <>
            <Header />
            <Container fluid className="video-container">
                <video autoPlay loop muted className="video" >

                    <source src={Video1} />
                </video>
                <Container className="text-in-video">
                    <h3 className="video-header">
                        Assurance & Audit
                    </h3>
                    <h5 className="video-text">Os serviços de auditoria independente tem por objetivo assegurar a confiabilidade das informações contábeis e financeiras elaboradas pelas organizações para uso por parte de investidores, credores e de acionistas.</h5>
                </Container>
            </Container>
            <Container>
                <Row className="justify-content-between mt-5 mb-5" >
                    <Col md={7}>
                        <div className="upper-text-container">
                            <h3>Assurance & Audit</h3>
                            <h4>Serviços de Consultoria Tributária</h4>
                            <h5>Os serviços de auditoria independente tem por objetivo assegurar a confiabilidade das informações contábeis e financeiras elaboradas pelas organizações para uso por parte de investidores, credores e de acionistas.</h5>
                        </div>
                        <div className="header-assurance-text">

                            Principais modalidades
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />
                        
                        Audit of general purpose financial statements
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />
                        
                        Audits of financial statements prepared in accordance with special purpose accounting frameworks
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />
                        
                        Audit of isolated frames
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />
                        
                        Assurance engagements other than audit and review (NBC TO 3000)
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />
                        
                        Control assurance work in service provider organization (NBC TO 3402)
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />
                        
                        Assurance work related to sustainability and social responsibility (CTO 01)
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />
                        
                        Assurance engagements on the compilation of pro forma financial information included in prospectus (NBC TO 3420)
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />
                        
                        Work on previously agreed procedures on accounting information (NBC TSC 4400)
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />
                        
                        Work on previously agreed procedures to comply with Order No. 4.991/2011 and Official Letter No. 507/2012 of the SFF (Superintendence of Economic and Financial Inspection) of Aneel (National Electric Energy Agency) (CTSC 01)
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />
                        
                        Work on previously agreed procedures to comply with Order No. 514/2012 of the Superintendence of Economic and Financial Inspection (“SFF”) of the National Electric Energy Agency (“ANEEL”) (CTSC 02)
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />
                        
                        Financial Statement Review Works (NBC TR 2400)
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />
                        
                        Interim Information Review Works (NBC TR 2410)
                        </div>
                    </Col>
                    <Col md={5} lg={3} >
                        <div className="icons-container" >
                        <div >
                            <BsFillTelephoneFill className="contact-icon" />
                            Contate-nos

                        </div>
                        <hr />
                        <div >
                            <BiDockRight className="contact-icon" />
                            Solicitações de serviços
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    );
}

export default Assurance;
