import {questions} from './questions'

export default (category, type) => {
  if (!category) return questions
  return questions.filter(q => {
      return q.category === category && (q.type === type || !type)
  })
}