import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, name, type, image }) => {
    const defaultTitle = "Asgard Pharma | Fabless Biologics & Vaccine Manufacturing";
    const defaultDescription = "Asgard Pharmaceuticals Inc. - Producing affordable pharmaceuticals through global innovation and Canadian infrastructure.";
    const defaultKeywords = "Biologics, Vaccines, Manufacturing, Pharma, Canada, Edmonton, Fabless";
    const defaultImage = ""; // Add a default OG image URL if available later
    const siteUrl = "https://asgardpharma.ca"; // Replace with actual URL

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title ? `${title} | Asgard Pharma` : defaultTitle}</title>
            <meta name='description' content={description || defaultDescription} />
            <meta name='keywords' content={keywords || defaultKeywords} />

            {/* End standard metadata tags */}

            {/* Facebook tags */}
            <meta property="og:type" content={type || 'website'} />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:url" content={siteUrl} />
            {/* End Facebook tags */}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name || "Asgard Pharma"} />
            <meta name="twitter:card" content={type || "summary_large_image"} />
            <meta name="twitter:title" content={title || defaultTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            {/* End Twitter tags */}
        </Helmet>
    );
};

export default SEO;
