import { PdfReader } from "pdfreader";

export function parsePdfFileItems(filePath) {
  new PdfReader().parseFileItems(filePath, (err, item) => {
    if (err) console.error("error:", err);
    else if (!item) console.warn("end of file");
    else if (item.text){
      return item.text;
    }
    
  });
}