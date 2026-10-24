# justfile — setup / test / lint / run are the contract every repo keeps.

# No dependencies: wrangler comes through npx.
setup:
    npx --yes wrangler --version

# No test suite: every script must at least parse.
test:
    for f in public/*.js; do node --check "$f"; done

lint: test
    docs-build --check docs

run:
    npx wrangler dev

# Production: ask the owner first.
deploy:
    npx wrangler deploy
