const baseUrl =
  import.meta.env.MODE === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";
const apiKey = "35162be74ced4380854539bd0a7bffcd";

export const getNews = (keyword) => {
  const today = new Date();
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  const fromDate = sevenDaysAgo.toISOString().split("T")[0];
  const toDate = today.toISOString().split("T")[0];

  return fetch(
    `${baseUrl}?q=${keyword}&from=${fromDate}&to=${toDate}&pageSize=100&apiKey=${apiKey}`
  ).then((res) => {
    if (res.ok) return res.json();
    return Promise.reject(`Error: ${res.status}`);
  });
};
