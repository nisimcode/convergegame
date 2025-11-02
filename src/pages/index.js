import { useEffect, useState } from 'react';

export default function Home() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    if (!loaded) return null;

    return (
        <main>
            <h1>Converge</h1>
            <p>Coming soon...</p>
        </main>
    );
}
