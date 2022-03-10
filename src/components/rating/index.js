import GroupStar from '../groupStar';

export default function Rating({ text, className }) {
  return (
    <div
      className={`mb-4 flex max-h-[78px] w-full min-w-[327px] flex-col justify-center rounded-md bg-lightg-magenta p-2 sm:max-h-[56px] sm:w-full sm:max-w-[445px] sm:flex-row sm:items-center sm:p-4 ${className}`}
    >
      <GroupStar />
      <p className='text-center text-[14px] font-bold text-vd-magenta'>
        Rated 5 Stars in{text}
      </p>
    </div>
  );
}
