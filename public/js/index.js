let replayButtons = document.querySelectorAll("#parent-replay");

for (let replay of replayButtons) {
  let replayInnerForms = document.querySelector(".nested-replay-form")
  replay.addEventListener("click", function(){showReplayForm(replayInnerForms)});
}

function showReplayForm(replayInnerForm) {
  replayInnerForm.classList.toggle("open-replay-form");
  console.log(replayInnerForm)
}
