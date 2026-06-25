import React, { useState } from 'react';

const Country = ({ country, handleVisited }) => {
    return (
    <div>
      <button onClick={() => handleVisited(country)}>Add {country}</button>
    </div>
  );
};

export default Country;