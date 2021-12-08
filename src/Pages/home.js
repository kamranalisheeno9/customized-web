import './home.css';
import Header from '../components/header'
import Footer from '../components/footer'
import Image1 from '../assets/images/aviao.jpg'
import Image2 from '../assets/images/aviao1.jpg'
import Image3 from '../assets/images/Cronograma.jpg'
import Image4 from '../assets/images/cybersecurity.jpg'
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <Header />
            <Carousel className="carousel-container">
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={Image3}
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h1 className="carousel-header">Pitmen<span>:</span></h1>
                        <p className="carousel-text">Novos conceitos. Para uma nova era.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={Image1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="carousel-header">Pitmen<span>:</span></h1>
                        <p className="carousel-text">Novos conceitos. Para uma nova era.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={Image4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="carousel-header">Pitmen<span>:</span></h1>
                        <p className="carousel-text">Novos conceitos. Para uma nova era.</p>
                 
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="home-page-content-container">
                <Row className="row-1">
                    <Col md={6} className="text-content-col">
                <h3 className="pitmen-trends">Knowledge Hub</h3>
                <p className="p-content-text">Disseminar conhecimento faz parte da nossa missão. Acompanhe nossos eventos.</p>
                <button type="button" className="content-btn" >Saiba mais</button>
                 
                    </Col>
                    <Col md={6} className="img-col">
                    <img
                        className="d-block w-100 carousel-img"
                        src={Image1}
                        alt="Second slide"
                    />

                    </Col>
                </Row>
                <Row className="row-2">
                    <Col md={6} className="img-col">
                    <img
                        className="d-block w-100 carousel-img"
                        src={Image2}
                        alt="Second slide"
                    />

                    </Col>
                    <Col md={6} className="text-content-col">
                <h3 className="pitmen-trends">China Desk</h3>
                <p className="p-content-text">Solidariedade, diálogo e igualdade em 2021. O que a nova era chinesa significa para os seus negócios.</p>
                <button type="button" className="content-btn" >Saiba mais</button>
                  
                    </Col>
                </Row>
                <Row className="row-3">
                <Col md={6} className="text-content-col">
                <h3 className="pitmen-trends">The Pitmen Way</h3>
                <p className="p-content-text">New times. New ways. Conheça o jeito Pitmen de impulsionar os seus negócios.</p>
                   <button type="button" className="content-btn" >Saiba mais</button>
                    </Col>
                    <Col md={6} className="img-col">
                    <img
                        className="d-block mw-100 carousel-img"
                        src={Image3}
                        alt="Second slide"
                    />

                    </Col>
                </Row>
                <Row className="row-4">
                    <Col md={6} className="img-col">
                    <img
                        className="d-block w-100 carousel-img"
                        src={Image4}
                        alt="Second slide"
                    />

                    </Col>
                    <Col md={6} className="text-content-col">
                <h3 className="pitmen-trends">Business Tech</h3>
                <p className="p-content-text">O estado da arte em Business Tech a serviço da sua empresa.</p>
                <button type="button" className="content-btn" >Saiba mais</button>
                   
                    </Col>
                   
                </Row>
            </div>
            <div className="insight-container" >
                <Container className="insight">
                    <h2>Noch keine Beiträge in dieser Sprache veröffentlicht</h2>
                    <p className="mt-2">
Bleibe dran...
</p>
                </Container>
            </div>
            <Footer />
        </>
    );
}

export default Home;
