// Holds random message parts
const messages = {
  day: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  fortune: ["great fortune", "bad fortune", "unclear fortune", "great success"],
  activity: [
    "brush your teeth",
    "turn off your lights",
    "pick up a penny",
    "follow your heart",
  ],
};

// Generate a random number
const getRandomNumber = (num) => Math.floor(Math.random() * num);

// Log a random message
const createRandomMessage = () => {
  let dayNumber = getRandomNumber(messages.day.length);
  let fortuneNumber = getRandomNumber(messages.fortune.length);
  let activityNumber = getRandomNumber(messages.activity.length);

  console.log(
    `On ${messages.day[dayNumber]} you will experience ${messages.fortune[fortuneNumber]}. Just make sure that you ${messages.activity[activityNumber]}.`
  );
};

// Run the program
createRandomMessage();
