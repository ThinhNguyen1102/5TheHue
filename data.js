const quesCards = [
  {
    id: 1,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883943/5thehue/images/am_thuc_1_bun_bo_oi9h97.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_01_kiqlaq.png",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 1,
  },
  {
    id: 2,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883944/5thehue/images/am_thuc_2_dojrsw.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_02_oihuq7.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 2,
  },
  {
    id: 3,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883944/5thehue/images/am_thuc_3_hucjmw.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_03_szemiy.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 3,
  },
  {
    id: 4,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883944/5thehue/images/am_thuc_4_bot_loc_heo_quay_t5qfv1.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_04_dcrbs1.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 4,
  },
  {
    id: 5,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883944/5thehue/images/am_thuc_5_cafe_muoi_zxcla8.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_05_slkp2c.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 5,
  },
  {
    id: 6,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883945/5thehue/images/am_thuc_6_tra_sen_tinh_tam_dfqoiv.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_06_vpkckz.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 6,
  },
  {
    id: 7,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883945/5thehue/images/am_thuc_7_banh_canh_twixhj.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_07_j7uphl.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 7,
  },
  {
    id: 8,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883945/5thehue/images/con_nguoi_1_wnlcjk.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_08_divcxz.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 8,
  },
  {
    id: 9,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883946/5thehue/images/con_nguoi_2_cbeh3h.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_09_cwxhpk.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 9,
  },
  {
    id: 10,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883945/5thehue/images/con_nguoi_3_dmoyiq.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_10_uc5umk.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 10,
  },
  {
    id: 11,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883946/5thehue/images/con_nguoi_4_bv9cs1.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883987/5thehue/images/5TheHue/5TheHue_11_ojcj4l.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 11,
  },
  {
    id: 12,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/con_nguoi_5_ewqoim.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883987/5thehue/images/5TheHue/5TheHue_12_lxhziq.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 12,
  },
  {
    id: 13,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/con_nguoi_6_gdvo2r.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883987/5thehue/images/5TheHue/5TheHue_13_mdntyv.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 13,
  },
  {
    id: 14,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/con_nguoi_7_ko4p1r.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883987/5thehue/images/5TheHue/5TheHue_14_gq2ryl.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 14,
  },
  {
    id: 15,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/fun_1_frf6yo.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883987/5thehue/images/5TheHue/5TheHue_15_xhqkru.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 15,
  },
  {
    id: 16,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883948/5thehue/images/fun_2_axfjrx.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883987/5thehue/images/5TheHue/5TheHue_16_nxiais.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 16,
  },
  {
    id: 17,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883948/5thehue/images/fun_4_xtjx6x.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883987/5thehue/images/5TheHue/5TheHue_17_hjenml.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 17,
  },
  {
    id: 18,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883950/5thehue/images/Kien_truc_7_chua_thien_mu_buwpke.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883987/5thehue/images/5TheHue/5TheHue_18_dh1he7.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 18,
  },
  {
    id: 19,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883949/5thehue/images/fun_lwessz.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883988/5thehue/images/5TheHue/5TheHue_19_bksdpv.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 19,
  },
  {
    id: 20,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883948/5thehue/images/Kien_truc_1_dai_noi_hue_dfczvz.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883988/5thehue/images/5TheHue/5TheHue_20_rty36e.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 20,
  },
  {
    id: 21,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883949/5thehue/images/Kien_truc_2_lang_khai_dinh_oiuzcw.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883988/5thehue/images/5TheHue/5TheHue_21_xfisut.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 21,
  },
  {
    id: 22,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883949/5thehue/images/Kien_truc_3_lang_huong_yizj23.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883988/5thehue/images/5TheHue/5TheHue_22_iohmf2.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 22,
  },
  {
    id: 23,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883949/5thehue/images/Kien_truc_4_cau_truong_tien_cqp8f8.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883988/5thehue/images/5TheHue/5TheHue_23_zxwitt.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 23,
  },
  {
    id: 24,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883949/5thehue/images/Kien_truc_5_quoc_hoc_hue_bsieyq.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883988/5thehue/images/5TheHue/5TheHue_24_i7vdjh.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 24,
  },
  {
    id: 25,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883950/5thehue/images/Kien_truc_6_dan_nam_giao_jxnpxd.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883947/5thehue/images/default_cdgr5b.jpg",
    resultImage:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883989/5thehue/images/5TheHue/5TheHue_25_s3joei.gif",
    isDone: false,
    isCorrect: false,
    status: 1,
    position: 25,
  },
];

const resultCards = [
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_01_kiqlaq.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_02_oihuq7.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_03_szemiy.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_04_dcrbs1.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_05_slkp2c.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_06_vpkckz.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_07_j7uphl.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_08_divcxz.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_09_cwxhpk.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883986/5thehue/images/5TheHue/5TheHue_10_uc5umk.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883987/5thehue/images/5TheHue/5TheHue_11_ojcj4l.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883987/5thehue/images/5TheHue/5TheHue_12_lxhziq.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883987/5thehue/images/5TheHue/5TheHue_13_mdntyv.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883987/5thehue/images/5TheHue/5TheHue_14_gq2ryl.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883987/5thehue/images/5TheHue/5TheHue_15_xhqkru.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883987/5thehue/images/5TheHue/5TheHue_16_nxiais.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883987/5thehue/images/5TheHue/5TheHue_17_hjenml.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883987/5thehue/images/5TheHue/5TheHue_18_dh1he7.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883988/5thehue/images/5TheHue/5TheHue_19_bksdpv.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883988/5thehue/images/5TheHue/5TheHue_20_rty36e.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883988/5thehue/images/5TheHue/5TheHue_21_xfisut.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883988/5thehue/images/5TheHue/5TheHue_22_iohmf2.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883988/5thehue/images/5TheHue/5TheHue_23_zxwitt.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883988/5thehue/images/5TheHue/5TheHue_24_i7vdjh.gif",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883989/5thehue/images/5TheHue/5TheHue_25_s3joei.gif",
];
