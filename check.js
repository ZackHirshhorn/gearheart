/* Sanity check: node check.js  (renders every panel to SVG files and parses them with python3 minidom) */
var fs = require("fs"), cp = require("child_process"), os = require("os"), path = require("path");
global.window = {}; 
var G = require("./js/art.js");
var dir = fs.mkdtempSync(path.join(os.tmpdir(), "gh-"));
var rects = { prologue: [800, 1100], p1a: [776, 520], p1b: [380, 544], p1c: [384, 544], p2a: [776, 420], p2b: [776, 300], p2c: [776, 332], p3a: [776, 180], p3b: [380, 884], p3c: [384, 884] };
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
console.log("planets:", (sh.match(/class="planet"/g) || []).length, "stars:", (sh.match(/class="star"/g) || []).length);
