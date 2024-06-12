import React from 'react';
import { certificatesList } from '../../../data/data';

const Certificates = () => {
  const { certificateList } = certificatesList();

  return (
     <div className="certificates-container" style={{ height: '40rem', overflowY: 'auto', width:"35rem" }}>
      {certificateList.map(({ image, alt }, index) => (
        <img key={index} src={image} alt={alt} style={{ height: '30rem', maxWidth: '100%', display: 'block' }} />
      ))}
    </div>
  );
}

export default Certificates;
