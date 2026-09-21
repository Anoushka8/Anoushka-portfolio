#!/usr/bin/env python3
"""Write work/<id>/index.html for every project so case studies live at /work/<id>.

Each file is project.html with root-relative asset paths. Run after editing
project.html or adding a project, then commit the generated files.
"""
import pathlib, re

ids = re.findall(r"id: '([a-z]+)'", pathlib.Path('projects-data.js').read_text())
shell = pathlib.Path('project.html').read_text().replace('"./', '"/')
for pid in ids:
    out = pathlib.Path('work') / pid / 'index.html'
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(shell)
print('wrote', len(ids), 'case pages:', ', '.join(ids))
