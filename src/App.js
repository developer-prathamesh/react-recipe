
import './App.css';

import Pages from './pages/Pages';
import Category from './components/Category';
import {BrowserRouter} from 'react-router-dom'
import Search from './components/Search'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {GiKnifeFork} from 'react-icons/gi'


// 

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav>
        <GiKnifeFork></GiKnifeFork>
        <Logo to={"/"}>delicious</Logo>
      </Nav>
        <Search></Search>
        <Category></Category>
        <Pages></Pages>

    </BrowserRouter>

    </div>
  );
}

const Logo = styled(Link)`
  text-decoration:none;
  font-size:1.5rem;
  font-weight:600;
  font-family:  font-family: 'Montserrat', sans-serif;
`

const Nav = styled.div`
  ${'' /* padding:4rem 0rem; */}
  margin-top:2rem;
  display:flex;
  justify-content:flex-start;
  align-item:center;
  margin-left:3rem;

  svg{
    font-size:2rem;
  }
`
export default App;
