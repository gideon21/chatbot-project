// Options the user could type in

const prompts = [
  ["hi"],

  ["hello"],

  ["i'm fine","i'm great","i'm good","i'm doing well","i'm wonderful","i'm fantastic","i'm sad","i'm happy","i'm hungry", "fine", "great", "good", "wonderful", "fantastic", "sad", "happy", "hungry", "well"],

  ["1","2","3","4","first year", "second year", "third year", "one", "two", "three", "postgraduate", "phd", "masters degree"],

  ["web design and development",
    "web development",
    "accounting and business ",
    "software engineering",
    "accounting & finance",
    "User Experience",
    "cyber security",
    "mechanical engineering",
    "computing",
    "computer science",
    "computer games development",
    "Mathematics",
    "ux developer",
    "ui developer",
    "it"
  ],

  ["very good", "not good"]

]
// Possible responses, in corresponding order

const replies = [
  ["Hi, how are you?"],
  ["Hello, how are you?"],
  ["What is your name?"],
  ["What are you studing?"],
  ["How was semester one? (very good, not good)"],
  ["Thank you"]
]

// replies after you type in name
const academic = [
  ["What academic year are you in"]
]

// Random for any other user inputyear one
const alternative = [
  ["I do not understand try again"]

]

