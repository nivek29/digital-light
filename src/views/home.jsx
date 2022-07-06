import { Content } from '../components/content';
import { Gallery } from '../components/gallery';
import { Signatures } from '../components/signatures';


export const Home = () => {
  // console.log(data.find(materia => materia.grado === 'Primero'));
  return (
    <div>
        <Content></Content>
        <Gallery></Gallery>
        <Signatures></Signatures>

    </div>
  );
}

