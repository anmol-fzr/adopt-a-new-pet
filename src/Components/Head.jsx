import { Helmet } from 'react-helmet'
export default function Head({ title, desc, keywords }) {
    return (
        <Helmet>
            <title>Title | {title}</title>
            <meta name="description" content={desc || " "} />
            <meta name="keywords" content={` ${keywords || ""}`} />
        </Helmet>
    )
}