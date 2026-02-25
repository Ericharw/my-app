import React from 'react';

export default function About() {
  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: 'Inter, sans-serif', 
      margin: '0 auto' 
    }}>
      <h1 style={{ borderBottom: '2px solid #eaeaea', paddingBottom: '10px' }}>
        About Me
      </h1>
      
      <div style={{ 
        marginTop: '30px',
        display: 'grid', 
        gridTemplateColumns: '180px 20px auto', 
        rowGap: '15px', 
        fontSize: '1.1rem'
      }}>
        {}
        <div style={{ fontWeight: 'bold' }}>Nama Mahasiswa</div>
        <div>:</div>
        <div>Ericha Rizki Wardani</div>

        {}
        <div style={{ fontWeight: 'bold' }}>NIM</div>
        <div>:</div>
        <div>2341720202</div>

        {}
        <div style={{ fontWeight: 'bold' }}>Program Studi</div>
        <div>:</div>
        <div>D-IV Teknik Informatika</div>
      </div>
    </div>
  );
}
