import { useEffect, useState } from "react";
import supabase from "./supabaseClient";

export default function App() {
  const [name, setName] = useState("");      // single input value
  const [names, setNames] = useState([]);    // list of names

  // READ operation
  async function fetchNames() {
    const { data } = await supabase.from("people").select("*");
    setNames(data);
  }

  // CREATE operation
  async function addName() {
    await supabase.from("people").insert({ name });
    setName("");
    fetchNames();
  }

  // DELETE operation
  async function deleteName(id) {
    await supabase.from("people").delete().eq("id", id);
    fetchNames();
  }

  // UPDATE operation
  async function updateName(id, newName) {
    await supabase.from("people").update({ name: newName }).eq("id", id);
    fetchNames();
  }

  useEffect(() => {
    fetchNames();
  }, []);

  return (
    <div>
      <h1>Names CRUD</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <button onClick={addName}>Add</button>

      <ul>
        {names.map((n) => (
          <li key={n.id}>
            {n.name}
            <button onClick={() => deleteName(n.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
