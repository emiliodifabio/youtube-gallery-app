import View from "./View";

class VideoView extends View {
  _parentEl = document.querySelector(".videocard-w");
  _videocard = document.querySelector('.videocard')
  _inputBox = document.getElementById("video-id");
  _btnSave = document.getElementById("btn--save");
  _btnDelete = document.querySelector(".btn--delete");
  _btnDeleteAll = document.querySelector(".btn--delete-all");
  _msgErrorAlreadyExist = "Video ID already exist!";
  _msgErrorLength = "Incorrect Video ID length!";
  _msgErrorInputEmpty = "Please type any Video ID!";

  _generateMarkup() {
    return `<li class="videocard" data-id="${this._data.id}">
        <div class="videocard--img">
        <img
        src="${this._data.img}"
        alt="YouTube Video Thumbnail"
        />
        </div>
        <h3 class="videocard--title">${this._data.title}</h3>
        <h3 class="videocard--channel-title">${this._data.channelTitle}</h3>
        <p class="videocard--date">
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M12 15q-.833 0-1.417-.583Q10 13.833 10 13q0-.833.583-1.417Q11.167 11 12 11q.833 0 1.417.583Q14 12.167 14 13q0 .833-.583 1.417Q12.833 15 12 15Zm-7.5 3q-.625 0-1.062-.448Q3 17.104 3 16.5v-11q0-.604.438-1.052Q3.875 4 4.5 4H6V2h1.5v2h5V2H14v2h1.5q.625 0 1.062.448Q17 4.896 17 5.5v11q0 .604-.438 1.052Q16.125 18 15.5 18Zm0-1.5h11V9h-11v7.5Zm0-9h11v-2h-11Zm0 0v-2 2Z" fill="#172C66"/></svg>
        ${this._data.date}
        </p>
        <p class="videocard--duration">
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m12.792 13.542 1.062-1.063-3.104-3.104V5h-1.5v5ZM10 18q-1.646 0-3.104-.625-1.458-.625-2.552-1.719t-1.719-2.552Q2 11.646 2 10q0-1.667.625-3.125t1.719-2.542Q5.438 3.25 6.896 2.625T10 2q1.667 0 3.125.625t2.542 1.708q1.083 1.084 1.708 2.542Q18 8.333 18 10q0 1.646-.625 3.104-.625 1.458-1.708 2.552-1.084 1.094-2.542 1.719Q11.667 18 10 18Zm0-8Zm0 6.5q2.708 0 4.604-1.906T16.5 10q0-2.708-1.896-4.604T10 3.5q-2.688 0-4.594 1.896Q3.5 7.292 3.5 10q0 2.688 1.906 4.594Q7.312 16.5 10 16.5Z" fill="#172C66"/></svg>
        ${this._data.duration}
      </p>
      <button class="btn--delete"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21Zm2-4h2V8H9Zm4 0h2V8h-2Z"/></svg></button>
    </li>
    `;
  }

  renderErrorAlreadyExist() {
    this._renderErrorStyle();
    this._inputBox.value = this._msgErrorAlreadyExist;
  }
  renderErrorLength() {
    this._renderErrorStyle();
    this._inputBox.value = this._msgErrorLength;
  }
  renderErrorInputEmpty() {
    this._renderErrorStyle();
    this._inputBox.value = this._msgErrorInputEmpty;
  }

  _renderErrorStyle() {
    this._inputBox.style.fontSize = "0.875rem";
    this._inputBox.style.color = "#E22100";
    this._inputBox.style.borderColor = "#E22100";

    this._btnSave.style.backgroundColor = "#E22100";
    this._btnSave.style.color = "#fff";
    this._btnSave.innerText = "ERROR!";
    this._btnSave.focus({focusVisible:false});
    setTimeout(() => {
      this._clear();
      this._inputBox.style.fontSize = `1.25rem`;
      this._inputBox.style.color = "#172c66";
      this._inputBox.style.borderColor = "#001858";

      this._btnSave.style.backgroundColor = "#f582ae";
      this._btnSave.style.color = "#001858";
      this._btnSave.innerText = "SAVE!";
      this._btnSave.focus({focusVisible:true});
    }, 1500);
  }
}
export default new VideoView();
