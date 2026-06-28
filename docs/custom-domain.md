# Custom domain setup

The `CNAME` file at the repo root tells GitHub Pages which custom domain to
serve the site from. It currently holds a **placeholder**:

```
maineframelabs.hr
```

Replace it with your real domain when you have one, then complete the steps
below.

## 1. Update the CNAME file

Edit `CNAME` in the repo root so it contains exactly your domain (no protocol,
no trailing slash), e.g.:

```
maineframelabs.hr
```

For a `www` subdomain you'd instead use `www.maineframelabs.hr`. Commit and push.

## 2. Point DNS at GitHub Pages

With your DNS provider, add one of the following.

### Option A — apex domain (recommended for `maineframelabs.hr`)

Add A records pointing to GitHub Pages' IPs:

| Type | Host | Value            |
|------|------|------------------|
| A    | @    | 185.199.108.153  |
| A    | @    | 185.199.109.153  |
| A    | @    | 185.199.110.153  |
| A    | @    | 185.199.111.153  |

### Option B — www subdomain

Add a CNAME record:

| Type  | Host | Value                          |
|-------|------|--------------------------------|
| CNAME | www  | vstipetic.github.io            |

Tip: set up both the apex A records and a `www` CNAME, then choose the apex as
your primary domain in GitHub settings and let GitHub redirect `www` to it.

## 3. Enable the domain in GitHub

1. Repo → **Settings → Pages**.
2. Under **Custom domain**, enter your domain and click **Save**.
3. Wait for DNS to propagate (minutes to a few hours).
4. Once verified, tick **Enforce HTTPS** so the site is served over HTTPS with
   a GitHub-managed certificate.

## 4. Verify

Visit `https://maineframelabs.hr` (or your chosen domain). The site should
load with a valid HTTPS certificate.

## Notes

- The IP addresses above are GitHub's published Pages IPs. Verify they haven't
  changed at <https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site>.
- DNS propagation can take time; GitHub will show a check once it resolves.
