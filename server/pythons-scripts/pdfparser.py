import os
import sys
from pypdf import PdfReader
from pdffinder import get_latest_file

folder_path = "./uploads"
latest_file = get_latest_file(folder_path)
pdf_path = os.path.join(folder_path, latest_file)
with open(pdf_path, "rb") as file:
    pdf_reader = PdfReader(file)
    page = pdf_reader.pages[0]
    text = page.extract_text()

    # Print the raw bytes to stdout
    sys.stdout.buffer.write(text.encode('utf-8'))
