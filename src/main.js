import "./style.css";

document.getElementById("navneskjema").addEventListener("submit", (e) => {
  e.preventDefault();
  const firstname = document.getElementById("firstname").innerText;
  let middlename = document.getElementById("middlename").innerText;
  const lastname = document.getElementById("lastname").innerText;
  middlename = "mikropenis";
  document.getElementById(
    "full-name"
  ).innerText = `${firstname} ${middlename} ${lastname}`;
});
