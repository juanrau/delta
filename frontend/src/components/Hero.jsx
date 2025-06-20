export default function Hero({ title, subtitle }) {
  return (
    <header style={{
      backgroundColor: '#1A5F9E',
      color: 'white',
      textAlign: 'center',
      padding: '4rem 2rem'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{title}</h1>
      <p style={{ fontSize: '1.25rem' }}>{subtitle}</p>
    </header>
  );
}