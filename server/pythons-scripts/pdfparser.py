from pypdf import PdfReader

import sys

pdf_path = "/uploads/Yuna's Resume (2).pdf"

with open(pdf_path, "rb") as file:
    pdf_reader = PdfReader(file)
    page = pdf_reader.pages[0]
    text = page.extract_text()

    # Print the raw bytes to stdout
    sys.stdout.buffer.write(text.encode('utf-8'))
