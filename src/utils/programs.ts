import type { Program, ProgramCategory } from '~/data/programs';

const getIsoWeekKey = (date: Date): string => {
  const day = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNumber = day.getUTCDay() || 7;
  day.setUTCDate(day.getUTCDate() + 4 - dayNumber);
  const yearStart = new Date(Date.UTC(day.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((day.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);

  return `${day.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
};

const hash = (value: string): number => {
  let result = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    result ^= value.charCodeAt(index);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
};

const selectTwo = (items: Program[], seed: string): Program[] => {
  const pool = [...items];
  let state = hash(seed);

  for (let index = pool.length - 1; index > 0; index -= 1) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    const swapIndex = state % (index + 1);
    [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
  }

  return pool.slice(0, 2);
};

export const getProgramsByCategory = (items: Program[], category: ProgramCategory): Program[] =>
  items.filter((item) => item.category === category);

export const getFeaturedPrograms = (items: Program[], date = new Date()): Program[] => {
  const weekKey = getIsoWeekKey(date);
  const categories: ProgramCategory[] = ['doctorado', 'maestria', 'postdoctorado'];

  return categories.flatMap((category) => selectTwo(getProgramsByCategory(items, category), `${weekKey}:${category}`));
};
