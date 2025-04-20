import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to the CRUD App</h1>
        <p style={styles.subtitle}>Your all-in-one management solution.</p>
      </header>
    </div>
  );
};

const styles = {
  container: {
    lineHeight: "1.6",
    color: "#333",
    padding: "20px",
  },
  header: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "40px 20px",
    textAlign: "center",
    borderRadius: "8px",
    marginBottom: "30px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#eee",
  },
};

export default Home;
