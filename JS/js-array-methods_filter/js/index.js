console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => {
  const idTwo = card.id.includes("2");
  return idTwo;
});

const allCardsWith3Tags = cards.filter((card) => {
  const tags = card.tags.length === 3;
  return tags;
});

const allCardsThatAreNotBookmarked = cards.filter((card) => {
  return card.isBookmarked === true;
});

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter(
  (card) => card.isBookmarked === true || card.tags.length != 0
);

console.log(onlyCardWithIdTwo);
console.log(allCardsWith3Tags);
console.log(allCardsThatAreNotBookmarked);
console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);
export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
