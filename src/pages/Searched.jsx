import {React,useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Searched() {

    const [searchedRecipies,setSearchedRecipies] = useState([])
    let params = useParams()
    const getSearched=async (name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=42a3825d03724fe2aa52250391758be2&query=${name}`)
        const recipes = await data.json()
        setSearchedRecipies(recipes.results)
    }
    useEffect(()=>{
        getSearched(params.search)
    },[params.search])
  return (
    <Grid>
        {searchedRecipies.map((item)=>{
            return(
                <Card key={item.id}>
                    <Link to={'/recipe/'+item.id}>
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>  
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
    grid-gap:3rem;

`;

const Card = styled.div`
    img{
        width:80%%;
        border-radius:2rem;
        margin-left:2rem;
        border:1px solid black;
        object-fit:cover;
        cursor:pointer;
    }
    a{
        text-decoration:none;
    }
    h4{
        text-align:center;
        padding:1rem;
        cursor:pointer;
    }
`


export default Searched