import {useContext} from 'react';
import { PokemonContext } from './context/PokemonContext';
import { IonCol, IonGrid, IonRow, IonButton } from '@ionic/react';
import PokemonCard from './components/PokemonCard';
import Loader from './components/Loader';


function App() {
  const {allPokemons,loading,onClickLoad} = useContext(PokemonContext);


  return (
    <div className='full-container'>  
      <IonGrid 
        width={100}
        justifyContent={'center'}
        alignItems={'center'}>
        <IonRow >
            {loading ? 
            (<Loader /> 
            ): (allPokemons.map(pokemon =>(
                    <IonCol key={pokemon.id}>
                    <PokemonCard 
                      name={pokemon.name}
                      id={pokemon.id}
                      image={pokemon.sprites.other.dream_world.front_default}
                      weight={pokemon.weight}
                      height={pokemon.height}
                      experience={pokemon.base_experience}
                      ability={pokemon.abilities[0].ability.name}
                      />
            </IonCol>
            )))
                  }
        </IonRow>
      </IonGrid> 
      {loading ? ('')
      :
        <IonButton 
            disabled={loading ? true: false}
            className='button-carga'
            size="large"
            shape="round"
            fill="solid" 
            color="danger"
            onClick={onClickLoad}
            >

            {allPokemons ? 'Cargar mas' : 'Llegamos al final'}
      </IonButton> 
      }
    </div>
  )
}

export default App;
