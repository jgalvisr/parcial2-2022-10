import React from "react";

export const PokemonRow = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>
        <img src={props.ThumbnailImage} width="150px"/>
      </td>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.height}</td>
      <td>{props.weight}</td>
      <td>
        {props.type.map(t => <span className="badge bg-secondary">{t}</span>)}
      </td>
    </tr>
  );
}