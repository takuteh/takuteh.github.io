const delay = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(); // setTimeoutの第一引数の関数として簡略化できる
    }, ms);
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  const scr = document.getElementsByClassName("scroll")[0];
  for (let i = 0; i < 100; i++) {
    scr.scrollLeft = i * 15;
    await delay(100);
  }
});
