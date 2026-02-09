# News Feed Eradicator Strict (Fork)

A stricter fork of News Feed Eradicator that replaces social media feeds with a quote and does not support snoozing.

[Install Chrome Extension](https://chrome.google.com/webstore/detail/news-feed-eradicator-for/fjcldmjmjhkklehbacihaiopjklihlgg?hl=en)

[Install Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/news-feed-eradicator/)

---------

## Fork goals

- No snooze UI or API path.
- No site or region disable controls in the extension UI.
- All supported sites are force-enabled by default.
- Feed blocking stays active continuously.
- Keep the codebase close to upstream where possible for easier maintenance.

## Keeping your fork up to date

Set the original project as `upstream`, then regularly sync:

```bash
git remote add upstream https://github.com/jordwest/news-feed-eradicator.git
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

Keep `main` as your upstream-sync branch, and keep strict behavior on a long-lived `strict` branch.
Sync flow:

```bash
git switch main
git fetch upstream
git merge upstream/main
git push origin main

git switch strict
git merge main
git push origin strict
```

## Contributing back

This exact "no snooze at all" fork is opinionated and may be better shared as a fork/release for users who want strict mode.
If you want to contribute upstream, the highest-likelihood path is an optional behavior (for example a setting that disables snooze), plus tests/docs.

## Contributing to News Feed Eradicator

### Reporting issues

For *bugs only*, please use the [issue tracker](https://github.com/jordwest/news-feed-eradicator/issues).

### Feature requests, ideas, etc

For feature requests, ideas, and new site suggestions, please use the [Ideas discussion board](https://github.com/jordwest/news-feed-eradicator/discussions/categories/ideas). Check first if your idea already exists and give it an upvote if so.

### Pull requests

In general, pull requests are only accepted for bug fixes or documentation improvements. In terms of features I mostly consider the project "done" and would like to keep it minimal and simple to reduce the maintenance burden. If you have ideas, please post in the [Ideas discussion board](https://github.com/jordwest/news-feed-eradicator/discussions/categories/ideas). You are of course welcome to fork the project if you'd like to make a more complex version.

----------

## Development

This plugin is built as a WebExtension - a standard for browser plugins currently supported in both Chrome and Firefox.

### Dependencies

 - [bun](https://bun.com/)
 - make

To build for either browser, clone the repository and then run:

    make dev

If everything is successful, check the `build` folder for the extension contents. You can load the `build` directory into either Chrome or Firefox as an _unpacked_ or _temporary_ extension. See the instructions for [Chrome](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked) or [Firefox](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox).

Running `make dev` will watch for changes and recompile, however each time you make changes you'll need to tell the browser to reload the temporary extension.

To build a distributable `.zip` for production, just run:

    make

The extension package can be found in the `dist` folder.
