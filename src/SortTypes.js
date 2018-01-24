const SortTypes = Object.freeze({
  best: Object.freeze({
    name: "Best",
    iconClass: "fa-fire",
    callback: (commentA, commentB) => commentA.score - commentB.score,
  }),
  newSort: Object.freeze({
    name: "New",
    iconClass: "fa-certificate",
    callback: (commentA, commentB) => commentA.created_utc - commentB.created_utc,
  }),
});

export default SortTypes;