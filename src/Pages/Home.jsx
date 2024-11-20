
import Blog from '../Components/Blog';
import CounterArea from '../Components/CounterArea';
import Courses from '../Components/Courses';
import Department from '../Components/Department';
import EnrollMent from '../Components/EnrollMent';
import Events from '../Components/Events';
import Gallery from '../Components/Gallery';
import Intro from '../Components/Intro';
import LatestVideo from '../Components/LatestVideo';
import Offer from '../Components/Offer';
import Teachers from '../Components/Teachers';
import Testimonials from '../Components/Testimonials';
import WhyChooseUs from '../Components/WhyChooseUs';
import About from './../Components/About';

const Home = () => {
  return (
    <div>
      <Intro />
      <About />
      <CounterArea />
      <Courses />
      <LatestVideo />
      <Teachers />
      <WhyChooseUs />
      <Gallery />
      <Offer />
      <Events />
      <EnrollMent />
      <Department />
      <Testimonials />
      <Blog />
    </div>
  );
};

export default Home;