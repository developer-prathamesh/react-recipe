import {React,useState,useEffect} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

function Cuisine() {

    const [cuisine,setCuisine] = useState([])
    let params = useParams()
    const getCuisine=async (name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=42a3825d03724fe2aa52250391758be2&cuisine=${name}`)
        const recipies = await data.json()
        setCuisine(recipies.results)
    }
    useEffect(()=>{
        getCuisine(params.type)
        console.log(params.type)
    },[params.type])
  return (
    <Grid animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:0.5}}>
        {cuisine.map((item)=>{
            return (
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


const Grid = styled(motion.div)`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
    grid-gap:3rem;

`;

const Card = styled.div`
    img{
        width:80%;
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


export default Cuisine