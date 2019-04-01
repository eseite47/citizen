const questions = [
  {
    category: 'government',
    type: 'principles',
    question: 'What is the supreme law of the land?',
    answer: ['The Constitution'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'principles',
    question: 'What does the Constitution do?',
    answer: [
      'Sets up the government',
      'Defines the government',
      'Protects basic rights of Americans'
    ],
    answerType: 'interchangeAnswer'
  }, {
    category: 'government',
    type: 'principles',
    question: 'The idea of self-government is in the first three words of the Constitution. What are these words?',
    answer: ['We the People'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'principles',
    question: 'What is an amendment?',
    answer: [
      'A change (to the Constitution)',
      'An addition (to the Constitution)'
    ],
    answerType: 'interchangeAnswer'
  }, {
    category: 'government',
    type: 'principles',
    question: 'What do we call the first ten amendments to the Constitution?',
    answer: ['The Bill of Rights'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'principles',
    question: 'What is one right or freedom from the First Amendment?',
    answer: [
      'Speech',
      'Religion',
      'Assembly',
      'Press',
      'Petition the government'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  },{
    category: 'government',
    type: 'principles',
    question: 'How many amendments does the Constitution have?',
    answer: ['Twenty-seven (27)'],
    answerType: 'singleAnswer'
  },{
    category: 'government',
    type: 'principles',
    question: 'What did the Declaration of Independence do?',
    answer: [
      'Announced our independence (from Great Britain)',
      'Declared our independence (from Great Britain)',
      'Said that the United States is free (from Great Britain)'
    ],
    answerType: 'interchangeAnswer'
  },{
    category: 'government',
    type: 'principles',
    question: 'What are two rights in the Declaration of Independence?',
    answer: [
      'Life',
      'Liberty',
      'Pursuit of happiness'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 2
  },{
    category: 'government',
    type: 'principles',
    question: 'What is freedom of religion?',
    answer: ['You can practice any religion, or not practice a religion.'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'principles',
    question: 'What is the economic system in the United States?',
    answer: ['Capitalist economy', 'Market economy'],
    answerType: 'interchangeAnswer'
  }, {
    category: 'government',
    type: 'principles',
    question: 'What is the “rule of law”?',
    answer: [
      'Everyone must follow the law',
      'Leaders must obey the law',
      'Government must obey the law',
      'No one is above the law'
    ],
    answerType: 'interchangeAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'Name one branch or part of the government.',
    answer: [
      'Congress',
      'Legislative',
      'President',
      'Executive',
      'The courts',
      'Judicial'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'government',
    type: 'systems',
    question: 'What stops one branch of government from becoming too powerful?',
    answer: [
      'Checks and balances',
      'Separation of powers'
    ],
    answerType: 'interchangeAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'Who is in charge of the executive branch?',
    answer: ['The President'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'Who makes federal laws?',
    answer: [
      'The Congress', 
      'The Senate and the House (of Representatives)', 
      'The U.S. (national) legislature'
    ],
    answerType: 'interchangeAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'What are the two parts of the U.S. Congress?',
    answer: ['The Senate and House (of Representatives)'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'How many U.S. Senators are there?',
    answer: ['One hundred (100)'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'We elect a U.S. Senator for how many years?',
    answer: ['six (6)'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'Who is one of your state’s U.S. Senators now?',
    answer: ['Answers will vary'],
    answerType: 'stateAnswer',
    answerKey: 'senator'
  }, {
    category: 'government',
    type: 'systems',
    question: 'The House of Representatives has how many voting members?',
    answer: ['Four hundred thirty-five (435)'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'We elect a U.S. Representative for how many years?',
    answer: ['Two (2)'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'Name your U.S. Representative',
    answer: ['Answers will vary'],
    answerType: 'stateAnswer',
    answerKey: 'representative'
  }, {
    category: 'government',
    type: 'systems',
    question: 'Who does a U.S. Senator represent?',
    answer: ['All people of the state'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'Why do some states have more Representatives than other states?',
    answer: [
      'Because of the state’s population', 
      'Because they have more people',
      'Because some states have more people'
    ],
    answerType: 'interchangeAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'We elect a President for how many years?',
    answer: ['Four (4)'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'In what month do we vote for President?',
    answer: ['November'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'What is the name of the President of the United States now?',
    answer: ['Donald J. Trump'],
    answerType: 'peopleAnswer',
    answerKey: 'president'
  }, {
    category: 'government',
    type: 'systems',
    question: 'What is the name of the Vice President of the United States now?',
    answer: ['Mike Pence'],
    answerType: 'peopleAnswer',
    answerKey: 'vicePresident'
  }, {
    category: 'government',
    type: 'systems',
    question: 'If the President can no longer serve, who becomes President?',
    answer: ['The Vice President'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'If both the President and the Vice President can no longer serve, who becomes President?',
    answer: ['The Speaker of the House'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'Who is the Commander in Chief of the military?',
    answer: ['The President'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'Who signs bills to become laws?',
    answer: ['The President'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'Who vetoes bills?',
    answer: ['The President'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'What does the President’s Cabinet do?',
    answer: ['Advises the President'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'What are two Cabinet-level positions?',
    answer: [
      'Secretary of Agriculture',
      'Secretary of Commerce',
      'Secretary of Defense',
      'Secretary of Education',
      'Secretary of Energy',
      'Secretary of Health and Human Services',
      'Secretary of Homeland Security',
      'Secretary of Housing and Urban Development',
      'Secretary of the Interior',
      'Secretary of Labor',
      'Secretary of State',
      'Secretary of Transportation',
      'Secretary of the Treasury',
      'Secretary of Veterans Affairs',
      'Attorney General',
      'Vice President'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 2
  }, {
    category: 'government',
    type: 'systems',
    question: 'What does the judicial branch do?',
    answer: [
      'Reviews laws',
      'Explains laws',
      'Resolves disputes (disagreements)',
      'Decides if a law goes against the Constitution'
    ],
    answerType: 'interchangeAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'What is the highest court in the United States?',
    answer: ['The Supreme Court'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'How many justices are on the Supreme Court?',
    answer: ['Nine (9)'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'Who is the Chief Justice of the United States now?',
    answer: ['John Roberts'],
    answerType: 'peopleAnswer',
    answerKey: 'chiefJustice'
  }, {
    category: 'government',
    type: 'systems',
    question: 'Under our Constitution, some powers belong to the federal government. What is one power of the federal government?',
    answer: [
      'To print money',
      'To declare war',
      'To create an army',
      'To make treaties'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'government',
    type: 'systems',
    question: 'Under our Constitution, some powers belong to the states. What is one power of the states?',
    answer: [
      'Provide schooling and education',
      'Provide protection (police)',
      'Provide safety (fire departments)',
      'Give a driver’s license',
      'Approve zoning and land use'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'government',
    type: 'systems',
    question: 'Who is the Governor of your state now?',
    answer: ['Answsers will vary'],
    answerType: 'stateAnswer',
    answerKey: 'governor'
  }, {
    category: 'government',
    type: 'systems',
    question: 'What is the capital of your state?',
    answer: ['Answers will vary'],
    answerType: 'stateAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'What are the two major political parties in the United States?',
    answer: ['Democratic and Republican'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'What is the political party of the President now?',
    answer: ['Republican'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'systems',
    question: 'What is the name of the Speaker of the House of Representatives now?',
    answer: ['Nancy Pelosy'],
    answerType: 'peopleAnswer',
    answerKey: 'speaker'
  }, {
    category: 'government',
    type: 'rights',
    question: 'There are four amendments to the Constitution about who can vote. Describe one of them.',
    answer: [
      `Citizens eighteen (18) and older can vote`,
      `You don’t have to pay (a poll tax) to vote`,
      `Any citizen can vote. (Women and men can vote)`,
      `A male citizen of any race (can vote).`,
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'government',
    type: 'rights',
    question: 'What is one responsibility that is only for United States citizens?',
    answer: [
      'Serve on a jury',
      'Vote in a federal election'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'government',
    type: 'rights',
    question: 'Name one right only for United States citizens',
    answer: [
      'Vote in a federal election',
      'Run for federal office'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'government',
    type: 'rights',
    question: 'What are two rights of everyone living in the United States?',
    answer: [
      'freedom of expression',
      'freedom of speech',
      'freedom of assembly',
      'freedom to petition the government',
      'freedom of religion',
      'the right to bear arms'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 2
  }, {
    category: 'government',
    type: 'rights',
    question: 'What do we show loyalty to when we say the Pledge of Allegiance?',
    answer: [
      'The United States',
      'The flag'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'government',
    type: 'rights',
    question: 'What is one promise you make when you become a United States citizen?',
    answer: [
      'Give up loyalty to other countries',
      'Defend the Constitution and laws of the United States',
      'Obey the laws of the United States',
      'Serve in the U.S. military (if needed)',
      'Serve (do important work for) the nation (if needed)',
      'Be loyal to the United States'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'government',
    type: 'rights',
    question: 'How old do citizens have to be to vote for President?',
    answer: ['Eighteen (18) and older'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'rights',
    question: 'What are two ways that Americans can participate in their democracy?',
    answer: [
      'Vote',
      'Join a political party',
      'Help with a campaign',
      'Join a civic group',
      'Join a community group',
      'Give an elected official your opinion on an issue',
      'Call Senators and Representatives',
      'Publicly support or oppose an issue or policy',
      'Run for office',
      'Write to a newspaper'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 2
  }, {
    category: 'government',
    type: 'rights',
    question: 'When is the last day you can send in federal income tax forms?',
    answer: ['April 15'],
    answerType: 'singleAnswer'
  }, {
    category: 'government',
    type: 'rights',
    question: 'When must all men register for the Selective Service?',
    answer: [
      'At age eighteen (18)',
      'Between eighteen (18) and twenty-six (26)'
    ],
    answerType: 'interchangeAnswer'
  }, {
    category: 'history-geo' ,
    type: 'history-colonial',
    question: 'What is one reason colonists came to America?',
    answer: [
      'Freedom',
      'Political liberty',
      'Religious freedom',
      'Economic opportunity',
      'Practice their religion',
      'Escape persecution'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'history-geo' ,
    type: 'history-colonial',
    question: 'Who lived in America before the Europeans arrived?',
    answer: ['Native Americans'],
    answerType: 'singleAnswer'
  }, {
    category: 'history-geo' ,
    type: 'history-colonial',
    question: 'What group of people was taken to America and sold as slaves?',
    answer: [
      'Africans',
      'People from Africa'
    ],
    answerType: 'interchangeAnswer'
  }, {
    category: 'history-geo' ,
    type: 'history-colonial',
    question: 'Why did the colonists fight the British?',
    answer: [
      `Because of high taxes (taxation without representation)`,
      `Because the British army stayed in their houses (boarding, quartering)`,
      `Because they didn’t have self-government`
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'history-geo' ,
    type: 'history-colonial',
    question: 'Who wrote the Declaration of Independence?',
    answer: ['Thomas Jefferson'],
    answerType: 'singleAnswer'
  }, {
    category: 'history-geo' ,
    type: 'history-colonial',
    question: 'When was the Declaration of Independence adopted?',
    answer: ['July 4, 1776'],
    answerType: 'singleAnswer'
  }, {
    category: 'history-geo' ,
    type: 'history-colonial',
    question: 'There were 13 original states. Name three.',
    answer: [
      'New Hampshire',
      'Massachusetts',
      'Rhode Island',
      'Connecticut',
      'New York',
      'New Jersey',
      'Pennsylvania',
      'Delaware',
      'Maryland',
      'Virginia',
      'North Carolina',
      'South Carolina',
      'Georgia'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 3
  }, {
    category: 'history-geo' ,
    type: 'history-colonial',
    question: 'What happened at the Constitutional Convention?',
    answer: [
      'The Constitution was written',
      'The Founding Fathers wrote the Constitution'
    ],
    answerType: 'interchangeAnswer'
  }, {
    category: 'history-geo' ,
    type: 'history-colonial',
    question: 'When was the Constitution written?',
    answer: ['1787'],
    answerType: 'singleAnswer'
  }, {
    category: 'history-geo' ,
    type: 'history-colonial',
    question: 'The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers',
    answer: [
      'James Madison',
      'Alexander Hamilton',
      'John Jay',
      'Publius'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'history-geo' ,
    type: 'history-colonial',
    question: 'What is one thing Benjamin Franklin is famous for?',
    answer: [
      'U.S. diplomat',
      'Oldest member of the Constitutional Convention',
      'First Postmaster General of the United States',
      `Writer of “Poor Richard’s Almanac”`,
      'Started the first free libraries'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'history-geo' ,
    type: 'history-colonial',
    question: `Who is the “Father of Our Country”?`,
    answer: ['George Washington'],
    answerType: 'peopleAnswer',
    answerKey: 'washington'
  }, {
    category: 'history-geo' ,
    type: 'history-colonial',
    question: `Who was the first President?`,
    answer: ['George Washington'],
    answerType: 'peopleAnswer',
    answerKey: 'washington'
  }, {
    category: 'history-geo' ,
    type: 'history-1800',
    question: 'What territory did the United States buy from France in 1803?',
    answer: [
      'The Louisiana Territory',
      'Louisiana'
    ],
    answerType: 'interchangeAnswer'
  }, {
    category: 'history-geo' ,
    type: 'history-1800',
    question: 'Name one war fought by the United States in the 1800s',
    answer: [
      'War of 1812',
      'Mexican-American War',
      'Civil War',
      'Spanish-American War'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'history-geo' ,
    type: 'history-1800',
    question: 'Name the U.S. war between the North and the South. ',
    answer: ['The Civil War'],
    answerType: 'singleAnswer'
  }, {
    category: 'history-geo' ,
    type: 'history-1800',
    question: 'Name one problem that led to the Civil War',
    answer: [
      'slavery',
      'economic reasons',
      `states’ rights`
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'history-geo' ,
    type: 'history-1800',
    question: 'What was one important thing that Abraham Lincoln did?',
    answer: [
      'Freed the slaves (Emancipation Proclamation)',
      'Saved (or preserved) the Union',
      'Led the United States during the Civil War'
    ],
    answerType: 'multitleAnswer',
    answerQuantity: 1
  }, {
    category: 'history-geo' ,
    type: 'history-1800',
    question: 'What did the Emancipation Proclamation do?',
    answer: ['Freed slaves in the Confederate states'],
    answerType: 'singleAnswer'
  }, {
    category: 'history-geo' ,
    type: 'history-1800',
    question: 'What did Susan B. Anthony do?',
    answer: [
      `fought for women’s rights`,
      'fought for civil rights'
    ],
    answerType: 'interchangeAnswer'
  }, {
    category: 'history-geo' ,
    type: 'history-modern',
    question: 'Name one war fought by the United States in the 1900s.',
    answer: [
      'World War I',
      'World War II',
      'Korean War',
      'Vietnam War',
      '(Persian) Gulf War'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'history-geo' ,
    type: 'history-modern',
    question: 'Who was President during World War I?',
    answer: ['Woodrow Wilson'],
    answerType: 'peopleAnswer',
    answerKey: 'wilson'
  }, {
    category: 'history-geo' ,
    type: 'history-modern',
    question: 'Who was President during the Great Depression and World War II?',
    answer: ['Franklin Roosevelt'],
    answerType: 'peopleAnswer',
    answerKey: 'roosevelt'
  }, {
    category: 'history-geo' ,
    type: 'history-modern',
    question: 'Who did the United States fight in World War II?',
    answer: ['Japan, Germany, and Italy'],
    answerType: 'singleAnswer'
  }, {
    category: 'history-geo' ,
    type: 'history-modern',
    question: 'Before he was President, Eisenhower was a general. What war was he in?',
    answer: ['World War II'],
    answerType: 'singleAnswer'
  }, {
    category: 'history-geo' ,
    type: 'history-modern',
    question: 'During the Cold War, what was the main concern of the United States?',
    answer: ['Communism'],
    answerType: 'singleAnswer'
  }, {
    category: 'history-geo' ,
    type: 'history-modern',
    question: 'What movement tried to end racial discrimination?',
    answer: ['Civil rights (movement)'],
    answerType: 'singleAnswer'
  }, {
    category: 'history-geo' ,
    type: 'history-modern',
    question: 'What did Martin Luther King, Jr. do?',
    answer: [
      'Fought for civil rights',
      'Worked for equality for all Americans'
    ],
    answerType: 'interchangeAnswer'
  }, {
    category: 'history-geo' ,
    type: 'history-modern',
    question: 'What major event happened on September 11, 2001, in the United States?',
    answer: ['Terrorists attacked the United States.'],
    answerType: 'singleAnswer'
  }, {
    category: 'history-geo' ,
    type: 'history-modern',
    question: 'Name one American Indian tribe in the United States.',
    answer: [
      'Cherokee',
      'Navajo',
      'Sioux',
      'Chippewa',
      'Choctaw',
      'Pueblo',
      'Apache',
      'Iroquois',
      'Creek',
      'Blackfeet',
      'Seminole',
      'Cheyenne',
      'Arawak',
      'Shawnee',
      'Mohegan',
      'Huron',
      'Oneida',
      'Lakota',
      'Crow',
      'Teton',
      'Hopi',
      'Inuit'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'history-geo' ,
    type: 'geography',
    question: 'Name one of the two longest rivers in the United States',
    answer: [
      'Missouri River',
      'Mississippi River'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'history-geo' ,
    type: 'geography',
    question: 'What ocean is on the West Coast of the United States?',
    answer: ['Pacific Ocean'],
    answerType: 'singleAnswer'
  }, {
    category: 'history-geo' ,
    type: 'geography',
    question: 'What ocean is on the East Coast of the United States?',
    answer: ['Atlantic Ocean'],
    answerType: 'singleAnswer'
  }, {
    category: 'history-geo' ,
    type: 'geography',
    question: 'Name one U.S. territory.',
    answer: [
      'Puerto Rico',
      'U.S. Virgin Islands',
      'American Samoa',
      'Northern Mariana Islands',
      'Guam'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'history-geo' ,
    type: 'geography',
    question: 'Name one state that borders Canada.',
    answer: [
      'Maine',
      'New Hampshire',
      'Vermont',
      'New York',
      'Pennsylvania',
      'Ohio',
      'Michigan',
      'Minnesota',
      'North Dakota',
      'Montana',
      'Idaho',
      'Washington',
      'Alaska'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'history-geo' ,
    type: 'geography',
    question: 'Name one state that borders Mexico.',
    answer: [
      'California',
      'Arizona',
      'New Mexico',
      'Texas'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 1
  }, {
    category: 'history-geo' ,
    type: 'geography',
    question: 'What is the capital of the United States?',
    answer: ['Washington, D.C.'],
    answerType: 'singleAnswer'
  }, {
    category: 'history-geo' ,
    type: 'geography',
    question: 'Where is the Statue of Liberty?',
    answer: [
      'New York (Harbor)',
      'Liberty Island'
    ],
    answerType: 'interchangeAnswer'
  }, {
    category: 'history-geo' ,
    type: 'symbols',
    question: 'Why does the flag have 13 stripes?',
    answer: [
      'because there were 13 original colonies',
      'because the stripes represent the original colonies'
    ],
    answerType: 'interchangeAnswer'
  }, {
    category: 'history-geo' ,
    type: 'symbols',
    question: 'Why does the flag have 50 stars?',
    answer: [
      'because there is one star for each state',
      'because each star represents a state',
      'because there are 50 states'
    ],
    answerType: 'interchangeAnswer'
  }, {
    category: 'history-geo' ,
    type: 'symbols',
    question: 'What is the name of the national anthem?',
    answer: ['The Star-Spangled Banner'],
    answerType: 'singleAnswer'
  }, {
    category: 'history-geo' ,
    type: 'symbols',
    question: 'When do we celebrate Independence Day?',
    answer: ['July 4'],
    answerType: 'singleAnswer'
  }, {
    category: 'history-geo' ,
    type: 'symbols',
    question: 'Name two national U.S. holidays.',
    answer: [
      `New Year’s Day`,
      'Martin Luther King, Jr. Day',
      `Presidents’ Day`,
      'Memorial Day',
      'Independence Day',
      'Labor Day',
      'Columbus Day',
      'Veterans Day',
      'Thanksgiving',
      'Christmas'
    ],
    answerType: 'multipleAnswer',
    answerQuantity: 2
  }
]

module.exports = {
  questions
}