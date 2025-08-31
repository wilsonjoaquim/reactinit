import {getImageUrl} from './utils.jsx';

function Profile({
imageId,
name,
profession,
awards,
discovery,
imageSize = 70
}){
return (
  <section className="profile">
    <h1>{name}</h1>
    <img
      classname="avatar"
      src={getImageUrl(imageId)}
      alt={name}
      width={imageSize}
      height={imageSize}
    />
    <ul>
      <li><b>Profissão: </b> {profession}</li>
      <li><b>Premiações: {awards.length} </b>
      ({awards.join(', ')})</li>
      <li><b>Descoberta: </b>{discovery}</li>
    </ul>
  </section>
);
}

export default function Gallery(){
  return (
    <div>
      <h1>Cientistas Notáveis</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Curie"
        profession="Física e Química"
        discovery="Polonium (Elemento Químico)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davi Medal'
        ]}
      />
      <Profile
        imageId="YfeOqp2"
        name="Katsuko Saruhashi"
        profession="Geoquimico"
        discovery="Um metodo para medicao de dioxido de carbono"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
      />
    </div>
  );
}

