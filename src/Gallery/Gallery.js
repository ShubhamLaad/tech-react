import { people } from './data';

function Profile({ data }) {
  return (
    <div>
      <h2>{data.name}</h2>
      <img src={`https://i.imgur.com/${data.imageId}.jpg`} alt="Kathero" />
    </div>
  );
}

export function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      {people.map((data) => (
        <Profile data={data} key={data.id} />
      ))}
    </section>
  );
}
