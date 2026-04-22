const ChatWidget = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      padding: '20px',
      backgroundColor: '#007bff',
      color: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      zIndex: 1000
    }}>
      <h3 style={{ marginTop: 0 }}>Live Chat</h3>
      <p>Halo! Ada yang bisa kami bantu hari ini?</p>
      <input 
        type="text" 
        placeholder="Ketik pesan..." 
        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: 'none' }}
      />
    </div>
  );
};

export default ChatWidget;