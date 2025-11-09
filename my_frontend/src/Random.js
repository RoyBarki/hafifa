import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Random() {
  const navigate = useNavigate();

  useEffect(() => {
    // Call backend
    fetch("http://127.0.0.1:5000/random")
      .then(res => res.json())
      .then(data => {
        // Redirect based on backend response
        if (data.color === "blue") navigate("/blue");
        else if (data.color === "red") navigate("/red");
      })
      .catch(err => console.error(err));
  }, [navigate]);

  return <h1>Loading...</h1>;
}

export default Random;