export default function Background() {
  return (
    <>
      <div className='absolute left-0 top-0 -z-10'>
        <img
          src='image/bg-pattern-top-desktop.png'
          className='hidden lg:block'
          alt='Wave background'
        />
        <img
          src='image/bg-pattern-top-mobile.png'
          className='block lg:hidden'
          alt='Wave background'
        />
      </div>
      <div className='absolute right-0 bottom-0 -z-10'>
        <img
          src='image/bg-pattern-bottom-desktop.png'
          className='hidden lg:block'
          alt='Wave background'
        />
        <img
          src='image/bg-pattern-bottom-mobile.png'
          className='block lg:hidden'
          alt='Wave background'
        />
      </div>
    </>
  );
}
