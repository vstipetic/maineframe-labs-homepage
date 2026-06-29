# Custom domain setup

The `CNAME` file at the repo root tells GitHub Pages which custom domain to
serve the site from. It contains:

```
maineframelabs.hr
```

Do not add comments or other text to `CNAME` — GitHub expects exactly one domain
name per line.

## Domain registration

| Field | Value |
|-------|-------|
| Domain | `maineframelabs.hr` |
| Registrant | MaineFrame labs d.o.o. |
| Registered | 17.06.2026 |
| Expires | 17.06.2027 (renew annually) |
| Registrar | CARNet — [domene.hr](https://www.domene.hr) |
| Admin portal | <https://www.domene.hr/portal/mydomain> |
| Support | helpdesk@carnet.hr, +385 1 6661 555 |

Contact and billing details are managed in the domene.hr portal, not in this
repo.

## 1. Point DNS at GitHub Pages

Log in to the [domene.hr portal](https://www.domene.hr/portal/mydomain), open
**DNS zapisi** for `maineframelabs.hr`, and add the records below. If the DNS
section is empty, the domain resolves nowhere until these are added.

### Option A — apex domain (recommended for `maineframelabs.hr`)

Add four A records pointing to GitHub Pages' IPs:

| Type | Host | Value            |
|------|------|------------------|
| A    | @    | 185.199.108.153  |
| A    | @    | 185.199.109.153  |
| A    | @    | 185.199.110.153  |
| A    | @    | 185.199.111.153  |

In the domene.hr UI, **Host** `@` may appear as the bare domain or an empty
host field — use whichever the portal offers for the apex record.

### Option B — www subdomain

Add a CNAME record:

| Type  | Host | Value               |
|-------|------|---------------------|
| CNAME | www  | vstipetic.github.io |

Tip: set up both the apex A records and a `www` CNAME, then choose the apex as
your primary domain in GitHub settings and let GitHub redirect `www` to it.

## 2. Enable the domain in GitHub

1. Repo → **Settings → Pages**.
2. Under **Custom domain**, enter `maineframelabs.hr` and click **Save**.
3. Wait for DNS to propagate (minutes to a few hours).
4. Once verified, tick **Enforce HTTPS** so the site is served over HTTPS with
   a GitHub-managed certificate.

## 3. Verify

Visit `https://maineframelabs.hr` (or your chosen domain). The site should
load with a valid HTTPS certificate.

## Notes

- The IP addresses above are GitHub's published Pages IPs. Verify they haven't
  changed at <https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site>.
- DNS propagation can take time; GitHub will show a check once it resolves.
- CARNet recommends generic company email addresses for WHOIS contacts (GDPR).
  Update contacts in the domene.hr portal when a shared address (e.g.
  `info@maineframelabs.hr`) is available.
