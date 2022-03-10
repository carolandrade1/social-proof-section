import Card from '../card';

export default function GroupCards() {
  return (
    <div className='lg:max-h[265px] flex flex-col space-y-6 lg:flex-row lg:space-x-7 lg:space-y-0'>
      <Card
        srcPhoto='image/image-colton.jpg'
        title='Colton Smith'
        description='"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'
      />
      <Card
        srcPhoto='image/image-irene.jpg'
        title='Irene Roberts'
        description='"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'
        className='lg:translate-y-4'
      />
      <Card
        srcPhoto='/image/image-anne.jpg'
        title='Anne Wallace'
        description='"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'
        className='lg:translate-y-8'
      />
    </div>
  );
}
