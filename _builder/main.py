"""Build tool for assets."""

import json
from pathlib import Path


assets = {}
project = str(Path.cwd().as_posix())



def build():
    """Builds assets file."""
    
    global assets
    # Build HTML assets.
    for path in Path(f"{project}/src/html/").glob("*.*"):
        if path.suffix == ".html":
            key = path.name
            value = path.read_text()
            assets[key] = value

    # NOTE: Storage of stylesheet CSS in `assets` is intended for contructing 
    # stylesheets to be added to shadow roots. 
    # Using `import sheet from './styles.css' assert { type: 'css' };`
    # would render storage of stylesheet CSS in `assets` unnecessary,
    # as the imported sheet's `default` can be added adopted directly to a shadoe root.
    # However, support for CSS module scripts is still limited to Chromium-based browsers...


    # Build Bootstrap CSS assets.
    for path in Path(f"{project}/src/libs/bootstrap/").glob("*.*"):
        if path.suffix == ".css":
            key = f"bootstrap/{path.name}"
            value = path.read_text()
            assets[key] = value

    # Build UiKit CSS assets.
    for path in Path(f"{project}/src/libs/uikit/").glob("*.*"):
        if path.suffix == ".css":
            key = f"bootstrap/{path.name}"
            value = path.read_text()
            assets[key] = value


    text = f"export const assets = {json.dumps(assets, indent=2)}"
    Path(f"{project}/src/assets/_assets.js").write_text(text)
    



build()


