import { ILessonCard } from '../types/LessonCard.type';

/**
 * Генерирует тестовые данные для тестирования.
 *
 * @param count Кол-во пар
 * @returns Массив уроков для группы
 */
export function generateLessons(count: number) {
  let data: ILessonCard[] = [];

  for (let i = 0; i < count; i++) {
    let card = new Object({
      title: `Title #${i}`,
      description: `Description #${i}`,
      classroom: `Classroom #${i}`,
      teacher: `Teacher #${i}`,
    });

    data.push(card as ILessonCard);
  }

  return data;
}
