document.addEventListener("DOMContentLoaded", () => {
  const artiles_info = document.getElementsByClassName("date");
  const dates = [];
  for (let i = 0; i < artiles_info.length; i++) {
    const title = artiles_info[i].dataset.title;
    const text_date = artiles_info[i].innerText;
    const date = new Date(text_date);
    dates.push({ element: title, date: date });
  }
  dates.sort((a, b) => b.date - a.date);
  console.log(dates);
});
