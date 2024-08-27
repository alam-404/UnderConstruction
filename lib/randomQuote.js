export const getRandomQuote = async () => {
  const res = await fetch('./quotes.json');
  const data = await res.json();
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}