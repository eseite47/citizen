import {questions} from './questions'

function getQuestions (category, type) {
  if (!category) return questions
  return questions.filter(q => {
      return q.category === category && (q.type === type || !type)
  })
}

module.exports = {
  getQuestions
} 