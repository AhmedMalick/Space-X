const swDev = () => {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register(swUrl)
      .then((response) => { })
      .catch((error) => { });
  });
};

export default swDev;
