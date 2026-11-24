# Sohel Matubber — Academic Portfolio

A static, offline-ready academic portfolio using the approved **Minimalist Swiss Editorial — Option B** visual identity.

## Run locally

1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. No package manager, build process, CDN, remote font, or GitHub connection is required.

For the most reliable local testing, you may also run a simple local server from this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy manually

1. Extract the ZIP.
2. Open your existing website project folder.
3. Back up the current files.
4. Replace the old `index.html` and add the supplied `css/`, `js/`, and `assets/` folders.
5. Keep the folder structure unchanged.
6. Upload the files to your hosting provider manually if you choose to publish. No GitHub access or repository changes were performed.

## Included files

- `index.html` — complete semantic HTML.
- `css/styles.css` — complete responsive CSS; no external framework.
- `js/app.js` — menu, section navigation, layer explorer, publication toggles, project details modal, CV status modal and copy-email interaction.
- `assets/favicon.svg` — local favicon.
- `assets/conference-device-structure.png` — original device-structure figure supplied for the accepted conference paper.
- `documents/README.txt` — missing document checklist.

## Owner-supplied files still needed

The uploaded source HTML referred to the following assets, but they were not present in the files supplied for this task. To avoid broken paths and fake downloads, the website does not link to them.

1. **Profile photograph:** `assets/Profile.png` (the requested uppercase `P` is preserved in this filename guidance). The site currently displays an initials-based editorial placeholder, not a replacement photograph.
2. **Academic CV:** `documents/Sohel_Matubber_Academic_CV.docx`. No substitute PDF has been generated.
3. **Certificate PDFs:** the source HTML referenced:
   - Certificate of Participation PDF
   - IEEE i-COSTE 2026 Presentation Certificate PDF
   - IEEE Membership 2027 PDF
   - IEEE Computer Society Membership 2027 PDF
   - IEEE Women in Engineering Membership 2027 PDF
   - IEEE Volunteer Treasurer 2026–2027 PDF
   The archive records these references as files not supplied and does not expose broken view/download links.
4. **Publication metadata:** the source files do not provide the author list, DOI, proceedings URL, or verified publication/indexing status. The portfolio records the supplied conference presentation and paper ID only.
5. **Project evidence:** no project photographs, verified technology lists, personal contribution statements, demo URLs, or repository URLs were supplied. Existing project titles and descriptions are retained without invented technical claims.
6. **Deployment domain:** no live website URL was supplied. Canonical and social-image URLs are omitted rather than set to placeholders.

## Academic information applied

- Institution: **Jamalpur Science & Technology University** (current name supplied by the owner).
- Admission session: 2022–2023.
- Academic status: 4th Year, 1st Semester; classes ongoing.
- CGPA: 3.24/4.00 through 3rd Year, 1st Semester; later results awaiting publication.
- Elective I: Computer Networks.
- Thesis: *Machine Learning-Based Prediction of Solar Cell Performance Using Offline Data*; topic finalized, research not started.

The uploaded curriculum PDF still carries the former university name. The current name supplied by the owner is used in the website.

## Brand color system

The updated site now reuses the previous live portfolio's primary royal-blue identity:
- Primary blue: `#2563EB`
- Hover / darker blue: `#1D4ED8`
- Pale blue: `#EFF6FF`
- Light blue: `#DBEAFE`
- Previous site's neutral references: `#F8F9FA`, `#171717`, `#52525B`, `#E5E7EB`

The same royal-blue accent is used in Light, Dark and System theme modes. The dark theme changes surfaces and text contrast, not the brand identity.

## Research figure and theme options

- The original accepted-paper device structure image is included without redrawing or altering its labels.
- Correct layer sequence from substrate to top contact: FTO / ETL / CuAgBeSnSe₄ / MASnI₃ / Zn₃P₂ / Au.
- Figure parameters: FTO 0.45 µm; ETL 0.05 µm; CuAgBeSnSe₄ 0.20 µm; MASnI₃ 0.50 µm; Zn₃P₂ 0.10 µm; Au value 5.1 eV.
- ETL candidates shown: WS₂, SnS₂, ZnSe, ZnO, PCBM and TiO₂. The figure lists these as candidate materials; it does not identify one selected ETL.
- Theme selector offers Light, Dark and System. The initial default remains Light, and the selected preference is saved locally in the browser.
- The Dark theme uses the same approved Option B palette, not a new accent palette.

## Validation report

The project was checked for:
- HTML parse errors using Python's HTML parser.
- Duplicate HTML IDs.
- Internal anchor targets.
- Local CSS, JavaScript and favicon references.
- Missing active local file references.
- JavaScript syntax using Node.js, if Node.js was available in the execution environment.
- Placeholder URLs and external CDN dependencies.

A Chromium/Playwright preview was attempted, but browser navigation was blocked by the execution environment (`ERR_BLOCKED_BY_ADMINISTRATOR`). Therefore, visual rendering and real-browser interaction checks are not claimed. Please preview the extracted project in your target browsers before publishing.


## Preserve existing GitHub profile files when deploying this update

This updated HTML is wired to the file paths already used by the previous GitHub Pages site:
- `assets/Profile.png` — profile photograph
- `documents/Sohel_Matubber_Academic_CV.docx` — academic CV
- `documents/Certificate of Perticipation.pdf`
- `documents/IEEE presentation Certificate.pdf`
- `documents/IEEE_Membership_2027.pdf`
- `documents/IEEE_Computer_Society_Membership_2027.pdf`
- `documents/IEEE_Women_in_Engineering_Membership_2027.pdf`
- `documents/IEEE_Volunteer_Treasurer_2026-2027.pdf`

**Important:** When uploading this update to the existing repository, merge the new files into the existing `assets/` and `documents/` folders. Do not delete or replace those folders with the reduced copies in this source package. Keep all the listed existing files. Add the new `assets/conference-device-structure.png`, and upload the new `css/` and `js/` folders alongside the updated root `index.html`.
