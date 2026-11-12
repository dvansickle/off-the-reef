# offthereef.com

Static site for Off The Reef, North Palmetto Point, Eleuthera. Plain HTML and CSS, no build step. Served by GitHub Pages. See `PLAN.md` for what the site is for and what content is still needed.

## Layout
```
index.html                 Home: the house, beach, booking, FAQ, email signup
palmetto-point/index.html  Area guide  -> offthereef.com/palmetto-point/
getting-here/index.html    Travel      -> offthereef.com/getting-here/
404.html                   Not-found page
assets/style.css           All styling
assets/site.js             Booking, Vrbo and signup links (edit once here)
assets/photos/             Put photos here
CNAME                      Custom domain for GitHub Pages
```

## Filling it in
1. **Links.** Open `assets/site.js` and paste the EVR direct-booking URL, the Vrbo URL and the signup form URL. Every button picks them up.
2. **Placeholders.** Anything still to fill shows with a dashed outline in the browser. In the HTML, search for `todo` and `TODO`. When a piece is done, remove `todo` from its `class`.
3. **Photos.** Export JPEGs about 2000 px on the long side (under ~400 KB each) into `assets/photos/`, then replace each empty figure as described in the comment above the photo grid in `index.html`. Write a real `alt` description for each.
4. **Share image.** Once there's a good beach photo, add the `og:image` line noted in the `<head>` of `index.html` so links shared by text or email show a picture.

## Publishing on GitHub Pages
1. Create a repository (e.g. `offthereef-site`) and push these files to the `main` branch.
2. In the repo: Settings > Pages > Build and deployment > Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Under Custom domain, enter `offthereef.com` (the `CNAME` file already says this).
4. At your domain registrar, set DNS:

| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | `<your-github-username>.github.io` |

   Remove any older A/AAAA records for `@` (parking pages, previous hosts).
5. When the DNS check passes (minutes to a day), tick **Enforce HTTPS**.
6. Recommended: in your GitHub account settings > Pages, add `offthereef.com` as a verified domain. It stops anyone else's repository from claiming the domain if your Pages site is ever switched off.

## Previewing locally
From this folder: `python3 -m http.server 8000`, then open http://localhost:8000. (Opening the HTML file directly won't load the styles, because links start at the site root.)

## After launch
- Submit `https://offthereef.com/sitemap.xml` in Google Search Console (verify the domain with a DNS TXT record).
- Put the site link on the Vrbo listing only if Vrbo's rules allow it; ask EVR.
- Ask EVR to note inquiries that mention the website.
