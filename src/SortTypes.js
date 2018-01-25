const SortTypes = Object.freeze({
  best: Object.freeze({
    name: "Best",
    iconClass: "fa-fire",
    callback: (commentA, commentB) => commentB.score - commentA.score,
  }),
  newSort: Object.freeze({
    name: "New",
    iconClass: "fa-certificate",
    callback: (commentA, commentB) => commentB.created_utc - commentA.created_utc,
  }),
});

export default SortTypes;