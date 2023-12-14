import { IonCard, IonCardHeader,IonIcon,IonText,IonCardContent } from '@ionic/react';
import { warning } from 'ionicons/icons';


export default function PokemonCard({id,name,image,experience,weight,height,ability}) {
  return (
    <div className='card' >
    <IonCard className='ion-card' >
      <img 
      className='img-control'
      width={200}
      height={200}
      alt={name}
      src={image} />
      <IonCardContent>
        <IonCardHeader>
          <h3>{name}</h3>
        </IonCardHeader>
          <h6>N° {id}</h6>
          <p>EXP:{experience}</p>
          <p>PESO: {weight}</p>
          <p>ALTURA:
            <IonText color="primary">
                {height}
            </IonText>
            </p>
          <p>
                <IonIcon icon={warning}></IonIcon>
            <IonText color="danger">
                HAB:{ability}
            </IonText>
          </p>
        </IonCardContent>
    </IonCard>
    </div>
  )
}
