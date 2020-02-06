let score = 0;
let index = 0;

const questions = [
  "When is the required time to have your lifting brace on?  ",
  "What must always be done before returning a vehicle to the warehouse?",
  "If a customer asks you to move or fix a piece of equipment that is not part of the install, what do you do?",
  "What must be done before leaving the job site?",
  "You have to move a weight machine upstairs. How do you prepare for this?",
  "What information must be gathered from installed equipment? ",
  "The Job is taking a long time and you know that your lunch is coming up. What do you do?",
  "When is it acceptable to untuck your shirt?",
  "Which of these is not acceptable attire for work?",
  "A customer is upset that their installation is starting 2 minutes after the scheduled time. They are yelling in your face. What do you do?"
];

const answers = [

  [
  "In the truck", 
  "The entire work day", 
  "During any lifting or assembling.",
  "At all times while on the job site"
  ],

  [
  "Refuel it", 
  "Clean the cabin", 
  "Ensure no valuables are left inside of it over night", 
  "All of the above"
  ],

  [
    "Tell them you'll do it for $100 cash", 
    "Let them know its not your job", 
    "Call your supervisor",
    "Ignore them"
  ],

  [
    "Clean up any areas that work was performed in",
    "Clean up the back of the truck",
    "Have the paperwork signed or provide an explanation as to why it was not",
    "A and C"
  ],

  [
    "Fully disassemble the machine",
    "Remove the weight stack",
    "Remove all moving parts",
    "Call more people to help carry it"
  ],

  [
    "The model number",
    "The serial number and unit type",
    "The brand name",
    "All of the above"
  ],

  [
    "Power through, you can eat lunch on the way home", 
    "Call your supervisor", 
    "Eat while working",  
    "Take a break and eat your lunch and continue after" 
  ],

  [
    "When the job is getting tough", 
    "At the end of the job when the customer isn't paying attention", 
    "At the warehouse",  
    "Never" 
  ],

  [
    "Khakis",  
    "Jeans",  
    "Thermal undershirts", 
    "Black belts" 
  ],

  [
    "Yell back", 
    "Apologize and admit its your fault",  
    "Big ol’ smack", 
    "Tell them you understand how they feel and ask If they would like to speak to a supervisor", 
  ],

];

const correctAnswers = [
  "At all times while on the job site",
  "All of the above", 
  "Call your supervisor",
  "A and C",
  "Remove the weight stack",
  "All of the above",
  "Take a break and eat your lunch and continue after",
  "Never",
  "Jeans",
  "Tell them you understand how they feel and ask If they would like to speak to a supervisor"
];

let STORE = { score, index, questions, answers, correctAnswers };