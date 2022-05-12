interface ITechnologyCard {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  name: string;
  desc: string;
}

const TechnologyCard = ({ icon, name, desc }: ITechnologyCard) => {
  return (
    // <div className='bg-[#202022] w-full h-min hover:scale-110 transition duration-500 ease-in-out p-4 cursor-pointer'>
    <div className='flex h-min w-full cursor-pointer rounded-lg border-2 bg-transparent p-4 transition duration-500 ease-in-out hover:scale-110'>
      <p>{icon}</p>
      <div>
        <h3>{name}</h3>

        <p>{desc}</p>
      </div>
    </div>
  );
};

export default TechnologyCard;
