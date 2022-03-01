import react from "react";
import Rating from "./Rating";
import Coments from "./Coments"
import "./styles.css";



export default class MovieList extends react.Component{
    render() {
        const  movies = [{title: 'Fistful of Vengeance', image: 'assest/Fistful of Vengeance1.png ', description: 'Movie 1 description:' },
                         {title: 'The privilege', image: 'assest/The Privilege.png', description: 'Movie 2 description go here'  },
                         {title: 'Wu assasin', image: 'assest/Wu assassin.png', description: 'Movie 3 description go here' },
                         {title: 'Forgive Us Our Trespasses', image: 'assest/Forgive Us Our Trespasses.png', description: 'Movie 4 description go here' }];
        return(
            <>
            <div className="p-2 bd-highlight bg-dark text-white"> 
                {movies.map((elt, idx)=> 
                 <div key = {idx}>
                    <div>
                        movie {idx + 1}: <h1>{elt.title}</h1>
                        <div>
                            <img src={elt.image} className="poster"  alt="poster" />
                        </div>
                        <div>
                            <p>{elt.description}</p>
                        </div>
                    </div>
                    <Coments/>
                    <Rating/>
                    
                </div>
              
                
                )};
            </div>
            
            </>
            
        );
    }
}