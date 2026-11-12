# offthereef.com — site plan

## What the site is for
1. Be the home of the name. Anyone who hears "Off The Reef" and searches for it lands here first.
2. Send every booking to Eleuthera Vacation Rentals (EVR). The site never takes reservations, payments or availability itself.
3. Hold on to past guests. A simple email signup lets you invite them back each season, and a return booking through EVR's direct page avoids Vrbo's guest fees.
4. Answer the questions listings can't: where exactly this is, what the beach and reef are like, how to get here, what's nearby.

## How it fits with the other channels
| Channel | Job | Run by |
|---|---|---|
| Vrbo listing | Reach travelers who don't know the house yet; collect reviews | EVR (owners supply photos and copy) |
| EVR direct-booking page | The one place people book from this site | EVR |
| offthereef.com | Story, photos, area guide, travel logistics, email signup | David & Lolly |
| Google | Name searches land on this site; EVR's own business profile covers Maps; ask EVR whether their system feeds Google Vacation Rentals | — |

## Pages
- **Home** (`/`): what and where, the house, the beach and reef, photos, how booking works, FAQ, email signup.
- **Palmetto Point & around** (`/palmetto-point/`): the neighborhood, Governor's Harbour, beaches, day trips, owners' picks for food and supplies.
- **Getting here** (`/getting-here/`): flights into Governor's Harbour, the ferry option, car rental, arrival notes.

The area and travel pages give the site something to rank for beyond its own name ("North Palmetto Point beach rental", "how to get to Governor's Harbour Eleuthera"), and they're the pages past guests forward to friends.

## Booking links
All "Check dates and book" buttons read their address from one place, `assets/site.js`. Add the EVR direct-booking URL there once. Links carry `utm_source=offthereef.com` so, if EVR uses analytics, they can see bookings that came from the site. Also ask EVR to log "found us on offthereef.com" on inquiries.

## Content still needed from you
- Bedrooms, baths, sleeps, beds; AC; Wi-Fi/Starlink; kitchen and laundry highlights
- Photos (house, screened porch, patio and pergola, beach, reef, view at sunrise)
- EVR direct-booking URL and Vrbo listing URL
- Your picks for restaurants, groceries, beaches and day trips
- A sentence or two from you and Lolly on why you love the place (Lolly may want to write the whole home-page intro)
- House rules that matter to guests (kids, pets, minimum stay)

Everything still to fill in is marked with a dashed outline on the page and `TODO` in the HTML.

## Hosting
GitHub Pages from a repo (e.g. `offthereef-site`), custom domain `offthereef.com`, HTTPS enforced. Static HTML and CSS with no build step, so editing is just changing a file and pushing. See README for setup and DNS.

## Later, if it earns it
- Email signup via Tally (already connected) or Buttondown
- Simple privacy-friendly analytics (Plausible or GoatCounter)
- Embedded EVR availability calendar, if EVR offers one
- A short seasonal notes page (turtle season, best months for calm water, holidays)
