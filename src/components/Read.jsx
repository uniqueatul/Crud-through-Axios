import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // ✅ Fetch Data
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://68c489ab81ff90c8e61c80df.mockapi.io/fakeData")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Something went wrong while fetching data!");
        setLoading(false);
      });
  }, []);

  // ✅ Loading & Error states
  if (loading) {
    return <h3 style={{ color: "blue" }}>Loading data...</h3>;
  }

  if (error) {
    return <h3 style={{ color: "red" }}>{error}</h3>;
  }

  return (
    <div>
      <h1 style={{ color: "green" }}>Read Data</h1>

      {data.length === 0 ? (
        <p>No records found. Please add some data.</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  {/* Edit navigates to Update.jsx with ID */}
                  <button
                    style={{ marginRight: "10px" }}
                    onClick={() => navigate(`/update/${item.id}`)}
                  >
                     Edit
                  </button>

                  {/* Delete navigates to Delete.jsx with ID */}
                  <Link to={`/delete/${item.id}`}>
                    <button style={{ color: "white", background: "red" }}>
                      🗑 Delete
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <br />
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
         Add New
      </Link>
    </div>
  );
}

export default Read;
