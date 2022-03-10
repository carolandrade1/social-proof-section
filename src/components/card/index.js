export default function Card({srcPhoto, title, description, className}) {
  return (
    <article className={`max-h-[248px] min-w-[327px] rounded-md bg-vd-magenta p-8 text-[14px] sm:max-h-[234px] ${className}`}>
      <div className='mb-7 flex space-x-4'>
        <img
          src={srcPhoto}
          alt='Profile photo'
          loading='lazy'
          className='h-10 rounded-full'
        />
        <div>
          <header className='font-bold text-white'>{title}</header>
          <span className='text-s-pink'>Verified Buyer</span>
        </div>
      </div>
      <p className='font-medium text-white'>
        "{description}"
      </p>
    </article>
  );
}
