import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

    return (
        <div>

                
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand className='me-5' href="/"><div className='fs-4'>Школьный хаб</div><div className='fs-6'>Гимназия №11</div></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className= 'me-5 ms-5' href="/timetable"><div className='fs-5'>Расписание</div></Nav.Link>
            <Nav.Link className= 'me-5 ms-5' href="/school_plan"><div className='fs-5'>План школы</div></Nav.Link>
            <Nav.Link className= 'me-5 ms-5' href="/teachers"><div className='fs-5'>Учителя</div></Nav.Link>
            <Nav.Link className= 'me-5 ms-5' href="/links"><div className='fs-5'>Ссылки</div></Nav.Link>
            <Nav.Link className= 'me-5 ms-5' href="/feedback"><div className='fs-5'>Обратная связь</div></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        </div>
    )


}

export default Header;