import React from 'react';
import {
  CSS,
  CSV,
  DOCS,
  GIF,
  HTML,
  IMGS,
  JS,
  JSON,
  MANIFEST,
  NUMBERS,
  PDF,
  PPT,
  TS,
  TXT,
  VIDEO,
  XLSX,
  ZIP,
  UNKNWON,
} from '.';

export const IMG: { [key: string]: React.ComponentType } = {
  js: JS,
  ts: TS,
  html: HTML,
  css: CSS,
  json: JSON,
  png: IMGS,
  jpg: IMGS,
  jpeg: IMGS,
  svg: IMGS,
  gif: GIF,
  pdf: PDF,
  docs: DOCS,
  docx: DOCS,
  xls: XLSX,
  xlsx: XLSX,
  ppt: PPT,
  pptx: PPT,
  csv: CSV,
  gz: MANIFEST,
  mp4: VIDEO,
  mp3: VIDEO,
  zip: ZIP,
  numbers: NUMBERS,
  txt: TXT,
  manifest: MANIFEST,
  unknown: UNKNWON,
};
