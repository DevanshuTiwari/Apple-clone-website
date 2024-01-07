
import Header from "../Components/Header";
import Info from "../Components/Info";
import Section from "../Components/Section";
import Products from "../Components/Products";
import { productsSection} from "../Constants/constant";


const Home = () => {
    return(
        <>
            <Header />
            <Info />
            <Section data = {productsSection.iphonePro}/>
            <Section data = {productsSection.iphone}/>
            <Section data = {productsSection.macbookpro}/>
            <Products />
        </>
        )}

export default Home;