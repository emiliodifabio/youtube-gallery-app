import { TIMEOUT_SEC } from "./config";
import * as model from "./model";

const timeout = function (s) {
  return new Promise((_, reject) => {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async (url) => {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`data.message`)(`$(res.status)`);
    return data;
  } catch (error) {
    console.error(`${error} ⚠️⚠️⚠️`);
    throw error;
  }
};

export const addLocalStorage = function (videoID) {
  // If YouTubeVideoID exists
  if (localStorage.getItem("YouTubeVideoID") != undefined) {
    model.state.videos = JSON.parse(localStorage.getItem("YouTubeVideoID"));
  }
  // Push ID on video ID array
  model.state.videos.unshift(videoID);
  // Remove duplicate
  const uniqueVideoID = [...new Set(model.state.videos)];
  // Set local storage with unique ID
  localStorage.setItem("YouTubeVideoID", JSON.stringify(uniqueVideoID));
};
