import React, { useState, useEffect } from "react";
import axios from "axios";
//import components
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

export default function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  console.log("first render");

  // Get the Monsters from the API
  useEffect(() => {
    const getMonsters = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");

      setMonsters(result.data);
      console.log("useEffect get Monsters render");
    };
    getMonsters();
  }, []);

  // After getting the Monsters from the API filter it by search field
  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    );
  }, [searchField, monsters]);

  //log out filtered monsters array
  console.log(filteredMonsters);

  //return list
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder={"search monsters"}
        handleChange={(e) => setSearchField(e.target.value)}
      />
      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
}
