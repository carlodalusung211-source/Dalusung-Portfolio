Carlo Glenn F. Dalusung — Portfolio (folder version)
=====================================================

FOLDER STRUCTURE
-----------------
site/
├── index.html            the page itself (structure + content)
├── css/
│   └── style.css         all styling (colors, layout, fonts)
├── js/
│   └── script.js         nav, tabs, ML project switcher
└── assets/
    └── images/
        ├── profile.jpg   your credentials photo
        └── uiux.jpg      the S-TILO UI/UX design flow

HOW THIS DIFFERS FROM THE index.html YOU HAD BEFORE
------------------------------------------------------
Before: one single file with the CSS, JS, and images all embedded
inline (images as base64 text). That's the easiest thing to host
(one file, drag-and-drop) but harder to read or edit by hand.

Now: the same page, split into real files, so you can open css/style.css
to see the design system, js/script.js to see the interactions, and
assets/images/ to see the actual image files — the way a normal web
project is organized.

HOW TO SWAP OR ADD AN IMAGE (now much simpler)
-------------------------------------------------
1. Drop the new image file into assets/images/, e.g. project2.jpg
2. In index.html, find the <img> tag for that section and change its
   src to "assets/images/project2.jpg"
That's it — no base64 conversion needed with this folder version.

HOW TO PREVIEW
----------------
Because the browser blocks some local file access for security,
double-clicking index.html may not load the CSS/JS/images correctly
from file:///. Instead, run a tiny local server from inside this folder:

    python3 -m http.server 8000

Then open http://localhost:8000 in your browser.

HOW TO HOST IT PUBLICLY (free)
---------------------------------
- GitHub Pages: push this whole folder to a repo, enable Pages, done.
- Netlify: drag-and-drop this whole folder onto app.netlify.com/drop

MAKING THE ML MODELS INTERACTIVE
------------------------------------
The Web Apps & ML section still just describes the 5 trained models
with real code from your PTF04_PROJECT Streamlit app — it can't run
them, since that needs a Python backend. Deploy portfolio.py at
share.streamlit.io using your existing GitHub repo, then link the
live app from this page.
