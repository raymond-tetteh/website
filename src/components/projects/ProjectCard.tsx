interface IProjectCard {
  name: string;
  technology: string;
  description: string;
  rating: string;
}

const ProjectCard = ({
  name,
  technology,
  description,
  rating,
}: IProjectCard) => {
  return (
    // <div className='bg-[#202022] w-full hover:scale-110 transition duration-500 p-8 cursor-pointer flex flex-col gap-2 shadow-md'>
    <div className='flex w-full cursor-pointer flex-col gap-2 rounded-lg border-2 bg-transparent p-8 shadow-md transition duration-500 hover:scale-110'>
      <p className='text-sm font-bold uppercase'>{technology}</p>

      <h3>{name}</h3>

      <p className='text-gray-300'>{description}</p>

      <p className='flex gap-2 text-sm tracking-widest text-gray-300'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='#808080'
        >
          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
        </svg>
        {rating}
      </p>
    </div>
  );
};

export default ProjectCard;
