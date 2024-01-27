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
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ reviews, mapBase64 }) {
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
    console.log()
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
  logger.info('Method fetching reviews and map');
  let fetchedReviews = null;
  let response = null;
  // try {
  //   response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.PLACE_ID}&key=${process.env.PLACE_API_KEY}&language=fr`);
  //   const data = await response.json();
  //   fetchedReviews = data.result.reviews;
  //   logger.info("Reviews fetched successfully : " + JSON.stringify(fetchedReviews));
  // } catch (error) {
  //   logger.error("Error while fetching reviews : " + JSON.stringify(error));
  // }
  let mockedReviews = [
    {
      "author_name": "Fatouma Wankoye",
      "author_url": "https://www.google.com/maps/contrib/109931931571146739390/reviews",
      "language": "fr",
      "original_language": "fr",
      "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocIulWgjCiZqQI-jJMG-S0dd5BIB9pEsJsTAJmY2eFUt=s128-c0x00000000-cc-rp-mo",
      "rating": 5,
      "relative_time_description": "il y a 3 mois",
      "text": "Excellente auto-├®cole ! Mes heures de conduite ce sont tr├¿s bien pass├®s, les moniteurs sont ├á votre ├®coute, ils vous rassurent et vous soutiennent.nTr├¿s belle exp├®rience.",
      "time": 1697983434, "translated": false
    },
    {
      "author_name": "el houssine Hanyn",
      "author_url": "https://www.google.com/maps/contrib/109838405056524115833/reviews",
      "language": "fr",
      "original_language": "fr",
      "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocIozHmLzhJKt7qRzZnjAVKflmrXQfaVPUxnCKlbkxPQ=s128-c0x00000000-cc-rp-mo-ba2",
      "rating": 5,
      "relative_time_description": "il y a moins d'une semaine",
      "text": "Excellente auto ├®cole j'ai pass├® mon permis acc├®l├®r├® rapidement moniteur tr├¿s p├®dagogue, appliqu├®e et tr├¿s professionnel gr├óce a sa je l'ai eu du premier coup sans merci encore",
      "time": 1705942136,
      "translated": false
    },
    {
      "author_name": "marieloue Leforestier",
      "author_url": "https://www.google.com/maps/contrib/105331045337264701275/reviews",
      "language": "fr",
      "original_language": "fr",
      "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocKjDyH5cAQzufZxt9KSm6RhUCalTcT9uln9b246F26n=s128-c0x00000000-cc-rp-mo",
      "rating": 5,
      "relative_time_description": "il y a 5┬ámois",
      "text": "Auto ├®cole que je recommande, lÔÇÖ├®quipe est au top, le moniteur nous apprend dans la p├®dagogie et la bienveillance. Nos heures sont bien plac├®s et lÔÇÖ├®quipe a tout fait pour que je r├®ussisse mon permis ­ƒñØ­ƒÅ╝­ƒÿî merci ├á eux ! ­ƒ½Â­ƒÅ¢",
      "time": 1690974529,
      "translated": false
    },
    {
      "author_name": "Constant. C",
      "author_url": "https://www.google.com/maps/contrib/100289779129696010013/reviews",
      "language": "fr",
      "original_language": "fr",
      "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjUUxaoQNGgnBLo7DtSSLv09LFVfwdgqxvsV9RoFGoNtQB7U=s128-c0x00000000-cc-rp-mo-ba3",
      "rating": 5,
      "relative_time_description": "il y a 3┬ámois",
      "text": "Super Auto-├®cole !nJe suis arriv├®e l├á-bas apr├¿s 28h de conduite, beaucoup de mauvais reflexe ├á cause dÔÇÖun mauvais moniteur et un essai rat├® pour lÔÇÖexamen du permis mais en 12h de conduite, ils ont su me redonner confiance, enlever une grosse partie de mes mauvais r├®flexes et jÔÇÖai d├®sormais le permis grace aux deux montieurs.nEncore merci infiniment !",
      "time": 1697958167,
      "translated": false
    },
    {
      "author_name": "kenza vonck",
      "author_url": "https://www.google.com/maps/contrib/106533615458208430434/reviews",
      "language": "fr",
      "original_language": "fr",
      "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocK-144hQnj6xZ2tUdwYYUQzmH-YyR9-u6kHUcGzwFx7=s128-c0x00000000-cc-rp-mo",
      "rating": 5,
      "relative_time_description": "il y a 3┬ámois",
      "text": "Parfait, Marvin est un tr├¿s bon moniteur il nous apprend vite et nous met rapidement en confiance.nL'auto-├®cole est arrangeante pour les horaires ...nJe recommande ├á 100 pourcent",
      "time": 1697877590,
      "translated": false
    }]

  return {
    props: {
      reviews: mockedReviews
    },
    // Revalidate data every day
    revalidate: 86400,
  };
}