import { createRoot } from "react-dom/client";
import TableList from "./components/TableList";

const data = [
  { name: "Thomas", surname: "Goldman" },
  { name: "Susie", surname: "Quattro" },
];

const columns = ["name", "surname"];

const App = () => (
  <div>
    <h1>React Grid Development mode</h1>
    <TableList data={data} columns={columns} />
  </div>
);

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

export default App;
