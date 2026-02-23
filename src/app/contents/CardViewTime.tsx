import { Watch } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext';
import FormatClock from './FormatClock';

const CardViewTime = ({ message }) => {
  const { language } = useLanguage();
  return (
    <div className="flex gap-1">
      <div className="flex items-center">
        <Watch />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex">
          {language === 'en' && <div className="flex justify-start w-[40px]">From</div>}
          <FormatClock messageClock={message.startTime} />
          {language === 'ko' && ' 부터'}
        </div>
        <div className="flex">
          {language === 'en' && <div className="flex justify-start w-[40px]">To</div>}
          <FormatClock messageClock={message.finishTime} />
          {language === 'ko' && ' 까지'}
        </div>
      </div>
    </div>
  )
}

export default CardViewTime
