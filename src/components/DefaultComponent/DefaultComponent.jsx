import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

const DefaultComponent = (props) => {
    const { children } = props
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <HeaderComponent />
            <div style={{ minHeight: '100vh' }}>
                {children}
            </div>
            <FooterComponent />
        </div>
    );
};

export default DefaultComponent;