import PokemonCard from "./PokemonCard";
import { IonCol, IonGrid, IonRow } from '@ionic/react';

function Home() {

  return (
    <>    
    <IonGrid>
        <IonRow>
          <IonCol>
            <PokemonCard />
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Home;