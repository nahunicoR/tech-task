
import { IonLoading } from '@ionic/react';


function Loader() {
  return (
    <div className="loader-container">
      <IonLoading className="custom-loading" is-open={true} trigger="open-loading" duration={3000} spinner="circles" />
    </div>
  );
}
export default Loader;