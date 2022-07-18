import ProgressBar from 'react-animated-progress-bar';

export function ProgressBars({ text, percent }) {
  return (
    <div className="w-[25%]">
      <h1 className="text-lightGray text-3xl font-bold mb-3">{text}</h1>
        <ProgressBar 
          width="100%"
          height="2rem"
          rect
          percentage={percent}
          rectBorderRadius="20px"
          trackPathColor="transparent"
          bgColor="#D9042B"
          trackBorderColor="#D9042B"
          defColor={{
            fair: '#D9042B',
            good: '#D9042B',
            excellent: '#D9042B',
            poor: '#D9042B',
          }}
        />
    </div>
  )
}