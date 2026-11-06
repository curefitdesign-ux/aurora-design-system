// packages/aurora-library/aurora-native-entry.tsx
import { createElement as z3 } from "react";

// packages/aurora-library/src/surfaces/AuroraBackground.tsx
import { forwardRef as F8 } from "react";

// packages/aurora-library/src/surfaces/BackgroundArtwork.tsx
import { createElement as P8, useId as z8 } from "react";

// packages/aurora-library/src/surfaces/background-assets/new.svg
var N3 = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="932.26" height="2569" viewBox="0 0 932.26 2569" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g id="Group 8432">%0A<circle id="Oval" opacity="0.6" cx="348" cy="410" r="210" fill="url(%23paint0_radial_0_4)"/>%0A<circle id="Oval_2" opacity="0.6" cx="488.771" cy="1475.86" r="210" fill="url(%23paint1_radial_0_4)"/>%0A<circle id="Oval_3" opacity="0.6" cx="488.339" cy="2193.34" r="210" fill="url(%23paint2_radial_0_4)"/>%0A<circle id="Oval_4" opacity="0.6" cx="306.339" cy="900.339" r="210" fill="url(%23paint3_radial_0_4)"/>%0A<circle id="Oval_5" opacity="0.6" cx="281" cy="1885" r="210" fill="url(%23paint4_radial_0_4)"/>%0A<circle id="Oval_6" opacity="0.6" cx="443.57" cy="1172.4" r="210" fill="url(%23paint5_radial_0_4)"/>%0A<circle id="Oval_7" opacity="0.6" cx="495" cy="584" r="210" fill="url(%23paint6_radial_0_4)"/>%0A<circle id="Oval_8" opacity="0.6" cx="280.814" cy="1382.91" r="210" fill="url(%23paint7_radial_0_4)"/>%0A<circle id="Oval_9" opacity="0.6" cx="551" cy="835" r="210" fill="url(%23paint8_radial_0_4)"/>%0A<circle id="Oval_10" opacity="0.6" cx="296.505" cy="1044.56" r="210" fill="url(%23paint9_radial_0_4)"/>%0A<circle id="Oval_11" opacity="0.6" cx="257" cy="223" r="210" fill="url(%23paint10_radial_0_4)"/>%0A<circle id="Oval_12" opacity="0.6" cx="651.921" cy="1604.82" r="210" fill="url(%23paint11_radial_0_4)"/>%0A<circle id="Oval_13" opacity="0.6" cx="299" cy="462" r="252" fill="url(%23paint12_radial_0_4)"/>%0A<circle id="Oval_14" opacity="0.6" cx="252" cy="2317" r="252" fill="url(%23paint13_radial_0_4)"/>%0A<circle id="Oval_15" opacity="0.6" cx="467.406" cy="1958.4" r="252" fill="url(%23paint14_radial_0_4)"/>%0A<circle id="Oval Copy" opacity="0.6" cx="525" cy="210" r="210" fill="url(%23paint15_radial_0_4)"/>%0A<circle id="Oval Copy_2" opacity="0.6" cx="416.127" cy="1732.86" r="210" fill="url(%23paint16_radial_0_4)"/>%0A<circle id="Oval Copy_3" opacity="0.6" cx="327.339" cy="764.339" r="210" fill="url(%23paint17_radial_0_4)"/>%0A<circle id="Oval Copy_4" opacity="0.6" cx="210" cy="2095" r="210" fill="url(%23paint18_radial_0_4)"/>%0A<circle id="Oval Copy_5" opacity="0.6" cx="318.708" cy="1208.14" r="210" fill="url(%23paint19_radial_0_4)"/>%0A</g>%0A<defs>%0A<radialGradient id="paint0_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(348 410) rotate(90) scale(210)">%0A<stop stop-color="%2300BEFF" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%2300BEFF" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint1_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(488.771 1475.86) rotate(-115.726) scale(210)">%0A<stop stop-color="%2300BEFF" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%2300BEFF" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint2_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(488.339 2193.34) rotate(-115.726) scale(210)">%0A<stop stop-color="%2300BEFF" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%2300BEFF" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint3_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(306.339 900.339) rotate(-115.726) scale(210)">%0A<stop stop-color="%2300BEFF" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%2300BEFF" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint4_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(281 1885) rotate(90) scale(210)">%0A<stop stop-color="%2300BEFF" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%2300BEFF" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint5_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(443.57 1172.4) rotate(-115.726) scale(210)">%0A<stop stop-color="%2300BEFF" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%2300BEFF" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint6_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(495 584) rotate(90) scale(210)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint7_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(280.814 1382.91) rotate(-115.726) scale(210)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint8_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(551 835) rotate(90) scale(210)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint9_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(296.505 1044.56) rotate(-115.726) scale(210)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint10_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(257 223) rotate(90) scale(210)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint11_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(651.921 1604.82) rotate(-115.726) scale(210)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint12_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(299 462) rotate(90) scale(252)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint13_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(252 2317) rotate(90) scale(252)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint14_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(467.406 1958.4) rotate(-115.726) scale(252)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint15_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(525 210) rotate(90) scale(210)">%0A<stop stop-color="%23FF3278" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FF3278" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint16_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(416.127 1732.86) rotate(-115.726) scale(210)">%0A<stop stop-color="%23FF3278" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FF3278" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint17_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(327.339 764.339) rotate(-115.726) scale(210)">%0A<stop stop-color="%23FF3278" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FF3278" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint18_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(210 2095) rotate(90) scale(210)">%0A<stop stop-color="%23FF3278" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FF3278" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint19_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(318.708 1208.14) rotate(-115.726) scale(210)">%0A<stop stop-color="%23FF3278" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FF3278" stop-opacity="0"/>%0A</radialGradient>%0A</defs>%0A</svg>%0A';

// packages/aurora-library/src/surfaces/background-assets/old.svg
var A3 = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="932.26" height="2569" viewBox="0 0 932.26 2569" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g id="Group 8432">%0A<circle id="Oval" opacity="0.6" cx="348" cy="410" r="210" fill="url(%23paint0_radial_0_4)"/>%0A<circle id="Oval_2" opacity="0.6" cx="488.771" cy="1475.86" r="210" fill="url(%23paint1_radial_0_4)"/>%0A<circle id="Oval_3" opacity="0.6" cx="488.339" cy="2193.34" r="210" fill="url(%23paint2_radial_0_4)"/>%0A<circle id="Oval_4" opacity="0.6" cx="306.339" cy="900.339" r="210" fill="url(%23paint3_radial_0_4)"/>%0A<circle id="Oval_5" opacity="0.6" cx="281" cy="1885" r="210" fill="url(%23paint4_radial_0_4)"/>%0A<circle id="Oval_6" opacity="0.6" cx="443.57" cy="1172.4" r="210" fill="url(%23paint5_radial_0_4)"/>%0A<circle id="Oval_7" opacity="0.6" cx="495" cy="584" r="210" fill="url(%23paint6_radial_0_4)"/>%0A<circle id="Oval_8" opacity="0.6" cx="280.814" cy="1382.91" r="210" fill="url(%23paint7_radial_0_4)"/>%0A<circle id="Oval_9" opacity="0.6" cx="551" cy="835" r="210" fill="url(%23paint8_radial_0_4)"/>%0A<circle id="Oval_10" opacity="0.6" cx="296.505" cy="1044.56" r="210" fill="url(%23paint9_radial_0_4)"/>%0A<circle id="Oval_11" opacity="0.6" cx="257" cy="223" r="210" fill="url(%23paint10_radial_0_4)"/>%0A<circle id="Oval_12" opacity="0.6" cx="651.921" cy="1604.82" r="210" fill="url(%23paint11_radial_0_4)"/>%0A<circle id="Oval_13" opacity="0.6" cx="299" cy="462" r="252" fill="url(%23paint12_radial_0_4)"/>%0A<circle id="Oval_14" opacity="0.6" cx="252" cy="2317" r="252" fill="url(%23paint13_radial_0_4)"/>%0A<circle id="Oval_15" opacity="0.6" cx="467.406" cy="1958.4" r="252" fill="url(%23paint14_radial_0_4)"/>%0A<circle id="Oval Copy" opacity="0.6" cx="525" cy="210" r="210" fill="url(%23paint15_radial_0_4)"/>%0A<circle id="Oval Copy_2" opacity="0.6" cx="416.127" cy="1732.86" r="210" fill="url(%23paint16_radial_0_4)"/>%0A<circle id="Oval Copy_3" opacity="0.6" cx="327.339" cy="764.339" r="210" fill="url(%23paint17_radial_0_4)"/>%0A<circle id="Oval Copy_4" opacity="0.6" cx="210" cy="2095" r="210" fill="url(%23paint18_radial_0_4)"/>%0A<circle id="Oval Copy_5" opacity="0.6" cx="318.708" cy="1208.14" r="210" fill="url(%23paint19_radial_0_4)"/>%0A</g>%0A<defs>%0A<radialGradient id="paint0_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(348 410) rotate(90) scale(210)">%0A<stop stop-color="%2300BEFF" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%2300BEFF" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint1_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(488.771 1475.86) rotate(-115.726) scale(210)">%0A<stop stop-color="%2300BEFF" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%2300BEFF" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint2_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(488.339 2193.34) rotate(-115.726) scale(210)">%0A<stop stop-color="%2300BEFF" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%2300BEFF" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint3_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(306.339 900.339) rotate(-115.726) scale(210)">%0A<stop stop-color="%2300BEFF" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%2300BEFF" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint4_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(281 1885) rotate(90) scale(210)">%0A<stop stop-color="%2300BEFF" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%2300BEFF" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint5_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(443.57 1172.4) rotate(-115.726) scale(210)">%0A<stop stop-color="%2300BEFF" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%2300BEFF" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint6_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(495 584) rotate(90) scale(210)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint7_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(280.814 1382.91) rotate(-115.726) scale(210)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint8_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(551 835) rotate(90) scale(210)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint9_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(296.505 1044.56) rotate(-115.726) scale(210)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint10_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(257 223) rotate(90) scale(210)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint11_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(651.921 1604.82) rotate(-115.726) scale(210)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint12_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(299 462) rotate(90) scale(252)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint13_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(252 2317) rotate(90) scale(252)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint14_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(467.406 1958.4) rotate(-115.726) scale(252)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint15_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(525 210) rotate(90) scale(210)">%0A<stop stop-color="%23FF3278" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FF3278" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint16_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(416.127 1732.86) rotate(-115.726) scale(210)">%0A<stop stop-color="%23FF3278" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FF3278" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint17_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(327.339 764.339) rotate(-115.726) scale(210)">%0A<stop stop-color="%23FF3278" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FF3278" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint18_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(210 2095) rotate(90) scale(210)">%0A<stop stop-color="%23FF3278" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FF3278" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint19_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(318.708 1208.14) rotate(-115.726) scale(210)">%0A<stop stop-color="%23FF3278" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FF3278" stop-opacity="0"/>%0A</radialGradient>%0A</defs>%0A</svg>%0A';

// packages/aurora-library/src/surfaces/background-assets/pilate.svg
var Q3 = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="932.26" height="2556" viewBox="0 0 932.26 2556" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g id="Group 8432">%0A<circle id="Oval" opacity="0.6" cx="348" cy="397" r="210" fill="url(%23paint0_radial_0_4)"/>%0A<circle id="Oval_2" opacity="0.6" cx="488.771" cy="1462.86" r="210" fill="url(%23paint1_radial_0_4)"/>%0A<circle id="Oval_3" opacity="0.6" cx="488.339" cy="2180.34" r="210" fill="url(%23paint2_radial_0_4)"/>%0A<circle id="Oval_4" opacity="0.6" cx="306.339" cy="887.339" r="210" fill="url(%23paint3_radial_0_4)"/>%0A<circle id="Oval_5" opacity="0.6" cx="281" cy="1872" r="210" fill="url(%23paint4_radial_0_4)"/>%0A<circle id="Oval_6" opacity="0.6" cx="443.57" cy="1159.4" r="210" fill="url(%23paint5_radial_0_4)"/>%0A<circle id="Oval_7" opacity="0.6" cx="495" cy="571" r="210" fill="url(%23paint6_radial_0_4)"/>%0A<circle id="Oval_8" opacity="0.6" cx="280.814" cy="1369.91" r="210" fill="url(%23paint7_radial_0_4)"/>%0A<circle id="Oval_9" opacity="0.6" cx="551" cy="822" r="210" fill="url(%23paint8_radial_0_4)"/>%0A<circle id="Oval_10" opacity="0.6" cx="296.505" cy="1031.56" r="210" fill="url(%23paint9_radial_0_4)"/>%0A<circle id="Oval_11" opacity="0.6" cx="257" cy="210" r="210" fill="url(%23paint10_radial_0_4)"/>%0A<circle id="Oval_12" opacity="0.6" cx="651.921" cy="1591.82" r="210" fill="url(%23paint11_radial_0_4)"/>%0A<circle id="Oval_13" opacity="0.6" cx="299" cy="449" r="252" fill="url(%23paint12_radial_0_4)"/>%0A<circle id="Oval_14" opacity="0.6" cx="252" cy="2304" r="252" fill="url(%23paint13_radial_0_4)"/>%0A<circle id="Oval_15" opacity="0.6" cx="467.406" cy="1945.4" r="252" fill="url(%23paint14_radial_0_4)"/>%0A<circle id="Oval Copy" opacity="0.6" cx="485" cy="547" r="210" fill="url(%23paint15_radial_0_4)"/>%0A<circle id="Oval Copy_2" opacity="0.6" cx="416.127" cy="1719.86" r="210" fill="url(%23paint16_radial_0_4)"/>%0A<circle id="Oval Copy_3" opacity="0.6" cx="327.339" cy="751.339" r="210" fill="url(%23paint17_radial_0_4)"/>%0A<circle id="Oval Copy_4" opacity="0.6" cx="210" cy="2082" r="210" fill="url(%23paint18_radial_0_4)"/>%0A<circle id="Oval Copy_5" opacity="0.6" cx="318.708" cy="1195.14" r="210" fill="url(%23paint19_radial_0_4)"/>%0A</g>%0A<defs>%0A<radialGradient id="paint0_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(348 397) rotate(90) scale(210)">%0A<stop stop-color="%23E5915D" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23DB763B" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint1_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(488.771 1462.86) rotate(-115.726) scale(210)">%0A<stop stop-color="%23E5915D" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23DB763B" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint2_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(488.339 2180.34) rotate(-115.726) scale(210)">%0A<stop stop-color="%23E5915D" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23DB763B" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint3_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(306.339 887.339) rotate(-115.726) scale(210)">%0A<stop stop-color="%23E5915D" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23DB763B" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint4_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(281 1872) rotate(90) scale(210)">%0A<stop stop-color="%23E5915D" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23DB763B" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint5_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(443.57 1159.4) rotate(-115.726) scale(210)">%0A<stop stop-color="%23E5915D" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23DB763B" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint6_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(495 571) rotate(90) scale(210)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint7_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(280.814 1369.91) rotate(-115.726) scale(210)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint8_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(551 822) rotate(90) scale(210)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint9_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(296.505 1031.56) rotate(-115.726) scale(210)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint10_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(257 210) rotate(90) scale(210)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint11_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(651.921 1591.82) rotate(-115.726) scale(210)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint12_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(299 449) rotate(90) scale(252)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint13_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(252 2304) rotate(90) scale(252)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint14_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(467.406 1945.4) rotate(-115.726) scale(252)">%0A<stop stop-color="%23FFDC18" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFDC18" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint15_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(485 547) rotate(90) scale(210)">%0A<stop stop-color="%23FF9A27" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFA13D" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint16_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(416.127 1719.86) rotate(-115.726) scale(210)">%0A<stop stop-color="%23FF9A27" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFA13D" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint17_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(327.339 751.339) rotate(-115.726) scale(210)">%0A<stop stop-color="%23FF9A27" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFA13D" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint18_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(210 2082) rotate(90) scale(210)">%0A<stop stop-color="%23FF9A27" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFA13D" stop-opacity="0"/>%0A</radialGradient>%0A<radialGradient id="paint19_radial_0_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(318.708 1195.14) rotate(-115.726) scale(210)">%0A<stop stop-color="%23FF9A27" stop-opacity="0.2"/>%0A<stop offset="1" stop-color="%23FFA13D" stop-opacity="0"/>%0A</radialGradient>%0A</defs>%0A</svg>%0A';

// packages/aurora-library/src/surfaces/background-assets/earthy-primary.svg
var I3 = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="898" height="780" viewBox="0 0 898 780" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g id="Group 2370">%0A<g id="Ellipse 148" filter="url(%23filter0_f_0_7)">%0A<circle cx="594" cy="476" r="104" fill="%23F1710F"/>%0A</g>%0A<g id="Ellipse 149" filter="url(%23filter1_f_0_7)">%0A<circle cx="304" cy="304" r="104" fill="%236D7FC0"/>%0A</g>%0A</g>%0A<defs>%0A<filter id="filter0_f_0_7" x="290" y="172" width="608" height="608" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">%0A<feFlood flood-opacity="0" result="BackgroundImageFix"/>%0A<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>%0A<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_0_7"/>%0A</filter>%0A<filter id="filter1_f_0_7" x="0" y="0" width="608" height="608" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">%0A<feFlood flood-opacity="0" result="BackgroundImageFix"/>%0A<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>%0A<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_0_7"/>%0A</filter>%0A</defs>%0A</svg>%0A';

// packages/aurora-library/src/surfaces/background-assets/earthy-secondary.svg
var D3 = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="835" height="621" viewBox="0 0 835 621" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g id="Group 2374">%0A<g id="Ellipse 148" filter="url(%23filter0_f_0_4)">%0A<circle cx="531" cy="317" r="104" fill="%23F1710F"/>%0A</g>%0A<g id="Ellipse 149" filter="url(%23filter1_f_0_4)">%0A<circle cx="304" cy="304" r="104" fill="%236D7FC0"/>%0A</g>%0A</g>%0A<defs>%0A<filter id="filter0_f_0_4" x="227" y="13" width="608" height="608" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">%0A<feFlood flood-opacity="0" result="BackgroundImageFix"/>%0A<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>%0A<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_0_4"/>%0A</filter>%0A<filter id="filter1_f_0_4" x="0" y="0" width="608" height="608" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">%0A<feFlood flood-opacity="0" result="BackgroundImageFix"/>%0A<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>%0A<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_0_4"/>%0A</filter>%0A</defs>%0A</svg>%0A';

// packages/aurora-library/src/surfaces/BackgroundArtwork.tsx
import { Fragment as O3, jsx as v1, jsxs as h5 } from "react/jsx-runtime";
var N8 = { new: "22777:33786", old: "649:1", earthy: "22777:33719", pilate: "26217:1380" };
function v5({ variant: t, as: e = "span", scale: a = 1, svgPreserveAspectRatio: r, className: o, style: i, title: n, children: L, nodeOverrides: c, textOverrides: C, textRendering: p, assetUrl: l, text: s, ...d }) {
  let h = `aurora-earthy-${z8().replace(/[^a-z0-9]/gi, "")}`, f = t === "earthy", x = t === "pilate";
  return P8(
    e,
    { ...d, className: o, "data-aurora-source-node": N8[t], style: { display: "inline-block", position: "relative", width: 375 * a, height: 812 * a, verticalAlign: "top", lineHeight: 0, ...i } },
    /* @__PURE__ */ h5("svg", { xmlns: "http://www.w3.org/2000/svg", width: 375 * a, height: 812 * a, viewBox: "0 0 375 812", preserveAspectRatio: r, style: { display: "block", overflow: "hidden" }, role: n ? "img" : void 0, "aria-label": n, focusable: "false", children: [
      n && /* @__PURE__ */ v1("title", { children: n }),
      f ? /* @__PURE__ */ h5(O3, { children: [
        /* @__PURE__ */ v1("defs", { children: /* @__PURE__ */ v1("filter", { id: h, x: "-400", y: "-400", width: "1175", height: "1612", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB", children: /* @__PURE__ */ v1("feGaussianBlur", { stdDeviation: "100" }) }) }),
        /* @__PURE__ */ v1("rect", { width: "375", height: "812", fill: "#4d536a" }),
        /* @__PURE__ */ h5("g", { filter: `url(#${h})`, children: [
          /* @__PURE__ */ v1("rect", { x: "-1000", y: "-1000", width: "4000", height: "10000", fill: "#4d536a" }),
          [0, 489, 869, 1396, 2447, 2993, 3539, 4085, 4631, 5177, 5599, 6021, 6443].map((y, b) => /* @__PURE__ */ v1("image", { href: I3, x: (b < 3 ? -45 : -86) - 200, y: y - 200, width: "898", height: "780" }, y)),
          /* @__PURE__ */ v1("image", { href: D3, x: -182, y: 1796, width: "835", height: "621" })
        ] }),
        /* @__PURE__ */ v1("rect", { width: "375", height: "812", fill: "#000", opacity: ".4" })
      ] }) : /* @__PURE__ */ h5(O3, { children: [
        /* @__PURE__ */ v1("rect", { width: "375", height: "812", fill: x ? "#885649" : t === "new" ? "#090c26" : "#000" }),
        /* @__PURE__ */ v1("image", { href: x ? Q3 : t === "new" ? N3 : A3, x: "-183", y: x ? -96 : -109, width: "932.26", height: x ? 2556 : 2569 })
      ] })
    ] }),
    L
  );
}
var R3 = (t) => /* @__PURE__ */ v1(v5, { ...t, variant: "new" }), w3 = (t) => /* @__PURE__ */ v1(v5, { ...t, variant: "old" }), T3 = (t) => /* @__PURE__ */ v1(v5, { ...t, variant: "earthy" }), E3 = (t) => /* @__PURE__ */ v1(v5, { ...t, variant: "pilate" });

// packages/aurora-library/src/offline/Renderer.tsx
import { createElement as A8, useId as Q8 } from "react";
import { Fragment as k8, jsx as I, jsxs as V1 } from "react/jsx-runtime";
var E1 = { m00: 1, m01: 0, m02: 0, m10: 0, m11: 1, m12: 0 }, t2 = (t) => (t || []).filter((e) => e.visible !== !1 && (e.opacity ?? 1) > 0), G = (t, e = 0) => typeof t == "number" && Number.isFinite(t) ? t : e, Y0 = (t) => {
  let e = t || E1;
  return `matrix(${[e.m00, e.m10, e.m01, e.m11, e.m02, e.m12].map((r) => Math.abs(r) < 1e-10 ? 0 : r).join(" ")})`;
}, u5 = (t) => t.replace(/^\s*(?:Z\s*)+/i, ""), e2 = (t) => t === "ODD" || t === "EVENODD" ? "evenodd" : "nonzero", U3 = (t) => t && !["NORMAL", "PASS_THROUGH"].includes(t) ? t.toLowerCase().replaceAll("_", "-") : void 0;
function W0(t, e = 1) {
  return t ? `rgba(${Math.round(G(t.r) * 255)},${Math.round(G(t.g) * 255)},${Math.round(G(t.b) * 255)},${G(t.a, 1) * e})` : "transparent";
}
function I8(t = E1) {
  let e = t.m00 * t.m11 - t.m01 * t.m10;
  return Math.abs(e) < 1e-12 ? null : { m00: t.m11 / e, m01: -t.m01 / e, m02: (t.m01 * t.m12 - t.m11 * t.m02) / e, m10: -t.m10 / e, m11: t.m00 / e, m12: (t.m10 * t.m02 - t.m00 * t.m12) / e };
}
function k3(t, e, a) {
  return { m00: t.m00 * e, m01: t.m01 * e, m02: t.m02 * e, m10: t.m10 * a, m11: t.m11 * a, m12: t.m12 * a };
}
function H3(t) {
  let e = (t.fontName?.style || "").toLowerCase().replaceAll(" ", ""), a = { thin: 100, extralight: 200, light: 300, regular: 400, normal: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800, black: 900, heavy: 900 }, r = e.replace("italic", "") || "regular";
  return { fontFamily: t.fontName?.family || "Inter", fontSize: t.fontSize || 14, fontWeight: t.fontWeight || a[r] || 400, fontStyle: e.includes("italic") ? "italic" : "normal" };
}
function D8(t, e) {
  return e === "UPPER" || e === "UPPERCASE" ? t.toUpperCase() : e === "LOWER" || e === "LOWERCASE" ? t.toLowerCase() : e === "TITLE" ? t.replace(/\b\w/g, (a) => a.toUpperCase()) : t;
}
function O8(t, e, a, r) {
  let o = t.textData?.characterStyleIDs || [], i = new Map((t.textData?.styleOverrideTable || []).map((L) => [L.styleID, L])), n = [];
  for (let L = a; L < r; L++) {
    let c = o[L] || 0, C = n.at(-1);
    C && C.style.styleID === c ? C.end = L + 1 : n.push({ start: L, end: L + 1, style: { styleID: c, ...i.get(c) } });
  }
  return n.map((L) => ({ text: e.slice(L.start, L.end), style: L.style }));
}
function a2(t, e, a, r, o) {
  let i = t.opacity ?? 1, n = { mixBlendMode: U3(t.blendMode) };
  if (t.type === "SOLID") return { value: W0(t.color), opacity: i, style: n };
  let L = (t.stops || []).map((C, p) => /* @__PURE__ */ I("stop", { offset: C.position, stopColor: W0(C.color) }, p)), c = I8(t.transform);
  if (t.type === "GRADIENT_LINEAR") {
    let C = t.transform || E1, p = C.m00 / (a || 1), l = C.m01 / (r || 1), s = p * p + l * l, d = s ? { x: -C.m02 * p / s, y: -C.m02 * l / s } : { x: 0, y: 0 }, h = s ? { x: (1 - C.m02) * p / s, y: (1 - C.m02) * l / s } : { x: a, y: 0 };
    return { value: `url(#${e})`, opacity: i, style: n, definition: /* @__PURE__ */ I("linearGradient", { id: e, gradientUnits: "userSpaceOnUse", x1: d.x, y1: d.y, x2: h.x, y2: h.y, children: L }, e) };
  }
  if (t.type === "GRADIENT_RADIAL") {
    let C = k3(c || E1, a, r);
    return { value: `url(#${e})`, opacity: i, style: n, definition: /* @__PURE__ */ I("radialGradient", { id: e, gradientUnits: "userSpaceOnUse", cx: ".5", cy: ".5", r: ".5", gradientTransform: Y0(C), children: L }, e) };
  }
  if (t.type === "GRADIENT_ANGULAR") {
    let C = (t.stops || []).map((M) => `${W0(M.color)} ${M.position * 100}%`).join(","), p = t.transform || E1, l = [[0, 0], [1, 0], [0, 1], [1, 1]].map(([M, u]) => ({ x: p.m00 * M + p.m01 * u + p.m02, y: p.m10 * M + p.m11 * u + p.m12 })), s = Math.min(...l.map((M) => M.x), 0), d = Math.min(...l.map((M) => M.y), 0), h = Math.max(...l.map((M) => M.x), 1), f = Math.max(...l.map((M) => M.y), 1), x = 256, y = (h - s) * x, b = (f - d) * x, Z = k3(c || E1, a, r);
    Z.m00 /= x, Z.m01 /= x, Z.m10 /= x, Z.m11 /= x;
    let g = `conic-gradient(from 90deg at ${(0.5 - s) * x}px ${(0.5 - d) * x}px,${C})`;
    return { value: `url(#${e})`, opacity: i, style: n, definition: /* @__PURE__ */ I("pattern", { id: e, patternUnits: "userSpaceOnUse", width: a, height: r, children: /* @__PURE__ */ I("g", { transform: Y0(Z), children: /* @__PURE__ */ I("foreignObject", { x: s * x, y: d * x, width: y, height: b, children: /* @__PURE__ */ I("div", { xmlns: "http://www.w3.org/1999/xhtml", style: { width: y, height: b, background: g } }) }) }) }, e) };
  }
  if (t.type === "IMAGE") {
    if (!t.imagePath) return { value: "none", opacity: 0 };
    let C = o(t.imagePath), p = t.imageScaleMode === "STRETCH" ? "none" : t.imageScaleMode === "FIT" ? "xMidYMid meet" : "xMidYMid slice", l = t.imageScaleMode === "TILE", s = l && G(t.originalImageWidth, a) * (t.scale || 1) || a, d = l && G(t.originalImageHeight, r) * (t.scale || 1) || r, h = c && t.transform && JSON.stringify(t.transform) !== JSON.stringify(E1) ? Y0({ m00: c.m00, m01: c.m01 * a / (r || 1), m02: c.m02 * a, m10: c.m10 * r / (a || 1), m11: c.m11, m12: c.m12 * r }) : void 0;
    return { value: `url(#${e})`, opacity: i, style: n, definition: /* @__PURE__ */ I("pattern", { id: e, patternUnits: "userSpaceOnUse", width: s, height: d, children: /* @__PURE__ */ I("image", { href: C, width: s, height: d, preserveAspectRatio: p, transform: h }) }, e) };
  }
  return { value: "none", opacity: 0 };
}
function g5(t, e) {
  let a = G(t.size?.x), r = G(t.size?.y);
  if (t.type === "ELLIPSE") return /* @__PURE__ */ I("ellipse", { cx: a / 2, cy: r / 2, rx: a / 2, ry: r / 2, ...e });
  if (t.type === "LINE") return /* @__PURE__ */ I("line", { x1: "0", y1: "0", x2: a, y2: r, ...e });
  if (t.type === "REGULAR_POLYGON" || t.type === "STAR") {
    let o = Math.max(3, t.count || t.pointCount || 3), i = Array.from({ length: o * (t.type === "STAR" ? 2 : 1) }, (n, L) => {
      let c = L / (o * (t.type === "STAR" ? 2 : 1)) * Math.PI * 2 - Math.PI / 2, C = t.type === "STAR" && L % 2 ? t.starInnerScale ?? 0.5 : 1;
      return `${a / 2 + Math.cos(c) * a / 2 * C},${r / 2 + Math.sin(c) * r / 2 * C}`;
    }).join(" ");
    return /* @__PURE__ */ I("polygon", { points: i, ...e });
  }
  return /* @__PURE__ */ I("rect", { width: a, height: r, rx: t.cornerRadius || t.rectangleCornerRadii?.[0] || 0, ...e });
}
function R8(t, e) {
  return { m00: t.m00 * e.m00 + t.m01 * e.m10, m01: t.m00 * e.m01 + t.m01 * e.m11, m02: t.m00 * e.m02 + t.m01 * e.m12 + t.m02, m10: t.m10 * e.m00 + t.m11 * e.m10, m11: t.m10 * e.m01 + t.m11 * e.m11, m12: t.m10 * e.m02 + t.m11 * e.m12 + t.m12 };
}
function w8(t, e) {
  let a = [[0, 0], [G(t.size?.x), 0], [0, G(t.size?.y)], [G(t.size?.x), G(t.size?.y)]].map(([r, o]) => ({ x: e.m00 * r + e.m01 * o + e.m02, y: e.m10 * r + e.m11 * o + e.m12 }));
  return { left: Math.min(...a.map((r) => r.x)), top: Math.min(...a.map((r) => r.y)), right: Math.max(...a.map((r) => r.x)), bottom: Math.max(...a.map((r) => r.y)) };
}
function D0(t, e, a) {
  return `${t.prefix}-${e.id.replaceAll(":", "_").replaceAll("/", "__")}-${a}`;
}
function F3(t, e, a = !1) {
  let r = [], o = [], i = G(t.size?.x), n = G(t.size?.y), L = 0, c = (p, l, s) => {
    let d = p?.length ? p : [{ svgPath: "", paints: l }];
    for (let h of d)
      for (let f of [...t2(h.paints || l)].reverse()) {
        let x = D0(e, t, `paint-${L++}`), y = a ? { value: "white", opacity: 1 } : a2(f, x, i, n, e.assetUrl);
        y.definition && o.push(y.definition);
        let b = { fill: y.value, opacity: y.opacity, style: y.style, fillRule: e2(h.windingRule) };
        h.svgPath ? r.push(/* @__PURE__ */ I("path", { d: u5(h.svgPath), ...b }, x)) : s === "fill" ? r.push(/* @__PURE__ */ I("g", { children: g5(t, b) }, x)) : G(t.strokeWeight) > 0 && r.push(/* @__PURE__ */ I("g", { children: g5(t, { fill: "none", stroke: y.value, strokeWidth: t.strokeWeight, opacity: y.opacity, strokeLinecap: t.strokeCap?.toLowerCase().replace("none", "butt"), strokeLinejoin: t.strokeJoin?.toLowerCase(), strokeDasharray: t.dashPattern?.join(" ") }) }, x));
      }
  };
  if (c(t.resolvedPaths?.fill, t.fillPaints, "fill"), ["FRAME", "SYMBOL", "INSTANCE", "RECTANGLE", "ROUNDED_RECTANGLE", "ELLIPSE", "LINE"].includes(t.type)) {
    let p = G(t.strokeWeight);
    for (let l of [...t2(t.strokePaints)].reverse()) {
      if (!p) continue;
      let s = D0(e, t, `stroke-${L++}`), d = a ? { value: "white", opacity: 1 } : a2(l, s, i, n, e.assetUrl);
      d.definition && o.push(d.definition);
      let h = t.strokeAlign === "INSIDE" && t.type !== "LINE", f = t.strokeAlign === "OUTSIDE" && t.type !== "LINE", x = (y) => t.resolvedPaths?.fill?.length ? t.resolvedPaths.fill.map((b, Z) => /* @__PURE__ */ I("path", { d: u5(b.svgPath), fillRule: e2(b.windingRule), ...y }, Z)) : g5(t, y);
      h && o.push(/* @__PURE__ */ I("clipPath", { id: `${s}-clip`, children: x({}) }, `${s}-clip`)), f && o.push(/* @__PURE__ */ V1("mask", { id: `${s}-mask`, maskUnits: "userSpaceOnUse", x: -i - p * 2, y: -n - p * 2, width: i * 3 + p * 4, height: n * 3 + p * 4, children: [
        /* @__PURE__ */ I("rect", { x: -i - p * 2, y: -n - p * 2, width: i * 3 + p * 4, height: n * 3 + p * 4, fill: "white" }),
        x({ fill: "black" })
      ] }, `${s}-mask`)), r.push(/* @__PURE__ */ I("g", { clipPath: h ? `url(#${s}-clip)` : void 0, mask: f ? `url(#${s}-mask)` : void 0, children: x({ fill: "none", stroke: d.value, strokeWidth: p * (h || f ? 2 : 1), opacity: d.opacity, style: d.style, strokeLinecap: t.strokeCap?.toLowerCase().replace("none", "butt"), strokeLinejoin: t.strokeJoin?.toLowerCase(), strokeDasharray: t.dashPattern?.join(" ") }) }, s));
    }
  } else c(t.resolvedPaths?.stroke, t.strokePaints, "stroke");
  return /* @__PURE__ */ V1(k8, { children: [
    o.length > 0 && /* @__PURE__ */ I("defs", { children: o }),
    r
  ] });
}
function G3(t, e, a) {
  let r = t.textData?.characters || "", o = D8(a ?? r, t.textCase), i = G(t.size?.x), n = G(t.size?.y), L = t.textData?.styleOverrideTable || [], c = t.textData?.characterStyleIDs || [], C = new Map(L.filter((f) => Array.isArray(f.fillPaints)).map((f) => [f.styleID, f])), p = ["UNDERLINE", "STRIKETHROUGH"].includes(t.textDecoration || "") || L.some((f) => ["UNDERLINE", "STRIKETHROUGH"].includes(f.textDecoration)), l = e.props.textRendering === "glyphs" && a === void 0 && t.textGlyphs?.length && !p, s = [
    { key: "inherited", paints: t.fillPaints, accepts: (f) => !C.has(f) },
    ...[...C].map(([f, x]) => ({ key: `style-${f}`, paints: x.fillPaints, accepts: (y) => y === f }))
  ], d = [], h = a === void 0 && t.textBaselines?.length ? t.textBaselines : o.split(`
`).map((f, x, y) => {
    let b = t.lineHeight?.units === "PIXELS" ? t.lineHeight.value : (t.fontSize || 14) * (t.lineHeight?.value || 120) / 100, Z = y.slice(0, x).reduce((g, M) => g + M.length + 1, 0);
    return { position: { x: 0, y: (t.fontSize || 14) + x * b }, firstCharacter: Z, endCharacter: Z + f.length };
  });
  for (let f of s) for (let [x, y] of [...t2(f.paints)].reverse().entries()) {
    let b = D0(e, t, `text-${f.key}-${x}`), Z = a2(y, b, i, n, e.assetUrl);
    if (Z.definition && d.push(/* @__PURE__ */ I("defs", { children: Z.definition }, `${b}-def`)), l) {
      let g = t.textGlyphs.filter((u) => f.accepts(c[u.firstCharacter] || 0));
      if (!g.length) continue;
      let M = `${b}-glyphs`;
      d.push(/* @__PURE__ */ V1("g", { opacity: Z.opacity, style: Z.style, "aria-hidden": "true", children: [
        /* @__PURE__ */ I("defs", { children: /* @__PURE__ */ I("clipPath", { id: M, children: g.map((u, v) => /* @__PURE__ */ I("path", { d: u5(u.svgPath || ""), transform: `translate(${u.position.x} ${u.position.y}) rotate(${G(u.rotation) * 180 / Math.PI}) scale(${u.fontSize} ${-u.fontSize})` }, v)) }) }),
        /* @__PURE__ */ I("rect", { x: -i, y: -n, width: i * 3, height: n * 3, fill: Z.value, clipPath: `url(#${M})` })
      ] }, b));
    } else
      d.push(/* @__PURE__ */ I("text", { fill: Z.value, opacity: Z.opacity, style: { ...H3(t), ...Z.style }, letterSpacing: t.letterSpacing?.units === "PERCENT" ? `${t.letterSpacing.value / 100}em` : t.letterSpacing?.value, xmlSpace: "preserve", "aria-hidden": C.size ? !0 : void 0, children: h.map((g, M) => /* @__PURE__ */ I("tspan", { x: g.position.x, y: g.position.y, children: O8(t, o, g.firstCharacter, Math.min(g.endCharacter, o.length)).map((u, v) => {
        let m = f.accepts(u.style.styleID || 0), S = u.style.textDecoration ?? t.textDecoration;
        return /* @__PURE__ */ I("tspan", { fill: m ? Z.value : "none", textDecoration: m ? S === "UNDERLINE" ? "underline" : S === "STRIKETHROUGH" ? "line-through" : void 0 : void 0, letterSpacing: u.style.letterSpacing?.units === "PERCENT" ? `${u.style.letterSpacing.value / 100}em` : u.style.letterSpacing?.value, style: H3({ ...t, ...u.style, fontName: u.style.fontName || t.fontName, fontWeight: u.style.fontWeight ?? (u.style.fontName ? void 0 : t.fontWeight) }), children: u.text }, v);
      }) }, M)) }, b));
  }
  return /* @__PURE__ */ I("g", { "aria-label": l || C.size ? o : void 0, role: l || C.size ? "img" : void 0, children: d });
}
function T8(t, e) {
  let a = (t.effects || []).filter((s) => s.visible !== !1), r = a.filter((s) => s.type === "DROP_SHADOW"), o = a.find((s) => s.type === "LAYER_BLUR" || s.type === "FOREGROUND_BLUR"), i = a.find((s) => s.type === "BACKGROUND_BLUR"), n = a.filter((s) => s.type === "INNER_SHADOW"), L = D0(e, t, "effects"), c = { mixBlendMode: U3(t.blendMode) };
  i && (c.backdropFilter = `blur(${G(i.radius) / 2}px)`);
  let C = [], p = [];
  r.forEach((s, d) => {
    let h = `drop-${d}`, f = G(s.spread);
    f && C.push(/* @__PURE__ */ I("feMorphology", { in: "SourceAlpha", operator: f < 0 ? "erode" : "dilate", radius: Math.abs(f), result: `${h}-spread` }, `${h}-spread`)), C.push(/* @__PURE__ */ I("feGaussianBlur", { in: f ? `${h}-spread` : "SourceAlpha", stdDeviation: G(s.radius) / 2, result: `${h}-blur` }, `${h}-blur`)), C.push(/* @__PURE__ */ I("feOffset", { in: `${h}-blur`, dx: G(s.offset?.x), dy: G(s.offset?.y), result: `${h}-offset` }, `${h}-offset`)), C.push(/* @__PURE__ */ I("feFlood", { floodColor: W0(s.color), result: `${h}-color` }, `${h}-color`)), C.push(/* @__PURE__ */ I("feComposite", { in: `${h}-color`, in2: `${h}-offset`, operator: "in", result: h }, h)), p.push(h);
  });
  let l = [];
  return n.forEach((s, d) => {
    let h = `inner-${d}`;
    C.push(/* @__PURE__ */ I("feGaussianBlur", { in: "SourceAlpha", stdDeviation: G(s.radius) / 2, result: `${h}-blur` }, `${h}-blur`)), C.push(/* @__PURE__ */ I("feOffset", { in: `${h}-blur`, dx: G(s.offset?.x), dy: G(s.offset?.y), result: `${h}-offset` }, `${h}-offset`)), C.push(/* @__PURE__ */ I("feComposite", { in: "SourceAlpha", in2: `${h}-offset`, operator: "out", result: `${h}-shape` }, `${h}-shape`)), C.push(/* @__PURE__ */ I("feFlood", { floodColor: W0(s.color), result: `${h}-color` }, `${h}-color`)), C.push(/* @__PURE__ */ I("feComposite", { in: `${h}-color`, in2: `${h}-shape`, operator: "in", result: h }, h)), l.push(h);
  }), (p.length || l.length) && C.push(/* @__PURE__ */ V1("feMerge", { result: "combined", children: [
    p.reverse().map((s) => /* @__PURE__ */ I("feMergeNode", { in: s }, s)),
    /* @__PURE__ */ I("feMergeNode", { in: "SourceGraphic" }),
    l.reverse().map((s) => /* @__PURE__ */ I("feMergeNode", { in: s }, s))
  ] }, "merge")), o && C.push(/* @__PURE__ */ I("feGaussianBlur", { in: p.length || l.length ? "combined" : "SourceGraphic", stdDeviation: G(o.radius) / 2 }, "layer-blur")), {
    style: c,
    filter: C.length ? `url(#${L})` : void 0,
    definition: C.length ? /* @__PURE__ */ I("filter", { id: L, x: "-300%", y: "-300%", width: "700%", height: "700%", colorInterpolationFilters: "sRGB", children: C }) : void 0
  };
}
function x5(t, e, a = !1) {
  let r = R8(e.world || E1, a ? E1 : t.transform || E1), o = w8(t, r), n = ["FRAME", "SYMBOL", "INSTANCE"].includes(t.type) && t.frameMaskDisabled === !1 ? e.clip ? { left: Math.max(e.clip.left, o.left), top: Math.max(e.clip.top, o.top), right: Math.min(e.clip.right, o.right), bottom: Math.min(e.clip.bottom, o.bottom) } : o : e.clip, L = { ...e, world: r, clip: n };
  if (e.clip && t.type === "ELLIPSE" && !t.children?.length) {
    let g = (t.effects || []).filter((M) => M.visible !== !1).reduce((M, u) => Math.max(M, G(u.radius) * 2 + Math.abs(G(u.offset?.x)) + Math.abs(G(u.offset?.y))), G(t.strokeWeight));
    if (o.right + g < e.clip.left || o.bottom + g < e.clip.top || o.left - g > e.clip.right || o.top - g > e.clip.bottom) return null;
  }
  let c = L.props.nodeOverrides?.[t.id] ?? L.props.nodeOverrides?.[t.sourceId], C = { ...t, ...c?.fillPaints ? { fillPaints: c.fillPaints } : {}, ...c?.strokePaints ? { strokePaints: c.strokePaints } : {} };
  if (t.resolvedPaths && (c?.fillPaints || c?.strokePaints) && (C.resolvedPaths = {
    ...t.resolvedPaths,
    fill: c.fillPaints ? t.resolvedPaths.fill?.map((g) => ({ ...g, paints: c.fillPaints })) : t.resolvedPaths.fill,
    stroke: c.strokePaints ? t.resolvedPaths.stroke?.map((g) => ({ ...g, paints: c.strokePaints })) : t.resolvedPaths.stroke
  }), c?.hidden ?? C.visible === !1) return null;
  let p = c?.text ?? L.props.textOverrides?.[C.id] ?? L.props.textOverrides?.[C.sourceId] ?? (a ? L.props.text : void 0), l = T8(C, L), s = ["FRAME", "SYMBOL", "INSTANCE"].includes(C.type) && C.frameMaskDisabled === !1, d = D0(L, C, "frame-clip"), h = [], f, x = [], y = () => {
    if (!f) return;
    let g = f, M = D0(L, g, "mask"), u = g.maskType === "VECTOR" || g.maskType === "OUTLINE";
    h.push(/* @__PURE__ */ V1("g", { mask: `url(#${M})`, children: [
      /* @__PURE__ */ I("defs", { children: /* @__PURE__ */ I("mask", { id: M, maskUnits: "userSpaceOnUse", x: "-100%", y: "-100%", width: "300%", height: "300%", style: { maskType: g.maskType === "LUMINANCE" ? "luminance" : "alpha" }, children: /* @__PURE__ */ V1("g", { transform: Y0(g.transform), opacity: g.opacity ?? 1, children: [
        g.type === "TEXT" ? G3(g, L) : F3(g, L, u),
        g.children?.map((v) => x5(v, L))
      ] }) }) }),
      x.map((v) => x5(v, L))
    ] }, M)), f = void 0, x = [];
  };
  for (let g of C.type === "BOOLEAN_OPERATION" && C.resolvedPaths?.fill?.length ? [] : C.children || [])
    g.mask || g.isMask ? (y(), f = g) : f ? x.push(g) : h.push(x5(g, L));
  y();
  let b = c?.children ?? (a ? L.props.children : void 0), Z = b !== void 0 ? /* @__PURE__ */ I("foreignObject", { width: G(C.size?.x), height: G(C.size?.y), children: /* @__PURE__ */ I("div", { xmlns: "http://www.w3.org/1999/xhtml", style: { width: "100%", height: "100%" }, children: b }) }) : h;
  return /* @__PURE__ */ V1("g", { "data-node-id": C.sourceId, "data-instance-path": C.id, "data-name": C.name, transform: a ? void 0 : Y0(C.transform), opacity: C.opacity ?? 1, filter: l.filter, style: { ...l.style, ...c?.style }, ...c?.props, children: [
    (s || l.definition) && /* @__PURE__ */ V1("defs", { children: [
      s && /* @__PURE__ */ I("clipPath", { id: d, children: C.resolvedPaths?.fill?.length ? C.resolvedPaths.fill.map((g, M) => /* @__PURE__ */ I("path", { d: u5(g.svgPath), clipRule: e2(g.windingRule) }, M)) : g5(C, {}) }),
      l.definition
    ] }),
    C.type === "TEXT" ? G3(C, L, p) : F3(C, L),
    /* @__PURE__ */ I("g", { clipPath: s ? `url(#${d})` : void 0, children: Z })
  ] }, C.id);
}
function E8({ node: t, as: e = "span", svgPreserveAspectRatio: a, scale: r = 1, title: o, textRendering: i = "native", nodeOverrides: n, textOverrides: L, text: c, assetUrl: C = (h) => new URL(h, import.meta.url).href, children: p, style: l, className: s, ...d }) {
  let h = Q8().replaceAll(":", "").replaceAll("\xAB", "").replaceAll("\xBB", ""), f = G(t.size?.x), x = G(t.size?.y), y = { prefix: `aurora-${h}`, props: { nodeOverrides: n, textOverrides: L, text: c, textRendering: i, children: p }, assetUrl: C }, b = { display: "inline-block", position: "relative", width: f * r, height: x * r, verticalAlign: "top", lineHeight: 0, ...l };
  return e === "button" && Object.assign(b, { border: 0, padding: 0, background: "transparent" }), A8(e, { ...d, className: s, style: b, "data-aurora-source-node": t.sourceId }, /* @__PURE__ */ V1("svg", { xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: a, width: f * r, height: x * r, viewBox: `0 0 ${Math.max(f, 1e-3)} ${Math.max(x, 1e-3)}`, style: { display: "block", overflow: "visible" }, role: o ? "img" : void 0, "aria-label": o, focusable: "false", children: [
    o && /* @__PURE__ */ I("title", { children: o }),
    x5(t, y, !0)
  ] }));
}
function O0(t, e = {}) {
  let a = (t.name || "").match(/(?:^|,\s*)(?:Disabled|Disable)\s*=\s*([^,]+)/i)?.[1], r = V3(e.variantValues || {}) ?? (a === void 0 ? void 0 : b5(a) === "yes"), o = (i) => /* @__PURE__ */ I(E8, { assetUrl: e.assetUrl, ...i, disabled: i.disabled === !0 || r === !0, node: t });
  return o.displayName = e.name || `AuroraNode${(e.nodeId || t.sourceId).replace(":", "_")}`, o;
}
function M5(t) {
  return t.trim().replace(/[^a-zA-Z0-9]+(.)?/g, (e, a) => a ? a.toUpperCase() : "").replace(/^./, (e) => e.toLowerCase());
}
function V3(t) {
  let e = Object.keys(t).find((a) => ["disabled", "disable"].includes(M5(a)));
  return e === void 0 ? void 0 : b5(t[e]) === "yes";
}
function b5(t) {
  return typeof t == "boolean" ? t ? "yes" : "no" : String(t).trim().toLowerCase();
}
function c1(t, e = {}) {
  if (!t.variants.length) throw new Error(`${t.name || "Aurora family"} has no source variants`);
  let a = Object.keys(e);
  if (!a.length) {
    if (t.defaultNodeId) {
      let o = t.variants.find((i) => i.nodeId === t.defaultNodeId);
      if (!o) throw new Error(`Missing declared default variant ${t.defaultNodeId}`);
      return o;
    }
    return t.defaults ? c1({ ...t, defaults: void 0 }, t.defaults) : t.variants[0];
  }
  let r = t.variants.filter((o) => a.every((i) => {
    let n = Object.keys(o.values).find((L) => L === i || M5(L) === M5(i));
    return n !== void 0 && b5(o.values[n]) === b5(e[i]);
  }));
  if (r.length !== 1) throw new Error(`${t.name || "Aurora family"}: ${r.length ? "incomplete" : "unsupported"} source variant ${JSON.stringify(e)}. Choose exact source axes: ${[...new Set(t.variants.flatMap((o) => Object.keys(o.values)))].join(", ")}.`);
  return r[0];
}
function j3(t) {
  let e = new Set(t.variants.flatMap((r) => Object.keys(r.values))), a = ({ variant: r = {}, ...o }) => {
    let i = { ...r }, n = { ...o };
    for (let C of e) for (let p of [C, M5(C)]) p in n && (i[C] = n[p], delete n[p]);
    let L = c1(t, i), c = V3(L.values);
    return c !== void 0 && (n.disabled = n.disabled === !0 || c), /* @__PURE__ */ I(L.Component, { ...n });
  };
  return a.displayName = t.name || "AuroraArchiveFamily", a;
}

// aurora-evidence:1101
var H8 = /* @__PURE__ */ j3({ name: "Classic Aurora BG", defaultNodeId: "22777:33786", variants: [
  { nodeId: "649:1", values: { Pilate: "No", Old: "Yes", New: "No", Earthy: "No" }, Component: w3 },
  { nodeId: "22777:33786", values: { Pilate: "No", Old: "No", New: "Yes", Earthy: "No" }, Component: R3 },
  { nodeId: "22777:33719", values: { Pilate: "No", Old: "No", New: "No", Earthy: "Yes" }, Component: T3 },
  { nodeId: "26217:1380", values: { Pilate: "Yes", Old: "No", New: "No", Earthy: "N" }, Component: E3 }
] }), _3 = H8;

// packages/aurora-library/src/surfaces/AuroraBackground.tsx
import { jsx as R0, jsxs as B3 } from "react/jsx-runtime";
var y5 = F8(
  function({ children: e, className: a, variant: r = "previous", clouds: o = !0, animated: i = !1, ...n }, L) {
    let c = r === "old" ? { Old: "Yes", New: "No", Earthy: "No", Pilate: "No" } : r === "earthy" ? { Old: "No", New: "No", Earthy: "Yes", Pilate: "No" } : r === "pilate" ? { Old: "No", New: "No", Earthy: "N", Pilate: "Yes" } : { Old: "No", New: "Yes", Earthy: "No", Pilate: "No" };
    return /* @__PURE__ */ B3("div", { ...n, ref: L, className: ["aurora-surface-background", a].filter(Boolean).join(" "), "data-aurora-background": r, "data-aurora-motion": r === "previous" && i ? "animated" : "static", children: [
      r === "previous" ? o && /* @__PURE__ */ B3("div", { "aria-hidden": "true", className: "aurora-bg aurora-surface-background__clouds", children: [
        /* @__PURE__ */ R0("span", { className: "aurora-bg-blob aurora-bg-blob--pink" }),
        /* @__PURE__ */ R0("span", { className: "aurora-bg-blob aurora-bg-blob--yellow" }),
        /* @__PURE__ */ R0("span", { className: "aurora-bg-blob aurora-bg-blob--blue" })
      ] }) : /* @__PURE__ */ R0("div", { "aria-hidden": "true", className: "aurora-surface-background__art", "data-figma-family": "22777:33718", children: /* @__PURE__ */ R0(_3, { variant: c, svgPreserveAspectRatio: "xMidYMin slice", style: { display: "block", width: "100%", height: "100%" } }) }),
      /* @__PURE__ */ R0("div", { className: "aurora-surface-background__content", children: e })
    ] });
  }
);

// aurora-evidence:16
import { cloneElement as _C, useEffect as q8, useId as J8, useLayoutEffect as BC, useRef as K8, useState as t9 } from "react";

// aurora-visual:3967:28876
import { jsx as m5, jsxs as G8 } from "react/jsx-runtime";
function j1({ className: t, showField: e = !1, state: a = "Focused" }) {
  let r = e && a === "Focused";
  return /* @__PURE__ */ G8("div", { className: t || `backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col items-start px-[16px] py-[12px] relative rounded-[5px] w-[335px] ${r ? '[word-break:break-word] font-["Inter:Regular"] font-normal gap-[5px] leading-[0] not-italic' : ""}`, "data-figma-layer": r ? "node-3967_28879" : "node-3967_28877", children: [
    /* @__PURE__ */ m5("div", { className: `flex flex-col justify-center relative shrink-0 w-full ${r ? "h-[12px] text-[12px] text-[rgba(255,255,255,0.4)]" : '[word-break:break-word] font-["Inter:Regular"] font-normal leading-[0] not-italic text-[#999ca0] text-[16px]'}`, "data-figma-layer": r ? "node-3967_28880" : "node-3967_28878", children: /* @__PURE__ */ m5("p", { className: r ? "leading-[16px]" : "leading-[20px]", children: "Phone No." }) }),
    r && /* @__PURE__ */ m5("div", { className: "flex flex-col justify-center relative shrink-0 text-[16px] text-white w-full", "data-node-id": "3967:28881", children: /* @__PURE__ */ m5("p", { className: "leading-[20px]", children: "+91 75383 85482" }) })
  ] });
}

// aurora-visual:3967:28861
import { jsx as Z5, jsxs as U8 } from "react/jsx-runtime";
function _1({ className: t, showField: e = !1, state: a = "Focused" }) {
  let r = e && a === "Focused";
  return /* @__PURE__ */ U8("div", { className: t || `backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col items-start px-[16px] py-[12px] relative rounded-[5px] w-[335px] ${r ? '[word-break:break-word] font-["Inter:Regular"] font-normal gap-[5px] leading-[0] not-italic' : ""}`, "data-figma-layer": r ? "node-3967_28864" : "node-3967_28862", children: [
    /* @__PURE__ */ Z5("div", { className: `flex flex-col justify-center relative shrink-0 w-full ${r ? "h-[12px] text-[12px] text-[rgba(255,255,255,0.4)]" : '[word-break:break-word] font-["Inter:Regular"] font-normal leading-[0] not-italic text-[16px] text-[rgba(255,255,255,0.6)]'}`, "data-figma-layer": r ? "node-3967_28865" : "node-3967_28863", children: /* @__PURE__ */ Z5("p", { className: r ? "leading-[16px]" : "leading-[20px]", children: r ? "Email" : "e.g. johndoe@address.com" }) }),
    r && /* @__PURE__ */ Z5("div", { className: "flex flex-col justify-center relative shrink-0 text-[16px] text-white w-full", "data-node-id": "3967:28866", children: /* @__PURE__ */ Z5("p", { className: "leading-[20px]", children: "johndoe@address.com" }) })
  ] });
}

// aurora-visual:649:1156
import { jsx as W, jsxs as B1 } from "react/jsx-runtime";
var Y3 = new URL("./assets/5c1e6539cd9aa279b9d0ff70.svg", import.meta.url).href, W3 = new URL("./assets/003ba3ada342f9e439552af6.svg", import.meta.url).href, V8 = new URL("./assets/78f9cd3c0b214d7f20bea059.svg", import.meta.url).href, j8 = new URL("./assets/a0a8f59a7e04e1659a82d21d.svg", import.meta.url).href;
function Y1({ className: t, focus: e = !1, propDefault: a = !0, typing: r = !1 }) {
  return r && !e && !a ? /* @__PURE__ */ B1("button", { className: t || "content-stretch cursor-pointer flex gap-[10px] items-center px-[20px] relative w-[375px]", "data-node-id": "649:1157", "data-name": "Typing=Yes, Focus=No, Default=No", children: [
    /* @__PURE__ */ B1("div", { className: "grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0", "data-node-id": "10468:57110", "data-name": "Back", children: [
      /* @__PURE__ */ W("div", { className: "backdrop-blur-[5px] bg-[rgba(255,255,255,0)] col-1 h-[40px] ml-0 mt-0 opacity-0 relative rounded-[5px] row-1 w-[18px]", "data-node-id": "10468:57111" }),
      /* @__PURE__ */ W("div", { className: "col-1 ml-px mt-[10px] relative row-1 size-[20px]", "data-node-id": "10468:57112", "data-name": "chevron left", children: /* @__PURE__ */ W("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: Y3 }) })
    ] }),
    /* @__PURE__ */ B1("div", { className: "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-[1_0_0] gap-[15px] items-center min-w-px px-[15px] py-[11px] relative rounded-[5px]", "data-node-id": "649:1161", "data-name": "Search Field", children: [
      /* @__PURE__ */ W("div", { className: "[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal h-[20px] justify-center leading-[0] min-w-px not-italic relative text-[14px] text-left text-white", "data-node-id": "649:1162", children: /* @__PURE__ */ W("p", { className: "leading-[20px]", children: "l" }) }),
      /* @__PURE__ */ W("div", { className: "relative shrink-0 size-[14px]", "data-node-id": "4474:28735", "data-name": "cross", children: /* @__PURE__ */ W("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: W3 }) })
    ] })
  ] }) : !r && e && !a ? /* @__PURE__ */ B1("button", { className: t || "content-stretch cursor-pointer flex gap-[10px] items-center px-[20px] relative w-[375px]", "data-node-id": "17613:43872", "data-name": "Typing=No, Focus=Yes, Default=No", children: [
    /* @__PURE__ */ B1("div", { className: "grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0", "data-node-id": "17613:43873", "data-name": "Back", children: [
      /* @__PURE__ */ W("div", { className: "backdrop-blur-[5px] bg-[rgba(255,255,255,0)] col-1 h-[40px] ml-0 mt-0 opacity-0 relative rounded-[5px] row-1 w-[18px]", "data-node-id": "17613:43874" }),
      /* @__PURE__ */ W("div", { className: "col-1 ml-px mt-[10px] relative row-1 size-[20px]", "data-node-id": "17613:43875", "data-name": "chevron left", children: /* @__PURE__ */ W("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: Y3 }) })
    ] }),
    /* @__PURE__ */ B1("div", { className: "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-[1_0_0] gap-[15px] items-center min-w-px px-[15px] py-[11px] relative rounded-[5px]", "data-node-id": "17613:43876", "data-name": "Search Field", children: [
      /* @__PURE__ */ W("div", { className: "flex-[1_0_0] grid-rows-[max-content] inline-grid leading-[0] min-w-px place-items-start relative", "data-node-id": "17613:43883", children: /* @__PURE__ */ B1("div", { className: "[word-break:break-word] col-1 content-stretch flex font-['Inter:Regular'] font-normal gap-px items-start justify-center ml-0 mt-0 not-italic relative row-1 text-[14px] text-left w-full", "data-node-id": "17613:43899", children: [
        /* @__PURE__ */ W("div", { className: "flex flex-col justify-center relative shrink-0 text-white whitespace-nowrap", "data-node-id": "17613:43877", children: /* @__PURE__ */ W("p", { className: "leading-[20px]", children: "l" }) }),
        /* @__PURE__ */ W("div", { className: "flex flex-[1_0_0] flex-col justify-center min-w-px relative text-[rgba(255,255,255,0.4)]", "data-node-id": "17613:43898", children: /* @__PURE__ */ W("p", { className: "leading-[20px]", children: "Enter an inviting hint text here" }) })
      ] }) }),
      /* @__PURE__ */ W("div", { className: "relative shrink-0 size-[14px]", "data-node-id": "17613:43878", "data-name": "cross", children: /* @__PURE__ */ W("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: W3 }) })
    ] })
  ] }) : /* @__PURE__ */ B1("div", { className: t || "content-stretch flex gap-[10px] items-center px-[20px] relative w-[375px]", "data-node-id": "506:33", "data-name": "Typing=No, Focus=No, Default=Yes", children: [
    /* @__PURE__ */ B1("button", { className: "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch cursor-pointer flex flex-[1_0_0] gap-[10px] items-center min-w-px pl-[10px] pr-[15px] py-[11px] relative rounded-[5px]", "data-node-id": "506:20", "data-name": "Search Field", children: [
      /* @__PURE__ */ W("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "6505:48353", "data-name": "search", children: /* @__PURE__ */ W("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: V8 }) }),
      /* @__PURE__ */ W("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] text-left w-[230px]", "data-node-id": "506:23", children: /* @__PURE__ */ W("p", { className: "leading-[20px]", children: "Enter an inviting hint text here" }) })
    ] }),
    /* @__PURE__ */ W("div", { className: "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col items-center justify-center px-[12px] py-[13px] relative rounded-[5px] shrink-0 size-[44px]", "data-node-id": "506:24", "data-name": "Filter Icon", children: /* @__PURE__ */ W("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "4474:29650", "data-name": "filter", children: /* @__PURE__ */ W("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: j8 }) }) })
  ] });
}

// aurora-visual:5046:35372
import { jsx as S5, jsxs as _8 } from "react/jsx-runtime";
function W1({ className: t, error: e = !1, hide: a = !0 }) {
  let r = a && e, o = a && !e, i = !a, n = !a && e, L = !a && !e;
  return /* @__PURE__ */ _8("div", { className: t || `backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] items-center px-[16px] py-[7px] relative rounded-[5px] w-[335px] ${e ? "border border-[#ff5942] border-solid" : ""}`, "data-figma-layer": n ? "node-5046_35369" : L ? "node-5046_35370" : o ? "node-5046_35371" : "node-5046_35110", children: [
    /* @__PURE__ */ S5("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] w-[222px]", "data-figma-layer": n ? "node-5046_35356" : L ? "node-5046_35352" : o ? "node-5046_35364" : "node-3967_29152", children: /* @__PURE__ */ S5("p", { className: "leading-[20px]", children: i ? "johnyenglish007" : "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }) }),
    /* @__PURE__ */ S5("div", { className: `backdrop-blur-[25px] bg-[rgba(255,255,255,0)] content-stretch flex h-[30px] items-center justify-center px-[15px] py-[7px] relative rounded-[5px] shrink-0 ${i ? "w-[69px]" : "w-[70px]"}`, "data-figma-layer": n ? "node-5046_35357" : L ? "node-5046_35353" : o ? "node-5046_35365" : "node-5046_35342", "data-name": "Tertiary", children: /* @__PURE__ */ S5("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-figma-layer": n ? "node-I5046_35357-3001_27727" : L ? "node-I5046_35353-3001_27727" : o ? "node-I5046_35365-3001_27727" : "node-I5046_35342-3001_27727", children: i ? "HIDE" : "SHOW" }) })
  ] });
}

// aurora-visual:15926:37574
import { jsx as d1, jsxs as o2 } from "react/jsx-runtime";
var $3 = new URL("./assets/9eb58e89f81cc3296111dce6.png", import.meta.url).href;
function $1({ className: t, propDefault: e = !0, typing: a = !1 }) {
  let r = e && !a;
  return /* @__PURE__ */ o2("div", { className: t || `backdrop-blur-[40px] bg-[rgba(0,0,0,0.6)] content-stretch flex items-end justify-center px-[20px] py-[10px] relative ${r ? "w-[375px]" : ""}`, "data-figma-layer": r ? "node-15926_37573" : "node-15926_37575", children: [
    !e && a && /* @__PURE__ */ o2("div", { className: "bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] items-end p-[10px] relative rounded-[10px] shrink-0", "data-node-id": "16081:37558", "data-name": "Chat input typing", children: [
      /* @__PURE__ */ d1("div", { className: "overflow-clip relative rounded-[100px] shrink-0 size-[24px]", "data-node-id": "15926:37576", "data-name": "Image", children: /* @__PURE__ */ d1("div", { className: "absolute inset-0 rounded-[200px]", "data-node-id": "I15926:37576;13338:33148", children: /* @__PURE__ */ d1("img", { alt: "", className: "absolute inset-0 max-w-none object-cover pointer-events-none rounded-[200px] size-full", src: $3 }) }) }),
      /* @__PURE__ */ d1("div", { className: "content-stretch flex h-[62px] items-end pb-[2px] relative shrink-0 w-[236px]", "data-node-id": "15926:37577", "data-name": "message", children: /* @__PURE__ */ d1("div", { className: "[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-end leading-[0] min-w-px not-italic relative text-[14px] text-white", "data-node-id": "15926:37578", children: /* @__PURE__ */ d1("p", { className: "leading-[20px]", children: "That gloves looks great, I was searching for something similar...where could I find it?" }) }) }),
      /* @__PURE__ */ d1("div", { className: "backdrop-blur-[25px] bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center pb-[4px] relative rounded-[5px] shrink-0", "data-node-id": "15926:37579", "data-name": "Tertiary", children: /* @__PURE__ */ d1("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I15926:37579;3001:27727", children: "post" }) })
    ] }),
    r && /* @__PURE__ */ o2("div", { className: "bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] items-end p-[10px] relative rounded-[10px] shrink-0", "data-node-id": "16081:37557", "data-name": "Chat input", children: [
      /* @__PURE__ */ d1("div", { className: "overflow-clip relative rounded-[100px] shrink-0 size-[24px]", "data-node-id": "15926:37548", "data-name": "Image", children: /* @__PURE__ */ d1("div", { className: "absolute inset-0 rounded-[200px]", "data-node-id": "I15926:37548;13338:33148", children: /* @__PURE__ */ d1("img", { alt: "", className: "absolute inset-0 max-w-none object-cover pointer-events-none rounded-[200px] size-full", src: $3 }) }) }),
      /* @__PURE__ */ d1("div", { className: "content-stretch flex h-[24px] items-end pb-[2px] relative shrink-0 w-[236px]", "data-node-id": "15926:37572", "data-name": "message", children: /* @__PURE__ */ d1("div", { className: "[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-end leading-[0] min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.6)]", "data-node-id": "15926:37516", children: /* @__PURE__ */ d1("p", { className: "leading-[20px]", children: "Add a comment" }) }) }),
      /* @__PURE__ */ d1("div", { className: "backdrop-blur-[25px] bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center pb-[4px] relative rounded-[5px] shrink-0", "data-node-id": "15926:37517", "data-name": "Tertiary", children: /* @__PURE__ */ d1("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I15926:37517;3001:27727", children: "post" }) })
    ] })
  ] });
}

// aurora-visual:4414:27531
import { jsx as P5, jsxs as B8 } from "react/jsx-runtime";
function X1({ className: t }) {
  return /* @__PURE__ */ B8("div", { className: t || "bg-[rgba(255,255,255,0.1)] content-stretch cursor-pointer flex gap-[5px] items-center justify-center pl-[10px] pr-[5px] py-[5px] relative rounded-[19px]", "data-node-id": "4414:27531", "data-name": "Toggle with Text", children: [
    /* @__PURE__ */ P5("button", { className: "bg-[rgba(255,255,255,0)] content-stretch flex h-[20px] items-center justify-center px-[10px] py-[5px] relative rounded-[19px] shrink-0", "data-node-id": "4414:27518", "data-name": "In-Line Single-Select Tab", children: /* @__PURE__ */ P5("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[10px] not-italic relative shrink-0 text-[10px] text-left text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I4414:27518;1522:12793", children: "PM" }) }),
    /* @__PURE__ */ P5("button", { className: "bg-white content-stretch flex h-[28px] items-center justify-center px-[10px] py-[5px] relative rounded-[19px] shrink-0", "data-node-id": "4414:27515", "data-name": "In-Line Single-Select Tab", children: /* @__PURE__ */ P5("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[10px] not-italic relative shrink-0 text-[10px] text-black text-left tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I4414:27515;1522:12791", children: "PM" }) })
  ] });
}

// packages/aurora-library/src/controls/extended/source.tsx
import { Children as J3, Fragment as W8, cloneElement as N5, createElement as A5, isValidElement as z5 } from "react";

// packages/aurora-library/src/controls/visual.tsx
import { Children as X3, Fragment as r2, cloneElement as Y8, createElement as w0, isValidElement as q3 } from "react";
function J(t) {
  return typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map(J).join("") : q3(t) ? J(t.props.children) : "";
}
function H(t, e, a = {}, r) {
  let o = 0, i = a["data-aurora-control"], n = a.disabled === !0 || a["data-aurora-disabled"] === !0;
  function L(c, C = !1) {
    if (!q3(c)) return c;
    let p = c;
    if (p.type === r2) return w0(r2, { key: p.key }, X3.map(p.props.children, (u) => L(u)));
    let l = p.props.className || "", s = p.props.style || {}, d = { ...s }, h = /(?:^|\s)text-(?:white|\[(rgba\(255,\s*255,\s*255,\s*([\d.]+)\)|transparent)\])(?:\s|$)/.exec(l);
    if (h) {
      let u = h[1] || "white", v = h[2] !== void 0 && Number(h[2]) <= 0.6, m = n ? "--aurora-native-theme-disabled" : v ? "--aurora-native-theme-muted" : "--aurora-native-themed-text";
      d.color = `var(${m}, ${u})`;
      let S = /(?:^|\s)opacity-(\d+)(?:\s|$)/.exec(l);
      S && (d.opacity = `var(--aurora-native-theme-text-opacity, ${Number(S[1]) / 100})`);
    }
    if (s.backgroundImage && (d.backgroundImage = `var(--aurora-native-theme-text-image, ${s.backgroundImage})`), C) {
      let u = /(?:^|\s)bg-(?:white|\[([^\]]+)\])(?:\s|$)/.exec(l);
      u && (d.background = `var(--aurora-native-themed-bg, ${u[1] || "white"})`), /(?:^|\s)border-white(?:\s|$)/.test(l) && (d.borderColor = "var(--aurora-native-themed-border, white)"), d.color = "var(--aurora-native-themed-text, inherit)";
    }
    p = Y8(p, { style: d, ...p.type === "p" ? { "data-aurora-text": !0 } : {} });
    let f = p.props, { id: x, children: y, ...b } = f;
    if (x && (b["data-figma-layer"] = x), p.type === "p" && r) {
      let u = r(p, o++);
      if (u !== void 0) return u;
    }
    let Z = X3.map(y, (u) => L(u)), g = C ? e : p.type === "p" || p.type === "button" ? "span" : p.type;
    g === "span" && ["div", "p"].includes(String(p.type)) && !/(?:^|\s)(?:flex|grid|inline-flex|inline-grid|block|inline-block|hidden)(?:\s|$)/.test(b.className || "") && (b.style = { display: "block", ...b.style });
    let M = C ? { ...b, ...a, className: [b.className, a.className].filter(Boolean).join(" "), style: { ...b.style, ...a.style || {} } } : b;
    return p.type === "img" && typeof f.src == "string" && i && i !== "toggle" ? w0(
      r2,
      null,
      w0("img", { ...M, style: { ...M.style, visibility: "var(--aurora-native-source-icon-visibility, visible)" }, "data-aurora-source-icon": !0 }),
      w0("span", {
        className: "aurora-native-theme-icon",
        "aria-hidden": !0,
        "data-aurora-icon-mask": i === "checkbox" ? "luminance" : "alpha",
        style: { position: "absolute", inset: 0, maskImage: `url("${f.src}")`, WebkitMaskImage: `url("${f.src}")` }
      })
    ) : w0(g, M, Z);
  }
  return L(t, !0);
}
function b1(t, e) {
  let a = !1;
  return (r, o) => {
    if (t === void 0 || a || e !== void 0 && o !== e || /^\s*\d+\s*$/.test(J(r))) return;
    a = !0;
    let { id: i, ...n } = r.props;
    return w0("span", { ...n, ...i ? { "data-figma-layer": i } : {}, style: { display: "block", ...n.style } }, t);
  };
}

// packages/aurora-library/src/controls/extended/source.tsx
var X = J;
function $8(t) {
  return String(t.props["data-figma-layer"] ?? t.props.id ?? t.props["data-node-id"] ?? "");
}
function t1(t, e = 0) {
  if (!z5(t)) return t;
  if (e > 128) throw new TypeError("Recursive source visual cannot be adapted.");
  let a = t;
  return typeof a.type == "function" ? t1(a.type(a.props), e + 1) : N5(a, { children: J3.map(a.props.children, (r) => t1(r, e + 1)) });
}
function z(t, e, a = {}, r) {
  let o = a["data-aurora-control"] ?? "extended", i = t1(t);
  if (!z5(i)) throw new TypeError("A source visual must expand to a root element.");
  let n = H(i, e, { ...a, "data-aurora-control": void 0 });
  function L(C) {
    if (!z5(C)) return C;
    let p = C, l = J3.map(p.props.children, L), s = N5(p, { children: l }), d = r?.(s, { id: $8(s), text: X(p), type: String(p.type) });
    return d === void 0 ? s : d;
  }
  let c = L(n);
  if (!z5(c)) throw new TypeError("A source adapter must retain a semantic root element.");
  return N5(c, { "data-aurora-control": o });
}
var X8 = /* @__PURE__ */ new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
function Q(t, e, a = {}, r = t.props.children) {
  let { children: o, ...i } = t.props, n = {
    ...i,
    ...a,
    className: [i.className, a.className].filter(Boolean).join(" "),
    style: { ...i.style, ...a.style }
  };
  return X8.has(e) ? A5(e, n) : A5(e, n, r);
}
function k(t, e = {}) {
  let a = t.props.src;
  return typeof a != "string" ? t : A5(
    W8,
    null,
    N5(t, { style: { ...t.props.style, visibility: "var(--aurora-native-source-icon-visibility, visible)" } }),
    A5("span", {
      className: "aurora-native-theme-icon",
      "aria-hidden": !0,
      style: { position: "absolute", inset: 0, ...e, maskImage: 'url("' + a + '")', WebkitMaskImage: 'url("' + a + '")' }
    })
  );
}

// aurora-evidence:16
import { jsx as a9, jsxs as o9 } from "react/jsx-runtime";
function e9({ label: t = "Toggle option", offLabel: e = "PM", onLabel: a = "PM", checked: r, defaultChecked: o = !0, onChange: i, onCheckedChange: n, className: L, style: c, id: C, disabled: p = !1, ...l }) {
  let s = J8(), d = C ?? s, [h, f] = t9(o), x = K8(null), y = r ?? h;
  q8(() => {
    let Z = x.current?.form, g = () => {
      r === void 0 && f(o);
    };
    return Z?.addEventListener("reset", g), () => Z?.removeEventListener("reset", g);
  }, [r, o]);
  let b = z(X1({}), "span", { "aria-hidden": !0, "data-aurora-control": "extended-toggle-text" }, (Z, g) => {
    if (g.id === "4414:27518" || g.id === "4414:27515") {
      let M = g.id === "4414:27515" ? y : !y;
      return Q(Z, "span", {
        className: "aurora-extended-toggle-choice",
        "data-selected": M,
        style: { height: M ? "28px" : "20px", background: M ? "white" : "transparent" }
      });
    }
    if (Z.props["data-aurora-text"]) {
      let M = g.id.includes("4414:27515");
      return Q(Z, "span", { style: { color: (M ? y : !y) ? "var(--aurora-extended-selected-ink, black)" : "var(--aurora-native-theme-text, white)" } }, M ? a : e);
    }
  });
  return /* @__PURE__ */ o9("label", { className: ["aurora-extended-toggle-text", L].filter(Boolean).join(" "), style: c, htmlFor: d, children: [
    /* @__PURE__ */ a9("input", { ...l, ref: x, id: d, type: "checkbox", role: "switch", checked: y, disabled: p, "aria-label": l["aria-label"] ?? t, onChange: (Z) => {
      i?.(Z), !Z.defaultPrevented && (r === void 0 && f(Z.currentTarget.checked), n?.(Z.currentTarget.checked));
    } }),
    b
  ] });
}
var K3 = e9;

// aurora-evidence:127
import { Children as n4, cloneElement as C2, isValidElement as s4, useState as Tc } from "react";

// aurora-visual:10800:55916
import { jsx as v0, jsxs as i9 } from "react/jsx-runtime";
var r9 = new URL("./assets/bb717b76538a7b291a5bcaea.svg", import.meta.url).href;
function q1({ className: t }) {
  return /* @__PURE__ */ i9("div", { className: t || "content-stretch flex gap-[10px] items-start relative", "data-node-id": "10800:55916", "data-name": "Triplets", children: [
    /* @__PURE__ */ v0("div", { className: "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[20px] py-[10px] relative rounded-[5px] shrink-0", "data-node-id": "10800:55909", "data-name": "Secondary", children: /* @__PURE__ */ v0("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I10800:55909;795:434", children: "12:00 PM" }) }),
    /* @__PURE__ */ v0("div", { className: "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[20px] py-[10px] relative rounded-[5px] shrink-0", "data-node-id": "10800:55910", "data-name": "Secondary", children: /* @__PURE__ */ v0("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I10800:55910;795:434", children: "4:00 PM" }) }),
    /* @__PURE__ */ v0("div", { className: "bg-[rgba(255,255,255,0.15)] content-stretch flex flex-col h-[40px] items-center justify-center px-[2px] py-[5px] relative rounded-[5px] shrink-0 w-[32px]", "data-node-id": "10800:55911", "data-name": "Chevron", children: /* @__PURE__ */ v0("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "10800:55912", "data-name": "chevron right", children: /* @__PURE__ */ v0("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: r9 }) }) })
  ] });
}

// aurora-visual:262:43
import { jsx as $0, jsxs as s9 } from "react/jsx-runtime";
function n9({ className: t, big: e = "No", disabled: a = "No", icon: r = "No" }) {
  return /* @__PURE__ */ $0("div", { className: t || "backdrop-blur-[13.591px] bg-white content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[20px] py-[10px] relative rounded-[5px]", "data-node-id": "183:3", children: /* @__PURE__ */ $0("p", { className: "[word-break:break-word] bg-clip-text font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[14px] text-[transparent] text-center tracking-[1px] uppercase whitespace-nowrap", "data-node-id": "1:5573", style: { backgroundImage: "linear-gradient(170.19963140593444deg, rgb(255, 219, 23) 79.006%, rgb(255, 50, 120) 103.85%)" }, children: "TEXT LABEL" }) });
}
function J1({ className: t }) {
  return /* @__PURE__ */ s9("div", { className: t || "h-[100px] relative w-[375px]", "data-node-id": "262:43", "data-name": "Stacked Twins \u2022 Action Stack", children: [
    /* @__PURE__ */ $0("div", { className: "-translate-x-1/2 absolute backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] bottom-[6%] content-stretch flex gap-[10px] items-center justify-center left-1/2 px-[20px] py-[10px] rounded-[5px] top-[54%] w-[335px]", "data-node-id": "260:41", "data-name": "Secondary", children: /* @__PURE__ */ $0("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I260:41;795:434", children: "TEXT LABEL" }) }),
    /* @__PURE__ */ $0(n9, { className: "-translate-x-1/2 absolute backdrop-blur-[13.591px] bg-white bottom-[61%] content-stretch flex gap-[10px] items-center justify-center left-1/2 px-[20px] py-[10px] rounded-[5px] top-[-1%] w-[335px]" })
  ] });
}

// aurora-visual:11610:25502
import { jsx as K1, jsxs as i2 } from "react/jsx-runtime";
var t4 = new URL("./assets/b603e2d6fa8147bc8e99d632.svg", import.meta.url).href, L9 = new URL("./assets/d2ea0675abd9abf7783ac3ee.svg", import.meta.url).href;
function t0({ className: t }) {
  return /* @__PURE__ */ i2("div", { className: t || "content-stretch flex gap-[20px] items-start justify-center px-[20px] relative w-[335px]", "data-node-id": "11610:25502", "data-name": "Tertiary Twins", children: [
    /* @__PURE__ */ i2("div", { className: "backdrop-blur-[25px] bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] gap-[5px] h-[30px] items-center justify-center min-w-px px-[15px] py-[7px] relative rounded-[5px]", "data-node-id": "11610:25493", "data-name": "Tertiary", children: [
      /* @__PURE__ */ K1("div", { className: "relative shrink-0 size-[18px]", "data-node-id": "I11610:25493;4414:32518", "data-name": "Dice \u2022 Explore", children: /* @__PURE__ */ K1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: t4 }) }),
      /* @__PURE__ */ K1("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I11610:25493;3001:27703", children: "Action 1" })
    ] }),
    /* @__PURE__ */ K1("div", { className: "h-[30px] relative shrink-0 w-0", "data-node-id": "11610:25494", "data-name": "Separator", children: /* @__PURE__ */ K1("div", { className: "absolute inset-[0_-0.5px]", children: /* @__PURE__ */ K1("img", { alt: "", className: "block max-w-none size-full", src: L9 }) }) }),
    /* @__PURE__ */ i2("div", { className: "backdrop-blur-[25px] bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] gap-[5px] h-[30px] items-center justify-center min-w-px px-[15px] py-[7px] relative rounded-[5px]", "data-node-id": "11610:25495", "data-name": "Tertiary", children: [
      /* @__PURE__ */ K1("div", { className: "relative shrink-0 size-[18px]", "data-node-id": "I11610:25495;4414:32518", "data-name": "Dice \u2022 Explore", children: /* @__PURE__ */ K1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: t4 }) }),
      /* @__PURE__ */ K1("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I11610:25495;3001:27703", children: "Action 2" })
    ] })
  ] });
}

// aurora-visual:1016:4406
import { jsx as Q5, jsxs as C9 } from "react/jsx-runtime";
function e0({ className: t, prop50PxHeight: e = !0 }) {
  let a = !e;
  return /* @__PURE__ */ C9("div", { className: t || `content-stretch flex gap-[10px] items-center justify-center px-[20px] relative w-[375px] ${a ? "h-[40px]" : "h-[50px]"}`, "data-figma-layer": a ? "node-1016_4407" : "node-262_42", children: [
    /* @__PURE__ */ Q5("div", { className: `backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-w-px px-[20px] py-[10px] relative rounded-[5px] ${a ? "h-[40px]" : "h-[50px]"}`, "data-figma-layer": a ? "node-1016_4408" : "node-260_35", "data-name": "Secondary", children: /* @__PURE__ */ Q5("p", { className: "[word-break:break-word] flex-[1_0_0] font-['Inter:Bold'] font-bold leading-[18px] min-w-px not-italic relative text-[14px] text-center text-white tracking-[0.5px] uppercase", "data-figma-layer": a ? "node-I1016_4408-795_434" : "node-I260_35-795_434", children: "TEXT LABEL" }) }),
    /* @__PURE__ */ Q5("div", { className: `backdrop-blur-[13.591px] bg-white content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[123px] py-[15px] relative rounded-[5px] ${a ? "h-[40px]" : "h-[50px]"}`, "data-figma-layer": a ? "node-1016_4409" : "node-260_37", "data-name": "Primary", children: /* @__PURE__ */ Q5("p", { className: "[word-break:break-word] bg-clip-text font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[14px] text-[transparent] text-center tracking-[1px] uppercase whitespace-nowrap", "data-figma-layer": a ? "node-I1016_4409-1_5541" : "node-I260_37-1_5541", style: { backgroundImage: "linear-gradient(159.822262590119deg, rgb(255, 219, 23) 20.001%, rgb(255, 50, 120) 112.23%)" }, children: "TEXT LABEL" }) })
  ] });
}

// aurora-visual:14779:38684
import { jsx as e4 } from "react/jsx-runtime";
var c9 = new URL("./assets/df52d889fb517147e97dd2fc.svg", import.meta.url).href, d9 = new URL("./assets/af3fc19afc8ec8486206a07b.svg", import.meta.url).href, l9 = new URL("./assets/11ce9d19e4484529f4cc93fe.svg", import.meta.url).href, p9 = new URL("./assets/8e6e749431d3847302246bb3.svg", import.meta.url).href, f9 = new URL("./assets/42e708f2665e06b0a26503ba.svg", import.meta.url).href, h9 = new URL("./assets/f1cef41f0627660374cb6b5e.svg", import.meta.url).href;
function a0({ className: t, disable: e = !1, primary: a = !0, secondary: r = !1, size30: o = !0, size40: i = !1 }) {
  let n = !a && !r && e && !i && o, L = !a && !r && e && i && !o, c = !a && r && !e && !i && o, C = !a && r && !e && i && !o, p = a && !r && !e && i && !o;
  return /* @__PURE__ */ e4("div", { className: t || `relative ${i && !o && (a && !r && !e || !a && r && !e || !a && !r && e) ? "size-[40px]" : "size-[30px]"}`, "data-figma-layer": L ? "node-16484_38848" : n ? "node-14779_38695" : C ? "node-16484_38843" : c ? "node-14779_38685" : p ? "node-16484_38833" : "node-14779_38683", children: /* @__PURE__ */ e4("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: L ? h9 : n ? f9 : C ? p9 : c ? l9 : p ? d9 : c9 }) });
}

// aurora-visual:4064:26973
import { jsx as y1, jsxs as I5 } from "react/jsx-runtime";
var v9 = new URL("./assets/c84a14d162a7b3ca9e56477e.png", import.meta.url).href, g9 = new URL("./assets/c84a14d162a7b3ca9e56477e.png", import.meta.url).href, x9 = new URL("./assets/f254199ee38996be2d8ae8a3.svg", import.meta.url).href, u9 = new URL("./assets/11346c1cf7703a33dab7d86c.svg", import.meta.url).href;
function o0({ className: t, swapText: e = !1 }) {
  let a = e;
  return /* @__PURE__ */ y1("div", { className: t || "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col items-start py-[5px] relative rounded-[10px] w-[335px]", "data-figma-layer": a ? "node-4064_26974" : "node-3724_26711", children: /* @__PURE__ */ y1("div", { className: "content-stretch flex flex-col items-start relative shrink-0 w-full", "data-figma-layer": a ? "node-4064_26975" : "node-3724_26658", "data-name": "Action 1", children: /* @__PURE__ */ I5("div", { className: `content-stretch flex h-[70px] items-center px-[20px] py-[10px] relative rounded-[10px] shrink-0 w-full ${a ? "gap-[15px]" : "justify-between"}`, "data-figma-layer": a ? "node-4064_26976" : "node-3724_26659", "data-name": "Expert Action Button", children: [
    /* @__PURE__ */ I5("div", { className: `content-stretch flex flex-col justify-center relative shrink-0 ${a ? "items-start w-[45px]" : "items-center"}`, "data-figma-layer": a ? "node-4064_26977" : "node-3724_26660", "data-name": "Profile Image", children: [
      !e && /* @__PURE__ */ I5("div", { className: "grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0", "data-node-id": "14336:36367", children: [
        /* @__PURE__ */ y1("div", { className: "col-1 ml-[3px] mt-[2.75px] relative row-1 size-[40px]", "data-node-id": "14336:36249", "data-name": "Profile", children: /* @__PURE__ */ y1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: x9 }) }),
        /* @__PURE__ */ y1("div", { className: "col-1 ml-0 mt-0 opacity-40 relative row-1 size-[45px]", "data-node-id": "3724:26690", "data-name": "Change Image here", children: /* @__PURE__ */ y1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", height: "45", src: v9, width: "45" }) })
      ] }),
      a && /* @__PURE__ */ y1("div", { className: "opacity-40 relative shrink-0 size-[45px]", "data-node-id": "4064:26978", "data-name": "Change Image here", children: /* @__PURE__ */ y1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", height: "45", src: g9, width: "45" }) })
    ] }),
    /* @__PURE__ */ I5("div", { className: `[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start justify-center leading-[20px] not-italic pr-[10px] py-[10px] relative ${a ? "flex-[1_0_0] min-w-px" : "shrink-0 w-[196px]"}`, "data-figma-layer": a ? "node-4064_26979" : "node-3724_26663", "data-name": "Action Text Goes Here", children: [
      /* @__PURE__ */ y1("p", { className: `relative shrink-0 ${a ? 'font-["Inter:Regular"] font-normal text-[14px] text-[rgba(255,255,255,0.6)] w-[190px]' : 'font-["Inter:Medium"] font-medium text-[16px] text-white w-[196px]'}`, "data-figma-layer": a ? "node-4064_26981" : "node-3724_26664", children: a ? "Attribute" : "Name of the Expert" }),
      /* @__PURE__ */ y1("p", { className: `relative shrink-0 ${a ? 'font-["Inter:Medium"] font-medium text-[16px] text-white w-[190px]' : 'font-["Inter:Regular"] font-normal text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap'}`, "data-figma-layer": a ? "node-4064_26980" : "node-3724_26665", children: a ? "Name of the Expert" : "Attribute" })
    ] }),
    /* @__PURE__ */ y1("div", { className: `content-stretch flex items-center justify-end pl-[40px] pr-[5px] py-[10px] relative shrink-0 ${a ? "w-[30px]" : "w-[24px]"}`, "data-figma-layer": a ? "node-4064_26982" : "node-3724_26666", "data-name": "Chevron", children: /* @__PURE__ */ y1("div", { className: "relative shrink-0 size-[18px]", "data-figma-layer": a ? "node-4414_32577" : "node-4414_32560", "data-name": "chevron right", children: /* @__PURE__ */ y1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: u9 }) }) })
  ] }) }) });
}

// aurora-visual:7062:47949
import { Fragment as y9, jsx as K, jsxs as D5 } from "react/jsx-runtime";
var M9 = new URL("./assets/bf1edb518e0a8c24b68fed42.svg", import.meta.url).href, b9 = new URL("./assets/67bc8a30732ae26c52fd6ab1.svg", import.meta.url).href;
function r0({ className: t, checkbox: e = !1, ctaInfo: a = !0, ctaSecondaryCta: r = !1, multiCtaInfo: o = !1 }) {
  let i = !o && a && !r && !e, n = !o && !a && r && !e, L = !o && !a && !r && e;
  return /* @__PURE__ */ D5("div", { className: t || `backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col px-[20px] relative ${n ? "gap-[10px] h-[122px] items-center justify-center py-[10px] w-[375px]" : L ? "gap-[20px] items-center justify-center pb-[10px] pt-[20px] w-[375px]" : i ? "gap-[10px] items-center justify-center py-[10px] w-[375px]" : "gap-[10px] items-start py-[15px]"}`, "data-figma-layer": n ? "node-14864_38131" : L ? "node-15215_37374" : i ? "node-183_6" : "node-7062_47954", children: [
    !r && !e && (o && !a || !o && a) && /* @__PURE__ */ K("p", { className: "[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white w-[335px]", "data-figma-layer": i ? "node-1_5562" : "node-7062_47636", children: "Get 20% Fitcash on orders above $20" }),
    !o && !e && (a && !r || !a && r) && /* @__PURE__ */ K("div", { className: "backdrop-blur-[13.591px] bg-white content-stretch flex h-[50px] items-center justify-center px-[20px] py-[15px] relative rounded-[5px] shrink-0 w-full", "data-figma-layer": n ? "node-14864_38133" : "node-183_4", "data-name": "Primary", children: /* @__PURE__ */ K("p", { className: "[word-break:break-word] bg-clip-text font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[14px] text-[transparent] text-center tracking-[1px] uppercase whitespace-nowrap", "data-figma-layer": n ? "node-I14864_38133-1_5541" : "node-I183_4-1_5541", style: { backgroundImage: "linear-gradient(166.41950944132344deg, rgb(255, 219, 23) 20.001%, rgb(255, 50, 120) 112.23%)" }, children: "2 Items \u2022 Pay $24" }) }),
    o && !a && !r && !e && /* @__PURE__ */ D5("div", { className: "h-[40px] relative shrink-0 w-[328px]", "data-node-id": "7062:47637", "data-name": "Button Array", children: [
      /* @__PURE__ */ K("div", { className: "absolute backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex h-[40px] items-center justify-center left-0 px-[15px] py-[10px] rounded-[5px] top-0 w-[86px]", "data-node-id": "7062:47638", "data-name": "Secondary", children: /* @__PURE__ */ K("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I7062:47638;1:5490", children: "8:00PM" }) }),
      /* @__PURE__ */ K("div", { className: "absolute backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex h-[40px] items-center justify-center left-[96px] px-[15px] py-[10px] rounded-[5px] top-0 w-[86px]", "data-node-id": "7062:47639", "data-name": "Secondary", children: /* @__PURE__ */ K("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I7062:47639;1:5490", children: "8:00PM" }) }),
      /* @__PURE__ */ K("div", { className: "absolute backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex h-[40px] items-center justify-center left-[192px] px-[15px] py-[10px] rounded-[5px] top-0 w-[86px]", "data-node-id": "7062:47640", "data-name": "Secondary", children: /* @__PURE__ */ K("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I7062:47640;1:5490", children: "8:00PM" }) }),
      /* @__PURE__ */ K("div", { className: "absolute backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center left-[288px] px-[15px] py-[7px] rounded-[5px] size-[40px] top-0", "data-node-id": "7062:47641", "data-name": "Secondary", children: /* @__PURE__ */ K("div", { className: "content-stretch flex gap-[10px] h-full items-center relative shrink-0", "data-node-id": "I7062:47641;14686:45255", "data-name": "Icon +Text", children: /* @__PURE__ */ K("div", { className: "relative shrink-0 size-[12px]", "data-node-id": "I7062:47641;1096:11676", "data-name": "chevron right", children: /* @__PURE__ */ K("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: M9 }) }) }) })
    ] }),
    L && /* @__PURE__ */ D5(y9, { children: [
      /* @__PURE__ */ D5("button", { className: "content-stretch cursor-pointer flex gap-[15px] items-start relative shrink-0", "data-node-id": "15215:37427", "data-name": "Checkbox", children: [
        /* @__PURE__ */ K("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "I15215:37427;6393:46683", "data-name": "Selected State", children: /* @__PURE__ */ K("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: b9 }) }),
        /* @__PURE__ */ K("div", { className: "content-stretch flex flex-col gap-[5px] items-start relative shrink-0", "data-node-id": "I15215:37427;6393:46688", children: /* @__PURE__ */ K("p", { className: "[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-left w-[300px]", "data-node-id": "I15215:37427;6393:46687", children: "I consent to being contacted via whatsapp and call by my coach for the duration of this membership" }) })
      ] }),
      /* @__PURE__ */ K("div", { className: "backdrop-blur-[13.591px] bg-white content-stretch flex h-[50px] items-center justify-center px-[20px] py-[15px] relative rounded-[5px] shrink-0 w-full", "data-node-id": "15215:37376", "data-name": "Primary", children: /* @__PURE__ */ K("p", { className: "[word-break:break-word] bg-clip-text font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[14px] text-[transparent] text-center tracking-[1px] uppercase whitespace-nowrap", "data-node-id": "I15215:37376;1:5541", style: { backgroundImage: "linear-gradient(166.41950944132344deg, rgb(255, 219, 23) 20.001%, rgb(255, 50, 120) 112.23%)" }, children: "2 Items \u2022 Pay $24" }) })
    ] }),
    n && /* @__PURE__ */ K("div", { className: "backdrop-blur-[25px] bg-[rgba(255,255,255,0)] content-stretch flex h-[30px] items-center justify-center px-[15px] py-[7px] relative rounded-[5px] shrink-0 w-full", "data-node-id": "14864:38135", "data-name": "Tertiary", children: /* @__PURE__ */ K("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I14864:38135;3001:27727", children: "Tertiary CTA" }) })
  ] });
}

// packages/aurora-library/src/controls/Selection.tsx
import { createElement as I9, useEffect as D9, useId as O9, useRef as R9, useState as w9 } from "react";

// aurora-visual:395:1531
import { jsx as _, jsxs as S1 } from "react/jsx-runtime";
var m9 = new URL("./assets/faf53038c0b4e89d01e75269.svg", import.meta.url).href, n2 = new URL("./assets/771432495bf52d2afe338afd.svg", import.meta.url).href, a4 = new URL("./assets/e9aa05151c25759c17c4185d.svg", import.meta.url).href, Z9 = new URL("./assets/fc9ea7a388df467fdf724936.svg", import.meta.url).href, S9 = new URL("./assets/d2d4a967ba9c8d7d08b938c8.svg", import.meta.url).href;
function g0({ className: t, disabled: e = !1, selected: a = !0, subtext: r = !1 }) {
  return !a && e && !r ? /* @__PURE__ */ S1("div", { className: t || "content-stretch flex gap-[15px] items-start relative", "data-node-id": "395:1536", "data-name": "Selected=No, Disabled=Yes, Subtext=No", children: [
    /* @__PURE__ */ _("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "395:1538", "data-name": "Disabled UnSelected State", children: /* @__PURE__ */ _("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: m9 }) }),
    /* @__PURE__ */ _("p", { className: "[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic opacity-40 relative shrink-0 text-[16px] text-white w-[300px]", "data-node-id": "395:1537", children: "Disabled Unselected" })
  ] }) : a && e && !r ? /* @__PURE__ */ S1("div", { className: t || "content-stretch flex gap-[15px] items-start opacity-40 relative", "data-node-id": "395:1540", "data-name": "Selected=Yes, Disabled=Yes, Subtext=No", children: [
    /* @__PURE__ */ _("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "395:1542", "data-name": "Disabled Selected State", children: /* @__PURE__ */ _("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: n2 }) }),
    /* @__PURE__ */ _("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-white w-[300px]", "data-node-id": "395:1541", children: "Disabled Selected" })
  ] }) : !a && !e && !r ? /* @__PURE__ */ S1("button", { className: t || "content-stretch cursor-pointer flex gap-[15px] items-start relative", "data-node-id": "395:1532", "data-name": "Selected=No, Disabled=No, Subtext=No", children: [
    /* @__PURE__ */ _("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "395:1534", "data-name": "UnSelected State", children: /* @__PURE__ */ _("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: a4 }) }),
    /* @__PURE__ */ _("p", { className: "[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic opacity-60 relative shrink-0 text-[16px] text-left text-white w-[300px]", "data-node-id": "395:1533", children: "Unselected" })
  ] }) : a && !e && r ? /* @__PURE__ */ S1("button", { className: t || "content-stretch cursor-pointer flex gap-[15px] items-start relative", "data-node-id": "6393:46341", "data-name": "Selected=Yes, Disabled=No, Subtext=Yes", children: [
    /* @__PURE__ */ _("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "6393:46342", "data-name": "Selected State", children: /* @__PURE__ */ _("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: n2 }) }),
    /* @__PURE__ */ S1("div", { className: "[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start leading-[20px] not-italic relative shrink-0 text-left", "data-node-id": "6393:46346", children: [
      /* @__PURE__ */ _("p", { className: "font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] text-white w-[300px]", "data-node-id": "6393:46344", children: "Selected" }),
      /* @__PURE__ */ _("p", { className: "font-['Inter:Regular'] font-normal relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] w-[300px]", "data-node-id": "6393:46345", children: "Subtext comes here" })
    ] })
  ] }) : a && e && r ? /* @__PURE__ */ S1("button", { className: t || "content-stretch cursor-pointer flex gap-[15px] items-start relative", "data-node-id": "6393:46365", "data-name": "Selected=Yes, Disabled=Yes, Subtext=Yes", children: [
    /* @__PURE__ */ _("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "6393:46366", "data-name": "Selected State", children: /* @__PURE__ */ _("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: Z9 }) }),
    /* @__PURE__ */ S1("div", { className: "[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start leading-[20px] not-italic relative shrink-0 text-left", "data-node-id": "6393:46368", children: [
      /* @__PURE__ */ _("p", { className: "font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] w-[300px]", "data-node-id": "6393:46369", children: "Disabled Selected" }),
      /* @__PURE__ */ _("p", { className: "font-['Inter:Regular'] font-normal relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] w-[300px]", "data-node-id": "6393:46370", children: "Subtext comes here" })
    ] })
  ] }) : !a && !e && r ? /* @__PURE__ */ S1("button", { className: t || "content-stretch cursor-pointer flex gap-[15px] items-start relative", "data-node-id": "6393:46353", "data-name": "Selected=No, Disabled=No, Subtext=Yes", children: [
    /* @__PURE__ */ _("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "6393:46354", "data-name": "Selected State", children: /* @__PURE__ */ _("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: a4 }) }),
    /* @__PURE__ */ S1("div", { className: "[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[5px] items-start leading-[20px] not-italic relative shrink-0 text-left", "data-node-id": "6393:46356", children: [
      /* @__PURE__ */ _("p", { className: "relative shrink-0 text-[16px] text-white w-[300px]", "data-node-id": "6393:46357", children: "Unselected" }),
      /* @__PURE__ */ _("p", { className: "relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] w-[300px]", "data-node-id": "6393:46358", children: "Subtext comes here" })
    ] })
  ] }) : !a && e && r ? /* @__PURE__ */ S1("button", { className: t || "content-stretch cursor-pointer flex gap-[15px] items-start relative", "data-node-id": "6393:46377", "data-name": "Selected=No, Disabled=Yes, Subtext=Yes", children: [
    /* @__PURE__ */ _("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "6393:46378", "data-name": "Selected State", children: /* @__PURE__ */ _("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: S9 }) }),
    /* @__PURE__ */ S1("div", { className: "[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[5px] items-start leading-[20px] not-italic relative shrink-0 text-left", "data-node-id": "6393:46380", children: [
      /* @__PURE__ */ _("p", { className: "opacity-40 relative shrink-0 text-[16px] text-white w-[300px]", "data-node-id": "6393:46381", children: "Disabled Unselected" }),
      /* @__PURE__ */ _("p", { className: "relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] w-[300px]", "data-node-id": "6393:46382", children: "Subtext comes here" })
    ] })
  ] }) : /* @__PURE__ */ S1("button", { className: t || "content-stretch cursor-pointer flex gap-[15px] items-start relative", "data-node-id": "183:27", "data-name": "Selected=Yes, Disabled=No, Subtext=No", children: [
    /* @__PURE__ */ _("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "1:13173", "data-name": "Selected State", children: /* @__PURE__ */ _("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: n2 }) }),
    /* @__PURE__ */ _("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-left text-white w-[300px]", "data-node-id": "1:13171", children: "Selected" })
  ] });
}

// aurora-visual:415:4539
import { jsx as B, jsxs as P1 } from "react/jsx-runtime";
var o4 = new URL("./assets/1a63b71c4b5ba6b89b0a8661.svg", import.meta.url).href, s2 = new URL("./assets/67bc8a30732ae26c52fd6ab1.svg", import.meta.url).href, P9 = new URL("./assets/16dde5ceef66608fd1c9fead.svg", import.meta.url).href, r4 = new URL("./assets/73dfb68f6af3163f3117fb0d.svg", import.meta.url).href;
function x0({ className: t, disabled: e = !1, selected: a = !0, subtext: r = !1 }) {
  return !a && !e && !r ? /* @__PURE__ */ P1("button", { className: t || "content-stretch cursor-pointer flex gap-[15px] items-start relative", "data-node-id": "415:4540", "data-name": "Selected=No, Disabled=No, Subtext=No", children: [
    /* @__PURE__ */ B("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "415:4542", "data-name": "UnSelected State", children: /* @__PURE__ */ B("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: o4 }) }),
    /* @__PURE__ */ B("p", { className: "[word-break:break-word] font-['Inter:Medium'] font-medium leading-[20px] not-italic opacity-60 relative shrink-0 text-[16px] text-left text-white w-[300px]", "data-node-id": "415:4541", children: "UnSelected" })
  ] }) : a && !e && r ? /* @__PURE__ */ P1("button", { className: t || "content-stretch cursor-pointer flex gap-[15px] items-start relative", "data-node-id": "6393:46682", "data-name": "Selected=Yes, Disabled=No, Subtext=Yes", children: [
    /* @__PURE__ */ B("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "6393:46683", "data-name": "Selected State", children: /* @__PURE__ */ B("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: s2 }) }),
    /* @__PURE__ */ P1("div", { className: "[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start leading-[20px] not-italic relative shrink-0 text-left", "data-node-id": "6393:46688", children: [
      /* @__PURE__ */ B("p", { className: "font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] text-white w-[300px]", "data-node-id": "6393:46686", children: "Selected" }),
      /* @__PURE__ */ B("p", { className: "font-['Inter:Regular'] font-normal relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] w-[300px]", "data-node-id": "6393:46687", children: "Subtext comes here" })
    ] })
  ] }) : !a && !e && r ? /* @__PURE__ */ P1("button", { className: t || "content-stretch cursor-pointer flex gap-[15px] items-start relative", "data-node-id": "6393:46724", "data-name": "Selected=No, Disabled=No, Subtext=Yes", children: [
    /* @__PURE__ */ B("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "6393:46725", "data-name": "Selected State", children: /* @__PURE__ */ B("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: o4 }) }),
    /* @__PURE__ */ P1("div", { className: "[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start leading-[20px] not-italic relative shrink-0 text-left", "data-node-id": "6393:46728", children: [
      /* @__PURE__ */ B("p", { className: "font-['Inter:Medium'] font-medium opacity-60 relative shrink-0 text-[16px] text-white w-[300px]", "data-node-id": "6393:46729", children: "Unselected" }),
      /* @__PURE__ */ B("p", { className: "font-['Inter:Regular'] font-normal relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] w-[300px]", "data-node-id": "6393:46730", children: "Subtext comes here" })
    ] })
  ] }) : a && e && r ? /* @__PURE__ */ P1("button", { className: t || "content-stretch cursor-pointer flex gap-[15px] items-start relative", "data-node-id": "6393:46696", "data-name": "Selected=Yes, Disabled=Yes, Subtext=Yes", children: [
    /* @__PURE__ */ B("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "6393:46697", "data-name": "Selected State", children: /* @__PURE__ */ B("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: P9 }) }),
    /* @__PURE__ */ P1("div", { className: "[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start leading-[20px] not-italic relative shrink-0 text-left", "data-node-id": "6393:46700", children: [
      /* @__PURE__ */ B("p", { className: "font-['Inter:Bold'] font-bold opacity-60 relative shrink-0 text-[16px] text-white w-[300px]", "data-node-id": "6393:46701", children: "Disabled Selected" }),
      /* @__PURE__ */ B("p", { className: "font-['Inter:Regular'] font-normal opacity-60 relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] w-[300px]", "data-node-id": "6393:46702", children: "Subtext comes here" })
    ] })
  ] }) : !a && e && r ? /* @__PURE__ */ P1("button", { className: t || "content-stretch cursor-pointer flex gap-[15px] items-start relative", "data-node-id": "6393:46717", "data-name": "Selected=No, Disabled=Yes, Subtext=Yes", children: [
    /* @__PURE__ */ B("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "6393:46718", "data-name": "Selected State", children: /* @__PURE__ */ B("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: r4 }) }),
    /* @__PURE__ */ P1("div", { className: "[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start leading-[20px] not-italic relative shrink-0 text-left", "data-node-id": "6393:46721", children: [
      /* @__PURE__ */ B("p", { className: "font-['Inter:Medium'] font-medium opacity-40 relative shrink-0 text-[16px] text-white w-[300px]", "data-node-id": "6393:46722", children: "Disabled Unselected" }),
      /* @__PURE__ */ B("p", { className: "font-['Inter:Regular'] font-normal opacity-40 relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] w-[300px]", "data-node-id": "6393:46723", children: "Subtext comes here" })
    ] })
  ] }) : !a && e && !r ? /* @__PURE__ */ P1("div", { className: t || "content-stretch flex gap-[15px] items-start relative", "data-node-id": "415:4545", "data-name": "Selected=No, Disabled=Yes, Subtext=No", children: [
    /* @__PURE__ */ B("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "415:4547", "data-name": "Disabled UnSelected State", children: /* @__PURE__ */ B("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: r4 }) }),
    /* @__PURE__ */ B("p", { className: "[word-break:break-word] font-['Inter:Medium'] font-medium leading-[20px] not-italic opacity-40 relative shrink-0 text-[16px] text-white w-[300px]", "data-node-id": "415:4546", children: "Disabled Unselected" })
  ] }) : a && e && !r ? /* @__PURE__ */ P1("div", { className: t || "content-stretch flex gap-[15px] items-start opacity-40 relative", "data-node-id": "415:4550", "data-name": "Selected=Yes, Disabled=Yes, Subtext=No", children: [
    /* @__PURE__ */ B("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "415:4552", "data-name": "Disabled Selected State", children: /* @__PURE__ */ B("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: s2 }) }),
    /* @__PURE__ */ B("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-white w-[300px]", "data-node-id": "415:4551", children: "Disabled Selected" })
  ] }) : /* @__PURE__ */ P1("button", { className: t || "content-stretch cursor-pointer flex gap-[15px] items-start relative", "data-node-id": "183:32", "data-name": "Selected=Yes, Disabled=No, Subtext=No", children: [
    /* @__PURE__ */ B("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "37:122", "data-name": "Selected State", children: /* @__PURE__ */ B("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: s2 }) }),
    /* @__PURE__ */ B("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-left text-white w-[300px]", "data-node-id": "37:29", children: "Selected" })
  ] });
}

// aurora-visual:15732:37431
import { jsx as L2 } from "react/jsx-runtime";
var z9 = new URL("./assets/27555caab9fbe2595282c962.svg", import.meta.url).href, N9 = new URL("./assets/4ccdcb1e53537a7c828d996b.svg", import.meta.url).href, A9 = new URL("./assets/88c7ca39163c5b9507df823c.svg", import.meta.url).href, Q9 = new URL("./assets/485c17188e31d5d3b36a77e5.svg", import.meta.url).href;
function T0({ className: t, active: e = !0, nonActive: a = !1, small: r = !1 }) {
  let o = e && !a && r, i = !e && a && !r, n = !e && a && r;
  return /* @__PURE__ */ L2("div", { className: t || `relative ${r && (!e && a || e && !a) ? "h-[20px] w-[33.333px]" : "h-[30px] w-[50px]"}`, "data-figma-layer": o ? "node-19374_46410" : n ? "node-19374_46412" : i ? "node-15732_37432" : "node-15732_37430", children: /* @__PURE__ */ L2("div", { className: `absolute ${o ? "inset-[-18.55%_-19.86%_-48.12%_0]" : n ? "inset-[-18.33%_0_-48.33%_-24%]" : i ? "inset-[-10%_0_-30%_-16%]" : "inset-[-10.22%_-11.86%_-29.78%_0]"}`, children: /* @__PURE__ */ L2("img", { alt: "", className: "block max-w-none size-full", src: o ? Q9 : n ? A9 : i ? N9 : z9 }) }) });
}

// packages/aurora-library/src/controls/Selection.tsx
import { jsx as X0, jsxs as T9 } from "react/jsx-runtime";
function i4({ kind: t, visual: e, label: a, subtext: r, selected: o, checked: i, defaultChecked: n = !1, disabled: L = !1, onChange: c, className: C, id: p, ...l }) {
  let s = O9(), d = p ?? s, [h, f] = w9(n), x = R9(null);
  D9(() => {
    let g = x.current;
    if (!g) return;
    let M = (v) => {
      let m = v.target;
      t === "radio" && l.name && i === void 0 && o === void 0 && m?.type === "radio" && m.name === l.name && m.form === g.form && m.getRootNode() === g.getRootNode() && f(m === g && m.checked);
    }, u = () => {
      i === void 0 && o === void 0 && f(n);
    };
    return g.ownerDocument.addEventListener("click", M, !0), g.ownerDocument.addEventListener("change", M, !0), g.form?.addEventListener("reset", u), () => {
      g.ownerDocument.removeEventListener("click", M, !0), g.ownerDocument.removeEventListener("change", M, !0), g.form?.removeEventListener("reset", u);
    };
  }, [t, l.name, i, o, n]);
  let y = i ?? o ?? h, b = e({ selected: y, disabled: L, subtext: r != null }), Z = H(b, "span", { className: "aurora-native-selection-visual", "data-aurora-control": t, "data-aurora-disabled": L, "aria-hidden": !0 }, (g, M) => {
    let { id: u, ...v } = g.props, m = L ? "--aurora-native-theme-disabled" : M === 0 ? "--aurora-native-theme-text" : "--aurora-native-theme-muted";
    return I9("span", { ...v, "data-figma-layer": u, "data-aurora-text-role": M === 0 ? "label" : "subtext", style: { display: "block", ...v.style, color: `var(${m}, ${v.style?.color || "inherit"})`, opacity: `var(--aurora-native-theme-text-opacity, ${v.style?.opacity || 1})` } }, M === 0 ? a : r);
  });
  return /* @__PURE__ */ T9("label", { className: ["aurora-native-selection", C].filter(Boolean).join(" "), htmlFor: d, children: [
    /* @__PURE__ */ X0("input", { ...l, ref: x, id: d, type: t, checked: y, disabled: L, "aria-labelledby": l["aria-labelledby"] ?? (l["aria-label"] ? void 0 : `${d}-label`), "aria-describedby": [l["aria-describedby"], r != null ? `${d}-description` : void 0].filter(Boolean).join(" ") || void 0, onChange: (g) => {
      i === void 0 && o === void 0 && f(g.currentTarget.checked), c?.(g);
    } }),
    Z,
    /* @__PURE__ */ X0("span", { id: `${d}-label`, className: "aurora-native-sr", children: a }),
    r != null && /* @__PURE__ */ X0("span", { id: `${d}-description`, className: "aurora-native-sr", children: r })
  ] });
}
function g1(t) {
  return /* @__PURE__ */ X0(i4, { ...t, kind: "radio", visual: g0 });
}
function q(t) {
  return /* @__PURE__ */ X0(i4, { ...t, kind: "checkbox", visual: x0 });
}

// aurora-evidence:127
import { jsx as G9 } from "react/jsx-runtime";
function E9(t, e) {
  let a = !1;
  function r(o) {
    if (!s4(o)) return o;
    let i = o;
    return !a && i.props["data-aurora-text"] ? (a = !0, C2(i, {}, e)) : C2(i, {}, n4.map(i.props.children, r));
  }
  return r(t);
}
function k9(t, e, a, r, o, i) {
  let n = r || e?.disabled === !0, L = e?.label === void 0 ? X(t).trim() : X(e.label).trim();
  return Q(t, "button", {
    type: "button",
    disabled: n,
    "data-aurora-action": a,
    className: "aurora-extended-action",
    "aria-label": e?.ariaLabel ?? (L && L !== "TEXT LABEL" ? L : i),
    onClick: (c) => {
      n || (e?.onClick?.(c), c.defaultPrevented || o?.(a, c));
    }
  }, e?.label === void 0 ? t.props.children : E9(t, e.label).props.children);
}
function L4(t) {
  return C2(t, {}, n4.map(t.props.children, (e) => {
    if (!s4(e)) return e;
    let a = e;
    return a.type === "img" ? k(a) : L4(a);
  }));
}
function H9({ Visual: t, visualProps: e = {}, match: a, label: r, actions: o = [], disabled: i = !1, onAction: n, ...L }) {
  return z(t(e), "div", {
    ...L,
    role: L.role ?? "group",
    "aria-label": L["aria-label"] ?? r,
    "data-aurora-control": "action-group",
    "data-aurora-disabled": i,
    className: ["aurora-extended-actions", L.className].filter(Boolean).join(" ")
  }, (c, C) => {
    let p = a(c, C.id), l = /chevron|Dice.*Explore/i.test(c.props["data-name"] ?? "") ? L4(c) : c;
    return p === void 0 ? l === c ? void 0 : l : k9(l, o[p], p, i, n, `Action ${p + 1}`);
  });
}
function F9(t) {
  let e = ["10800:55909", "10800:55910", "10800:55911"];
  return /* @__PURE__ */ G9(H9, { ...t, Visual: q1, label: "Time actions", match: (a, r) => {
    let o = e.indexOf(r);
    return o < 0 ? void 0 : o;
  } });
}
var C4 = F9;

// aurora-evidence:128
import { Children as c4, cloneElement as c2, isValidElement as d4, useState as Xc } from "react";
import { jsx as B9 } from "react/jsx-runtime";
function U9(t, e) {
  let a = !1;
  function r(o) {
    if (!d4(o)) return o;
    let i = o;
    return !a && i.props["data-aurora-text"] ? (a = !0, c2(i, {}, e)) : c2(i, {}, c4.map(i.props.children, r));
  }
  return r(t);
}
function V9(t, e, a, r, o, i) {
  let n = r || e?.disabled === !0, L = e?.label === void 0 ? X(t).trim() : X(e.label).trim();
  return Q(t, "button", {
    type: "button",
    disabled: n,
    "data-aurora-action": a,
    className: "aurora-extended-action",
    "aria-label": e?.ariaLabel ?? (L && L !== "TEXT LABEL" ? L : i),
    onClick: (c) => {
      n || (e?.onClick?.(c), c.defaultPrevented || o?.(a, c));
    }
  }, e?.label === void 0 ? t.props.children : U9(t, e.label).props.children);
}
function l4(t) {
  return c2(t, {}, c4.map(t.props.children, (e) => {
    if (!d4(e)) return e;
    let a = e;
    return a.type === "img" ? k(a) : l4(a);
  }));
}
function j9({ Visual: t, visualProps: e = {}, match: a, label: r, actions: o = [], disabled: i = !1, onAction: n, ...L }) {
  return z(t(e), "div", {
    ...L,
    role: L.role ?? "group",
    "aria-label": L["aria-label"] ?? r,
    "data-aurora-control": "action-group",
    "data-aurora-disabled": i,
    className: ["aurora-extended-actions", L.className].filter(Boolean).join(" ")
  }, (c, C) => {
    let p = a(c, C.id), l = /chevron|Dice.*Explore/i.test(c.props["data-name"] ?? "") ? l4(c) : c;
    return p === void 0 ? l === c ? void 0 : l : V9(l, o[p], p, i, n, `Action ${p + 1}`);
  });
}
function _9(t) {
  return /* @__PURE__ */ B9(j9, { ...t, Visual: J1, label: "Stacked actions", match: (e, a) => a === "183:3" ? 0 : a === "260:41" ? 1 : void 0 });
}
var p4 = _9;

// aurora-evidence:136
import { cloneElement as M4, createElement as ht, useEffect as vt, useId as Rd, useRef as gt, useState as xt } from "react";

// packages/aurora-library/src/controls/Chips.tsx
import { useState as v4 } from "react";

// aurora-visual:713:31
import { jsx as k1, jsxs as h4 } from "react/jsx-runtime";
var f4 = new URL("./assets/a6ffdf909e58926e4a0edb87.svg", import.meta.url).href;
function E0({ className: t, selected: e = !0, withIcon: a = !1 }) {
  return !e && !a ? /* @__PURE__ */ k1("button", { className: t || "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch cursor-pointer flex items-center justify-center px-[20px] py-[9px] relative rounded-[20px]", "data-node-id": "713:30", "data-name": "Selected=No, With Icon=No", children: /* @__PURE__ */ k1("p", { className: "[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap", "data-node-id": "713:1", children: "30 Min" }) }) : !e && a ? /* @__PURE__ */ h4("button", { className: t || "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[20px] py-[9px] relative rounded-[20px]", "data-node-id": "6290:53741", "data-name": "Selected=No, With Icon=Yes", children: [
    /* @__PURE__ */ k1("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "6290:53743", "data-name": "Dice \u2022 Explore", children: /* @__PURE__ */ k1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: f4 }) }),
    /* @__PURE__ */ k1("p", { className: "[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap", "data-node-id": "6290:53742", children: "30 Min" })
  ] }) : e && a ? /* @__PURE__ */ h4("div", { className: t || "bg-[rgba(255,255,255,0.25)] border border-solid border-white content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[9px] relative rounded-[20px]", "data-node-id": "6290:53735", "data-name": "Selected=Yes, With Icon=Yes", children: [
    /* @__PURE__ */ k1("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "6290:53736", "data-name": "Dice \u2022 Explore", children: /* @__PURE__ */ k1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: f4 }) }),
    /* @__PURE__ */ k1("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap", "data-node-id": "6290:53737", children: "30 Min" })
  ] }) : /* @__PURE__ */ k1("div", { className: t || "backdrop-blur-[15px] bg-[rgba(255,255,255,0.2)] border border-solid border-white content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[9px] relative rounded-[20px]", "data-node-id": "713:32", "data-name": "Selected=Yes, With Icon=No", children: /* @__PURE__ */ k1("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap", "data-node-id": "713:33", children: "30 Min" }) });
}

// aurora-visual:795:937
import { jsx as q0, jsxs as $9 } from "react/jsx-runtime";
var Y9 = new URL("./assets/e359fbac1be75cab67eb81d6.svg", import.meta.url).href, W9 = new URL("./assets/a3b15ac3ee54945d27b3e4a6.svg", import.meta.url).href;
function k0({ className: t, selected: e = !0 }) {
  let a = !e;
  return /* @__PURE__ */ $9("div", { className: t || `backdrop-blur-[15px] content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[20px] py-[9px] relative rounded-[20px] ${a ? "bg-[rgba(255,255,255,0.1)]" : "bg-[rgba(255,255,255,0.2)] border border-solid border-white"}`, "data-figma-layer": a ? "node-4064_26860" : "node-4064_26859", children: [
    /* @__PURE__ */ q0("p", { className: `[word-break:break-word] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap ${a ? 'font-["Inter:Regular"] font-normal leading-[20px]' : 'font-["Inter:Bold"] font-bold leading-[18px]'}`, "data-figma-layer": a ? "node-4060_26846" : "node-4060_26851", children: "30 Min" }),
    e && /* @__PURE__ */ q0("div", { className: "relative shrink-0 size-[12px]", "data-node-id": "4472:27974", "data-name": "cross", children: /* @__PURE__ */ q0("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: Y9 }) }),
    a && /* @__PURE__ */ q0("div", { className: "relative shrink-0 size-[12px]", "data-node-id": "14915:37308", "data-name": "plus \u2022 add", children: /* @__PURE__ */ q0("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: W9 }) })
  ] });
}

// packages/aurora-library/src/controls/Chips.tsx
function r1({ selected: t, defaultSelected: e = !1, withIcon: a = !1, onSelectedChange: r, onClick: o, children: i, disabled: n = !1, type: L = "button", ...c }) {
  let [C, p] = v4(e), l = t ?? C;
  return H(E0({ selected: l, withIcon: a }), "button", { ...c, type: L, disabled: n, "data-aurora-control": "chip", "aria-pressed": l, className: ["aurora-native-button", c.className].filter(Boolean).join(" "), onClick: (s) => {
    o?.(s), !s.defaultPrevented && !n && (t === void 0 && p(!0), r?.(!0));
  } }, b1(i));
}
function x1({ selected: t, defaultSelected: e = !1, onSelectedChange: a, onClick: r, children: o, disabled: i = !1, type: n = "button", withIcon: L, ...c }) {
  let [C, p] = v4(e), l = t ?? C;
  return H(k0({ selected: l }), "button", { ...c, type: n, disabled: i, "data-aurora-control": "chip", "aria-pressed": l, className: ["aurora-native-button", c.className].filter(Boolean).join(" "), onClick: (s) => {
    r?.(s), !s.defaultPrevented && !i && (t === void 0 && p(!l), a?.(!l));
  } }, b1(o));
}

// aurora-visual:5265:38271
import { jsx as u0, jsxs as J9 } from "react/jsx-runtime";
var X9 = new URL("./assets/6b74ce518f65a7a8c0b417af.svg", import.meta.url).href, q9 = new URL("./assets/0b7e11a4a20ac5a39daae234.svg", import.meta.url).href;
function e1({ className: t }) {
  return /* @__PURE__ */ J9("div", { className: t || "backdrop-blur-[5px] bg-[rgba(255,255,255,0)] content-stretch flex h-[30px] items-center justify-between relative rounded-[5px] w-[160px]", "data-node-id": "5265:38271", "data-name": "counter", children: [
    /* @__PURE__ */ u0("button", { className: "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch cursor-pointer flex h-[30px] items-center justify-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[50px]", "data-node-id": "5231:37973", "data-name": "Subtract", children: /* @__PURE__ */ u0("div", { className: "relative shrink-0 size-[18px]", "data-node-id": "5265:38232", "data-name": "minus \u2022 dash", children: /* @__PURE__ */ u0("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: X9 }) }) }),
    /* @__PURE__ */ u0("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap", "data-node-id": "5231:37975", children: "7" }),
    /* @__PURE__ */ u0("button", { className: "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch cursor-pointer flex h-[30px] items-center justify-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[50px]", "data-node-id": "5231:37976", "data-name": "Add", children: /* @__PURE__ */ u0("div", { className: "relative shrink-0 size-[18px]", "data-node-id": "5265:38228", "data-name": "plus \u2022 add", children: /* @__PURE__ */ u0("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: q9 }) }) })
  ] });
}

// aurora-visual:5265:38410
import { jsx as a1, jsxs as J0 } from "react/jsx-runtime";
var K9 = new URL("./assets/6b74ce518f65a7a8c0b417af.svg", import.meta.url).href, tt = new URL("./assets/0b7e11a4a20ac5a39daae234.svg", import.meta.url).href, et = new URL("./assets/5490394d9daac49bb289dbc6.png", import.meta.url).href, at = new URL("./assets/43ae17752084460f87f6e90f.svg", import.meta.url).href;
function ot({ className: t }) {
  return /* @__PURE__ */ J0("div", { className: t || "backdrop-blur-[5px] bg-[rgba(255,255,255,0)] content-stretch flex h-[30px] items-center justify-between relative rounded-[5px] w-[160px]", "data-node-id": "5265:38271", "data-name": "counter", children: [
    /* @__PURE__ */ a1("button", { className: "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch cursor-pointer flex h-[30px] items-center justify-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[50px]", "data-node-id": "5231:37973", "data-name": "Subtract", children: /* @__PURE__ */ a1("div", { className: "relative shrink-0 size-[18px]", "data-node-id": "5265:38232", "data-name": "minus \u2022 dash", children: /* @__PURE__ */ a1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: K9 }) }) }),
    /* @__PURE__ */ a1("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap", "data-node-id": "5231:37975", children: "7" }),
    /* @__PURE__ */ a1("button", { className: "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch cursor-pointer flex h-[30px] items-center justify-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[50px]", "data-node-id": "5231:37976", "data-name": "Add", children: /* @__PURE__ */ a1("div", { className: "relative shrink-0 size-[18px]", "data-node-id": "5265:38228", "data-name": "plus \u2022 add", children: /* @__PURE__ */ a1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: tt }) }) })
  ] });
}
function i1({ className: t, added: e = !1 }) {
  let a = e;
  return /* @__PURE__ */ J0("div", { className: t || "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[10px] items-start pb-[15px] relative rounded-[10px] w-[191px]", "data-figma-layer": a ? "node-5265_38424" : "node-5265_38409", children: [
    /* @__PURE__ */ J0("div", { className: "grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0", "data-figma-layer": a ? "node-5265_38374" : "node-5265_38395", "data-name": "Image", children: [
      /* @__PURE__ */ a1("div", { className: "col-1 h-[144px] ml-0 mt-0 relative rounded-tl-[10px] rounded-tr-[10px] row-1 w-[191px]", "data-figma-layer": a ? "node-5265_38375" : "node-5265_38396", "data-name": "Change Image Here", children: /* @__PURE__ */ a1("div", { className: "absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[10px] rounded-tr-[10px]", children: /* @__PURE__ */ a1("img", { alt: "", className: "absolute left-0 max-w-none size-full top-0", src: et }) }) }),
      /* @__PURE__ */ a1("div", { className: "bg-black col-1 ml-[8px] mt-[8px] relative rounded-[5px] row-1 size-[20px]", "data-figma-layer": a ? "node-5265_38376" : "node-5265_38397", "data-name": "veg", children: /* @__PURE__ */ a1("div", { className: "absolute inset-[20%]", "data-figma-layer": a ? "node-I5265_38376-5231_37962" : "node-I5265_38397-5231_37962", "data-name": "veg", children: /* @__PURE__ */ a1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: at }) }) })
    ] }),
    /* @__PURE__ */ J0("div", { className: "content-stretch flex flex-col gap-[14px] items-start px-[15px] relative shrink-0", "data-figma-layer": a ? "node-5265_38377" : "node-5265_38398", "data-name": "IA", children: [
      /* @__PURE__ */ J0("div", { className: "[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic relative shrink-0 text-[14px]", "data-figma-layer": a ? "node-5265_38378" : "node-5265_38399", "data-name": "Text", children: [
        /* @__PURE__ */ a1("p", { className: `font-["Inter:Regular"] font-normal leading-[20px] relative shrink-0 text-white w-[161px] ${a ? "h-[41px]" : "h-[40px]"}`, "data-figma-layer": a ? "node-5265_38379" : "node-5265_38400", children: a ? "Mocha almond cake " : "Mocha almond cake and cream" }),
        /* @__PURE__ */ a1("p", { className: "font-['Inter:Medium'] font-medium leading-[22px] relative shrink-0 text-[rgba(255,255,255,0.6)] w-[161px]", "data-figma-layer": a ? "node-5265_38380" : "node-5265_38401", children: "\u20B9149" })
      ] }),
      !e && /* @__PURE__ */ a1("div", { className: "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex h-[30px] items-center justify-center px-[15px] py-[10px] relative rounded-[5px] shrink-0 w-full", "data-node-id": "5265:38402", "data-name": "Secondary", children: /* @__PURE__ */ a1("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I5265:38402;1:5490", children: "add" }) }),
      a && /* @__PURE__ */ a1(ot, { className: "backdrop-blur-[5px] bg-[rgba(255,255,255,0)] content-stretch flex h-[30px] items-center justify-between relative rounded-[5px] shrink-0 w-[160px]" })
    ] })
  ] });
}

// aurora-visual:1343:8110
import { jsx as K0, jsxs as nt } from "react/jsx-runtime";
var rt = new URL("./assets/cc4bbbbbe3f5dfa39af443ee.svg", import.meta.url).href, it = new URL("./assets/12665b532908c4e92d7504d7.svg", import.meta.url).href;
function l1({ className: t }) {
  return /* @__PURE__ */ nt("div", { className: t || "content-stretch flex gap-[5px] items-center justify-center relative", "data-node-id": "1343:8110", "data-name": "Single Date Jumper", children: [
    /* @__PURE__ */ K0("div", { className: "relative shrink-0 size-[14px]", "data-node-id": "4414:32616", "data-name": "chevron left", children: /* @__PURE__ */ K0("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: rt }) }),
    /* @__PURE__ */ K0("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap", "data-node-id": "1343:8108", children: "Mon, 24" }),
    /* @__PURE__ */ K0("div", { className: "relative shrink-0 size-[14px]", "data-node-id": "4414:32580", "data-name": "chevron right", children: /* @__PURE__ */ K0("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: it }) })
  ] });
}

// aurora-visual:1794:22929
import { Fragment as g4, jsx as I1, jsxs as O5 } from "react/jsx-runtime";
var st = new URL("./assets/f87aac86036203f6e1ee638d.svg", import.meta.url).href, Lt = new URL("./assets/b09300085fe56811ee91a579.svg", import.meta.url).href;
function n1({ className: t, doneStatus: e = !1, selected: a = !1 }) {
  let r = !e, o = !a && !e, i = a && e;
  return /* @__PURE__ */ O5("div", { className: t || `relative rounded-[5px] w-[45px] ${o ? "bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center p-[10px]" : i ? "bg-[rgba(255,255,255,0.2)] h-[53px]" : "bg-[rgba(255,255,255,0.2)] h-[46px]"}`, "data-figma-layer": o ? "node-1794_23104" : i ? "node-12071_30353" : "node-7899_51607", children: [
    /* @__PURE__ */ O5("div", { className: `content-stretch flex flex-col gap-[2px] items-center ${o ? '[word-break:break-word] font-["Inter:Bold"] font-bold not-italic relative shrink-0 text-center text-white' : i ? "absolute left-[9px] top-[5px]" : '[word-break:break-word] absolute font-["Inter:Bold"] font-bold left-[8.5px] not-italic text-center text-white top-[10px]'}`, "data-figma-layer": o ? "node-1794_23105" : i ? "node-12071_30354" : "node-7899_51608", "data-name": "Date", children: [
      r && /* @__PURE__ */ O5(g4, { children: [
        /* @__PURE__ */ I1("div", { className: "flex flex-col h-[14px] justify-center leading-[0] relative shrink-0 text-[14px] w-[25px]", "data-figma-layer": o ? "node-1794_23106" : "node-7899_51609", children: /* @__PURE__ */ I1("p", { className: "leading-[18px]", children: "22" }) }),
        /* @__PURE__ */ I1("p", { className: "leading-[10px] opacity-60 relative shrink-0 text-[10px] tracking-[0.5px] uppercase w-[27px]", "data-figma-layer": o ? "node-1794_23107" : "node-7899_51610", children: "FRI" })
      ] }),
      i && /* @__PURE__ */ O5(g4, { children: [
        /* @__PURE__ */ I1("div", { className: "relative shrink-0 size-[10px]", "data-node-id": "12071:30361", "data-name": "Green Dot \u2022 Live", children: /* @__PURE__ */ I1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: Lt }) }),
        /* @__PURE__ */ I1("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[25px]", "data-node-id": "12071:30355", children: /* @__PURE__ */ I1("p", { className: "leading-[18px]", children: "22" }) }),
        /* @__PURE__ */ I1("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[10px] not-italic opacity-60 relative shrink-0 text-[10px] text-center text-white tracking-[0.5px] uppercase w-[27px]", "data-node-id": "12071:30356", children: "FRI" })
      ] })
    ] }),
    a && /* @__PURE__ */ I1("div", { className: `absolute h-[5px] left-[16px] w-[12px] ${i ? "top-[53px]" : "top-[46px]"}`, "data-figma-layer": i ? "node-12178_30054" : "node-12176_29968", children: /* @__PURE__ */ I1("div", { className: "absolute inset-[0_2.93%_1.21%_2.93%]", children: /* @__PURE__ */ I1("img", { alt: "", className: "block max-w-none size-full", src: st }) }) })
  ] });
}

// aurora-visual:19801:47173
import { jsx as p1, jsxs as x4 } from "react/jsx-runtime";
var Ct = new URL("./assets/32ece1a777ad188f72397fc6.svg", import.meta.url).href, ct = new URL("./assets/a922f0ea7b9a1f87d3d747eb.svg", import.meta.url).href, dt = new URL("./assets/ca38f34159cc7aeab26b5fb5.svg", import.meta.url).href, lt = new URL("./assets/95ee761d917bb342ccbade44.svg", import.meta.url).href;
function s1({ className: t }) {
  return /* @__PURE__ */ x4("div", { className: t || "backdrop-blur-[38.5px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[15px] items-center py-[20px] relative rounded-[10px] w-[335px]", "data-node-id": "19801:47173", "data-name": "Floating Rating", children: [
    /* @__PURE__ */ p1("div", { className: "content-stretch flex flex-col items-center justify-center px-[20px] relative shrink-0 w-[375px]", "data-node-id": "19801:47161", "data-name": "Widget Header", children: /* @__PURE__ */ p1("div", { className: "content-stretch flex flex-col gap-[5px] items-center justify-center relative shrink-0", "data-node-id": "I19801:47161;13298:33250", "data-name": "Text", children: /* @__PURE__ */ p1("div", { className: "content-stretch flex items-center justify-center relative shrink-0 w-[322px]", "data-node-id": "I19801:47161;13298:33252", "data-name": "Main Title", children: /* @__PURE__ */ p1("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.2px] w-[321px]", "data-node-id": "I19801:47161;13298:33253", children: "How was your experience?" }) }) }) }),
    /* @__PURE__ */ x4("div", { className: "content-stretch flex gap-[20px] items-start justify-center px-[37.5px] relative shrink-0", "data-node-id": "19801:47126", children: [
      /* @__PURE__ */ p1("div", { className: "relative shrink-0 size-[50px]", "data-node-id": "19801:47127", "data-name": "Rating-BAD", children: /* @__PURE__ */ p1("div", { className: "absolute inset-[0_-9.71%_-9.71%_0]", "data-node-id": "I19801:47127;12997:37023", children: /* @__PURE__ */ p1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: Ct }) }) }),
      /* @__PURE__ */ p1("div", { className: "relative shrink-0 size-[50px]", "data-node-id": "19801:47128", "data-name": "Rating-BAD", children: /* @__PURE__ */ p1("div", { className: "absolute inset-[0_-9.71%_-9.71%_0]", "data-node-id": "I19801:47128;12997:37028", children: /* @__PURE__ */ p1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: ct }) }) }),
      /* @__PURE__ */ p1("div", { className: "relative shrink-0 size-[50px]", "data-node-id": "19801:47129", "data-name": "Rating-BAD", children: /* @__PURE__ */ p1("div", { className: "absolute inset-[0_-10.29%_-9.71%_0.58%]", "data-node-id": "I19801:47129;12997:37044", children: /* @__PURE__ */ p1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: dt }) }) }),
      /* @__PURE__ */ p1("div", { className: "relative shrink-0 size-[50px]", "data-node-id": "19801:47130", "data-name": "Rating-BAD", children: /* @__PURE__ */ p1("div", { className: "absolute inset-[0_-10.29%_-9.71%_0.58%]", "data-node-id": "I19801:47130;12997:37053", children: /* @__PURE__ */ p1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: lt }) }) })
    ] })
  ] });
}

// aurora-visual:20779:47990
import { Fragment as ft, jsx as F, jsxs as u1 } from "react/jsx-runtime";
var pt = new URL("./assets/5557ae104cc5bd135d332e87.svg", import.meta.url).href, R5 = new URL("./assets/2f3dffc96f54d485eeb689f8.svg", import.meta.url).href;
function u4({ className: t, color: e = "\u26AA\uFE0F White", full: a = !1, half: r = !1, start: o = !0 }) {
  let i = e === "\u26AA\uFE0F White" && !o && r && !a;
  return /* @__PURE__ */ F("div", { className: t || "bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[4px] items-start relative rounded-[3.5px] w-[154.182px]", "data-figma-layer": i ? "node-19796_46952" : "node-19796_46938", children: /* @__PURE__ */ F("div", { className: `bg-white h-[4px] relative rounded-[3.5px] shrink-0 ${i ? "w-[77px]" : "w-[15px]"}`, "data-figma-layer": i ? "node-19796_46953" : "node-19796_46939", "data-name": "Rectangle" }) });
}
function f1({ className: t, expanded: e = !0, mini: a = !1 }) {
  let r = e && !a, o = !e && a;
  return /* @__PURE__ */ u1("div", { className: t || `content-stretch flex flex-col gap-[15px] items-center relative ${o ? "h-[39px]" : ""}`, "data-figma-layer": o ? "node-20779_47991" : "node-19799_47118", children: [
    r && /* @__PURE__ */ F("div", { className: "content-stretch flex flex-col items-start px-[20px] relative shrink-0 w-[375px]", "data-node-id": "19799:47082", "data-name": "Widget Header", children: /* @__PURE__ */ F("div", { className: "content-stretch flex flex-col gap-[5px] items-start relative shrink-0", "data-node-id": "I19799:47082;13298:33215", "data-name": "Text", children: /* @__PURE__ */ F("div", { className: "content-stretch flex gap-[10px] items-center relative shrink-0 w-[335px]", "data-node-id": "I19799:47082;13298:33217", "data-name": "Main Title", children: /* @__PURE__ */ F("p", { className: "[word-break:break-word] flex-[1_0_0] font-['Inter:Bold'] font-bold leading-[22px] min-w-px not-italic relative text-[18px] text-white tracking-[-0.2px]", "data-node-id": "I19799:47082;13298:33218", children: "What our customers say" }) }) }) }),
    /* @__PURE__ */ u1("div", { className: `content-stretch flex relative shrink-0 ${o ? "bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] border-solid items-center justify-center p-[5px] rounded-[5px]" : "gap-[15px] items-start"}`, "data-figma-layer": o ? "node-20779_47993" : "node-19796_46998", "data-name": "Rate", children: [
      r && /* @__PURE__ */ u1(ft, { children: [
        /* @__PURE__ */ u1("div", { className: "content-stretch flex flex-col gap-px items-start justify-center pr-[220px] relative shrink-0 w-[129px]", "data-node-id": "19799:47016", "data-name": "Rating", children: [
          /* @__PURE__ */ F("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.5)] tracking-[-0.2px] w-[112px]", "data-node-id": "19799:47017", children: "Ratings" }),
          /* @__PURE__ */ u1("div", { className: "content-stretch flex items-center relative shrink-0", "data-node-id": "19799:47018", "data-name": "Rating", children: [
            /* @__PURE__ */ F("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Black'] font-black h-[56px] justify-center leading-[0] not-italic relative shrink-0 text-[38px] text-white tracking-[-0.3px] w-[73px]", "data-node-id": "19799:47019", children: /* @__PURE__ */ F("p", { className: "leading-[40px]", children: "4.9" }) }),
            /* @__PURE__ */ F("div", { className: "relative shrink-0 size-[38px]", "data-node-id": "19799:47020", "data-name": "Star", children: /* @__PURE__ */ F("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: pt }) })
          ] })
        ] }),
        /* @__PURE__ */ u1("div", { className: "content-stretch flex flex-col gap-[10px] items-start relative shrink-0", "data-node-id": "19799:47022", "data-name": "Detail raring", children: [
          /* @__PURE__ */ u1("div", { className: "content-stretch flex flex-col gap-[2px] items-center relative shrink-0", "data-node-id": "19796:46990", "data-name": "Variable 1", children: [
            /* @__PURE__ */ u1("div", { className: "content-stretch flex gap-px items-center relative shrink-0", "data-node-id": "19796:46991", "data-name": "Text + icon", children: [
              /* @__PURE__ */ F("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] w-[149px]", "data-node-id": "19796:46992", children: /* @__PURE__ */ F("p", { className: "leading-[16px]", children: "Title 1" }) }),
              /* @__PURE__ */ F("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] text-right w-[23px]", "data-node-id": "19796:46993", children: /* @__PURE__ */ F("p", { className: "leading-[18px]", children: "4.9" }) }),
              /* @__PURE__ */ F("div", { className: "relative shrink-0 size-[16px]", "data-node-id": "19796:46994", "data-name": "Star", children: /* @__PURE__ */ F("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: R5 }) })
            ] }),
            /* @__PURE__ */ F(u4, { className: "bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[4px] items-start relative rounded-[3.5px] shrink-0 w-full", half: !0, start: !1 })
          ] }),
          /* @__PURE__ */ u1("div", { className: "content-stretch flex flex-col gap-[2px] items-center relative shrink-0", "data-node-id": "19796:46974", "data-name": "Variable 2", children: [
            /* @__PURE__ */ u1("div", { className: "content-stretch flex gap-px items-center relative shrink-0", "data-node-id": "19796:46975", "data-name": "Text + icon", children: [
              /* @__PURE__ */ F("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] w-[149px]", "data-node-id": "19796:46976", children: /* @__PURE__ */ F("p", { className: "leading-[16px]", children: "Title 2" }) }),
              /* @__PURE__ */ F("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] text-right w-[23px]", "data-node-id": "19796:46977", children: /* @__PURE__ */ F("p", { className: "leading-[18px]", children: "4.9" }) }),
              /* @__PURE__ */ F("div", { className: "relative shrink-0 size-[16px]", "data-node-id": "19796:46978", "data-name": "Star", children: /* @__PURE__ */ F("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: R5 }) })
            ] }),
            /* @__PURE__ */ F(u4, { className: "bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[4px] items-start relative rounded-[3.5px] shrink-0 w-full" })
          ] }),
          /* @__PURE__ */ u1("div", { className: "content-stretch flex flex-col gap-[2px] items-center relative shrink-0", "data-node-id": "19796:46999", "data-name": "Variable 3", children: [
            /* @__PURE__ */ u1("div", { className: "content-stretch flex gap-px items-center relative shrink-0", "data-node-id": "19796:47000", "data-name": "Text + icon", children: [
              /* @__PURE__ */ F("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] w-[149px]", "data-node-id": "19796:47001", children: /* @__PURE__ */ F("p", { className: "leading-[16px]", children: "Title 3" }) }),
              /* @__PURE__ */ F("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] text-right w-[23px]", "data-node-id": "19796:47002", children: /* @__PURE__ */ F("p", { className: "leading-[18px]", children: "4.9" }) }),
              /* @__PURE__ */ F("div", { className: "relative shrink-0 size-[16px]", "data-node-id": "19796:47003", "data-name": "Star", children: /* @__PURE__ */ F("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: R5 }) })
            ] }),
            /* @__PURE__ */ F("div", { className: "bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[4px] items-start relative rounded-[3.5px] shrink-0 w-full", "data-node-id": "19796:47004", "data-name": "Sleek Progress Bar", children: /* @__PURE__ */ F("div", { className: "bg-white h-[4px] relative rounded-[3.5px] shrink-0 w-[154px]", "data-node-id": "I19796:47004;19796:46955", "data-name": "Rectangle" }) })
          ] })
        ] })
      ] }),
      o && /* @__PURE__ */ F("div", { className: "flex flex-row items-center self-stretch", "data-node-id": "20779:47994", children: /* @__PURE__ */ u1("div", { className: "content-stretch flex flex-col gap-px h-full items-center justify-center relative shrink-0", "data-name": "Rating", children: [
        /* @__PURE__ */ u1("div", { className: "content-stretch flex items-center justify-center relative shrink-0", "data-node-id": "20779:47996", "data-name": "Rating", children: [
          /* @__PURE__ */ F("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap", "data-node-id": "20779:47997", children: /* @__PURE__ */ F("p", { className: "leading-[16px]", children: "4.9" }) }),
          /* @__PURE__ */ F("div", { className: "relative shrink-0 size-[16px]", "data-node-id": "20779:47998", "data-name": "Star", children: /* @__PURE__ */ F("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: R5 }) })
        ] }),
        /* @__PURE__ */ F("p", { className: "[word-break:break-word] font-['Inter:Regular'] font-normal leading-[12px] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap", "data-node-id": "20779:47995", children: "122 Reviews" })
      ] }) })
    ] })
  ] });
}

// aurora-evidence:136
import { Fragment as qd, jsx as St, jsxs as Pt } from "react/jsx-runtime";
function ut(t, e, a, r) {
  let [o, i] = xt(e);
  return vt(() => {
    let n = a.current?.closest("form"), L = () => {
      t === void 0 && i(e);
    };
    return n?.addEventListener("reset", L), () => n?.removeEventListener("reset", L);
  }, [t, JSON.stringify(e)]), [t ?? o, (n) => {
    t === void 0 && i(n), r?.(n);
  }];
}
var Bd = Array.from({ length: 6 }, (t, e) => ({ value: String(e), label: e ? "UnSelected" : "Selected" })), Yd = ["S", "M", "L", "XL", "XXL", "XXXL"].map((t) => ({ value: t, label: t })), Wd = Array.from({ length: 9 }, (t, e) => ({ value: String(e), label: ["30 Min", "45 Min", "60 Min"][e % 3] }));
function Mt(t, e, a, r) {
  return z(t(e), "div", { "data-aurora-control": "widget", "data-aurora-widget": !0, ...a, className: ["aurora-widget-source", a.className].filter(Boolean).join(" ") }, r);
}
function b4(t, e, a = t.props.children) {
  return ht("button", { ...t.props, ...e, type: "button", className: [t.props.className, "aurora-widget-button"].join(" ") }, a);
}
function bt({ label: t = "Quantity", value: e, defaultValue: a = 7, min: r = 0, max: o = 99, step: i = 1, disabled: n = !1, name: L, onValueChange: c, ...C }) {
  if (!Number.isFinite(r) || !Number.isFinite(o) || o < r || !Number.isFinite(i) || i <= 0) throw new RangeError("AuroraCounter requires finite min <= max and step > 0");
  let p = gt(null), l = (f) => Math.min(o, Math.max(r, f)), [s, d] = ut(e, a, p, c), h = l(s);
  if (!Number.isFinite(s)) throw new RangeError("AuroraCounter values must be finite");
  return /* @__PURE__ */ Pt("div", { ref: p, className: "aurora-widget-counter", role: "group", "aria-label": t, children: [
    Mt(e1, {}, C, (f) => {
      if (f.props["data-name"] === "Subtract") return b4(f, { "aria-label": `Decrease ${t}`, disabled: n || h <= r, onClick: () => d(l(h - i)) });
      if (f.props["data-name"] === "Add") return b4(f, { "aria-label": `Increase ${t}`, disabled: n || h >= o, onClick: () => d(l(h + i)) });
      if (f.type === "img") return M4(f, { style: { ...f.props.style, filter: "var(--aurora-widget-icon-filter, none)" } });
      if (f.props["data-aurora-text"]) return M4(f, { "aria-live": "polite", children: String(h) });
    }),
    L && /* @__PURE__ */ St("input", { type: "hidden", name: L, value: h, disabled: n })
  ] });
}
var yt = (t) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) throw new RangeError("Aurora date values use YYYY-MM-DD");
  let e = /* @__PURE__ */ new Date(`${t}T12:00:00Z`);
  if (!Number.isFinite(+e) || e.toISOString().slice(0, 10) !== t) throw new RangeError("Invalid Aurora date");
  return e;
}, mt = (t) => t.toISOString().slice(0, 10), Zt = (t, e) => {
  let a = yt(t);
  return a.setUTCDate(a.getUTCDate() + e), mt(a);
};
var $d = Array.from({ length: 8 }, (t, e) => Zt("2021-10-22", e));
var y4 = bt;

// aurora-evidence:141
import { Children as m4, cloneElement as d2, isValidElement as Z4, useState as tl } from "react";
import { jsx as It } from "react/jsx-runtime";
function zt(t, e) {
  let a = !1;
  function r(o) {
    if (!Z4(o)) return o;
    let i = o;
    return !a && i.props["data-aurora-text"] ? (a = !0, d2(i, {}, e)) : d2(i, {}, m4.map(i.props.children, r));
  }
  return r(t);
}
function Nt(t, e, a, r, o, i) {
  let n = r || e?.disabled === !0, L = e?.label === void 0 ? X(t).trim() : X(e.label).trim();
  return Q(t, "button", {
    type: "button",
    disabled: n,
    "data-aurora-action": a,
    className: "aurora-extended-action",
    "aria-label": e?.ariaLabel ?? (L && L !== "TEXT LABEL" ? L : i),
    onClick: (c) => {
      n || (e?.onClick?.(c), c.defaultPrevented || o?.(a, c));
    }
  }, e?.label === void 0 ? t.props.children : zt(t, e.label).props.children);
}
function S4(t) {
  return d2(t, {}, m4.map(t.props.children, (e) => {
    if (!Z4(e)) return e;
    let a = e;
    return a.type === "img" ? k(a) : S4(a);
  }));
}
function At({ Visual: t, visualProps: e = {}, match: a, label: r, actions: o = [], disabled: i = !1, onAction: n, ...L }) {
  return z(t(e), "div", {
    ...L,
    role: L.role ?? "group",
    "aria-label": L["aria-label"] ?? r,
    "data-aurora-control": "action-group",
    "data-aurora-disabled": i,
    className: ["aurora-extended-actions", L.className].filter(Boolean).join(" ")
  }, (c, C) => {
    let p = a(c, C.id), l = /chevron|Dice.*Explore/i.test(c.props["data-name"] ?? "") ? S4(c) : c;
    return p === void 0 ? l === c ? void 0 : l : Nt(l, o[p], p, i, n, `Action ${p + 1}`);
  });
}
function Qt(t) {
  return /* @__PURE__ */ It(At, { ...t, Visual: t0, label: "Secondary actions", match: (e, a) => a === "11610:25493" ? 0 : a === "11610:25495" ? 1 : void 0 });
}
var P4 = Qt;

// aurora-evidence:168
import { useEffect as Dt, useId as Ot, useRef as w5, useState as Rt } from "react";
import { jsx as t5, jsxs as Et } from "react/jsx-runtime";
var wt = (t) => `\u20B9${t}`;
function Tt({ label: t = "Price range", min: e = 200, max: a = 2e3, step: r = 1, value: o, defaultValue: i = [1e3, 1500], onValueChange: n, onValueCommit: L, formatValue: c = wt, lowerLabel: C = "Minimum", upperLabel: p = "Maximum", disabled: l = !1, name: s, className: d, id: h, style: f, ...x }) {
  if (!Number.isFinite(e) || !Number.isFinite(a) || a <= e || !Number.isFinite(r) || r <= 0) throw new RangeError("AuroraSlider requires finite min < max and step > 0");
  let y = (N) => {
    if (!Number.isFinite(N)) throw new RangeError("AuroraSlider values must be finite");
    let T = e + Math.floor((a - e) / r + 1e-10) * r;
    return Number(Math.min(T, Math.max(e, e + Math.round((Math.min(a, Math.max(e, N)) - e) / r) * r)).toPrecision(12));
  }, b = (N) => {
    if (!Array.isArray(N) || N.length !== 2) throw new RangeError("AuroraSlider requires an ascending pair of numeric values");
    let T = y(N[0]), o1 = y(N[1]);
    return [Math.min(T, o1), Math.max(T, o1)];
  }, Z = Ot(), g = h ?? Z, [M, u] = Rt(() => b(i)), v = b(o ?? M), m = w5(v);
  m.current = v;
  let S = w5(null), R = w5(null), A = w5(null);
  Dt(() => {
    let N = S.current?.form, T = () => {
      o === void 0 && u(b(i));
    };
    return N?.addEventListener("reset", T), () => N?.removeEventListener("reset", T);
  }, [o, i[0], i[1], e, a, r]);
  let O = (N, T, o1 = !1) => {
    if (l) return;
    let Z1 = [...m.current], u8 = T === "min" ? 0 : 1;
    Z1[u8] = T === "min" ? Math.min(y(N), Z1[1]) : Math.max(y(N), Z1[0]);
    let M8 = Z1[0] !== m.current[0] || Z1[1] !== m.current[1];
    o === void 0 && (m.current = Z1, u(Z1)), M8 && n?.(Z1, T), o1 && L?.(Z1, T);
  }, D = (N, T) => {
    let o1 = T === "min" ? 0 : 1, Z1 = N.key === "ArrowUp" || N.key === "ArrowRight" ? r : N.key === "ArrowDown" || N.key === "ArrowLeft" ? -r : N.key === "PageUp" ? r * 10 : N.key === "PageDown" ? -r * 10 : null;
    Z1 === null && N.key !== "Home" && N.key !== "End" || (N.preventDefault(), O(N.key === "Home" ? e : N.key === "End" ? a : m.current[o1] + (Z1 ?? 0), T, !0));
  }, w = (N) => 22 + (a - N) / (a - e) * 206, C1 = (N, T) => a - ((N - T.top) * 250 / (T.height || 250) - 22) / 206 * (a - e), P = [w(v[0]) - 9, w(v[1]) - 9];
  return P[0] - P[1] < 20 && (P[1] = Math.max(13, Math.min(199, (P[0] + P[1]) / 2 - 10)), P[0] = P[1] + 20), /* @__PURE__ */ Et(
    "div",
    {
      ...x,
      id: g,
      role: "group",
      "aria-label": t,
      "aria-disabled": l || void 0,
      "data-node-id": "7899:49440",
      "data-aurora-control": "slider",
      "data-aurora-disabled": l,
      className: ["aurora-native-slider", d].filter(Boolean).join(" "),
      style: f,
      onPointerDown: (N) => {
        if (x.onPointerDown?.(N), N.defaultPrevented || l || N.target.tagName === "INPUT" || N.button !== 0) return;
        let T = C1(N.clientY, N.currentTarget.getBoundingClientRect()), o1 = Math.abs(T - v[0]) < Math.abs(T - v[1]) ? "min" : "max";
        A.current = o1, (o1 === "min" ? S : R).current?.focus(), N.currentTarget.setPointerCapture?.(N.pointerId), O(T, o1);
      },
      onPointerMove: (N) => {
        x.onPointerMove?.(N), !N.defaultPrevented && A.current && O(C1(N.clientY, N.currentTarget.getBoundingClientRect()), A.current);
      },
      onPointerUp: (N) => {
        x.onPointerUp?.(N), A.current && (N.defaultPrevented || L?.([...m.current], A.current), A.current = null, N.currentTarget.releasePointerCapture?.(N.pointerId));
      },
      onPointerCancel: (N) => {
        A.current = null, x.onPointerCancel?.(N);
      },
      children: [
        /* @__PURE__ */ t5("span", { className: "aurora-native-slider-endpoint aurora-native-slider-endpoint-max", "aria-hidden": "true", children: c(a) }),
        /* @__PURE__ */ t5("span", { className: "aurora-native-slider-track", "aria-hidden": "true" }),
        /* @__PURE__ */ t5("span", { className: "aurora-native-slider-endpoint aurora-native-slider-endpoint-min", "aria-hidden": "true", children: c(e) }),
        ["min", "max"].map((N, T) => /* @__PURE__ */ t5(
          "input",
          {
            ref: N === "min" ? S : R,
            type: "range",
            className: "aurora-native-slider-input",
            "data-aurora-thumb": N,
            name: s,
            min: e,
            max: a,
            step: r,
            value: v[T],
            disabled: l,
            "aria-label": `${t}: ${N === "min" ? C : p}`,
            "aria-orientation": "vertical",
            "aria-valuemin": N === "min" ? e : v[0],
            "aria-valuemax": N === "max" ? a : v[1],
            "aria-valuetext": c(v[T]),
            onChange: (o1) => O(Number(o1.currentTarget.value), N),
            onKeyDown: (o1) => D(o1, N),
            onPointerUp: () => {
              l || L?.([...m.current], N);
            },
            onBlur: () => {
              l || L?.([...m.current], N);
            }
          },
          N
        )),
        ["min", "max"].map((N, T) => /* @__PURE__ */ t5("span", { className: "aurora-native-slider-value", "data-aurora-value": N, style: { top: `${P[T]}px` }, "aria-hidden": "true", children: c(v[T]) }, N))
      ]
    }
  );
}
var l2 = Tt;

// aurora-evidence:220
import { cloneElement as jt, useId as _t, useState as h2 } from "react";

// aurora-visual:433:585
import { jsx as L1, jsxs as M0 } from "react/jsx-runtime";
var kt = new URL("./assets/262a720330d4ecfeb6ef0f9d.svg", import.meta.url).href;
function D1({ className: t }) {
  return /* @__PURE__ */ M0("div", { className: t || "h-[25px] relative w-[375px]", "data-node-id": "433:585", "data-name": "Top Nav Tabs", children: [
    /* @__PURE__ */ L1("div", { className: "absolute inset-[96%_0_0_0]", "data-node-id": "433:540", "data-name": "Separator", children: /* @__PURE__ */ L1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: kt }) }),
    /* @__PURE__ */ M0("div", { className: "absolute bottom-0 content-stretch cursor-pointer flex gap-[30px] items-center left-0 pl-[20px] top-0", "data-node-id": "433:583", "data-name": "Tabs", children: [
      /* @__PURE__ */ M0("button", { className: "content-stretch flex flex-col gap-[5px] h-[25px] items-center justify-center relative shrink-0", "data-node-id": "433:566", "data-name": "Top Nav Tab Labels", children: [
        /* @__PURE__ */ L1("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white uppercase whitespace-nowrap", "data-node-id": "I433:566;433:543", children: /* @__PURE__ */ L1("p", { className: "leading-[20px]", children: "TAB 1" }) }),
        /* @__PURE__ */ L1("div", { className: "bg-white h-[2px] relative rounded-[0.5px] shrink-0 w-full", "data-node-id": "I433:566;433:541", "data-name": "Selection Line" })
      ] }),
      /* @__PURE__ */ M0("button", { className: "content-stretch flex flex-col gap-[5px] h-[25px] items-center justify-center relative shrink-0", "data-node-id": "433:569", "data-name": "Top Nav Tab Labels", children: [
        /* @__PURE__ */ L1("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic opacity-60 relative shrink-0 text-[14px] text-center text-white uppercase whitespace-nowrap", "data-node-id": "I433:569;433:564", children: /* @__PURE__ */ L1("p", { className: "leading-[20px]", children: "TAB 2" }) }),
        /* @__PURE__ */ L1("div", { className: "bg-white h-[2px] opacity-0 relative rounded-[0.5px] shrink-0 w-full", "data-node-id": "I433:569;433:565", "data-name": "Selection Line" })
      ] }),
      /* @__PURE__ */ M0("button", { className: "content-stretch flex flex-col gap-[5px] h-[25px] items-center justify-center relative shrink-0", "data-node-id": "433:574", "data-name": "Top Nav Tab Labels", children: [
        /* @__PURE__ */ L1("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic opacity-60 relative shrink-0 text-[14px] text-center text-white uppercase whitespace-nowrap", "data-node-id": "I433:574;433:564", children: /* @__PURE__ */ L1("p", { className: "leading-[20px]", children: "TAB 3" }) }),
        /* @__PURE__ */ L1("div", { className: "bg-white h-[2px] opacity-0 relative rounded-[0.5px] shrink-0 w-full", "data-node-id": "I433:574;433:565", "data-name": "Selection Line" })
      ] }),
      /* @__PURE__ */ M0("button", { className: "content-stretch flex flex-col gap-[5px] h-[25px] items-center justify-center relative shrink-0", "data-node-id": "433:577", "data-name": "Top Nav Tab Labels", children: [
        /* @__PURE__ */ L1("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic opacity-60 relative shrink-0 text-[14px] text-center text-white uppercase whitespace-nowrap", "data-node-id": "I433:577;433:564", children: /* @__PURE__ */ L1("p", { className: "leading-[20px]", children: "TAB 4" }) }),
        /* @__PURE__ */ L1("div", { className: "bg-white h-[2px] opacity-0 relative rounded-[0.5px] shrink-0 w-full", "data-node-id": "I433:577;433:565", "data-name": "Selection Line" })
      ] }),
      /* @__PURE__ */ M0("button", { className: "content-stretch flex flex-col gap-[5px] h-[25px] items-center justify-center relative shrink-0", "data-node-id": "433:580", "data-name": "Top Nav Tab Labels", children: [
        /* @__PURE__ */ L1("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic opacity-60 relative shrink-0 text-[14px] text-center text-white uppercase whitespace-nowrap", "data-node-id": "I433:580;433:564", children: /* @__PURE__ */ L1("p", { className: "leading-[20px]", children: "TAB 5" }) }),
        /* @__PURE__ */ L1("div", { className: "bg-white h-[2px] opacity-0 relative rounded-[0.5px] shrink-0 w-full", "data-node-id": "I433:580;433:565", "data-name": "Selection Line" })
      ] })
    ] })
  ] });
}

// aurora-visual:1522:12813
import { jsx as H1, jsxs as Ht } from "react/jsx-runtime";
function O1({ className: t }) {
  return /* @__PURE__ */ Ht("div", { className: t || "content-stretch cursor-pointer flex gap-[10px] items-center pl-[20px] relative", "data-node-id": "1522:12813", "data-name": "In-Line Tabs", children: [
    /* @__PURE__ */ H1("button", { className: "bg-white content-stretch flex items-center justify-center px-[15px] py-[5px] relative rounded-[19px] shrink-0", "data-node-id": "1522:12799", "data-name": "In-Line Single-Select Tab", children: /* @__PURE__ */ H1("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-left whitespace-nowrap", "data-node-id": "I1522:12799;1522:12791", children: "Tab 1" }) }),
    /* @__PURE__ */ H1("button", { className: "bg-[rgba(255,255,255,0)] content-stretch flex h-[28px] items-center justify-center px-[15px] py-[5px] relative rounded-[19px] shrink-0", "data-node-id": "1522:12801", "data-name": "In-Line Single-Select Tab", children: /* @__PURE__ */ H1("p", { className: "[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-left text-white whitespace-nowrap", "data-node-id": "I1522:12801;1522:12793", children: "Tab 2" }) }),
    /* @__PURE__ */ H1("button", { className: "bg-[rgba(255,255,255,0)] content-stretch flex h-[28px] items-center justify-center px-[15px] py-[5px] relative rounded-[19px] shrink-0", "data-node-id": "1522:12803", "data-name": "In-Line Single-Select Tab", children: /* @__PURE__ */ H1("p", { className: "[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-left text-white whitespace-nowrap", "data-node-id": "I1522:12803;1522:12793", children: "Tab 3" }) }),
    /* @__PURE__ */ H1("button", { className: "bg-[rgba(255,255,255,0)] content-stretch flex h-[28px] items-center justify-center px-[15px] py-[5px] relative rounded-[19px] shrink-0", "data-node-id": "1522:12805", "data-name": "In-Line Single-Select Tab", children: /* @__PURE__ */ H1("p", { className: "[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-left text-white whitespace-nowrap", "data-node-id": "I1522:12805;1522:12793", children: "Tab 4" }) }),
    /* @__PURE__ */ H1("button", { className: "bg-[rgba(255,255,255,0)] content-stretch flex h-[28px] items-center justify-center px-[15px] py-[5px] relative rounded-[19px] shrink-0", "data-node-id": "1522:12811", "data-name": "In-Line Single-Select Tab", children: /* @__PURE__ */ H1("p", { className: "[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-left text-white whitespace-nowrap", "data-node-id": "I1522:12811;1522:12793", children: "Tab 4" }) })
  ] });
}

// aurora-visual:3712:26677
import { jsx as h1, jsxs as H0 } from "react/jsx-runtime";
var Ft = new URL("./assets/9c216aa49577fb026e4d939b.svg", import.meta.url).href, T5 = new URL("./assets/8feb46dbe67706029688ed97.svg", import.meta.url).href;
function R1({ className: t }) {
  return /* @__PURE__ */ H0("div", { className: t || "content-stretch flex gap-[10px] items-center pl-[20px] relative", "data-node-id": "3712:26677", "data-name": "Filter Tabs", children: [
    /* @__PURE__ */ H0("div", { className: "bg-white content-stretch flex gap-[10px] h-[30px] items-center justify-center pl-[15px] pr-[10px] py-[7px] relative rounded-[19px] shrink-0", "data-node-id": "3712:26678", "data-name": "Filter Tab Labels", children: [
      /* @__PURE__ */ h1("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap", "data-node-id": "I3712:26678;3712:26690", children: /* @__PURE__ */ h1("p", { className: "leading-[18px]", children: "Tab 1" }) }),
      /* @__PURE__ */ h1("div", { className: "relative shrink-0 size-[12px]", "data-node-id": "I3712:26678;4602:28239", "data-name": "cross", children: /* @__PURE__ */ h1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: Ft }) })
    ] }),
    /* @__PURE__ */ H0("div", { className: "bg-[rgba(255,255,255,0)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex gap-[10px] items-center justify-center pl-[15px] pr-[10px] py-[5px] relative rounded-[19px] shrink-0", "data-node-id": "3712:26679", "data-name": "Filter Tab Labels", children: [
      /* @__PURE__ */ h1("p", { className: "[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap", "data-node-id": "I3712:26679;3712:26692", children: "Tab 2" }),
      /* @__PURE__ */ h1("div", { className: "relative shrink-0 size-[12px]", "data-node-id": "I3712:26679;4602:28183", "data-name": "plus \u2022 add", children: /* @__PURE__ */ h1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: T5 }) })
    ] }),
    /* @__PURE__ */ H0("div", { className: "bg-[rgba(255,255,255,0)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex gap-[10px] items-center justify-center pl-[15px] pr-[10px] py-[5px] relative rounded-[19px] shrink-0", "data-node-id": "3712:26680", "data-name": "Filter Tab Labels", children: [
      /* @__PURE__ */ h1("p", { className: "[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap", "data-node-id": "I3712:26680;3712:26692", children: "Tab 3" }),
      /* @__PURE__ */ h1("div", { className: "relative shrink-0 size-[12px]", "data-node-id": "I3712:26680;4602:28183", "data-name": "plus \u2022 add", children: /* @__PURE__ */ h1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: T5 }) })
    ] }),
    /* @__PURE__ */ H0("div", { className: "bg-[rgba(255,255,255,0)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex gap-[10px] items-center justify-center pl-[15px] pr-[10px] py-[5px] relative rounded-[19px] shrink-0", "data-node-id": "3712:26681", "data-name": "Filter Tab Labels", children: [
      /* @__PURE__ */ h1("p", { className: "[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap", "data-node-id": "I3712:26681;3712:26692", children: "Tab 4" }),
      /* @__PURE__ */ h1("div", { className: "relative shrink-0 size-[12px]", "data-node-id": "I3712:26681;4602:28183", "data-name": "plus \u2022 add", children: /* @__PURE__ */ h1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: T5 }) })
    ] }),
    /* @__PURE__ */ H0("div", { className: "bg-[rgba(255,255,255,0)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex gap-[10px] items-center justify-center pl-[15px] pr-[10px] py-[5px] relative rounded-[19px] shrink-0", "data-node-id": "3712:26682", "data-name": "Filter Tab Labels", children: [
      /* @__PURE__ */ h1("p", { className: "[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap", "data-node-id": "I3712:26682;3712:26692", children: "Tab 4" }),
      /* @__PURE__ */ h1("div", { className: "relative shrink-0 size-[12px]", "data-node-id": "I3712:26682;4602:28183", "data-name": "plus \u2022 add", children: /* @__PURE__ */ h1("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: T5 }) })
    ] })
  ] });
}

// aurora-visual:433:557
import { jsx as p2, jsxs as Gt } from "react/jsx-runtime";
function z1({ className: t, selected: e = !0 }) {
  let a = !e;
  return /* @__PURE__ */ Gt("button", { className: t || "content-stretch flex flex-col gap-[5px] h-[25px] items-center justify-center relative", "data-figma-layer": a ? "node-433_563" : "node-433_549", children: [
    /* @__PURE__ */ p2("div", { className: `[word-break:break-word] flex flex-col font-["Inter:Regular"] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white uppercase whitespace-nowrap ${a ? "opacity-60" : ""}`, "data-figma-layer": a ? "node-433_564" : "node-433_543", children: /* @__PURE__ */ p2("p", { className: "leading-[20px]", children: "TAB LABEL" }) }),
    /* @__PURE__ */ p2("div", { className: `bg-white h-[2px] relative rounded-[0.5px] shrink-0 w-full ${a ? "opacity-0" : ""}`, "data-figma-layer": a ? "node-433_565" : "node-433_541", "data-name": "Selection Line" })
  ] });
}

// aurora-visual:1522:12795
import { jsx as z4 } from "react/jsx-runtime";
function N1({ className: t, selected: e = !0 }) {
  let a = !e;
  return /* @__PURE__ */ z4("button", { className: t || `content-stretch flex items-center justify-center px-[15px] py-[5px] relative rounded-[19px] ${a ? "bg-[rgba(255,255,255,0)] h-[28px]" : "bg-white"}`, "data-figma-layer": a ? "node-1522_12798" : "node-1522_12794", children: /* @__PURE__ */ z4("p", { className: `[word-break:break-word] not-italic relative shrink-0 text-[14px] text-left whitespace-nowrap ${a ? 'font-["Inter:Regular"] font-normal leading-[20px] text-white' : 'font-["Inter:Bold"] font-bold leading-[18px] text-black'}`, "data-figma-layer": a ? "node-1522_12793" : "node-1522_12791", children: a ? "Tab 2" : "Tab 1" }) });
}

// aurora-visual:3712:26688
import { Fragment as N4, jsx as b0, jsxs as f2 } from "react/jsx-runtime";
var Ut = new URL("./assets/9c216aa49577fb026e4d939b.svg", import.meta.url).href, Vt = new URL("./assets/8feb46dbe67706029688ed97.svg", import.meta.url).href;
function A1({ className: t, selected: e = !0 }) {
  let a = !e;
  return /* @__PURE__ */ f2("div", { className: t || `content-stretch flex gap-[10px] items-center justify-center pl-[15px] pr-[10px] relative rounded-[19px] ${a ? "bg-[rgba(255,255,255,0)] border border-[rgba(255,255,255,0.15)] border-solid py-[5px]" : "bg-white h-[30px] py-[7px]"}`, "data-figma-layer": a ? "node-3712_26691" : "node-3712_26689", children: [
    e && /* @__PURE__ */ f2(N4, { children: [
      /* @__PURE__ */ b0("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap", "data-node-id": "3712:26690", children: /* @__PURE__ */ b0("p", { className: "leading-[18px]", children: "Tab 1" }) }),
      /* @__PURE__ */ b0("div", { className: "relative shrink-0 size-[12px]", "data-node-id": "4602:28239", "data-name": "cross", children: /* @__PURE__ */ b0("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: Ut }) })
    ] }),
    a && /* @__PURE__ */ f2(N4, { children: [
      /* @__PURE__ */ b0("p", { className: "[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap", "data-node-id": "3712:26692", children: "Tab 2" }),
      /* @__PURE__ */ b0("div", { className: "relative shrink-0 size-[12px]", "data-node-id": "4602:28183", "data-name": "plus \u2022 add", children: /* @__PURE__ */ b0("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: Vt }) })
    ] })
  ] });
}

// aurora-evidence:220
import { jsx as e5 } from "react/jsx-runtime";
function v2({ Visual: t, toggle: e = !1, label: a, children: r, selected: o, defaultSelected: i = !0, onSelectedChange: n, disabled: L = !1, onClick: c, ...C }) {
  let [p, l] = h2(i), s = o ?? p, d = !1;
  return z(t({ selected: s }), "button", {
    ...C,
    type: "button",
    role: C.role ?? "tab",
    disabled: L,
    "aria-selected": s,
    "data-selected": s,
    "data-aurora-control": "tab",
    className: ["aurora-extended-tab", C.className].filter(Boolean).join(" "),
    onClick: (h) => {
      if (c?.(h), L || h.defaultPrevented) return;
      let f = e ? !s : !0;
      o === void 0 && l(f), f !== s && n?.(f);
    }
  }, (h, f) => {
    if (!d && h.props["data-aurora-text"] && (r !== void 0 || a !== void 0))
      return d = !0, jt(h, {}, r ?? a);
    if (f.type === "img") return k(h);
  });
}
function Bt(t) {
  return /* @__PURE__ */ e5(v2, { ...t, Visual: z1 });
}
function Yt(t) {
  return /* @__PURE__ */ e5(v2, { ...t, Visual: N1 });
}
function Wt(t) {
  return /* @__PURE__ */ e5(v2, { ...t, Visual: A1, toggle: !0 });
}
var $t = Array.from({ length: 5 }, (t, e) => ({ value: `tab-${e + 1}`, label: `Tab ${e + 1}` }));
function Xt({ kind: t, items: e = $t, value: a, defaultValue: r, disabled: o = !1, orientation: i = "horizontal", activation: n = "automatic", onValueChange: L, onKeyDown: c, ...C }) {
  let p = _t();
  if (new Set(e.map((v) => v.value)).size !== e.length) throw new TypeError("Aurora tab values must be unique.");
  let l = e.find((v) => !o && !v.disabled)?.value, [s, d] = h2(r ?? l), [h, f] = h2(), x = a ?? s, y = e.some((v) => v.value === h && !v.disabled) ? h : e.some((v) => v.value === x && !v.disabled) ? x : l, b = (v) => {
    let m = e.find((S) => S.value === v);
    o || !m || m.disabled || (a === void 0 && d(v), v !== x && L?.(v));
  }, Z = (v) => {
    if (c?.(v), v.defaultPrevented || o) return;
    let S = [...v.currentTarget.querySelectorAll('button[role="tab"]')].filter((C1) => !C1.disabled), R = v.target.closest('button[role="tab"]'), A = S.indexOf(R);
    if (A < 0) return;
    if (v.key === "Enter" || v.key === " ") {
      v.preventDefault(), b(R.value);
      return;
    }
    let O = i === "vertical" ? "ArrowDown" : C.dir === "rtl" ? "ArrowLeft" : "ArrowRight", D = i === "vertical" ? "ArrowUp" : C.dir === "rtl" ? "ArrowRight" : "ArrowLeft", w = v.key === "Home" ? S[0] : v.key === "End" ? S.at(-1) : v.key === O ? S[(A + 1) % S.length] : v.key === D ? S[(A - 1 + S.length) % S.length] : void 0;
    w && (v.preventDefault(), f(w.value), w.focus(), n === "automatic" && b(w.value));
  }, g = t === "top" ? D1 : t === "inline" ? O1 : R1, M = t === "top" ? Bt : t === "inline" ? Yt : Wt, u = e.map((v, m) => /* @__PURE__ */ e5(M, { id: v.id ?? `${p}-tab-${m}`, value: v.value, selected: v.value === x, disabled: o || v.disabled, tabIndex: v.value === y ? 0 : -1, "aria-controls": v.controls, onFocus: () => f(v.value), onClick: () => {
    f(v.value), b(v.value);
  }, children: v.label }, v.value));
  return z(g({}), "div", {
    ...C,
    role: "tablist",
    "aria-label": C["aria-label"] ?? "Sections",
    "aria-orientation": i,
    "aria-disabled": o || void 0,
    onKeyDown: Z,
    "data-aurora-control": `${t}-tabs`,
    className: ["aurora-extended-tabs", C.className].filter(Boolean).join(" ")
  }, (v, m) => (t === "top" ? m.id === "433:583" : m.id === (t === "inline" ? "1522:12813" : "3712:26677")) ? Q(v, String(v.type), {}, u) : void 0);
}
function qt(t) {
  return /* @__PURE__ */ e5(Xt, { ...t, kind: "top" });
}
var A4 = qt;

// aurora-evidence:221
import { cloneElement as Jt, useId as Kt, useState as g2 } from "react";
import { jsx as a5 } from "react/jsx-runtime";
function x2({ Visual: t, toggle: e = !1, label: a, children: r, selected: o, defaultSelected: i = !0, onSelectedChange: n, disabled: L = !1, onClick: c, ...C }) {
  let [p, l] = g2(i), s = o ?? p, d = !1;
  return z(t({ selected: s }), "button", {
    ...C,
    type: "button",
    role: C.role ?? "tab",
    disabled: L,
    "aria-selected": s,
    "data-selected": s,
    "data-aurora-control": "tab",
    className: ["aurora-extended-tab", C.className].filter(Boolean).join(" "),
    onClick: (h) => {
      if (c?.(h), L || h.defaultPrevented) return;
      let f = e ? !s : !0;
      o === void 0 && l(f), f !== s && n?.(f);
    }
  }, (h, f) => {
    if (!d && h.props["data-aurora-text"] && (r !== void 0 || a !== void 0))
      return d = !0, Jt(h, {}, r ?? a);
    if (f.type === "img") return k(h);
  });
}
function te(t) {
  return /* @__PURE__ */ a5(x2, { ...t, Visual: z1 });
}
function ee(t) {
  return /* @__PURE__ */ a5(x2, { ...t, Visual: N1 });
}
function ae(t) {
  return /* @__PURE__ */ a5(x2, { ...t, Visual: A1, toggle: !0 });
}
var oe = Array.from({ length: 5 }, (t, e) => ({ value: `tab-${e + 1}`, label: `Tab ${e + 1}` }));
function re({ kind: t, items: e = oe, value: a, defaultValue: r, disabled: o = !1, orientation: i = "horizontal", activation: n = "automatic", onValueChange: L, onKeyDown: c, ...C }) {
  let p = Kt();
  if (new Set(e.map((v) => v.value)).size !== e.length) throw new TypeError("Aurora tab values must be unique.");
  let l = e.find((v) => !o && !v.disabled)?.value, [s, d] = g2(r ?? l), [h, f] = g2(), x = a ?? s, y = e.some((v) => v.value === h && !v.disabled) ? h : e.some((v) => v.value === x && !v.disabled) ? x : l, b = (v) => {
    let m = e.find((S) => S.value === v);
    o || !m || m.disabled || (a === void 0 && d(v), v !== x && L?.(v));
  }, Z = (v) => {
    if (c?.(v), v.defaultPrevented || o) return;
    let S = [...v.currentTarget.querySelectorAll('button[role="tab"]')].filter((C1) => !C1.disabled), R = v.target.closest('button[role="tab"]'), A = S.indexOf(R);
    if (A < 0) return;
    if (v.key === "Enter" || v.key === " ") {
      v.preventDefault(), b(R.value);
      return;
    }
    let O = i === "vertical" ? "ArrowDown" : C.dir === "rtl" ? "ArrowLeft" : "ArrowRight", D = i === "vertical" ? "ArrowUp" : C.dir === "rtl" ? "ArrowRight" : "ArrowLeft", w = v.key === "Home" ? S[0] : v.key === "End" ? S.at(-1) : v.key === O ? S[(A + 1) % S.length] : v.key === D ? S[(A - 1 + S.length) % S.length] : void 0;
    w && (v.preventDefault(), f(w.value), w.focus(), n === "automatic" && b(w.value));
  }, g = t === "top" ? D1 : t === "inline" ? O1 : R1, M = t === "top" ? te : t === "inline" ? ee : ae, u = e.map((v, m) => /* @__PURE__ */ a5(M, { id: v.id ?? `${p}-tab-${m}`, value: v.value, selected: v.value === x, disabled: o || v.disabled, tabIndex: v.value === y ? 0 : -1, "aria-controls": v.controls, onFocus: () => f(v.value), onClick: () => {
    f(v.value), b(v.value);
  }, children: v.label }, v.value));
  return z(g({}), "div", {
    ...C,
    role: "tablist",
    "aria-label": C["aria-label"] ?? "Sections",
    "aria-orientation": i,
    "aria-disabled": o || void 0,
    onKeyDown: Z,
    "data-aurora-control": `${t}-tabs`,
    className: ["aurora-extended-tabs", C.className].filter(Boolean).join(" ")
  }, (v, m) => (t === "top" ? m.id === "433:583" : m.id === (t === "inline" ? "1522:12813" : "3712:26677")) ? Q(v, String(v.type), {}, u) : void 0);
}
function ie(t) {
  return /* @__PURE__ */ a5(re, { ...t, kind: "filter" });
}
var Q4 = ie;

// aurora-evidence:222
import { cloneElement as ne, useId as se, useState as u2 } from "react";
import { jsx as o5 } from "react/jsx-runtime";
function M2({ Visual: t, toggle: e = !1, label: a, children: r, selected: o, defaultSelected: i = !0, onSelectedChange: n, disabled: L = !1, onClick: c, ...C }) {
  let [p, l] = u2(i), s = o ?? p, d = !1;
  return z(t({ selected: s }), "button", {
    ...C,
    type: "button",
    role: C.role ?? "tab",
    disabled: L,
    "aria-selected": s,
    "data-selected": s,
    "data-aurora-control": "tab",
    className: ["aurora-extended-tab", C.className].filter(Boolean).join(" "),
    onClick: (h) => {
      if (c?.(h), L || h.defaultPrevented) return;
      let f = e ? !s : !0;
      o === void 0 && l(f), f !== s && n?.(f);
    }
  }, (h, f) => {
    if (!d && h.props["data-aurora-text"] && (r !== void 0 || a !== void 0))
      return d = !0, ne(h, {}, r ?? a);
    if (f.type === "img") return k(h);
  });
}
function Le(t) {
  return /* @__PURE__ */ o5(M2, { ...t, Visual: z1 });
}
function Ce(t) {
  return /* @__PURE__ */ o5(M2, { ...t, Visual: N1 });
}
function ce(t) {
  return /* @__PURE__ */ o5(M2, { ...t, Visual: A1, toggle: !0 });
}
var de = Array.from({ length: 5 }, (t, e) => ({ value: `tab-${e + 1}`, label: `Tab ${e + 1}` }));
function le({ kind: t, items: e = de, value: a, defaultValue: r, disabled: o = !1, orientation: i = "horizontal", activation: n = "automatic", onValueChange: L, onKeyDown: c, ...C }) {
  let p = se();
  if (new Set(e.map((v) => v.value)).size !== e.length) throw new TypeError("Aurora tab values must be unique.");
  let l = e.find((v) => !o && !v.disabled)?.value, [s, d] = u2(r ?? l), [h, f] = u2(), x = a ?? s, y = e.some((v) => v.value === h && !v.disabled) ? h : e.some((v) => v.value === x && !v.disabled) ? x : l, b = (v) => {
    let m = e.find((S) => S.value === v);
    o || !m || m.disabled || (a === void 0 && d(v), v !== x && L?.(v));
  }, Z = (v) => {
    if (c?.(v), v.defaultPrevented || o) return;
    let S = [...v.currentTarget.querySelectorAll('button[role="tab"]')].filter((C1) => !C1.disabled), R = v.target.closest('button[role="tab"]'), A = S.indexOf(R);
    if (A < 0) return;
    if (v.key === "Enter" || v.key === " ") {
      v.preventDefault(), b(R.value);
      return;
    }
    let O = i === "vertical" ? "ArrowDown" : C.dir === "rtl" ? "ArrowLeft" : "ArrowRight", D = i === "vertical" ? "ArrowUp" : C.dir === "rtl" ? "ArrowRight" : "ArrowLeft", w = v.key === "Home" ? S[0] : v.key === "End" ? S.at(-1) : v.key === O ? S[(A + 1) % S.length] : v.key === D ? S[(A - 1 + S.length) % S.length] : void 0;
    w && (v.preventDefault(), f(w.value), w.focus(), n === "automatic" && b(w.value));
  }, g = t === "top" ? D1 : t === "inline" ? O1 : R1, M = t === "top" ? Le : t === "inline" ? Ce : ce, u = e.map((v, m) => /* @__PURE__ */ o5(M, { id: v.id ?? `${p}-tab-${m}`, value: v.value, selected: v.value === x, disabled: o || v.disabled, tabIndex: v.value === y ? 0 : -1, "aria-controls": v.controls, onFocus: () => f(v.value), onClick: () => {
    f(v.value), b(v.value);
  }, children: v.label }, v.value));
  return z(g({}), "div", {
    ...C,
    role: "tablist",
    "aria-label": C["aria-label"] ?? "Sections",
    "aria-orientation": i,
    "aria-disabled": o || void 0,
    onKeyDown: Z,
    "data-aurora-control": `${t}-tabs`,
    className: ["aurora-extended-tabs", C.className].filter(Boolean).join(" ")
  }, (v, m) => (t === "top" ? m.id === "433:583" : m.id === (t === "inline" ? "1522:12813" : "3712:26677")) ? Q(v, String(v.type), {}, u) : void 0);
}
function pe(t) {
  return /* @__PURE__ */ o5(le, { ...t, kind: "inline" });
}
var I4 = pe;

// aurora-evidence:226
import { cloneElement as fe, createElement as he, useEffect as ve, useId as fp, useRef as ge, useState as xe } from "react";
import { Fragment as Qe, jsx as b2, jsxs as O4 } from "react/jsx-runtime";
function ue(t, e, a, r) {
  let [o, i] = xe(e);
  return ve(() => {
    let n = a.current?.closest("form"), L = () => {
      t === void 0 && i(e);
    };
    return n?.addEventListener("reset", L), () => n?.removeEventListener("reset", L);
  }, [t, JSON.stringify(e)]), [t ?? o, (n) => {
    t === void 0 && i(n), r?.(n);
  }];
}
var Pp = Array.from({ length: 6 }, (t, e) => ({ value: String(e), label: e ? "UnSelected" : "Selected" })), zp = ["S", "M", "L", "XL", "XXL", "XXXL"].map((t) => ({ value: t, label: t })), Np = Array.from({ length: 9 }, (t, e) => ({ value: String(e), label: ["30 Min", "45 Min", "60 Min"][e % 3] }));
function Me(t, e, a, r) {
  return z(t(e), "div", { "data-aurora-control": "widget", "data-aurora-widget": !0, ...a, className: ["aurora-widget-source", a.className].filter(Boolean).join(" ") }, r);
}
function be(t, e, a = t.props.children) {
  return he("button", { ...t.props, ...e, type: "button", className: [t.props.className, "aurora-widget-button"].join(" ") }, a);
}
var F0 = (t) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) throw new RangeError("Aurora date values use YYYY-MM-DD");
  let e = /* @__PURE__ */ new Date(`${t}T12:00:00Z`);
  if (!Number.isFinite(+e) || e.toISOString().slice(0, 10) !== t) throw new RangeError("Invalid Aurora date");
  return e;
}, ye = (t) => t.toISOString().slice(0, 10), me = (t, e) => {
  let a = F0(t);
  return a.setUTCDate(a.getUTCDate() + e), ye(a);
}, Ze = (t, e, a) => {
  if (F0(t), e && F0(e), a && F0(a), e && a && e > a) throw new RangeError("Aurora date min must not follow max");
  return e && t < e ? e : a && t > a ? a : t;
}, Se = (t) => String(F0(t).getUTCDate()), Pe = (t) => F0(t).toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" }).toUpperCase();
function ze({ label: t, value: e, defaultValue: a = "2021-10-22", min: r, max: o, selected: i = !1, doneStatus: n = !1, disabled: L = !1, name: c, onSelect: C, onValueChange: p, ...l }) {
  let s = Ze(e ?? a, r, o), d = 0, h = Me(n1, { selected: i || n, doneStatus: n }, l, (f) => f.props["data-aurora-text"] ? fe(f, { children: d++ === 0 ? Se(s) : Pe(s) }) : void 0);
  return be(h, { ...l, "aria-label": t ?? s, "aria-pressed": i, disabled: L, onClick: () => {
    C?.(s), p?.(s);
  } }, /* @__PURE__ */ O4(Qe, { children: [
    h.props.children,
    c && i && /* @__PURE__ */ b2("input", { type: "hidden", name: c, value: s })
  ] }));
}
var Ne = Array.from({ length: 8 }, (t, e) => me("2021-10-22", e));
function Ae({ label: t = "Choose date", dates: e = Ne, doneDates: a = [], value: r, defaultValue: o = e[1] ?? e[0], min: i, max: n, disabled: L = !1, name: c, onValueChange: C, className: p, ...l }) {
  let s = ge(null), [d, h] = ue(r, o ?? "", s, C);
  return /* @__PURE__ */ O4("div", { ...l, ref: s, role: "group", "aria-label": t, className: ["aurora-widget-multi-date", p].filter(Boolean).join(" "), "data-node-id": "1794:23135", children: [
    e.map((f) => /* @__PURE__ */ b2(ze, { value: f, selected: f === d, doneStatus: a.includes(f), disabled: L || !!i && f < i || !!n && f > n, onSelect: h }, f)),
    c && d && /* @__PURE__ */ b2("input", { type: "hidden", name: c, value: d, disabled: L })
  ] });
}
var D4 = Ae;

// aurora-evidence:230
import { cloneElement as R4, createElement as Ie, useEffect as De, useId as Dp, useRef as Oe, useState as Re } from "react";
import { Fragment as $p, jsx as Fe, jsxs as Ge } from "react/jsx-runtime";
function we(t, e, a, r) {
  let [o, i] = Re(e);
  return De(() => {
    let n = a.current?.closest("form"), L = () => {
      t === void 0 && i(e);
    };
    return n?.addEventListener("reset", L), () => n?.removeEventListener("reset", L);
  }, [t, JSON.stringify(e)]), [t ?? o, (n) => {
    t === void 0 && i(n), r?.(n);
  }];
}
var jp = Array.from({ length: 6 }, (t, e) => ({ value: String(e), label: e ? "UnSelected" : "Selected" })), _p = ["S", "M", "L", "XL", "XXL", "XXXL"].map((t) => ({ value: t, label: t })), Bp = Array.from({ length: 9 }, (t, e) => ({ value: String(e), label: ["30 Min", "45 Min", "60 Min"][e % 3] }));
function Te(t, e, a, r) {
  return z(t(e), "div", { "data-aurora-control": "widget", "data-aurora-widget": !0, ...a, className: ["aurora-widget-source", a.className].filter(Boolean).join(" ") }, r);
}
function w4(t, e, a = t.props.children) {
  return Ie("button", { ...t.props, ...e, type: "button", className: [t.props.className, "aurora-widget-button"].join(" ") }, a);
}
var G0 = (t) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) throw new RangeError("Aurora date values use YYYY-MM-DD");
  let e = /* @__PURE__ */ new Date(`${t}T12:00:00Z`);
  if (!Number.isFinite(+e) || e.toISOString().slice(0, 10) !== t) throw new RangeError("Invalid Aurora date");
  return e;
}, Ee = (t) => t.toISOString().slice(0, 10), m2 = (t, e) => {
  let a = G0(t);
  return a.setUTCDate(a.getUTCDate() + e), Ee(a);
}, y2 = (t, e, a) => {
  if (G0(t), e && G0(e), a && G0(a), e && a && e > a) throw new RangeError("Aurora date min must not follow max");
  return e && t < e ? e : a && t > a ? a : t;
}, ke = (t) => String(G0(t).getUTCDate()), T4 = (t) => G0(t).toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" }).toUpperCase();
function He({ label: t = "Date", value: e, defaultValue: a = "2020-02-24", min: r, max: o, disabled: i = !1, name: n, onValueChange: L, ...c }) {
  let C = Oe(null), [p, l] = we(e, a, C, L), s = y2(p, r, o);
  return /* @__PURE__ */ Ge("div", { ref: C, role: "group", "aria-label": t, children: [
    Te(l1, {}, c, (d) => {
      if (d.props["data-name"] === "chevron left") return w4(d, { "aria-label": `Previous ${t}`, disabled: i || !!r && s <= r, onClick: () => l(y2(m2(s, -1), r, o)) });
      if (d.props["data-name"] === "chevron right") return w4(d, { "aria-label": `Next ${t}`, disabled: i || !!o && s >= o, onClick: () => l(y2(m2(s, 1), r, o)) });
      if (d.props["data-aurora-text"]) return R4(d, { "aria-live": "polite", children: `${T4(s).slice(0, 1) + T4(s).slice(1).toLowerCase()}, ${ke(s)}` });
      if (d.type === "img") return R4(d, { style: { ...d.props.style, filter: "var(--aurora-widget-icon-filter, none)" } });
    }),
    n && /* @__PURE__ */ Fe("input", { type: "hidden", name: n, value: s, disabled: i })
  ] });
}
var Yp = Array.from({ length: 8 }, (t, e) => m2("2021-10-22", e));
var E4 = He;

// aurora-evidence:267
import { cloneElement as Ue, createElement as Jp, useEffect as Ve, useId as je, useRef as _e, useState as Be } from "react";
import { Fragment as vf, jsx as k4, jsxs as ta } from "react/jsx-runtime";
function Ye(t, e, a, r) {
  let [o, i] = Be(e);
  return Ve(() => {
    let n = a.current?.closest("form"), L = () => {
      t === void 0 && i(e);
    };
    return n?.addEventListener("reset", L), () => n?.removeEventListener("reset", L);
  }, [t, JSON.stringify(e)]), [t ?? o, (n) => {
    t === void 0 && i(n), r?.(n);
  }];
}
var df = Array.from({ length: 6 }, (t, e) => ({ value: String(e), label: e ? "UnSelected" : "Selected" })), lf = ["S", "M", "L", "XL", "XXL", "XXXL"].map((t) => ({ value: t, label: t })), pf = Array.from({ length: 9 }, (t, e) => ({ value: String(e), label: ["30 Min", "45 Min", "60 Min"][e % 3] }));
function We(t, e, a, r) {
  return z(t(e), "div", { "data-aurora-control": "widget", "data-aurora-widget": !0, ...a, className: ["aurora-widget-source", a.className].filter(Boolean).join(" ") }, r);
}
var $e = (t) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) throw new RangeError("Aurora date values use YYYY-MM-DD");
  let e = /* @__PURE__ */ new Date(`${t}T12:00:00Z`);
  if (!Number.isFinite(+e) || e.toISOString().slice(0, 10) !== t) throw new RangeError("Invalid Aurora date");
  return e;
}, Xe = (t) => t.toISOString().slice(0, 10), qe = (t, e) => {
  let a = $e(t);
  return a.setUTCDate(a.getUTCDate() + e), Xe(a);
};
var ff = Array.from({ length: 8 }, (t, e) => qe("2021-10-22", e));
var Je = ["Very Sad", "Sad", "Good", "Happy"];
function Ke({ label: t = "How was your experience?", value: e, defaultValue: a, disabled: r = !1, name: o, onValueChange: i, ...n }) {
  let L = _e(null), c = je(), [C, p] = Ye(e, a, L, i), l = 0;
  return /* @__PURE__ */ k4("div", { ref: L, children: We(s1, {}, { ...n, role: "radiogroup", "aria-label": t }, (s) => {
    if (s.props["data-aurora-text"]) return Ue(s, { children: t });
    if (s.props["data-name"] === "Rating-BAD") {
      let d = Je[l++];
      return /* @__PURE__ */ ta("label", { ...s.props, className: [s.props.className, "aurora-widget-mood"].join(" "), "data-selected": C === d, children: [
        /* @__PURE__ */ k4("input", { type: "radio", name: o ?? c, value: d, checked: C === d, disabled: r, "aria-label": d, onChange: () => p(d) }),
        s.props.children
      ] });
    }
  }) });
}
var H4 = Ke;

// aurora-evidence:450
import { cloneElement as E5, createElement as ea, useEffect as aa, useId as uf, useRef as F4, useState as oa } from "react";
import { Fragment as Tf, jsx as U0, jsxs as j4 } from "react/jsx-runtime";
function G4(t, e, a, r) {
  let [o, i] = oa(e);
  return aa(() => {
    let n = a.current?.closest("form"), L = () => {
      t === void 0 && i(e);
    };
    return n?.addEventListener("reset", L), () => n?.removeEventListener("reset", L);
  }, [t, JSON.stringify(e)]), [t ?? o, (n) => {
    t === void 0 && i(n), r?.(n);
  }];
}
var If = Array.from({ length: 6 }, (t, e) => ({ value: String(e), label: e ? "UnSelected" : "Selected" })), Df = ["S", "M", "L", "XL", "XXL", "XXXL"].map((t) => ({ value: t, label: t })), Of = Array.from({ length: 9 }, (t, e) => ({ value: String(e), label: ["30 Min", "45 Min", "60 Min"][e % 3] }));
function U4(t, e, a, r) {
  return z(t(e), "div", { "data-aurora-control": "widget", "data-aurora-widget": !0, ...a, className: ["aurora-widget-source", a.className].filter(Boolean).join(" ") }, r);
}
function Z2(t, e, a = t.props.children) {
  return ea("button", { ...t.props, ...e, type: "button", className: [t.props.className, "aurora-widget-button"].join(" ") }, a);
}
function ra({ label: t = "Quantity", value: e, defaultValue: a = 7, min: r = 0, max: o = 99, step: i = 1, disabled: n = !1, name: L, onValueChange: c, ...C }) {
  if (!Number.isFinite(r) || !Number.isFinite(o) || o < r || !Number.isFinite(i) || i <= 0) throw new RangeError("AuroraCounter requires finite min <= max and step > 0");
  let p = F4(null), l = (f) => Math.min(o, Math.max(r, f)), [s, d] = G4(e, a, p, c), h = l(s);
  if (!Number.isFinite(s)) throw new RangeError("AuroraCounter values must be finite");
  return /* @__PURE__ */ j4("div", { ref: p, className: "aurora-widget-counter", role: "group", "aria-label": t, children: [
    U4(e1, {}, C, (f) => {
      if (f.props["data-name"] === "Subtract") return Z2(f, { "aria-label": `Decrease ${t}`, disabled: n || h <= r, onClick: () => d(l(h - i)) });
      if (f.props["data-name"] === "Add") return Z2(f, { "aria-label": `Increase ${t}`, disabled: n || h >= o, onClick: () => d(l(h + i)) });
      if (f.type === "img") return E5(f, { style: { ...f.props.style, filter: "var(--aurora-widget-icon-filter, none)" } });
      if (f.props["data-aurora-text"]) return E5(f, { "aria-live": "polite", children: String(h) });
    }),
    L && /* @__PURE__ */ U0("input", { type: "hidden", name: L, value: h, disabled: n })
  ] });
}
function ia({ title: t = "Product title", price: e = "\u20B9149", image: a, label: r = t, value: o, defaultValue: i = 0, min: n = 0, max: L = 99, step: c = 1, disabled: C, name: p, onValueChange: l, added: s, ...d }) {
  let h = F4(null), [f, x] = G4(o, i, h, l), y = 0;
  return /* @__PURE__ */ U0("div", { ref: h, className: "aurora-widget-counter-card", children: U4(i1, { added: s ?? f > 0 }, d, (b) => {
    if (b.props["data-node-id"] === "5265:38271") return /* @__PURE__ */ U0(ra, { label: r, value: f, min: n, max: L, step: c, disabled: C, name: p, onValueChange: x });
    if (b.props["data-name"] === "Secondary") return Z2(b, { disabled: C, onClick: () => x(Math.min(L, Math.max(n, c))), "aria-label": `Add ${r}` });
    if (b.type === "img" && /\.png(?:$|[?])/.test(b.props.src || "")) return a ? E5(b, { src: a }) : void 0;
    if (b.props["data-aurora-text"])
      return J(b).trim().toLowerCase() === "add" ? void 0 : E5(b, { children: y++ === 0 ? t : e });
  }) });
}
var na = [{ id: "first", title: "Product title", price: "\u20B9149" }, { id: "second", title: "Product title", price: "\u20B9149" }, { id: "third", title: "Product title", price: "\u20B9149" }, { id: "fourth", title: "Product title", price: "\u20B9149" }];
function sa({ label: t = "Title comes here", items: e = na, onValueChange: a, ...r }) {
  return /* @__PURE__ */ j4("section", { ...r, className: ["aurora-widget-carousel", r.className].filter(Boolean).join(" "), "data-node-id": "5265:38488", "aria-label": t, children: [
    /* @__PURE__ */ U0("h3", { className: "aurora-widget-title", children: t }),
    /* @__PURE__ */ U0("div", { className: "aurora-widget-carousel-items", tabIndex: 0, "aria-label": `${t} items`, children: e.map(({ id: o, ...i }) => /* @__PURE__ */ U0(ia, { ...i, "data-product-id": o, onValueChange: (n) => {
      i.onValueChange?.(n), a?.(o, n);
    } }, o)) })
  ] });
}
var La = (t) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) throw new RangeError("Aurora date values use YYYY-MM-DD");
  let e = /* @__PURE__ */ new Date(`${t}T12:00:00Z`);
  if (!Number.isFinite(+e) || e.toISOString().slice(0, 10) !== t) throw new RangeError("Invalid Aurora date");
  return e;
}, Ca = (t) => t.toISOString().slice(0, 10), ca = (t, e) => {
  let a = La(t);
  return a.setUTCDate(a.getUTCDate() + e), Ca(a);
};
var Rf = Array.from({ length: 8 }, (t, e) => ca("2021-10-22", e));
var V4 = sa;

// aurora-evidence:513
import { forwardRef as S2, useId as da, useState as la } from "react";
import { jsx as y0, jsxs as _4 } from "react/jsx-runtime";
var B4 = S2(function({ title: e = "Main Workout", detail: a = "20 Min", open: r, defaultOpen: o, variant: i, Open: n, disabled: L = !1, onOpenChange: c, children: C, className: p, ...l }, s) {
  let [d, h] = la(o ?? ((n ?? i?.Open) === !0 || (n ?? i?.Open) === "Yes")), f = r ?? d, x = da();
  return /* @__PURE__ */ _4("div", { ...l, ref: s, className: ["aurora-accordion", p].filter(Boolean).join(" "), "data-node-id": "5623:38667", children: [
    /* @__PURE__ */ _4("button", { type: "button", className: "aurora-accordion-trigger", disabled: L, "aria-expanded": f, "aria-controls": `${x}-panel`, id: `${x}-trigger`, onClick: () => {
      r === void 0 && h(!f), c?.(!f);
    }, children: [
      /* @__PURE__ */ y0("span", { className: "aurora-accordion-title", children: e }),
      /* @__PURE__ */ y0("span", { className: "aurora-accordion-detail", children: a }),
      /* @__PURE__ */ y0("svg", { "aria-hidden": "true", className: "aurora-accordion-icon", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ y0("path", { d: "M5 12h14m-7-7 7 7-7 7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
    ] }),
    /* @__PURE__ */ y0("div", { className: "aurora-accordion-panel", id: `${x}-panel`, role: "region", "aria-labelledby": `${x}-trigger`, hidden: !f, children: C })
  ] });
}), pa = S2((t, e) => /* @__PURE__ */ y0(B4, { ...t, ref: e, defaultOpen: t.defaultOpen ?? !1 })), Uf = S2((t, e) => /* @__PURE__ */ y0(B4, { ...t, ref: e, defaultOpen: t.defaultOpen ?? !0 })), fa = pa;

// aurora-evidence:514
import { forwardRef as P2, useId as ha, useState as va } from "react";
import { jsx as m0, jsxs as Y4 } from "react/jsx-runtime";
var W4 = P2(function({ title: e = "Main Workout", detail: a = "20 Min", open: r, defaultOpen: o, variant: i, Open: n, disabled: L = !1, onOpenChange: c, children: C, className: p, ...l }, s) {
  let [d, h] = va(o ?? ((n ?? i?.Open) === !0 || (n ?? i?.Open) === "Yes")), f = r ?? d, x = ha();
  return /* @__PURE__ */ Y4("div", { ...l, ref: s, className: ["aurora-accordion", p].filter(Boolean).join(" "), "data-node-id": "5623:38667", children: [
    /* @__PURE__ */ Y4("button", { type: "button", className: "aurora-accordion-trigger", disabled: L, "aria-expanded": f, "aria-controls": `${x}-panel`, id: `${x}-trigger`, onClick: () => {
      r === void 0 && h(!f), c?.(!f);
    }, children: [
      /* @__PURE__ */ m0("span", { className: "aurora-accordion-title", children: e }),
      /* @__PURE__ */ m0("span", { className: "aurora-accordion-detail", children: a }),
      /* @__PURE__ */ m0("svg", { "aria-hidden": "true", className: "aurora-accordion-icon", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ m0("path", { d: "M5 12h14m-7-7 7 7-7 7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
    ] }),
    /* @__PURE__ */ m0("div", { className: "aurora-accordion-panel", id: `${x}-panel`, role: "region", "aria-labelledby": `${x}-trigger`, hidden: !f, children: C })
  ] });
}), Yf = P2((t, e) => /* @__PURE__ */ m0(W4, { ...t, ref: e, defaultOpen: t.defaultOpen ?? !1 })), ga = P2((t, e) => /* @__PURE__ */ m0(W4, { ...t, ref: e, defaultOpen: t.defaultOpen ?? !0 })), xa = ga;

// aurora-evidence:515
import { forwardRef as z2, useId as ua, useState as Ma } from "react";
import { jsx as Z0, jsxs as $4 } from "react/jsx-runtime";
var N2 = z2(function({ title: e = "Main Workout", detail: a = "20 Min", open: r, defaultOpen: o, variant: i, Open: n, disabled: L = !1, onOpenChange: c, children: C, className: p, ...l }, s) {
  let [d, h] = Ma(o ?? ((n ?? i?.Open) === !0 || (n ?? i?.Open) === "Yes")), f = r ?? d, x = ua();
  return /* @__PURE__ */ $4("div", { ...l, ref: s, className: ["aurora-accordion", p].filter(Boolean).join(" "), "data-node-id": "5623:38667", children: [
    /* @__PURE__ */ $4("button", { type: "button", className: "aurora-accordion-trigger", disabled: L, "aria-expanded": f, "aria-controls": `${x}-panel`, id: `${x}-trigger`, onClick: () => {
      r === void 0 && h(!f), c?.(!f);
    }, children: [
      /* @__PURE__ */ Z0("span", { className: "aurora-accordion-title", children: e }),
      /* @__PURE__ */ Z0("span", { className: "aurora-accordion-detail", children: a }),
      /* @__PURE__ */ Z0("svg", { "aria-hidden": "true", className: "aurora-accordion-icon", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ Z0("path", { d: "M5 12h14m-7-7 7 7-7 7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
    ] }),
    /* @__PURE__ */ Z0("div", { className: "aurora-accordion-panel", id: `${x}-panel`, role: "region", "aria-labelledby": `${x}-trigger`, hidden: !f, children: C })
  ] });
}), Jf = z2((t, e) => /* @__PURE__ */ Z0(N2, { ...t, ref: e, defaultOpen: t.defaultOpen ?? !1 })), Kf = z2((t, e) => /* @__PURE__ */ Z0(N2, { ...t, ref: e, defaultOpen: t.defaultOpen ?? !0 })), ba = N2;

// aurora-evidence:1061
import { useEffect as ya, useId as ma, useRef as Za, useState as Sa } from "react";
import { jsx as Q1, jsxs as X4 } from "react/jsx-runtime";
var Pa = [
  { value: "cardio", label: "Cardio", row: 0 },
  { value: "strength", label: "Strength Conditioning", row: 0 },
  { value: "yoga", label: "Yoga", row: 1 },
  { value: "dance", label: "Dance Fitness", row: 1 },
  { value: "meditation-1", label: "Meditation", row: 2 },
  { value: "meditation-2", label: "Meditation", row: 3 }
];
function za({ title: t = "Which acitivty do you enjoy the most?", actionLabel: e = "Label", onAction: a, onDismiss: r, options: o = Pa, value: i, defaultValue: n = o[0]?.value, onValueChange: L, disabled: c = !1, name: C, step: p = 0, stepCount: l = 2, className: s, onKeyDown: d, ...h }) {
  let [f, x] = Sa(n), y = i ?? f, b = ma(), Z = Za(null);
  if (new Set(o.map((u) => u.value)).size !== o.length) throw new TypeError("Questionnaire option values must be unique.");
  if (y !== void 0 && y !== "" && !o.some((u) => u.value === y)) throw new RangeError("The selected questionnaire option must exist.");
  if (!Number.isInteger(l) || l < 1 || !Number.isInteger(p) || p < 0 || p >= l) throw new RangeError("The questionnaire step must exist.");
  ya(() => {
    let u = Z.current?.closest("form"), v = () => {
      i === void 0 && x(n);
    };
    return u?.addEventListener("reset", v), () => u?.removeEventListener("reset", v);
  }, [n, i]);
  let g = /* @__PURE__ */ new Map();
  o.forEach((u, v) => {
    let m = u.row ?? Math.floor(v / 2);
    g.has(m) || g.set(m, []), g.get(m).push(u);
  });
  let M = (u) => {
    c || u.disabled || u.value === y || (i === void 0 && x(u.value), L?.(u.value));
  };
  return /* @__PURE__ */ X4("div", { ...h, ref: Z, className: ["aurora-questionnaire-sheet", s].filter(Boolean).join(" "), "data-aurora-control": "questionnaire-sheet", "data-node-id": "1794:23330", onKeyDown: (u) => {
    d?.(u), !u.defaultPrevented && u.key === "Escape" && r && (u.preventDefault(), r());
  }, children: [
    r ? /* @__PURE__ */ Q1("button", { type: "button", className: "aurora-questionnaire-handle-action", "aria-label": "Dismiss questionnaire", onClick: r, children: /* @__PURE__ */ Q1("span", { className: "aurora-questionnaire-handle" }) }) : /* @__PURE__ */ Q1("span", { className: "aurora-questionnaire-handle", "aria-hidden": "true" }),
    /* @__PURE__ */ X4("div", { className: "aurora-questionnaire-header", children: [
      /* @__PURE__ */ Q1("h2", { id: b, children: t }),
      a ? /* @__PURE__ */ Q1("button", { type: "button", className: "aurora-questionnaire-header-action", disabled: c, onClick: a, children: e }) : /* @__PURE__ */ Q1("span", { className: "aurora-questionnaire-header-action", children: e })
    ] }),
    /* @__PURE__ */ Q1("div", { className: "aurora-questionnaire-rows", role: "group", "aria-labelledby": b, "aria-disabled": c || void 0, onKeyDown: (u) => {
      if (c || u.defaultPrevented) return;
      let v = o.filter((O) => !O.disabled);
      if (!v.length) return;
      let m = u.target.closest("button[data-choice]");
      if (!m) return;
      let S = v.findIndex((O) => O.value === m.dataset.choice), R = u.key === "Home" ? 0 : u.key === "End" ? v.length - 1 : ["ArrowRight", "ArrowDown"].includes(u.key) ? (S + 1) % v.length : ["ArrowLeft", "ArrowUp"].includes(u.key) ? (S - 1 + v.length) % v.length : -1;
      if (R < 0) return;
      u.preventDefault(), M(v[R]), [...u.currentTarget.querySelectorAll("button[data-choice]")].find((O) => O.dataset.choice === v[R].value)?.focus();
    }, children: [...g.entries()].sort(([u], [v]) => u - v).map(([u, v]) => /* @__PURE__ */ Q1("div", { className: "aurora-questionnaire-row", children: v.map((m) => /* @__PURE__ */ Q1(r1, { "data-choice": m.value, className: "aurora-questionnaire-choice", selected: y === m.value, disabled: c || m.disabled, withIcon: !1, onSelectedChange: () => M(m), children: m.label }, m.value)) }, u)) }),
    C && /* @__PURE__ */ Q1("input", { type: "hidden", name: C, value: y ?? "", disabled: c }),
    /* @__PURE__ */ Q1("div", { className: "aurora-questionnaire-progress", role: "progressbar", "aria-label": "Questionnaire progress", "aria-valuemin": 1, "aria-valuemax": l, "aria-valuenow": p + 1, "aria-valuetext": `Step ${p + 1} of ${l}`, children: Array.from({ length: l }, (u, v) => /* @__PURE__ */ Q1("span", { "data-current": v === p }, v)) })
  ] });
}
var q4 = za;

// aurora-evidence:1062
import { useId as Ta, useState as Ea } from "react";

// packages/aurora-library/src/surfaces/AuroraCard.tsx
import { forwardRef as Na } from "react";
import { jsx as Aa } from "react/jsx-runtime";
var r5 = Na(
  function({ children: e, className: a, stroke: r = "fading", surface: o = "glass", popup: i = !1, blur: n = i || o === "blur" ? "strong" : "medium", strokeColor: L = "neutral", surfaceOpacity: c = 10, strokeOpacity: C = 20, padding: p = "default", ...l }, s) {
    return /* @__PURE__ */ Aa(
      "div",
      {
        ...l,
        ref: s,
        className: ["aurora-card", "aurora-surface-card", a].filter(Boolean).join(" "),
        "data-aurora-stroke": r === "none" ? "none" : "fading",
        "data-aurora-surface": i ? "blur" : o,
        "data-aurora-popup": i || void 0,
        "data-aurora-blur": n,
        "data-aurora-stroke-color": "neutral",
        "data-aurora-surface-opacity": c,
        "data-aurora-stroke-opacity": 20,
        "data-aurora-padding": p,
        children: e
      }
    );
  }
);

// packages/aurora-library/src/controls/extended/category-assets/center.svg
var J4 = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="display:block;overflow:visible" focusable="false"><g data-node-id="10468:56299" data-instance-path="10468:56980/10468:56292/10468:56294/10468:56295/10468:56296/10468:56299" data-name="fitness plan" opacity="1"><g><g data-node-id="6393:42433" data-instance-path="10468:56980/10468:56292/10468:56294/10468:56295/10468:56296/10468:56299/6393:42433" data-name="fitness plan" transform="matrix(1 0 0 1 2 2.0815067291259766)" opacity="1"><defs><clipPath id="aurora-_R_0_-10468_56980__10468_56292__10468_56294__10468_56295__10468_56296__10468_56299__6393_42433-frame-clip"><rect width="20" height="19.836986541748047" rx="0"></rect></clipPath></defs><g clip-path="url(%23aurora-_R_0_-10468_56980__10468_56292__10468_56294__10468_56295__10468_56296__10468_56299__6393_42433-frame-clip)"><g data-node-id="6393:42434" data-instance-path="10468:56980/10468:56292/10468:56294/10468:56295/10468:56296/10468:56299/6393:42433/6393:42434" data-name="Combined Shape" transform="matrix(1 0 0 1 0 0)" opacity="1"><path d="M1.7435808181762695 1.4615999460220337C0.7823222279548645 1.4615999460220337 0 2.243922233581543 0 3.2051806449890137L0 14.814325332641602C0 15.77558422088623 0.7823222279548645 16.557907104492188 1.7435808181762695 16.557907104492188L2.255824327468872 16.557907104492188L2.255824327468872 15.409364700317383L1.7435779571533203 15.409364700317383C1.4156839847564697 15.409364700317383 1.1485986709594727 15.142218589782715 1.1485986709594727 14.814385414123535L1.1485986709594727 6.7027411460876465L15.78621768951416 6.7027411460876465L15.78621768951416 6.796734809875488L15.78621768951416 11.279273986816406L16.93482208251953 11.279273986816406L16.93482208251953 3.2052900791168213C16.933700561523438 2.242663621902466 16.152254104614258 1.4615999460220337 15.190300941467285 1.4615999460220337L12.549081802368164 1.4615999460220337L12.549081802368164 0.5743006467819214C12.549081802368164 0.25689810514450073 12.292183876037598 0 11.974781036376953 0C11.657379150390625 0 11.400481224060059 0.25689810514450073 11.400481224060059 0.5743006467819214L11.400481224060059 3.2051806449890137C11.400481224060059 3.522583246231079 11.657379150390625 3.7794811725616455 11.974781036376953 3.7794811725616455C12.292183876037598 3.7794811725616455 12.549081802368164 3.522583246231079 12.549081802368164 3.2051806449890137L12.549081802368164 2.610201358795166L15.190300941467285 2.610201358795166C15.518195152282715 2.610201358795166 15.78528118133545 2.877347946166992 15.78528118133545 3.2051806449890137L15.78528118133545 5.554080009460449L1.1486014127731323 5.554080009460449L1.1486014127731323 3.2051806449890137C1.1486014127731323 2.877286672592163 1.415748119354248 2.610201358795166 1.7435808181762695 2.610201358795166L3.236198663711548 2.610201358795166L3.236198663711548 1.4615999460220337L1.7435808181762695 1.4615999460220337ZM5.29150390625 0.5743507146835327L5.29150390625 1.5556436777114868L10.009982109069824 1.5556436777114868L10.009982109069824 2.5162580013275146L5.29150390625 2.5162580013275146L5.29150390625 3.205230951309204C5.29150390625 3.4707224369049072 5.076688289642334 3.6855380535125732 4.811196804046631 3.6855380535125732C4.545705318450928 3.6855380535125732 4.330889701843262 3.4707224369049072 4.330889701843262 3.205230951309204L4.330889701843262 0.5743507146835327C4.330889701843262 0.30885934829711914 4.545705318450928 0.09404356777667999 4.811196804046631 0.09404356777667999C5.076688289642334 0.09404356777667999 5.29150390625 0.30885934829711914 5.29150390625 0.5743507146835327ZM18.002717971801758 13.654682159423828L18.272916793823242 13.654682159423828C19.226289749145508 13.655769348144531 19.998878479003906 14.428359031677246 19.999967575073242 15.381731033325195L19.999967575073242 16.597309112548828C19.998897552490234 17.547704696655273 19.230880737304688 18.318811416625977 18.279312133789062 18.324237823486328L18.102420806884766 18.324235916137695L18.00984764099121 18.324235916137695L17.99336814880371 18.41533088684082C17.840282440185547 19.261592864990234 17.08245086669922 19.872426986694336 16.214962005615234 19.8353328704834C15.26073932647705 19.794530868530273 14.517356872558594 18.988082885742188 14.558040618896484 18.04190444946289L14.55814266204834 16.611492156982422L14.55814266204834 16.50067138671875L8.92176628112793 16.50067138671875L8.92175579071045 18.03959846496582C8.913179397583008 18.957374572753906 8.186742782592773 19.70863151550293 7.268738746643066 19.748064041137695C6.434213161468506 19.783912658691406 5.696338176727295 19.217437744140625 5.511320114135742 18.410295486450195L5.491592884063721 18.324235916137695L5.221267223358154 18.324235916137695C4.267978191375732 18.323148727416992 3.4954323768615723 17.55051612854004 3.494344472885132 16.596887588500977L3.494344472885132 15.381604194641113C3.4954323768615723 14.428315162658691 4.268065452575684 13.655769348144531 5.221693515777588 13.654682159423828L5.392083644866943 13.654682159423828L5.484548568725586 13.654682159423828L5.50111198425293 13.563713073730469C5.596619606018066 13.039177894592285 5.929170608520508 12.586222648620605 6.404092788696289 12.33845043182373C6.952787399291992 12.052190780639648 7.612520217895508 12.080400466918945 8.134777069091797 12.412453651428223C8.65583324432373 12.743744850158691 8.962514877319336 13.328537940979004 8.936271667480469 13.936999320983887L8.936168670654297 15.365625381469727L8.936168670654297 15.476446151733398L14.572545051574707 15.476446151733398L14.572555541992188 13.939319610595703C14.581131935119629 13.021543502807617 15.307568550109863 12.270286560058594 16.22557258605957 12.230854034423828C17.060096740722656 12.195006370544434 17.7979736328125 12.761480331420898 17.982990264892578 13.568621635437012L18.002717971801758 13.654682159423828ZM4.51885986328125 16.59660530090332C4.519834995269775 16.984750747680664 4.834092617034912 17.299087524414062 5.221857070922852 17.299901962280273L5.474812984466553 17.299901962280273L5.474812984466553 14.67879867553711L5.222408294677734 14.67879867553711C4.834184646606445 14.67961311340332 4.519674301147461 14.993921279907227 4.518860340118408 15.381563186645508L4.51885986328125 16.59660530090332ZM7.904807090759277 18.037046432495117C7.904807090759277 18.42530059814453 7.59006404876709 18.74004364013672 7.201809883117676 18.74004364013672C6.813555717468262 18.74004364013672 6.498813152313232 18.42530059814453 6.498813152313232 18.037046432495117L6.498813152313232 13.94167709350586C6.498813152313232 13.553422927856445 6.813555717468262 13.238680839538574 7.201809883117676 13.238680839538574C7.59006404876709 13.238680839538574 7.904807090759277 13.553422927856445 7.904807090759277 13.94167709350586L7.904807090759277 18.037046432495117ZM16.29266357421875 18.74004364013672C16.680917739868164 18.74004364013672 16.99565887451172 18.42530059814453 16.99565887451172 18.037046432495117L16.99565887451172 13.94167709350586C16.99565887451172 13.553422927856445 16.680917739868164 13.238680839538574 16.29266357421875 13.238680839538574C15.90440845489502 13.238680839538574 15.589666366577148 13.553422927856445 15.589666366577148 13.94167709350586L15.589666366577148 18.037046432495117C15.589666366577148 18.42530059814453 15.90440845489502 18.74004364013672 16.29266357421875 18.74004364013672ZM18.975866317749023 15.38211441040039L18.975866317749023 16.596881866455078C18.974891662597656 16.984851837158203 18.660531997680664 17.299087524414062 18.27231788635254 17.299901962280273L18.019912719726562 17.299901962280273L18.019912719726562 14.67879867553711L18.130733489990234 14.67879867553711L18.273101806640625 14.67879867553711C18.660743713378906 14.67961311340332 18.975051879882812 14.994123458862305 18.975866317749023 15.38211441040039Z" fill="rgba(255,255,255,1)" opacity="1" fill-rule="evenodd"></path><g></g></g></g></g></g></g></svg>';

// packages/aurora-library/src/controls/extended/category-assets/home.svg
var K4 = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="display:block;overflow:visible" focusable="false"><g data-node-id="10468:56303" data-instance-path="10468:56980/10468:56292/10468:56294/10468:56295/10468:56300/10468:56303" data-name="EnergyMeter" opacity="1"><g><g data-node-id="5055:35158" data-instance-path="10468:56980/10468:56292/10468:56294/10468:56295/10468:56300/10468:56303/5055:35158" data-name="Path Copy 8 (Stroke)" transform="matrix(1 0 0 1 5.367220401763916 1.25)" opacity="1"><path d="M5.1150312423706055 0.7246158719062805C5.343523979187012 0.2741296887397766 5.8034515380859375 0 6.3012776374816895 0L11.603961944580078 0C12.082849502563477 0 12.52966022491455 0.2556246519088745 12.766193389892578 0.6784048676490784L12.768035888671875 0.6816989183425903C13.001177787780762 1.1033836603164673 12.987285614013672 1.6202569007873535 12.723732948303223 2.0287394523620605L9.834264755249023 6.50501823425293L11.936162948608398 6.50501823425293C12.442035675048828 6.50501823425293 12.914896011352539 6.7931599617004395 13.137009620666504 7.258492946624756C13.361801147460938 7.727946758270264 13.286109924316406 8.285104751586914 12.947210311889648 8.678304672241211C12.946779251098633 8.678804397583008 12.946348190307617 8.679304122924805 12.945917129516602 8.679802894592285L2.3416759967803955 21.036745071411133L2.3398563861846924 21.03885841369629C2.0853447914123535 21.333213806152344 1.716327428817749 21.5 1.3294751644134521 21.5C1.090696096420288 21.5 0.8568904995918274 21.436033248901367 0.6521413326263428 21.3166446685791L0.6399484276771545 21.309534072875977C0.08256596326828003 20.970308303833008 -0.156134694814682 20.279388427734375 0.10711292177438736 19.66604232788086C0.10715357214212418 19.66594696044922 0.10707221180200577 19.6661376953125 0.10711292177438736 19.66604232788086L3.2273097038269043 12.392522811889648L1.3298050165176392 12.392522811889648C0.8755009770393372 12.392522811889648 0.4503900706768036 12.163863182067871 0.2042200267314911 11.774955749511719L0.20146146416664124 11.770597457885742C-0.04268953204154968 11.378946304321289 -0.0664849579334259 10.893410682678223 0.143947571516037 10.48040771484375L5.114500045776367 0.7256640791893005C5.1146769523620605 0.7253145575523376 5.114853858947754 0.7249651551246643 5.1150312423706055 0.7246158719062805ZM6.403439998626709 1.5L1.6174609661102295 10.892522811889648L5.5029730796813965 10.892522811889648L1.9371708631515503 19.204797744750977L11.54838752746582 8.00501823425293L7.080639362335205 8.00501823425293L11.279672622680664 1.5L6.403439998626709 1.5Z" fill="rgba(255,255,255,1)" opacity="1" fill-rule="evenodd"></path><g></g></g></g></g></svg>';

// packages/aurora-library/src/controls/extended/category-assets/outdoor.svg
var A2 = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="display:block;overflow:visible" focusable="false"><g data-node-id="10468:56307" data-instance-path="10468:56980/10468:56292/10468:56294/10468:56295/10468:56304/10468:56307" data-name="kebab horizontal" opacity="1"><g><g data-node-id="4410:29207" data-instance-path="10468:56980/10468:56292/10468:56294/10468:56295/10468:56304/10468:56307/4410:29207" data-name="kebab settings" transform="matrix(1 0 0 1 4 10)" opacity="1"><path d="M2.023837089538574 4C3.1415717601776123 4 4.047674179077148 3.104569435119629 4.047674179077148 2C4.047674179077148 0.8954305648803711 3.1415717601776123 0 2.023837089538574 0C0.9061026573181152 0 0 0.8954305648803711 0 2C0 3.104569435119629 0.9061026573181152 4 2.023837089538574 4ZM10.524325370788574 2C10.524325370788574 3.104569435119629 9.6182222366333 4 8.50048828125 4C7.382753849029541 4 6.476651191711426 3.104569435119629 6.476651191711426 2C6.476651191711426 0.8954305648803711 7.382753849029541 0 8.50048828125 0C9.6182222366333 0 10.524325370788574 0.8954305648803711 10.524325370788574 2ZM17 2C17 3.104569435119629 16.09389877319336 4 14.976162910461426 4C13.858428955078125 4 12.952325820922852 3.104569435119629 12.952325820922852 2C12.952325820922852 0.8954305648803711 13.858428955078125 0 14.976162910461426 0C16.09389877319336 0 17 0.8954305648803711 17 2Z" fill="rgba(255,255,255,1)" opacity="1" fill-rule="evenodd"></path><g></g></g></g></g></svg>';

// packages/aurora-library/src/controls/extended/category-assets/profile.svg
var t7 = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="display:block;overflow:visible" focusable="false"><g data-node-id="10468:56311" data-instance-path="10468:56980/10468:56292/10468:56294/10468:56295/10468:56308/10468:56311" data-name="Profile" opacity="1"><g><g data-node-id="16538:38783" data-instance-path="10468:56980/10468:56292/10468:56294/10468:56295/10468:56308/10468:56311/16538:38783" data-name="Union" transform="matrix(1 0 0 1 4.000026702880859 2)" opacity="1"><path d="M8.258115768432617 0C5.633551597595215 0 3.5040011405944824 2.18855357170105 3.5040011405944824 4.8816938400268555C3.5040011405944824 7.574833869934082 5.633551597595215 9.763387680053711 8.258115768432617 9.763387680053711C10.882681846618652 9.763387680053711 13.01223087310791 7.574833869934082 13.01223087310791 4.8816938400268555C13.01223087310791 2.18855357170105 10.882681846618652 0 8.258115768432617 0ZM5.1428446769714355 4.8816938400268555C5.1428446769714355 3.111532688140869 6.536900520324707 1.681193470954895 8.258116722106934 1.681193470954895C9.979331970214844 1.681193470954895 11.373387336730957 3.111532688140869 11.373387336730957 4.8816938400268555C11.373387336730957 6.651854515075684 9.979331970214844 8.082194328308105 8.258116722106934 8.082194328308105C6.536900520324707 8.082194328308105 5.1428446769714355 6.651854515075684 5.1428446769714355 4.8816938400268555Z" fill="rgba(255,255,255,1)" opacity="1" fill-rule="evenodd"></path><path d="M8.258145332336426 11.689453125C6.11671781539917 11.689453125 4.053964138031006 12.355344772338867 2.2861437797546387 13.606109619140625C0.8671694993972778 14.638397216796875 0 16.33849334716797 0 18.139333724975586C0 18.621530532836914 0.36833855509757996 18.979930877685547 0.8194218277931213 18.979930877685547C1.2710964679718018 18.979930877685547 1.6388436555862427 18.6008243560791 1.6388436555862427 18.139333724975586C1.6388436555862427 16.864137649536133 2.240199089050293 15.689081192016602 3.2287893295288086 14.972272872924805C4.7104878425598145 13.93112850189209 6.445353031158447 13.370646476745605 8.258145332336426 13.370646476745605C10.07094669342041 13.370646476745605 11.805720329284668 13.931130409240723 13.287306785583496 14.992237091064453C14.276012420654297 15.709033012390137 14.877447128295898 16.884159088134766 14.877447128295898 18.159439086914062C14.877447128295898 18.620929718017578 15.245193481445312 19.000036239624023 15.696867942810059 19.000036239624023C16.148542404174805 19.000036239624023 16.51628875732422 18.620929718017578 16.51628875732422 18.159439086914062C16.51628875732422 16.338422775268555 15.649452209472656 14.658740043640137 14.230536460876465 13.626493453979492C12.462611198425293 12.355478286743164 10.399590492248535 11.689453125 8.258145332336426 11.689453125Z" fill="rgba(255,255,255,1)" opacity="1" fill-rule="nonzero"></path><g></g></g></g></g></svg>';

// packages/aurora-library/src/controls/extended/category-assets/close.svg
var e7 = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="17.600000381469727" height="17.600000381469727" viewBox="0 0 17.600000381469727 17.600000381469727" style="display:block;overflow:visible" focusable="false"><g data-node-id="10468:56367" data-instance-path="10468:56980/10468:56365/10468:56367" data-name="cross" opacity="1"><g><g data-node-id="11512:25767" data-instance-path="10468:56980/10468:56365/10468:56367/11512:25767" data-name="Union" transform="matrix(1 0 0 1 3.666440010070801 3.6669921875)" opacity="1"><path d="M10.05187702178955 1.251878261566162C10.338261604309082 0.9654936790466309 10.338261604309082 0.5011730194091797 10.05187702178955 0.21478843688964844C9.76549243927002 -0.07159614562988281 9.30117130279541 -0.07159614562988281 9.014786720275879 0.21478843688964844L5.133608818054199 4.095966339111328L1.2524304389953613 0.21478843688964844C0.9660458564758301 -0.07159614562988281 0.5017251968383789 -0.07159614562988281 0.21534061431884766 0.21478843688964844C-0.0710439682006836 0.5011730194091797 -0.0710439682006836 0.9654936790466309 0.21534061431884766 1.251878261566162L4.096518516540527 5.133056640625L0.21478843688964844 9.014785766601562C-0.07159614562988281 9.301170349121094 -0.07159614562988281 9.765491485595703 0.21478843688964844 10.051876068115234C0.5011730194091797 10.338260650634766 0.9654936790466309 10.338260650634766 1.2518787384033203 10.051876068115234L5.133608818054199 6.170146465301514L9.015338897705078 10.05187702178955C9.30172348022461 10.338261604309082 9.766044616699219 10.338261604309082 10.05242919921875 10.05187702178955C10.338813781738281 9.76549243927002 10.338813781738281 9.30117130279541 10.05242919921875 9.014786720275879L6.170698642730713 5.133056640625L10.05187702178955 1.251878261566162Z" fill="rgba(255,255,255,1)" opacity="1" fill-rule="evenodd"></path><g></g></g></g></g></svg>';

// packages/aurora-library/src/controls/extended/category-assets/background.png
var a7 = "data:image/png;base64,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";

// aurora-evidence:1062
import { jsx as w1, jsxs as i5 } from "react/jsx-runtime";
var ka = [
  { title: "Fitness", items: ["At Center", "At Home", "My Cult", "Outdoor"] },
  { title: "1:1 Coaching", items: ["At Center", "At Home"] },
  { title: "Healthcare", items: ["At Center", "At Home", "My Cult"] },
  { title: "Shop", items: ["At Center", "At Home", "My Cult", "Outdoor"] }
], Ha = { "At Center": J4, "At Home": K4, "My Cult": t7, Outdoor: A2 };
function Fa({ sections: t = ka, onNavigate: e, onDismiss: a, className: r, ...o }) {
  let [i, n] = Ea(""), L = Ta(), c = t.map((C) => ({ ...C, items: C.items.filter((p) => `${C.title} ${p}`.toLowerCase().includes(i.trim().toLowerCase())) })).filter((C) => C.items.length);
  return /* @__PURE__ */ i5("div", { ...o, className: ["aurora-categories-popup", r].filter(Boolean).join(" "), "data-node-id": "10468:56980", children: [
    /* @__PURE__ */ w1("img", { className: "aurora-categories-photo", src: a7, alt: "" }),
    /* @__PURE__ */ i5("label", { className: "aurora-categories-search", children: [
      /* @__PURE__ */ w1("span", { className: "aurora-native-sr", children: "Search categories" }),
      /* @__PURE__ */ w1("input", { type: "search", placeholder: "Enter an inviting hint text here", value: i, onChange: (C) => n(C.currentTarget.value) })
    ] }),
    /* @__PURE__ */ i5("div", { className: "aurora-categories-list", "aria-label": "Categories", children: [
      c.map((C, p) => /* @__PURE__ */ i5(r5, { popup: !0, stroke: "fading", className: "aurora-category-section", "aria-labelledby": `${L}-${p}`, children: [
        /* @__PURE__ */ w1("h2", { id: `${L}-${p}`, children: C.title }),
        /* @__PURE__ */ w1("div", { className: "aurora-category-actions", children: C.items.map((l) => /* @__PURE__ */ i5("button", { type: "button", onClick: () => e?.(C.title, l), children: [
          /* @__PURE__ */ w1("span", { className: "aurora-category-glyph", children: /* @__PURE__ */ w1("img", { src: Ha[l] ?? A2, alt: "" }) }),
          /* @__PURE__ */ w1("span", { children: l })
        ] }, l)) })
      ] }, C.title)),
      !c.length && /* @__PURE__ */ w1(r5, { popup: !0, role: "status", children: "No categories found." })
    ] }),
    /* @__PURE__ */ w1("button", { type: "button", className: "aurora-categories-close", "aria-label": "Close categories", onClick: a, children: /* @__PURE__ */ w1("img", { src: e7, alt: "" }) })
  ] });
}
var o7 = Fa;

// aurora-evidence:1063
import { createElement as Ga, useEffect as Ua, useId as Va, useRef as ja, useState as _a } from "react";
import { jsx as k5, jsxs as $a } from "react/jsx-runtime";
function Ba({ kind: t, visual: e, label: a, subtext: r, selected: o, checked: i, defaultChecked: n = !1, disabled: L = !1, onChange: c, className: C, id: p, ...l }) {
  let s = Va(), d = p ?? s, [h, f] = _a(n), x = ja(null);
  Ua(() => {
    let g = x.current;
    if (!g) return;
    let M = (v) => {
      let m = v.target;
      t === "radio" && l.name && i === void 0 && o === void 0 && m?.type === "radio" && m.name === l.name && m.form === g.form && m.getRootNode() === g.getRootNode() && f(m === g && m.checked);
    }, u = () => {
      i === void 0 && o === void 0 && f(n);
    };
    return g.ownerDocument.addEventListener("click", M, !0), g.ownerDocument.addEventListener("change", M, !0), g.form?.addEventListener("reset", u), () => {
      g.ownerDocument.removeEventListener("click", M, !0), g.ownerDocument.removeEventListener("change", M, !0), g.form?.removeEventListener("reset", u);
    };
  }, [t, l.name, i, o, n]);
  let y = i ?? o ?? h, b = e({ selected: y, disabled: L, subtext: r != null }), Z = H(b, "span", { className: "aurora-native-selection-visual", "data-aurora-control": t, "data-aurora-disabled": L, "aria-hidden": !0 }, (g, M) => {
    let { id: u, ...v } = g.props, m = L ? "--aurora-native-theme-disabled" : M === 0 ? "--aurora-native-theme-text" : "--aurora-native-theme-muted";
    return Ga("span", { ...v, "data-figma-layer": u, "data-aurora-text-role": M === 0 ? "label" : "subtext", style: { display: "block", ...v.style, color: `var(${m}, ${v.style?.color || "inherit"})`, opacity: `var(--aurora-native-theme-text-opacity, ${v.style?.opacity || 1})` } }, M === 0 ? a : r);
  });
  return /* @__PURE__ */ $a("label", { className: ["aurora-native-selection", C].filter(Boolean).join(" "), htmlFor: d, children: [
    /* @__PURE__ */ k5("input", { ...l, ref: x, id: d, type: t, checked: y, disabled: L, "aria-labelledby": l["aria-labelledby"] ?? (l["aria-label"] ? void 0 : `${d}-label`), "aria-describedby": [l["aria-describedby"], r != null ? `${d}-description` : void 0].filter(Boolean).join(" ") || void 0, onChange: (g) => {
      i === void 0 && o === void 0 && f(g.currentTarget.checked), c?.(g);
    } }),
    Z,
    /* @__PURE__ */ k5("span", { id: `${d}-label`, className: "aurora-native-sr", children: a }),
    r != null && /* @__PURE__ */ k5("span", { id: `${d}-description`, className: "aurora-native-sr", children: r })
  ] });
}
function Ya(t) {
  return /* @__PURE__ */ k5(Ba, { ...t, kind: "radio", visual: g0 });
}
var Wa = Ya;

// aurora-evidence:1064
import { createElement as Xa, useEffect as qa, useId as Ja, useRef as Ka, useState as to } from "react";
import { jsx as H5, jsxs as ro } from "react/jsx-runtime";
function eo({ kind: t, visual: e, label: a, subtext: r, selected: o, checked: i, defaultChecked: n = !1, disabled: L = !1, onChange: c, className: C, id: p, ...l }) {
  let s = Ja(), d = p ?? s, [h, f] = to(n), x = Ka(null);
  qa(() => {
    let g = x.current;
    if (!g) return;
    let M = (v) => {
      let m = v.target;
      t === "radio" && l.name && i === void 0 && o === void 0 && m?.type === "radio" && m.name === l.name && m.form === g.form && m.getRootNode() === g.getRootNode() && f(m === g && m.checked);
    }, u = () => {
      i === void 0 && o === void 0 && f(n);
    };
    return g.ownerDocument.addEventListener("click", M, !0), g.ownerDocument.addEventListener("change", M, !0), g.form?.addEventListener("reset", u), () => {
      g.ownerDocument.removeEventListener("click", M, !0), g.ownerDocument.removeEventListener("change", M, !0), g.form?.removeEventListener("reset", u);
    };
  }, [t, l.name, i, o, n]);
  let y = i ?? o ?? h, b = e({ selected: y, disabled: L, subtext: r != null }), Z = H(b, "span", { className: "aurora-native-selection-visual", "data-aurora-control": t, "data-aurora-disabled": L, "aria-hidden": !0 }, (g, M) => {
    let { id: u, ...v } = g.props, m = L ? "--aurora-native-theme-disabled" : M === 0 ? "--aurora-native-theme-text" : "--aurora-native-theme-muted";
    return Xa("span", { ...v, "data-figma-layer": u, "data-aurora-text-role": M === 0 ? "label" : "subtext", style: { display: "block", ...v.style, color: `var(${m}, ${v.style?.color || "inherit"})`, opacity: `var(--aurora-native-theme-text-opacity, ${v.style?.opacity || 1})` } }, M === 0 ? a : r);
  });
  return /* @__PURE__ */ ro("label", { className: ["aurora-native-selection", C].filter(Boolean).join(" "), htmlFor: d, children: [
    /* @__PURE__ */ H5("input", { ...l, ref: x, id: d, type: t, checked: y, disabled: L, "aria-labelledby": l["aria-labelledby"] ?? (l["aria-label"] ? void 0 : `${d}-label`), "aria-describedby": [l["aria-describedby"], r != null ? `${d}-description` : void 0].filter(Boolean).join(" ") || void 0, onChange: (g) => {
      i === void 0 && o === void 0 && f(g.currentTarget.checked), c?.(g);
    } }),
    Z,
    /* @__PURE__ */ H5("span", { id: `${d}-label`, className: "aurora-native-sr", children: a }),
    r != null && /* @__PURE__ */ H5("span", { id: `${d}-description`, className: "aurora-native-sr", children: r })
  ] });
}
function ao(t) {
  return /* @__PURE__ */ H5(eo, { ...t, kind: "checkbox", visual: x0 });
}
var oo = ao;

// aurora-evidence:1065
import { createElement as Wh, useEffect as $h, useId as io, useRef as Xh, useState as no } from "react";
import { jsx as r7, jsxs as Co } from "react/jsx-runtime";
function so({ label: t, small: e = !1, active: a, checked: r, defaultChecked: o = !1, disabled: i = !1, onChange: n, className: L, id: c, ...C }) {
  let p = io(), l = c ?? p, [s, d] = no(o), h = r ?? a ?? s;
  return /* @__PURE__ */ Co("label", { className: ["aurora-native-selection", L].filter(Boolean).join(" "), htmlFor: l, children: [
    /* @__PURE__ */ r7("input", { ...C, id: l, type: "checkbox", role: "switch", checked: h, disabled: i, "aria-labelledby": C["aria-labelledby"] ?? (C["aria-label"] ? void 0 : `${l}-label`), onChange: (f) => {
      r === void 0 && a === void 0 && d(f.currentTarget.checked), n?.(f);
    } }),
    H(T0({ active: h, nonActive: !h, small: e }), "span", { className: "aurora-native-selection-visual", "data-aurora-control": "toggle", "data-aurora-active": h, "aria-hidden": !0 }),
    /* @__PURE__ */ r7("span", { id: `${l}-label`, className: "aurora-native-sr", children: t })
  ] });
}
var Lo = so;

// aurora-evidence:1066
import { createElement as i7, useCallback as po, useEffect as fo, useId as ho, useLayoutEffect as vo, useRef as I2, useState as go } from "react";

// aurora-visual:3967:28857
import { jsx as S0, jsxs as lo } from "react/jsx-runtime";
var co = new URL("./assets/41112ad8a12ef941d9e9fa94.svg", import.meta.url).href;
function Q2({ className: t, inputType: e = "Single Line", showField: a = !1, state: r = "Empty", style: o = "Filled" }) {
  let i = !a && r === "Empty" && o === "Filled" && e === "Paragraph", n = !a && r === "Empty" && o === "Line" && e === "Single Line", L = !a && o === "Line" && e === "Single Line", c = !a && r === "Typed" && o === "Line" && e === "Single Line", C = a && r === "Typed" && o === "Filled" && e === "Single Line";
  return /* @__PURE__ */ lo("div", { className: t || `content-stretch flex flex-col items-start px-[16px] relative rounded-[5px] w-[335px] ${i ? "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] h-[88px] py-[12px]" : L ? "backdrop-blur-[40px] bg-[rgba(255,255,255,0)] gap-[10px] pt-[5px]" : C ? '[word-break:break-word] backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] font-["Inter:Regular"] font-normal gap-[5px] leading-[0] not-italic py-[12px]' : "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] py-[12px]"}`, "data-figma-layer": i ? "node-9805_55303" : c ? "node-5182_39070" : n ? "node-5182_39058" : C ? "node-3967_28860" : "node-3967_28856", children: [
    /* @__PURE__ */ S0("div", { className: `flex flex-col justify-center relative shrink-0 w-full ${i ? '[word-break:break-word] font-["Inter:Regular"] font-normal leading-[0] not-italic text-[14px] text-[rgba(255,255,255,0.6)]' : c ? '[word-break:break-word] font-["Inter:Regular"] font-normal leading-[0] not-italic text-[16px] text-white' : C ? "h-[12px] text-[12px] text-[rgba(255,255,255,0.4)]" : '[word-break:break-word] font-["Inter:Regular"] font-normal leading-[0] not-italic text-[16px] text-[rgba(255,255,255,0.6)]'}`, "data-figma-layer": i ? "node-9805_55299" : c ? "node-5182_39071" : n ? "node-5182_39053" : C ? "node-3967_28852" : "node-3966_28801", children: /* @__PURE__ */ S0("p", { className: C ? "leading-[16px]" : "leading-[20px]", children: i ? "Use this for paragraph input" : c ? "User typed something" : "This input is quite long" }) }),
    L && /* @__PURE__ */ S0("div", { className: "h-0 relative shrink-0 w-full", "data-figma-layer": c ? "node-5182_39072" : "node-5182_39056", "data-name": "Line", children: /* @__PURE__ */ S0("div", { className: "absolute inset-[-1px_0_0_0]", children: /* @__PURE__ */ S0("img", { alt: "", className: "block max-w-none size-full", src: co }) }) }),
    C && /* @__PURE__ */ S0("div", { className: "flex flex-col justify-center relative shrink-0 text-[16px] text-white w-full", "data-node-id": "3967:28851", children: /* @__PURE__ */ S0("p", { className: "leading-[20px]", children: "This input is quite long" }) })
  ] });
}

// aurora-evidence:1066
import { jsx as xo, jsxs as uo } from "react/jsx-runtime";
function n7({ label: t, appearance: e = "Filled", multiline: a = !1, value: r, defaultValue: o = "", onChange: i, className: n, id: L, error: c, disabled: C, ...p }) {
  let l = ho(), s = L ?? l, [d, h] = go(o), f = I2(null), x = I2(!1), y = I2(null), b = (O) => {
    O.selectionStart !== null && O.selectionEnd !== null && (y.current = { start: O.selectionStart, end: O.selectionEnd, direction: O.selectionDirection ?? "none" });
  }, Z = po((O) => {
    let D = f.current;
    !O && D && D.ownerDocument.activeElement === D && (x.current = !0, b(D)), f.current = O;
  }, []);
  vo(() => {
    let O = f.current;
    if (!(!O || !x.current) && (x.current = !1, O.focus({ preventScroll: !0 }), y.current))
      try {
        O.setSelectionRange(y.current.start, y.current.end, y.current.direction);
      } catch {
      }
  }), fo(() => {
    let O = f.current?.form, D = () => {
      r === void 0 && h(o);
    };
    return O?.addEventListener("reset", D), () => O?.removeEventListener("reset", D);
  }, [r, o]);
  let g = r ?? d, M = String(g).length > 0, u = a, v = u ? "Filled" : e, m = !u && M && v === "Filled", S = Q2({ inputType: u ? "Paragraph" : "Single Line", showField: m, state: u ? "Empty" : M ? "Typed" : "Empty", style: v }), R = m ? 1 : 0, A = H(S, "div", { className: ["aurora-native-field", n].filter(Boolean).join(" "), "data-aurora-control": "field", "data-aurora-appearance": v, "data-aurora-disabled": C }, (O, D) => {
    if (m && D === 0) return i7("span", { ...O.props, id: void 0, style: { display: "block", ...O.props.style } }, t);
    if (D === R)
      return i7(u ? "textarea" : "input", {
        ...p,
        ref: Z,
        id: s,
        name: p.name,
        disabled: C,
        value: g,
        "aria-label": p["aria-label"] || t,
        "aria-invalid": !!c || p["aria-invalid"],
        "aria-describedby": [p["aria-describedby"], c ? `${s}-error` : void 0].filter(Boolean).join(" ") || void 0,
        placeholder: p.placeholder ?? t,
        className: [O.props.className, "aurora-native-field-input"].filter(Boolean).join(" "),
        style: { color: "var(--aurora-native-theme-field-text, inherit)", ...u ? { height: "64px", resize: "none" } : {} },
        onSelect: (w) => {
          b(w.currentTarget), p.onSelect?.(w);
        },
        onChange: (w) => {
          b(w.currentTarget), r === void 0 && h(w.currentTarget.value), i?.(w);
        }
      });
  });
  return /* @__PURE__ */ uo("div", { className: "aurora-native-field-container", children: [
    A,
    c && /* @__PURE__ */ xo("span", { id: `${s}-error`, role: "alert", children: c })
  ] });
}

// aurora-evidence:1068
import { cloneElement as pv, useEffect as Mo, useId as bo, useLayoutEffect as yo, useRef as s7, useState as mo } from "react";
import { jsx as D2, jsxs as No } from "react/jsx-runtime";
function Zo(t, e, a, r) {
  let [o, i] = mo(e), n = s7(null), L = s7(!1), c = t ?? o;
  Mo(() => {
    let s = n.current?.form, d = () => {
      t === void 0 && i(e);
    };
    return s?.addEventListener("reset", d), () => s?.removeEventListener("reset", d);
  }, [t, e]), yo(() => {
    let s = n.current;
    L.current && s && s.ownerDocument.activeElement !== s && s.focus();
  });
  let C = (s) => {
    t === void 0 && i(s), a?.(s);
  };
  return { current: c, input: n, change: (s) => {
    C(s.currentTarget.value), r?.(s);
  }, writeFromAction: (s) => {
    let d = n.current;
    if (!d) {
      C(s);
      return;
    }
    let h = d.ownerDocument.defaultView, f = d.tagName === "TEXTAREA" ? h.HTMLTextAreaElement.prototype : d.tagName === "SELECT" ? h.HTMLSelectElement.prototype : h.HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(f, "value").set.call(d, s), d.dispatchEvent(new h.Event(d.tagName === "SELECT" ? "change" : "input", { bubbles: !0 }));
  }, wasFocused: L };
}
function So({ id: t, error: e }) {
  return e && e !== !0 ? /* @__PURE__ */ D2("span", { id: t, role: "alert", className: "aurora-extended-error", children: e }) : null;
}
function Po({ kind: t, visual: e, label: a = t === "tel" ? "Phone number" : "Email", showField: r, value: o, defaultValue: i = "", onChange: n, onValueChange: L, error: c, className: C, style: p, id: l, disabled: s = !1, onFocus: d, onBlur: h, ...f }) {
  let x = bo(), y = l ?? x, b = `${y}-error`, Z = Zo(o, i, L, n), g = r ?? Z.current.length > 0, M = 0, u = z(e({ showField: g, state: "Focused" }), "div", {
    className: ["aurora-native-field", "aurora-extended-field", C].filter(Boolean).join(" "),
    style: p,
    "data-aurora-control": "field",
    "data-aurora-disabled": s
  }, (v) => {
    if (!v.props["data-aurora-text"]) return;
    let m = M++;
    return g && m === 0 ? Q(v, "label", { htmlFor: y }, a) : Q(v, "input", {
      ...f,
      ref: Z.input,
      id: y,
      type: t,
      disabled: s,
      value: Z.current,
      autoComplete: f.autoComplete ?? t,
      "aria-label": f["aria-label"] ?? a,
      "aria-invalid": !!c || f["aria-invalid"],
      "aria-describedby": [f["aria-describedby"], c && c !== !0 ? b : null].filter(Boolean).join(" ") || void 0,
      placeholder: f.placeholder ?? (t === "tel" ? "Phone No." : "e.g. johndoe@address.com"),
      className: "aurora-extended-input",
      onChange: Z.change,
      onFocus: (S) => {
        Z.wasFocused.current = !0, d?.(S);
      },
      onBlur: (S) => {
        Z.wasFocused.current = !1, h?.(S);
      }
    });
  });
  return /* @__PURE__ */ No("div", { className: "aurora-extended-field-container", children: [
    u,
    /* @__PURE__ */ D2(So, { id: b, error: c })
  ] });
}
function zo(t) {
  return /* @__PURE__ */ D2(Po, { ...t, kind: "tel", visual: j1 });
}
var L7 = zo;

// aurora-evidence:1069
import { cloneElement as Sv, useEffect as Ao, useId as Qo, useLayoutEffect as Io, useRef as C7, useState as Do } from "react";
import { jsx as O2, jsxs as Eo } from "react/jsx-runtime";
function Oo(t, e, a, r) {
  let [o, i] = Do(e), n = C7(null), L = C7(!1), c = t ?? o;
  Ao(() => {
    let s = n.current?.form, d = () => {
      t === void 0 && i(e);
    };
    return s?.addEventListener("reset", d), () => s?.removeEventListener("reset", d);
  }, [t, e]), Io(() => {
    let s = n.current;
    L.current && s && s.ownerDocument.activeElement !== s && s.focus();
  });
  let C = (s) => {
    t === void 0 && i(s), a?.(s);
  };
  return { current: c, input: n, change: (s) => {
    C(s.currentTarget.value), r?.(s);
  }, writeFromAction: (s) => {
    let d = n.current;
    if (!d) {
      C(s);
      return;
    }
    let h = d.ownerDocument.defaultView, f = d.tagName === "TEXTAREA" ? h.HTMLTextAreaElement.prototype : d.tagName === "SELECT" ? h.HTMLSelectElement.prototype : h.HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(f, "value").set.call(d, s), d.dispatchEvent(new h.Event(d.tagName === "SELECT" ? "change" : "input", { bubbles: !0 }));
  }, wasFocused: L };
}
function Ro({ id: t, error: e }) {
  return e && e !== !0 ? /* @__PURE__ */ O2("span", { id: t, role: "alert", className: "aurora-extended-error", children: e }) : null;
}
function wo({ kind: t, visual: e, label: a = t === "tel" ? "Phone number" : "Email", showField: r, value: o, defaultValue: i = "", onChange: n, onValueChange: L, error: c, className: C, style: p, id: l, disabled: s = !1, onFocus: d, onBlur: h, ...f }) {
  let x = Qo(), y = l ?? x, b = `${y}-error`, Z = Oo(o, i, L, n), g = r ?? Z.current.length > 0, M = 0, u = z(e({ showField: g, state: "Focused" }), "div", {
    className: ["aurora-native-field", "aurora-extended-field", C].filter(Boolean).join(" "),
    style: p,
    "data-aurora-control": "field",
    "data-aurora-disabled": s
  }, (v) => {
    if (!v.props["data-aurora-text"]) return;
    let m = M++;
    return g && m === 0 ? Q(v, "label", { htmlFor: y }, a) : Q(v, "input", {
      ...f,
      ref: Z.input,
      id: y,
      type: t,
      disabled: s,
      value: Z.current,
      autoComplete: f.autoComplete ?? t,
      "aria-label": f["aria-label"] ?? a,
      "aria-invalid": !!c || f["aria-invalid"],
      "aria-describedby": [f["aria-describedby"], c && c !== !0 ? b : null].filter(Boolean).join(" ") || void 0,
      placeholder: f.placeholder ?? (t === "tel" ? "Phone No." : "e.g. johndoe@address.com"),
      className: "aurora-extended-input",
      onChange: Z.change,
      onFocus: (S) => {
        Z.wasFocused.current = !0, d?.(S);
      },
      onBlur: (S) => {
        Z.wasFocused.current = !1, h?.(S);
      }
    });
  });
  return /* @__PURE__ */ Eo("div", { className: "aurora-extended-field-container", children: [
    u,
    /* @__PURE__ */ O2(Ro, { id: b, error: c })
  ] });
}
function To(t) {
  return /* @__PURE__ */ O2(wo, { ...t, kind: "email", visual: _1 });
}
var c7 = To;

// aurora-evidence:1070
import { cloneElement as Ev, useEffect as ko, useId as Ho, useLayoutEffect as Fo, useRef as d7, useState as l7 } from "react";
import { jsx as f7, jsxs as jo } from "react/jsx-runtime";
function Go(t, e, a, r) {
  let [o, i] = l7(e), n = d7(null), L = d7(!1), c = t ?? o;
  ko(() => {
    let s = n.current?.form, d = () => {
      t === void 0 && i(e);
    };
    return s?.addEventListener("reset", d), () => s?.removeEventListener("reset", d);
  }, [t, e]), Fo(() => {
    let s = n.current;
    L.current && s && s.ownerDocument.activeElement !== s && s.focus();
  });
  let C = (s) => {
    t === void 0 && i(s), a?.(s);
  };
  return { current: c, input: n, change: (s) => {
    C(s.currentTarget.value), r?.(s);
  }, writeFromAction: (s) => {
    let d = n.current;
    if (!d) {
      C(s);
      return;
    }
    let h = d.ownerDocument.defaultView, f = d.tagName === "TEXTAREA" ? h.HTMLTextAreaElement.prototype : d.tagName === "SELECT" ? h.HTMLSelectElement.prototype : h.HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(f, "value").set.call(d, s), d.dispatchEvent(new h.Event(d.tagName === "SELECT" ? "change" : "input", { bubbles: !0 }));
  }, wasFocused: L };
}
function Uo({ id: t, error: e }) {
  return e && e !== !0 ? /* @__PURE__ */ f7("span", { id: t, role: "alert", className: "aurora-extended-error", children: e }) : null;
}
function Vo({ label: t = "Search", value: e, defaultValue: a = "", onChange: r, onValueChange: o, onSearch: i, onClear: n, onBack: L, onFilter: c, error: C, className: p, style: l, id: s, disabled: d = !1, onFocus: h, onBlur: f, onKeyDown: x, ...y }) {
  let b = Ho(), Z = s ?? b, g = `${Z}-error`, M = Go(e, a, o, r), [u, v] = l7(!1), m = M.current.length > 0, S = {
    ...y,
    ref: M.input,
    id: Z,
    type: "search",
    disabled: d,
    value: M.current,
    className: "aurora-extended-input",
    "aria-label": y["aria-label"] ?? t,
    "aria-invalid": !!C || y["aria-invalid"],
    "aria-describedby": [y["aria-describedby"], C && C !== !0 ? g : null].filter(Boolean).join(" ") || void 0,
    placeholder: y.placeholder ?? "Enter an inviting hint text here",
    onChange: M.change,
    onFocus: (A) => {
      M.wasFocused.current = !0, v(!0), h?.(A);
    },
    onBlur: (A) => {
      M.wasFocused.current = !1, v(!1), f?.(A);
    },
    onKeyDown: (A) => {
      x?.(A), !A.defaultPrevented && A.key === "Enter" && !A.nativeEvent?.isComposing && i && (A.preventDefault(), i(M.current));
    }
  }, R = z(Y1({ typing: m, focus: u && !m, propDefault: !u && !m }), "div", {
    className: ["aurora-extended-search", p].filter(Boolean).join(" "),
    style: l,
    role: "search",
    "data-aurora-control": "extended-search",
    "data-aurora-disabled": d
  }, (A, O) => {
    if (O.type === "img") return k(A, { position: "absolute", inset: 0, display: "block" });
    if (A.props["data-name"] === "Back") return Q(A, "button", {
      type: "button",
      disabled: d,
      className: "aurora-native-button aurora-extended-source-action",
      "aria-label": "Back from search",
      onMouseDown: (D) => D.preventDefault(),
      onClick: () => {
        M.wasFocused.current = !1, v(!1), M.input.current?.blur(), L?.();
      }
    });
    if (A.props["data-name"] === "cross") return Q(A, "button", {
      type: "button",
      disabled: d || y.readOnly,
      className: "aurora-native-button aurora-extended-source-action",
      "aria-label": "Clear search",
      onMouseDown: (D) => D.preventDefault(),
      onClick: () => {
        M.writeFromAction(""), n?.(), M.wasFocused.current = !0, M.input.current?.focus();
      }
    });
    if (A.props["data-name"] === "Filter Icon") return Q(A, "button", {
      type: "button",
      disabled: d,
      className: "aurora-native-button aurora-extended-source-action",
      "aria-label": "Search filters",
      onClick: c,
      style: { background: "var(--aurora-native-theme-field-bg, rgba(255,255,255,0.1))" }
    });
    if (A.props["data-name"] === "Search Field") return Q(A, "div", {
      className: "aurora-extended-search-surface",
      style: { background: "var(--aurora-native-theme-field-bg, rgba(255,255,255,0.1))" }
    });
    if (O.id === "17613:43883") return Q(A, "input", {
      ...S,
      className: "aurora-extended-input aurora-extended-search-focused-input"
    });
    if (A.props["data-aurora-text"] && !(u && !m)) return Q(A, "input", S);
  });
  return /* @__PURE__ */ jo("div", { className: "aurora-extended-field-container", children: [
    R,
    /* @__PURE__ */ f7(Uo, { id: g, error: C })
  ] });
}
var p7 = Vo;

// aurora-evidence:1072
import { cloneElement as $v, useEffect as _o, useId as Bo, useLayoutEffect as Yo, useRef as h7, useState as v7 } from "react";
import { jsx as x7, jsxs as qo } from "react/jsx-runtime";
function Wo(t, e, a, r) {
  let [o, i] = v7(e), n = h7(null), L = h7(!1), c = t ?? o;
  _o(() => {
    let s = n.current?.form, d = () => {
      t === void 0 && i(e);
    };
    return s?.addEventListener("reset", d), () => s?.removeEventListener("reset", d);
  }, [t, e]), Yo(() => {
    let s = n.current;
    L.current && s && s.ownerDocument.activeElement !== s && s.focus();
  });
  let C = (s) => {
    t === void 0 && i(s), a?.(s);
  };
  return { current: c, input: n, change: (s) => {
    C(s.currentTarget.value), r?.(s);
  }, writeFromAction: (s) => {
    let d = n.current;
    if (!d) {
      C(s);
      return;
    }
    let h = d.ownerDocument.defaultView, f = d.tagName === "TEXTAREA" ? h.HTMLTextAreaElement.prototype : d.tagName === "SELECT" ? h.HTMLSelectElement.prototype : h.HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(f, "value").set.call(d, s), d.dispatchEvent(new h.Event(d.tagName === "SELECT" ? "change" : "input", { bubbles: !0 }));
  }, wasFocused: L };
}
function $o({ id: t, error: e }) {
  return e && e !== !0 ? /* @__PURE__ */ x7("span", { id: t, role: "alert", className: "aurora-extended-error", children: e }) : null;
}
function Xo({ label: t = "Password", value: e, defaultValue: a = "", onChange: r, onValueChange: o, hide: i, defaultHidden: n = !0, onVisibilityChange: L, error: c, className: C, style: p, id: l, disabled: s = !1, onFocus: d, onBlur: h, ...f }) {
  let x = Bo(), y = l ?? x, b = `${y}-error`, Z = Wo(e, a, o, r), [g, M] = v7(n), u = i ?? g, v = 0, m = z(W1({ hide: u, error: !!c }), "div", {
    className: ["aurora-native-field", "aurora-extended-field", C].filter(Boolean).join(" "),
    style: p,
    "data-aurora-control": "field",
    "data-aurora-disabled": s
  }, (S, R) => {
    if (S.props["data-name"] === "Tertiary") return Q(S, "button", {
      type: "button",
      disabled: s,
      className: "aurora-native-button aurora-extended-source-action",
      "aria-label": u ? "Show password" : "Hide password",
      "aria-controls": y,
      "aria-pressed": !u,
      onClick: () => {
        i === void 0 && M(!u), L?.(u), Z.input.current?.focus();
      }
    });
    if (!(!S.props["data-aurora-text"] || v++ !== 0))
      return Q(S, "input", {
        ...f,
        ref: Z.input,
        id: y,
        type: u ? "password" : "text",
        disabled: s,
        value: Z.current,
        autoComplete: f.autoComplete ?? "current-password",
        placeholder: f.placeholder ?? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
        className: "aurora-extended-input",
        "aria-label": f["aria-label"] ?? t,
        "aria-invalid": !!c || f["aria-invalid"],
        "aria-describedby": [f["aria-describedby"], c && c !== !0 ? b : null].filter(Boolean).join(" ") || void 0,
        onChange: Z.change,
        onFocus: (A) => {
          Z.wasFocused.current = !0, d?.(A);
        },
        onBlur: (A) => {
          Z.wasFocused.current = !1, h?.(A);
        }
      });
  });
  return /* @__PURE__ */ qo("div", { className: "aurora-extended-field-container", children: [
    m,
    /* @__PURE__ */ x7($o, { id: b, error: c })
  ] });
}
var g7 = Xo;

// aurora-evidence:1078
import { cloneElement as sg, useId as Lg, useState as Jo } from "react";
import { jsx as u7 } from "react/jsx-runtime";
var xg = Array.from({ length: 5 }, (t, e) => ({ value: `tab-${e + 1}`, label: `Tab ${e + 1}` }));
var Ko = {
  start: [[0, 8], [11.52, 8], [23.04, 8], [34.56, 6], [44.08, 3]],
  middle: [[0, 3], [6.52, 6], [16.04, 8], [27.56, 8], [39.08, 8], [50.6, 6], [60.12, 3]],
  end: [[0, 3], [6.52, 6], [16.04, 8], [27.56, 8], [39.08, 8]]
};
function tr({ pageCount: t = 5, page: e, defaultPage: a = 0, disabled: r = !1, onPageChange: o, onKeyDown: i, ...n }) {
  if (!Number.isInteger(t) || t < 1) throw new RangeError("pageCount must be a positive integer.");
  let [L, c] = Jo(a), C = e ?? L;
  if (!Number.isInteger(C) || C < 0 || C >= t) throw new RangeError("page must identify an existing page.");
  let p = C === 0 || C < 2 && C !== t - 1 ? "start" : C >= t - 2 ? "end" : t > 5 ? "middle" : "start", l = Ko[p], s = p === "end" && t < 5 ? l.slice(-t) : l.slice(0, Math.min(l.length, t)), d = s.map(([x, y]) => [x - s[0][0], y]), h = p === "start" ? 0 : p === "end" ? Math.max(0, t - 5) : Math.max(0, Math.min(C - 2, t - l.length)), f = (x) => {
    r || x === C || (e === void 0 && c(x), o?.(x));
  };
  return /* @__PURE__ */ u7("nav", { ...n, "aria-label": n["aria-label"] ?? "Pagination", "data-aurora-control": "pagination", className: ["aurora-pagination", n.className].filter(Boolean).join(" "), style: { position: "relative", width: d.at(-1)[0] + d.at(-1)[1], height: 8, ...n.style }, onKeyDown: (x) => {
    if (i?.(x), r || x.defaultPrevented) return;
    let y = x.key === "Home" ? 0 : x.key === "End" ? t - 1 : x.key === "ArrowRight" ? Math.min(t - 1, C + 1) : x.key === "ArrowLeft" ? Math.max(0, C - 1) : void 0;
    if (y === void 0) return;
    x.preventDefault(), f(y);
    let b = x.currentTarget;
    queueMicrotask(() => b.querySelector(`button[data-page="${y}"]`)?.focus());
  }, children: d.map(([x, y], b) => {
    let Z = h + b;
    return /* @__PURE__ */ u7("button", { type: "button", className: "aurora-pagination-dot", disabled: r, "data-page": Z, "aria-label": `Go to page ${Z + 1}`, "aria-current": Z === C ? "page" : void 0, tabIndex: Z === C ? 0 : -1, onClick: () => f(Z), style: { position: "absolute", left: x, top: (8 - y) / 2, width: y, height: y, borderRadius: "50%", opacity: Z === C ? 1 : "var(--aurora-native-theme-text-opacity, .23)", background: Z === C ? "var(--aurora-native-themed-text, white)" : "var(--aurora-native-theme-muted, white)" } }, Z);
  }) });
}
var M7 = tr;

// aurora-visual:3885:28575
import { jsx as R2, jsxs as rr } from "react/jsx-runtime";
var er = new URL("./assets/150d9c508100cd29d599cc65.svg", import.meta.url).href, ar = new URL("./assets/741b3fde0172a0ef192704c4.svg", import.meta.url).href, or = new URL("./assets/b0c2bed2fc5c538d0974a1bd.svg", import.meta.url).href;
function n5({ className: t, big: e = !0, disabled: a = !1, icon: r = !0 }) {
  let o = e && r && a, i = e && !r && a, n = e && !r && !a, L = !e && r && a, c = !e && r && !a, C = !e && !r && a, p = !e && !r && !a;
  return /* @__PURE__ */ rr("div", { className: t || `content-stretch flex items-center justify-center relative rounded-[5px] ${L ? "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] gap-[5px] h-[40px] px-[20px] py-[11px]" : c ? "backdrop-blur-[13.591px] bg-white gap-[5px] h-[40px] px-[20px] py-[11px]" : C ? "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] gap-[10px] h-[40px] px-[20px] py-[11px] w-[130px]" : p ? "backdrop-blur-[13.591px] bg-white gap-[10px] h-[40px] px-[20px] py-[10px]" : i ? "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] h-[50px] px-[123px] py-[16px] w-[335px]" : n ? "backdrop-blur-[13.591px] bg-white h-[50px] px-[123px] py-[15px] w-[335px]" : o ? "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] gap-[5px] h-[50px] px-[123px] py-[16px] w-[335px]" : "backdrop-blur-[13.591px] bg-white gap-[5px] h-[50px] px-[123px] py-[15px] w-[335px]"}`, "data-figma-layer": L ? "node-5182_39093" : c ? "node-795_583" : C ? "node-5182_39096" : p ? "node-183_3" : i ? "node-5182_39103" : n ? "node-175_36" : o ? "node-5182_39105" : "node-795_592", children: [
    r && /* @__PURE__ */ R2("div", { className: "relative shrink-0 size-[18px]", "data-figma-layer": L ? "node-5182_39094" : c ? "node-4414_27954" : o ? "node-5182_39106" : "node-4414_27952", "data-name": "Dice \u2022 Explore", children: /* @__PURE__ */ R2("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: L ? or : o ? ar : er }) }),
    /* @__PURE__ */ R2("p", { className: `[word-break:break-word] font-["Inter:Bold"] font-bold not-italic relative shrink-0 text-[14px] uppercase ${i ? "leading-[18px] text-[rgba(255,255,255,0.2)] text-center tracking-[0.5px] w-[283px]" : !r && !a ? "bg-clip-text leading-[16px] text-[transparent] text-center tracking-[1px] whitespace-nowrap" : a && (r || !e && !r) ? "leading-[18px] text-[rgba(255,255,255,0.2)] tracking-[0.5px] whitespace-nowrap" : "bg-clip-text leading-[16px] text-[transparent] tracking-[1px] whitespace-nowrap"}`, "data-figma-layer": L ? "node-5182_39095" : c ? "node-795_589" : C ? "node-5182_39102" : p ? "node-1_5573" : i ? "node-5182_39104" : n ? "node-1_5541" : o ? "node-5182_39107" : "node-795_593", style: n ? { backgroundImage: "linear-gradient(159.822262590119deg, rgb(255, 219, 23) 20.001%, rgb(255, 50, 120) 112.23%)" } : !a && (r || !e && !r) ? { backgroundImage: "linear-gradient(170.19963140593444deg, rgb(255, 219, 23) 79.006%, rgb(255, 50, 120) 103.85%)" } : void 0, children: "TEXT LABEL" })
  ] });
}

// aurora-visual:3885:28583
import { Fragment as w2, jsx as U, jsxs as M1 } from "react/jsx-runtime";
var ir = new URL("./assets/b603e2d6fa8147bc8e99d632.svg", import.meta.url).href, nr = new URL("./assets/bddd458849d2fd2c4b2f2843.svg", import.meta.url).href, sr = new URL("./assets/42e1f325551852f1387facc1.svg", import.meta.url).href, Lr = new URL("./assets/353a10d1ef36314b81428432.svg", import.meta.url).href, Cr = new URL("./assets/a7d7978c3d74405dff73bf06.svg", import.meta.url).href;
function s5({ className: t, big: e = !1, booked: a = !1, disabled: r = !1, icon: o = !0, inWaitlist: i = !1, negative: n = !1, waitlisted: L = !1, waitlistFull: c = !1 }) {
  let C = e && o && r && !c && !a && !i && !L && !n, p = e && o && !r && !c && a && !i && !L && !n, l = e && o && !r && !c && !a && i && !L && !n, s = e && o && !r && !c && !a && !i && L && !n, d = e && !o && r && !c && !a && !i && !L && !n, h = e && !o && !r && !c && !a && !i && !L && !n, f = e && !o && !r && !c && !a && !i && !L && n, x = e && !o && !r && c && !a && !i && !L && !n, y = !e && o && r && !c && !a && !i && !L && !n, b = !e && o && !r && !c && !a && !i && !L && !n, Z = !e && !o && r && !c && !a && !i && !L && !n, g = !e && !o && !r && !c && !a && !i && !L && !n;
  return /* @__PURE__ */ M1("div", { className: t || `backdrop-blur-[15px] content-stretch flex relative rounded-[5px] ${x ? "bg-[rgba(255,255,255,0.1)] flex-col items-center justify-center px-[15px] py-[6px] w-[110px]" : s ? "bg-[rgba(15,228,152,0.2)] flex-col items-start px-[10px] py-[7px] w-[130px]" : l ? "bg-[rgba(255,255,255,0.2)] flex-col h-[40px] items-start px-[10px] py-[7px]" : p ? "bg-[rgba(15,228,152,0.2)] gap-[5px] h-[40px] items-center pl-[10px] pr-[15px] py-[14px] w-[110px]" : !e && !c && !a && !i && !L && !n && (r || o && !r) ? "bg-[rgba(255,255,255,0.1)] h-[30px] items-center justify-center px-[15px] py-[7px]" : g ? "bg-[rgba(255,255,255,0.1)] h-[30px] items-center justify-center px-[15px] py-[10px]" : d ? "bg-[rgba(255,255,255,0.1)] gap-[10px] h-[40px] items-center justify-center pb-[10px] pt-[11px] px-[20px] w-[130px]" : f ? "bg-[rgba(255,89,66,0.1)] gap-[10px] h-[40px] items-center justify-center px-[20px] py-[10px]" : h ? "bg-[rgba(255,255,255,0.1)] gap-[10px] h-[40px] items-center justify-center px-[20px] py-[10px]" : "bg-[rgba(255,255,255,0.1)] h-[40px] items-center justify-center pb-[10px] pt-[11px] px-[20px]"}`, "data-figma-layer": x ? "node-7125_48525" : s ? "node-7125_48524" : l ? "node-7125_48527" : p ? "node-7125_48526" : y ? "node-5182_39127" : b ? "node-795_437" : Z ? "node-5182_39130" : g ? "node-183_25" : d ? "node-5182_39132" : f ? "node-20750_47475" : h ? "node-795_428" : C ? "node-5182_39139" : "node-183_7", children: [
    !o && !c && !a && !i && !L && (!n || e && !r && n) && /* @__PURE__ */ U("p", { className: `[word-break:break-word] font-["Inter:Bold"] font-bold not-italic relative tracking-[0.5px] uppercase ${Z ? "leading-[16px] shrink-0 text-[12px] text-[rgba(255,255,255,0.2)] text-center whitespace-nowrap" : g ? "leading-[16px] shrink-0 text-[12px] text-center text-white whitespace-nowrap" : d ? "flex-[1_0_0] leading-[18px] min-w-px text-[14px] text-[rgba(255,255,255,0.2)]" : f ? "leading-[18px] shrink-0 text-[#ff5942] text-[14px] text-center whitespace-nowrap" : "leading-[18px] shrink-0 text-[14px] text-center text-white whitespace-nowrap"}`, "data-figma-layer": Z ? "node-5182_39131" : g ? "node-1_5490" : d ? "node-5182_39138" : f ? "node-20750_47477" : "node-795_434", children: !e && !o && !c && !a && !i && !L && !n ? "LABEL" : e && !o && !c && !a && !i && !L && (!n || !r && n) ? "TEXT LABEL" : "" }),
    o && r && !c && !a && !i && !L && !n && /* @__PURE__ */ M1("div", { className: `content-stretch flex gap-[10px] relative shrink-0 ${y ? "items-center" : "items-start"}`, "data-figma-layer": y ? "node-14686_45979" : "node-14686_45252", "data-name": "Icon + text", children: [
      C && /* @__PURE__ */ M1(w2, { children: [
        /* @__PURE__ */ U("div", { className: "relative shrink-0 size-[18px]", "data-node-id": "5182:39140", "data-name": "Dice \u2022 Explore", children: /* @__PURE__ */ U("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: nr }) }),
        /* @__PURE__ */ U("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.2)] tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "5182:39141", children: "ACTION" })
      ] }),
      y && /* @__PURE__ */ M1(w2, { children: [
        /* @__PURE__ */ U("div", { className: "relative shrink-0 size-[10px]", "data-node-id": "5182:39128", "data-name": "Button Icons", children: /* @__PURE__ */ U("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: Lr }) }),
        /* @__PURE__ */ U("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.2)] text-center tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "5182:39129", children: "LABEL" })
      ] })
    ] }),
    e && o && !r && !c && !a && !i && !L && !n && /* @__PURE__ */ M1("div", { className: "content-stretch flex gap-[10px] items-start relative shrink-0", "data-node-id": "14686:37686", "data-name": "Icon + Text", children: [
      /* @__PURE__ */ U("div", { className: "relative shrink-0 size-[18px]", "data-node-id": "4414:27967", "data-name": "Dice \u2022 Explore", children: /* @__PURE__ */ U("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: ir }) }),
      /* @__PURE__ */ U("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "1:5480", children: "ACTION" })
    ] }),
    b && /* @__PURE__ */ M1("div", { className: "content-stretch flex gap-[10px] h-full items-center relative shrink-0", "data-node-id": "14686:45255", "data-name": "Icon +Text", children: [
      /* @__PURE__ */ U("div", { className: "relative shrink-0 size-[12px]", "data-node-id": "1096:11676", "data-name": "Button Icons", children: /* @__PURE__ */ U("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: sr }) }),
      /* @__PURE__ */ U("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "795:438", children: "LABEL" })
    ] }),
    p && /* @__PURE__ */ M1(w2, { children: [
      /* @__PURE__ */ U("div", { className: "relative shrink-0 size-[18px]", "data-node-id": "7125:48496", "data-name": "tick \u2022 check", children: /* @__PURE__ */ U("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: Cr }) }),
      /* @__PURE__ */ U("div", { className: "[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "7125:48497", children: /* @__PURE__ */ U("p", { className: "leading-[18px]", children: "booked" }) })
    ] }),
    l && /* @__PURE__ */ M1("div", { className: "content-stretch flex gap-[10px] items-center relative shrink-0", "data-node-id": "7125:48509", "data-name": "Available", children: [
      /* @__PURE__ */ M1("div", { className: "grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0", "data-node-id": "7125:48510", "data-name": "Waitlist Number", children: [
        /* @__PURE__ */ U("div", { className: "border border-[#f7c744] border-solid col-1 ml-0 mt-0 relative rounded-[21px] row-1 size-[20px]", "data-node-id": "7125:48511", "data-name": "Ring" }),
        /* @__PURE__ */ U("div", { className: "[word-break:break-word] col-1 flex flex-col font-['Inter:Bold'] font-bold h-[13.846px] justify-center ml-[6.15px] mt-[3.08px] not-italic relative row-1 text-[#f7c744] text-[14px] text-center w-[7.692px]", "data-node-id": "7125:48512", children: /* @__PURE__ */ U("p", { className: "leading-[18px]", children: "3" }) })
      ] }),
      /* @__PURE__ */ M1("div", { className: "[word-break:break-word] content-stretch flex flex-col font-['Inter:Bold'] font-bold items-start not-italic relative shrink-0 tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "7125:48513", "data-name": "Waitlist Available", children: [
        /* @__PURE__ */ U("p", { className: "leading-[16px] relative shrink-0 text-[12px] text-white", "data-node-id": "7125:48514", children: "Available" }),
        /* @__PURE__ */ U("p", { className: "leading-[10px] opacity-60 relative shrink-0 text-[10px] text-[rgba(255,255,255,0.4)]", "data-node-id": "7125:48515", children: "Join Waitlist" })
      ] })
    ] }),
    s && /* @__PURE__ */ M1("div", { className: "content-stretch flex gap-[10px] items-center relative shrink-0", "data-node-id": "7125:48517", "data-name": "Booked Waitlist", children: [
      /* @__PURE__ */ M1("div", { className: "grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0", "data-node-id": "7125:48518", "data-name": "Waitlist Number", children: [
        /* @__PURE__ */ U("div", { className: "border border-[#0fe498] border-solid col-1 ml-0 mt-0 relative rounded-[21px] row-1 size-[20px]", "data-node-id": "7125:48519", "data-name": "Ring" }),
        /* @__PURE__ */ U("div", { className: "[word-break:break-word] col-1 flex flex-col font-['Inter:Bold'] font-bold h-[13.846px] justify-center ml-[6.15px] mt-[3.08px] not-italic relative row-1 text-[#0fe498] text-[14px] text-center w-[7.692px]", "data-node-id": "7125:48520", children: /* @__PURE__ */ U("p", { className: "leading-[18px]", children: "3" }) })
      ] }),
      /* @__PURE__ */ M1("div", { className: "[word-break:break-word] content-stretch flex flex-col font-['Inter:Bold'] font-bold items-start not-italic relative shrink-0 tracking-[0.5px] uppercase", "data-node-id": "7125:48521", children: [
        /* @__PURE__ */ U("p", { className: "leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap", "data-node-id": "7125:48522", children: "Booked" }),
        /* @__PURE__ */ U("p", { className: "leading-[10px] opacity-60 relative shrink-0 text-[10px] text-[rgba(255,255,255,0.4)] w-[78px]", "data-node-id": "7125:48523", children: "Waitlisted" })
      ] })
    ] }),
    x && /* @__PURE__ */ U("div", { className: "content-stretch flex gap-[10px] items-center relative shrink-0", "data-node-id": "7125:48501", "data-name": "Siabled Waitlist", children: /* @__PURE__ */ M1("div", { className: "[word-break:break-word] content-stretch flex flex-col font-['Inter:Bold'] font-bold items-start not-italic relative shrink-0 text-white tracking-[0.5px] uppercase", "data-node-id": "7125:48502", children: [
      /* @__PURE__ */ U("p", { className: "[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[18px] line-through opacity-20 relative shrink-0 text-[12px] whitespace-nowrap", "data-node-id": "7125:48503", children: "Available" }),
      /* @__PURE__ */ U("p", { className: "leading-[10px] opacity-60 relative shrink-0 text-[10px] w-[85px]", "data-node-id": "7125:48504", children: "Waitlist full" })
    ] }) })
  ] });
}

// aurora-visual:716:3369
import { jsx as T2, jsxs as dr } from "react/jsx-runtime";
var cr = new URL("./assets/b603e2d6fa8147bc8e99d632.svg", import.meta.url).href;
function L5({ className: t, big: e = !0, disabled: a = !1, icon: r = !0 }) {
  let o = e && r && a, i = e && !r && a, n = e && !r && !a, L = !e, c = !e && r && a, C = !e && r && !a, p = !e && !r && a, l = !e && !r && !a;
  return /* @__PURE__ */ dr("div", { className: t || `backdrop-blur-[25px] bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center relative rounded-[5px] ${p ? "h-[30px] opacity-20 px-[15px] py-[7px]" : l ? "h-[30px] px-[15px] py-[7px]" : c ? "gap-[5px] h-[30px] opacity-20 px-[15px] py-[7px]" : C ? "gap-[5px] h-[30px] px-[15px] py-[7px]" : i ? "h-[40px] opacity-20 pb-[10px] pt-[11px] px-[20px]" : n ? "h-[40px] pb-[10px] pt-[11px] px-[20px]" : o ? "gap-[5px] h-[40px] opacity-20 pb-[10px] pt-[11px] px-[20px]" : "gap-[5px] h-[40px] pb-[10px] pt-[11px] px-[20px]"}`, "data-figma-layer": p ? "node-5182_39156" : l ? "node-3001_27725" : c ? "node-5182_39158" : C ? "node-3001_27715" : i ? "node-5182_39161" : n ? "node-3001_27728" : o ? "node-5182_39163" : "node-3001_27716", children: [
    r && /* @__PURE__ */ T2("div", { className: "relative shrink-0 size-[18px]", "data-figma-layer": c ? "node-5182_39159" : C ? "node-4414_32518" : o ? "node-5182_39164" : "node-4414_32516", "data-name": "Dice \u2022 Explore", children: /* @__PURE__ */ T2("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: cr }) }),
    /* @__PURE__ */ T2("p", { className: `[word-break:break-word] font-["Inter:Bold"] font-bold not-italic relative shrink-0 text-white tracking-[0.5px] uppercase whitespace-nowrap ${L ? "leading-[16px] text-[12px] text-center" : "leading-[18px] text-[14px]"}`, "data-figma-layer": p ? "node-5182_39157" : l ? "node-3001_27727" : c ? "node-5182_39160" : C ? "node-3001_27703" : i ? "node-5182_39162" : n ? "node-3001_27730" : o ? "node-5182_39165" : "node-3001_27711", children: L ? "action LABEL" : "Action label" })
  ] });
}

// aurora-evidence:1080
function lr({ big: t = !0, icon: e = !0, disabled: a = !1, children: r, label: o, type: i = "button", ...n }) {
  return H(L5({ big: t, icon: e, disabled: a }), "button", { ...n, type: i, disabled: a, "data-aurora-control": "tertiary", className: ["aurora-native-button", n.className].filter(Boolean).join(" ") }, b1(r ?? o));
}
var pr = lr;

// aurora-evidence:1081
function fr({ big: t = !0, icon: e = !0, disabled: a = !1, children: r, label: o, type: i = "button", ...n }) {
  return H(n5({ big: t, icon: e, disabled: a }), "button", { ...n, type: i, disabled: a, "data-aurora-control": "primary", className: ["aurora-native-button", n.className].filter(Boolean).join(" ") }, b1(r ?? o));
}
var hr = fr;

// aurora-evidence:1082
function vr({ big: t = !1, icon: e = !0, disabled: a = !1, booked: r = !1, inWaitlist: o = !1, negative: i = !1, waitlisted: n = !1, waitlistFull: L = !1, children: c, label: C, type: p = "button", ...l }) {
  return H(s5({ big: t, icon: e, disabled: a, booked: r, inWaitlist: o, negative: i, waitlisted: n, waitlistFull: L }), "button", { ...l, type: p, disabled: a, "data-aurora-control": "secondary", "data-aurora-state": L ? "full" : i ? "negative" : r ? "booked" : o ? "waitlist" : n ? "waitlisted" : "default", className: ["aurora-native-button", l.className].filter(Boolean).join(" ") }, b1(c ?? C));
}
var gr = vr;

// aurora-evidence:1083
import { Children as b7, cloneElement as E2, isValidElement as y7, useState as Bg } from "react";
import { jsx as yr } from "react/jsx-runtime";
function xr(t, e) {
  let a = !1;
  function r(o) {
    if (!y7(o)) return o;
    let i = o;
    return !a && i.props["data-aurora-text"] ? (a = !0, E2(i, {}, e)) : E2(i, {}, b7.map(i.props.children, r));
  }
  return r(t);
}
function ur(t, e, a, r, o, i) {
  let n = r || e?.disabled === !0, L = e?.label === void 0 ? X(t).trim() : X(e.label).trim();
  return Q(t, "button", {
    type: "button",
    disabled: n,
    "data-aurora-action": a,
    className: "aurora-extended-action",
    "aria-label": e?.ariaLabel ?? (L && L !== "TEXT LABEL" ? L : i),
    onClick: (c) => {
      n || (e?.onClick?.(c), c.defaultPrevented || o?.(a, c));
    }
  }, e?.label === void 0 ? t.props.children : xr(t, e.label).props.children);
}
function m7(t) {
  return E2(t, {}, b7.map(t.props.children, (e) => {
    if (!y7(e)) return e;
    let a = e;
    return a.type === "img" ? k(a) : m7(a);
  }));
}
function Mr({ Visual: t, visualProps: e = {}, match: a, label: r, actions: o = [], disabled: i = !1, onAction: n, ...L }) {
  return z(t(e), "div", {
    ...L,
    role: L.role ?? "group",
    "aria-label": L["aria-label"] ?? r,
    "data-aurora-control": "action-group",
    "data-aurora-disabled": i,
    className: ["aurora-extended-actions", L.className].filter(Boolean).join(" ")
  }, (c, C) => {
    let p = a(c, C.id), l = /chevron|Dice.*Explore/i.test(c.props["data-name"] ?? "") ? m7(c) : c;
    return p === void 0 ? l === c ? void 0 : l : ur(l, o[p], p, i, n, `Action ${p + 1}`);
  });
}
function br({ big: t = !0, ...e }) {
  return /* @__PURE__ */ yr(Mr, { ...e, Visual: e0, visualProps: { prop50PxHeight: t }, label: "Actions", match: (a) => a.props["data-name"] === "Secondary" ? 0 : a.props["data-name"] === "Primary" ? 1 : void 0 });
}
var Z7 = br;

// aurora-evidence:1084
import { Children as nx, cloneElement as sx, isValidElement as Lx, useState as Cx } from "react";
import { jsx as bx } from "react/jsx-runtime";
function mr({ size: t = 30, kind: e = "primary", disabled: a = !1, type: r = "button", ...o }) {
  return z(a0({ size30: t === 30, size40: t === 40, primary: !a && e === "primary", secondary: !a && e === "secondary", disable: a }), "button", {
    ...o,
    type: r,
    disabled: a,
    "aria-label": o["aria-label"] ?? "Action",
    className: ["aurora-extended-action aurora-extended-circular", o.className].filter(Boolean).join(" "),
    "data-aurora-control": "circular-button"
  });
}
var S7 = mr;

// aurora-evidence:1086
import { Children as Zr, cloneElement as P7, isValidElement as Sr, useState as Zx } from "react";
import { jsx as Tx } from "react/jsx-runtime";
function z7(t) {
  return P7(t, {}, Zr.map(t.props.children, (e) => {
    if (!Sr(e)) return e;
    let a = e;
    return a.type === "img" ? k(a) : z7(a);
  }));
}
function Pr({ titleText: t = "Name of the Expert", detail: e = "Attribute", swapText: a = !1, disabled: r = !1, type: o = "button", ...i }) {
  let n = 0;
  return z(o0({ swapText: a }), "button", {
    ...i,
    disabled: r,
    type: o,
    "data-aurora-control": "thumbnail-action",
    className: ["aurora-extended-action", i.className].filter(Boolean).join(" ")
  }, (L) => {
    if (L.props["data-aurora-text"]) return P7(L, {}, n++ === 0 !== a ? t : e);
    if (/chevron/i.test(L.props["data-name"] ?? "")) return z7(L);
  });
}
var N7 = Pr;

// aurora-evidence:1087
import { Children as A7, cloneElement as F5, isValidElement as Q7, useState as zr } from "react";
import { jsx as Ir } from "react/jsx-runtime";
function Nr(t, e) {
  let a = !1;
  function r(o) {
    if (!Q7(o)) return o;
    let i = o;
    return !a && i.props["data-aurora-text"] ? (a = !0, F5(i, {}, e)) : F5(i, {}, A7.map(i.props.children, r));
  }
  return r(t);
}
function Ar(t, e, a, r, o, i) {
  let n = r || e?.disabled === !0, L = e?.label === void 0 ? X(t).trim() : X(e.label).trim();
  return Q(t, "button", {
    type: "button",
    disabled: n,
    "data-aurora-action": a,
    className: "aurora-extended-action",
    "aria-label": e?.ariaLabel ?? (L && L !== "TEXT LABEL" ? L : i),
    onClick: (c) => {
      n || (e?.onClick?.(c), c.defaultPrevented || o?.(a, c));
    }
  }, e?.label === void 0 ? t.props.children : Nr(t, e.label).props.children);
}
function I7(t) {
  return F5(t, {}, A7.map(t.props.children, (e) => {
    if (!Q7(e)) return e;
    let a = e;
    return a.type === "img" ? k(a) : I7(a);
  }));
}
function Qr({ mode: t = "cta-info", information: e, checkboxLabel: a = "I consent to being contacted via whatsapp and call by my coach for the duration of this membership", checked: r, defaultChecked: o = !1, onCheckedChange: i, actions: n = [], disabled: L = !1, onAction: c, ...C }) {
  let [p, l] = zr(o), s = r ?? p;
  return z(r0({ ctaInfo: t === "cta-info", multiCtaInfo: t === "multi-cta-info", ctaSecondaryCta: t === "cta-secondary", checkbox: t === "checkbox" }), "div", {
    ...C,
    role: "group",
    "aria-label": C["aria-label"] ?? "Purchase actions",
    "data-aurora-control": "floating-actions",
    "data-aurora-disabled": L
  }, (d, h) => {
    if (d.props["data-name"] === "Checkbox") return /* @__PURE__ */ Ir(q, { label: a, checked: s, disabled: L, className: "aurora-extended-consent", onChange: (x) => {
      r === void 0 && l(x.currentTarget.checked), i?.(x.currentTarget.checked);
    } });
    if (e !== void 0 && d.props["data-aurora-text"] && /node-(?:1_5562|7062_47636)/.test(h.id)) return F5(d, {}, e);
    if (/chevron/i.test(d.props["data-name"] ?? "")) return I7(d);
    let f;
    return d.props["data-name"] === "Primary" ? f = 0 : d.props["data-name"] === "Tertiary" ? f = 1 : ["7062:47638", "7062:47639", "7062:47640", "7062:47641"].includes(h.id) && (f = ["7062:47638", "7062:47639", "7062:47640", "7062:47641"].indexOf(h.id)), f === void 0 ? void 0 : Ar(d, n[f], f, L, c, f === 3 ? "More times" : `Action ${f + 1}`);
  });
}
var D7 = Qr;

// aurora-evidence:1088
import { cloneElement as G5, useId as Tr, useRef as Er, useState as O7 } from "react";

// aurora-visual:29020:4183
import { jsx as P0, jsxs as wr } from "react/jsx-runtime";
var Dr = new URL("./assets/af3fc19afc8ec8486206a07b.svg", import.meta.url).href, Or = new URL("./assets/ff6682d4783a0ab911b905d0.svg", import.meta.url).href;
function Rr({ className: t, disable: e = "No", primary: a = "Yes", secondary: r = "No", size30: o = "No", size40: i = "Yes" }) {
  return /* @__PURE__ */ P0("div", { className: t || "relative size-[40px]", "data-node-id": "16484:38833", children: /* @__PURE__ */ P0("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: Dr }) });
}
function k2({ className: t, property1: e = "Default" }) {
  let a = e === "Variant2";
  return /* @__PURE__ */ wr("div", { className: t || "h-[50px] relative w-[335px]", "data-figma-layer": a ? "node-29020_4184" : "node-29020_4182", children: [
    /* @__PURE__ */ P0("div", { className: `-translate-x-1/2 absolute backdrop-blur-[13.591px] bottom-0 content-stretch flex gap-[5px] items-center justify-center left-1/2 px-[123px] py-[15px] rounded-[65px] top-0 w-[335px] ${a ? "bg-[rgba(255,255,255,0.15)] border-0 border-[#ff3278] border-solid" : "bg-[rgba(255,255,255,0.1)]"}`, "data-figma-layer": a ? "node-29020_4185" : "node-29020_1893", "data-name": "Primary", children: /* @__PURE__ */ P0("p", { className: `[word-break:break-word] font-["Inter:Bold"] font-bold leading-[16px] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] uppercase whitespace-nowrap ${a ? "" : "opacity-60"}`, "data-figma-layer": a ? "node-29020_4187" : "node-29020_1895", children: "TEXT LABEL" }) }),
    e === "Default" && /* @__PURE__ */ P0(Rr, { className: "absolute inset-[10%_86.27%_10%_1.79%]" }),
    a && /* @__PURE__ */ P0("div", { className: "absolute inset-[10%_2.09%_10%_85.97%]", "data-node-id": "29023:4195", "data-name": "Circular Action button", children: /* @__PURE__ */ P0("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: Or }) })
  ] });
}

// aurora-evidence:1088
import { jsx as Hr } from "react/jsx-runtime";
function kr({ label: t = "Swipe to continue", completedLabel: e, completed: a, defaultCompleted: r = !1, threshold: o = 0.8, onComplete: i, onProgressChange: n, onCancel: L, disabled: c = !1, onClick: C, onKeyDown: p, onPointerDown: l, onPointerMove: s, onPointerUp: d, onPointerCancel: h, children: f, ...x }) {
  if (!(o > 0 && o <= 1)) throw new RangeError("Swipe threshold must be greater than zero and at most one.");
  let y = Tr(), [b, Z] = O7(r), [g, M] = O7(0), u = Er(void 0), v = a ?? b, m = c || v, S = (P) => {
    let N = u.current;
    if (u.current = void 0, N)
      try {
        P.releasePointerCapture?.(N.id);
      } catch {
      }
  }, R = (P) => {
    M(P), n?.(P);
  }, A = (P) => {
    S(P), R(0), L?.();
  }, O = (P) => {
    if (!m) {
      if (i?.(P), P.defaultPrevented) {
        R(0);
        return;
      }
      a === void 0 && Z(!0), R(a === void 0 ? 1 : 0);
    }
  }, D = (P) => {
    let N = u.current;
    if (!N || N.id !== P.pointerId || c) return;
    let T = P.clientX - N.x, o1 = P.clientY - N.y;
    if (Math.abs(o1) > Math.abs(T) && Math.abs(o1) > 8) {
      A(P.currentTarget);
      return;
    }
    return Math.max(0, Math.min(1, T / N.travel));
  }, w = !1, C1 = z(k2({ property1: v ? "Variant2" : "Default" }), "button", {
    ...x,
    type: "button",
    disabled: c,
    "aria-disabled": m || void 0,
    "aria-label": x["aria-label"] ?? (typeof t == "string" ? t : "Swipe to continue"),
    "aria-describedby": [x["aria-describedby"], y].filter(Boolean).join(" "),
    "data-aurora-control": "swipe",
    "data-completed": v,
    "data-progress": v ? 1 : g,
    className: ["aurora-swipe", x.className].filter(Boolean).join(" "),
    onClick: (P) => {
      C?.(P), !P.defaultPrevented && P.detail === 0 && O(P);
    },
    onKeyDown: (P) => {
      p?.(P), !(P.defaultPrevented || c) && (P.key === "Escape" && u.current && (P.preventDefault(), A(P.currentTarget)), (P.key === "Enter" || P.key === " ") && !v && (O(P), P.preventDefault()));
    },
    onPointerDown: (P) => {
      if (l?.(P), P.defaultPrevented || m || P.button !== 0 || u.current) return;
      let N = P.currentTarget.getBoundingClientRect().width || 335;
      u.current = { id: P.pointerId, x: P.clientX, y: P.clientY, travel: N * 0.8418 };
      try {
        P.currentTarget.setPointerCapture?.(P.pointerId);
      } catch {
      }
      P.currentTarget.focus(), R(0);
    },
    onPointerMove: (P) => {
      if (s?.(P), P.defaultPrevented) return;
      let N = D(P);
      N !== void 0 && (P.preventDefault(), R(N));
    },
    onPointerUp: (P) => {
      if (d?.(P), !u.current || u.current.id !== P.pointerId) return;
      if (P.defaultPrevented || c) {
        A(P.currentTarget);
        return;
      }
      let N = D(P);
      N !== void 0 && (S(P.currentTarget), N >= o ? O(P) : (R(0), L?.()));
    },
    onPointerCancel: (P) => {
      h?.(P), u.current?.id === P.pointerId && A(P.currentTarget);
    },
    onLostPointerCapture: (P) => {
      u.current?.id === P.pointerId && A(P.currentTarget);
    }
  }, (P, N) => {
    if (!w && P.props["data-aurora-text"])
      return w = !0, G5(P, {}, v ? e ?? t : t);
    if (P.props["data-name"] === "Primary") return G5(P, { className: `${P.props.className} aurora-swipe-track` });
    if (!v && N.id === "16484:38833") return G5(P, { style: { ...P.props.style, transform: `translateX(${g * 282.003}px)` } });
  });
  return G5(C1, {}, C1.props.children, /* @__PURE__ */ Hr("span", { id: y, className: "aurora-native-sr", children: v ? "Completed." : "Drag right to confirm, or press Enter or Space." }));
}
var R7 = kr;

// aurora-evidence:1089
import { useState as Fr } from "react";
function Gr({ selected: t, defaultSelected: e = !1, withIcon: a = !1, onSelectedChange: r, onClick: o, children: i, disabled: n = !1, type: L = "button", ...c }) {
  let [C, p] = Fr(e), l = t ?? C;
  return H(E0({ selected: l, withIcon: a }), "button", { ...c, type: L, disabled: n, "data-aurora-control": "chip", "aria-pressed": l, className: ["aurora-native-button", c.className].filter(Boolean).join(" "), onClick: (s) => {
    o?.(s), !s.defaultPrevented && !n && (t === void 0 && p(!0), r?.(!0));
  } }, b1(i));
}
var Ur = Gr;

// aurora-evidence:1090
import { useState as Vr } from "react";
function jr({ selected: t, defaultSelected: e = !1, onSelectedChange: a, onClick: r, children: o, disabled: i = !1, type: n = "button", withIcon: L, ...c }) {
  let [C, p] = Vr(e), l = t ?? C;
  return H(k0({ selected: l }), "button", { ...c, type: n, disabled: i, "data-aurora-control": "chip", "aria-pressed": l, className: ["aurora-native-button", c.className].filter(Boolean).join(" "), onClick: (s) => {
    r?.(s), !s.defaultPrevented && !i && (t === void 0 && p(!l), a?.(!l));
  } }, b1(o));
}
var _r = jr;

// aurora-evidence:1091
import { cloneElement as Br, useId as bu, useState as Yr } from "react";
import { jsx as Xr } from "react/jsx-runtime";
function Wr({ Visual: t, toggle: e = !1, label: a, children: r, selected: o, defaultSelected: i = !0, onSelectedChange: n, disabled: L = !1, onClick: c, ...C }) {
  let [p, l] = Yr(i), s = o ?? p, d = !1;
  return z(t({ selected: s }), "button", {
    ...C,
    type: "button",
    role: C.role ?? "tab",
    disabled: L,
    "aria-selected": s,
    "data-selected": s,
    "data-aurora-control": "tab",
    className: ["aurora-extended-tab", C.className].filter(Boolean).join(" "),
    onClick: (h) => {
      if (c?.(h), L || h.defaultPrevented) return;
      let f = e ? !s : !0;
      o === void 0 && l(f), f !== s && n?.(f);
    }
  }, (h, f) => {
    if (!d && h.props["data-aurora-text"] && (r !== void 0 || a !== void 0))
      return d = !0, Br(h, {}, r ?? a);
    if (f.type === "img") return k(h);
  });
}
function $r(t) {
  return /* @__PURE__ */ Xr(Wr, { ...t, Visual: N1 });
}
var Iu = Array.from({ length: 5 }, (t, e) => ({ value: `tab-${e + 1}`, label: `Tab ${e + 1}` }));
var w7 = $r;

// aurora-evidence:1092
import { cloneElement as qr, useId as wu, useState as Jr } from "react";
import { jsx as ei } from "react/jsx-runtime";
function Kr({ Visual: t, toggle: e = !1, label: a, children: r, selected: o, defaultSelected: i = !0, onSelectedChange: n, disabled: L = !1, onClick: c, ...C }) {
  let [p, l] = Jr(i), s = o ?? p, d = !1;
  return z(t({ selected: s }), "button", {
    ...C,
    type: "button",
    role: C.role ?? "tab",
    disabled: L,
    "aria-selected": s,
    "data-selected": s,
    "data-aurora-control": "tab",
    className: ["aurora-extended-tab", C.className].filter(Boolean).join(" "),
    onClick: (h) => {
      if (c?.(h), L || h.defaultPrevented) return;
      let f = e ? !s : !0;
      o === void 0 && l(f), f !== s && n?.(f);
    }
  }, (h, f) => {
    if (!d && h.props["data-aurora-text"] && (r !== void 0 || a !== void 0))
      return d = !0, qr(h, {}, r ?? a);
    if (f.type === "img") return k(h);
  });
}
function ti(t) {
  return /* @__PURE__ */ ei(Kr, { ...t, Visual: A1, toggle: !0 });
}
var _u = Array.from({ length: 5 }, (t, e) => ({ value: `tab-${e + 1}`, label: `Tab ${e + 1}` }));
var T7 = ti;

// aurora-evidence:1093
import { useId as Li } from "react";

// aurora-visual:7125:48064
import { jsx as U5, jsxs as ri } from "react/jsx-runtime";
var ai = new URL("./assets/c8aeec50af95ac5cac4e5424.svg", import.meta.url).href, oi = new URL("./assets/bb38d52ab9facfe25efb9df4.svg", import.meta.url).href;
function H2({ className: t, big: e = !0, disabled: a = !1, roundedCorner: r = !1 }) {
  let o = e && a && !r, i = e && a && r, n = e && !a && r, L = !e, c = !e && a, C = !e && a && !r, p = !e && a && r, l = !e && !a, s = !e && !a && !r, d = !e && !a && r;
  return /* @__PURE__ */ ri("div", { className: t || `backdrop-blur-[15px] content-stretch flex items-center relative ${e && r ? "border border-[rgba(255,255,255,0.15)] border-solid gap-[5px] h-[40px] justify-end pb-[10px] pl-[25px] pr-[15px] pt-[11px] rounded-[100px]" : !e && r ? "border border-[rgba(255,255,255,0.15)] border-solid gap-[10px] h-[30px] justify-center px-[15px] py-[7px] rounded-[100px]" : !e && !r ? "bg-[rgba(255,255,255,0.1)] gap-[10px] h-[30px] justify-center px-[15px] py-[7px] rounded-[5px]" : o ? "bg-[rgba(255,255,255,0.1)] gap-[5px] h-[40px] justify-center pb-[10px] pt-[11px] px-[25px] rounded-[5px]" : "bg-[rgba(255,255,255,0.1)] gap-[5px] h-[40px] justify-end pb-[10px] pl-[25px] pr-[15px] pt-[11px] rounded-[5px]"}`, "data-figma-layer": i ? "node-14642_36670" : n ? "node-14642_36643" : p ? "node-14642_36678" : C ? "node-7125_48092" : d ? "node-14642_36675" : s ? "node-7125_48089" : o ? "node-7125_48068" : "node-7125_48065", children: [
    /* @__PURE__ */ U5("p", { className: `[word-break:break-word] font-["Inter:Regular"] font-normal not-italic relative shrink-0 whitespace-nowrap ${i ? "leading-[20px] text-[14px] text-[rgba(255,255,255,0.2)]" : c ? "leading-[16px] text-[12px] text-[rgba(255,255,255,0.2)] text-center" : l ? "leading-[16px] text-[12px] text-[rgba(255,255,255,0.6)] text-center" : o ? "leading-[22px] text-[14px] text-[rgba(255,255,255,0.2)]" : "leading-[20px] text-[14px] text-[rgba(255,255,255,0.6)]"}`, "data-figma-layer": i ? "node-14642_36671" : n ? "node-14642_36644" : p ? "node-14642_36679" : C ? "node-7125_48094" : d ? "node-14642_36676" : s ? "node-7125_48091" : o ? "node-7125_48070" : "node-7125_48067", children: c ? "LABEL" : o ? "ACTION" : "Select Option" }),
    /* @__PURE__ */ U5("div", { className: `relative shrink-0 ${c ? "opacity-20 size-[14px]" : l ? "size-[14px]" : o ? "opacity-20 size-[18px]" : "size-[18px]"}`, "data-figma-layer": i ? "node-14642_36672" : n ? "node-14642_36645" : p ? "node-14642_36680" : C ? "node-7125_48108" : d ? "node-14642_36677" : s ? "node-7125_48090" : o ? "node-7125_48069" : "node-7125_48066", "data-name": "chevron down", children: /* @__PURE__ */ U5("div", { className: `absolute ${L ? "bottom-[-14.29%] left-[28.57%] right-[-42.86%] top-1/2" : "inset-[38.89%_-11.11%_11.11%_22.22%]"}`, "data-figma-layer": i ? "node-I14642_36672-4410_29344" : n ? "node-I14642_36645-4410_29344" : p ? "node-I14642_36680-4410_29344" : C ? "node-I7125_48108-4410_29344" : d ? "node-I14642_36677-4410_29344" : s ? "node-I7125_48090-4410_29344" : o ? "node-I7125_48069-4410_29344" : "node-I7125_48066-4410_29344", "data-name": "chevron-down", children: /* @__PURE__ */ U5("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: L ? oi : ai }) }) })
  ] });
}

// packages/aurora-library/src/controls/extended/Fields.tsx
import { cloneElement as qu, useEffect as ii, useId as Ju, useLayoutEffect as ni, useRef as E7, useState as si } from "react";
import { jsx as LM, jsxs as CM } from "react/jsx-runtime";
function T1(t, e, a, r) {
  let [o, i] = si(e), n = E7(null), L = E7(!1), c = t ?? o;
  ii(() => {
    let s = n.current?.form, d = () => {
      t === void 0 && i(e);
    };
    return s?.addEventListener("reset", d), () => s?.removeEventListener("reset", d);
  }, [t, e]), ni(() => {
    let s = n.current;
    L.current && s && s.ownerDocument.activeElement !== s && s.focus();
  });
  let C = (s) => {
    t === void 0 && i(s), a?.(s);
  };
  return { current: c, input: n, change: (s) => {
    C(s.currentTarget.value), r?.(s);
  }, writeFromAction: (s) => {
    let d = n.current;
    if (!d) {
      C(s);
      return;
    }
    let h = d.ownerDocument.defaultView, f = d.tagName === "TEXTAREA" ? h.HTMLTextAreaElement.prototype : d.tagName === "SELECT" ? h.HTMLSelectElement.prototype : h.HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(f, "value").set.call(d, s), d.dispatchEvent(new h.Event(d.tagName === "SELECT" ? "change" : "input", { bubbles: !0 }));
  }, wasFocused: L };
}

// aurora-evidence:1093
import { jsx as F2, jsxs as G2 } from "react/jsx-runtime";
function Ci({ label: t = "Select an option", options: e, placeholder: a = "Select Option", allowEmpty: r = !0, value: o, defaultValue: i = "", onChange: n, onValueChange: L, big: c = !0, roundedCorner: C = !1, disabled: p = !1, error: l, className: s, style: d, id: h, onFocus: f, onBlur: x, ...y }) {
  let b = Li(), Z = h ?? b, g = `${Z}-error`, M = T1(o, i, L, n), u = e.find((m) => m.value === M.current), v = z(H2({ big: c, roundedCorner: C, disabled: p }), "div", {
    className: "aurora-extended-dropdown-visual",
    "aria-hidden": !0,
    "data-aurora-control": "extended-dropdown",
    "data-aurora-disabled": p
  }, (m, S) => {
    if (S.type === "img") return k(m, { position: "absolute", inset: 0, display: "block" });
    if (m.props["data-aurora-text"]) return Q(m, "span", {}, u?.label ?? a);
  });
  return /* @__PURE__ */ G2("span", { className: ["aurora-extended-dropdown", s].filter(Boolean).join(" "), style: d, children: [
    /* @__PURE__ */ G2("span", { className: "aurora-extended-dropdown-control", children: [
      v,
      /* @__PURE__ */ G2(
        "select",
        {
          ...y,
          ref: M.input,
          id: Z,
          value: M.current,
          disabled: p,
          className: "aurora-extended-native-select",
          "aria-label": y["aria-label"] ?? t,
          "aria-invalid": !!l || y["aria-invalid"],
          "aria-describedby": [y["aria-describedby"], l && l !== !0 ? g : null].filter(Boolean).join(" ") || void 0,
          onChange: M.change,
          onFocus: (m) => {
            M.wasFocused.current = !0, f?.(m);
          },
          onBlur: (m) => {
            M.wasFocused.current = !1, x?.(m);
          },
          children: [
            /* @__PURE__ */ F2("option", { value: "", disabled: !r, children: a }),
            e.map((m) => /* @__PURE__ */ F2("option", { value: m.value, disabled: m.disabled, children: m.label }, m.value))
          ]
        }
      )
    ] }),
    l && l !== !0 && /* @__PURE__ */ F2("span", { id: g, role: "alert", className: "aurora-extended-error", children: l })
  ] });
}
var k7 = Ci;

// aurora-evidence:1102
import { cloneElement as ci, useEffect as di, useId as li, useLayoutEffect as pi, useRef as H7, useState as F7 } from "react";
import { jsx as U7, jsxs as gi } from "react/jsx-runtime";
function fi(t, e, a, r) {
  let [o, i] = F7(e), n = H7(null), L = H7(!1), c = t ?? o;
  di(() => {
    let s = n.current?.form, d = () => {
      t === void 0 && i(e);
    };
    return s?.addEventListener("reset", d), () => s?.removeEventListener("reset", d);
  }, [t, e]), pi(() => {
    let s = n.current;
    L.current && s && s.ownerDocument.activeElement !== s && s.focus();
  });
  let C = (s) => {
    t === void 0 && i(s), a?.(s);
  };
  return { current: c, input: n, change: (s) => {
    C(s.currentTarget.value), r?.(s);
  }, writeFromAction: (s) => {
    let d = n.current;
    if (!d) {
      C(s);
      return;
    }
    let h = d.ownerDocument.defaultView, f = d.tagName === "TEXTAREA" ? h.HTMLTextAreaElement.prototype : d.tagName === "SELECT" ? h.HTMLSelectElement.prototype : h.HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(f, "value").set.call(d, s), d.dispatchEvent(new h.Event(d.tagName === "SELECT" ? "change" : "input", { bubbles: !0 }));
  }, wasFocused: L };
}
function hi({ id: t, error: e }) {
  return e && e !== !0 ? /* @__PURE__ */ U7("span", { id: t, role: "alert", className: "aurora-extended-error", children: e }) : null;
}
function vi({ label: t = "Message", value: e, defaultValue: a = "", onChange: r, onValueChange: o, onSend: i, onSendError: n, onAttach: L, attachLabel: c = "Add an attachment", avatarSrc: C, avatarAlt: p = "", postLabel: l = "post", submitOnEnter: s = !1, clearOnSend: d = !0, error: h, className: f, style: x, id: y, disabled: b = !1, onFocus: Z, onBlur: g, onKeyDown: M, ...u }) {
  let v = li(), m = y ?? v, S = `${m}-error`, R = fi(e, a, o, r), [A, O] = F7(!1), D = R.current.length > 0, w = async () => {
    if (!(b || A || !R.current.trim() || !i)) {
      O(!0);
      try {
        await i(R.current) !== !1 && d && R.writeFromAction("");
      } catch (P) {
        n?.(P);
      } finally {
        O(!1), R.wasFocused.current = !0, R.input.current?.focus();
      }
    }
  }, C1 = z($1({ propDefault: !D, typing: D }), "div", {
    className: ["aurora-extended-chat", f].filter(Boolean).join(" "),
    style: x,
    "data-aurora-control": "extended-chat",
    "data-aurora-disabled": b,
    "aria-busy": A
  }, (P, N) => {
    if (N.type === "img") return ci(P, { src: C ?? P.props.src, alt: p });
    if (P.props["data-name"] === "Image" && L) return Q(P, "button", {
      type: "button",
      className: "aurora-native-button aurora-extended-source-action",
      disabled: b || A,
      "aria-label": c,
      title: c,
      onClick: L
    });
    if (P.props["data-name"] === "Chat input" || P.props["data-name"] === "Chat input typing") return Q(P, "div", {
      style: { background: "var(--aurora-native-theme-field-bg, rgba(255,255,255,0.1))" }
    });
    if (P.props["data-name"] === "Tertiary") return Q(P, "button", {
      type: "button",
      disabled: b || A || !R.current.trim(),
      className: "aurora-native-button aurora-extended-source-action",
      "aria-label": "Post message",
      onClick: w
    });
    if (P.props["data-aurora-text"] && N.text === "post") return Q(P, "span", {}, l);
    if (P.props["data-aurora-text"])
      return Q(P, "textarea", {
        ...u,
        ref: R.input,
        id: m,
        value: R.current,
        disabled: b || A,
        className: "aurora-extended-input aurora-extended-chat-text",
        style: { height: D ? "60px" : "20px" },
        rows: D ? 3 : 1,
        placeholder: u.placeholder ?? "Add a comment",
        "aria-label": u["aria-label"] ?? t,
        "aria-invalid": !!h || u["aria-invalid"],
        "aria-describedby": [u["aria-describedby"], h && h !== !0 ? S : null].filter(Boolean).join(" ") || void 0,
        onChange: R.change,
        onFocus: (T) => {
          R.wasFocused.current = !0, Z?.(T);
        },
        onBlur: (T) => {
          R.wasFocused.current = !1, g?.(T);
        },
        onKeyDown: (T) => {
          M?.(T), !T.defaultPrevented && T.key === "Enter" && !T.nativeEvent?.isComposing && (T.ctrlKey || T.metaKey || s && !T.shiftKey) && (T.preventDefault(), w());
        }
      }, null);
  });
  return /* @__PURE__ */ gi("div", { className: "aurora-extended-field-container", children: [
    C1,
    /* @__PURE__ */ U7(hi, { id: S, error: h })
  ] });
}
var G7 = vi;

// aurora-evidence:1105
import { cloneElement as xi, useId as QM, useState as ui } from "react";
import { jsx as yi } from "react/jsx-runtime";
function Mi({ Visual: t, toggle: e = !1, label: a, children: r, selected: o, defaultSelected: i = !0, onSelectedChange: n, disabled: L = !1, onClick: c, ...C }) {
  let [p, l] = ui(i), s = o ?? p, d = !1;
  return z(t({ selected: s }), "button", {
    ...C,
    type: "button",
    role: C.role ?? "tab",
    disabled: L,
    "aria-selected": s,
    "data-selected": s,
    "data-aurora-control": "tab",
    className: ["aurora-extended-tab", C.className].filter(Boolean).join(" "),
    onClick: (h) => {
      if (c?.(h), L || h.defaultPrevented) return;
      let f = e ? !s : !0;
      o === void 0 && l(f), f !== s && n?.(f);
    }
  }, (h, f) => {
    if (!d && h.props["data-aurora-text"] && (r !== void 0 || a !== void 0))
      return d = !0, xi(h, {}, r ?? a);
    if (f.type === "img") return k(h);
  });
}
function bi(t) {
  return /* @__PURE__ */ yi(Mi, { ...t, Visual: z1 });
}
var FM = Array.from({ length: 5 }, (t, e) => ({ value: `tab-${e + 1}`, label: `Tab ${e + 1}` }));
var V7 = bi;

// aurora-evidence:1107
import { cloneElement as mi, createElement as Zi, useEffect as jM, useId as _M, useRef as BM, useState as YM } from "react";
import { Fragment as Ri, jsx as Oi, jsxs as wi } from "react/jsx-runtime";
var ib = Array.from({ length: 6 }, (t, e) => ({ value: String(e), label: e ? "UnSelected" : "Selected" })), nb = ["S", "M", "L", "XL", "XXL", "XXXL"].map((t) => ({ value: t, label: t })), sb = Array.from({ length: 9 }, (t, e) => ({ value: String(e), label: ["30 Min", "45 Min", "60 Min"][e % 3] }));
function Si(t, e, a, r) {
  return z(t(e), "div", { "data-aurora-control": "widget", "data-aurora-widget": !0, ...a, className: ["aurora-widget-source", a.className].filter(Boolean).join(" ") }, r);
}
function Pi(t, e, a = t.props.children) {
  return Zi("button", { ...t.props, ...e, type: "button", className: [t.props.className, "aurora-widget-button"].join(" ") }, a);
}
var V0 = (t) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) throw new RangeError("Aurora date values use YYYY-MM-DD");
  let e = /* @__PURE__ */ new Date(`${t}T12:00:00Z`);
  if (!Number.isFinite(+e) || e.toISOString().slice(0, 10) !== t) throw new RangeError("Invalid Aurora date");
  return e;
}, zi = (t) => t.toISOString().slice(0, 10), Ni = (t, e) => {
  let a = V0(t);
  return a.setUTCDate(a.getUTCDate() + e), zi(a);
}, Ai = (t, e, a) => {
  if (V0(t), e && V0(e), a && V0(a), e && a && e > a) throw new RangeError("Aurora date min must not follow max");
  return e && t < e ? e : a && t > a ? a : t;
}, Qi = (t) => String(V0(t).getUTCDate()), Ii = (t) => V0(t).toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" }).toUpperCase();
function Di({ label: t, value: e, defaultValue: a = "2021-10-22", min: r, max: o, selected: i = !1, doneStatus: n = !1, disabled: L = !1, name: c, onSelect: C, onValueChange: p, ...l }) {
  let s = Ai(e ?? a, r, o), d = 0, h = Si(n1, { selected: i || n, doneStatus: n }, l, (f) => f.props["data-aurora-text"] ? mi(f, { children: d++ === 0 ? Qi(s) : Ii(s) }) : void 0);
  return Pi(h, { ...l, "aria-label": t ?? s, "aria-pressed": i, disabled: L, onClick: () => {
    C?.(s), p?.(s);
  } }, /* @__PURE__ */ wi(Ri, { children: [
    h.props.children,
    c && i && /* @__PURE__ */ Oi("input", { type: "hidden", name: c, value: s })
  ] }));
}
var Lb = Array.from({ length: 8 }, (t, e) => Ni("2021-10-22", e));
var j7 = Di;

// aurora-evidence:1108
import { cloneElement as lb, createElement as pb, useEffect as Ti, useId as fb, useRef as Ei, useState as ki } from "react";
import { Fragment as Ib, jsx as d0, jsxs as Ui } from "react/jsx-runtime";
function Hi(t, e, a, r) {
  let [o, i] = ki(e);
  return Ti(() => {
    let n = a.current?.closest("form"), L = () => {
      t === void 0 && i(e);
    };
    return n?.addEventListener("reset", L), () => n?.removeEventListener("reset", L);
  }, [t, JSON.stringify(e)]), [t ?? o, (n) => {
    t === void 0 && i(n), r?.(n);
  }];
}
var Pb = Array.from({ length: 6 }, (t, e) => ({ value: String(e), label: e ? "UnSelected" : "Selected" })), zb = ["S", "M", "L", "XL", "XXL", "XXXL"].map((t) => ({ value: t, label: t })), Nb = Array.from({ length: 9 }, (t, e) => ({ value: String(e), label: ["30 Min", "45 Min", "60 Min"][e % 3] }));
var z0 = (t) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) throw new RangeError("Aurora date values use YYYY-MM-DD");
  let e = /* @__PURE__ */ new Date(`${t}T12:00:00Z`);
  if (!Number.isFinite(+e) || e.toISOString().slice(0, 10) !== t) throw new RangeError("Invalid Aurora date");
  return e;
}, B7 = (t) => t.toISOString().slice(0, 10), Fi = (t, e) => {
  let a = z0(t);
  return a.setUTCDate(a.getUTCDate() + e), B7(a);
}, _7 = (t, e, a) => {
  if (z0(t), e && z0(e), a && z0(a), e && a && e > a) throw new RangeError("Aurora date min must not follow max");
  return e && t < e ? e : a && t > a ? a : t;
};
var Ab = Array.from({ length: 8 }, (t, e) => Fi("2021-10-22", e));
function Gi({ label: t = "Date", value: e, defaultValue: a = "2020-03-03", min: r, max: o, disabled: i = !1, name: n, onValueChange: L, includeDay: c = !1, startYear: C = 1900, endYear: p = 2100, prop2Variables: l, prop3Variables: s, prop4Variables: d, className: h, ...f }) {
  let x = Ei(null), [y, b] = Hi(e, a, x, L), Z = _7(y, r, o), g = z0(Z), M = g.getUTCDate(), u = g.getUTCMonth(), v = g.getUTCFullYear(), m = c || s || d, S = (D, w) => {
    let C1 = D === "year" ? w : v, P = D === "month" ? w : u, N = Math.min(D === "day" ? w : M, new Date(Date.UTC(C1, P + 1, 0)).getUTCDate());
    b(_7(B7(new Date(Date.UTC(C1, P, N, 12))), r, o));
  };
  if (!Number.isInteger(C) || !Number.isInteger(p) || p < C || p - C > 9999) throw new RangeError("AuroraDatePicker requires a finite year interval");
  let R = Array.from({ length: 12 }, (D, w) => new Date(Date.UTC(2020, w, 1)).toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }).toUpperCase()), A = r ? z0(r).getUTCFullYear() : Math.min(C, v), O = o ? z0(o).getUTCFullYear() : Math.max(p, v);
  return /* @__PURE__ */ Ui("div", { ...f, ref: x, role: "group", "aria-label": t, className: ["aurora-widget-date-picker", h].filter(Boolean).join(" "), "data-node-id": "15518:37445", children: [
    m && /* @__PURE__ */ d0("select", { size: 5, "aria-label": `${t}: day`, value: M, disabled: i, onChange: (D) => S("day", Number(D.currentTarget.value)), children: Array.from({ length: new Date(Date.UTC(v, u + 1, 0)).getUTCDate() }, (D, w) => /* @__PURE__ */ d0("option", { value: w + 1, children: String(w + 1).padStart(2, "0") }, w + 1)) }),
    /* @__PURE__ */ d0("select", { size: 5, "aria-label": `${t}: month`, value: u, disabled: i, onChange: (D) => S("month", Number(D.currentTarget.value)), children: R.map((D, w) => /* @__PURE__ */ d0("option", { value: w, children: D }, D)) }),
    /* @__PURE__ */ d0("select", { size: 5, "aria-label": `${t}: year`, value: v, disabled: i, onChange: (D) => S("year", Number(D.currentTarget.value)), children: Array.from({ length: O - A + 1 }, (D, w) => A + w).map((D) => /* @__PURE__ */ d0("option", { value: D, children: D }, D)) }),
    n && /* @__PURE__ */ d0("input", { type: "hidden", name: n, value: Z, disabled: i }),
    /* @__PURE__ */ d0("span", { className: "aurora-native-sr", "aria-live": "polite", children: Z })
  ] });
}
var Y7 = Gi;

// aurora-evidence:1118
import { cloneElement as C5, createElement as Vi, useEffect as Rb, useId as wb, useRef as Tb, useState as Eb } from "react";
import { Fragment as ey, jsx as ty, jsxs as ay } from "react/jsx-runtime";
var $b = Array.from({ length: 6 }, (t, e) => ({ value: String(e), label: e ? "UnSelected" : "Selected" })), Xb = ["S", "M", "L", "XL", "XXL", "XXXL"].map((t) => ({ value: t, label: t })), qb = Array.from({ length: 9 }, (t, e) => ({ value: String(e), label: ["30 Min", "45 Min", "60 Min"][e % 3] }));
function U2(t, e) {
  if (!t || typeof t != "object" || !t.type) return t;
  let a = t.props.children, r = C5(t, { children: Array.isArray(a) ? a.map((i) => U2(i, e)) : U2(a, e) }), o = e(r);
  return o === void 0 ? r : o;
}
function ji(t, e, a, r) {
  return z(t(e), "div", { "data-aurora-control": "widget", "data-aurora-widget": !0, ...a, className: ["aurora-widget-source", a.className].filter(Boolean).join(" ") }, r);
}
function _i(t, e, a = t.props.children) {
  return Vi("button", { ...t.props, ...e, type: "button", className: [t.props.className, "aurora-widget-button"].join(" ") }, a);
}
var Bi = (t) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) throw new RangeError("Aurora date values use YYYY-MM-DD");
  let e = /* @__PURE__ */ new Date(`${t}T12:00:00Z`);
  if (!Number.isFinite(+e) || e.toISOString().slice(0, 10) !== t) throw new RangeError("Invalid Aurora date");
  return e;
}, Yi = (t) => t.toISOString().slice(0, 10), Wi = (t, e) => {
  let a = Bi(t);
  return a.setUTCDate(a.getUTCDate() + e), Yi(a);
};
var Jb = Array.from({ length: 8 }, (t, e) => Wi("2021-10-22", e));
var $i = [{ label: "Title 1", value: 4.9 }, { label: "Title 2", value: 4.9 }, { label: "Title 3", value: 4.9 }];
function Xi({ title: t = "What our customers say", rating: e = 4.9, reviewCount: a = 122, details: r = $i, expanded: o = !0, mini: i = !1, onReviewsClick: n, ...L }) {
  if (!Number.isFinite(e) || e < 0 || e > 5 || !Number.isInteger(a) || a < 0) throw new RangeError("AuroraRating requires rating 0..5 and a nonnegative review count");
  let c = 0, C = 0;
  return ji(f1, { expanded: i ? !1 : o, mini: i }, { ...L, role: "group", "aria-label": `${e} out of 5; ${a} reviews` }, (p) => {
    if (p.props["data-name"]?.startsWith("Variable ")) {
      let l = r[C++];
      if (!l) return null;
      let s = 0;
      return U2(p, (d) => {
        if (d.props["data-aurora-text"]) return C5(d, { children: s++ === 0 ? l.label : l.value.toFixed(1) });
        if (d.props["data-name"] === "Rectangle") return C5(d, { style: { ...d.props.style, width: `${Math.max(0, Math.min(100, l.value / 5 * 100))}%`, background: "var(--aurora-native-theme-text, white)" } });
      });
    }
    if (p.props["data-aurora-text"]) {
      let l = J(p).trim(), s = l === "What our customers say" ? t : l === "4.9" ? e.toFixed(1) : l === "122 Reviews" ? `${a} Reviews` : l;
      return c++, l === "122 Reviews" && n ? _i(p, { onClick: n, "aria-label": `Read ${a} reviews` }, s) : C5(p, { children: s });
    }
    if (p.type === "img") return C5(p, { style: { ...p.props.style, filter: "var(--aurora-widget-icon-filter, none)" } });
  });
}
var W7 = Xi;

// aurora-evidence:1128
import { cloneElement as V5, createElement as qi, useEffect as Ji, useId as iy, useRef as $7, useState as Ki } from "react";
import { Fragment as yy, jsx as j2, jsxs as nn } from "react/jsx-runtime";
function X7(t, e, a, r) {
  let [o, i] = Ki(e);
  return Ji(() => {
    let n = a.current?.closest("form"), L = () => {
      t === void 0 && i(e);
    };
    return n?.addEventListener("reset", L), () => n?.removeEventListener("reset", L);
  }, [t, JSON.stringify(e)]), [t ?? o, (n) => {
    t === void 0 && i(n), r?.(n);
  }];
}
var gy = Array.from({ length: 6 }, (t, e) => ({ value: String(e), label: e ? "UnSelected" : "Selected" })), xy = ["S", "M", "L", "XL", "XXL", "XXXL"].map((t) => ({ value: t, label: t })), uy = Array.from({ length: 9 }, (t, e) => ({ value: String(e), label: ["30 Min", "45 Min", "60 Min"][e % 3] }));
function q7(t, e, a, r) {
  return z(t(e), "div", { "data-aurora-control": "widget", "data-aurora-widget": !0, ...a, className: ["aurora-widget-source", a.className].filter(Boolean).join(" ") }, r);
}
function V2(t, e, a = t.props.children) {
  return qi("button", { ...t.props, ...e, type: "button", className: [t.props.className, "aurora-widget-button"].join(" ") }, a);
}
function tn({ label: t = "Quantity", value: e, defaultValue: a = 7, min: r = 0, max: o = 99, step: i = 1, disabled: n = !1, name: L, onValueChange: c, ...C }) {
  if (!Number.isFinite(r) || !Number.isFinite(o) || o < r || !Number.isFinite(i) || i <= 0) throw new RangeError("AuroraCounter requires finite min <= max and step > 0");
  let p = $7(null), l = (f) => Math.min(o, Math.max(r, f)), [s, d] = X7(e, a, p, c), h = l(s);
  if (!Number.isFinite(s)) throw new RangeError("AuroraCounter values must be finite");
  return /* @__PURE__ */ nn("div", { ref: p, className: "aurora-widget-counter", role: "group", "aria-label": t, children: [
    q7(e1, {}, C, (f) => {
      if (f.props["data-name"] === "Subtract") return V2(f, { "aria-label": `Decrease ${t}`, disabled: n || h <= r, onClick: () => d(l(h - i)) });
      if (f.props["data-name"] === "Add") return V2(f, { "aria-label": `Increase ${t}`, disabled: n || h >= o, onClick: () => d(l(h + i)) });
      if (f.type === "img") return V5(f, { style: { ...f.props.style, filter: "var(--aurora-widget-icon-filter, none)" } });
      if (f.props["data-aurora-text"]) return V5(f, { "aria-live": "polite", children: String(h) });
    }),
    L && /* @__PURE__ */ j2("input", { type: "hidden", name: L, value: h, disabled: n })
  ] });
}
function en({ title: t = "Product title", price: e = "\u20B9149", image: a, label: r = t, value: o, defaultValue: i = 0, min: n = 0, max: L = 99, step: c = 1, disabled: C, name: p, onValueChange: l, added: s, ...d }) {
  let h = $7(null), [f, x] = X7(o, i, h, l), y = 0;
  return /* @__PURE__ */ j2("div", { ref: h, className: "aurora-widget-counter-card", children: q7(i1, { added: s ?? f > 0 }, d, (b) => {
    if (b.props["data-node-id"] === "5265:38271") return /* @__PURE__ */ j2(tn, { label: r, value: f, min: n, max: L, step: c, disabled: C, name: p, onValueChange: x });
    if (b.props["data-name"] === "Secondary") return V2(b, { disabled: C, onClick: () => x(Math.min(L, Math.max(n, c))), "aria-label": `Add ${r}` });
    if (b.type === "img" && /\.png(?:$|[?])/.test(b.props.src || "")) return a ? V5(b, { src: a }) : void 0;
    if (b.props["data-aurora-text"])
      return J(b).trim().toLowerCase() === "add" ? void 0 : V5(b, { children: y++ === 0 ? t : e });
  }) });
}
var an = (t) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) throw new RangeError("Aurora date values use YYYY-MM-DD");
  let e = /* @__PURE__ */ new Date(`${t}T12:00:00Z`);
  if (!Number.isFinite(+e) || e.toISOString().slice(0, 10) !== t) throw new RangeError("Invalid Aurora date");
  return e;
}, on = (t) => t.toISOString().slice(0, 10), rn = (t, e) => {
  let a = an(t);
  return a.setUTCDate(a.getUTCDate() + e), on(a);
};
var My = Array.from({ length: 8 }, (t, e) => rn("2021-10-22", e));
var J7 = en;

// aurora-evidence:1152
import { cloneElement as Sy, createElement as Py, useEffect as sn, useId as zy, useRef as Ln, useState as Cn } from "react";
import { Fragment as gn, jsx as j0, jsxs as t6 } from "react/jsx-runtime";
function cn(t, e, a, r) {
  let [o, i] = Cn(e);
  return sn(() => {
    let n = a.current?.closest("form"), L = () => {
      t === void 0 && i(e);
    };
    return n?.addEventListener("reset", L), () => n?.removeEventListener("reset", L);
  }, [t, JSON.stringify(e)]), [t ?? o, (n) => {
    t === void 0 && i(n), r?.(n);
  }];
}
var Hy = Array.from({ length: 6 }, (t, e) => ({ value: String(e), label: e ? "UnSelected" : "Selected" })), Fy = ["S", "M", "L", "XL", "XXL", "XXXL"].map((t) => ({ value: t, label: t })), dn = Array.from({ length: 9 }, (t, e) => ({ value: String(e), label: ["30 Min", "45 Min", "60 Min"][e % 3] }));
function ln({ label: t, subtext: e }) {
  return /* @__PURE__ */ t6(gn, { children: [
    /* @__PURE__ */ j0("legend", { className: "aurora-widget-title", children: t }),
    e != null && /* @__PURE__ */ j0("p", { className: "aurora-widget-subtext", children: e })
  ] });
}
function pn({ label: t = "Single-Select Chip Selectors", subtext: e, options: a = dn, multiSelect: r = !1, questionnaire: o = !1, value: i, defaultValue: n = a[0] ? [a[0].value] : [], onValueChange: L, disabled: c, name: C, className: p, ...l }) {
  let s = Ln(null), [d, h] = cn(i, n, s, L), f = r ? x1 : r1;
  return /* @__PURE__ */ t6("fieldset", { ...l, ref: s, disabled: c, className: ["aurora-widget-group aurora-widget-chip-grid", p].filter(Boolean).join(" "), "data-node-id": "4313:28441", "data-questionnaire": o, children: [
    /* @__PURE__ */ j0(ln, { label: t, subtext: e }),
    /* @__PURE__ */ j0("div", { className: "aurora-widget-chip-options", children: a.map((x) => /* @__PURE__ */ j0(f, { withIcon: !1, disabled: c || x.disabled, selected: d.includes(x.value), onSelectedChange: (y) => h(r ? y ? [...d, x.value] : d.filter((b) => b !== x.value) : [x.value]), children: x.label }, x.value)) }),
    C && d.map((x) => /* @__PURE__ */ j0("input", { type: "hidden", name: C, value: x, disabled: c }, x))
  ] });
}
var fn = (t) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) throw new RangeError("Aurora date values use YYYY-MM-DD");
  let e = /* @__PURE__ */ new Date(`${t}T12:00:00Z`);
  if (!Number.isFinite(+e) || e.toISOString().slice(0, 10) !== t) throw new RangeError("Invalid Aurora date");
  return e;
}, hn = (t) => t.toISOString().slice(0, 10), vn = (t, e) => {
  let a = fn(t);
  return a.setUTCDate(a.getUTCDate() + e), hn(a);
};
var Gy = Array.from({ length: 8 }, (t, e) => vn("2021-10-22", e));
var K7 = pn;

// aurora-evidence:1153
import { cloneElement as _y, createElement as By, useEffect as xn, useId as un, useRef as Mn, useState as bn } from "react";
import { Fragment as An, jsx as c5, jsxs as a6 } from "react/jsx-runtime";
function yn(t, e, a, r) {
  let [o, i] = bn(e);
  return xn(() => {
    let n = a.current?.closest("form"), L = () => {
      t === void 0 && i(e);
    };
    return n?.addEventListener("reset", L), () => n?.removeEventListener("reset", L);
  }, [t, JSON.stringify(e)]), [t ?? o, (n) => {
    t === void 0 && i(n), r?.(n);
  }];
}
var mn = [{ value: "selected", label: "Selected", subtext: "Subtext comes here" }, { value: "second", label: "Unselected", subtext: "Subtext comes here" }, { value: "third", label: "Unselected", subtext: "Subtext comes here" }], rm = Array.from({ length: 6 }, (t, e) => ({ value: String(e), label: e ? "UnSelected" : "Selected" })), im = ["S", "M", "L", "XL", "XXL", "XXXL"].map((t) => ({ value: t, label: t })), nm = Array.from({ length: 9 }, (t, e) => ({ value: String(e), label: ["30 Min", "45 Min", "60 Min"][e % 3] }));
function Zn({ label: t, subtext: e }) {
  return /* @__PURE__ */ a6(An, { children: [
    /* @__PURE__ */ c5("legend", { className: "aurora-widget-title", children: t }),
    e != null && /* @__PURE__ */ c5("p", { className: "aurora-widget-subtext", children: e })
  ] });
}
function Sn({ label: t = "Title comes here", subtext: e = "Long Subtext comes here & preferably shouldn\u2019t go over the second line", options: a = mn, value: r, defaultValue: o = a[0]?.value, onValueChange: i, disabled: n, name: L, large: c = !1, className: C, ...p }) {
  let l = Mn(null), s = un(), [d, h] = yn(r, o ?? "", l, i);
  return /* @__PURE__ */ a6("fieldset", { ...p, ref: l, disabled: n, className: ["aurora-widget-group aurora-widget-radio-group", C].filter(Boolean).join(" "), "data-node-id": "6393:46468", "data-large": c, children: [
    /* @__PURE__ */ c5(Zn, { label: t, subtext: e }),
    /* @__PURE__ */ c5("div", { className: "aurora-widget-choice-stack", children: a.map((f) => /* @__PURE__ */ c5(g1, { name: L ?? s, value: f.value, label: f.label, subtext: f.subtext, disabled: n || f.disabled, checked: d === f.value, onChange: () => h(f.value) }, f.value)) })
  ] });
}
var Pn = (t) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) throw new RangeError("Aurora date values use YYYY-MM-DD");
  let e = /* @__PURE__ */ new Date(`${t}T12:00:00Z`);
  if (!Number.isFinite(+e) || e.toISOString().slice(0, 10) !== t) throw new RangeError("Invalid Aurora date");
  return e;
}, zn = (t) => t.toISOString().slice(0, 10), Nn = (t, e) => {
  let a = Pn(t);
  return a.setUTCDate(a.getUTCDate() + e), zn(a);
};
var sm = Array.from({ length: 8 }, (t, e) => Nn("2021-10-22", e));
var e6 = Sn;

// aurora-evidence:1154
import { cloneElement as dm, createElement as lm, useEffect as Qn, useId as pm, useRef as In, useState as Dn } from "react";
import { Fragment as Fn, jsx as d5, jsxs as r6 } from "react/jsx-runtime";
function On(t, e, a, r) {
  let [o, i] = Dn(e);
  return Qn(() => {
    let n = a.current?.closest("form"), L = () => {
      t === void 0 && i(e);
    };
    return n?.addEventListener("reset", L), () => n?.removeEventListener("reset", L);
  }, [t, JSON.stringify(e)]), [t ?? o, (n) => {
    t === void 0 && i(n), r?.(n);
  }];
}
var Rn = Array.from({ length: 6 }, (t, e) => ({ value: String(e), label: e ? "UnSelected" : "Selected" })), Sm = ["S", "M", "L", "XL", "XXL", "XXXL"].map((t) => ({ value: t, label: t })), Pm = Array.from({ length: 9 }, (t, e) => ({ value: String(e), label: ["30 Min", "45 Min", "60 Min"][e % 3] }));
function wn({ label: t, subtext: e }) {
  return /* @__PURE__ */ r6(Fn, { children: [
    /* @__PURE__ */ d5("legend", { className: "aurora-widget-title", children: t }),
    e != null && /* @__PURE__ */ d5("p", { className: "aurora-widget-subtext", children: e })
  ] });
}
function Tn({ label: t = "Title comes here", subtext: e, options: a = Rn, value: r, defaultValue: o = a[0] ? [a[0].value] : [], onValueChange: i, disabled: n, name: L, className: c, ...C }) {
  let p = In(null), [l, s] = On(r, o, p, i);
  return /* @__PURE__ */ r6("fieldset", { ...C, ref: p, disabled: n, className: ["aurora-widget-group aurora-widget-checkbox-group", c].filter(Boolean).join(" "), "data-node-id": "6393:46813", children: [
    /* @__PURE__ */ d5(wn, { label: t, subtext: e }),
    /* @__PURE__ */ d5("div", { className: "aurora-widget-choice-stack", children: a.map((d) => /* @__PURE__ */ d5(q, { name: L, value: d.value, label: d.label, subtext: d.subtext, disabled: n || d.disabled, checked: l.includes(d.value), onChange: (h) => s(h.currentTarget.checked ? [...l, d.value] : l.filter((f) => f !== d.value)) }, d.value)) })
  ] });
}
var En = (t) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) throw new RangeError("Aurora date values use YYYY-MM-DD");
  let e = /* @__PURE__ */ new Date(`${t}T12:00:00Z`);
  if (!Number.isFinite(+e) || e.toISOString().slice(0, 10) !== t) throw new RangeError("Invalid Aurora date");
  return e;
}, kn = (t) => t.toISOString().slice(0, 10), Hn = (t, e) => {
  let a = En(t);
  return a.setUTCDate(a.getUTCDate() + e), kn(a);
};
var zm = Array.from({ length: 8 }, (t, e) => Hn("2021-10-22", e));
var o6 = Tn;

// aurora-evidence:1155
import { cloneElement as Im, createElement as Dm, useEffect as Gn, useId as Un, useRef as Vn, useState as jn } from "react";
import { Fragment as Jn, jsx as N0, jsxs as _2 } from "react/jsx-runtime";
function _n(t, e, a, r) {
  let [o, i] = jn(e);
  return Gn(() => {
    let n = a.current?.closest("form"), L = () => {
      t === void 0 && i(e);
    };
    return n?.addEventListener("reset", L), () => n?.removeEventListener("reset", L);
  }, [t, JSON.stringify(e)]), [t ?? o, (n) => {
    t === void 0 && i(n), r?.(n);
  }];
}
var jm = Array.from({ length: 6 }, (t, e) => ({ value: String(e), label: e ? "UnSelected" : "Selected" })), Bn = ["S", "M", "L", "XL", "XXL", "XXXL"].map((t) => ({ value: t, label: t })), _m = Array.from({ length: 9 }, (t, e) => ({ value: String(e), label: ["30 Min", "45 Min", "60 Min"][e % 3] }));
function Yn({ label: t, subtext: e }) {
  return /* @__PURE__ */ _2(Jn, { children: [
    /* @__PURE__ */ N0("legend", { className: "aurora-widget-title", children: t }),
    e != null && /* @__PURE__ */ N0("p", { className: "aurora-widget-subtext", children: e })
  ] });
}
function Wn({ label: t = "Size", subtext: e = "Kicker comes here", options: a = Bn, value: r, defaultValue: o = a[1]?.value, onValueChange: i, disabled: n, name: L, imageOnly: c = !1, className: C, ...p }) {
  let l = Vn(null), s = Un(), [d, h] = _n(r, o ?? "", l, i);
  return /* @__PURE__ */ _2("fieldset", { ...p, ref: l, disabled: n, className: ["aurora-widget-group aurora-widget-radio-tiles", C].filter(Boolean).join(" "), "data-node-id": "7597:49271", "data-image-only": c, children: [
    /* @__PURE__ */ N0(Yn, { label: t, subtext: e }),
    /* @__PURE__ */ N0("div", { className: "aurora-widget-tile-options", children: a.map((f) => /* @__PURE__ */ _2("label", { className: "aurora-widget-tile", "data-selected": d === f.value, children: [
      /* @__PURE__ */ N0("input", { type: "radio", name: L ?? s, value: f.value, checked: d === f.value, disabled: n || f.disabled, "aria-label": typeof f.label == "string" ? f.label : f.value, onChange: () => h(f.value) }),
      c && f.image ? /* @__PURE__ */ N0("img", { src: f.image, alt: "" }) : /* @__PURE__ */ N0("span", { children: f.label })
    ] }, f.value)) })
  ] });
}
var $n = (t) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) throw new RangeError("Aurora date values use YYYY-MM-DD");
  let e = /* @__PURE__ */ new Date(`${t}T12:00:00Z`);
  if (!Number.isFinite(+e) || e.toISOString().slice(0, 10) !== t) throw new RangeError("Invalid Aurora date");
  return e;
}, Xn = (t) => t.toISOString().slice(0, 10), qn = (t, e) => {
  let a = $n(t);
  return a.setUTCDate(a.getUTCDate() + e), Xn(a);
};
var Bm = Array.from({ length: 8 }, (t, e) => qn("2021-10-22", e));
var i6 = Wn;

// aurora-evidence:1183
import { forwardRef as B2, useId as Kn, useState as ts } from "react";
import { jsx as A0, jsxs as n6 } from "react/jsx-runtime";
var Y2 = B2(function({ title: e = "Main Workout", detail: a = "20 Min", open: r, defaultOpen: o, variant: i, Open: n, disabled: L = !1, onOpenChange: c, children: C, className: p, ...l }, s) {
  let [d, h] = ts(o ?? ((n ?? i?.Open) === !0 || (n ?? i?.Open) === "Yes")), f = r ?? d, x = Kn();
  return /* @__PURE__ */ n6("div", { ...l, ref: s, className: ["aurora-accordion", p].filter(Boolean).join(" "), "data-node-id": "5623:38667", children: [
    /* @__PURE__ */ n6("button", { type: "button", className: "aurora-accordion-trigger", disabled: L, "aria-expanded": f, "aria-controls": `${x}-panel`, id: `${x}-trigger`, onClick: () => {
      r === void 0 && h(!f), c?.(!f);
    }, children: [
      /* @__PURE__ */ A0("span", { className: "aurora-accordion-title", children: e }),
      /* @__PURE__ */ A0("span", { className: "aurora-accordion-detail", children: a }),
      /* @__PURE__ */ A0("svg", { "aria-hidden": "true", className: "aurora-accordion-icon", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ A0("path", { d: "M5 12h14m-7-7 7 7-7 7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
    ] }),
    /* @__PURE__ */ A0("div", { className: "aurora-accordion-panel", id: `${x}-panel`, role: "region", "aria-labelledby": `${x}-trigger`, hidden: !f, children: C })
  ] });
}), qm = B2((t, e) => /* @__PURE__ */ A0(Y2, { ...t, ref: e, defaultOpen: t.defaultOpen ?? !1 })), Jm = B2((t, e) => /* @__PURE__ */ A0(Y2, { ...t, ref: e, defaultOpen: t.defaultOpen ?? !0 })), s6 = Y2;

// aurora-evidence:1195
import { cloneElement as es, createElement as aZ, useEffect as oZ, useId as rZ, useRef as iZ, useState as nZ } from "react";
import { Fragment as ZZ, jsx as mZ, jsxs as SZ } from "react/jsx-runtime";
var xZ = Array.from({ length: 6 }, (t, e) => ({ value: String(e), label: e ? "UnSelected" : "Selected" })), uZ = ["S", "M", "L", "XL", "XXL", "XXXL"].map((t) => ({ value: t, label: t })), MZ = Array.from({ length: 9 }, (t, e) => ({ value: String(e), label: ["30 Min", "45 Min", "60 Min"][e % 3] }));
var as = t1;
function W2(t, e) {
  if (!t || typeof t != "object" || !t.type) return t;
  let a = t.props.children, r = es(t, { children: Array.isArray(a) ? a.map((i) => W2(i, e)) : W2(a, e) }), o = e(r);
  return o === void 0 ? r : o;
}
var os = (t) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) throw new RangeError("Aurora date values use YYYY-MM-DD");
  let e = /* @__PURE__ */ new Date(`${t}T12:00:00Z`);
  if (!Number.isFinite(+e) || e.toISOString().slice(0, 10) !== t) throw new RangeError("Invalid Aurora date");
  return e;
}, rs = (t) => t.toISOString().slice(0, 10), is = (t, e) => {
  let a = os(t);
  return a.setUTCDate(a.getUTCDate() + e), rs(a);
};
var bZ = Array.from({ length: 8 }, (t, e) => is("2021-10-22", e));
var ns = ["Very Sad", "Sad", "Good", "Happy"];
function ss({ mood: t = "Very Sad", label: e, selected: a = !1, disabled: r = !1, onSelect: o, ...i }) {
  let n = 0, L = as(s1({})), c;
  if (W2(L, (p) => {
    p.props["data-name"] === "Rating-BAD" && ns[n++] === t && (c = p);
  }), !c) throw new RangeError("Unsupported Aurora mood");
  return H(c, "button", { ...i, type: "button", className: ["aurora-widget-mood-button", i.className].filter(Boolean).join(" "), "aria-label": e ?? t, "aria-pressed": a, disabled: r, onClick: () => o?.(t) });
}
var L6 = ss;

// aurora-evidence:1252
import { Children as eP, cloneElement as aP, isValidElement as oP, useState as CL } from "react";

// aurora-web-visual:411:3940
import { Children as X2, cloneElement as j5, isValidElement as q2 } from "react";
import { jsx as j, jsxs as f6 } from "react/jsx-runtime";
var Ls = (t) => t.trim().replace(/[^a-zA-Z0-9]+(.)?/g, (e, a) => a ? a.toUpperCase() : "").replace(/^./, (e) => e.toLowerCase());
function l6(t, e, a) {
  let r = Object.keys(t[0].values), o = Object.fromEntries(Object.entries(a).filter(([i]) => r.some((n) => i === n || i === Ls(n))));
  return c1({ name: "Explicit approved App source", variants: t, defaultNodeId: e }, o);
}
var Cs = { "I411:3942;411:3939": { width: 20, height: 20 }, "I411:3947;411:3936": { width: 20, height: 20 } }, cs = {};
function C6({ children: t, ...e }) {
  let a = e["data-node-id"], r = Cs[a];
  return /* @__PURE__ */ j("div", { ...e, style: { display: "block", flexShrink: 0, ...r, ...e.style }, children: X2.map(t, (o) => q2(o) ? j5(o, { ...cs[a] || {}, style: { width: "100%", height: "100%", ...o.props.style } }) : o) });
}
var ds = (t = {}) => {
  let e = l6([{ nodeId: "4410:29369", width: 24, height: 24, src: "data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZGlzcGxheTpibG9jaztvdmVyZmxvdzp2aXNpYmxlIiBmb2N1c2FibGU9ImZhbHNlIj48ZyBkYXRhLW5vZGUtaWQ9IjQ0MTA6MjkzNjkiIGRhdGEtaW5zdGFuY2UtcGF0aD0iNDQxMDoyOTM2OSIgZGF0YS1uYW1lPSJjaGV2cm9uIGxlZnQiIG9wYWNpdHk9IjEiPjxnPjxnIGRhdGEtbm9kZS1pZD0iNzg2ODo1MTg5MyIgZGF0YS1pbnN0YW5jZS1wYXRoPSI0NDEwOjI5MzY5Lzc4Njg6NTE4OTMiIGRhdGEtbmFtZT0iUGF0aCAoU3Ryb2tlKSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSA3LjUgNCkiIG9wYWNpdHk9IjEiPjxwYXRoIGQ9Ik04LjcwNzEwNjU5MDI3MDk5NiAwLjI5Mjg5MzIzMDkxNTA2OTZDOS4wOTc2MzA1MDA3OTM0NTcgMC42ODM0MTc0OTkwNjUzOTkyIDkuMDk3NjMwNTAwNzkzNDU3IDEuMzE2NTgyNTYwNTM5MjQ1NiA4LjcwNzEwNjU5MDI3MDk5NiAxLjcwNzEwNjgyODY4OTU3NTJMMi40MTQyMTM2NTczNzkxNTA0IDcuOTk5OTk5NTIzMTYyODQyTDguNzA3MTA2NTkwMjcwOTk2IDE0LjI5Mjg5MjQ1NjA1NDY4OEM5LjA5NzYzMDUwMDc5MzQ1NyAxNC42ODM0MTczMjAyNTE0NjUgOS4wOTc2MzA1MDA3OTM0NTcgMTUuMzE2NTgxNzI2MDc0MjE5IDguNzA3MTA2NTkwMjcwOTk2IDE1LjcwNzEwNjU5MDI3MDk5NkM4LjMxNjU4MTcyNjA3NDIxOSAxNi4wOTc2Mjk1NDcxMTkxNCA3LjY4MzQxNzMyMDI1MTQ2NSAxNi4wOTc2Mjk1NDcxMTkxNCA3LjI5Mjg5MjkzMjg5MTg0NiAxNS43MDcxMDY1OTAyNzA5OTZMMC4yOTI4OTMyMzA5MTUwNjk2IDguNzA3MTA2NTkwMjcwOTk2Qy0wLjA5NzYzMTA5NjgzOTkwNDc5IDguMzE2NTgxNzI2MDc0MjE5IC0wLjA5NzYzMTA5NjgzOTkwNDc5IDcuNjgzNDE3MzIwMjUxNDY1IDAuMjkyODkzMjMwOTE1MDY5NiA3LjI5Mjg5MjkzMjg5MTg0Nkw3LjI5Mjg5MjkzMjg5MTg0NiAwLjI5Mjg5MzIzMDkxNTA2OTZDNy42ODM0MTczMjAyNTE0NjUgLTAuMDk3NjMxMDk2ODM5OTA0NzkgOC4zMTY1ODE3MjYwNzQyMTkgLTAuMDk3NjMxMDk2ODM5OTA0NzkgOC43MDcxMDY1OTAyNzA5OTYgMC4yOTI4OTMyMzA5MTUwNjk2WiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwxKSIgb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PGc+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==", values: {} }], "4410:29369", t);
  return /* @__PURE__ */ j("img", { alt: "", "data-linked-source-node": e.nodeId, src: e.src, className: t.className, style: { display: "block", width: "100%", height: "100%", ...t.style } });
}, ls = (t = {}) => {
  let e = l6([{ nodeId: "4410:29374", width: 24, height: 24, src: "data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZGlzcGxheTpibG9jaztvdmVyZmxvdzp2aXNpYmxlIiBmb2N1c2FibGU9ImZhbHNlIj48ZyBkYXRhLW5vZGUtaWQ9IjQ0MTA6MjkzNzQiIGRhdGEtaW5zdGFuY2UtcGF0aD0iNDQxMDoyOTM3NCIgZGF0YS1uYW1lPSJjaGV2cm9uIHJpZ2h0IiBvcGFjaXR5PSIxIj48Zz48ZyBkYXRhLW5vZGUtaWQ9Ijc4Njg6NTE1MzciIGRhdGEtaW5zdGFuY2UtcGF0aD0iNDQxMDoyOTM3NC83ODY4OjUxNTM3IiBkYXRhLW5hbWU9IlBhdGggKFN0cm9rZSkiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNy41IDQpIiBvcGFjaXR5PSIxIj48cGF0aCBkPSJNMC4yOTI4OTMyMzA5MTUwNjk2IDAuMjkyODkzMjMwOTE1MDY5NkMwLjY4MzQxNzQ5OTA2NTM5OTIgLTAuMDk3NjMxMDk2ODM5OTA0NzkgMS4zMTY1ODI1NjA1MzkyNDU2IC0wLjA5NzYzMTA5NjgzOTkwNDc5IDEuNzA3MTA2ODI4Njg5NTc1MiAwLjI5Mjg5MzIzMDkxNTA2OTZMOC43MDcxMDY1OTAyNzA5OTYgNy4yOTI4OTI5MzI4OTE4NDZDOS4wOTc2MzA1MDA3OTM0NTcgNy42ODM0MTczMjAyNTE0NjUgOS4wOTc2MzA1MDA3OTM0NTcgOC4zMTY1ODE3MjYwNzQyMTkgOC43MDcxMDY1OTAyNzA5OTYgOC43MDcxMDY1OTAyNzA5OTZMMS43MDcxMDY4Mjg2ODk1NzUyIDE1LjcwNzEwNjU5MDI3MDk5NkMxLjMxNjU4MjU2MDUzOTI0NTYgMTYuMDk3NjI5NTQ3MTE5MTQgMC42ODM0MTc0OTkwNjUzOTkyIDE2LjA5NzYyOTU0NzExOTE0IDAuMjkyODkzMjMwOTE1MDY5NiAxNS43MDcxMDY1OTAyNzA5OTZDLTAuMDk3NjMxMDk2ODM5OTA0NzkgMTUuMzE2NTgxNzI2MDc0MjE5IC0wLjA5NzYzMTA5NjgzOTkwNDc5IDE0LjY4MzQxNzMyMDI1MTQ2NSAwLjI5Mjg5MzIzMDkxNTA2OTYgMTQuMjkyODkyNDU2MDU0Njg4TDYuNTg1Nzg1ODY1NzgzNjkxIDcuOTk5OTk5NTIzMTYyODQyTDAuMjkyODkzMjMwOTE1MDY5NiAxLjcwNzEwNjgyODY4OTU3NTJDLTAuMDk3NjMxMDk2ODM5OTA0NzkgMS4zMTY1ODI1NjA1MzkyNDU2IC0wLjA5NzYzMTA5NjgzOTkwNDc5IDAuNjgzNDE3NDk5MDY1Mzk5MiAwLjI5Mjg5MzIzMDkxNTA2OTYgMC4yOTI4OTMyMzA5MTUwNjk2WiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwxKSIgb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PGc+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==", values: {} }], "4410:29374", t);
  return /* @__PURE__ */ j("img", { alt: "", "data-linked-source-node": e.nodeId, src: e.src, className: t.className, style: { display: "block", width: "100%", height: "100%", ...t.style } });
}, ps = new URL("./assets/5c1e6539cd9aa279b9d0ff70.svg", import.meta.url).href;
function fs({ className: t, variant: e = "< Chevron" }) {
  let a = e === "< Chevron";
  return /* @__PURE__ */ f6("div", { className: t || "content-stretch flex items-start relative", "data-figma-layer": a ? "node-411_3937" : "node-411_3931", children: [
    e === "Selected" && /* @__PURE__ */ j("div", { className: "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[100px] shrink-0 size-[40px]", "data-node-id": "411:3932", "data-name": "Number", children: /* @__PURE__ */ j("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "411:3933", children: "1" }) }),
    a && /* @__PURE__ */ j("div", { className: "content-stretch flex items-center justify-center px-[2px] py-[5px] relative rounded-[5px] shrink-0 size-[40px]", "data-node-id": "411:3938", "data-name": "Chevron", children: /* @__PURE__ */ j("div", { className: "relative shrink-0 size-[20px]", "data-node-id": "411:3939", "data-name": "chevron left", children: /* @__PURE__ */ j("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: ps }) }) })
  ] });
}
function hs({ className: t }) {
  return /* @__PURE__ */ j("div", { className: t || "h-[40px] relative w-[290px]", "data-node-id": "411:3940", "data-name": "Pagination", children: /* @__PURE__ */ f6("div", { className: "absolute content-stretch flex gap-[10px] items-start left-0 top-0", "data-node-id": "411:3941", children: [
    /* @__PURE__ */ j("div", { className: "content-stretch flex items-start relative shrink-0", "data-node-id": "411:3942", "data-name": "Pagination Numbers unit", children: /* @__PURE__ */ j("div", { className: "content-stretch flex items-center justify-center px-[2px] py-[5px] relative rounded-[5px] shrink-0 size-[40px]", "data-node-id": "I411:3942;411:3938", "data-name": "Chevron", children: /* @__PURE__ */ j(C6, { "data-node-id": "I411:3942;411:3939", "data-name": "chevron left", children: /* @__PURE__ */ j(ds, {}) }) }) }),
    /* @__PURE__ */ j(fs, { className: "content-stretch flex items-start relative shrink-0", variant: "Selected" }),
    /* @__PURE__ */ j("div", { className: "content-stretch flex items-start relative shrink-0", "data-node-id": "411:3944", "data-name": "Pagination Numbers unit", children: /* @__PURE__ */ j("div", { className: "backdrop-blur-[15px] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[100px] shrink-0 size-[40px]", "data-node-id": "I411:3944;411:3929", "data-name": "Number", children: /* @__PURE__ */ j("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I411:3944;411:3930", children: "2" }) }) }),
    /* @__PURE__ */ j("div", { className: "content-stretch flex items-start relative shrink-0", "data-node-id": "411:3945", "data-name": "Pagination Numbers unit", children: /* @__PURE__ */ j("div", { className: "backdrop-blur-[15px] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[100px] shrink-0 size-[40px]", "data-node-id": "I411:3945;411:3929", "data-name": "Number", children: /* @__PURE__ */ j("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I411:3945;411:3930", children: "3" }) }) }),
    /* @__PURE__ */ j("div", { className: "content-stretch flex items-start relative shrink-0", "data-node-id": "411:3946", "data-name": "Pagination Numbers unit", children: /* @__PURE__ */ j("div", { className: "backdrop-blur-[15px] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[100px] shrink-0 size-[40px]", "data-node-id": "I411:3946;411:3929", "data-name": "Number", children: /* @__PURE__ */ j("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I411:3946;411:3930", children: "4" }) }) }),
    /* @__PURE__ */ j("div", { className: "content-stretch flex items-start relative shrink-0", "data-node-id": "411:3947", "data-name": "Pagination Numbers unit", children: /* @__PURE__ */ j("div", { className: "content-stretch flex items-center justify-center px-[2px] py-[5px] relative rounded-[5px] shrink-0 size-[40px]", "data-node-id": "I411:3947;411:3935", "data-name": "Chevron", children: /* @__PURE__ */ j(C6, { "data-node-id": "I411:3947;411:3936", "data-name": "chevron right", children: /* @__PURE__ */ j(ls, {}) }) }) })
  ] }) });
}
var vs = [];
function $2(t) {
  if (!q2(t)) return t;
  let e = t;
  return typeof e.type == "function" ? $2(e.type(e.props)) : j5(e, {}, X2.map(e.props.children, $2));
}
function c6(t) {
  let e = String(t.props["data-node-id"] || t.props["data-figma-layer"] || t.props.id || "");
  return e.startsWith("node-") ? e.slice(5).replaceAll("_", ":") : e;
}
function d6(t) {
  let e = t.glyphBounds;
  return /* @__PURE__ */ j("img", { alt: "", src: t.sourceAssetUrl, style: { position: "absolute", left: e.x, top: e.y, width: e.width, height: e.height, maxWidth: "none" } });
}
function p6(t, e) {
  if (!q2(t)) return t;
  let a = t, r = X2.map(a.props.children, (o) => p6(o, a));
  for (let o of vs) {
    let i = o.childBounds;
    if (o.kind === "replace-source-slot-content") {
      if (c6(a) !== o.childSourceId) continue;
      let c = /(?:^|\s)(?:flex|inline-flex)(?:\s|$)/.test(e?.props.className || "");
      return j5(a, { "data-web-restored-glyph": o.glyphNodeId, style: { ...a.props.style, position: c ? "relative" : "absolute", ...c ? {} : { left: i.x, top: i.y }, width: i.width, height: i.height } }, d6(o));
    }
    if (c6(a) !== o.parentSourceId) continue;
    let n = o.kind !== "append-source-flex-child", L = /* @__PURE__ */ j("div", { "data-node-id": o.childSourceId, "data-web-restored-glyph": o.glyphNodeId, style: { position: n ? "absolute" : "relative", ...n ? { left: i.x, top: i.y } : {}, width: i.width, height: i.height, flexShrink: 0 }, children: d6(o) }, o.childSourceId);
    r = [...r || [], L];
  }
  return j5(a, {}, r);
}
function l0(t = {}) {
  return p6($2(hs(t)));
}

// aurora-web-visual:414:5203
import { Children as K2, cloneElement as _5, isValidElement as t3 } from "react";
import { jsx as Y, jsxs as Zs } from "react/jsx-runtime";
var gs = (t) => t.trim().replace(/[^a-zA-Z0-9]+(.)?/g, (e, a) => a ? a.toUpperCase() : "").replace(/^./, (e) => e.toLowerCase());
function x6(t, e, a) {
  let r = Object.keys(t[0].values), o = Object.fromEntries(Object.entries(a).filter(([i]) => r.some((n) => i === n || i === gs(n))));
  return c1({ name: "Explicit approved App source", variants: t, defaultNodeId: e }, o);
}
var xs = { "I414:5183;411:3939": { width: 20, height: 20 }, "I414:5188;411:3936": { width: 20, height: 20 } }, us = {};
function h6({ children: t, ...e }) {
  let a = e["data-node-id"], r = xs[a];
  return /* @__PURE__ */ Y("div", { ...e, style: { display: "block", flexShrink: 0, ...r, ...e.style }, children: K2.map(t, (o) => t3(o) ? _5(o, { ...us[a] || {}, style: { width: "100%", height: "100%", ...o.props.style } }) : o) });
}
var Ms = (t = {}) => {
  let e = x6([{ nodeId: "4410:29369", width: 24, height: 24, src: "data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZGlzcGxheTpibG9jaztvdmVyZmxvdzp2aXNpYmxlIiBmb2N1c2FibGU9ImZhbHNlIj48ZyBkYXRhLW5vZGUtaWQ9IjQ0MTA6MjkzNjkiIGRhdGEtaW5zdGFuY2UtcGF0aD0iNDQxMDoyOTM2OSIgZGF0YS1uYW1lPSJjaGV2cm9uIGxlZnQiIG9wYWNpdHk9IjEiPjxnPjxnIGRhdGEtbm9kZS1pZD0iNzg2ODo1MTg5MyIgZGF0YS1pbnN0YW5jZS1wYXRoPSI0NDEwOjI5MzY5Lzc4Njg6NTE4OTMiIGRhdGEtbmFtZT0iUGF0aCAoU3Ryb2tlKSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSA3LjUgNCkiIG9wYWNpdHk9IjEiPjxwYXRoIGQ9Ik04LjcwNzEwNjU5MDI3MDk5NiAwLjI5Mjg5MzIzMDkxNTA2OTZDOS4wOTc2MzA1MDA3OTM0NTcgMC42ODM0MTc0OTkwNjUzOTkyIDkuMDk3NjMwNTAwNzkzNDU3IDEuMzE2NTgyNTYwNTM5MjQ1NiA4LjcwNzEwNjU5MDI3MDk5NiAxLjcwNzEwNjgyODY4OTU3NTJMMi40MTQyMTM2NTczNzkxNTA0IDcuOTk5OTk5NTIzMTYyODQyTDguNzA3MTA2NTkwMjcwOTk2IDE0LjI5Mjg5MjQ1NjA1NDY4OEM5LjA5NzYzMDUwMDc5MzQ1NyAxNC42ODM0MTczMjAyNTE0NjUgOS4wOTc2MzA1MDA3OTM0NTcgMTUuMzE2NTgxNzI2MDc0MjE5IDguNzA3MTA2NTkwMjcwOTk2IDE1LjcwNzEwNjU5MDI3MDk5NkM4LjMxNjU4MTcyNjA3NDIxOSAxNi4wOTc2Mjk1NDcxMTkxNCA3LjY4MzQxNzMyMDI1MTQ2NSAxNi4wOTc2Mjk1NDcxMTkxNCA3LjI5Mjg5MjkzMjg5MTg0NiAxNS43MDcxMDY1OTAyNzA5OTZMMC4yOTI4OTMyMzA5MTUwNjk2IDguNzA3MTA2NTkwMjcwOTk2Qy0wLjA5NzYzMTA5NjgzOTkwNDc5IDguMzE2NTgxNzI2MDc0MjE5IC0wLjA5NzYzMTA5NjgzOTkwNDc5IDcuNjgzNDE3MzIwMjUxNDY1IDAuMjkyODkzMjMwOTE1MDY5NiA3LjI5Mjg5MjkzMjg5MTg0Nkw3LjI5Mjg5MjkzMjg5MTg0NiAwLjI5Mjg5MzIzMDkxNTA2OTZDNy42ODM0MTczMjAyNTE0NjUgLTAuMDk3NjMxMDk2ODM5OTA0NzkgOC4zMTY1ODE3MjYwNzQyMTkgLTAuMDk3NjMxMDk2ODM5OTA0NzkgOC43MDcxMDY1OTAyNzA5OTYgMC4yOTI4OTMyMzA5MTUwNjk2WiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwxKSIgb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PGc+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==", values: {} }], "4410:29369", t);
  return /* @__PURE__ */ Y("img", { alt: "", "data-linked-source-node": e.nodeId, src: e.src, className: t.className, style: { display: "block", width: "100%", height: "100%", ...t.style } });
}, bs = (t = {}) => {
  let e = x6([{ nodeId: "4410:29374", width: 24, height: 24, src: "data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZGlzcGxheTpibG9jaztvdmVyZmxvdzp2aXNpYmxlIiBmb2N1c2FibGU9ImZhbHNlIj48ZyBkYXRhLW5vZGUtaWQ9IjQ0MTA6MjkzNzQiIGRhdGEtaW5zdGFuY2UtcGF0aD0iNDQxMDoyOTM3NCIgZGF0YS1uYW1lPSJjaGV2cm9uIHJpZ2h0IiBvcGFjaXR5PSIxIj48Zz48ZyBkYXRhLW5vZGUtaWQ9Ijc4Njg6NTE1MzciIGRhdGEtaW5zdGFuY2UtcGF0aD0iNDQxMDoyOTM3NC83ODY4OjUxNTM3IiBkYXRhLW5hbWU9IlBhdGggKFN0cm9rZSkiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNy41IDQpIiBvcGFjaXR5PSIxIj48cGF0aCBkPSJNMC4yOTI4OTMyMzA5MTUwNjk2IDAuMjkyODkzMjMwOTE1MDY5NkMwLjY4MzQxNzQ5OTA2NTM5OTIgLTAuMDk3NjMxMDk2ODM5OTA0NzkgMS4zMTY1ODI1NjA1MzkyNDU2IC0wLjA5NzYzMTA5NjgzOTkwNDc5IDEuNzA3MTA2ODI4Njg5NTc1MiAwLjI5Mjg5MzIzMDkxNTA2OTZMOC43MDcxMDY1OTAyNzA5OTYgNy4yOTI4OTI5MzI4OTE4NDZDOS4wOTc2MzA1MDA3OTM0NTcgNy42ODM0MTczMjAyNTE0NjUgOS4wOTc2MzA1MDA3OTM0NTcgOC4zMTY1ODE3MjYwNzQyMTkgOC43MDcxMDY1OTAyNzA5OTYgOC43MDcxMDY1OTAyNzA5OTZMMS43MDcxMDY4Mjg2ODk1NzUyIDE1LjcwNzEwNjU5MDI3MDk5NkMxLjMxNjU4MjU2MDUzOTI0NTYgMTYuMDk3NjI5NTQ3MTE5MTQgMC42ODM0MTc0OTkwNjUzOTkyIDE2LjA5NzYyOTU0NzExOTE0IDAuMjkyODkzMjMwOTE1MDY5NiAxNS43MDcxMDY1OTAyNzA5OTZDLTAuMDk3NjMxMDk2ODM5OTA0NzkgMTUuMzE2NTgxNzI2MDc0MjE5IC0wLjA5NzYzMTA5NjgzOTkwNDc5IDE0LjY4MzQxNzMyMDI1MTQ2NSAwLjI5Mjg5MzIzMDkxNTA2OTYgMTQuMjkyODkyNDU2MDU0Njg4TDYuNTg1Nzg1ODY1NzgzNjkxIDcuOTk5OTk5NTIzMTYyODQyTDAuMjkyODkzMjMwOTE1MDY5NiAxLjcwNzEwNjgyODY4OTU3NTJDLTAuMDk3NjMxMDk2ODM5OTA0NzkgMS4zMTY1ODI1NjA1MzkyNDU2IC0wLjA5NzYzMTA5NjgzOTkwNDc5IDAuNjgzNDE3NDk5MDY1Mzk5MiAwLjI5Mjg5MzIzMDkxNTA2OTYgMC4yOTI4OTMyMzA5MTUwNjk2WiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwxKSIgb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PGc+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==", values: {} }], "4410:29374", t);
  return /* @__PURE__ */ Y("img", { alt: "", "data-linked-source-node": e.nodeId, src: e.src, className: t.className, style: { display: "block", width: "100%", height: "100%", ...t.style } });
};
function ys({ className: t }) {
  return /* @__PURE__ */ Y("div", { className: t || "h-[40px] relative w-[290px]", "data-node-id": "414:5203", "data-name": "Pagination_Dweb", children: /* @__PURE__ */ Zs("div", { className: "absolute content-stretch flex gap-[10px] items-start left-0 top-0", "data-node-id": "414:5182", children: [
    /* @__PURE__ */ Y("div", { className: "content-stretch flex items-start relative shrink-0", "data-node-id": "414:5183", "data-name": "Pagination Numbers unit", children: /* @__PURE__ */ Y("div", { className: "content-stretch flex items-center justify-center px-[2px] py-[5px] relative rounded-[5px] shrink-0 size-[40px]", "data-node-id": "I414:5183;411:3938", "data-name": "Chevron", children: /* @__PURE__ */ Y(h6, { "data-node-id": "I414:5183;411:3939", "data-name": "chevron left", children: /* @__PURE__ */ Y(Ms, {}) }) }) }),
    /* @__PURE__ */ Y("div", { className: "content-stretch flex items-start relative shrink-0", "data-node-id": "414:5184", "data-name": "Pagination Numbers unit", children: /* @__PURE__ */ Y("div", { className: "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[100px] shrink-0 size-[40px]", "data-node-id": "I414:5184;411:3932", "data-name": "Number", children: /* @__PURE__ */ Y("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-center text-white uppercase whitespace-nowrap", "data-node-id": "I414:5184;411:3933", style: { fontFeatureSettings: '"cpsp" 1' }, children: "1" }) }) }),
    /* @__PURE__ */ Y("div", { className: "content-stretch flex items-start relative shrink-0", "data-node-id": "414:5185", "data-name": "Pagination Numbers unit", children: /* @__PURE__ */ Y("div", { className: "backdrop-blur-[15px] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[100px] shrink-0 size-[40px]", "data-node-id": "I414:5185;411:3929", "data-name": "Number", children: /* @__PURE__ */ Y("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-center text-white uppercase whitespace-nowrap", "data-node-id": "I414:5185;411:3930", style: { fontFeatureSettings: '"cpsp" 1' }, children: "2" }) }) }),
    /* @__PURE__ */ Y("div", { className: "content-stretch flex items-start relative shrink-0", "data-node-id": "414:5186", "data-name": "Pagination Numbers unit", children: /* @__PURE__ */ Y("div", { className: "backdrop-blur-[15px] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[100px] shrink-0 size-[40px]", "data-node-id": "I414:5186;411:3929", "data-name": "Number", children: /* @__PURE__ */ Y("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-center text-white uppercase whitespace-nowrap", "data-node-id": "I414:5186;411:3930", style: { fontFeatureSettings: '"cpsp" 1' }, children: "3" }) }) }),
    /* @__PURE__ */ Y("div", { className: "content-stretch flex items-start relative shrink-0", "data-node-id": "414:5187", "data-name": "Pagination Numbers unit", children: /* @__PURE__ */ Y("div", { className: "backdrop-blur-[15px] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[100px] shrink-0 size-[40px]", "data-node-id": "I414:5187;411:3929", "data-name": "Number", children: /* @__PURE__ */ Y("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-center text-white uppercase whitespace-nowrap", "data-node-id": "I414:5187;411:3930", style: { fontFeatureSettings: '"cpsp" 1' }, children: "4" }) }) }),
    /* @__PURE__ */ Y("div", { className: "content-stretch flex items-start relative shrink-0", "data-node-id": "414:5188", "data-name": "Pagination Numbers unit", children: /* @__PURE__ */ Y("div", { className: "content-stretch flex items-center justify-center px-[2px] py-[5px] relative rounded-[5px] shrink-0 size-[40px]", "data-node-id": "I414:5188;411:3935", "data-name": "Chevron", children: /* @__PURE__ */ Y(h6, { "data-node-id": "I414:5188;411:3936", "data-name": "chevron right", children: /* @__PURE__ */ Y(bs, {}) }) }) })
  ] }) });
}
var ms = [];
function J2(t) {
  if (!t3(t)) return t;
  let e = t;
  return typeof e.type == "function" ? J2(e.type(e.props)) : _5(e, {}, K2.map(e.props.children, J2));
}
function v6(t) {
  let e = String(t.props["data-node-id"] || t.props["data-figma-layer"] || t.props.id || "");
  return e.startsWith("node-") ? e.slice(5).replaceAll("_", ":") : e;
}
function g6(t) {
  let e = t.glyphBounds;
  return /* @__PURE__ */ Y("img", { alt: "", src: t.sourceAssetUrl, style: { position: "absolute", left: e.x, top: e.y, width: e.width, height: e.height, maxWidth: "none" } });
}
function u6(t, e) {
  if (!t3(t)) return t;
  let a = t, r = K2.map(a.props.children, (o) => u6(o, a));
  for (let o of ms) {
    let i = o.childBounds;
    if (o.kind === "replace-source-slot-content") {
      if (v6(a) !== o.childSourceId) continue;
      let c = /(?:^|\s)(?:flex|inline-flex)(?:\s|$)/.test(e?.props.className || "");
      return _5(a, { "data-web-restored-glyph": o.glyphNodeId, style: { ...a.props.style, position: c ? "relative" : "absolute", ...c ? {} : { left: i.x, top: i.y }, width: i.width, height: i.height } }, g6(o));
    }
    if (v6(a) !== o.parentSourceId) continue;
    let n = o.kind !== "append-source-flex-child", L = /* @__PURE__ */ Y("div", { "data-node-id": o.childSourceId, "data-web-restored-glyph": o.glyphNodeId, style: { position: n ? "absolute" : "relative", ...n ? { left: i.x, top: i.y } : {}, width: i.width, height: i.height, flexShrink: 0 }, children: g6(o) }, o.childSourceId);
    r = [...r || [], L];
  }
  return _5(a, {}, r);
}
function p0(t = {}) {
  return u6(J2(ys(t)));
}

// aurora-web-visual:414:4617
import { Children as a3, cloneElement as B5, isValidElement as o3 } from "react";
import { jsx as V, jsxs as Is } from "react/jsx-runtime";
var Ss = (t) => t.trim().replace(/[^a-zA-Z0-9]+(.)?/g, (e, a) => a ? a.toUpperCase() : "").replace(/^./, (e) => e.toLowerCase());
function Ps(t, e, a) {
  let r = Object.keys(t[0].values), o = Object.fromEntries(Object.entries(a).filter(([i]) => r.some((n) => i === n || i === Ss(n))));
  return c1({ name: "Explicit approved App source", variants: t, defaultNodeId: e }, o);
}
var zs = { "414:4590": { width: 40, height: 40, transform: "scaleX(-1)" }, "414:4595": { width: 40, height: 40 } }, Ns = {};
function M6({ children: t, ...e }) {
  let a = e["data-node-id"], r = zs[a];
  return /* @__PURE__ */ V("div", { ...e, style: { display: "block", flexShrink: 0, ...r, ...e.style }, children: a3.map(t, (o) => o3(o) ? B5(o, { ...Ns[a] || {}, style: { width: "100%", height: "100%", ...o.props.style } }) : o) });
}
var b6 = (t = {}) => {
  let e = Ps([{ nodeId: "20777:47767", width: 65, height: 65, src: "data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NSIgaGVpZ2h0PSI2NSIgdmlld0JveD0iMCAwIDY1IDY1IiBzdHlsZT0iZGlzcGxheTpibG9jaztvdmVyZmxvdzp2aXNpYmxlIiBmb2N1c2FibGU9ImZhbHNlIj48ZyBkYXRhLW5vZGUtaWQ9IjIwNzc3OjQ3NzY3IiBkYXRhLWluc3RhbmNlLXBhdGg9IjIwNzc3OjQ3NzY3IiBkYXRhLW5hbWU9IlByb3BlcnR5IDE9SG92ZXIiIG9wYWNpdHk9IjEiPjxnPjxnIGRhdGEtbm9kZS1pZD0iMjA3Nzc6NDc3NjgiIGRhdGEtaW5zdGFuY2UtcGF0aD0iMjA3Nzc6NDc3NjcvMjA3Nzc6NDc3NjgiIGRhdGEtbmFtZT0iRWxsaXBzZSAxMDQiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMCAwKSIgb3BhY2l0eT0iMC4zMDAwMDAwMTE5MjA5Mjg5NiI+PHBhdGggZD0iTTY1IDMyLjVDNjUgNTAuNDQ5MjUzMDgyMjc1MzkgNTAuNDQ5MjUzMDgyMjc1MzkgNjUgMzIuNSA2NUMxNC41NTA3NDU5NjQwNTAyOTMgNjUgMCA1MC40NDkyNTMwODIyNzUzOSAwIDMyLjVDMCAxNC41NTA3NDU5NjQwNTAyOTMgMTQuNTUwNzQ1OTY0MDUwMjkzIDAgMzIuNSAwQzUwLjQ0OTI1MzA4MjI3NTM5IDAgNjUgMTQuNTUwNzQ1OTY0MDUwMjkzIDY1IDMyLjVaIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDEpIiBvcGFjaXR5PSIwLjgwMDAwMDAxMTkyMDkyOSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+PGc+PC9nPjwvZz48ZyBkYXRhLW5vZGUtaWQ9IjIwNzc3OjQ3NzY5IiBkYXRhLWluc3RhbmNlLXBhdGg9IjIwNzc3OjQ3NzY3LzIwNzc3OjQ3NzY5IiBkYXRhLW5hbWU9IlZlY3RvciA2OSIgdHJhbnNmb3JtPSJtYXRyaXgoLTQuMzcxMTM4ODI4NjczNzkzZS04IC0xIDEgLTQuMzcxMTM4ODI4NjczNzkzZS04IDMwIDQzLjgwMDc4MTI1KSIgb3BhY2l0eT0iMSI+PHBhdGggZD0iTTEuMDYwNjYwMTIzODI1MDczMiAtMS4wNjA2NjAxMjM4MjUwNzMyQzAuNDc0ODczNzIxNTk5NTc4ODYgLTEuNjQ2NDQ2NTg1NjU1MjEyNCAtMC40NzQ4NzM3MjE1OTk1Nzg4NiAtMS42NDY0NDY1ODU2NTUyMTI0IC0xLjA2MDY2MDEyMzgyNTA3MzIgLTEuMDYwNjYwMTIzODI1MDczMkMtMS42NDY0NDY1ODU2NTUyMTI0IC0wLjQ3NDg3MzcyMTU5OTU3ODg2IC0xLjY0NjQ0NjU4NTY1NTIxMjQgMC40NzQ4NzM3MjE1OTk1Nzg4NiAtMS4wNjA2NjAxMjM4MjUwNzMyIDEuMDYwNjYwMTIzODI1MDczMkwxLjA2MDY2MDEyMzgyNTA3MzIgLTEuMDYwNjYwMTIzODI1MDczMlpNMTAuMzk5OTk5NjE4NTMwMjczIDEwLjM5OTk5OTYxODUzMDI3M0w5LjMzOTMzOTI1NjI4NjYyMSAxMS40NjA2NTk5ODA3NzM5MjZDOS45MjUxMjYwNzU3NDQ2MjkgMTIuMDQ2NDQ1ODQ2NTU3NjE3IDEwLjg3NDg3MzE2MTMxNTkxOCAxMi4wNDY0NDU4NDY1NTc2MTcgMTEuNDYwNjU5OTgwNzczOTI2IDExLjQ2MDY1OTk4MDc3MzkyNkwxMC4zOTk5OTk2MTg1MzAyNzMgMTAuMzk5OTk5NjE4NTMwMjczWk0yMS44NjA2NTg2NDU2Mjk4ODMgMS4wNjA2NjAxMjM4MjUwNzMyQzIyLjQ0NjQ0NTQ2NTA4Nzg5IDAuNDc0ODczNzIxNTk5NTc4ODYgMjIuNDQ2NDQ1NDY1MDg3ODkgLTAuNDc0ODczNzIxNTk5NTc4ODYgMjEuODYwNjU4NjQ1NjI5ODgzIC0xLjA2MDY2MDEyMzgyNTA3MzJDMjEuMjc0ODczNzMzNTIwNTA4IC0xLjY0NjQ0NjU4NTY1NTIxMjQgMjAuMzI1MTI0NzQwNjAwNTg2IC0xLjY0NjQ0NjU4NTY1NTIxMjQgMTkuNzM5MzM5ODI4NDkxMjEgLTEuMDYwNjYwMTIzODI1MDczMkwyMS44NjA2NTg2NDU2Mjk4ODMgMS4wNjA2NjAxMjM4MjUwNzMyWk0tMS4wNjA2NjAxMjM4MjUwNzMyIDEuMDYwNjYwMTIzODI1MDczMkw5LjMzOTMzOTI1NjI4NjYyMSAxMS40NjA2NTk5ODA3NzM5MjZMMTEuNDYwNjU5OTgwNzczOTI2IDkuMzM5MzM5MjU2Mjg2NjIxTDEuMDYwNjYwMTIzODI1MDczMiAtMS4wNjA2NjAxMjM4MjUwNzMyTC0xLjA2MDY2MDEyMzgyNTA3MzIgMS4wNjA2NjAxMjM4MjUwNzMyWk0xMS40NjA2NTk5ODA3NzM5MjYgMTEuNDYwNjU5OTgwNzczOTI2TDIxLjg2MDY1ODY0NTYyOTg4MyAxLjA2MDY2MDEyMzgyNTA3MzJMMTkuNzM5MzM5ODI4NDkxMjEgLTEuMDYwNjYwMTIzODI1MDczMkw5LjMzOTMzOTI1NjI4NjYyMSA5LjMzOTMzOTI1NjI4NjYyMUwxMS40NjA2NTk5ODA3NzM5MjYgMTEuNDYwNjU5OTgwNzczOTI2WiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwxKSIgb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+PGc+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==", values: { "Property 1": "Hover" } }, { nodeId: "20777:47770", width: 65, height: 65, src: "data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NSIgaGVpZ2h0PSI2NSIgdmlld0JveD0iMCAwIDY1IDY1IiBzdHlsZT0iZGlzcGxheTpibG9jaztvdmVyZmxvdzp2aXNpYmxlIiBmb2N1c2FibGU9ImZhbHNlIj48ZyBkYXRhLW5vZGUtaWQ9IjIwNzc3OjQ3NzcwIiBkYXRhLWluc3RhbmNlLXBhdGg9IjIwNzc3OjQ3NzcwIiBkYXRhLW5hbWU9IlByb3BlcnR5IDE9RGVmYXVsdCIgb3BhY2l0eT0iMSI+PGc+PGcgZGF0YS1ub2RlLWlkPSIyMDc3Nzo0Nzc3MSIgZGF0YS1pbnN0YW5jZS1wYXRoPSIyMDc3Nzo0Nzc3MC8yMDc3Nzo0Nzc3MSIgZGF0YS1uYW1lPSJFbGxpcHNlIDEwNCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAwIDApIiBvcGFjaXR5PSIwLjMwMDAwMDAxMTkyMDkyODk2Ij48cGF0aCBkPSJNNjUgMzIuNUM2NSA1MC40NDkyNTMwODIyNzUzOSA1MC40NDkyNTMwODIyNzUzOSA2NSAzMi41IDY1QzE0LjU1MDc0NTk2NDA1MDI5MyA2NSAwIDUwLjQ0OTI1MzA4MjI3NTM5IDAgMzIuNUMwIDE0LjU1MDc0NTk2NDA1MDI5MyAxNC41NTA3NDU5NjQwNTAyOTMgMCAzMi41IDBDNTAuNDQ5MjUzMDgyMjc1MzkgMCA2NSAxNC41NTA3NDU5NjQwNTAyOTMgNjUgMzIuNVoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMSkiIG9wYWNpdHk9IjAuNjAwMDAwMDIzODQxODU3OSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+PGc+PC9nPjwvZz48ZyBkYXRhLW5vZGUtaWQ9IjIwNzc3OjQ3NzcyIiBkYXRhLWluc3RhbmNlLXBhdGg9IjIwNzc3OjQ3NzcwLzIwNzc3OjQ3NzcyIiBkYXRhLW5hbWU9IlZlY3RvciA2OSIgdHJhbnNmb3JtPSJtYXRyaXgoLTQuMzcxMTM4ODI4NjczNzkzZS04IC0xIDEgLTQuMzcxMTM4ODI4NjczNzkzZS04IDMwIDQzLjgwMDc4MTI1KSIgb3BhY2l0eT0iMSI+PHBhdGggZD0iTTEuMDYwNjYwMTIzODI1MDczMiAtMS4wNjA2NjAxMjM4MjUwNzMyQzAuNDc0ODczNzIxNTk5NTc4ODYgLTEuNjQ2NDQ2NTg1NjU1MjEyNCAtMC40NzQ4NzM3MjE1OTk1Nzg4NiAtMS42NDY0NDY1ODU2NTUyMTI0IC0xLjA2MDY2MDEyMzgyNTA3MzIgLTEuMDYwNjYwMTIzODI1MDczMkMtMS42NDY0NDY1ODU2NTUyMTI0IC0wLjQ3NDg3MzcyMTU5OTU3ODg2IC0xLjY0NjQ0NjU4NTY1NTIxMjQgMC40NzQ4NzM3MjE1OTk1Nzg4NiAtMS4wNjA2NjAxMjM4MjUwNzMyIDEuMDYwNjYwMTIzODI1MDczMkwxLjA2MDY2MDEyMzgyNTA3MzIgLTEuMDYwNjYwMTIzODI1MDczMlpNMTAuMzk5OTk5NjE4NTMwMjczIDEwLjM5OTk5OTYxODUzMDI3M0w5LjMzOTMzOTI1NjI4NjYyMSAxMS40NjA2NTk5ODA3NzM5MjZDOS45MjUxMjYwNzU3NDQ2MjkgMTIuMDQ2NDQ1ODQ2NTU3NjE3IDEwLjg3NDg3MzE2MTMxNTkxOCAxMi4wNDY0NDU4NDY1NTc2MTcgMTEuNDYwNjU5OTgwNzczOTI2IDExLjQ2MDY1OTk4MDc3MzkyNkwxMC4zOTk5OTk2MTg1MzAyNzMgMTAuMzk5OTk5NjE4NTMwMjczWk0yMS44NjA2NTg2NDU2Mjk4ODMgMS4wNjA2NjAxMjM4MjUwNzMyQzIyLjQ0NjQ0NTQ2NTA4Nzg5IDAuNDc0ODczNzIxNTk5NTc4ODYgMjIuNDQ2NDQ1NDY1MDg3ODkgLTAuNDc0ODczNzIxNTk5NTc4ODYgMjEuODYwNjU4NjQ1NjI5ODgzIC0xLjA2MDY2MDEyMzgyNTA3MzJDMjEuMjc0ODczNzMzNTIwNTA4IC0xLjY0NjQ0NjU4NTY1NTIxMjQgMjAuMzI1MTI0NzQwNjAwNTg2IC0xLjY0NjQ0NjU4NTY1NTIxMjQgMTkuNzM5MzM5ODI4NDkxMjEgLTEuMDYwNjYwMTIzODI1MDczMkwyMS44NjA2NTg2NDU2Mjk4ODMgMS4wNjA2NjAxMjM4MjUwNzMyWk0tMS4wNjA2NjAxMjM4MjUwNzMyIDEuMDYwNjYwMTIzODI1MDczMkw5LjMzOTMzOTI1NjI4NjYyMSAxMS40NjA2NTk5ODA3NzM5MjZMMTEuNDYwNjU5OTgwNzczOTI2IDkuMzM5MzM5MjU2Mjg2NjIxTDEuMDYwNjYwMTIzODI1MDczMiAtMS4wNjA2NjAxMjM4MjUwNzMyTC0xLjA2MDY2MDEyMzgyNTA3MzIgMS4wNjA2NjAxMjM4MjUwNzMyWk0xMS40NjA2NTk5ODA3NzM5MjYgMTEuNDYwNjU5OTgwNzczOTI2TDIxLjg2MDY1ODY0NTYyOTg4MyAxLjA2MDY2MDEyMzgyNTA3MzJMMTkuNzM5MzM5ODI4NDkxMjEgLTEuMDYwNjYwMTIzODI1MDczMkw5LjMzOTMzOTI1NjI4NjYyMSA5LjMzOTMzOTI1NjI4NjYyMUwxMS40NjA2NTk5ODA3NzM5MjYgMTEuNDYwNjU5OTgwNzczOTI2WiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwxKSIgb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+PGc+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==", values: { "Property 1": "Default" } }], "20777:47770", t);
  return /* @__PURE__ */ V("img", { alt: "", "data-linked-source-node": e.nodeId, src: e.src, className: t.className, style: { display: "block", width: "100%", height: "100%", ...t.style } });
};
function As({ className: t }) {
  return /* @__PURE__ */ V("div", { className: t || "h-[40px] relative w-[545px]", "data-node-id": "414:4617", "data-name": "Pagination_Web", children: /* @__PURE__ */ Is("div", { className: "absolute content-stretch flex gap-[20px] items-start left-0 top-0", "data-node-id": "414:4589", children: [
    /* @__PURE__ */ V(M6, { "data-node-id": "414:4590", children: /* @__PURE__ */ V(b6, { property1: "Default" }) }),
    /* @__PURE__ */ V("div", { className: "content-stretch flex items-start relative shrink-0", "data-node-id": "414:4591", "data-name": "Pagination Numbers unit", children: /* @__PURE__ */ V("div", { className: "backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[100px] shrink-0 size-[40px]", "data-node-id": "I414:4591;411:3932", "data-name": "Number", children: /* @__PURE__ */ V("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[18px] text-center text-white uppercase whitespace-nowrap", "data-node-id": "I414:4591;411:3933", children: "1" }) }) }),
    /* @__PURE__ */ V("div", { className: "content-stretch flex items-start relative shrink-0", "data-node-id": "414:4592", "data-name": "Pagination Numbers unit", children: /* @__PURE__ */ V("div", { className: "backdrop-blur-[15px] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[100px] shrink-0 size-[40px]", "data-node-id": "I414:4592;411:3929", "data-name": "Number", children: /* @__PURE__ */ V("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[18px] text-center text-white uppercase whitespace-nowrap", "data-node-id": "I414:4592;411:3930", children: "2" }) }) }),
    /* @__PURE__ */ V("div", { className: "content-stretch flex items-start relative shrink-0", "data-node-id": "414:4593", "data-name": "Pagination Numbers unit", children: /* @__PURE__ */ V("div", { className: "backdrop-blur-[15px] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[100px] shrink-0 size-[40px]", "data-node-id": "I414:4593;411:3929", "data-name": "Number", children: /* @__PURE__ */ V("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[18px] text-center text-white uppercase whitespace-nowrap", "data-node-id": "I414:4593;411:3930", children: "3" }) }) }),
    /* @__PURE__ */ V("div", { className: "content-stretch flex items-start relative shrink-0", "data-node-id": "414:4594", "data-name": "Pagination Numbers unit", children: /* @__PURE__ */ V("div", { className: "backdrop-blur-[15px] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[100px] shrink-0 size-[40px]", "data-node-id": "I414:4594;411:3929", "data-name": "Number", children: /* @__PURE__ */ V("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[18px] text-center text-white uppercase whitespace-nowrap", "data-node-id": "I414:4594;411:3930", children: "4" }) }) }),
    /* @__PURE__ */ V("div", { className: "content-stretch flex items-start relative shrink-0", "data-node-id": "414:4608", "data-name": "Pagination Numbers unit", children: /* @__PURE__ */ V("div", { className: "backdrop-blur-[15px] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[100px] shrink-0 size-[40px]", "data-node-id": "I414:4608;411:3929", "data-name": "Number", children: /* @__PURE__ */ V("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[18px] text-center text-white uppercase whitespace-nowrap", "data-node-id": "I414:4608;411:3930", children: "5" }) }) }),
    /* @__PURE__ */ V("div", { className: "content-stretch flex items-start relative shrink-0", "data-node-id": "414:4611", "data-name": "Pagination Numbers unit", children: /* @__PURE__ */ V("div", { className: "backdrop-blur-[15px] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[100px] shrink-0 size-[40px]", "data-node-id": "I414:4611;411:3929", "data-name": "Number", children: /* @__PURE__ */ V("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[18px] text-center text-white uppercase whitespace-nowrap", "data-node-id": "I414:4611;411:3930", children: "6" }) }) }),
    /* @__PURE__ */ V("div", { className: "content-stretch flex items-start relative shrink-0", "data-node-id": "414:4614", "data-name": "Pagination Numbers unit", children: /* @__PURE__ */ V("div", { className: "backdrop-blur-[15px] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[100px] shrink-0 size-[40px]", "data-node-id": "I414:4614;411:3929", "data-name": "Number", children: /* @__PURE__ */ V("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[22px] not-italic relative shrink-0 text-[18px] text-center text-white uppercase whitespace-nowrap", "data-node-id": "I414:4614;411:3930", children: "7" }) }) }),
    /* @__PURE__ */ V(M6, { "data-node-id": "414:4595", "data-name": "Arrow_2", children: /* @__PURE__ */ V(b6, { property1: "Default" }) })
  ] }) });
}
var Qs = [];
function e3(t) {
  if (!o3(t)) return t;
  let e = t;
  return typeof e.type == "function" ? e3(e.type(e.props)) : B5(e, {}, a3.map(e.props.children, e3));
}
function y6(t) {
  let e = String(t.props["data-node-id"] || t.props["data-figma-layer"] || t.props.id || "");
  return e.startsWith("node-") ? e.slice(5).replaceAll("_", ":") : e;
}
function m6(t) {
  let e = t.glyphBounds;
  return /* @__PURE__ */ V("img", { alt: "", src: t.sourceAssetUrl, style: { position: "absolute", left: e.x, top: e.y, width: e.width, height: e.height, maxWidth: "none" } });
}
function Z6(t, e) {
  if (!o3(t)) return t;
  let a = t, r = a3.map(a.props.children, (o) => Z6(o, a));
  for (let o of Qs) {
    let i = o.childBounds;
    if (o.kind === "replace-source-slot-content") {
      if (y6(a) !== o.childSourceId) continue;
      let c = /(?:^|\s)(?:flex|inline-flex)(?:\s|$)/.test(e?.props.className || "");
      return B5(a, { "data-web-restored-glyph": o.glyphNodeId, style: { ...a.props.style, position: c ? "relative" : "absolute", ...c ? {} : { left: i.x, top: i.y }, width: i.width, height: i.height } }, m6(o));
    }
    if (y6(a) !== o.parentSourceId) continue;
    let n = o.kind !== "append-source-flex-child", L = /* @__PURE__ */ V("div", { "data-node-id": o.childSourceId, "data-web-restored-glyph": o.glyphNodeId, style: { position: n ? "absolute" : "relative", ...n ? { left: i.x, top: i.y } : {}, width: i.width, height: i.height, flexShrink: 0 }, children: m6(o) }, o.childSourceId);
    r = [...r || [], L];
  }
  return B5(a, {}, r);
}
function f0(t = {}) {
  return Z6(e3(As(t)));
}

// aurora-web-visual:2:28617
import { Children as z6, cloneElement as i3, isValidElement as N6 } from "react";
import { jsx as E, jsxs as Rs } from "react/jsx-runtime";
var Y5 = new URL("./assets/36db67341d1fd72a9d8ec591.svg", import.meta.url).href, r3 = new URL("./assets/2a0c212c39aa2d26bd5c54cb.svg", import.meta.url).href;
function Ds({ className: t }) {
  return /* @__PURE__ */ Rs("div", { className: t || "h-[503.472px] relative w-[1349px]", "data-node-id": "2:28617", "data-name": "FAQs", children: [
    /* @__PURE__ */ E("div", { className: "absolute flex inset-[89.42%_1.54%_9.19%_97.47%] items-center justify-center", "data-node-id": "2:28618", style: { containerType: "size" }, children: /* @__PURE__ */ E("div", { className: "flex-none h-[100cqw] rotate-90 w-[100cqh]", children: /* @__PURE__ */ E("div", { className: "relative size-full", "data-name": "Path 11", children: /* @__PURE__ */ E("div", { className: "absolute inset-[-14.97%_-41.38%_-14.97%_-28.57%]", children: /* @__PURE__ */ E("img", { alt: "", className: "block max-w-none size-full", src: Y5 }) }) }) }) }),
    /* @__PURE__ */ E("div", { className: "absolute flex inset-[69.95%_1.54%_28.66%_97.47%] items-center justify-center", "data-node-id": "2:28619", style: { containerType: "size" }, children: /* @__PURE__ */ E("div", { className: "flex-none h-[100cqw] rotate-90 w-[100cqh]", children: /* @__PURE__ */ E("div", { className: "relative size-full", "data-name": "Path 11 Copy 3", children: /* @__PURE__ */ E("div", { className: "absolute inset-[-14.97%_-41.38%_-14.97%_-28.57%]", children: /* @__PURE__ */ E("img", { alt: "", className: "block max-w-none size-full", src: Y5 }) }) }) }) }),
    /* @__PURE__ */ E("div", { className: "absolute flex inset-[50.49%_1.54%_48.12%_97.47%] items-center justify-center", "data-node-id": "2:28620", style: { containerType: "size" }, children: /* @__PURE__ */ E("div", { className: "flex-none h-[100cqw] rotate-90 w-[100cqh]", children: /* @__PURE__ */ E("div", { className: "relative size-full", "data-name": "Path 11 Copy 4", children: /* @__PURE__ */ E("div", { className: "absolute inset-[-14.97%_-41.38%_-14.97%_-28.57%]", children: /* @__PURE__ */ E("img", { alt: "", className: "block max-w-none size-full", src: Y5 }) }) }) }) }),
    /* @__PURE__ */ E("div", { className: "absolute flex inset-[31.02%_1.54%_67.59%_97.47%] items-center justify-center", "data-node-id": "2:28621", style: { containerType: "size" }, children: /* @__PURE__ */ E("div", { className: "flex-none h-[100cqw] rotate-90 w-[100cqh]", children: /* @__PURE__ */ E("div", { className: "relative size-full", "data-name": "Path 11 Copy 5", children: /* @__PURE__ */ E("div", { className: "absolute inset-[-14.97%_-41.38%_-14.97%_-28.57%]", children: /* @__PURE__ */ E("img", { alt: "", className: "block max-w-none size-full", src: Y5 }) }) }) }) }),
    /* @__PURE__ */ E("p", { className: "[word-break:break-word] absolute font-['Inter:Bold'] font-bold inset-[0_56.49%_88.08%_2.45%] leading-[60px] not-italic text-[50px] text-center text-white tracking-[0.5px] whitespace-nowrap", "data-node-id": "2:28622", children: "Have more questions?" }),
    /* @__PURE__ */ E("div", { className: "absolute inset-[5.64%_2.08%_90.39%_90.73%]", "data-node-id": "2:28623" }),
    /* @__PURE__ */ E("ul", { className: "[word-break:break-word] absolute block font-['Inter:Medium'] font-medium inset-[27.01%_33.43%_64.65%_2.3%] leading-[0] not-italic text-[22px] text-[rgba(255,255,255,0.8)] tracking-[-0.3px]", "data-node-id": "2:28624", children: /* @__PURE__ */ E("li", { className: "list-disc ms-[33px]", children: /* @__PURE__ */ E("span", { className: "leading-[35px]", children: "What is the right pass for me?" }) }) }),
    /* @__PURE__ */ E("ul", { className: "[word-break:break-word] absolute block font-['Inter:Medium'] font-medium inset-[46.87%_33.43%_45.58%_2.3%] leading-[0] not-italic text-[22px] text-[rgba(255,255,255,0.8)] tracking-[-0.3px]", "data-node-id": "2:28625", children: /* @__PURE__ */ E("li", { className: "list-disc ms-[33px]", children: /* @__PURE__ */ E("span", { className: "leading-[35px]", children: "Will I be able to access cult centres and gyms together?" }) }) }),
    /* @__PURE__ */ E("ul", { className: "[word-break:break-word] absolute block font-['Inter:Medium'] font-medium inset-[66.34%_33.43%_26.11%_2.3%] leading-[0] not-italic text-[22px] text-[rgba(255,255,255,0.8)] tracking-[-0.3px]", "data-node-id": "2:28626", children: /* @__PURE__ */ E("li", { className: "list-disc ms-[33px]", children: /* @__PURE__ */ E("span", { className: "leading-[35px]", children: "Will I be able to access cult centres and gyms together?" }) }) }),
    /* @__PURE__ */ E("div", { className: "absolute inset-[41.41%_0_58.39%_0]", "data-node-id": "2:28627", "data-name": "Path 14", children: /* @__PURE__ */ E("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: r3 }) }),
    /* @__PURE__ */ E("div", { className: "absolute inset-[60.87%_0_38.93%_0]", "data-node-id": "2:28628", "data-name": "Path 14 Copy", children: /* @__PURE__ */ E("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: r3 }) }),
    /* @__PURE__ */ E("div", { className: "absolute inset-[80.34%_0_19.46%_0]", "data-node-id": "2:28629", "data-name": "Path 14 Copy 2", children: /* @__PURE__ */ E("img", { alt: "", className: "absolute block inset-0 max-w-none size-full", src: r3 }) }),
    /* @__PURE__ */ E("ul", { className: "[word-break:break-word] absolute block font-['Inter:Medium'] font-medium inset-[85.8%_33.43%_6.65%_2.3%] leading-[0] not-italic text-[22px] text-[rgba(255,255,255,0.8)] tracking-[-0.3px]", "data-node-id": "2:28630", children: /* @__PURE__ */ E("li", { className: "list-disc ms-[33px]", children: /* @__PURE__ */ E("span", { className: "leading-[35px]", children: "Will I be able to access cult centres and gyms together?" }) }) }),
    /* @__PURE__ */ E("p", { className: "[word-break:break-word] absolute font-['Inter:Bold'] font-bold inset-[8.82%_0.89%_86.81%_94.96%] leading-[22px] not-italic text-[14px] text-white whitespace-nowrap", "data-node-id": "2:28631", children: "SEE ALL" })
  ] });
}
var Os = [];
function n3(t) {
  if (!N6(t)) return t;
  let e = t;
  return typeof e.type == "function" ? n3(e.type(e.props)) : i3(e, {}, z6.map(e.props.children, n3));
}
function S6(t) {
  let e = String(t.props["data-node-id"] || t.props["data-figma-layer"] || t.props.id || "");
  return e.startsWith("node-") ? e.slice(5).replaceAll("_", ":") : e;
}
function P6(t) {
  let e = t.glyphBounds;
  return /* @__PURE__ */ E("img", { alt: "", src: t.sourceAssetUrl, style: { position: "absolute", left: e.x, top: e.y, width: e.width, height: e.height, maxWidth: "none" } });
}
function A6(t, e) {
  if (!N6(t)) return t;
  let a = t, r = z6.map(a.props.children, (o) => A6(o, a));
  for (let o of Os) {
    let i = o.childBounds;
    if (o.kind === "replace-source-slot-content") {
      if (S6(a) !== o.childSourceId) continue;
      let c = /(?:^|\s)(?:flex|inline-flex)(?:\s|$)/.test(e?.props.className || "");
      return i3(a, { "data-web-restored-glyph": o.glyphNodeId, style: { ...a.props.style, position: c ? "relative" : "absolute", ...c ? {} : { left: i.x, top: i.y }, width: i.width, height: i.height } }, P6(o));
    }
    if (S6(a) !== o.parentSourceId) continue;
    let n = o.kind !== "append-source-flex-child", L = /* @__PURE__ */ E("div", { "data-node-id": o.childSourceId, "data-web-restored-glyph": o.glyphNodeId, style: { position: n ? "absolute" : "relative", ...n ? { left: i.x, top: i.y } : {}, width: i.width, height: i.height, flexShrink: 0 }, children: P6(o) }, o.childSourceId);
    r = [...r || [], L];
  }
  return i3(a, {}, r);
}
function _0(t = {}) {
  return A6(n3(Ds(t)));
}

// packages/aurora-library/src/controls/web/WebAtomic.tsx
import { Children as DS, cloneElement as C8, isValidElement as OS, useId as RS, useState as wS } from "react";

// aurora-web-visual:411:3927
import { Children as D6, cloneElement as s3, isValidElement as O6 } from "react";
import { jsx as l5, jsxs as Es } from "react/jsx-runtime";
function ws({ className: t, variant: e = "< Chevron" }) {
  let a = e === "< Chevron", r = e === "Selected";
  return /* @__PURE__ */ Es("div", { className: t || "content-stretch flex items-start relative", "data-figma-layer": a ? "node-411_3937" : e === "> Chevron" ? "node-411_3934" : r ? "node-411_3931" : "node-411_3928", children: [
    ["Non Selected", "Selected"].includes(e) && /* @__PURE__ */ l5("div", { className: `backdrop-blur-[15px] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[100px] shrink-0 size-[40px] ${r ? "bg-[rgba(255,255,255,0.1)]" : ""}`, "data-figma-layer": r ? "node-411_3932" : "node-411_3929", "data-name": "Number", children: /* @__PURE__ */ l5("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-figma-layer": r ? "node-411_3933" : "node-411_3930", children: "1" }) }),
    ["> Chevron", "< Chevron"].includes(e) && /* @__PURE__ */ l5("div", { className: "content-stretch flex items-center justify-center px-[2px] py-[5px] relative rounded-[5px] shrink-0 size-[40px]", "data-figma-layer": a ? "node-411_3938" : "node-411_3935", "data-name": "Chevron" })
  ] });
}
var Ts = [{ contextNodeId: "411:3927", kind: "append-to-source-slot", parentSourceId: "411:3938", childSourceId: "411:3939", glyphNodeId: "I411:3939;7868:51893", sourceAssetUrl: new URL("./assets/25bba7262eeca6c7d2fa29d6.svg", import.meta.url).href, parentSlot: { width: 40, height: 40 }, childBounds: { x: 10, y: 10, width: 20, height: 20, name: "chevron left", evidenceFile: "figma/web/metadata/411-3939.json" }, glyphBounds: { x: 6.25, y: 3.3333332538604736, width: 7.5, height: 13.333333015441895, name: "Path (Stroke)", evidenceFile: "figma/web/metadata/411-3939.json" }, stateProps: { variant: "< Chevron" } }, { contextNodeId: "411:3927", kind: "append-to-source-slot", parentSourceId: "411:3935", childSourceId: "411:3936", glyphNodeId: "I411:3936;7868:51537", sourceAssetUrl: new URL("./assets/6adcfe877f2ffd2a6c4ee845.svg", import.meta.url).href, parentSlot: { width: 40, height: 40 }, childBounds: { x: 10, y: 10, width: 20, height: 20, name: "chevron right", evidenceFile: "figma/web/metadata/411-3934.json" }, glyphBounds: { x: 6.25, y: 3.3333332538604736, width: 7.5, height: 13.333333015441895, name: "Path (Stroke)", evidenceFile: "figma/web/metadata/411-3936.json" }, stateProps: { variant: "> Chevron" } }];
function L3(t) {
  if (!O6(t)) return t;
  let e = t;
  return typeof e.type == "function" ? L3(e.type(e.props)) : s3(e, {}, D6.map(e.props.children, L3));
}
function Q6(t) {
  let e = String(t.props["data-node-id"] || t.props["data-figma-layer"] || t.props.id || "");
  return e.startsWith("node-") ? e.slice(5).replaceAll("_", ":") : e;
}
function I6(t) {
  let e = t.glyphBounds;
  return /* @__PURE__ */ l5("img", { alt: "", src: t.sourceAssetUrl, style: { position: "absolute", left: e.x, top: e.y, width: e.width, height: e.height, maxWidth: "none" } });
}
function R6(t, e) {
  if (!O6(t)) return t;
  let a = t, r = D6.map(a.props.children, (o) => R6(o, a));
  for (let o of Ts) {
    let i = o.childBounds;
    if (o.kind === "replace-source-slot-content") {
      if (Q6(a) !== o.childSourceId) continue;
      let c = /(?:^|\s)(?:flex|inline-flex)(?:\s|$)/.test(e?.props.className || "");
      return s3(a, { "data-web-restored-glyph": o.glyphNodeId, style: { ...a.props.style, position: c ? "relative" : "absolute", ...c ? {} : { left: i.x, top: i.y }, width: i.width, height: i.height } }, I6(o));
    }
    if (Q6(a) !== o.parentSourceId) continue;
    let n = o.kind !== "append-source-flex-child", L = /* @__PURE__ */ l5("div", { "data-node-id": o.childSourceId, "data-web-restored-glyph": o.glyphNodeId, style: { position: n ? "absolute" : "relative", ...n ? { left: i.x, top: i.y } : {}, width: i.width, height: i.height, flexShrink: 0 }, children: I6(o) }, o.childSourceId);
    r = [...r || [], L];
  }
  return s3(a, {}, r);
}
function F1(t = {}) {
  return R6(L3(ws(t)));
}

// aurora-web-visual:2:12138
import { Children as E6, cloneElement as C3, isValidElement as k6 } from "react";
import { jsx as Q0, jsxs as Fs } from "react/jsx-runtime";
function ks({ className: t, property1: e = "Default" }) {
  let a = e === "Primary hover", r = e === "Secondary hover";
  return /* @__PURE__ */ Q0("div", { className: t || "content-stretch flex h-[50px] items-center justify-center px-[20px] relative w-[375px]", "data-figma-layer": a ? "node-2_12161" : r ? "node-2_12150" : "node-2_12139", children: /* @__PURE__ */ Fs("div", { className: "grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0", "data-figma-layer": a ? "node-2_12162" : r ? "node-2_12151" : "node-2_12140", children: [
    /* @__PURE__ */ Q0("div", { className: `backdrop-blur-[15px] col-1 content-stretch flex gap-[10px] h-[50px] items-center justify-center ml-0 mt-0 px-[20px] py-[10px] relative rounded-[5px] row-1 w-[162.5px] ${r ? "bg-[rgba(255,255,255,0.2)]" : "bg-[rgba(255,255,255,0.1)]"}`, "data-figma-layer": a ? "node-2_12163" : r ? "node-2_12152" : "node-2_12141", "data-name": "Secondary", children: /* @__PURE__ */ Q0("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-figma-layer": a ? "node-2_12169" : r ? "node-2_12158" : "node-2_12147", children: "TEXT LABEL" }) }),
    /* @__PURE__ */ Q0("div", { className: "backdrop-blur-[13.591px] bg-white col-1 content-stretch flex h-[50px] items-center justify-center ml-[172.5px] mt-0 px-[123px] py-[15px] relative rounded-[5px] row-1 w-[162.5px]", "data-figma-layer": a ? "node-2_12170" : r ? "node-2_12159" : "node-2_12148", "data-name": "Primary", children: /* @__PURE__ */ Q0("p", { className: `[word-break:break-word] font-["Inter:Bold"] font-bold leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[1px] uppercase whitespace-nowrap ${a ? "text-black" : "bg-clip-text text-[transparent]"}`, "data-figma-layer": a ? "node-2_12171" : r ? "node-2_12160" : "node-2_12149", style: ["Default", "Secondary hover"].includes(e) ? { backgroundImage: "linear-gradient(170.19963140593444deg, rgb(255, 219, 23) 79.006%, rgb(255, 50, 120) 103.85%)" } : void 0, children: "TEXT LABEL" }) })
  ] }) });
}
var Hs = [];
function c3(t) {
  if (!k6(t)) return t;
  let e = t;
  return typeof e.type == "function" ? c3(e.type(e.props)) : C3(e, {}, E6.map(e.props.children, c3));
}
function w6(t) {
  let e = String(t.props["data-node-id"] || t.props["data-figma-layer"] || t.props.id || "");
  return e.startsWith("node-") ? e.slice(5).replaceAll("_", ":") : e;
}
function T6(t) {
  let e = t.glyphBounds;
  return /* @__PURE__ */ Q0("img", { alt: "", src: t.sourceAssetUrl, style: { position: "absolute", left: e.x, top: e.y, width: e.width, height: e.height, maxWidth: "none" } });
}
function H6(t, e) {
  if (!k6(t)) return t;
  let a = t, r = E6.map(a.props.children, (o) => H6(o, a));
  for (let o of Hs) {
    let i = o.childBounds;
    if (o.kind === "replace-source-slot-content") {
      if (w6(a) !== o.childSourceId) continue;
      let c = /(?:^|\s)(?:flex|inline-flex)(?:\s|$)/.test(e?.props.className || "");
      return C3(a, { "data-web-restored-glyph": o.glyphNodeId, style: { ...a.props.style, position: c ? "relative" : "absolute", ...c ? {} : { left: i.x, top: i.y }, width: i.width, height: i.height } }, T6(o));
    }
    if (w6(a) !== o.parentSourceId) continue;
    let n = o.kind !== "append-source-flex-child", L = /* @__PURE__ */ Q0("div", { "data-node-id": o.childSourceId, "data-web-restored-glyph": o.glyphNodeId, style: { position: n ? "absolute" : "relative", ...n ? { left: i.x, top: i.y } : {}, width: i.width, height: i.height, flexShrink: 0 }, children: T6(o) }, o.childSourceId);
    r = [...r || [], L];
  }
  return C3(a, {}, r);
}
function i0(t = {}) {
  return H6(c3(ks(t)));
}

// aurora-web-visual:2:12172
import { Children as U6, cloneElement as d3, isValidElement as V6 } from "react";
import { jsx as W5, jsxs as Vs } from "react/jsx-runtime";
function Gs({ className: t, property1: e = "Default" }) {
  let a = e === "hover";
  return /* @__PURE__ */ Vs("div", { className: t || "h-[44px] overflow-clip relative w-[80px]", "data-figma-layer": a ? "node-2_12176" : "node-2_12173", children: [
    /* @__PURE__ */ W5("div", { className: `-translate-x-1/2 -translate-y-1/2 absolute border border-solid h-[44px] left-1/2 rounded-[8px] top-1/2 w-[80px] ${a ? "border-[#393a3b]" : "border-[#67696b]"}`, "data-figma-layer": a ? "node-2_12177" : "node-2_12174", "data-name": "Rectangle" }),
    /* @__PURE__ */ W5("p", { className: "[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[22px] left-[calc(50%-30px)] not-italic text-[#d4d4d4] text-[14px] top-[calc(50%-11px)] whitespace-nowrap", "data-figma-layer": a ? "node-2_12178" : "node-2_12175", children: "GET APP" })
  ] });
}
var Us = [];
function l3(t) {
  if (!V6(t)) return t;
  let e = t;
  return typeof e.type == "function" ? l3(e.type(e.props)) : d3(e, {}, U6.map(e.props.children, l3));
}
function F6(t) {
  let e = String(t.props["data-node-id"] || t.props["data-figma-layer"] || t.props.id || "");
  return e.startsWith("node-") ? e.slice(5).replaceAll("_", ":") : e;
}
function G6(t) {
  let e = t.glyphBounds;
  return /* @__PURE__ */ W5("img", { alt: "", src: t.sourceAssetUrl, style: { position: "absolute", left: e.x, top: e.y, width: e.width, height: e.height, maxWidth: "none" } });
}
function j6(t, e) {
  if (!V6(t)) return t;
  let a = t, r = U6.map(a.props.children, (o) => j6(o, a));
  for (let o of Us) {
    let i = o.childBounds;
    if (o.kind === "replace-source-slot-content") {
      if (F6(a) !== o.childSourceId) continue;
      let c = /(?:^|\s)(?:flex|inline-flex)(?:\s|$)/.test(e?.props.className || "");
      return d3(a, { "data-web-restored-glyph": o.glyphNodeId, style: { ...a.props.style, position: c ? "relative" : "absolute", ...c ? {} : { left: i.x, top: i.y }, width: i.width, height: i.height } }, G6(o));
    }
    if (F6(a) !== o.parentSourceId) continue;
    let n = o.kind !== "append-source-flex-child", L = /* @__PURE__ */ W5("div", { "data-node-id": o.childSourceId, "data-web-restored-glyph": o.glyphNodeId, style: { position: n ? "absolute" : "relative", ...n ? { left: i.x, top: i.y } : {}, width: i.width, height: i.height, flexShrink: 0 }, children: G6(o) }, o.childSourceId);
    r = [...r || [], L];
  }
  return d3(a, {}, r);
}
function n0(t = {}) {
  return j6(l3(Gs(t)));
}

// aurora-web-visual:417:4641
import { Children as Y6, cloneElement as p3, isValidElement as W6 } from "react";
import { jsx as p5 } from "react/jsx-runtime";
function js({ className: t, selected: e = !0 }) {
  let a = !e;
  return /* @__PURE__ */ p5("div", { className: t || `content-stretch flex gap-[10px] h-[40px] items-center justify-center pl-[15px] pr-[10px] py-[7px] relative rounded-[76px] ${a ? "bg-[rgba(255,255,255,0.1)]" : "bg-white"}`, "data-figma-layer": a ? "node-417_4642" : "node-417_4640", children: /* @__PURE__ */ p5("div", { className: `[word-break:break-word] flex flex-col font-["Inter:Bold"] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${a ? "text-white" : "text-black"}`, "data-figma-layer": a ? "node-417_4643" : "node-417_4636", children: /* @__PURE__ */ p5("p", { className: "leading-[22px]", children: "Only ELITE" }) }) });
}
var _s = [{ contextNodeId: "417:4641", kind: "append-source-flex-child", parentSourceId: "417:4640", childSourceId: "417:4637", glyphNodeId: "I417:4637;4410:29344", sourceAssetUrl: new URL("./assets/5c4b13a285e47ca101bdced4.svg", import.meta.url).href, childBounds: { x: 99, y: 10, width: 20, height: 20, name: "chevron down", evidenceFile: "figma/web/metadata/417-4637.json" }, glyphBounds: { x: 3.3333332538604736, y: 5.833333492279053, width: 13.333333015441895, height: 7.499999523162842, name: "chevron-down", evidenceFile: "figma/web/metadata/417-4637.json" }, stateProps: { selected: !0 } }, { contextNodeId: "417:4641", kind: "append-source-flex-child", parentSourceId: "417:4642", childSourceId: "417:4644", glyphNodeId: "I417:4644;4410:29344", sourceAssetUrl: new URL("./assets/b579a4305ebd8ace0e6d5474.svg", import.meta.url).href, childBounds: { x: 99, y: 10, width: 20, height: 20, name: "chevron down", evidenceFile: "figma/web/metadata/417-4642.json" }, glyphBounds: { x: 3.3333332538604736, y: 5.833333492279053, width: 13.333333015441895, height: 7.499999523162842, name: "chevron-down", evidenceFile: "figma/web/metadata/417-4644.json" }, stateProps: { selected: !1 } }];
function f3(t) {
  if (!W6(t)) return t;
  let e = t;
  return typeof e.type == "function" ? f3(e.type(e.props)) : p3(e, {}, Y6.map(e.props.children, f3));
}
function _6(t) {
  let e = String(t.props["data-node-id"] || t.props["data-figma-layer"] || t.props.id || "");
  return e.startsWith("node-") ? e.slice(5).replaceAll("_", ":") : e;
}
function B6(t) {
  let e = t.glyphBounds;
  return /* @__PURE__ */ p5("img", { alt: "", src: t.sourceAssetUrl, style: { position: "absolute", left: e.x, top: e.y, width: e.width, height: e.height, maxWidth: "none" } });
}
function $6(t, e) {
  if (!W6(t)) return t;
  let a = t, r = Y6.map(a.props.children, (o) => $6(o, a));
  for (let o of _s) {
    let i = o.childBounds;
    if (o.kind === "replace-source-slot-content") {
      if (_6(a) !== o.childSourceId) continue;
      let c = /(?:^|\s)(?:flex|inline-flex)(?:\s|$)/.test(e?.props.className || "");
      return p3(a, { "data-web-restored-glyph": o.glyphNodeId, style: { ...a.props.style, position: c ? "relative" : "absolute", ...c ? {} : { left: i.x, top: i.y }, width: i.width, height: i.height } }, B6(o));
    }
    if (_6(a) !== o.parentSourceId) continue;
    let n = o.kind !== "append-source-flex-child", L = /* @__PURE__ */ p5("div", { "data-node-id": o.childSourceId, "data-web-restored-glyph": o.glyphNodeId, style: { position: n ? "absolute" : "relative", ...n ? { left: i.x, top: i.y } : {}, width: i.width, height: i.height, flexShrink: 0 }, children: B6(o) }, o.childSourceId);
    r = [...r || [], L];
  }
  return p3(a, {}, r);
}
function s0(t = {}) {
  return $6(f3(js(t)));
}

// aurora-web-visual:2:12340
import { Children as J6, cloneElement as h3, isValidElement as K6 } from "react";
import { jsx as f5, jsxs as Ws } from "react/jsx-runtime";
function Bs({ className: t, property1: e = "Default" }) {
  let a = e === "Hover";
  return /* @__PURE__ */ Ws("div", { className: t || "h-[45px] relative w-[382px]", "data-figma-layer": a ? "node-2_12345" : "node-2_12341", children: [
    /* @__PURE__ */ f5("div", { className: `absolute backdrop-blur-[38.5px] inset-0 rounded-[5px] ${a ? "bg-[rgba(255,255,255,0.2)]" : "bg-[rgba(255,255,255,0.1)]"}`, "data-figma-layer": a ? "node-2_12346" : "node-2_12342", "data-name": "Rectangle Copy" }),
    /* @__PURE__ */ f5("div", { className: "[word-break:break-word] absolute flex flex-col font-['Inter:Regular'] font-normal inset-[33.33%_45.03%_31.11%_15.18%] justify-center leading-[0] not-italic text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap", "data-figma-layer": a ? "node-2_12347" : "node-2_12343", children: /* @__PURE__ */ f5("p", { className: "leading-[16px]", children: "Search for centres, gyms..." }) })
  ] });
}
var Ys = [{ contextNodeId: "2:12340", kind: "append-absolute-source-child", parentSourceId: "2:12341", childSourceId: "2:12344", glyphNodeId: "I2:12344;6505:50105", sourceAssetUrl: new URL("./assets/6d8349dd42202426b49a3914.svg", import.meta.url).href, childBounds: { x: 14, y: 7, width: 30, height: 30, name: "search", evidenceFile: "figma/web/metadata/2-12344.json" }, glyphBounds: { x: 2.9997615814208984, y: 3, width: 24.000476837158203, height: 24, name: "Union", evidenceFile: "figma/web/metadata/2-12344.json" }, stateProps: { property1: "Default" } }, { contextNodeId: "2:12340", kind: "append-absolute-source-child", parentSourceId: "2:12345", childSourceId: "2:12348", glyphNodeId: "I2:12348;6505:50105", sourceAssetUrl: new URL("./assets/6d8349dd42202426b49a3914.svg", import.meta.url).href, childBounds: { x: 14, y: 7, width: 30, height: 30, name: "search", evidenceFile: "figma/web/metadata/2-12348.json" }, glyphBounds: { x: 2.9997615814208984, y: 3, width: 24.000476837158203, height: 24, name: "Union", evidenceFile: "figma/web/metadata/2-12348.json" }, stateProps: { property1: "Hover" }, evidenceFile: "figma/web/context/children/I2-12348__6505-50105.json" }];
function v3(t) {
  if (!K6(t)) return t;
  let e = t;
  return typeof e.type == "function" ? v3(e.type(e.props)) : h3(e, {}, J6.map(e.props.children, v3));
}
function X6(t) {
  let e = String(t.props["data-node-id"] || t.props["data-figma-layer"] || t.props.id || "");
  return e.startsWith("node-") ? e.slice(5).replaceAll("_", ":") : e;
}
function q6(t) {
  let e = t.glyphBounds;
  return /* @__PURE__ */ f5("img", { alt: "", src: t.sourceAssetUrl, style: { position: "absolute", left: e.x, top: e.y, width: e.width, height: e.height, maxWidth: "none" } });
}
function t8(t, e) {
  if (!K6(t)) return t;
  let a = t, r = J6.map(a.props.children, (o) => t8(o, a));
  for (let o of Ys) {
    let i = o.childBounds;
    if (o.kind === "replace-source-slot-content") {
      if (X6(a) !== o.childSourceId) continue;
      let c = /(?:^|\s)(?:flex|inline-flex)(?:\s|$)/.test(e?.props.className || "");
      return h3(a, { "data-web-restored-glyph": o.glyphNodeId, style: { ...a.props.style, position: c ? "relative" : "absolute", ...c ? {} : { left: i.x, top: i.y }, width: i.width, height: i.height } }, q6(o));
    }
    if (X6(a) !== o.parentSourceId) continue;
    let n = o.kind !== "append-source-flex-child", L = /* @__PURE__ */ f5("div", { "data-node-id": o.childSourceId, "data-web-restored-glyph": o.glyphNodeId, style: { position: n ? "absolute" : "relative", ...n ? { left: i.x, top: i.y } : {}, width: i.width, height: i.height, flexShrink: 0 }, children: q6(o) }, o.childSourceId);
    r = [...r || [], L];
  }
  return h3(a, {}, r);
}
function G1(t = {}) {
  return t8(v3(Bs(t)));
}

// aurora-web-visual:2:11923
import { Children as M3, cloneElement as $5, isValidElement as b3 } from "react";
import { jsx as $, jsxs as B0 } from "react/jsx-runtime";
var $s = (t) => t.trim().replace(/[^a-zA-Z0-9]+(.)?/g, (e, a) => a ? a.toUpperCase() : "").replace(/^./, (e) => e.toLowerCase());
function Xs(t, e, a) {
  let r = Object.keys(t[0].values), o = Object.fromEntries(Object.entries(a).filter(([i]) => r.some((n) => i === n || i === $s(n))));
  return c1({ name: "Explicit approved App source", variants: t, defaultNodeId: e }, o);
}
var qs = { "2:11937": { width: 31, height: 31 }, "2:11944": { width: 31.999998092651367, height: 31.999998092651367 }, "2:11930": { width: 33, height: 33 } }, Js = {};
function g3({ children: t, ...e }) {
  let a = e["data-node-id"], r = qs[a];
  return /* @__PURE__ */ $("div", { ...e, style: { display: "block", flexShrink: 0, ...r, ...e.style }, children: M3.map(t, (o) => b3(o) ? $5(o, { ...Js[a] || {}, style: { width: "100%", height: "100%", ...o.props.style } }) : o) });
}
var x3 = (t = {}) => {
  let e = Xs([{ nodeId: "4566:33565", width: 25.999990463256836, height: 26.000072479248047, src: "data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNS45OTk5OTA0NjMyNTY4MzYiIGhlaWdodD0iMjYuMDAwMDcyNDc5MjQ4MDQ3IiB2aWV3Qm94PSIwIDAgMjUuOTk5OTkwNDYzMjU2ODM2IDI2LjAwMDA3MjQ3OTI0ODA0NyIgc3R5bGU9ImRpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6dmlzaWJsZSIgZm9jdXNhYmxlPSJmYWxzZSI+PGcgZGF0YS1ub2RlLWlkPSI0NTY2OjMzNTY1IiBkYXRhLWluc3RhbmNlLXBhdGg9IjQ1NjY6MzM1NjUiIGRhdGEtbmFtZT0iQmlnPU5vIiBvcGFjaXR5PSIxIj48Zz48ZyBkYXRhLW5vZGUtaWQ9IjY1MDU6NTAxMDUiIGRhdGEtaW5zdGFuY2UtcGF0aD0iNDU2NjozMzU2NS82NTA1OjUwMTA1IiBkYXRhLW5hbWU9IlVuaW9uIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDMgMykiIG9wYWNpdHk9IjEiPjxwYXRoIGQ9Ik0yIDlDMiA1LjEzNDAwNjk3NzA4MTI5OSA1LjEzNDAwNjk3NzA4MTI5OSAyIDkgMkMxMi44NjU5OTM0OTk3NTU4NiAyIDE2IDUuMTM0MDA2OTc3MDgxMjk5IDE2IDlDMTYgMTAuODg1OTgzNDY3MTAyMDUgMTUuMjU0MTQ2NTc1OTI3NzM0IDEyLjU5Nzc2NDAxNTE5Nzc1NCAxNC4wNDEzMTMxNzEzODY3MTkgMTMuODU2NDY3MjQ3MDA5Mjc3QzE0LjAwNzEwOTY0MjAyODgwOSAxMy44ODI3NzA1MzgzMzAwNzggMTMuOTc0MjE3NDE0ODU1OTU3IDEzLjkxMTU4NzcxNTE0ODkyNiAxMy45NDI4ODczMDYyMTMzNzkgMTMuOTQyOTE3ODIzNzkxNTA0QzEzLjkxMTU1ODE1MTI0NTExNyAxMy45NzQyNDY5Nzg3NTk3NjYgMTMuODgyNzQxOTI4MTAwNTg2IDE0LjAwNzEzNzI5ODU4Mzk4NCAxMy44NTY0Mzk1OTA0NTQxMDIgMTQuMDQxMzM4OTIwNTkzMjYyQzEyLjU5NzczOTIxOTY2NTUyNyAxNS4yNTQxNTcwNjYzNDUyMTUgMTAuODg1OTcwMTE1NjYxNjIxIDE2IDkgMTZDNS4xMzQwMDY5NzcwODEyOTkgMTYgMiAxMi44NjU5OTM0OTk3NTU4NiAyIDlaTTE0LjYxNzY2OTEwNTUyOTc4NSAxNi4wMzE5MTM3NTczMjQyMkMxMy4wNzgwMDEwMjIzMzg4NjcgMTcuMjYzNTMyNjM4NTQ5ODA1IDExLjEyNTAwNTcyMjA0NTg5OCAxOCA5IDE4QzQuMDI5NDM3MDY1MTI0NTEyIDE4IDAgMTMuOTcwNTYyOTM0ODc1NDg4IDAgOUMwIDQuMDI5NDM3MDY1MTI0NTEyIDQuMDI5NDM3MDY1MTI0NTEyIDAgOSAwQzEzLjk3MDU2MjkzNDg3NTQ4OCAwIDE4IDQuMDI5NDM3MDY1MTI0NTEyIDE4IDlDMTggMTEuMTI1MDIxOTM0NTA5Mjc3IDE3LjI2MzUyMTE5NDQ1ODAwOCAxMy4wNzgwMjk2MzI1NjgzNiAxNi4wMzE4ODUxNDcwOTQ3MjcgMTQuNjE3NzAzNDM3ODA1MTc2TDE5LjcwNzA5OTkxNDU1MDc4IDE4LjI5MjkxNzI1MTU4NjkxNEMyMC4wOTc2MjU3MzI0MjE4NzUgMTguNjgzNDQxMTYyMTA5Mzc1IDIwLjA5NzYyNTczMjQyMTg3NSAxOS4zMTY2MDY1MjE2MDY0NDUgMTkuNzA3MDk5OTE0NTUwNzggMTkuNzA3MTMwNDMyMTI4OTA2QzE5LjMxNjU3NjAwNDAyODMyIDIwLjA5NzY1NjI1IDE4LjY4MzQxMDY0NDUzMTI1IDIwLjA5NzY1NjI1IDE4LjI5Mjg4NjczNDAwODc5IDE5LjcwNzEzMDQzMjEyODkwNkwxNC42MTc2NjkxMDU1Mjk3ODUgMTYuMDMxOTEzNzU3MzI0MjJaIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDEpIiBvcGFjaXR5PSIxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48Zz48L2c+PC9nPjwvZz48L2c+PC9zdmc+", values: { Big: "No" } }, { nodeId: "6393:44047", width: 35, height: 35, src: "data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgaGVpZ2h0PSIzNSIgdmlld0JveD0iMCAwIDM1IDM1IiBzdHlsZT0iZGlzcGxheTpibG9jaztvdmVyZmxvdzp2aXNpYmxlIiBmb2N1c2FibGU9ImZhbHNlIj48ZyBkYXRhLW5vZGUtaWQ9IjYzOTM6NDQwNDciIGRhdGEtaW5zdGFuY2UtcGF0aD0iNjM5Mzo0NDA0NyIgZGF0YS1uYW1lPSJCaWc9WWVzIiBvcGFjaXR5PSIxIj48cGF0aCBkPSJNMCA0Ljk5OTk5OTUyMzE2Mjg0MkMwIDIuMjM4NTc1OTM1MzYzNzY5NSAyLjIzODU3NjY1MDYxOTUwNyAwIDUgMEwzMCAwQzMyLjc2MTQyNTAxODMxMDU1IDAgMzUgMi4yMzg1NzY2NTA2MTk1MDcgMzUgNUwzNSAzMEMzNSAzMi43NjE0MjUwMTgzMTA1NSAzMi43NjE0MjUwMTgzMTA1NSAzNSAzMCAzNUw0Ljk5OTk5OTUyMzE2Mjg0MiAzNUMyLjIzODU3NTkzNTM2Mzc2OTUgMzUgMCAzMi43NjE0MjUwMTgzMTA1NSAwIDMwTDAgNC45OTk5OTk1MjMxNjI4NDJaIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDEpIiBvcGFjaXR5PSIwLjEwMDAwMDAwMTQ5MDExNjEyIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD48Zz48ZyBkYXRhLW5vZGUtaWQ9IjYzOTM6NDQwNDQiIGRhdGEtaW5zdGFuY2UtcGF0aD0iNjM5Mzo0NDA0Ny82MzkzOjQ0MDQ0IiBkYXRhLW5hbWU9InNlYXJjaCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSA3IDcpIiBvcGFjaXR5PSIxIj48ZGVmcz48Y2xpcFBhdGggaWQ9ImF1cm9yYS1fUl8wXy02MzkzXzQ0MDQ3X182MzkzXzQ0MDQ0LWZyYW1lLWNsaXAiPjxyZWN0IHdpZHRoPSIxOS45OTk5OTQyNzc5NTQxIiBoZWlnaHQ9IjIwLjAwMDAyNDc5NTUzMjIyNyIgcng9IjAiPjwvcmVjdD48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGlwLXBhdGg9InVybCgjYXVyb3JhLV9SXzBfLTYzOTNfNDQwNDdfXzYzOTNfNDQwNDQtZnJhbWUtY2xpcCkiPjxnIGRhdGEtbm9kZS1pZD0iMTQwNDI6MzU3NzQiIGRhdGEtaW5zdGFuY2UtcGF0aD0iNjM5Mzo0NDA0Ny82MzkzOjQ0MDQ0LzE0MDQyOjM1Nzc0IiBkYXRhLW5hbWU9IlVuaW9uIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDAgMCkiIG9wYWNpdHk9IjEiPjxwYXRoIGQ9Ik0yIDlDMiA1LjEzNDAwNjk3NzA4MTI5OSA1LjEzNDAwNjk3NzA4MTI5OSAyIDkgMkMxMi44NjU5OTM0OTk3NTU4NiAyIDE2IDUuMTM0MDA2OTc3MDgxMjk5IDE2IDlDMTYgMTAuODg1OTgzNDY3MTAyMDUgMTUuMjU0MTQ2NTc1OTI3NzM0IDEyLjU5Nzc2NDAxNTE5Nzc1NCAxNC4wNDEzMTMxNzEzODY3MTkgMTMuODU2NDY3MjQ3MDA5Mjc3QzE0LjAwNzEwOTY0MjAyODgwOSAxMy44ODI3NzA1MzgzMzAwNzggMTMuOTc0MjE3NDE0ODU1OTU3IDEzLjkxMTU4NzcxNTE0ODkyNiAxMy45NDI4ODczMDYyMTMzNzkgMTMuOTQyOTE3ODIzNzkxNTA0QzEzLjkxMTU1ODE1MTI0NTExNyAxMy45NzQyNDY5Nzg3NTk3NjYgMTMuODgyNzQxOTI4MTAwNTg2IDE0LjAwNzEzNzI5ODU4Mzk4NCAxMy44NTY0Mzk1OTA0NTQxMDIgMTQuMDQxMzM4OTIwNTkzMjYyQzEyLjU5NzczOTIxOTY2NTUyNyAxNS4yNTQxNTcwNjYzNDUyMTUgMTAuODg1OTcwMTE1NjYxNjIxIDE2IDkgMTZDNS4xMzQwMDY5NzcwODEyOTkgMTYgMiAxMi44NjU5OTM0OTk3NTU4NiAyIDlaTTE0LjYxNzY2OTEwNTUyOTc4NSAxNi4wMzE5MTM3NTczMjQyMkMxMy4wNzgwMDEwMjIzMzg4NjcgMTcuMjYzNTMyNjM4NTQ5ODA1IDExLjEyNTAwNTcyMjA0NTg5OCAxOCA5IDE4QzQuMDI5NDM3MDY1MTI0NTEyIDE4IDAgMTMuOTcwNTYyOTM0ODc1NDg4IDAgOUMwIDQuMDI5NDM3MDY1MTI0NTEyIDQuMDI5NDM3MDY1MTI0NTEyIDAgOSAwQzEzLjk3MDU2MjkzNDg3NTQ4OCAwIDE4IDQuMDI5NDM3MDY1MTI0NTEyIDE4IDlDMTggMTEuMTI1MDIxOTM0NTA5Mjc3IDE3LjI2MzUyMTE5NDQ1ODAwOCAxMy4wNzgwMjk2MzI1NjgzNiAxNi4wMzE4ODUxNDcwOTQ3MjcgMTQuNjE3NzAzNDM3ODA1MTc2TDE5LjcwNzA5OTkxNDU1MDc4IDE4LjI5MjkxNzI1MTU4NjkxNEMyMC4wOTc2MjU3MzI0MjE4NzUgMTguNjgzNDQxMTYyMTA5Mzc1IDIwLjA5NzYyNTczMjQyMTg3NSAxOS4zMTY2MDY1MjE2MDY0NDUgMTkuNzA3MDk5OTE0NTUwNzggMTkuNzA3MTMwNDMyMTI4OTA2QzE5LjMxNjU3NjAwNDAyODMyIDIwLjA5NzY1NjI1IDE4LjY4MzQxMDY0NDUzMTI1IDIwLjA5NzY1NjI1IDE4LjI5Mjg4NjczNDAwODc5IDE5LjcwNzEzMDQzMjEyODkwNkwxNC42MTc2NjkxMDU1Mjk3ODUgMTYuMDMxOTEzNzU3MzI0MjJaIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDEpIiBvcGFjaXR5PSIxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48Zz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4=", values: { Big: "Yes" } }], "4566:33565", t);
  return /* @__PURE__ */ $("img", { alt: "", "data-linked-source-node": e.nodeId, src: e.src, className: t.className, style: { display: "block", width: "100%", height: "100%", ...t.style } });
};
function Ks({ className: t, states: e = "Default" }) {
  return e === "hover" ? /* @__PURE__ */ $("button", { className: t || "block cursor-pointer h-[75px] relative w-[939px]", "data-node-id": "2:11931", "data-name": "States=hover", children: /* @__PURE__ */ B0("div", { className: "absolute contents inset-0", "data-node-id": "2:11932", children: [
    /* @__PURE__ */ B0("div", { className: "absolute contents inset-0", "data-node-id": "2:11933", children: [
      /* @__PURE__ */ $("div", { className: "absolute backdrop-blur-[38.5px] bg-[rgba(255,255,255,0.2)] border-0 border-[rgba(255,255,255,0.32)] border-solid inset-0 rounded-[10px]", "data-node-id": "2:11934", "data-name": "Rectangle Copy" }),
      /* @__PURE__ */ $("div", { className: "absolute backdrop-blur-[25px] bg-[rgba(255,255,255,0.2)] content-stretch flex gap-[10px] inset-[16%_1.66%_18.13%_85.94%] items-center justify-center px-[15px] py-[11px] rounded-[5px]", "data-node-id": "2:11935", "data-name": "Button (All Variants)/Secondary / Dice Icon/Default", children: /* @__PURE__ */ $("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-left text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I2:11935;268:416", children: "SEARCH" }) }),
      /* @__PURE__ */ $("p", { className: "[word-break:break-word] absolute font-['Inter:Regular'] font-normal inset-[29.33%_54.53%_33.33%_7.14%] leading-[28px] not-italic text-[18px] text-[rgba(255,255,255,0.6)] text-left whitespace-nowrap", "data-node-id": "2:11936", children: "Search for workouts, live sessions, gyms..." })
    ] }),
    /* @__PURE__ */ $(g3, { "data-node-id": "2:11937", "data-name": "search", children: /* @__PURE__ */ $(x3, { big: "No" }) })
  ] }) }) : e === "clicked" ? /* @__PURE__ */ $("div", { className: t || "h-[75px] relative w-[939px]", "data-node-id": "2:11938", "data-name": "States=clicked", children: /* @__PURE__ */ B0("div", { className: "absolute contents inset-0", "data-node-id": "2:11939", children: [
    /* @__PURE__ */ B0("div", { className: "absolute contents inset-0", "data-node-id": "2:11940", children: [
      /* @__PURE__ */ $("div", { className: "absolute backdrop-blur-[38.5px] bg-[rgba(255,255,255,0.2)] border-0 border-[rgba(255,255,255,0.32)] border-solid inset-0 rounded-[10px]", "data-node-id": "2:11941", "data-name": "Rectangle Copy" }),
      /* @__PURE__ */ $("div", { className: "absolute backdrop-blur-[25px] bg-[rgba(255,255,255,0.2)] content-stretch flex gap-[10px] inset-[16%_1.66%_18.13%_85.94%] items-center justify-center px-[15px] py-[11px] rounded-[5px]", "data-node-id": "2:11942", "data-name": "Button (All Variants)/Secondary / Dice Icon/Default", children: /* @__PURE__ */ $("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I2:11942;268:416", children: "SEARCH" }) }),
      /* @__PURE__ */ $("p", { className: "[word-break:break-word] absolute font-['Inter:Regular'] font-normal inset-[29.33%_92.23%_33.33%_7.14%] leading-[28px] not-italic text-[18px] text-[rgba(255,255,255,0.6)] whitespace-nowrap", "data-node-id": "2:11943", children: "|" })
    ] }),
    /* @__PURE__ */ $(g3, { "data-node-id": "2:11944", "data-name": "search", children: /* @__PURE__ */ $(x3, { big: "No" }) })
  ] }) }) : /* @__PURE__ */ $("div", { className: t || "h-[79px] relative w-[933px]", "data-node-id": "2:11924", "data-name": "States=Default", children: /* @__PURE__ */ B0("div", { className: "absolute bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex gap-[14px] items-center left-0 p-[15px] rounded-[10px] top-0", "data-node-id": "401:3900", children: [
    /* @__PURE__ */ $(g3, { "data-node-id": "2:11930", "data-name": "search", children: /* @__PURE__ */ $(x3, { big: "No" }) }),
    /* @__PURE__ */ B0("div", { className: "content-stretch flex gap-[380px] items-center relative shrink-0", "data-node-id": "401:3899", children: [
      /* @__PURE__ */ $("p", { className: "[word-break:break-word] font-['Inter:Regular'] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.6)] whitespace-nowrap", "data-node-id": "2:11929", children: "Search for workouts, live sessions, gyms..." }),
      /* @__PURE__ */ $("div", { className: "backdrop-blur-[25px] bg-[rgba(255,255,255,0.2)] content-stretch flex gap-[10px] h-[49.402px] items-center justify-center px-[15px] py-[11px] relative rounded-[5px] shrink-0 w-[116.368px]", "data-node-id": "2:11928", "data-name": "Button (All Variants)/Secondary / Dice Icon/Default", children: /* @__PURE__ */ $("p", { className: "[word-break:break-word] font-['Inter:Bold'] font-bold leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.5px] uppercase whitespace-nowrap", "data-node-id": "I2:11928;268:416", children: "SEARCH" }) })
    ] })
  ] }) });
}
var tL = [{ contextNodeId: "2:11923", kind: "replace-source-slot-content", parentSourceId: "2:11924", childSourceId: "2:11930", glyphNodeId: "I2:11930;6505:50105", sourceAssetUrl: new URL("./assets/e3d4a39f81771abf9a277870.svg", import.meta.url).href, childBounds: { x: 15, y: 23.200836181640625, width: 33, height: 33, name: "search", evidenceFile: "figma/web/metadata/2-11930.json" }, glyphBounds: { x: 1.6224806308746338, y: 1.6228383779525757, width: 29.75503921508789, height: 29.754322052001953, name: "Union", evidenceFile: "figma/web/metadata/2-11930.json" }, stateProps: { states: "Default" }, evidenceFile: "figma/web/context/children/I2-11930__6505-50105.json" }, { contextNodeId: "2:11923", kind: "replace-source-slot-content", parentSourceId: "2:11931", childSourceId: "2:11937", glyphNodeId: "I2:11937;6505:50105", sourceAssetUrl: new URL("./assets/340e41a2b8205c8d648cea63.svg", import.meta.url).href, childBounds: { x: 22, y: 22, width: 31, height: 31, name: "search", evidenceFile: "figma/web/metadata/2-11937.json" }, glyphBounds: { x: 1.5246225595474243, y: 1.5245634317398071, width: 27.950754165649414, height: 27.95087432861328, name: "Union", evidenceFile: "figma/web/metadata/2-11937.json" }, stateProps: { states: "hover" }, evidenceFile: "figma/web/context/children/I2-11937__6505-50105.json" }, { contextNodeId: "2:11923", kind: "replace-source-slot-content", parentSourceId: "2:11938", childSourceId: "2:11944", glyphNodeId: "I2:11944;6505:50105", sourceAssetUrl: new URL("./assets/af797d355dc156ae142e7734.svg", import.meta.url).href, childBounds: { x: 20, y: 18, width: 31.999998092651367, height: 31.999998092651367, name: "search", evidenceFile: "figma/web/metadata/2-11944.json" }, glyphBounds: { x: 1.6224968433380127, y: 1.622841238975525, width: 28.7550048828125, height: 28.754314422607422, name: "Union", evidenceFile: "figma/web/metadata/2-11944.json" }, stateProps: { states: "clicked" }, evidenceFile: "figma/web/context/children/I2-11944__6505-50105.json" }];
function u3(t) {
  if (!b3(t)) return t;
  let e = t;
  return typeof e.type == "function" ? u3(e.type(e.props)) : $5(e, {}, M3.map(e.props.children, u3));
}
function e8(t) {
  let e = String(t.props["data-node-id"] || t.props["data-figma-layer"] || t.props.id || "");
  return e.startsWith("node-") ? e.slice(5).replaceAll("_", ":") : e;
}
function a8(t) {
  let e = t.glyphBounds;
  return /* @__PURE__ */ $("img", { alt: "", src: t.sourceAssetUrl, style: { position: "absolute", left: e.x, top: e.y, width: e.width, height: e.height, maxWidth: "none" } });
}
function o8(t, e) {
  if (!b3(t)) return t;
  let a = t, r = M3.map(a.props.children, (o) => o8(o, a));
  for (let o of tL) {
    let i = o.childBounds;
    if (o.kind === "replace-source-slot-content") {
      if (e8(a) !== o.childSourceId) continue;
      let c = /(?:^|\s)(?:flex|inline-flex)(?:\s|$)/.test(e?.props.className || "");
      return $5(a, { "data-web-restored-glyph": o.glyphNodeId, style: { ...a.props.style, position: c ? "relative" : "absolute", ...c ? {} : { left: i.x, top: i.y }, width: i.width, height: i.height } }, a8(o));
    }
    if (e8(a) !== o.parentSourceId) continue;
    let n = o.kind !== "append-source-flex-child", L = /* @__PURE__ */ $("div", { "data-node-id": o.childSourceId, "data-web-restored-glyph": o.glyphNodeId, style: { position: n ? "absolute" : "relative", ...n ? { left: i.x, top: i.y } : {}, width: i.width, height: i.height, flexShrink: 0 }, children: a8(o) }, o.childSourceId);
    r = [...r || [], L];
  }
  return $5(a, {}, r);
}
function U1(t = {}) {
  return o8(u3(Ks(t)));
}

// aurora-native-assets:4410:29369
function y3(t) {
  throw new Error("No source image registered for " + t);
}

// packages/aurora-library/src/archive-generated/geometry.ts
var eL = "M8.707106590270996 0.2928932309150696C9.097630500793457 0.6834174990653992 9.097630500793457 1.3165825605392456 8.707106590270996 1.7071068286895752L2.4142136573791504 7.999999523162842L8.707106590270996 14.292892456054688C9.097630500793457 14.683417320251465 9.097630500793457 15.316581726074219 8.707106590270996 15.707106590270996C8.316581726074219 16.09762954711914 7.683417320251465 16.09762954711914 7.292892932891846 15.707106590270996L0.2928932309150696 8.707106590270996C-0.09763109683990479 8.316581726074219 -0.09763109683990479 7.683417320251465 0.2928932309150696 7.292892932891846L7.292892932891846 0.2928932309150696C7.683417320251465 -0.09763109683990479 8.316581726074219 -0.09763109683990479 8.707106590270996 0.2928932309150696Z";
var aL = "M0.2928932309150696 0.2928932309150696C0.6834174990653992 -0.09763109683990479 1.3165825605392456 -0.09763109683990479 1.7071068286895752 0.2928932309150696L7.999999523162842 6.585785865783691L14.292892456054688 0.2928932309150696C14.683417320251465 -0.09763109683990479 15.316581726074219 -0.09763109683990479 15.707106590270996 0.2928932309150696C16.09762954711914 0.6834174990653992 16.09762954711914 1.3165825605392456 15.707106590270996 1.7071068286895752L8.707106590270996 8.707106590270996C8.316581726074219 9.097630500793457 7.683417320251465 9.097630500793457 7.292892932891846 8.707106590270996L0.2928932309150696 1.7071068286895752C-0.09763109683990479 1.3165825605392456 -0.09763109683990479 0.6834174990653992 0.2928932309150696 0.2928932309150696Z";
var r8 = "M0.2928932309150696 0.2928932309150696C0.6834174990653992 -0.09763109683990479 1.3165825605392456 -0.09763109683990479 1.7071068286895752 0.2928932309150696L8.707106590270996 7.292892932891846C9.097630500793457 7.683417320251465 9.097630500793457 8.316581726074219 8.707106590270996 8.707106590270996L1.7071068286895752 15.707106590270996C1.3165825605392456 16.09762954711914 0.6834174990653992 16.09762954711914 0.2928932309150696 15.707106590270996C-0.09763109683990479 15.316581726074219 -0.09763109683990479 14.683417320251465 0.2928932309150696 14.292892456054688L6.585785865783691 7.999999523162842L0.2928932309150696 1.7071068286895752C-0.09763109683990479 1.3165825605392456 -0.09763109683990479 0.6834174990653992 0.2928932309150696 0.2928932309150696Z";
var i8 = { m00: 1, m01: 0, m02: 0, m10: 0, m11: 1, m12: 0 };
var L0 = [{ type: "SOLID", color: { r: 1, g: 1, b: 1, a: 1 }, opacity: 1, visible: !0, blendMode: "NORMAL" }];
var I0 = [{ type: "SOLID", color: { r: 1, g: 1, b: 1, a: 1 }, opacity: 1, visible: !1, blendMode: "NORMAL" }];
var n8 = { m00: 1, m01: 0, m02: 4, m10: 0, m11: 1, m12: 7 };
var X5 = { m00: 1, m01: 0, m02: 7.5, m10: 0, m11: 1, m12: 4 }, s8 = { normalizedSize: { x: 9, y: 16 }, fill: [{ svgPath: eL, windingRule: "ODD", styleID: 0, paints: L0 }], stroke: [] };
var L8 = { normalizedSize: { x: 16, y: 9 }, fill: [{ svgPath: aL, windingRule: "ODD", styleID: 0, paints: L0 }], stroke: [] };

// aurora-evidence:649
var oL = { type: "SYMBOL", name: "chevron left", visible: !0, opacity: 1, size: { x: 24, y: 24 }, transform: { m00: 1, m01: 0, m02: 168, m10: 0, m11: 1, m12: 219 }, strokeWeight: 1, strokeAlign: "INSIDE", strokeJoin: "MITER", fillPaints: I0, frameMaskDisabled: !0, id: "4410:29369", sourceId: "4410:29369", children: [{ type: "VECTOR", name: "Path (Stroke)", visible: !0, opacity: 1, size: { x: 9, y: 16 }, transform: X5, strokeWeight: 2, strokeAlign: "CENTER", strokeCap: "ROUND", strokeJoin: "ROUND", fillPaints: L0, horizontalConstraint: "SCALE", verticalConstraint: "SCALE", id: "4410:29369/7868:51893", sourceId: "7868:51893", resolvedPaths: s8, children: [] }] }, rL = /* @__PURE__ */ O0(oL, { nodeId: "4410:29369", name: "chevron left", assetUrl: y3 }), C0 = rL;

// aurora-native-assets:4410:29374
function m3(t) {
  throw new Error("No source image registered for " + t);
}

// aurora-evidence:648
var iL = { type: "SYMBOL", name: "chevron right", visible: !0, opacity: 1, size: { x: 24, y: 24 }, transform: { m00: 1, m01: 0, m02: 80, m10: 0, m11: 1, m12: 219 }, strokeWeight: 1, strokeAlign: "INSIDE", strokeJoin: "MITER", fillPaints: I0, frameMaskDisabled: !0, id: "4410:29374", sourceId: "4410:29374", children: [{ type: "VECTOR", name: "Path (Stroke)", visible: !0, opacity: 1, size: { x: 9, y: 16 }, transform: X5, strokeWeight: 2, strokeAlign: "CENTER", strokeCap: "ROUND", strokeJoin: "ROUND", fillPaints: L0, horizontalConstraint: "SCALE", verticalConstraint: "SCALE", id: "4410:29374/7868:51537", sourceId: "7868:51537", resolvedPaths: { normalizedSize: { x: 9, y: 16 }, fill: [{ svgPath: r8, windingRule: "ODD", styleID: 0, paints: L0 }], stroke: [] }, children: [] }] }, nL = /* @__PURE__ */ O0(iL, { nodeId: "4410:29374", name: "chevron right", assetUrl: m3 }), c0 = nL;

// aurora-native-assets:4410:29368
function Z3(t) {
  throw new Error("No source image registered for " + t);
}

// aurora-evidence:650
var sL = { type: "SYMBOL", name: "chevron down", visible: !0, opacity: 1, size: { x: 24, y: 24 }, transform: { m00: 1, m01: 0, m02: 212, m10: 0, m11: 1, m12: 219 }, strokeWeight: 1, strokeAlign: "INSIDE", strokeJoin: "MITER", fillPaints: I0, frameMaskDisabled: !0, id: "4410:29368", sourceId: "4410:29368", children: [{ type: "FRAME", name: "chevron-down", visible: !0, opacity: 1, size: { x: 16, y: 9 }, transform: n8, strokeWeight: 1, strokeAlign: "INSIDE", strokeJoin: "MITER", fillPaints: I0, frameMaskDisabled: !1, resizeToFit: !0, id: "4410:29368/4410:29344", sourceId: "4410:29344", children: [{ type: "VECTOR", name: "Path (Stroke)", visible: !0, opacity: 1, size: { x: 16, y: 9 }, transform: i8, strokeWeight: 2, strokeAlign: "CENTER", strokeCap: "ROUND", strokeJoin: "ROUND", fillPaints: L0, proportionsConstrained: !0, horizontalConstraint: "SCALE", verticalConstraint: "SCALE", id: "4410:29368/4410:29344/7868:52262", sourceId: "7868:52262", resolvedPaths: L8, children: [] }] }] }, LL = /* @__PURE__ */ O0(sL, { nodeId: "4410:29368", name: "chevron down", assetUrl: Z3 }), h0 = LL;

// packages/aurora-library/src/controls/web/WebAtomic.tsx
import { Fragment as $S, jsx as c8, jsxs as XS } from "react/jsx-runtime";
function m1({ page: t = 1, direction: e, selected: a = !1, label: r, disabled: o = !1, onPageChange: i, onClick: n, children: L, type: c = "button", ...C }) {
  if (!Number.isInteger(t) || t < 1) throw new RangeError("Aurora page numbers start at 1.");
  return z(F1({ variant: e === "previous" ? "< Chevron" : e === "next" ? "> Chevron" : a ? "Selected" : "Non Selected" }), "button", {
    ...C,
    type: c,
    disabled: o,
    "data-aurora-control": "web-pagination-unit",
    "aria-label": r ?? (e ? `${e === "previous" ? "Previous" : "Next"} page` : `Page ${t}`),
    "aria-current": !e && a ? "page" : void 0,
    className: ["aurora-web-unit", C.className].filter(Boolean).join(" "),
    onClick: (l) => {
      n?.(l), l.defaultPrevented || i?.(t);
    }
  }, (l) => {
    if (l.props["data-name"] === "Chevron") return C8(l, { className: `${l.props.className || ""} aurora-web-chevron-slot`, children: e === "previous" ? /* @__PURE__ */ c8(C0, { className: "aurora-web-chevron", "aria-hidden": "true", style: { width: 20, height: 20 } }) : /* @__PURE__ */ c8(c0, { className: "aurora-web-chevron", "aria-hidden": "true", style: { width: 20, height: 20 } }) });
    if (l.props["data-aurora-text"]) return C8(l, { children: L ?? t });
  });
}

// aurora-evidence:1252
import { jsx as q5 } from "react/jsx-runtime";
function cL({ kind: t, pageCount: e, page: a, defaultPage: r = 1, maxVisible: o, disabled: i = !1, onPageChange: n, onKeyDown: L, ...c }) {
  let C = e ?? (t === "web" ? 7 : 4), p = o ?? (t === "web" ? 7 : 4);
  if (!Number.isInteger(C) || C < 1 || !Number.isInteger(p) || p < 1) throw new RangeError("Pagination requires positive integer pageCount and maxVisible.");
  let [l, s] = CL(r), d = a ?? l;
  if (!Number.isInteger(d) || d < 1 || d > C) throw new RangeError("The selected page must exist; Web page numbers start at 1.");
  let h = Math.min(C, p), f = Math.max(1, Math.min(d - Math.floor(h / 2), C - h + 1)), x = (g) => {
    i || g < 1 || g > C || g === d || (a === void 0 && s(g), n?.(g));
  }, y = [
    /* @__PURE__ */ q5(m1, { direction: "previous", className: t === "web" ? "aurora-web-round-page-arrow" : void 0, page: Math.max(1, d - 1), disabled: i || d === 1, onPageChange: x }, "previous"),
    ...Array.from({ length: h }, (g, M) => {
      let u = f + M;
      return /* @__PURE__ */ q5(m1, { page: u, "data-pagination-page": u, selected: u === d, disabled: i, onPageChange: x }, u);
    }),
    /* @__PURE__ */ q5(m1, { direction: "next", className: t === "web" ? "aurora-web-round-page-arrow" : void 0, page: Math.min(C, d + 1), disabled: i || d === C, onPageChange: x }, "next")
  ], b = t === "standard" ? l0 : t === "dweb" ? p0 : f0, Z = t === "standard" ? "411:3941" : t === "dweb" ? "414:5182" : "414:4589";
  return z(b({}), "nav", {
    ...c,
    "aria-label": c["aria-label"] ?? "Pagination",
    "aria-disabled": i || void 0,
    className: ["aurora-web-pagination", c.className].filter(Boolean).join(" "),
    "data-aurora-control": "web-pagination",
    "data-pagination-style": t,
    onKeyDown: (g) => {
      if (L?.(g), i || g.defaultPrevented) return;
      let M = g.key === "Home" ? 1 : g.key === "End" ? C : g.key === "ArrowRight" ? Math.min(C, d + 1) : g.key === "ArrowLeft" ? Math.max(1, d - 1) : void 0;
      if (M === void 0) return;
      g.preventDefault(), x(M);
      let u = g.currentTarget;
      queueMicrotask(() => u.querySelector(`button[data-pagination-page="${M}"]`)?.focus());
    }
  }, (g, M) => M.id === Z ? Q(g, "div", {}, y) : void 0);
}
function dL(t) {
  return /* @__PURE__ */ q5(cL, { ...t, kind: "standard" });
}
var lL = dL;

// aurora-evidence:1253
import { Children as fP, cloneElement as hP, isValidElement as vP, useState as pL } from "react";
import { jsx as J5 } from "react/jsx-runtime";
function fL({ kind: t, pageCount: e, page: a, defaultPage: r = 1, maxVisible: o, disabled: i = !1, onPageChange: n, onKeyDown: L, ...c }) {
  let C = e ?? (t === "web" ? 7 : 4), p = o ?? (t === "web" ? 7 : 4);
  if (!Number.isInteger(C) || C < 1 || !Number.isInteger(p) || p < 1) throw new RangeError("Pagination requires positive integer pageCount and maxVisible.");
  let [l, s] = pL(r), d = a ?? l;
  if (!Number.isInteger(d) || d < 1 || d > C) throw new RangeError("The selected page must exist; Web page numbers start at 1.");
  let h = Math.min(C, p), f = Math.max(1, Math.min(d - Math.floor(h / 2), C - h + 1)), x = (g) => {
    i || g < 1 || g > C || g === d || (a === void 0 && s(g), n?.(g));
  }, y = [
    /* @__PURE__ */ J5(m1, { direction: "previous", className: t === "web" ? "aurora-web-round-page-arrow" : void 0, page: Math.max(1, d - 1), disabled: i || d === 1, onPageChange: x }, "previous"),
    ...Array.from({ length: h }, (g, M) => {
      let u = f + M;
      return /* @__PURE__ */ J5(m1, { page: u, "data-pagination-page": u, selected: u === d, disabled: i, onPageChange: x }, u);
    }),
    /* @__PURE__ */ J5(m1, { direction: "next", className: t === "web" ? "aurora-web-round-page-arrow" : void 0, page: Math.min(C, d + 1), disabled: i || d === C, onPageChange: x }, "next")
  ], b = t === "standard" ? l0 : t === "dweb" ? p0 : f0, Z = t === "standard" ? "411:3941" : t === "dweb" ? "414:5182" : "414:4589";
  return z(b({}), "nav", {
    ...c,
    "aria-label": c["aria-label"] ?? "Pagination",
    "aria-disabled": i || void 0,
    className: ["aurora-web-pagination", c.className].filter(Boolean).join(" "),
    "data-aurora-control": "web-pagination",
    "data-pagination-style": t,
    onKeyDown: (g) => {
      if (L?.(g), i || g.defaultPrevented) return;
      let M = g.key === "Home" ? 1 : g.key === "End" ? C : g.key === "ArrowRight" ? Math.min(C, d + 1) : g.key === "ArrowLeft" ? Math.max(1, d - 1) : void 0;
      if (M === void 0) return;
      g.preventDefault(), x(M);
      let u = g.currentTarget;
      queueMicrotask(() => u.querySelector(`button[data-pagination-page="${M}"]`)?.focus());
    }
  }, (g, M) => M.id === Z ? Q(g, "div", {}, y) : void 0);
}
function hL(t) {
  return /* @__PURE__ */ J5(fL, { ...t, kind: "dweb" });
}
var vL = hL;

// aurora-evidence:1254
import { Children as zP, cloneElement as NP, isValidElement as AP, useState as gL } from "react";
import { jsx as K5 } from "react/jsx-runtime";
function xL({ kind: t, pageCount: e, page: a, defaultPage: r = 1, maxVisible: o, disabled: i = !1, onPageChange: n, onKeyDown: L, ...c }) {
  let C = e ?? (t === "web" ? 7 : 4), p = o ?? (t === "web" ? 7 : 4);
  if (!Number.isInteger(C) || C < 1 || !Number.isInteger(p) || p < 1) throw new RangeError("Pagination requires positive integer pageCount and maxVisible.");
  let [l, s] = gL(r), d = a ?? l;
  if (!Number.isInteger(d) || d < 1 || d > C) throw new RangeError("The selected page must exist; Web page numbers start at 1.");
  let h = Math.min(C, p), f = Math.max(1, Math.min(d - Math.floor(h / 2), C - h + 1)), x = (g) => {
    i || g < 1 || g > C || g === d || (a === void 0 && s(g), n?.(g));
  }, y = [
    /* @__PURE__ */ K5(m1, { direction: "previous", className: t === "web" ? "aurora-web-round-page-arrow" : void 0, page: Math.max(1, d - 1), disabled: i || d === 1, onPageChange: x }, "previous"),
    ...Array.from({ length: h }, (g, M) => {
      let u = f + M;
      return /* @__PURE__ */ K5(m1, { page: u, "data-pagination-page": u, selected: u === d, disabled: i, onPageChange: x }, u);
    }),
    /* @__PURE__ */ K5(m1, { direction: "next", className: t === "web" ? "aurora-web-round-page-arrow" : void 0, page: Math.min(C, d + 1), disabled: i || d === C, onPageChange: x }, "next")
  ], b = t === "standard" ? l0 : t === "dweb" ? p0 : f0, Z = t === "standard" ? "411:3941" : t === "dweb" ? "414:5182" : "414:4589";
  return z(b({}), "nav", {
    ...c,
    "aria-label": c["aria-label"] ?? "Pagination",
    "aria-disabled": i || void 0,
    className: ["aurora-web-pagination", c.className].filter(Boolean).join(" "),
    "data-aurora-control": "web-pagination",
    "data-pagination-style": t,
    onKeyDown: (g) => {
      if (L?.(g), i || g.defaultPrevented) return;
      let M = g.key === "Home" ? 1 : g.key === "End" ? C : g.key === "ArrowRight" ? Math.min(C, d + 1) : g.key === "ArrowLeft" ? Math.max(1, d - 1) : void 0;
      if (M === void 0) return;
      g.preventDefault(), x(M);
      let u = g.currentTarget;
      queueMicrotask(() => u.querySelector(`button[data-pagination-page="${M}"]`)?.focus());
    }
  }, (g, M) => M.id === Z ? Q(g, "div", {}, y) : void 0);
}
function uL(t) {
  return /* @__PURE__ */ K5(xL, { ...t, kind: "web" });
}
var ML = uL;

// aurora-evidence:1262
import { Children as d8, cloneElement as P3, isValidElement as bL, useState as FP } from "react";
import { jsx as SL } from "react/jsx-runtime";
var S3 = ["2:28624", "2:28625", "2:28626", "2:28630"], yL = [27.01, 46.87, 66.34, 85.8];
function l8(t, e) {
  if (!bL(t)) return typeof t == "string" || typeof t == "number" ? e : t;
  let a = t;
  return P3(a, {}, d8.map(a.props.children, (r) => l8(r, e)));
}
function mL({ questions: t, disabled: e = !1, disabledQuestions: a = [], onQuestionSelect: r, onSeeAll: o, onAction: i, ...n }) {
  if (t && t.length > S3.length) throw new RangeError("The Aurora Web FAQ source has four question slots.");
  let L = [], c = z(_0({}), "section", {
    ...n,
    "aria-label": n["aria-label"] ?? "Frequently asked questions",
    "data-aurora-control": "web-faq",
    className: ["aurora-web-faq", n.className].filter(Boolean).join(" ")
  }, (p, l) => {
    let s = S3.indexOf(l.id);
    if (s >= 0) {
      let d = t?.[s];
      return L[s] = X(d === void 0 ? p : d).trim() || `Question ${s + 1}`, P3(p, { "aria-hidden": !0, "data-aurora-faq-question": !0 }, d === void 0 ? p.props.children : d8.map(p.props.children, (h) => l8(h, d)));
    }
    if (l.id === "2:28631") return Q(p, "button", {
      type: "button",
      disabled: e,
      className: "aurora-web-faq-see-all",
      onClick: (d) => {
        e || (o?.(d), d.defaultPrevented || i?.("see-all", d));
      }
    });
    if (l.type === "img") return k(p);
  }), C = S3.map((p, l) => /* @__PURE__ */ SL("button", { type: "button", className: "aurora-web-faq-question", disabled: e || a.includes(l), "aria-label": L[l] ?? `Question ${l + 1}`, "data-question-index": l, style: { position: "absolute", left: 0, top: `${yL[l]}%`, width: "100%", height: "14%", zIndex: 1 }, onClick: (s) => {
    e || a.includes(l) || (r?.(l, s), s.defaultPrevented || i?.(`question-${l}`, s));
  } }, l));
  return P3(c, {}, c.props.children, C);
}
var ZL = mL;

// aurora-evidence:1264
import { Children as qP, cloneElement as p8, isValidElement as JP, useId as KP, useState as tz } from "react";
import { Fragment as fz, jsx as f8, jsxs as hz } from "react/jsx-runtime";
function PL({ page: t = 1, direction: e, selected: a = !1, label: r, disabled: o = !1, onPageChange: i, onClick: n, children: L, type: c = "button", ...C }) {
  if (!Number.isInteger(t) || t < 1) throw new RangeError("Aurora page numbers start at 1.");
  return z(F1({ variant: e === "previous" ? "< Chevron" : e === "next" ? "> Chevron" : a ? "Selected" : "Non Selected" }), "button", {
    ...C,
    type: c,
    disabled: o,
    "data-aurora-control": "web-pagination-unit",
    "aria-label": r ?? (e ? `${e === "previous" ? "Previous" : "Next"} page` : `Page ${t}`),
    "aria-current": !e && a ? "page" : void 0,
    className: ["aurora-web-unit", C.className].filter(Boolean).join(" "),
    onClick: (l) => {
      n?.(l), l.defaultPrevented || i?.(t);
    }
  }, (l) => {
    if (l.props["data-name"] === "Chevron") return p8(l, { className: `${l.props.className || ""} aurora-web-chevron-slot`, children: e === "previous" ? /* @__PURE__ */ f8(C0, { className: "aurora-web-chevron", "aria-hidden": "true", style: { width: 20, height: 20 } }) : /* @__PURE__ */ f8(c0, { className: "aurora-web-chevron", "aria-hidden": "true", style: { width: 20, height: 20 } }) });
    if (l.props["data-aurora-text"]) return p8(l, { children: L ?? t });
  });
}
var zL = PL;

// aurora-evidence:1265
import { Children as h8, cloneElement as v8, isValidElement as NL, useId as xz, useState as AL } from "react";
import { Fragment as Oz, jsx as Dz, jsxs as Rz } from "react/jsx-runtime";
function QL(t, e) {
  let a = !1, r = (o) => {
    if (!NL(o)) return o;
    let i = o;
    return !a && i.props["data-aurora-text"] ? (a = !0, v8(i, { children: e })) : v8(i, { children: h8.map(i.props.children, r) });
  };
  return h8.map(t, r);
}
function IL({ actions: t = [{ label: "Later" }, { label: "Continue" }], disabled: e = !1, label: a = "Actions", className: r, onAction: o, appearance: i }) {
  let [n, L] = AL(null);
  return z(i0({ property1: i === "primary-hover" || !i && n === 1 ? "Primary hover" : i === "secondary-hover" || !i && n === 0 ? "Secondary hover" : "Default" }), "div", { role: "group", "aria-label": a, className: r, "data-aurora-control": "web-twins" }, (C) => {
    let p = C.props["data-name"];
    if (p !== "Primary" && p !== "Secondary") return;
    let l = p === "Secondary" ? 0 : 1, s = t[l];
    return Q(C, "button", {
      type: "button",
      disabled: e || s?.disabled,
      className: "aurora-web-action",
      style: { paddingInline: 20, minWidth: 0 },
      onMouseEnter: () => L(l),
      onMouseLeave: () => L(null),
      onFocus: () => L(l),
      onBlur: () => L(null),
      onClick: (d) => {
        s?.onClick?.(d), d.defaultPrevented || o?.(l, d);
      }
    }, s?.label === void 0 ? C.props.children : QL(C.props.children, s.label));
  });
}
var DL = IL;

// aurora-evidence:1266
import { Children as Ez, cloneElement as g8, isValidElement as kz, useId as Hz, useState as OL } from "react";
import { Fragment as tN, jsx as Kz, jsxs as eN } from "react/jsx-runtime";
function RL({ label: t, children: e, disabled: a = !1, onMouseEnter: r, onMouseLeave: o, onFocus: i, onBlur: n, appearance: L, type: c = "button", ...C }) {
  let [p, l] = OL(!1);
  return z(n0({ property1: L === "hover" || !L && p ? "hover" : "Default" }), "button", {
    ...C,
    type: c,
    disabled: a,
    "data-aurora-control": "web-button",
    className: ["aurora-web-action", C.className].filter(Boolean).join(" "),
    style: { display: "flex", alignItems: "center", justifyContent: "center", width: "max-content", minWidth: 80, height: 44, paddingInline: 10, ...C.style },
    onMouseEnter: (s) => {
      l(!0), r?.(s);
    },
    onMouseLeave: (s) => {
      l(!1), o?.(s);
    },
    onFocus: (s) => {
      l(!0), i?.(s);
    },
    onBlur: (s) => {
      l(!1), n?.(s);
    }
  }, (s) => {
    if (s.props["data-name"] === "Rectangle") return g8(s, { style: { ...s.props.style, width: "100%" } });
    if (s.props["data-aurora-text"]) return g8(s, { style: { ...s.props.style, position: "relative", left: "auto", top: "auto" }, ...(e ?? t) !== void 0 ? { children: e ?? t } : {} });
  });
}
var wL = RL;

// aurora-evidence:1267
import { Children as rN, cloneElement as x8, isValidElement as iN, useId as nN, useState as TL } from "react";
import { Fragment as FL, jsx as HL, jsxs as GL } from "react/jsx-runtime";
function EL({ selected: t, defaultSelected: e = !0, onSelectedChange: a, children: r = "Only ELITE", disabled: o = !1, onClick: i, type: n = "button", ...L }) {
  let [c, C] = TL(e), p = t ?? c, l = z(s0({ selected: p }), "button", {
    ...L,
    type: n,
    disabled: o,
    "data-aurora-control": "web-filter",
    "aria-pressed": p,
    className: ["aurora-web-action", L.className].filter(Boolean).join(" "),
    style: { width: "max-content", ...L.style },
    onClick: (s) => {
      i?.(s), s.defaultPrevented || (t === void 0 && C(!p), a?.(!p));
    }
  }, (s) => s.type === "img" || s.type === "svg" ? null : s.props["data-aurora-text"] ? x8(s, { children: r }) : void 0);
  return x8(l, { children: /* @__PURE__ */ GL(FL, { children: [
    l.props.children,
    /* @__PURE__ */ HL(h0, { "aria-hidden": "true", className: "aurora-web-chevron", style: { width: 20, height: 20, filter: p ? "brightness(0)" : "var(--aurora-widget-icon-filter,none)" } })
  ] }) });
}
var kL = EL;

// aurora-evidence:1268
import { Children as yN, cloneElement as UL, isValidElement as mN, useId as VL, useState as jL } from "react";
import { Fragment as EN, jsx as WL, jsxs as kN } from "react/jsx-runtime";
function _L({ mobile: t, label: e = "Search", value: a, defaultValue: r = "", onChange: o, onValueChange: i, onSearch: n, onClear: L, className: c, style: C, id: p, disabled: l = !1, onFocus: s, onBlur: d, onKeyDown: h, placeholder: f, appearance: x, ...y }) {
  let b = T1(a, r, i, o), Z = VL(), g = p ?? Z, [M, u] = jL(!1), v = !1, m = t ? G1({ property1: M || x === "hover" || x === "focused" ? "Hover" : "Default" }) : U1({ states: M || x === "focused" ? "clicked" : x === "hover" ? "hover" : "Default" });
  return z(m, "div", { role: "search", "aria-label": e, className: ["aurora-web-search", c].filter(Boolean).join(" "), style: C, "data-aurora-control": "web-search", "data-mobile": t, "data-disabled": l, onBlur: (S) => {
    S.currentTarget.contains(S.relatedTarget) || u(!1);
  } }, (S, R) => {
    if (S.type === "img" && typeof S.props.src == "string" && (/\.svg(?:\?|$)/.test(S.props.src) || S.props.src.startsWith("data:image/svg+xml"))) return UL(S, { style: { ...S.props.style, filter: "var(--aurora-widget-icon-filter,none)" } });
    if (String(S.props["data-name"] || "").startsWith("Button (All Variants)")) return Q(S, "button", { type: "button", disabled: l, "aria-label": "Submit search", className: "aurora-web-action", onClick: () => n?.(b.current) });
    if (!v && S.props["data-aurora-text"] && (t || ["2:11929", "2:11936", "2:11943"].includes(R.id)))
      return v = !0, Q(S, "input", {
        ...y,
        ref: b.input,
        id: g,
        type: "search",
        value: b.current,
        disabled: l,
        className: "aurora-web-search-input",
        "aria-label": e,
        placeholder: f ?? (t ? "Search for centres, gyms..." : "Search for workouts, live sessions, gyms..."),
        onChange: b.change,
        onFocus: (A) => {
          b.wasFocused.current = !0, u(!0), s?.(A);
        },
        onBlur: (A) => {
          b.wasFocused.current = !1, d?.(A);
        },
        onKeyDown: (A) => {
          h?.(A), !A.defaultPrevented && (A.key === "Enter" ? (A.preventDefault(), n?.(b.current)) : A.key === "Escape" && (A.preventDefault(), b.writeFromAction(""), L?.()));
        }
      });
  });
}
function BL(t) {
  return /* @__PURE__ */ WL(_L, { ...t, mobile: !0 });
}
var YL = BL;

// aurora-evidence:1269
import { Children as GN, cloneElement as $L, isValidElement as UN, useId as XL, useState as qL } from "react";
import { Fragment as aA, jsx as eC, jsxs as oA } from "react/jsx-runtime";
function JL({ mobile: t, label: e = "Search", value: a, defaultValue: r = "", onChange: o, onValueChange: i, onSearch: n, onClear: L, className: c, style: C, id: p, disabled: l = !1, onFocus: s, onBlur: d, onKeyDown: h, placeholder: f, appearance: x, ...y }) {
  let b = T1(a, r, i, o), Z = XL(), g = p ?? Z, [M, u] = qL(!1), v = !1, m = t ? G1({ property1: M || x === "hover" || x === "focused" ? "Hover" : "Default" }) : U1({ states: M || x === "focused" ? "clicked" : x === "hover" ? "hover" : "Default" });
  return z(m, "div", { role: "search", "aria-label": e, className: ["aurora-web-search", c].filter(Boolean).join(" "), style: C, "data-aurora-control": "web-search", "data-mobile": t, "data-disabled": l, onBlur: (S) => {
    S.currentTarget.contains(S.relatedTarget) || u(!1);
  } }, (S, R) => {
    if (S.type === "img" && typeof S.props.src == "string" && (/\.svg(?:\?|$)/.test(S.props.src) || S.props.src.startsWith("data:image/svg+xml"))) return $L(S, { style: { ...S.props.style, filter: "var(--aurora-widget-icon-filter,none)" } });
    if (String(S.props["data-name"] || "").startsWith("Button (All Variants)")) return Q(S, "button", { type: "button", disabled: l, "aria-label": "Submit search", className: "aurora-web-action", onClick: () => n?.(b.current) });
    if (!v && S.props["data-aurora-text"] && (t || ["2:11929", "2:11936", "2:11943"].includes(R.id)))
      return v = !0, Q(S, "input", {
        ...y,
        ref: b.input,
        id: g,
        type: "search",
        value: b.current,
        disabled: l,
        className: "aurora-web-search-input",
        "aria-label": e,
        placeholder: f ?? (t ? "Search for centres, gyms..." : "Search for workouts, live sessions, gyms..."),
        onChange: b.change,
        onFocus: (A) => {
          b.wasFocused.current = !0, u(!0), s?.(A);
        },
        onBlur: (A) => {
          b.wasFocused.current = !1, d?.(A);
        },
        onKeyDown: (A) => {
          h?.(A), !A.defaultPrevented && (A.key === "Enter" ? (A.preventDefault(), n?.(b.current)) : A.key === "Escape" && (A.preventDefault(), b.writeFromAction(""), L?.()));
        }
      });
  });
}
function KL(t) {
  return /* @__PURE__ */ eC(JL, { ...t, mobile: !1 });
}
var tC = KL;

// packages/aurora-library/aurora-native-entry.tsx
function cA({ children: t, theme: e = "dark", background: a = "previous", ...r }) {
  return z3("div", { className: "aurora-library", style: { display: "contents" } }, z3("div", { ...r, className: ["aurora-root", e === "white" ? "theme-white" : "", r.className].filter(Boolean).join(" "), style: { ...r.style, display: "contents" } }, z3(y5, { variant: a }, t)));
}
export {
  s6 as AuroraAccordianListViewN5623_38667,
  ba as AuroraAccordianListViewOpen3N12185_49429,
  fa as AuroraAccordianListViewStateN5623_38642,
  xa as AuroraAccordianListViewStateN5623_38804,
  s6 as AuroraAccordion,
  p4 as AuroraActionStack,
  o7 as AuroraAllCategoriesTabN10468_56980,
  y5 as AuroraBackground,
  q4 as AuroraBottomTrayFormServiceN1794_23330,
  r5 as AuroraCard,
  o7 as AuroraCategoriesPopup,
  G7 as AuroraChatInput,
  G7 as AuroraChatInputN15926_37574,
  oo as AuroraCheckbox,
  o6 as AuroraCheckboxGroup,
  o6 as AuroraCheckboxesGroupN6393_46813,
  K7 as AuroraChipSelectorGrid,
  K7 as AuroraChipSelectorGridN4313_28441,
  S7 as AuroraCircularActionButtonN14779_38684,
  S7 as AuroraCircularButton,
  y4 as AuroraCounter,
  J7 as AuroraCounterCard,
  J7 as AuroraCounterCardN5265_38410,
  y4 as AuroraCounterN5265_38271,
  V4 as AuroraCountersCarousel,
  V4 as AuroraCountersCarouselN5265_38488,
  j7 as AuroraDateLabels,
  j7 as AuroraDateLabelsN1794_22929,
  Y7 as AuroraDatePicker,
  Y7 as AuroraDatePickerN15518_37445,
  k7 as AuroraDropdown,
  k7 as AuroraDropdownN7125_48064,
  c7 as AuroraEmailField,
  c7 as AuroraEmailN3967_28861,
  T7 as AuroraFilterTabLabel,
  T7 as AuroraFilterTabLabelsN3712_26688,
  Q4 as AuroraFilterTabs,
  Q4 as AuroraFilterTabsN3712_26677,
  D7 as AuroraFloatingActionButton,
  D7 as AuroraFloatingActionButtonN7062_47949,
  H4 as AuroraFloatingRating,
  H4 as AuroraFloatingRatingN19801_47173,
  w7 as AuroraInLineSingleSelectTabN1522_12795,
  I4 as AuroraInLineTabsN1522_12813,
  w7 as AuroraInlineSingleSelectTab,
  I4 as AuroraInlineTabs,
  L6 as AuroraMoodRating,
  D4 as AuroraMultiDateJumper,
  D4 as AuroraMultiDateJumperN1794_23135,
  _r as AuroraMultiSelectChip,
  M7 as AuroraPaginationDots,
  M7 as AuroraPaginationDotsN7118_47699,
  g7 as AuroraPasswordField,
  g7 as AuroraPasswordFieldN5046_35372,
  L7 as AuroraPhoneField,
  L7 as AuroraPhoneFieldN3967_28876,
  hr as AuroraPrimaryButton,
  q4 as AuroraQuestionnaireSheet,
  Wa as AuroraRadio,
  e6 as AuroraRadioButtonsGroupN6393_46468,
  e6 as AuroraRadioGroup,
  i6 as AuroraRadioTiles,
  i6 as AuroraRadioTilesGroupN7597_49271,
  l2 as AuroraRangeSelector,
  l2 as AuroraRangeSelectorN7899_49440,
  W7 as AuroraRating,
  L6 as AuroraRatingBADN12997_37026,
  W7 as AuroraRatingN20779_47990,
  cA as AuroraScope,
  p7 as AuroraSearchField,
  p7 as AuroraSearchFieldN649_1156,
  gr as AuroraSecondaryButton,
  E4 as AuroraSingleDateJumper,
  E4 as AuroraSingleDateJumperN1343_8110,
  Ur as AuroraSingleSelectChip,
  l2 as AuroraSlider,
  p4 as AuroraStackedTwinsActionStackN262_43,
  R7 as AuroraSwipeButton,
  R7 as AuroraSwipeButtonN29020_4183,
  pr as AuroraTertiaryButton,
  P4 as AuroraTertiaryTwins,
  P4 as AuroraTertiaryTwinsN11610_25502,
  n7 as AuroraTextInput,
  N7 as AuroraThumbnailListViewButton,
  N7 as AuroraThumbnailListViewButtonN4064_26973,
  Lo as AuroraToggle,
  K3 as AuroraToggleWithText,
  K3 as AuroraToggleWithTextN4414_27531,
  V7 as AuroraTopNavTabLabel,
  V7 as AuroraTopNavTabLabelsN433_557,
  A4 as AuroraTopNavTabs,
  A4 as AuroraTopNavTabsN433_585,
  C4 as AuroraTriplets,
  C4 as AuroraTripletsN10800_55916,
  Z7 as AuroraTwins,
  Z7 as AuroraTwinsN1016_4406,
  wL as AuroraWebButton,
  ZL as AuroraWebFAQs,
  kL as AuroraWebFilterLabel,
  YL as AuroraWebMobileSearch,
  lL as AuroraWebPagination,
  vL as AuroraWebPaginationDweb,
  zL as AuroraWebPaginationUnit,
  ML as AuroraWebPaginationWeb,
  tC as AuroraWebSearch,
  DL as AuroraWebTwins
};
