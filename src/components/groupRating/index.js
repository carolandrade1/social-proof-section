import Rating from "../rating";

export default function GroupRating() {
  return (
    <section className='flex w-full flex-col items-center md:mt-[18px] md:basis-1/2 lg:basis-3/5 lg:items-end'>
      <Rating text=' Reviews' className='lg:mr-[96px]' />
      <Rating text=' Report Guru' className='lg:mr-[48px]' />
      <Rating text=' BestTech' />
    </section>
  );
}
