import type { CourseData } from "../types/course";
import { unit01 } from "./units/unit01-sozcukte-anlam";
import { unit02 } from "./units/unit02-sozcukler-arasi-anlam-iliskileri";
import { unit03 } from "./units/unit03-fiilimsiler-eylemsiler";
import { unit04 } from "./units/unit04-cumlede-anlam";
import { unit05 } from "./units/unit05-gecis-ve-baglanti-ifadeleri";
import { unit06 } from "./units/unit06-deyimler-atasozleri-ve-ozdeyisler";
import { unit07 } from "./units/unit07-cumlenin-ogeleri";
import { unit08 } from "./units/unit08-cumlede-vurgu";
import { unit09 } from "./units/unit09-fiilde-eylemde-cati";
import { unit10 } from "./units/unit10-parcada-anlam";
import { unit11 } from "./units/unit11-sozel-mantik-ve-muhakeme";
import { unit12 } from "./units/unit12-cumle-turleri";
import { unit13 } from "./units/unit13-yapisal-anlatim-bozukluklari";
import { unit14 } from "./units/unit14-yazim-kurallari";
import { unit15 } from "./units/unit15-noktalama-isaretleri";
import { unit16 } from "./units/unit16-soz-sanatlari";
import { unit17 } from "./units/unit17-metin-turleri";
import { unit18 } from "./units/unit18-grafik-yorumlama-ve-gorsel-okuma";

export const courseData: CourseData = {
  grade: "8. sınıf",
  subject: "Türkçe",
  units: [
    unit01,
    unit02,
    unit03,
    unit04,
    unit05,
    unit06,
    unit07,
    unit08,
    unit09,
    unit10,
    unit11,
    unit12,
    unit13,
    unit14,
    unit15,
    unit16,
    unit17,
    unit18,
  ],
};

export default courseData;
