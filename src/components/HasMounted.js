import React, { useState, useEffect } from 'react'

// https://joshwcomeau.com/react/the-perils-of-rehydration/

// Usage
// <ClientOnly>
//   <Navigation />
//  </ClientOnly>

export default function HasMounted({ children, ...delegated }) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }
    return (
        <div {...delegated}>
        {children}
        </div>
    );
}