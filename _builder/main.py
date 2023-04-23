"""Build tool for assets."""

import json
from pathlib import Path


assets = {}
project = str(Path.cwd().as_posix())



def build():
    """Builds assets file."""
    # TODO: Currently only for html. Expand to cover css (for shadow roots) and perhaps svg's.
    global assets
    for path in Path(f"{project}/src/html/").glob("*.*"):
        if path.suffix in (".html"):
            key = path.name
            value = path.read_text()
            assets[key] = value
    text = f"export const assets = {json.dumps(assets, indent=2)}"
    Path(f"{project}/assets/assets.js").write_text(text)
    



build()


