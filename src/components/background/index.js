export default function Background() {
  return (
    <>
      <div className='absolute left-0 top-0 h-[50vh]'>
        <svg
          className='h-[232px] w-full md:h-[362px] md:w-[584px]'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient
              x1='100%'
              y1='69.24%'
              x2='9.399%'
              y2='32.157%'
              id='a'
            >
              <stop stopColor='#8A4389' stopOpacity='0' offset='0%' />
              <stop stopColor='#512051' offset='100%' />
              <stop stopColor='#512051' offset='100%' />
              <stop stopColor='#512051' offset='100%' />
            </linearGradient>
          </defs>
          <path
            d='M0 362c40.022-82.8 115.736-135.154 227.141-157.064 167.108-32.864 103.85-66.012 185.949-131.796C467.823 29.284 524.793 4.904 584 0v362H0z'
            transform='rotate(180 292 181)'
            fill='url(#a)'
            fillRule='evenodd'
            opacity='.05'
          />
        </svg>
      </div>
      <div className='absolute right-0 bottom-0 h-[50vh]'>
        <svg
          className='h-[503px] w-[375px] md:h-[673px] md:w-[1085px]'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient
              x1='100%'
              y1='69.237%'
              x2='9.399%'
              y2='32.159%'
              id='a'
            >
              <stop stopColor='#8A4389' stopOpacity='0' offset='0%' />
              <stop stopColor='#512051' offset='100%' />
              <stop stopColor='#512051' offset='100%' />
              <stop stopColor='#512051' offset='100%' />
            </linearGradient>
          </defs>
          <path
            d='M355 800c74.356-153.934 215.022-251.268 422-292 310.466-61.099 192.94-122.724 345.47-245.025C1224.157 181.442 1330 136.116 1440 127v673H355z'
            transform='translate(-355 -127)'
            fill='url(#a)'
            fillRule='evenodd'
            opacity='.05'
          />
        </svg>
      </div>
    </>
  );
}
