export default function Background() {
  return (
    <>
      <div className='absolute left-0 top-0'>
        <img src='image/bg-pattern-top-desktop 1.png' className='hidden lg:block' alt='Wave background' />
        <img src='image/bg-pattern-top-mobile 1.png' className='block lg:hidden' alt='Wave background' />
      </div>
      <div className='absolute right-0 bottom-0'>
        <img src='image/bg-pattern-bottom-desktop 1.png' className='hidden lg:block' alt='Wave background' />
        <img src='image/bg-pattern-bottom-mobile 1.png' className='block lg:hidden' alt='Wave background' />
      </div>
    </>
  );
}
