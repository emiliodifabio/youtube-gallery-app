export default class View {
  _data;

  render(data) {
    // if (!data || (Array.isArray(data) && data.length === 0))
    //   return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
    this._clear();
  }

  resetRender() {
    const resetMarkup = this._generateResetMarkup();
    this._parentEl.innerHTML = resetMarkup;
  }

  showVideo() {
    this._parentEl.addEventListener("click", function (e) {
      e.preventDefault();

      const videoCard = e.target.closest(".videocard");
      if (!videoCard) return;
      const id = videoCard.getAttribute("data-id");
      const cover = videoCard.firstElementChild;

      const iFrame = `<iframe width="320" height="180" src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

      cover.innerHTML = iFrame;
    });
  }

  showDeleteAllBtn() {
    if (
      localStorage.getItem("YouTubeVideoID") != undefined &&
      JSON.parse(localStorage.getItem("YouTubeVideoID")).length > 1
    ) {
      this._btnDeleteAll.classList.remove("hidden");
    }
    if (
      localStorage.getItem("YouTubeVideoID") != undefined &&
      JSON.parse(localStorage.getItem("YouTubeVideoID")).length <= 1
    ) {
      this._btnDeleteAll.classList.add("hidden");
    }
  }

  _clear() {
    this._inputBox.value = "";
  }
}
