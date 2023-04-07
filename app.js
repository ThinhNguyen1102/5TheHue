const container = document.querySelector(".container");

const datas = [
  {
    id: 1,
    question: "How do you feel?",
    mainImageUrl: "./images/am_thuc_1_bun_bo.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_01.png",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 1,
  },
  {
    id: 2,
    question: "How do you feel?",
    mainImageUrl: "./images/am_thuc_2.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_02.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 2,
  },
  {
    id: 3,
    question: "How do you feel?",
    mainImageUrl: "./images/am_thuc_3.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_03.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 3,
  },
  {
    id: 4,
    question: "How do you feel?",
    mainImageUrl: "./images/am_thuc_4_bot_loc_heo_quay.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_04.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 4,
  },
  {
    id: 5,
    question: "How do you feel?",
    mainImageUrl: "./images/am_thuc_5_cafe_muoi.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_05.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 5,
  },
  {
    id: 6,
    question: "How do you feel?",
    mainImageUrl: "./images/am_thuc_6_tra_sen_tinh_tam.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_06.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 6,
  },
  {
    id: 7,
    question: "How do you feel?",
    mainImageUrl: "./images/am_thuc_7_banh_canh.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_07.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 7,
  },
  {
    id: 8,
    question: "How do you feel?",
    mainImageUrl: "./images/con_nguoi_1.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_08.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 8,
  },
  {
    id: 9,
    question: "How do you feel?",
    mainImageUrl: "./images/con_nguoi_2.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_09.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 9,
  },
  {
    id: 10,
    question: "How do you feel?",
    mainImageUrl: "./images/con_nguoi_3.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_10.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 10,
  },
  {
    id: 11,
    question: "How do you feel?",
    mainImageUrl: "./images/con_nguoi_4.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_11.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 11,
  },
  {
    id: 12,
    question: "How do you feel?",
    mainImageUrl: "./images/con_nguoi_5.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_12.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 12,
  },
  {
    id: 13,
    question: "How do you feel?",
    mainImageUrl: "./images/con_nguoi_6.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_13.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 13,
  },
  {
    id: 14,
    question: "How do you feel?",
    mainImageUrl: "./images/con_nguoi_7.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_14.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 14,
  },
  {
    id: 15,
    question: "How do you feel?",
    mainImageUrl: "./images/fun_1.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_15.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 15,
  },
  {
    id: 16,
    question: "How do you feel?",
    mainImageUrl: "./images/fun_2.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_16.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 16,
  },
  {
    id: 17,
    question: "How do you feel?",
    mainImageUrl: "./images/fun_4.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_17.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 17,
  },
  {
    id: 18,
    question: "How do you feel?",
    mainImageUrl: "./images/fun_dac_biet.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_18.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 18,
  },
  {
    id: 19,
    question: "How do you feel?",
    mainImageUrl: "./images/fun.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_19.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 19,
  },
  {
    id: 20,
    question: "How do you feel?",
    mainImageUrl: "./images/Kien_truc_1_dai_noi_hue.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_20.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 20,
  },
  {
    id: 21,
    question: "How do you feel?",
    mainImageUrl: "./images/Kien_truc_2_lang_khai_dinh.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_21.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 21,
  },
  {
    id: 22,
    question: "How do you feel?",
    mainImageUrl: "./images/Kien_truc_3_lang_huong.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_22.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 22,
  },
  {
    id: 23,
    question: "How do you feel?",
    mainImageUrl: "./images/Kien_truc_4_cau_truong_tien.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_23.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 23,
  },
  {
    id: 24,
    question: "How do you feel?",
    mainImageUrl: "./images/Kien_truc_5_quoc_hoc_hue.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_24.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 24,
  },
  {
    id: 25,
    question: "How do you feel?",
    mainImageUrl: "./images/Kien_truc_6_dan_nam_giao.png",
    defaultImageUrl: "./images/default.jpg",
    resultImage: "./images/5TheHue/5TheHue_25.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 25,
  },
];

let count = 25;

const app = {
  randomCard() {
    const doneBtn = document.querySelector(".done");
    const skipBtn = document.querySelector(".skip");
    const finalCard = document.querySelector(".final_card_page");

    if (count > 0) {
      const containerCardbox = document.querySelector(".container_card-box");
      let rand = Math.floor(Math.random() * 25) % 25;

      while (datas[rand].isDone) {
        rand = Math.floor(Math.random() * 25) % 25;
      }

      if (
        containerCardbox.contains(
          containerCardbox.querySelector(".flip-card_box")
        )
      )
        containerCardbox.removeChild(
          containerCardbox.querySelector(".flip-card_box")
        );
      this.renderCards(datas[rand], containerCardbox);
    } else {
      doneBtn.classList.add("disabled");
      skipBtn.classList.add("disabled");
      finalCard.classList.add("is_show_o");
      finalCard.classList.add("add_event");
    }
  },
  handleEvent() {
    const randomCard = this.randomCard.bind(this);
    const reRenderAllCard = this.reRenderAllCard;
    document.addEventListener("click", function (e) {
      console.log(e.target);
      if (e.target.matches(".front") || e.target.matches(".back")) {
        e.target.parentNode.classList.toggle("flip-active");
      }
      if (e.target.matches("button.done")) {
        if (count >= 0) {
          const cardId = Number(
            document.querySelector(".flip-card_box").getAttribute("data-id")
          );
          datas.forEach((val) => {
            if (val.id === cardId) {
              val.isDone = true;
              count = count - 1;
              reRenderAllCard();
              console.log(count);
            }
          });
        }
        randomCard();
      }
      if (e.target.matches("button.skip")) {
        randomCard();
      }
      if (e.target.matches(".click_here")) {
        document
          .querySelector(".start_page")
          .parentNode.removeChild(document.querySelector(".start_page"));
        document.querySelector(".guide_page").classList.add("is_show");
      }
      if (e.target.matches(".click_play")) {
        document
          .querySelector(".guide_page")
          .parentNode.removeChild(document.querySelector(".guide_page"));
        document.querySelector(".container").classList.add("is_show");
      }
    });
  },
  renderCards(cardData, parentNode) {
    const cardHtml = `<div class="flip-card_box" data-id=${cardData.id}>
      <div class="card">
        <div class="front">
          <img
            class="image-card"
            src="${cardData.mainImageUrl}"
            alt="image"
          />
        </div>

        <div class="back">
            <img
            class="image-card"
            src="${cardData.resultImage}"
            alt="image"
          />
        </div>
      </div>
    </div>`;

    parentNode.insertAdjacentHTML("beforeend", cardHtml);
  },
  reRenderAllCard() {
    const containerResult = document.querySelector(".container_result");
    const container = document.querySelector(".container");

    if (containerResult) {
      const parentNode = containerResult.parentNode;
      parentNode.removeChild(containerResult);
    }
    const newContainerResult = document.createElement("div");
    newContainerResult.setAttribute("class", "container_result");
    container.appendChild(newContainerResult);

    const cardHtmls = datas.map((val) => {
      const image = val.isDone ? val.resultImage : val.defaultImageUrl;
      return `<img
            src="${image}"
            alt="image"
            data_id="${val.id}"
          />`;
    });

    cardHtmls.forEach((val) => {
      newContainerResult.insertAdjacentHTML("beforeend", val);
    });
  },
  run: function () {
    this.handleEvent();
    this.randomCard();
    this.reRenderAllCard();
  },
};

app.run();
