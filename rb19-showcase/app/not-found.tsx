export default function NotFound() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#000',
            color: '#fff',
            fontFamily: 'system-ui, sans-serif'
        }}>
            <h1 style={{ fontSize: '4rem', margin: 0 }}>404</h1>
            <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>Page Not Found</p>
            <a
                href="/"
                style={{
                    marginTop: '2rem',
                    color: '#00BFFF',
                    textDecoration: 'none',
                    fontSize: '1.2rem'
                }}
            >
                ← Back to Home
            </a>
        </div>
    );
}
