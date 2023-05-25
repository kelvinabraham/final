import React from "react";

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <thead>
      <tr style={{ borderBottom: "1px solid #dcdced" }}>
        <td width={"30%"} style={{ fontWeight: 500, marginLeft: "90px" }}>
          Name
        </td>
        <td width={"100%"} style={{ fontWeight: 500 }}>
          URL
        </td>
        <td width={"15%"} style={{ fontWeight: 500 }}>
          Remove
        </td>
      </tr>
    </thead>
  );
};

const TableBody = ({ linkData, removeLink }) => {
  // boilerplate table body functional component
  // we use Array.map to create table rows from LinkData passed via linkData

  const rows = linkData.map((row, index) => {
    return (
      <tr key={index} style={{ borderBottom: "2px solid #dcdced" }}>
        <td width={"30%"} style={{ padding: "15px 0px", fontWeight: 450 }}>
          {row.name}
        </td>
        <td width={"50%"} style={{ padding: "15px 0px" }}>
          <a style={{ color: "#318CE7" }} href={row.links} target="_blank">
            {row.links}
          </a>
        </td>
        <td width={"15%"} style={{ padding: "0px 0px" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "red",
              color: "black",
              border: "none",
              fontSize: "13px",
              fontWeight: "bold",
              padding: "5px",
              cursor: "pointer",
              width: "70px",
              borderRadius: "3px",
              height: "35px",
            }}
            onClick={() => removeLink(index)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = ({ linkData, removeLink }) => {
  {
    /*TODO - return <table> component, TableHeader and TableBody  and pass props!*/
    return (
      <div style={{ marginLeft: "210px" }}>
        <table style={{ width: "82%", borderCollapse: "collapse" }}>
          <TableHeader />
          <TableBody linkData={linkData} removeLink={removeLink} />
        </table>
      </div>
    );
  }
};

export default Table;
