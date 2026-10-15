# 49 Days — a little long-distance surprise ♡

A responsive, single-page romantic website for GitHub Pages.

## Personalise it

1. **Photos:** Put 3–4 photos in `assets/`, named `photo-1.jpg` through `photo-4.jpg`. If you only want three, delete the fourth `<figure>` from `index.html`.
2. **Music:** Put your MP3 at `assets/our-song.mp3`, then open `index.html` and uncomment this line inside the audio element:
   ```html
   <source src="assets/our-song.mp3" type="audio/mpeg" />
   ```
   Music starts after the correct date is entered. Some browsers may still restrict playback.
3. **Message:** Edit the paragraphs in the `article` with id `loveLetter` in `index.html` to make it sound more like you.
4. **Date password:** The default accepts `28/08`, `28-08`, `28 08`, `2808`, `28 August`, and `August 28`. Edit `CORRECT_DATE` in `script.js` if you want other formats.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder.
3. In the repository, open **Settings → Pages**.
4. Under build/deployment, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
5. Wait for GitHub Pages to publish and open the provided site link.

## Important privacy note

GitHub Pages is public hosting. A date password on a static site is only a cute entrance screen—not real security. The password and page content can be discovered by inspecting the website files, and uploaded photos/music are publicly accessible to anyone with the site URL or repository access. Avoid uploading anything either of you would not want public.
"# 49days" 
