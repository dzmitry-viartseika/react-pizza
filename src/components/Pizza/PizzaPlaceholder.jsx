import React from 'react';
import ContentLoader from "react-content-loader";

const PizzaPlaceholder = () => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="135" cy="136" r="132" />
            <rect x="-4" y="287" rx="0" ry="0" width="269" height="29" />
            <rect x="3" y="333" rx="6" ry="6" width="260" height="68" />
            <rect x="175" y="394" rx="0" ry="0" width="0" height="12" />
            <rect x="4" y="410" rx="4" ry="4" width="66" height="32" />
            <rect x="133" y="410" rx="20" ry="20" width="128" height="51" />
        </ContentLoader>
    )
}

export default PizzaPlaceholder;
