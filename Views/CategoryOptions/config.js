categoryOptions = {
  Gov: {
    title: 'American Government',
    nav: [
      {
        onPressNav: 'FlashCardView',
        onPressProps: {
          category: 'government',
          type: 'principles'
        },
        text: 'Principles of Democracy'
      },
      {
        onPressNav: 'FlashCardView',
        onPressProps: {
          category: 'government',
          type: 'systems'
        },
        text: 'Systems of Government'
      },
      {
        onPressNav: 'FlashCardView',
        onPressProps: {
          category: 'government',
          type: 'rights'
        },
        text: 'Rights and Responsibilities'
      },
      {
        onPressNav: 'FlashCardView',
        onPressProps: {
          category: 'government'
        },
        text: `Let's Study Everything`
      }
    ]
  },
  HistGeo: {
    title: 'History and Geography',
    nav: [
      {
        onPressNav: 'FlashCardView',
        onPressProps: {
          category: 'history-geo',
          type: 'history-colonial'
        },
        text: 'The 1600s and 1700s'
      },
      {
        onPressNav: 'FlashCardView',
        onPressProps: {
          category: 'history-geo',
          type: 'history-1800'
        },
        text: 'The 1800s'
      },
      {
        onPressNav: 'FlashCardView',
        onPressProps: {
          category: 'history-geo',
          type: 'history-modern'
        },
        text: 'Recent History'
      },
      {
        onPressNav: 'FlashCardView',
        onPressProps: {
          category: 'history-geo',
          type: 'geography'
        },
        text: 'Geography'
      },
      {
        onPressNav: 'FlashCardView',
        onPressProps: {
          category: 'history-geo',
          type: 'symbols'
        },
        text: 'Symbols'
      },
      {
        onPressNav: 'FlashCardView',
        onPressProps: {
          category: 'history-geo'
        },
        text: `Let's Study Everything`
      }
    ]
  }
}

module.exports = {
  categoryOptions
}