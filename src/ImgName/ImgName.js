import './ImgName.css';

export function ImgName(props) {
  return (
    <section className="imgWrap">
      <h2>{props.myName}</h2>
      <button onClick={props.handleClick} type="button">
        {props.myName}
      </button>
    </section>
  );
}
