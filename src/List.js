import React from "react";

const List = ({ people }) => {
  return (
    <>
      {/* create a map for printing name age and image of the person */}
      {people.map((person) => (
        <article key={person.id} className="person">
          <h4>{person.name}</h4>
          <p>{person.age}</p>
          <img src={person.image} alt={person.name} />
        </article>
      ))}
    </>
  );
};

export default List;
