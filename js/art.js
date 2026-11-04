/* GEARHEART hand-authored SVG art. Every function returns SVG markup (string). No external assets. */
(function () {
  "use strict";
  var C = { steel: "#2b3139", steel2: "#4a5560", steel3: "#8a97a3", ink: "#0d1014", rust: "#c8602a", rust2: "#8f3d1a",
    red: "#c8202f", red2: "#7a0f1a", blue: "#1c3f8f", white: "#f4f6f8", gold: "#ffd27a", denim: "#34506f" };
  var f1 = function (n) { return Math.round(n * 100) / 100; };

  function rng(seed) { var s = seed; return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }

  /* polygon path of a gear centered at 0,0 */
  function gearPath(rTip, rRoot, n) {
    var d = "", step = Math.PI * 2 / n, i, a;
    for (i = 0; i < n; i++) {
      a = i * step;
      var pts = [[rRoot, -0.5], [rTip, -0.28], [rTip, 0.28], [rRoot, 0.5]];
      for (var j = 0; j < 4; j++) {
        var ang = a + pts[j][1] * step;
        d += (d ? "L" : "M") + f1(Math.cos(ang) * pts[j][0]) + " " + f1(Math.sin(ang) * pts[j][0]);
      }
    }
    return d + "Z";
  }
  function starPath(ro, ri) {
    var d = "";
    for (var i = 0; i < 10; i++) {
      var r = i % 2 ? ri : ro, a = -Math.PI / 2 + i * Math.PI / 5;
      d += (i ? "L" : "M") + f1(Math.cos(a) * r) + " " + f1(Math.sin(a) * r);
    }
    return d + "Z";
  }
  function circlePath(r) { return "M" + (-r) + " 0a" + r + " " + r + " 0 1 0 " + (2 * r) + " 0a" + r + " " + r + " 0 1 0 " + (-2 * r) + " 0Z"; }

  /* ---------- THE SHIELD: planetary gear system, centered at 0,0, radius ~200 ---------- */
  function shield(state) {
    var s = '<g class="shield ' + (state === "active" ? "active" : "dormant") + '">';
    s += '<g class="ringspin">';
    s += '<circle r="192" fill="none" stroke="' + C.blue + '" stroke-width="18"/>';
    s += '<circle r="192" fill="none" stroke="' + C.white + '" stroke-width="18" stroke-dasharray="14 14"/>';
    s += '<circle r="192" fill="none" stroke="#0a1f4d" stroke-width="2" opacity=".6"/>';
    s += '<path fill="' + C.red + '" fill-rule="evenodd" stroke="' + C.red2 + '" stroke-width="2" d="' + circlePath(180) + gearPath(150, 139, 64) + '"/>';
    s += '</g>';
    s += '<circle r="146" fill="#171c22"/>';
    s += '<g class="carrier">';
    s += '<g class="blur" fill="none" stroke="' + C.white + '" stroke-linecap="round">' +
      '<circle r="100" stroke-width="3" stroke-dasharray="40 60" opacity=".7"/><circle r="118" stroke-width="2" stroke-dasharray="26 70" opacity=".6"/><circle r="82" stroke-width="2" stroke-dasharray="20 50" opacity=".6"/></g>';
    for (var i = 0; i < 6; i++) {
      var a = i * Math.PI / 3 - Math.PI / 2;
      s += '<g class="planet" data-i="' + i + '" transform="translate(' + f1(Math.cos(a) * 100) + " " + f1(Math.sin(a) * 100) + ')">' +
        '<g class="pspin"><path fill="' + C.red + '" stroke="' + C.red2 + '" stroke-width="2" d="' + gearPath(40, 32, 16) + '"/>' +
        '<circle r="26" fill="none" stroke="' + C.red2 + '" stroke-width="2" opacity=".5"/>' +
        '<path class="star" d="' + starPath(18, 7.5) + '"/><path class="glint" fill="none" stroke="#bfe6ff" stroke-width="3" d="' + starPath(18, 7.5) + '"/></g></g>';
    }
    s += '</g>';
    s += '<g class="sunspin"><path fill="' + C.red + '" fill-rule="evenodd" stroke="' + C.red2 + '" stroke-width="3" d="' + gearPath(60, 48, 18) + circlePath(24) + '"/>' +
      '<circle r="36" fill="none" stroke="' + C.red2 + '" stroke-width="3" opacity=".5"/></g>';
    s += '<g class="sparks" fill="' + C.gold + '">';
    for (var k = 0; k < 8; k++) {
      var b = k * Math.PI / 4 + 0.3, rr = 186;
      s += '<path class="spark" transform="translate(' + f1(Math.cos(b) * rr) + " " + f1(Math.sin(b) * rr) + ') rotate(' + (k * 45) + ')" d="M-10 0L0 -3L10 0L0 3Z"/>';
    }
    s += '</g></g>';
    return s;
  }
  function shieldAt(cx, cy, scale, state) { return '<g transform="translate(' + cx + " " + cy + ") scale(" + scale + ')">' + shield(state) + "</g>"; }

  /* ---------- shared drawing helpers ---------- */
  function gearAt(x, y, rTip, rRoot, n, fill, extra) {
    return '<path transform="translate(' + x + " " + y + ')" d="' + gearPath(rTip, rRoot, n) + circlePath(rRoot * 0.35) + '" fill-rule="evenodd" fill="' + fill + '" ' + (extra || "") + "/>";
  }
  /* generic figure, feet at (x,y), about 224 units tall at sc 1. o: coat, skin, hair, long, hat, tie, pants, rim, pose, look, flip, rot, kneel */
  function man(x, y, sc, o) {
    o = o || {};
    var coat = o.coat || C.steel2, skin = o.skin || "#b98a6a", rim = o.rim || C.rust, pants = o.pants || "#12151a";
    var pose = o.pose || "stand", look = o.look || 0, k = o.kneel ? 36 : 0;
    var g = '<g transform="translate(' + x + " " + y + ")" + (o.rot ? " rotate(" + o.rot + ")" : "") + " scale(" + (o.flip ? -sc : sc) + " " + sc + ')">';
    if (o.kneel) {
      g += '<path d="M-18 -58L16 -58L50 -30L36 -18Z M32 -34L52 -30L52 -2L34 -2Z M-18 -58L-4 -50L-30 -12L-48 -14Z M-56 -14L-26 -14L-26 -2L-56 -2Z" fill="' + pants + '"/>';
      g += '<path d="M30 -2h30v8h-30zM-60 -2h12v6h-12z" fill="#0a0c0f"/>';
    } else {
      g += '<path d="M-22 -2L-26 -92L-2 -92L-2 -2Z M2 -2L2 -92L26 -92L22 -2Z" fill="' + pants + '"/>';
      g += '<path d="M-26 -2h22v8h-30zM4 -2h22l8 8h-30z" fill="#0a0c0f"/>';
    }
    g += '<g transform="translate(0 ' + k + ')">';
    g += '<path d="M-34 -168L-16 -180L16 -180L34 -168L28 -88L-28 -88Z" fill="' + coat + '"/>';
    g += '<path d="M34 -168L28 -88" stroke="' + rim + '" stroke-width="3" fill="none"/>';
    if (o.tie) g += '<path d="M-12 -180L0 -150L12 -180Z" fill="#f4f6f8"/><path d="M-5 -178L5 -178L8 -140L0 -132L-8 -140Z" fill="' + C.red + '"/>';
    if (o.collar) g += '<path d="M-16 -180L0 -160L16 -180" fill="none" stroke="#10151b" stroke-width="2"/><path d="M0 -160V-90" stroke="#10151b" stroke-width="2"/>';
    if (pose === "point") {
      g += '<path d="M-32 -166L-46 -110L-40 -84L-28 -88L-30 -126Z" fill="' + coat + '"/>';
      g += '<path d="M30 -166L92 -200L100 -188L40 -140Z" fill="' + coat + '"/><circle cx="104" cy="-196" r="8" fill="' + skin + '"/>';
    } else if (pose === "reach") {
      g += '<path d="M-32 -166L-46 -110L-40 -84L-28 -88L-30 -126Z" fill="' + coat + '"/>';
      g += '<path d="M30 -166L88 -170L90 -156L36 -138Z" fill="' + coat + '"/><circle cx="96" cy="-163" r="8" fill="' + skin + '"/>';
    } else if (pose === "touch") {
      g += '<path d="M-32 -166L-46 -110L-40 -84L-28 -88L-30 -126Z" fill="' + coat + '"/>';
      g += '<path d="M30 -166L58 -120L96 -104L100 -92L52 -100L28 -140Z" fill="' + coat + '"/><circle cx="102" cy="-98" r="8" fill="' + skin + '"/>';
    } else if (pose === "up") {
      g += '<path d="M-32 -166L-48 -190L-22 -208L-14 -196L-30 -184Z M32 -166L48 -190L22 -208L14 -196L30 -184Z" fill="' + coat + '"/>';
      g += '<circle cx="-18" cy="-204" r="8" fill="' + skin + '"/><circle cx="18" cy="-204" r="8" fill="' + skin + '"/>';
    } else {
      g += '<path d="M-32 -166L-46 -110L-40 -84L-28 -88L-30 -126Z M32 -166L46 -110L40 -84L28 -88L30 -126Z" fill="' + coat + '"/>';
      g += '<circle cx="-40" cy="-80" r="8" fill="' + skin + '"/><circle cx="40" cy="-80" r="8" fill="' + skin + '"/>';
    }
    g += '<path d="M-7 -184L-7 -172L7 -172L7 -184Z" fill="' + skin + '"/>';
    g += '<circle cx="0" cy="-196" r="17" fill="' + skin + '" stroke="' + rim + '" stroke-width="2"/>';
    if (pose !== "up") g += '<circle cx="' + (-6 + look * 4) + '" cy="-198" r="1.8" fill="#10151b"/><circle cx="' + (6 + look * 4) + '" cy="-198" r="1.8" fill="#10151b"/>';
    if (o.long) g += '<path d="M-19 -200Q-22 -224 0 -224Q22 -224 19 -200L22 -168L14 -176L14 -196L-14 -196L-14 -176L-22 -168Z" fill="' + o.hair + '"/>';
    else if (o.hair) g += '<path d="M-18 -200Q-18 -222 0 -222Q18 -222 18 -200Q10 -210 0 -210Q-10 -210 -18 -200Z" fill="' + o.hair + '"/>';
    if (o.hat) g += '<path d="M-19 -203Q0 -230 19 -203Z" fill="' + o.hat + '" stroke="' + rim + '" stroke-width="1.5"/><path d="M-25 -203H25V-198H-25Z" fill="' + o.hat + '"/>';
    return g + "</g></g>";
  }
  /* Dan: denim jacket, jeans. hat true = hard hat (convoy/train scenes). */
  function dan(x, y, sc, pose, hat, extra) {
    var o = { coat: C.denim, skin: "#a97c5b", hair: "#1a1410", pants: "#22304a", collar: true, pose: pose, hat: hat ? "#d9a62a" : null, rim: C.rust };
    if (extra) for (var k in extra) o[k] = extra[k];
    return man(x, y, sc, o);
  }
  function suitMan(x, y, sc, o) {
    var d = { coat: "#1c2430", pants: "#0f1318", tie: true, hair: "#2a2622", rim: "#cfe3f5", skin: "#b98a6a" };
    for (var k in o) d[k] = o[k];
    return man(x, y, sc, d);
  }
  function merc(x, y, sc, o) {
    var d = { coat: "#2a2f28", pants: "#161a16", hat: "#1d2128", skin: "#8a6a52", rim: "#e08a4a" };
    for (var k in o) d[k] = o[k];
    return man(x, y, sc, d);
  }
  function rifle(x, y, rot, sc) {
    return '<g transform="translate(' + x + " " + y + ") rotate(" + rot + ") scale(" + (sc || 1) + ')"><path d="M-22 -3H20V1H-22Z M-22 -3L-30 6L-24 6L-16 1Z M-6 1L-4 9H0L0 1Z" fill="#0d1014" stroke="#8a97a3" stroke-width=".6"/></g>';
  }
  function flag(x, y, s) {
    var f = '<g transform="translate(' + x + " " + y + ") scale(" + s + ')"><rect x="-2" y="0" width="4" height="150" fill="#8a97a3"/><circle cy="0" r="4" fill="' + C.gold + '"/>';
    for (var i = 0; i < 7; i++) f += '<rect x="2" y="' + (4 + i * 8) + '" width="84" height="8" fill="' + (i % 2 ? C.white : C.red) + '"/>';
    f += '<rect x="2" y="4" width="36" height="32" fill="' + C.blue + '"/>';
    for (var j = 0; j < 9; j++) f += '<circle cx="' + (8 + (j % 3) * 11) + '" cy="' + (11 + Math.floor(j / 3) * 10) + '" r="1.8" fill="#fff"/>';
    return f + "</g>";
  }
  function crowd(r, x0, x1, y, sc, cols) {
    var s = "", step = 36 * sc;
    for (var xx = x0; xx < x1; xx += step * (0.8 + r() * 0.5)) {
      var c = cols[Math.floor(r() * cols.length)], yy = y + (r() - 0.5) * 12 * sc;
      s += '<g transform="translate(' + f1(xx) + " " + f1(yy) + ") scale(" + sc + ')"><path d="M-26 60Q-26 12 0 8Q26 12 26 60Z" fill="' + c + '" stroke="#ffb26b" stroke-opacity=".5" stroke-width="1.5"/><circle cy="-8" r="15" fill="' + c + '" stroke="#ffb26b" stroke-opacity=".5" stroke-width="1.5"/>';
      var v = r();
      if (v < 0.18) s += '<path d="M18 20L30 -30" stroke="' + c + '" stroke-width="6"/><rect x="22" y="-48" width="16" height="22" fill="#d9e6f2" opacity=".85"/>';
      else if (v < 0.3) s += '<rect x="20" y="-40" width="3" height="40" fill="#8a97a3"/><rect x="22" y="-40" width="26" height="14" fill="' + C.red + '"/><rect x="22" y="-34" width="26" height="4" fill="#fff"/>';
      else if (v < 0.4) s += '<rect x="-22" y="-12" width="30" height="20" fill="#0d1014" stroke="#8a97a3" stroke-width="1.5"/><circle cx="-7" cy="-2" r="6" fill="#0d1014" stroke="#9fe0ff" stroke-width="1.5"/>';
      s += "</g>";
    }
    return s;
  }
  function podium(x, y, w, h) {
    var s = '<g transform="translate(' + x + " " + y + ')"><path d="M' + (-w / 2) + " 0L" + (w / 2) + " 0L" + (w / 2 - 10) + " " + h + "L" + (-w / 2 + 10) + " " + h + 'Z" fill="#2a3139" stroke="#8a97a3" stroke-width="2"/>';
    s += '<path d="M' + (w / 2) + " 0L" + (w / 2 - 10) + " " + h + '" stroke="#ffb26b" stroke-width="3"/>';
    s += '<circle cy="' + h * 0.5 + '" r="' + h * 0.28 + '" fill="#1c3f8f" stroke="#c9a24a" stroke-width="3"/>' + gearAt(0, h * 0.5, h * 0.2, h * 0.15, 12, "#f4f6f8", "");
    s += '<path d="M-20 0L-24 -34M20 0L24 -34" stroke="#0d1014" stroke-width="3"/><rect x="-30" y="-40" width="12" height="6" fill="#0d1014"/><rect x="18" y="-40" width="12" height="6" fill="#0d1014"/></g>';
    return s;
  }
  function crate(x, y, w, h, col) {
    return '<rect x="' + x + '" y="' + (y - h) + '" width="' + w + '" height="' + h + '" fill="' + col + '" stroke="#12151a" stroke-width="2"/><path d="M' + x + " " + (y - h) + "L" + (x + w) + " " + y + "M" + (x + w) + " " + (y - h) + "L" + x + " " + y + '" stroke="#12151a" stroke-width="2" opacity=".6"/><rect x="' + (x + w - 3) + '" y="' + (y - h) + '" width="3" height="' + h + '" fill="#ffb26b" opacity=".6"/>';
  }
  function plantBg(w, h, r, floorY) {
    var s = '<defs><linearGradient id="pb-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a2028"/><stop offset="1" stop-color="#3a3f48"/></linearGradient>' +
      '<linearGradient id="pb-beam" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffcf8a" stop-opacity=".45"/><stop offset="1" stop-color="#ffcf8a" stop-opacity="0"/></linearGradient></defs>';
    s += '<rect width="' + w + '" height="' + h + '" fill="url(#pb-bg)"/>';
    var i;
    for (i = 0; i < Math.ceil(w / 120) + 1; i++) s += '<rect x="' + (i * 120 - 20) + '" y="0" width="14" height="' + floorY + '" fill="#12161b"/>';
    s += '<path d="M0 30H' + w + 'M0 70H' + w + '" stroke="#12161b" stroke-width="9"/>';
    for (i = 0; i < Math.ceil(w / 160); i++) s += '<path d="M' + (60 + i * 160) + ' 0L' + (150 + i * 160) + ' 0L' + (40 + i * 160) + " " + floorY + "L" + (-60 + i * 160) + " " + floorY + 'Z" fill="url(#pb-beam)"/>';
    s += '<rect y="' + floorY + '" width="' + w + '" height="' + (h - floorY) + '" fill="#1b2026"/><path d="M0 ' + floorY + 'H' + w + '" stroke="#ffb26b" stroke-width="2" opacity=".5"/>';
    for (i = 0; i < 30; i++) s += '<circle cx="' + f1(r() * w) + '" cy="' + f1(r() * floorY) + '" r="1.4" fill="#ffd9a0" opacity=".45"/>';
    return s;
  }
  function rimline(d, col, w) { return '<path d="' + d + '" fill="none" stroke="' + col + '" stroke-width="' + (w || 2) + '"/>'; }
  function factory(x, base, w, h, col, r, stacks) {
    var s = '<g>', i, j;
    s += '<rect x="' + x + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '" fill="' + col + '"/>';
    var teeth = Math.max(2, Math.floor(w / 46)), tw = w / teeth;
    for (i = 0; i < teeth; i++) s += '<path d="M' + (x + i * tw) + " " + (base - h) + "l0 -18l" + tw + " 18Z" + '" fill="' + col + '"/>';
    for (i = 0; i < stacks; i++) {
      var sx = x + 10 + i * (w / stacks), sh = 50 + r() * 70;
      s += '<rect x="' + f1(sx) + '" y="' + (base - h - sh) + '" width="14" height="' + sh + '" fill="' + col + '"/><rect x="' + f1(sx - 2) + '" y="' + (base - h - sh) + '" width="18" height="5" fill="' + C.rust2 + '"/>';
    }
    for (j = 0; j < Math.floor(h / 26); j++) for (i = 0; i < Math.floor(w / 24); i++) {
      var v = r();
      s += '<rect x="' + (x + 6 + i * 24) + '" y="' + (base - h + 10 + j * 26) + '" width="14" height="16" fill="' + (v < 0.15 ? "#3b2418" : "#0b0e12") + '" opacity="' + (v < 0.5 ? 0.9 : 0.55) + '"/>';
      if (v > 0.9) s += '<path d="M' + (x + 6 + i * 24) + " " + (base - h + 10 + j * 26) + "l14 16" + '" stroke="' + col + '" stroke-width="2"/>';
    }
    s += '<rect x="' + x + '" y="' + (base - h) + '" width="' + w + '" height="6" fill="' + C.rust2 + '" opacity=".5"/>';
    s += '<rect x="' + (x + w - 3) + '" y="' + (base - h) + '" width="3" height="' + h + '" fill="#ffb26b" opacity=".7"/></g>';
    return s;
  }
  function lathe(x, y, sc, dormantGlow) {
    var g = '<g transform="translate(' + x + " " + y + ") scale(" + sc + ')">';
    g += '<rect x="-120" y="-60" width="240" height="40" fill="' + C.steel2 + '"/><rect x="-120" y="-24" width="240" height="8" fill="#1a2027"/>';
    g += '<rect x="-110" y="-20" width="20" height="90" fill="' + C.steel + '"/><rect x="90" y="-20" width="20" height="90" fill="' + C.steel + '"/>';
    g += '<rect x="-120" y="-110" width="64" height="52" fill="' + C.steel + '" stroke="' + C.rust2 + '" stroke-width="3"/>';
    g += '<circle cx="-88" cy="-84" r="16" fill="#171c22" stroke="' + C.steel3 + '" stroke-width="3"/>';
    g += '<rect x="-56" y="-86" width="90" height="8" fill="' + C.steel3 + '"/><rect x="50" y="-76" width="40" height="16" fill="' + C.rust2 + '"/><path d="M60 -76l8 -18h14l8 18Z" fill="' + C.steel + '"/>';
    g += '<path d="M-100 -60l30 20M20 -40l25 18" stroke="' + C.rust + '" stroke-width="5" opacity=".7"/>';
    if (dormantGlow) g += '<rect x="-120" y="-60" width="240" height="4" fill="#9fe0ff" class="glowpulse"/>';
    return g + "</g>";
  }
  function stars(r, n, w, h, maxy) {
    var s = ""; for (var i = 0; i < n; i++) s += '<circle cx="' + f1(r() * w) + '" cy="' + f1(r() * maxy) + '" r="' + f1(0.6 + r() * 1.2) + '" fill="#fff" opacity=".7"/>';
    return s;
  }

  /* ---------- PANELS (each returns inner SVG for a w x h viewBox) ---------- */
  var P = {};

  P.prologue = function (w, h) {
    var r = rng(7), s = "", i, k;
    s += '<defs><linearGradient id="pg-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c2b45"/><stop offset=".35" stop-color="#6b5a7a"/><stop offset=".6" stop-color="#e9906a"/><stop offset="1" stop-color="#ffd7a0"/></linearGradient>' +
      '<linearGradient id="pg-ice" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9db6c8"/><stop offset="1" stop-color="#e9c9b0"/></linearGradient>' +
      '<radialGradient id="pg-sun"><stop offset="0" stop-color="#fff3c9"/><stop offset=".4" stop-color="#ffc77a" stop-opacity=".8"/><stop offset="1" stop-color="#ffb26b" stop-opacity="0"/></radialGradient></defs>';
    s += '<rect width="' + w + '" height="' + h + '" fill="url(#pg-sky)"/>' + stars(r, 40, w, h, 330);
    s += '<circle cx="560" cy="560" r="260" fill="url(#pg-sun)"/><circle cx="560" cy="560" r="46" fill="#fff3c9"/>';
    s += '<path d="M0 640Q200 610 420 650T800 630V700H0Z" fill="#7b5f6c" opacity=".7"/>';
    // far row of factories
    for (i = 0; i < 9; i++) s += factory(i * 92 - 10, 700, 86, 40 + r() * 36, "#5b5866", r, 1);
    // river (frozen) running diagonally to the viewer
    s += '<path d="M330 700L520 700L800 1100L120 1100Z" fill="url(#pg-ice)"/>';
    for (i = 0; i < 12; i++) s += '<path d="M' + f1(380 + r() * 120) + " " + f1(720 + i * 30) + "l" + f1(30 + r() * 60) + ' 6" stroke="#fff" stroke-width="2" opacity=".55"/>';
    s += '<path d="M360 700L150 1100M500 700L760 1100" stroke="#ffd7a0" stroke-width="3" opacity=".6"/>';
    // mid rows left and right banks
    for (i = 0; i < 4; i++) s += factory(10 + i * 78, 780 + i * 34, 90, 70 + r() * 30, i % 2 ? "#444a56" : "#3b414d", r, 2);
    for (i = 0; i < 3; i++) s += factory(560 + i * 96, 790 + i * 30, 110, 74 + r() * 24, "#3b414d", r, 2);
    // near foreground row
    s += factory(-20, 1010, 210, 150, "#2a2f38", r, 3);
    s += factory(640, 1030, 190, 170, "#252a33", r, 3);
    // rust sign
    s += '<g transform="translate(260 884) rotate(-3)"><rect x="-6" y="-2" width="8" height="100" fill="#3a2418"/><rect x="458" y="-2" width="8" height="100" fill="#3a2418"/>' +
      '<rect x="-14" y="-40" width="480" height="64" fill="#5a2e17" stroke="' + C.rust + '" stroke-width="4"/>' +
      '<path d="M-14 -20l40 -20M300 24l70 -64M410 24l56 -40" stroke="#2a150b" stroke-width="10" opacity=".6"/>' +
      '<text x="226" y="3" text-anchor="middle" font-family="Impact,Arial Black,sans-serif" font-size="30" letter-spacing="2" fill="#e8c9a6">ASHFORD STEEL \u2014 EST. 1911</text></g>';
    // gate with the new banner going up
    s += '<g transform="translate(0 -92)"><rect x="120" y="760" width="34" height="140" fill="#3a2418" stroke="' + C.rust2 + '" stroke-width="2"/><rect x="646" y="760" width="34" height="140" fill="#3a2418" stroke="' + C.rust2 + '" stroke-width="2"/>' +
      '<path d="M154 780Q400 830 646 780L646 850Q400 900 154 850Z" fill="' + C.blue + '" stroke="' + C.white + '" stroke-width="4"/>' +
      '<path d="M154 786Q400 836 646 786" stroke="' + C.red + '" stroke-width="5" fill="none"/><path d="M154 844Q400 894 646 844" stroke="' + C.red + '" stroke-width="5" fill="none"/>' +
      '<text x="400" y="836" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="21" letter-spacing="1" textLength="440" lengthAdjust="spacingAndGlyphs" fill="' + C.white + '">COMING HOME: AMERICAN MANUFACTURING INITIATIVE</text>' +
      '<path d="M690 900L720 790M706 900L736 790M696 830H724M702 860H730" stroke="#8a97a3" stroke-width="3"/><circle cx="716" cy="780" r="9" fill="#12151a"/><path d="M706 794L702 828L730 828L726 794Z" fill="#12151a"/></g>';
    // water tower with tattered flag (left, high)
    s += '<g transform="translate(130 560)"><path d="M-40 -10L-52 150M40 -10L52 150M-40 40L52 120M40 40L-52 120" stroke="#2a2f38" stroke-width="6"/>' +
      '<path d="M-56 -90Q-56 -120 0 -126Q56 -120 56 -90V-10Q0 6 -56 -10Z" fill="#6a4a3a" stroke="' + C.rust + '" stroke-width="3"/>' +
      '<path d="M-56 -50Q0 -36 56 -50M-56 -70Q0 -56 56 -70" stroke="#3a2418" stroke-width="3" fill="none"/>' +
      '<rect x="-4" y="-176" width="5" height="52" fill="#2a2f38"/>' +
      '<path d="M1 -176l56 6l-8 10l10 8l-12 8l8 10l-54 -4Z" fill="#b8c0c8"/><path d="M1 -174l56 4l-4 8l-52 -4Z" fill="' + C.red + '"/><path d="M1 -158l50 4l-6 8l-44 -4Z" fill="' + C.red + '"/><rect x="1" y="-176" width="22" height="24" fill="' + C.blue + '"/>' +
      '<rect x="-56" y="-100" width="112" height="6" fill="#ffb26b" opacity=".4"/></g>';
    // cold smokestacks, tall foreground
    for (k = 0; k < 3; k++) s += '<rect x="' + (330 + k * 60) + '" y="' + (560 - k * 30) + '" width="20" height="180" fill="#343a45"/><rect x="' + (328 + k * 60) + '" y="' + (560 - k * 30) + '" width="24" height="8" fill="' + C.rust2 + '"/><rect x="' + (348 + k * 60) + '" y="' + (560 - k * 30) + '" width="3" height="180" fill="#ffb26b" opacity=".6"/>';
    // frost drift and vignette
    s += '<rect y="1040" width="' + w + '" height="60" fill="#0d1014" opacity=".5"/>';
    return s;
  };

  /* ----- Page 1 ----- */
  P.p1a = function (w, h) { // plant floor rally: the President at the podium
    var r = rng(11), s = plantBg(w, h, r, 400), i;
    for (i = 0; i < 4; i++) s += lathe(110 + i * 190, 400, 0.5, false);
    s += flag(150, 130, 1.1) + flag(250, 150, 1) + flag(w - 330, 150, 1) + flag(w - 230, 130, 1.1);
    s += '<path d="M0 60Q200 110 388 70T776 60" stroke="' + C.red + '" stroke-width="5" fill="none"/><path d="M0 70Q200 120 388 80T776 70" stroke="#f4f6f8" stroke-width="5" fill="none"/>';
    s += suitMan(388, 470, 1.25, { pose: "stand", look: 0 });
    s += podium(388, 372, 150, 110);
    s += crowd(r, 10, w, 500, 1.5, ["#10151b", "#161c24", "#1c232c"]);
    s += crowd(r, 20, 250, 410, 0.9, ["#232b35", "#1b222b"]) + crowd(r, 530, w, 410, 0.9, ["#232b35", "#1b222b"]);
    s += '<g transform="translate(700 330)"><rect x="-28" y="0" width="56" height="26" fill="#0d1014" stroke="#8a97a3" stroke-width="2"/><circle cx="-34" cy="13" r="14" fill="#0d1014" stroke="#9fe0ff" stroke-width="2"/><path d="M-20 26L-30 90M20 26L30 90" stroke="#8a97a3" stroke-width="3"/></g>';
    return s;
  };

  P.p1b = function (w, h) { // Dan and Walt in the crowd
    var r = rng(5), s = plantBg(w, h, r, 300);
    s += flag(60, 80, 0.9) + flag(w - 150, 90, 0.8);
    s += crowd(r, 0, w, 330, 1.2, ["#10151b", "#161c24", "#1c232c"]);
    s += dan(130, 640, 2.0, "stand", false, { look: 1 });
    s += man(290, 640, 1.9, { coat: "#6a3a2a", pants: "#2a2f38", skin: "#c19a7b", hair: "#cfd5da", look: -1, rim: "#ffb26b" });
    return s;
  };

  P.p1c = function (w, h) { // the President points out at the crowd
    var r = rng(13), s = plantBg(w, h, r, 360);
    s += flag(30, 40, 1.4) + flag(w - 130, 60, 1.3);
    s += '<path d="M0 90Q190 150 384 100" stroke="' + C.red + '" stroke-width="6" fill="none"/>';
    s += suitMan(110, 760, 2.45, { pose: "point", look: 1 });
    s += '<rect x="0" y="' + (h - 40) + '" width="' + w + '" height="40" fill="#0d1014"/>';
    s += crowd(r, 0, w, h + 10, 1.3, ["#10151b", "#161c24"]);
    return s;
  };

  /* ----- Page 2 ----- */
  P.p2a = function (w, h) { // the President tours the floor with Elaine Hollis
    var r = rng(21), s = plantBg(w, h, r, 190), i;
    for (i = 0; i < 5; i++) s += crate(40 + i * 150, 205, 100 + (i % 2) * 20, 60, i % 2 ? "#4a3a2a" : "#3a3126");
    for (i = 0; i < 3; i++) s += lathe(520 + i * 120, 190, 0.45, false);
    s += flag(w - 80, 60, 0.7);
    s += suitMan(190, 296, 1.1, { pose: "stand", look: 1 });
    s += man(330, 296, 1.05, { coat: "#7a2a2e", pants: "#1a1d22", skin: "#c9a085", hair: "#7a5a3a", long: true, pose: "reach", look: -1, rim: "#ffb26b" });
    s += man(470, 296, 0.95, { coat: "#232b35", pants: "#12151a", hair: "#1a1410", look: -1, rim: "#9fb6c8" });
    s += man(560, 296, 0.95, { coat: "#232b35", pants: "#12151a", hair: "#2a2622", skin: "#8a6a52", look: -1, rim: "#9fb6c8" });
    return s;
  };

  P.p2b = function (w, h) { // the President stops at Dan's station: the restored turret lathe
    var r = rng(23), s = plantBg(w, h, r, 230);
    s += lathe(215, 270, 1.15, false);
    s += '<rect x="95" y="214" width="250" height="6" fill="#dfe8f2" opacity=".5"/><rect x="95" y="212" width="250" height="2" fill="#fff" opacity=".8"/>';
    s += suitMan(75, 372, 1.1, { pose: "stand", look: 1 });
    s += man(175, 372, 0.9, { coat: "#6a3a2a", pants: "#2a2f38", skin: "#c19a7b", hair: "#cfd5da", look: 1, rim: "#ffb26b" });
    s += dan(310, 372, 1.15, "touch", false, { flip: true, look: 0 });
    return s;
  };

  P.p2c = function (w, h) { // the President looks from Dan to Hollis
    var r = rng(25), s = plantBg(w, h, r, 260);
    s += man(62, 440, 1.5, { coat: "#7a2a2e", pants: "#1a1d22", skin: "#c9a085", hair: "#7a5a3a", long: true, look: 1, rim: "#ffb26b" });
    s += dan(330, 440, 1.5, "stand", false, { look: -1 });
    s += suitMan(192, 600, 2.3, { pose: "stand", look: -1 });
    return s;
  };

  P.p2d = function (w, h) { // Hollis offers Dan her hand
    var r = rng(27), s = plantBg(w, h, r, 230), i;
    for (i = 0; i < 6; i++) s += lathe(80 + i * 130, 240, 0.4, false);
    s += gearAt(60, 70, 36, 30, 14, "#2a3139", 'stroke="#ffb26b" stroke-width="2" opacity=".6"');
    s += suitMan(388, 340, 0.6, { pose: "stand", look: 0 });
    s += man(250, 368, 1.3, { coat: "#7a2a2e", pants: "#1a1d22", skin: "#c9a085", hair: "#7a5a3a", long: true, pose: "reach", look: 1, rim: "#ffb26b" });
    s += dan(512, 368, 1.3, "reach", false, { flip: true, look: -1 });
    return s;
  };

  /* ----- Page 3: the opposition ----- */
  P.p3a = function (w, h) { // overseas boardroom, screens
    var s = "", i;
    s += '<defs><linearGradient id="b-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c1620"/><stop offset="1" stop-color="#1c2a36"/></linearGradient></defs>';
    s += '<rect width="' + w + '" height="' + h + '" fill="url(#b-bg)"/>';
    s += '<rect x="196" y="22" width="384" height="150" fill="#06121c" stroke="#8a97a3" stroke-width="3"/><rect x="204" y="30" width="368" height="134" fill="#0f3a52"/>';
    s += '<text x="388" y="88" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="26" letter-spacing="3" fill="#dff3ff">MERIDIAN PACIFIC</text><text x="388" y="124" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="26" letter-spacing="3" fill="#dff3ff">CONSORTIUM</text>';
    s += '<path d="M230 150L290 138L340 144L400 128L470 134L540 120" stroke="#6fd3ff" stroke-width="3" fill="none"/>';
    for (i = 0; i < 3; i++) {
      s += '<rect x="' + (14 + i * 56) + '" y="30" width="48" height="60" fill="#0f3a52" stroke="#8a97a3" stroke-width="2"/><path d="M' + (20 + i * 56) + ' 80L' + (34 + i * 56) + " " + (50 + i * 6) + "L" + (46 + i * 56) + " 66L" + (54 + i * 56) + ' 40" stroke="#6fd3ff" stroke-width="2" fill="none"/>';
      s += '<rect x="' + (w - 62 - i * 56) + '" y="30" width="48" height="60" fill="#0f3a52" stroke="#8a97a3" stroke-width="2"/>' + gearAt(w - 38 - i * 56, 60, 17, 13, 10, "#6fd3ff", 'opacity=".6"');
    }
    s += '<path d="M60 ' + (h - 80) + 'L716 ' + (h - 80) + 'L760 ' + (h - 30) + 'L16 ' + (h - 30) + 'Z" fill="#2a3139" stroke="#6fd3ff" stroke-opacity=".5" stroke-width="2"/>';
    for (i = 0; i < 7; i++) s += '<g transform="translate(' + (80 + i * 100) + " " + (h - 82) + ')"><path d="M-26 0Q-26 -34 0 -38Q26 -34 26 0Z" fill="#0c1218" stroke="#6fd3ff" stroke-opacity=".5" stroke-width="1.5"/><circle cy="-48" r="13" fill="#0c1218" stroke="#6fd3ff" stroke-opacity=".5" stroke-width="1.5"/></g>';
    return s;
  };

  P.p3b = function (w, h) { // Director Shao watches the Ashford speech
    var s = "";
    s += '<rect width="' + w + '" height="' + h + '" fill="#0c1620"/>';
    s += '<rect x="170" y="30" width="190" height="140" fill="#06121c" stroke="#8a97a3" stroke-width="3"/><rect x="176" y="36" width="178" height="128" fill="#103c58"/>';
    s += '<path d="M176 130Q265 110 354 130V164H176Z" fill="#0b2a3e"/>' + flag(190, 50, 0.35) + flag(310, 50, 0.35);
    s += suitMan(265, 170, 0.32, { pose: "stand" });
    s += '<rect x="170" y="30" width="190" height="140" fill="#6fd3ff" opacity=".08"/>';
    s += man(130, 520, 2.1, { coat: "#2f3a46", pants: "#12151a", skin: "#c9a98a", hair: "#2a2a30", tie: true, look: 1, rim: "#6fd3ff" });
    return s;
  };

  P.p3c = function (w, h) { // Marguerite Voss, logistics fixer
    var r = rng(35), s = "", i;
    s += '<defs><linearGradient id="v-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a4a5c"/><stop offset="1" stop-color="#c8602a"/></linearGradient></defs>';
    s += '<rect width="' + w + '" height="' + h + '" fill="url(#v-bg)" opacity=".85"/><rect width="' + w + '" height="' + h + '" fill="#0c1218" opacity=".55"/>';
    s += '<rect x="20" y="30" width="344" height="200" fill="#0c1218" stroke="#8a97a3" stroke-width="3" opacity=".9"/>';
    for (i = 0; i < 14; i++) s += '<rect x="' + (30 + (i % 7) * 46) + '" y="' + (176 - Math.floor(i / 7) * 22) + '" width="42" height="20" fill="' + (["#7a2a2e", "#2a5a7a", "#7a5a2a", "#3a6a4a"][Math.floor(r() * 4)]) + '"/>';
    s += '<path d="M60 60L60 176M60 60L150 60M150 60L150 176M280 40L280 176M280 40L340 40" stroke="#c8602a" stroke-width="6" fill="none"/><path d="M60 60L100 40L150 60" stroke="#c8602a" stroke-width="4" fill="none"/>';
    s += man(220, 520, 2.1, { coat: "#2a2f38", pants: "#12151a", skin: "#d2ad92", hair: "#b7bcc2", long: true, look: -1, rim: "#ffb26b" });
    return s;
  };

  P.p3d = function (w, h) { // the file marked HOLLIS / ASHFORD slides across the table
    var r = rng(37), s = "", i;
    s += '<rect width="' + w + '" height="' + h + '" fill="#0c1620"/>';
    s += '<rect x="250" y="20" width="276" height="120" fill="#103c58" stroke="#8a97a3" stroke-width="3"/>';
    for (i = 0; i < 5; i++) s += '<path d="M' + (270 + i * 52) + " 140V" + (60 + (i % 3) * 14) + 'L' + (300 + i * 52) + " " + (50 + (i % 2) * 10) + 'V140" stroke="#6fd3ff" stroke-width="3" fill="none" opacity=".6"/>';
    s += suitMan(130, 330, 0.95, { coat: "#2f3a46", skin: "#c9a98a", hair: "#2a2a30", look: 1, rim: "#6fd3ff" });
    s += man(650, 330, 0.95, { coat: "#2a2f38", skin: "#d2ad92", hair: "#b7bcc2", long: true, look: -1, rim: "#ffb26b" });
    s += '<path d="M0 230L' + w + ' 230L' + w + " " + h + 'L0 ' + h + 'Z" fill="#1a1410"/><path d="M0 230H' + w + '" stroke="#ffb26b" stroke-width="3" opacity=".7"/>';
    s += '<path d="M0 340L150 300L260 300L300 330L190 372L0 372Z" fill="#2f3a46"/><path d="M0 340L150 300" stroke="#6fd3ff" stroke-width="2"/><path d="M262 318L330 306" stroke="#c9a98a" stroke-width="12" stroke-linecap="round"/><ellipse cx="288" cy="318" rx="34" ry="14" fill="#c9a98a"/>';
    s += '<g transform="translate(400 300) rotate(-5)"><path d="M-110 -50H-40L-30 -62H20L30 -50H110V50H-110Z" fill="#d6b678" stroke="#6b5420" stroke-width="3"/><rect x="-90" y="-26" width="120" height="8" fill="#7a5a2a" opacity=".55"/><rect x="-90" y="-8" width="150" height="8" fill="#7a5a2a" opacity=".55"/><rect x="-90" y="10" width="90" height="8" fill="#7a5a2a" opacity=".55"/><rect x="60" y="-44" width="40" height="22" fill="' + C.red + '"/></g>';
    s += '<path d="M700 372L690 330L640 316" stroke="#2a2f38" stroke-width="30" stroke-linecap="round" fill="none"/><ellipse cx="630" cy="316" rx="22" ry="12" fill="#d2ad92"/>';
    return s;
  };

  /* ----- Page 7: the Torque Wave fight ----- */
  function nightSky(w, hor, id) {
    var r = rng(id), s = '<defs><linearGradient id="n' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#05080f"/><stop offset=".7" stop-color="#14233a"/><stop offset="1" stop-color="#2a3b54"/></linearGradient></defs>';
    s += '<rect width="' + w + '" height="' + (hor + 4) + '" fill="url(#n' + id + ')"/>' + stars(r, 45, w, hor * 0.7, hor * 0.7);
    s += '<circle cx="' + f1(w * 0.8) + '" cy="' + f1(hor * 0.28) + '" r="' + f1(hor * 0.08 + 6) + '" fill="#dfe8f2" opacity=".9"/>';
    var m = '<path d="M0 ' + hor + 'L0 ' + (hor - 40);
    for (var x = 0; x <= w; x += 60) m += "L" + x + " " + f1(hor - 30 - r() * 60);
    s += m + "L" + w + " " + hor + 'Z" fill="#0b121c"/>';
    return s;
  }
  function boxcar(x, y, w, h, col) {
    var s = '<rect x="' + x + '" y="' + (y - h) + '" width="' + w + '" height="' + h + '" fill="' + col + '" stroke="#05080f" stroke-width="2"/>';
    for (var i = 1; i < 6; i++) s += '<rect x="' + f1(x + i * w / 6) + '" y="' + (y - h) + '" width="3" height="' + h + '" fill="#05080f" opacity=".5"/>';
    s += '<rect x="' + x + '" y="' + (y - h) + '" width="' + w + '" height="3" fill="#ffb26b" opacity=".5"/>';
    s += '<circle cx="' + (x + w * 0.2) + '" cy="' + (y + 4) + '" r="6" fill="#05080f"/><circle cx="' + (x + w * 0.8) + '" cy="' + (y + 4) + '" r="6" fill="#05080f"/>';
    return s;
  }
  function truckFront(x, y, sc, tilt) {
    var s = '<g transform="translate(' + x + " " + y + ") scale(" + sc + ")" + (tilt ? " rotate(" + tilt + " 60 0)" : "") + '">';
    s += '<rect x="-60" y="-84" width="120" height="70" fill="#1b2128" stroke="#8a97a3" stroke-width="2"/><rect x="-50" y="-100" width="100" height="22" fill="#10151b" stroke="#8a97a3" stroke-width="2"/>';
    s += '<rect x="-44" y="-96" width="88" height="14" fill="#06101a"/><rect x="-44" y="-62" width="88" height="28" fill="#0d1218"/>';
    s += '<circle cx="-42" cy="-48" r="9" fill="#05080f" stroke="#8a97a3" stroke-width="2"/><circle cx="42" cy="-48" r="9" fill="#05080f" stroke="#8a97a3" stroke-width="2"/>';
    s += '<rect x="-66" y="-30" width="18" height="30" rx="4" fill="#05080f"/><rect x="48" y="-30" width="18" height="30" rx="4" fill="#05080f"/><rect x="58" y="-84" width="3" height="70" fill="#ffb26b" opacity=".6"/></g>';
    return s;
  }
  function flash(x, y, s) {
    return '<path transform="translate(' + x + " " + y + ") scale(" + s + ')" d="M0 -12L3 -3L14 -6L6 1L16 8L4 6L0 16L-3 6L-14 10L-6 1L-14 -6L-3 -3Z" fill="#ffe9a0"/>';
  }
  function stone(x, y, sz, r) {
    var a = r() * 6, p = "";
    for (var i = 0; i < 5; i++) { var an = a + i * 1.256, rr = sz * (0.6 + r() * 0.6); p += (i ? "L" : "M") + f1(x + Math.cos(an) * rr) + " " + f1(y + Math.sin(an) * rr); }
    return '<path d="' + p + 'Z" fill="' + ["#5b6670", "#3a424b", "#7a8590", "#2a3139"][Math.floor(r() * 4)] + '" stroke="#ffb26b" stroke-opacity=".6" stroke-width=".8"/>';
  }

  P.p7a = function (w, h) { // mercenaries open fire on the train
    var r = rng(41), s = nightSky(w, 130, 41), i;
    s += '<rect y="126" width="' + w + '" height="' + (h - 126) + '" fill="#10161e"/>';
    s += boxcar(-20, 205, 190, 56, "#4a2a1a") + boxcar(176, 205, 190, 56, "#3a2a22");
    s += '<path d="M0 214H' + w + '" stroke="#8a97a3" stroke-width="3"/>';
    for (i = 0; i < 6; i++) s += '<path d="M' + f1(170 + r() * 120) + " " + f1(180 + r() * 20) + 'l-6 -5" stroke="#ffd27a" stroke-width="2"/>';
    s += '<path d="M0 230H' + w + 'V' + h + 'H0Z" fill="#1a1f26"/>';
    s += truckFront(250, 160, 0.4, 0) + truckFront(120, 150, 0.32, 0);
    for (i = 0; i < 7; i++) {
      var sx = 40 + r() * 230, sy = 110 + r() * 40;
      s += '<path d="M' + f1(sx) + " " + f1(sy) + "L" + f1(100 + r() * 120) + " " + f1(165 + r() * 20) + '" stroke="#ffb26b" stroke-width="1.6" opacity=".85"/>' + flash(f1(sx), f1(sy), 0.6);
    }
    s += merc(60, 250, 0.26, { look: 1 });
    return s;
  };

  P.p7b = function (w, h) { // Dan raises the shield; six star gears block every round
    var r = rng(43), s = nightSky(w, 190, 43), i;
    s += '<rect y="186" width="' + w + '" height="' + (h - 186) + '" fill="#10161e"/>';
    s += '<defs><radialGradient id="p7b-g" cx=".58" cy=".42" r=".5"><stop offset="0" stop-color="#9fe0ff" stop-opacity=".35"/><stop offset="1" stop-color="#9fe0ff" stop-opacity="0"/></radialGradient></defs><rect width="' + w + '" height="' + h + '" fill="url(#p7b-g)"/>';
    var cx = 285, cy = 255, sc = 0.9;
    for (i = 0; i < 14; i++) { // tracer rounds converge on the shield face, each stopped by a planet gear
      var a = -2.4 + i * 0.34, d1 = 330 + r() * 80, d2 = 150;
      s += '<path d="M' + f1(cx + Math.cos(a) * d1) + " " + f1(cy + Math.sin(a) * d1) + "L" + f1(cx + Math.cos(a) * d2) + " " + f1(cy + Math.sin(a) * d2) + '" stroke="#ffb26b" stroke-width="2.4" stroke-linecap="round" opacity=".9"/>';
    }
    s += shieldAt(cx, cy, sc, "active");
    s += '<g transform="translate(' + cx + " " + cy + ')" fill="none" stroke-linecap="round"><circle r="120" stroke="' + C.red + '" stroke-width="5" stroke-dasharray="60 90" opacity=".7"/><circle r="96" stroke="#f4f6f8" stroke-width="4" stroke-dasharray="40 110" opacity=".7"/><circle r="140" stroke="#4a78d8" stroke-width="4" stroke-dasharray="50 130" opacity=".7"/></g>';
    for (i = 0; i < 14; i++) {
      var b = -2.4 + i * 0.34;
      s += flash(f1(cx + Math.cos(b) * 150 * sc), f1(cy + Math.sin(b) * 150 * sc), 0.9);
    }
    s += dan(78, 548, 1.25, "stand", true, { look: 1 });
    s += '<path d="M104 330L150 340" stroke="' + C.denim + '" stroke-width="18" stroke-linecap="round"/><circle cx="158" cy="342" r="9" fill="#a97c5b"/>';
    return s;
  };

  P.p7c = function (w, h) { // Dan leaps from the freight car and lands on the gravel trackbed
    var r = rng(47), s = nightSky(w, 100, 47), i;
    s += '<rect y="96" width="' + w + '" height="' + (h - 96) + '" fill="#1a1f26"/>';
    s += boxcar(-30, 140, 150, 70, "#4a2a1a");
    s += '<path d="M0 142H' + w + '" stroke="#8a97a3" stroke-width="3"/>';
    s += truckFront(220, 180, 0.5, 0) + truckFront(270, 205, 0.4, 0);
    s += merc(250, 198, 0.42, { look: -1 });
    s += rifle(262, 150, -10, 0.9);
    for (i = 0; i < 60; i++) s += '<circle cx="' + f1(r() * w) + '" cy="' + f1(180 + r() * 90) + '" r="' + f1(1 + r() * 2.4) + '" fill="' + (r() > 0.5 ? "#5b6670" : "#3a424b") + '"/>';
    s += '<path d="M40 60Q70 120 110 205" stroke="#dfe8f2" stroke-width="2" stroke-dasharray="6 6" fill="none" opacity=".5"/>';
    s += shieldAt(108, 188, 0.2, "dormant");
    s += dan(102, 232, 0.74, "stand", true, { rot: -8, look: 1 });
    s += '<ellipse cx="102" cy="238" rx="50" ry="10" fill="#8a97a3" opacity=".35"/>';
    for (i = 0; i < 9; i++) s += '<circle cx="' + f1(60 + r() * 90) + '" cy="' + f1(222 + r() * 16) + '" r="' + f1(3 + r() * 6) + '" fill="#8a97a3" opacity=".35"/>';
    return s;
  };

  P.p7d = function (w, h) { // THE TORQUE WAVE: the showpiece
    var r = rng(77), s = nightSky(w, 130, 77), i, cx = 388, gy = 262;
    s += '<defs><linearGradient id="gr77" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a323b"/><stop offset="1" stop-color="#4a535d"/></linearGradient>' +
      '<radialGradient id="cl77" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#9fb6c8" stop-opacity=".55"/><stop offset="1" stop-color="#9fb6c8" stop-opacity="0"/></radialGradient></defs>';
    s += '<rect y="126" width="' + w + '" height="' + (h - 126) + '" fill="url(#gr77)"/>';
    // freight train behind
    s += boxcar(-30, 168, 200, 62, "#4a2a1a") + boxcar(176, 168, 200, 62, "#3a2a22") + boxcar(382, 168, 200, 62, "#4a2a1a") + boxcar(588, 168, 200, 62, "#3a2a22");
    s += '<path d="M0 172H' + w + '" stroke="#8a97a3" stroke-width="3"/>';
    // gravel trackbed texture
    for (i = 0; i < 160; i++) s += '<circle cx="' + f1(r() * w) + '" cy="' + f1(196 + r() * 164) + '" r="' + f1(1 + r() * 2.6) + '" fill="' + (r() > 0.5 ? "#6a7580" : "#2a3139") + '" opacity=".7"/>';
    // trucks running dark, no lights; one rocks up onto two wheels
    s += truckFront(60, 236, 0.9, 0);
    s += truckFront(700, 300, 1.15, 24);
    // outward rolling wave rings on the ground
    for (i = 1; i <= 3; i++) s += '<ellipse cx="' + cx + '" cy="' + (gy + 6) + '" rx="' + (190 + i * 70) + '" ry="' + (40 + i * 12) + '" fill="none" stroke="#b8c4cf" stroke-width="' + (10 - i * 2) + '" stroke-dasharray="40 24" opacity="' + f1(0.4 - i * 0.08) + '"/>';
    // knocked mercenaries: arms over faces, rifles flying
    s += merc(150, 240, 0.7, { pose: "up", rot: -62, look: 1 }) + rifle(95, 110, 40, 1.6);
    s += merc(235, 218, 0.7, { pose: "up", rot: -30, look: 1 }) + rifle(210, 120, -30, 1.5);
    s += merc(550, 215, 0.7, { pose: "up", rot: 34, look: -1 }) + rifle(580, 100, 150, 1.6);
    s += merc(610, 252, 0.7, { pose: "up", rot: 70, look: -1 }) + rifle(520, 70, 200, 1.5);
    s += merc(80, 330, 0.7, { pose: "up", rot: -80, look: 1 }) + rifle(160, 190, 10, 1.4);
    // the gravel crown: dust columns and stones erupt UPWARD from a ring around Dan
    function crown(front) {
      var o = "";
      for (var q = 0; q < 70; q++) {
        var th = q / 70 * Math.PI * 2 + r() * 0.05, sn = Math.sin(th);
        if ((sn >= 0) !== front) continue;
        var bx = cx + Math.cos(th) * (178 + r() * 20), by = gy + 8 + sn * 38, hg = 60 + r() * 110;
        o += '<ellipse cx="' + f1(bx) + '" cy="' + f1(by - hg * 0.4) + '" rx="' + f1(16 + r() * 14) + '" ry="' + f1(hg * 0.55) + '" fill="#a9b4be" opacity="' + f1(0.2 + r() * 0.12) + '"/>';
        for (var k = 0; k < 4; k++) o += stone(bx + (r() - 0.5) * 36, by - r() * hg * 1.1, 3 + r() * 7, r);
        o += '<path d="M' + f1(bx) + " " + f1(by) + "L" + f1(bx + (r() - 0.5) * 8) + " " + f1(by - hg) + '" stroke="#dfe8f2" stroke-width="1.2" opacity=".35"/>';
      }
      return o;
    }
    s += crown(false);
    // the clear circle: calm ground around the shield
    s += '<ellipse cx="' + cx + '" cy="' + (gy + 6) + '" rx="160" ry="34" fill="url(#cl77)"/><ellipse cx="' + cx + '" cy="' + (gy + 6) + '" rx="150" ry="30" fill="#59606a" opacity=".7" stroke="#dfe8f2" stroke-width="2" stroke-dasharray="10 8"/>';
    // shield planted rim-first in the gravel, spinning to a red, white and blue blur
    s += shieldAt(cx + 26, gy - 88, 0.46, "active");
    s += '<g transform="translate(' + (cx + 26) + " " + (gy - 88) + ')" fill="none" stroke-linecap="round"><circle r="84" stroke="' + C.red + '" stroke-width="6" stroke-dasharray="70 60" opacity=".75"/><circle r="64" stroke="#f4f6f8" stroke-width="5" stroke-dasharray="50 70" opacity=".75"/><circle r="100" stroke="#4a78d8" stroke-width="5" stroke-dasharray="60 90" opacity=".75"/></g>';
    s += dan(cx - 76, gy + 26, 0.8, "reach", true, { kneel: true, look: 1 });
    s += crown(true);
    // stones hailing down outside the clear circle
    for (i = 0; i < 46; i++) {
      var hx = r() * w;
      if (Math.abs(hx - cx) < 120) { i--; continue; }
      var hy = r() * 210;
      s += '<path d="M' + f1(hx) + " " + f1(hy - 18) + "L" + f1(hx + 2) + " " + f1(hy) + '" stroke="#dfe8f2" stroke-width="1.2" opacity=".35"/>' + stone(hx + 2, hy + 4, 2.5 + r() * 4, r);
    }
    return s;
  };

  P.p7e = function (w, h) { // Dan, still kneeling, looks up as the gears spin down
    var r = rng(51), s = nightSky(w, 70, 51), i;
    s += '<rect y="66" width="' + w + '" height="' + (h - 66) + '" fill="#2a323b"/>';
    for (i = 0; i < 40; i++) s += '<circle cx="' + f1(r() * w) + '" cy="' + f1(80 + r() * 80) + '" r="' + f1(1 + r() * 2.4) + '" fill="#8a97a3" opacity=".5"/>';
    s += '<ellipse cx="130" cy="140" rx="150" ry="40" fill="#b8c4cf" opacity=".22"/>';
    s += shieldAt(200, 230, 0.5, "dormant");
    s += dan(90, 320, 1.15, "stand", true, { look: 1 });
    return s;
  };

  P.p7f = function (w, h) { // Krait, dazed in the dirt, hits the detonator
    var r = rng(53), s = nightSky(w, 40, 53), i;
    s += '<rect y="36" width="' + w + '" height="' + (h - 36) + '" fill="#2a323b"/>';
    for (i = 0; i < 60; i++) s += '<circle cx="' + f1(r() * w) + '" cy="' + f1(50 + r() * 110) + '" r="' + f1(1 + r() * 3) + '" fill="' + (r() > 0.5 ? "#6a7580" : "#1a2027") + '" opacity=".7"/>';
    s += '<path d="M30 140Q150 120 260 140" stroke="#b8c4cf" stroke-width="10" opacity=".2" fill="none"/>';
    s += merc(40, 140, 0.78, { rot: 84, look: 1, coat: "#1c2024", hat: null, hair: "#0d1014" });
    s += '<path d="M170 100L316 94" stroke="#1c2024" stroke-width="16" stroke-linecap="round"/>';
    s += '<g transform="translate(340 140)"><rect x="-40" y="-26" width="80" height="26" fill="#3a2a22" stroke="#8a97a3" stroke-width="2"/><rect x="-6" y="-44" width="12" height="18" fill="' + C.red + '"/><rect x="-18" y="-50" width="36" height="8" fill="#8a97a3"/><path d="M40 -12Q100 -20 130 -4" stroke="#0d1014" stroke-width="3" fill="none"/></g>';
    s += '<ellipse cx="324" cy="84" rx="14" ry="10" fill="#8a6a52" transform="rotate(10 324 84)"/>';
    s += '<g transform="translate(470 130)">' + flash(0, 0, 2.4) + '</g>';
    return s;
  };

  window.GH = { C: C, shield: shield, shieldAt: shieldAt, panels: P, gearPath: gearPath };
  if (typeof module !== "undefined") module.exports = window.GH;
})();
