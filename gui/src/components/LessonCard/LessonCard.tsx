import { ILessonCard } from '../../types/LessonCard.type';
import './LessonCard.scss';

interface ILessonCardProps extends ILessonCard {}

/**
 * Карточка урока.
 *
 * @param title - Название пары.
 * @param description- Описание пары.
 * @param teacher - Преподаватель, который ведет пару.
 * @param classroom - Аудитория в которой будет проходить пара.
 */
export const LessonCard = ({
  title,
  description,
  teacher,
  classroom,
}: ILessonCardProps) => {
  return (
    <div className="lesson-card">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{teacher}</p>
      <p>{classroom}</p>
    </div>
  );
};
