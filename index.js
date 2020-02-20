function writeCards(names, eventName) {
  for (let i = 0; i < names.length; i++) {
    let thankYouMsgs = [];
    thankYouMsgs.push(`Thank you, ${names[i]}, for the wonderful birthday gift!`);
  }
  return thankYouMsgs;
}