import { API_URL, API_KEY } from "./config";
import { getJSON } from "./helpers";

export const state = {
  videoCard: {},
  videos: [],
};

export const loadVideoData = async (id) => {
  try {
    const data = await getJSON(
      `${API_URL}id=${id}&key=${API_KEY}&part=snippet,contentDetails,statistics,status`
    );
    const { 0: videoCard } = data.items;
    if (!videoCard) return;

    state.videoCard = {
      id: videoCard.id,
      img: videoCard.snippet.thumbnails.medium.url,
      title: videoCard.snippet.localized.title.toUpperCase(),
      channelTitle: videoCard.snippet.channelTitle,
      date: videoCard.snippet.publishedAt.slice(0, -10).replace("T", " "),
      duration: videoCard.contentDetails.duration
        .slice(2, -1)
        .replace("H", ":")
        .replace("M", ":"),
    };

    console.log("loadVideoData videoCard", state.videoCard);
  } catch (error) {
    console.error(error);
  }
};

export const loadLocalVideoData = async function () {
  try {
    const localVideoID = JSON.parse(localStorage.getItem("YouTubeVideoID"));

    const data = await getJSON(
      `${API_URL}id=${localVideoID}&key=${API_KEY}&part=snippet,contentDetails,statistics,status`
    );

    state.videoCard = data.items.map((videoCard) => {
      return {
        id: videoCard.id,
        img: videoCard.snippet.thumbnails.medium.url,
        title: videoCard.snippet.localized.title.toUpperCase(),
        channelTitle: videoCard.snippet.channelTitle,
        date: videoCard.snippet.publishedAt.slice(0, -10).replace("T", " "),
        duration: videoCard.contentDetails.duration
          .slice(2, -1)
          .replace("H", ":")
          .replace("M", ":"),
      };
    });
  } catch (error) {
    console.error(error);
  }
};