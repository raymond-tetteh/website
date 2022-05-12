import GrayStar from '~/svg/gray-star.svg';

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
      <p className='text-xs font-bold uppercase tracking-widestt'>
        {technology}
      </p>

      <h3>{name}</h3>

      <p className='text-sm text-gray-300'>{description}</p>

      <p className='flex gap-2 text-xs tracking-widest text-gray-300'>
        <GrayStar className='h-5 w-5' />
        {rating}
      </p>
    </div>
  );
};

export default ProjectCard;
