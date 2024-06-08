import { useEffect, useState } from 'react';
import { ILessonCard } from '../../types/LessonCard.type';
import { generateLessons } from '../../utils/GenerateLessons.utils';
import { LessonCard } from '../LessonCard/LessonCard';

/**
 * Список расписания для отображения всех пар на группу.
 * Компонент занимается получением номера группы и выводом
 * соответствующего расписания.
 */
export const ScheduleList = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cards, setCards] = useState<ILessonCard[]>([]);

  useEffect(() => {
    if (isLoaded) return;

    setCards(generateLessons(10));
    setIsLoaded(true);
  }, [cards, isLoaded]);

  return (
    <main>
      {cards !== null
        ? cards.map((card, i) => <LessonCard key={i} {...card} />)
        : 'List is empty'}
    </main>
  );
};
