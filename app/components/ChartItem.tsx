import { ChevronDownIcon, ChevronUpIcon, MinusIcon } from '@heroicons/react/outline';

interface Props {
  id: string
  rank: number
  rankChange: number | 'new'
  title: string
  artist: string
  count: number
}

const ChartItem = ({ id, rank, rankChange, title, artist, count }: Props) => {
  return (
    <div
      className='group w-full flex justify-between items-center p-2 hover:bg-neutral-900 cursor-pointer'
      onClick={() => {
        if (window) window.open(`https://www.youtube.com/watch?v=${id}`, '_blank')?.focus();
      }}
    >
      <div className='flex items-center gap-3'>
        <img
          src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
          alt={`${artist} ${title} 썸네일`}
          loading='lazy'
          decoding='async'
          className='aspect-video object-cover object-center w-14 md:w-20'
        />
        <span className='w-6 md:w-8 text-gray-50 font-bold text-center'>{rank}</span>

        {rankChange === 'new' && <span className='w-4 text-center text-red-500 font-medium text-sm'>N</span>}
        {rankChange > 0 && (
          <span className='text-center text-green-500 font-medium text-sm'>
            <ChevronUpIcon className='h-4 w-4' />
            {rankChange}
          </span>
        )}
        {rankChange === 0 && <MinusIcon className='h-4 w-4 text-gray-400' />}
        {rankChange < 0 && (
          <span className='text-center text-red-500 font-medium text-sm'>
            {Math.abs(rankChange as number)}
            <ChevronDownIcon className='h-4 w-4' />
          </span>
        )}
      </div>
      <div className='pl-4 flex w-1/3 flex-col truncate'>
        <span className='text-gray-50 font-normal truncate'>{title}</span>
        <span className='text-gray-400 font-normal text-sm'>{count.toLocaleString('ko-KR')}회</span>
      </div>
      <span className='flex-1 text-right text-gray-400 font-normal truncate'>{artist}</span>
    </div>
  );
};

export default ChartItem;