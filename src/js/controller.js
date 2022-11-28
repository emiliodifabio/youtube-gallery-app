import { addLocalStorage } from "./helpers";
import * as model from "./model";
import { btn, container, VIDEO_ID_LENGTH } from "./config";
import videoView from "./views/videoView";
import localVideoView from "./views/localVideoView";

// PREVENT PAGE RELOAD
// if (module.hot) {
//   module.hot.accept();
// }

const loadVideos = async function () {
  try {
    btn.addEventListener("click", async function (e) {
      e.preventDefault();
      // Get Video ID
      const videoID = document.getElementById("video-id").value;
      // If input box is empty
      if (videoID.length == 0) return videoView.renderErrorInputEmpty();
      // If ID length is < or > 11
      if (
        (videoID.length < VIDEO_ID_LENGTH && videoID.length > 0) ||
        videoID.length > VIDEO_ID_LENGTH
      )
        return videoView.renderErrorLength();
      // If ID already exist in video ID array
      if (
        JSON.parse(localStorage.getItem("YouTubeVideoID"))?.find(
          (id) => id == videoID
        )
      )
        return videoView.renderErrorAlreadyExist();
      // Add Video ID on Local Storage
      addLocalStorage(videoID);
      // Load video card
      await model.loadVideoData(videoID);
      videoView.render(model.state.videoCard);
      videoView.showDeleteAllBtn();
    });
  } catch (error) {
    console.error(error);
  }
};

const loadLocalVideos = async function () {
  try {
    await model.loadLocalVideoData();
    localVideoView.render(model.state.videoCard);
    localVideoView.deleteAll();
    localVideoView.showDeleteAllBtn();
  } catch (error) {
    console.error(error);
  }
};

const deleteVideo = function () {
  container.addEventListener("click", async function (e) {
    try {
      const videocard = e.target.closest(".videocard");
      const btn = e.target.closest(".btn--delete");
      if (!btn) return;
      const id = videocard.getAttribute("data-id");
      const videos = JSON.parse(localStorage.getItem("YouTubeVideoID")).filter(
        (video) => video != id
      );
      localStorage.setItem("YouTubeVideoID", JSON.stringify(videos));
      localVideoView.resetRender();
      loadLocalVideos();
      localVideoView.showDeleteAllBtn();
    } catch (error) {
      console.error(error);
    }
  });
};
const init = () => {
  loadLocalVideos();
  loadVideos();
  videoView.showVideo();
  deleteVideo();
};
init();
