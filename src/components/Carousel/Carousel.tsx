import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import zdj from '../../assets/dupa.webp';
// import zdj1 from '../../assets/bluza.jpg';
// import zdj2 from '../../assets/torebka.jpg';
import styles from './Carousel.module.css';

const CustomCarousel = () => {
  return (
    <div className={styles.contentCarousel}>
      {/* <ResponsiveCarousel>
        <div>
          <img src={zdj} alt='Marcin' />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <img src={zdj1} alt='Bluza' />
          <p className='legend'>Legend 2</p>
        </div>
        <div>
          <img src={zdj2} alt='Torebka' />
          <p className='legend'>Legend 3</p>
        </div>
      </ResponsiveCarousel> */}
    </div>
  );
};

export default CustomCarousel;
