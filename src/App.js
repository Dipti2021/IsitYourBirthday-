import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Reset</button>
        {/* click a button to relod the birthdays */}
        <button onClick={() => setPeople(data)}>Reload</button>
      </section>
    </main>
  );
}

export default App;
