/* Sanity check: node check.js  (renders every panel to SVG files and parses them with python3 minidom) */
var fs = require("fs"), cp = require("child_process"), os = require("os"), path = require("path");
global.window = {}; 
var G = require("./js/art.js");
var dir = fs.mkdtempSync(path.join(os.tmpdir(), "gh-"));
// every panel is read from the PAGES data in js/app.js, so a new panel cannot be forgotten here
var appSrc = fs.readFileSync(path.join(__dirname, "js", "app.js"), "utf-8");
var rects = {}, m, re = /rect: \[(\d+), (\d+), (\d+), (\d+)\], art: "(\w+)"/g;
while ((m = re.exec(appSrc))) rects[m[5]] = [+m[3], +m[4]];
var expected = ["prologue", "p1a", "p1b", "p1c", "p2a", "p2b", "p2c", "p2d", "p3a", "p3b", "p3c", "p3d", "p4a", "p4b", "p4c", "p4d", "p5a", "p5b", "p5c", "p5d", "p6a", "p6b", "p6c", "p6d", "p7a", "p7b", "p7c", "p7d", "p7e", "p7f", "p8a", "p8b", "p8c", "p8d", "p9a", "p9b", "p9c", "p9d"];
expected.forEach(function (k) { if (!rects[k]) { console.error("MISSING panel in app.js PAGES:", k); process.exit(1); } if (!G.panels[k]) { console.error("MISSING art for", k); process.exit(1); } });
Object.keys(rects).forEach(function (k) { if (expected.indexOf(k) < 0) { console.error("UNEXPECTED panel:", k); process.exit(1); } });
var p7d = rects.p7d; if (p7d[0] < 776) { console.error("p7d must be splash-width"); process.exit(1); }
var files = [];
Object.keys(rects).forEach(function (k) {
  var r = rects[k], f = path.join(dir, k + ".svg");
  fs.writeFileSync(f, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + r[0] + " " + r[1] + '">' + G.panels[k](r[0], r[1]) + "</svg>");
  files.push(f);
});
var f = path.join(dir, "shield.svg");
fs.writeFileSync(f, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-200 -200 400 400">' + G.shield("active") + "</svg>"); files.push(f);
files.push(path.join(__dirname, "index.html"));
var py = "import sys,re\nfrom xml.dom import minidom\nfor f in sys.argv[1:]:\n  t=open(f,encoding='utf-8').read()\n  t=re.sub(r'<!DOCTYPE[^>]*>','',t)\n  d=minidom.parseString(t.encode('utf-8'))\n  print('OK',f.split('/')[-1],len(t))\n";
var r = cp.spawnSync("python3", ["-c", py].concat(files), { encoding: "utf-8" });
process.stdout.write(r.stdout); if (r.status) { process.stderr.write(r.stderr); process.exit(1); }
var sh = G.shield("dormant");
var np = (sh.match(/class="planet"/g) || []).length, ns = (sh.match(/class="star"/g) || []).length;
console.log("planets:", np, "stars:", ns);
if (np !== 6 || ns !== 6) { console.error("shield must have 6 planets and 6 stars"); process.exit(1); }
// the splash must carry the sign and banner text; the old-story art must be gone
var pro = G.panels.prologue(800, 1100);
["ASHFORD STEEL \u2014 EST. 1911", "COMING HOME: AMERICAN MANUFACTURING INITIATIVE"].forEach(function (t) { if (pro.indexOf(t) < 0) { console.error("splash missing text:", t); process.exit(1); } });
console.log("splash text OK");
