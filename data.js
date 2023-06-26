const quesCards = [
  {
    id: 1,
    question: "How do you feel?",
    mainImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1680883943/5thehue/images/am_thuc_1_bun_bo_oi9h97.png",
    defaultImageUrl:
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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
      "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687669435/5thehue/images_new/khac/bia_sau_wzwu0o.png",
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

const conNguoiCards = [
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359718/5thehue/images/con_nguoi/con_nguoi_1_snm3kv.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359719/5thehue/images/con_nguoi/con_nguoi_2_baobl1.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359718/5thehue/images/con_nguoi/con_nguoi_3_l6gd1l.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359719/5thehue/images/con_nguoi/con_nguoi_4_syehnq.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359719/5thehue/images/con_nguoi/con_nguoi_5_xajebb.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359719/5thehue/images/con_nguoi/con_nguoi_6_noj2qm.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359719/5thehue/images/con_nguoi/con_nguoi_7_dko5sm.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359720/5thehue/images/con_nguoi/con_nguoi_8_i8v0s2.png",
];

const kienTrucCards = [
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359815/5thehue/images/kien_truc/Ki%E1%BA%BFn_tr%C3%BAc_1__%C4%90%E1%BA%A1i_N%E1%BB%99i_Hu%E1%BA%BF_n2gyyy.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359816/5thehue/images/kien_truc/Ki%E1%BA%BFn_tr%C3%BAc_2__L%C4%83ng_Kh%E1%BA%A3i_%C4%90%E1%BB%8Bnh_rlsay7.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359815/5thehue/images/kien_truc/Ki%E1%BA%BFn_tr%C3%BAc_3__L%C3%A0ng_H%C6%B0%C6%A1ng_yyzfu5.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359816/5thehue/images/kien_truc/Ki%E1%BA%BFn_tr%C3%BAc_4__C%E1%BA%A7u_Tr%C6%B0%E1%BB%9Dng_Ti%E1%BB%81n_w2apgj.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359816/5thehue/images/kien_truc/Ki%E1%BA%BFn_tr%C3%BAc_5__Qu%E1%BB%91c_h%E1%BB%8Dc_Hu%E1%BA%BF_cgbogv.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359816/5thehue/images/kien_truc/Ki%E1%BA%BFn_tr%C3%BAc_6__%C4%90%C3%A0n_Nam_Giao_qn2sfb.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359816/5thehue/images/kien_truc/Ki%E1%BA%BFn_tr%C3%BAc_7__Ch%C3%B9a_Thi%C3%AAn_M%E1%BB%A5_jz5dun.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359816/5thehue/images/kien_truc/Ki%E1%BA%BFn_tr%C3%BAc_7__Ch%C3%B9a_Thi%C3%AAn_M%E1%BB%A5_jz5dun.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359816/5thehue/images/kien_truc/ki%E1%BA%BFn_tr%C3%BAc_9_cm3glw.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359817/5thehue/images/kien_truc/ki%E1%BA%BFn_tr%C3%BAc_10_ewxisu.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359817/5thehue/images/kien_truc/ki%E1%BA%BFn_tr%C3%BAc_11_ww6jxr.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359817/5thehue/images/kien_truc/ki%E1%BA%BFn_tr%C3%BAc_12_pqi8dd.png",
];

const amThucCards = [
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359743/5thehue/images/am_thuc/%E1%BA%A2m_th%E1%BB%B1c_1__B%C3%BAn_b%C3%B2_lhf2je.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359743/5thehue/images/am_thuc/%E1%BA%A8m_th%E1%BB%B1c_2_iw8doa.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359744/5thehue/images/am_thuc/%E1%BA%A8m_th%E1%BB%B1c_3_ezfeno.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359744/5thehue/images/am_thuc/%E1%BA%A8m_th%E1%BB%B1c_4__B%E1%BB%99t_l%E1%BB%8Dc_heo_quay_gsaf9j.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359744/5thehue/images/am_thuc/%E1%BA%A8m_th%E1%BB%B1c_5__C%C3%A0_ph%C3%AA_mu%E1%BB%91i_sfpat6.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359744/5thehue/images/am_thuc/%E1%BA%A8m_th%E1%BB%B1c_6__Tr%C3%A0_sen_H%E1%BB%93_t%E1%BB%8Bnh_t%C3%A2m_a9lvoh.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359744/5thehue/images/am_thuc/%E1%BA%A8m_th%E1%BB%B1c_7__B%C3%A1nh_canh_htp6nc.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359744/5thehue/images/am_thuc/%E1%BA%A9m_th%E1%BB%B1c_8_yjxglb.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359745/5thehue/images/am_thuc/%E1%BA%A9m_th%E1%BB%B1c_9_fi3nst.png",
];

const funCards = [
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359787/5thehue/images/fun/Fun_2_cs5maj.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359787/5thehue/images/fun/Fun_5_sbqqf2.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359787/5thehue/images/fun/Fun_1_tvfith.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359788/5thehue/images/fun/Fun_2_mfkbvp.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359788/5thehue/images/fun/Fun_6_dnpdcz.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359788/5thehue/images/fun/Fun_4_h2fubg.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359788/5thehue/images/fun/fun7_dqmziu.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359789/5thehue/images/fun/fun8_riamv6.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359789/5thehue/images/fun/Fun_4_uwuqqs.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359788/5thehue/images/fun/Fun_c61rof.png",
  "https://res.cloudinary.com/dkdwgdq4i/image/upload/v1687359788/5thehue/images/fun/fun_7_wsrmry.png",
];

const conNguoi2 = funCards.map((val, index) => {
  return {
    cardId: index + 1,
    quesCardUrl: val,
    isDone: false,
  };
});

console.log(conNguoi2);
