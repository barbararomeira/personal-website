# personal-website

Source for [barbararomeira.com](https://barbararomeira.com) — a Hugo site using the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme.

## Local preview

```bash
hugo server -D
```

Then open http://localhost:1313/. The `-D` flag includes drafts.

## Writing a post

```bash
hugo new content posts/your-post-title.md
```

Edit the new file under `content/posts/`. Remove `draft: true` (or set it to `false`) to publish.

## Updating the theme

```bash
git submodule update --remote --merge
```

## Deploying

The repo holds the source. The rendered site (`/public/`) is produced by `hugo` and deployed separately — see the project notes for the hosting setup once it's wired up.
