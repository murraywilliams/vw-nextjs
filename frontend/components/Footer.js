import Link from "next/link";

const linkStyle = {
    display: 'inline-block',
    position: 'relative',
    fontSize: '12px',
    paddingLeft: '14px',
    textDecoration: 'none',
    color: 'rgb(100, 204, 201)',
};
const footerBarStyle = {
    color: 'rgb(255, 255, 255)',
    background: 'rgb(51, 63, 72)',
    padding: '0px 20px',
}

const Footer = () => (
    <div style={footerBarStyle}>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '20px 0px',
        }}>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}>
                <Link href='/'><a style={linkStyle}>Canada</a></Link>
                <Link href='/'><a style={linkStyle}>India</a></Link>
                <Link href='/'><a style={linkStyle}>South Africa</a></Link>
                <Link href='/'><a style={linkStyle}>United Kingdom</a></Link>
                <Link href='/'><a style={linkStyle}>United States</a></Link>
            </div>
            <div></div>
        </div>
    </div>
);

export default Footer;
