import { useState } from 'react';
import { ILessonCard } from '../../types/LessonCard.type';
import { generateLessons } from '../../utils/GenerateLessons.utils';
import { LessonCard } from '../LessonCard/LessonCard';

/**
 * Список расписания для отображения всех пар на группу.
 * Компонент занимается получением номера группы и выводом
 * соответствующего расписания.
 */
export const ScheduleList = () => {
  const [cards, setCards] = useState<ILessonCard[]>([]);

  const onGetScheduleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCards(generateLessons(10));
  };

  return (
    <main>
      {cards !== null
        ? cards.map((card, i) => <LessonCard key={i} {...card} />)
        : 'List is empty'}
      <button onClick={(e) => onGetScheduleClick(e)}>Get Schedule</button>
    </main>
  );
};
