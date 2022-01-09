import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Component/Banner/Banner';
import BannerItems from './Component/BannerItems/BannerItems';
import Services from './Component/Services/Services';
import Testimonials from './Component/Testimonials/Testimonials';

function App() {
  return (
    <div className="">
        <Banner></Banner>
        <BannerItems></BannerItems>
        <Services></Services>
        <Testimonials></Testimonials>
    </div>
  );
}

export default App;
