import Image from 'next/image';
import imageAvatar from '@/public/image-avatar.webp';

const Card = ({
  image,
  tagName,
  date,
  title,
  description,
}: {
  image: string;
  tagName: string;
  date: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white w-[327px] sm:w-[384px] sm:h-[522px] rounded-[20px] flex flex-col p-300 shadow-dark-100 hover:shadow-dark-200 gap-6 group transition-shadow duration-300 hover:cursor-pointer border border-gray-950">
      <div className="relative h-[200px] rounded-[10px]">
        <Image
          src={image}
          alt="Illustration article"
          fill
          className="rounded-[10px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 text-black">
        <span className="bg-yellow text-gray-950 py-1 px-3 w-fit rounded-[4px] font-bold">
          {tagName}
        </span>
        <p className="text-sm tracking-normal leading-[150%] font-medium text-gray-950">
          Published {date}
        </p>
        <h1 className="text-2xl font-bold tracking-normal leading-[150%] text-gray-950 group-hover:text-[#f4d04e] transition-colors duration-300">
          {title}
        </h1>
        <p className="text-base tracking-normal leading-[150%] font-medium text-gray-500">
          {description}
        </p>
      </div>
      <div className="text-sm tracking-normal leading-[150%] font-black flex items-center gap-3">
        <Image src={imageAvatar} width={32} height={32} alt="Avatar image" />
        <p>Greg Hooper</p>
      </div>
    </div>
  );
};

export default Card;
