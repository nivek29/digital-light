import { Content } from '../components/content';
import { Gallery } from '../components/gallery';
import {data} from '../data/data'

export const Home = () => {
  // console.log(data.find(materia => materia.grado === 'Primero'));
  return (
    <div>
        <Content></Content>
        <Gallery></Gallery>
    </div>
  );
}

