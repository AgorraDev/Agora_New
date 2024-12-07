import Container from 'react-bootstrap/Container';
import '../style/about.css';
import Navigation from '../components/nav';
import Footer from '../components/footer';


function About() {

    return (
        <>
            {/*Bootstrap link*/}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"/>
    {/*Links End*/}

        <Container fluid className='pagebg'>
            <div className='container product-bg'>
                <div className='row'>
                    <div className='col d-flex justify-content-center mt-5'>
                        <h2 className='fw-bold'>About</h2>
                    </div>

                </div>
            </div>
        </Container>
        <Footer />
        </>
    );
}

export default About;