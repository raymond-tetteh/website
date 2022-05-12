import GrayStar from '~/svg/gray-star.svg';

interface ITechnologyCard {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  name: string;
  desc: string;
  rating: string;
}

const TechnologyCard = ({ icon, name, desc, rating }: ITechnologyCard) => {
  return (
    // <div className='bg-[#202022] w-full h-min hover:scale-110 transition duration-500 ease-in-out p-4 cursor-pointer'>
    <div className='flex h-min w-full cursor-pointer rounded-lg border-2 bg-transparent p-4 transition duration-500 ease-in-out hover:scale-110'>
      <p>{icon}</p>
      <div>
        <h3>{name}</h3>

        <p className='text-s text-gray-300'>{desc}</p>

        <p className='mt-3 flex gap-2 text-xs tracking-widest text-gray-300'>
          <GrayStar className='h-5 w-5' />
          {rating}
        </p>
      </div>
    </div>
  );
};

export default TechnologyCard;
