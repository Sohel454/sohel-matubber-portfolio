# Sohel Matubber — Academic Portfolio (Professional Layout)

This package updates the academic portfolio's information hierarchy and section-specific presentation.

## Section order

1. About / Academic Profile
2. Education & Academic Standing
3. Research & Scholarly Work
4. Undergraduate Thesis
5. Selected Engineering Projects
6. Technical Skills & Research Interests
7. Leadership & Service
8. Certificates & Memberships
9. Contact

The layout is designed for a prospective Master's supervisor or scholarship reviewer: academic standing is easy to locate, completed research evidence is separated from ongoing and planned work, and engineering projects and leadership are presented as concise cards rather than long explanatory paragraphs.

## Upload to the existing GitHub repository

Extract the ZIP, then merge these files into the existing repository:

- Replace the root `index.html`.
- Add/replace `assets/conference-device-structure.png`.
- Add/replace `assets/favicon.svg`.
- Add `documents/Certificate of Perticipation.pdf`.

**Do not delete or replace the existing `assets/` and `documents/` folders wholesale.** Keep these existing files:

- `assets/Profile.png` — used for the profile portrait.
- `documents/Sohel_Matubber_Academic_CV.docx` — used by the CV download link.
- `documents/IEEE presentation Certificate.pdf` — linked from the accepted/presented conference research card.
- The IEEE membership and volunteer certificate PDFs.

The package intentionally does not include copies of these existing repository files, so they must remain in place.

## Styling and scripts

The page uses Tailwind CSS through its CDN and Google Fonts, with the portfolio's custom styles and JavaScript embedded in `index.html`. No separate `css/` or `js/` directory is required for this version. An internet connection is required for the CDN and font resources.

## Academic accuracy notes

- CGPA 3.24/4.00 is explicitly labelled as the result through 3rd Year, 1st Semester; later results are pending publication.
- The conference research is labelled Accepted · Presented, without claiming journal publication or indexing.
- The photovoltaic metrics are identified as SCAPS-1D numerical simulation outputs, not experimental measurements.
- The supplied schematic lists WS₂, SnS₂, ZnSe, ZnO, PCBM and TiO₂ as ETL candidates. The current research record identifies SnS₂ in the reported modeled configuration.
- The undergraduate thesis is labelled topic finalized / research not started. No unsupported accuracy target is displayed.
- The Self-Driving Car is identified as an Engineering Project Design course project from Third Year, Second Semester and is marked In Progress. No unverified technical specifications are claimed.

## Deployment

Commit the merged files to the existing `main` branch. If GitHub Pages is already configured to deploy from the root of `main`, it should publish the update automatically.

## Update (v5)

- Header: brand avatar + name, desktop navigation from 1100px, accessible hamburger menu below that.
- Projects: photo cards with a "View Details" dialog, two-photo gallery and lightbox for the Self-Driving Car (status: Ongoing Development).
- Certificates: View and Download buttons for each PDF. Academic CV section added (DOCX only; no PDF exists).
- SEO: title, description, canonical, Open Graph, Twitter card, Person structured data, `assets/og-preview.png`.
- Project photos live in `assets/projects/self-driving-car/` (optimised copies plus untouched originals in `original/`).
- The canonical/Open Graph URL is `https://sohel454.github.io/sohel-matubber-portfolio/`. Confirm it under Settings → Pages and change it in `index.html` if it differs.
