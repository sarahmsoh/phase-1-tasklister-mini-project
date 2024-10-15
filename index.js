const formSubmission = document.getElementById("create-task-form");

formSubmission.addEventListener("submit", submissionEvent);

function submissionEvent(event) {
  event.preventDefault();
  const newTaskDescription = event.target["new-task-description"].value;
  console.log(newTaskDescription);
  handleTasks(newTaskDescription);
}

function handleTasks(toDo) {
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.textContent = "cancel";
  btn.addEventListener("click", () => p.remove());
  p.textContent = toDo;
  p.appendChild(btn);

  document.querySelector("#list").appendChild(p);
}


document.addEventListener("DOMContentLoaded", () => {
  console.log("Dom functions appropriatelly and list functions well")
});