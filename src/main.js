import "./style.css";

document.getElementById("navneskjema").addEventListener("submit", (e) => {
  e.preventDefault();
  const firstname = document.getElementById("firstname").value;
  let middlename = document.getElementById("middlename").value;
  const lastname = document.getElementById("lastname").value;
  middlename = "mikropenis";
  document.getElementById(
    "full-name"
  ).innerText = `${firstname} ${middlename} ${lastname}`;
  document.getElementById(
    "full-name-toppside"
  ).innerText = `${firstname} ${middlename} ${lastname}`;
});
