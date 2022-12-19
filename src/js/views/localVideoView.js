import View from "./View";

class LocalVideoView extends View {
  _container = document.querySelector('.container')
  _parentEl = document.querySelector(".videocard-w");
  _inputBox = document.getElementById("video-id");
  _btnDeleteAll = document.querySelector(".btn--delete-all");

  _generateMarkup() {
    return `
    ${this._data
      .map((data) => {
        console.log(data.duration.slice(1,-2));
        return `<li class="videocard" data-id="${data.id}">
        <div class="videocard--img">
        <img class= "img"
        src="${data.img}"
        alt="YouTube Video Thumbnail"
        />
        </div>
        <h3 class="videocard--title">${data.title}</h3>
        <h3 class="videocard--channel-title">${data.channelTitle}</h3>
        <p class="videocard--date">
        <svg width="10" height="10" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(0.0351562,0,0,0.0351562,0,0)">
        <path d="M160,256L96,256L96,192L160,192L160,256ZM288,192L224,192L224,256L288,256L288,192ZM416,192L352,192L352,256L416,256L416,192ZM160,288L96,288L96,352L160,352L160,288ZM288,288L224,288L224,352L288,352L288,288ZM416,288L352,288L352,352L416,352L416,288ZM160,384L96,384L96,448L160,448L160,384ZM288,384L224,384L224,448L288,448L288,384ZM128,96C145.672,96 160,81.687 160,64L160,32C160,14.312 145.672,0 128,0C110.328,0 96,14.313 96,32L96,64C96,81.688 110.328,96 128,96ZM512,64L512,512L0,512L0,64L80,64C80,90.469 101.531,112 128,112C154.469,112 176,90.469 176,64L336,64C336,90.469 357.531,112 384,112C410.469,112 432,90.469 432,64L512,64ZM480,160L32,160L32,480L480,480L480,160ZM384,96C401.688,96 416,81.687 416,64L416,32C416,14.312 401.688,0 384,0C366.312,0 352,14.313 352,32L352,64C352,81.688 366.312,96 384,96Z" style="fill-rule:nonzero;" fill="#172C66"/>
    </g>
</svg>
        ${data.date}
        </p>
        <p class="videocard--duration">
        <svg width="10" height="10" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1.12496,0,0,1.12496,0.000281241,-0.00337489)">
        <g id="clock">
            <g transform="matrix(0.5,0,0,0.5,0,0.0015)">
                <path d="M23,15.004L17,15.004L17,8.002C17,7.449 16.552,7.002 16,7.002C15.448,7.002 15,7.449 15,8.002L15,16.002C15,16.555 15.448,17.002 16,17.002L23,17.002C23.553,17.002 24,16.555 24,16.002C24,15.452 23.553,15.004 23,15.004Z" style="fill:rgb(245,130,174);fill-rule:nonzero;"/>
            </g>
            <g transform="matrix(0.5,0,0,0.5,0,0.0015)">
                <path d="M16,0.003C7.163,0.003 0,7.166 0,16.003C0,24.84 7.163,32.004 16,32.004C24.837,32.004 32,24.84 32,16.003C32,7.166 24.837,0.003 16,0.003ZM16,29.004C8.832,29.004 3,23.172 3,16.003C3,8.835 8.832,3.003 16,3.003C23.168,3.003 29,8.835 29,16.003C29,23.172 23.168,29.004 16,29.004Z" style="fill:rgb(23,44,102);fill-rule:nonzero;"/>
            </g>
        </g>
    </g>
    </svg>
        ${data.duration.length < 5 && data.duration.slice(-2,-1) === ':' ? data.duration.padStart(7,'00:00:0').padEnd(8, '0') : data.duration.padStart(8, '00:00:00')}
      </p>
      <button class="btn--delete"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21Zm2-4h2V8H9Zm4 0h2V8h-2Z"/></svg></button>`;
      })
      .join("")}
    </li>
    `;

  }

  _generateResetMarkup() {
    return ``;
  }

  deleteAll() {
    this._btnDeleteAll.addEventListener("click", function () {
      localStorage.clear();
      window.location.reload();
    });
  }
}
export default new LocalVideoView();
