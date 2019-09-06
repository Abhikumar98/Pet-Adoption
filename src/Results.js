import React from 'react'
import Pet from './Pet';

const Results = (props) => {
    console.log(props.pets);
    
    return (
        <div className='search'>
            {props.pets.length === 0 ?
            <h1>No pets Found</h1> : props.pets.map(pet => (
                <Pet animal={pet.type} 
                     key={pet.id} 
                     name={pet.name}
                     breed={pet.breeds.primary}
                     media={pet.photos}
                     location={`${pet.contact.address.city}`}
                     id={pet.id} />)
            ) 
        }
        </div>
    )
}

export default Results;