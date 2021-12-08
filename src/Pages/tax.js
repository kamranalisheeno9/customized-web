import './tax.css';
import Header from '../components/header'
import Footer from '../components/footer'
import Video1 from '../assets/videos/pexel1.mp4'
import { BsFillTelephoneFill,BsFillStopFill } from 'react-icons/bs'
import { BiDockRight } from 'react-icons/bi'
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const Tax = () => {
    return (
        <>
            <Header />
            <Container fluid className="video-container">
                <video autoPlay loop muted className="video" >

                    <source src={Video1} />
                </video>
                <div className="text-in-video-2">
                    <h3 className="video-header">
                        Tax
                    </h3>
                    <h5 className="video-text">
                        With Pitmen's team of experts at your side, you'll be able to navigate through the complexities of the national tax system with confidence, while mitigating risk and having access to the best tax burden reduction opportunities.</h5>
                </div>
            </Container>
            <Container>
                <Row className="justify-content-between mt-5 mb-5" >
                    <Col md={7}>
                        <div className="upper-text-container">
                            <h3>Tax</h3>
                            <h4>Serviços de Consultoria Tributária</h4>
                            <h5>With Pitmen's team of experts at your side, you'll be able to navigate through the complexities of the national tax system with confidence, while mitigating risk and having access to the best tax burden reduction opportunities.</h5>
                        </div>
                        <div className="header-assurance-text">

                            Main modalities
                        </div>
                        <div className="each-list-item">
                            <BsFillStopFill className="icon-list" />
                            General tax consultancy
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            Review of tax procedures
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            ECF Review
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            Implementation and participation in corporate tax committee
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            International tax
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            Foreign capital consulting
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            transfer pricing
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            Tax planning in corporate restructuring and M&A
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            Labor and social security consultancy
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            Research and Development Consulting
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            Management of third-party obligations
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            Assessment and maximization of tax incentives
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            Requests for tax and special regimes
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            Review, preparation, rectification of ancillary tax obligations


                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            Permanent tax advice

                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            Recovery of tax credits

                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            tax planning

                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            Assessment of the internal control system for tax purposes
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            Review of debts included in special installments
                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            Tax consultations and opinions




                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            Support with Block K fill

                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            Support with EFD Contributions


                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            ECD Parameterization

                        </div>
                        <div className="each-list-item">
                        <BsFillStopFill className="icon-list" />

                            Implementation of EFD Reinf

                        </div>
                        <div className="each-list-item">

                        <BsFillStopFill className="icon-list" />

                            Implementation of EFD ICMS and IPI

                        </div>
                    </Col>
                    <Col md={5} lg={3}  >
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

export default Tax;
