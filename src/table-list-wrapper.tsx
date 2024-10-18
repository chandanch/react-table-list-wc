// import React from "react";
import ReactDOM from "react-dom/client";
// import reactToWebComponent from "react-to-webcomponent";
import TableList from "./components/TableList";

class TableListWebComponent extends HTMLElement {
  connectedCallback() {
    let data = [];
    let columns = [];

    try {
      const dataAttr = this.getAttribute("data");
      data = dataAttr ? JSON.parse(dataAttr) : [];
    } catch (error) {
      console.error("Invalid JSON for data attribute:", error);
    }

    try {
      const columnsAttr = this.getAttribute("columns");
      columns = columnsAttr ? JSON.parse(columnsAttr) : [];
    } catch (error) {
      console.error("Invalid JSON for columns attribute:", error);
    }

    const props = { data, columns };
    const root = ReactDOM.createRoot(this);
    root.render(<TableList {...props} />);
  }
}

customElements.define("table-list-component", TableListWebComponent);
