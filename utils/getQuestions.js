import {questions} from './questions'

function getQuestions (category, type) {
  return questions.filter(q => {
      return q.category === category && (q.type === type || !type)
  })
}

module.exports = {
  getQuestions
} 