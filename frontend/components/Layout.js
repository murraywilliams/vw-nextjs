import Header from "./Header";
import Menu from "../components/Menu.js";
import Footer from "./Footer";

const layoutStyle = {

};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
        <Footer />
    </div>
);

export default Layout;
