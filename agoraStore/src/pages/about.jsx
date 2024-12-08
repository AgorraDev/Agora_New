import Container from 'react-bootstrap/Container';
import '../style/about.css';
import Navigation from '../components/nav';
import Footer from '../components/footer';


function About() {

    return (
        <Container fluid className='pagebg'>
            <div className='container product-bg'>
                <div className='row'>
                    <div className='col d-flex justify-content-center mt-5'>
                        <h2 className='fw-bold'>About</h2>
                    </div>

                </div>
            </div>
        </Container>

    );
}

export default About;