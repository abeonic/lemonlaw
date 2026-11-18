# LemonLawFL h

This static site uses HTML, CSS, JavaScript, and the supplied SVG logo. Case inquiries use the phone number printed on the logo.

## Preview locally

Run `python3 -m http.server 8080 --directory public` from this folder and open http://localhost:8080.

## Deploy on Vercel

Extract the ZIP and import the project folder into Vercel from a Git repository, or run `npx vercel --prod` from the folder that contains `vercel.json`. If the dashboard asks for a framework preset, choose **Other**. The configuration serves the `public` directory directly. The site requires no environment variables.
