import { questions } from './questions';
import randomizeOrder from './randomizeOrder';

export default (category, type) => {
  if (!category) return questions;
  const questionSet = questions.filter(q => {
    return q.category === category && (q.type === type || !type);
  });

  return randomizeOrder(questionSet);
};
