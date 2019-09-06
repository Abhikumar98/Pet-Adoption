import React, { useState, useEffect } from 'react';
import './style.css';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results';


const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animals', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breeds', '', breeds);
  const [pets, setpets] = useState([]);

  async function requestPets(){
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    })

    setpets(animals || []);
  }
  
  useEffect(()=>{
    setBreeds([]);
    setBreed('');

    pet.breeds(animal).then(({ breeds: breedAPI }) => {
      const breedStrings = breedAPI.map(({ name }) => name);
      setBreeds(breedStrings);
    })
  }, [animal, breed, setBreed])

  return (
    <div className='search-params' >
      <form onSubmit={(e)=>{
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor='location'>
          <input type='text' value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Location please' />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button type='submit'>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
}

export default SearchParams;