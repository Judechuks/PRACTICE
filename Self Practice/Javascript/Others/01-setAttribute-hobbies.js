const myList = document.getElementById("my-list");
const likesOrDislikes = ["music", "movies", "football", "gaming", "reading"];

const replies = [];
const getReplies = () => {
  likesOrDislikes.forEach((fav) =>
    replies.push(
      prompt(`Answer yes or no\n\n Do you like ${fav}?`).toLowerCase()
    )
  );
  console.log(replies);
};
getReplies();

const repliesAsEntities = replies.map((reply) => {
  if (reply === "yes") {
    return "✔";
  } else {
    return "✖";
  }
});

likesOrDislikes.forEach((item, index) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  listItem.setAttribute("data-after", repliesAsEntities[index]);
  myList.appendChild(listItem);
});

// yes = "\2714"
// no = "\2716"
