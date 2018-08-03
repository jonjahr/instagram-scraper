## What is it?

Download all instagram photos and videos from a user's profile.

We could scrape using node.js, but Instagam lazy-loads the photos
and this is hard for me to overcome.

I'll work on a selenium-based version that overcomes this.

## Quick Start

- Open the person's profile in browser.
- Scroll to the page bottom, so all photos are lazy-loaded into the DOM.
- Open the script console. Paste the contents of `/index.js` and run it.
- The result should be a list of line-separated links.
- Paste these links into `/images.txt`.
- Open terminal, `cd` to the directory you'll save the photos.
- Run `node_modules/.bin/instagram-save -f photos.txt`
- If it works, the photos and videos are saved to your directory.

## Dealing with Instagram's lazy-unloading 😠

When you scroll down, it appears Instagram lazy-unloads the first photos, so you never have all photos on the page at one time. Here's what I did to get all the pics:

- Run the command at the top. Paste into `photos.txt`.
- Scroll 10 rows down. Run command and paste again. Yes, I know we have lots of duplicate photos now.
- Repeat every 10 rows.
- Remove all the duplicate lines. In VSCode you can install `Transformer` extension and run the command `Transform: Unique Lines`.
- Now run `instagram-save` in terminal per instructions.

## Caveats

- For multi-photo posts (slideshow posts?), only the first photo is saved. This is a limitation of `instagram-download` library.
