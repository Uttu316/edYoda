var trackArray = [];
$(function () {
  const audioSystem = $("#audio-system")[0];

  audioSystem.repeatCurretTrack = repeatCurretTrack;
  const playBtn = $("#play-btn");
  const pauseBtn = $("#pause-btn");

  playBtn.on({
    click: function () {
      audioSystem.play();
      playBtn.hide();
      pauseBtn.show();
    },
  });
  pauseBtn.on({
    click: function () {
      audioSystem.pause();
      pauseBtn.hide();
      playBtn.show();
    },
  });

  getTracks();
});

function repeatCurretTrack() {
  this.paus();
  this.currentTime = 0;
}

const BASE_URL = "http://5dd1894f15bbc2001448d28e.mockapi.io";
const END_POINTS = {
  getPlaylist: "/playlist",
};

function getTracks() {
  $.get(`${BASE_URL}${END_POINTS.getPlaylist}`, function (data) {
    if (data && data.length) {
      trackArray = data;
      createList(data);
      plugTrack(data[0]);
    } else {
      console.log("No track Available");
    }
  }).fail(function (e) {
    console.log(e);
  });
}

function createList(trackList) {
  const container = $(".right-section");
  trackList.forEach((item) => {
    const listItem = createListItem(item);

    container.append(listItem);
  });
}

function createListItem(trackDetails) {
  const trackTemplate = createTemplate(trackDetails);
  const listItem = $(trackTemplate);
  listItem.on({
    click: function () {
      const id = $(this).attr("data-id");
      const track = trackArray.find((i) => i.id === id);
      plugTrack(track);
    },
  });
  return listItem;
}

function createTemplate(trackDetails) {
  const { id, artist, albumCover, track } = trackDetails;
  return `
        <div class="list-item" data-id=${id}>
            <div class="list-item-image">
                 <img
                    src=${albumCover}
                    alt=${track}
                />
            </div>
            <div class="list-item-details">
                <p class="list-item-title">${track}</p>
                <p class="list-item-singer">${artist}</p>
            </div>
        </div>
    `;
}

function plugTrack(trackDetails) {
  const { file, artist, albumCover, track } = trackDetails;

  const trackImage = $(".track-image img");
  const audioSystem = $("#audio-system"); // we just need to target #audio-system, we dont need source. Try removing source from selector
  const title = $(".track-title");
  const singer = $(".track-singer");
  trackImage.attr("src", albumCover);
  audioSystem.attr("src", file);
  title.html(track);
  singer.html(artist);
}
