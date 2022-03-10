import Background from '../src/components/background';
import Footer from '../src/components/footer';
import GroupCards from '../src/components/groupCards';
import GroupRating from '../src/components/groupRating';

export default function Home() {
  return (
    <div className='relative grid min-h-[100vh] w-screen place-content-center font-sans lg:h-screen'>
      <Background />
      <div className='w-full p-5 pt-[80px] sm:max-w-[1110px] lg:p-1'>
        <section className='mb-12 flex flex-col justify-center md:flex-row md:space-x-1 lg:mb-10'>
          <header className='mb-11 md:basis-1/2 lg:basis-2/5'>
            <h1 className='mb-6 max-w-prose text-center text-3xl font-bold text-vd-magenta sm:text-5xl md:text-left'>
              10,000+ of our users love our products.
            </h1>
            <p className='text-center text-[15px] text-darkg-magenta md:max-w-prose md:text-left'>
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </header>
          <GroupRating />
        </section>
        <GroupCards />
      </div>
      <Footer />
    </div>
  );
}
