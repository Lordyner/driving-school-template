import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useContext, useEffect, useState } from 'react'
import GlobalContext from '@/Store/GlobalContext'
import { getLogger } from '@/Logging/log-util'
import { useRouter } from 'next/router'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import Values from '@/Components/Values'
import Reviews from '@/Components/Reviews'
import Contact from '@/Components/Contact'
import CTAReminder from '@/Components/CTAReminder'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ reviews }) {
  /* Logger */
  const logger = getLogger('Meeting');
  logger.debug('Home page rendered');

  /* State */
  const [screenWidth, setScreenWidth] = useState();

  /* Context */
  const { setIsMobileResolution } = useContext(GlobalContext);
  const { setIsTabletResolution } = useContext(GlobalContext);
  const { setIsLaptopResolution } = useContext(GlobalContext);
  const { setIsDesktopResolution } = useContext(GlobalContext);
  const { tabletResolution, laptopResolution, desktopResolution } = useContext(GlobalContext);
  const { setIsLoading } = useContext(GlobalContext);
  const { isMenuOpen } = useContext(GlobalContext);

  /* Router */
  const router = useRouter();

  /* Functions */
  const handleMenuDisplay = () => {
    setScreenWidth(window.screen.width);

    const isMobile = screenWidth < tabletResolution;
    const isTablet = screenWidth >= tabletResolution && screenWidth < laptopResolution;
    const isLaptop = screenWidth >= laptopResolution && screenWidth < desktopResolution;
    const isDesktop = screenWidth >= desktopResolution;

    setIsMobileResolution(isMobile);
    setIsTabletResolution(isTablet);
    setIsLaptopResolution(isLaptop);
    setIsDesktopResolution(isDesktop);
  }

  useEffect(() => {
    // Handle menu display
    handleMenuDisplay();
    window.addEventListener('resize', handleMenuDisplay);

    // Handle loading spinner
    router.events.on("routeChangeStart", () => setIsLoading(true));
    router.events.on("routeChangeComplete", () => setIsLoading(false));
  }, [screenWidth])


  return (
    <>
      <Head>
        <title>Template Next.js</title>
        <meta name="description" content="Template to create next.js app with ccommons features quickly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`overlay-burger-menu ${isMenuOpen ? 'isActive' : ''}`} />
      <main className='main-container'>
        <Navbar />
        <Hero />
      </main>
      <Values />
      <Reviews reviews={reviews} />
      <CTAReminder />
      <Contact />
    </>
  )
}

export async function getStaticProps(context) {
  // Fetch reviews for a place id and with a googe API key
  const logger = getLogger('Reviews');
  logger.info('Method fetching reviews');
  let fetchedReviews = null;
  let response = null;

  try {
    response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.PLACE_ID}&key=${process.env.PLACE_API_KEY}&language=fr`);
    const data = await response.json();
    fetchedReviews = data.result.reviews;
    logger.info("Reviews fetched successfully");
  } catch (error) {
    logger.error("Error while fetching reviews : " + JSON.stringify(error));
  }
  let mockedReviews = []
  return {
    props: {
      reviews: mockedReviews,
    },
    // Revalidate data every day
    revalidate: 86400,
  };
}