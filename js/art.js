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
  function dan(x, y, sc, pose, suit) {
    var jacket = suit ? C.steel2 : C.denim, rim = suit ? C.gold : C.rust;
    var g = '<g transform="translate(' + x + " " + y + ") scale(" + sc + ')">';
    g += '<path d="M-22 -2L-26 -92L-6 -92L-2 -2Z M2 -2L6 -92L26 -92L22 -2Z" fill="#12151a"/>';
    g += '<path d="M-26 -2h22v8h-30zM4 -2h22l8 8h-30z" fill="#0a0c0f"/>';
    g += '<path d="M-34 -168L-16 -180L16 -180L34 -168L28 -88L-28 -88Z" fill="' + jacket + '" stroke="' + rim + '" stroke-width="2"/>';
    g += '<path d="M0 -178V-90" stroke="#10151b" stroke-width="2"/>';
    if (pose === "reach") {
      g += '<path d="M30 -166L88 -190L96 -176L40 -140Z" fill="' + jacket + '" stroke="' + rim + '" stroke-width="2"/><circle cx="98" cy="-184" r="8" fill="#12151a"/>';
      g += '<path d="M-30 -166L-44 -120L-34 -86L-24 -90L-30 -126Z" fill="' + jacket + '"/>';
    } else if (pose === "touch") {
      g += '<path d="M30 -166L58 -120L96 -104L100 -92L52 -100L28 -140Z" fill="' + jacket + '" stroke="' + rim + '" stroke-width="2"/>';
      g += '<path d="M-30 -166L-44 -120L-34 -86L-24 -90L-30 -126Z" fill="' + jacket + '"/>';
    } else {
      g += '<path d="M-32 -166L-46 -110L-40 -84L-28 -88L-30 -126Z M32 -166L46 -110L40 -84L28 -88L30 -126Z" fill="' + jacket + '"/>';
    }
    g += '<circle cx="0" cy="-196" r="17" fill="#12151a" stroke="' + rim + '" stroke-width="2"/>';
    g += '<path d="M-16 -204Q0 -222 16 -204L16 -198L-16 -198Z" fill="#0a0c0f"/></g>';
    return g;
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

  P.p1a = function (w, h) { // factory interior, Dan walking
    var r = rng(11), s = "", i;
    s += '<defs><linearGradient id="a-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a2028"/><stop offset="1" stop-color="#3a3f48"/></linearGradient>' +
      '<linearGradient id="a-beam" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffcf8a" stop-opacity=".5"/><stop offset="1" stop-color="#ffcf8a" stop-opacity="0"/></linearGradient></defs>';
    s += '<rect width="' + w + '" height="' + h + '" fill="url(#a-bg)"/>';
    for (i = 0; i < 7; i++) s += '<rect x="' + (i * 120 - 20) + '" y="0" width="14" height="300" fill="#12161b"/>';
    s += '<path d="M0 40H' + w + 'M0 90H' + w + '" stroke="#12161b" stroke-width="10"/>';
    for (i = 0; i < 5; i++) s += '<path d="M' + (60 + i * 160) + ' 0L' + (150 + i * 160) + ' 0L' + (40 + i * 160) + ' 440L' + (-60 + i * 160) + ' 440Z" fill="url(#a-beam)"/>';
    for (i = 0; i < 6; i++) s += '<rect x="' + (50 + i * 130) + '" y="' + (20 + r() * 40) + '" width="60" height="26" fill="#2a3139" stroke="#8a97a3" stroke-opacity=".4"/>';
    s += '<rect y="400" width="' + w + '" height="' + (h - 400) + '" fill="#1b2026"/><path d="M0 400H' + w + '" stroke="#ffb26b" stroke-width="2" opacity=".5"/>';
    s += '<path d="M0 470H' + w + 'M0 500H' + w + '" stroke="#5a2e17" stroke-width="3" opacity=".6"/>';
    // assembly line of dead lathes receding
    for (i = 0; i < 4; i++) s += lathe(130 + i * 190, 420 + i * 6, 0.62, false);
    s += '<rect x="0" y="448" width="' + w + '" height="12" fill="#3a4049"/><path d="M0 454H' + w + '" stroke="' + C.rust + '" stroke-dasharray="30 18" stroke-width="3"/>';
    s += lathe(640, 520, 1.15, false);
    s += dan(430, 540, 1.25, "touch", false);
    // dust motes
    for (i = 0; i < 40; i++) s += '<circle cx="' + f1(r() * w) + '" cy="' + f1(r() * 420) + '" r="1.5" fill="#ffd9a0" opacity=".5"/>';
    return s;
  };

  P.p1b = function (w, h) { // framed photo close-up
    var s = "", r = rng(5), i;
    s += '<rect width="' + w + '" height="' + h + '" fill="#6b3a21"/>';
    for (i = 0; i < 12; i++) s += '<rect x="0" y="' + (i * 50) + '" width="' + w + '" height="4" fill="#3d2013" opacity=".7"/>';
    s += '<path d="M40 0L70 140L30 260M300 40L330 200M120 540L160 420" stroke="#2a150b" stroke-width="6" fill="none" opacity=".5"/>';
    for (i = 0; i < 18; i++) s += '<circle cx="' + f1(r() * w) + '" cy="' + f1(r() * h) + '" r="' + f1(4 + r() * 12) + '" fill="' + (r() > .5 ? C.rust : "#8f3d1a") + '" opacity=".35"/>';
    var fx = 36, fy = 80, fw = w - 72, fh = 330;
    s += '<rect x="' + (fx - 14) + '" y="' + (fy - 14) + '" width="' + (fw + 28) + '" height="' + (fh + 28) + '" fill="#2a2f38" stroke="' + C.steel3 + '" stroke-width="3"/>';
    s += '<rect x="' + fx + '" y="' + fy + '" width="' + fw + '" height="' + fh + '" fill="#d9c9a6"/>';
    s += '<rect x="' + fx + '" y="' + (fy + 190) + '" width="' + fw + '" height="140" fill="#a8946c"/>';
    // two rows of workers, arms around each other
    var rows = [[fy + 180, 0.8, 6], [fy + 270, 1, 5]];
    for (var q = 0; q < rows.length; q++) {
      var yy = rows[q][0], sc = rows[q][1], n = rows[q][2];
      for (i = 0; i < n; i++) {
        var cx = fx + 30 + i * ((fw - 60) / (n - 1));
        s += '<g transform="translate(' + f1(cx) + " " + yy + ") scale(" + sc + ')"><path d="M-22 70L-20 0Q0 -14 20 0L22 70Z" fill="' + (i % 2 ? "#4a4036" : "#322b24") + '"/><circle cy="-22" r="15" fill="#6b5a48"/><path d="M-9 -20Q0 -8 9 -20" stroke="#2a2018" stroke-width="3" fill="none"/>' +
          '<path d="M-26 20L-52 22M26 20L52 22" stroke="' + (i % 2 ? "#4a4036" : "#322b24") + '" stroke-width="10" stroke-linecap="round"/></g>';
      }
    }
    // Dad highlighted in the front row (center), gold ring
    var dx = fx + 30 + 2 * ((fw - 60) / 4);
    s += '<circle cx="' + f1(dx) + '" cy="' + (fy + 248) + '" r="26" fill="none" stroke="' + C.red + '" stroke-width="3" stroke-dasharray="5 4"/>';
    s += '<path d="M' + fx + " " + fy + "L" + (fx + 90) + " " + fy + "L" + fx + " " + (fy + 90) + 'Z" fill="#fff" opacity=".18"/>';
    s += '<path d="M' + fx + " " + (fy + fh) + "h" + fw + '" stroke="' + C.rust + '" stroke-width="3"/>';
    s += '<rect x="' + (fx + fw / 2 - 90) + '" y="' + (fy + fh + 32) + '" width="180" height="32" fill="#c9a24a" stroke="#6b5420" stroke-width="2"/>';
    s += '<rect x="' + (fx + fw / 2 - 70) + '" y="' + (fy + fh + 44) + '" width="140" height="4" fill="#6b5420"/><rect x="' + (fx + fw / 2 - 50) + '" y="' + (fy + fh + 52) + '" width="100" height="3" fill="#6b5420"/>';
    return s;
  };

  P.p1c = function (w, h) { // Dan looks up, machines glow
    var s = "", r = rng(3), i;
    s += '<defs><radialGradient id="c-glow" cx=".5" cy=".6" r=".7"><stop offset="0" stop-color="#9fe0ff" stop-opacity=".55"/><stop offset="1" stop-color="#9fe0ff" stop-opacity="0"/></radialGradient></defs>';
    s += '<rect width="' + w + '" height="' + h + '" fill="#10151b"/><rect width="' + w + '" height="' + h + '" fill="url(#c-glow)"/>';
    for (i = 0; i < 4; i++) s += '<rect x="' + (20 + i * 100) + '" y="0" width="12" height="260" fill="#0a0d11"/>';
    // glowing machine shapes behind
    s += gearAt(80, 330, 80, 66, 20, "#1c2a38", 'stroke="#9fe0ff" stroke-width="3" class="glowpulse"');
    s += gearAt(310, 230, 56, 46, 16, "#1c2a38", 'stroke="#9fe0ff" stroke-width="3" class="glowpulse"');
    s += lathe(260, 640, 1.2, true);
    s += '<rect y="660" width="' + w + '" height="' + (h - 660) + '" fill="#0a0d11"/>';
    s += '<path d="M0 660H' + w + '" stroke="#9fe0ff" stroke-width="3" opacity=".6"/>';
    // Dan, three-quarter bust, looking up
    s += '<g transform="translate(190 700)"><path d="M-150 160L-110 -30Q0 -80 110 -30L150 160Z" fill="' + C.denim + '" stroke="' + C.rust + '" stroke-width="4"/>' +
      '<path d="M0 -40V160" stroke="#10151b" stroke-width="4"/><path d="M-56 -50L-20 -14L-60 10Z M56 -50L20 -14L60 10Z" fill="#26384e"/>' +
      '<path d="M-24 -40L-20 -66L20 -66L24 -40Z" fill="#12151a"/><g transform="translate(0 -110) rotate(-12)"><ellipse rx="42" ry="50" fill="#12151a" stroke="#9fe0ff" stroke-width="3"/>' +
      '<path d="M-42 -14Q-30 -62 0 -58Q36 -60 42 -14Q10 -40 -42 -14Z" fill="#05070a"/><path d="M-12 -10l-16 -2M12 -10l16 -2" stroke="#9fe0ff" stroke-width="2" opacity=".8"/></g></g>';
    return s;
  };

  P.p2a = function (w, h) { // core breaks through the floor
    var s = "", r = rng(21), i;
    s += '<defs><radialGradient id="e-halo" cx=".5" cy=".62" r=".6"><stop offset="0" stop-color="#fffbe0"/><stop offset=".25" stop-color="#ffd27a" stop-opacity=".9"/><stop offset=".6" stop-color="#ff9a4a" stop-opacity=".4"/><stop offset="1" stop-color="#ff9a4a" stop-opacity="0"/></radialGradient></defs>';
    s += '<rect width="' + w + '" height="' + h + '" fill="#12161c"/>';
    for (i = 0; i < 8; i++) s += '<rect x="' + (i * 110) + '" y="0" width="14" height="240" fill="#0a0d11"/>';
    // floor plane with cracks
    s += '<path d="M0 270L' + w + ' 270L' + w + " " + h + 'L0 ' + h + 'Z" fill="#232930"/>';
    s += '<rect width="' + w + '" height="' + h + '" fill="url(#e-halo)"/>';
    for (i = 0; i < 18; i++) { var a = i / 18 * Math.PI * 2; s += '<path d="M' + w / 2 + " " + (h * 0.62) + "L" + f1(w / 2 + Math.cos(a) * (300 + r() * 200)) + " " + f1(h * 0.62 + Math.sin(a) * (140 + r() * 120)) + '" stroke="#fff2b0" stroke-width="' + f1(2 + r() * 3) + '" opacity=".6"/>'; }
    // broken floor slabs
    s += '<path d="M230 330L330 300L350 360Z M470 340L570 290L600 350Z M300 420L380 380L400 440Z M420 430L520 400L560 450Z" fill="#3b414d" stroke="#ffd27a" stroke-width="3"/>';
    // the core
    s += '<g transform="translate(' + w / 2 + " " + h * 0.58 + ')"><ellipse rx="170" ry="62" cy="90" fill="#0a0d11" opacity=".7"/><path d="M-110 90Q-120 -60 0 -110Q120 -60 110 90Z" fill="#3a4350" stroke="#ffd27a" stroke-width="4"/>' +
      '<circle r="86" cy="-10" fill="#10151b" stroke="#9fe0ff" stroke-width="5"/>';
    s += gearAt(-30, -24, 46, 38, 14, "#8a97a3", 'class="glowpulse"') + gearAt(34, 0, 34, 28, 12, C.rust, "") + gearAt(0, 36, 24, 19, 10, C.gold, "") + gearAt(-42, 30, 18, 14, 8, "#9fe0ff", "") + gearAt(46, -46, 16, 12, 8, "#fff", "");
    s += "</g>";
    // light rays
    s += '<path d="M' + w / 2 + " " + h * 0.58 + 'L120 0L200 0Z M' + w / 2 + " " + h * 0.58 + 'L600 0L680 0Z" fill="#fff2b0" opacity=".22"/>';
    s += dan(90, h - 8, 0.7, "stand", false).replace("<g ", '<g opacity=".9" ');
    return s;
  };

  P.p2b = function (w, h) { // Dan reaches and shields eyes
    var s = "";
    s += '<defs><radialGradient id="f-halo" cx=".78" cy=".5" r=".7"><stop offset="0" stop-color="#fffbe0"/><stop offset=".3" stop-color="#ffd27a" stop-opacity=".8"/><stop offset="1" stop-color="#ff9a4a" stop-opacity="0"/></radialGradient></defs>';
    s += '<rect width="' + w + '" height="' + h + '" fill="#161b22"/><rect width="' + w + '" height="' + h + '" fill="url(#f-halo)"/>';
    s += '<path d="M0 ' + (h - 40) + 'H' + w + 'V' + h + 'H0Z" fill="#232930"/>';
    s += gearAt(650, 150, 70, 58, 18, "#fff7d0", 'opacity=".9"') + gearAt(580, 200, 40, 32, 12, "#ffd27a", "");
    s += '<g transform="translate(220 ' + (h - 20) + ') scale(1.2)">' + dan(0, 0, 1, "reach", false).replace(/^<g [^>]*>/, "<g>") + "</g>";
    s += '<path d="M290 ' + (h - 250) + 'l20 -26M300 ' + (h - 240) + 'l28 -14" stroke="#12151a" stroke-width="5"/>';
    return s;
  };

  P.p2c = function (w, h) { // full-width: threads of light into Dan's chest
    var s = "", r = rng(33), i;
    s += '<defs><radialGradient id="g-core" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff"/><stop offset=".4" stop-color="#ffe9a0"/><stop offset="1" stop-color="#ffb26b" stop-opacity="0"/></radialGradient></defs>';
    s += '<rect width="' + w + '" height="' + h + '" fill="#0c1016"/>';
    var cx = 160, cy = h * 0.5, dx = w * 0.62;
    // machines in the plant lighting up
    for (i = 0; i < 6; i++) s += lathe(250 + i * 110, 100 + (i % 2) * 20 + 30, 0.35, true);
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="130" fill="url(#g-core)"/>';
    s += gearAt(cx, cy, 70, 58, 18, "#8a97a3", "") + gearAt(cx, cy, 40, 32, 12, C.gold, "");
    // thousand threads (many thin lines)
    for (i = 0; i < 90; i++) {
      var y2 = cy - 40 + r() * 80, mid = (cx + dx) / 2;
      s += '<path d="M' + cx + " " + f1(cy + (r() - .5) * 60) + "Q" + f1(mid) + " " + f1(cy + (r() - .5) * 220) + " " + dx + " " + f1(y2) + '" stroke="' + (i % 3 ? "#ffe9a0" : "#9fe0ff") + '" stroke-width="' + f1(0.8 + r() * 1.6) + '" fill="none" opacity=".75"/>';
    }
    s += '<g transform="translate(' + dx + " " + (h - 14) + ') scale(1.05)">' + dan(0, 0, 1, "stand", false).replace(/^<g [^>]*>/, "<g>") + "</g>";
    s += '<circle cx="' + dx + '" cy="' + (cy + 12) + '" r="52" fill="url(#g-core)"/>';
    s += '<path d="M0 ' + (h - 20) + 'H' + w + 'V' + h + 'H0Z" fill="#232930"/>';
    return s;
  };

  P.p3a = function (w, h) { // black panel
    return '<rect width="' + w + '" height="' + h + '" fill="#000"/>' + '<circle cx="' + (w - 80) + '" cy="' + (h - 40) + '" r="1.5" fill="#9fe0ff" opacity=".6"/><circle cx="90" cy="30" r="1.2" fill="#ffd27a" opacity=".5"/>';
  };

  P.p3b = function (w, h) { // Dan, suited, gear irises, light cables
    var s = "", i;
    s += '<defs><radialGradient id="h-glow" cx=".5" cy=".55" r=".65"><stop offset="0" stop-color="#ffd27a" stop-opacity=".7"/><stop offset=".5" stop-color="#c8602a" stop-opacity=".25"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs>';
    s += '<rect width="' + w + '" height="' + h + '" fill="#0a0d11"/><rect width="' + w + '" height="' + h + '" fill="url(#h-glow)"/>';
    for (i = 0; i < 10; i++) s += '<path d="M' + (i * 44) + ' ' + h + 'L' + (i * 44 + 20) + ' 0" stroke="#ffd27a" stroke-width="1.5" opacity=".12"/>';
    var cx = w / 2;
    // body: plated suit
    s += '<g transform="translate(' + cx + ' 0)">';
    s += '<path d="M-120 ' + h + 'L-100 470Q-90 380 -60 350L60 350Q90 380 100 470L120 ' + h + 'Z" fill="' + C.steel + '" stroke="' + C.gold + '" stroke-width="3"/>';
    s += '<path d="M-100 470L-70 400L-30 440L0 380L30 440L70 400L100 470L90 560L0 520L-90 560Z" fill="' + C.steel2 + '" stroke="' + C.rust + '" stroke-width="3"/>';
    s += '<path d="M-140 400L-190 600L-170 ' + (h - 140) + 'L-130 ' + (h - 140) + 'L-110 600L-90 440Z M140 400L190 600L170 ' + (h - 140) + 'L130 ' + (h - 140) + 'L110 600L90 440Z" fill="' + C.steel + '" stroke="' + C.rust + '" stroke-width="3"/>';
    // rivets and plating seams
    for (i = 0; i < 6; i++) s += '<circle cx="' + (-70 + i * 28) + '" cy="' + (500 + (i % 2) * 10) + '" r="3.5" fill="' + C.steel3 + '"/>';
    // forearm light cables
    s += '<path d="M-180 620L-174 ' + (h - 150) + 'M-160 620L-156 ' + (h - 150) + 'M180 620L174 ' + (h - 150) + 'M160 620L156 ' + (h - 150) + '" stroke="#ffe9a0" stroke-width="4" class="glowpulse"/>';
    s += '<path d="M-150 560L-170 600M150 560L170 600" stroke="#9fe0ff" stroke-width="3" class="glowpulse"/>';
    // reactor ring on chest
    s += '<circle cy="470" r="22" fill="#10151b" stroke="#ffd27a" stroke-width="4"/><circle cy="470" r="9" fill="#fff2b0" class="glowpulse"/>';
    // head
    s += '<path d="M-24 350L-20 310L20 310L24 350Z" fill="#12151a"/>';
    s += '<ellipse cy="250" rx="62" ry="76" fill="#14181e" stroke="' + C.gold + '" stroke-width="4"/>';
    s += '<path d="M-62 232Q-54 164 0 160Q56 164 62 232Q30 200 0 206Q-30 200 -62 232Z" fill="#05070a"/>';
    s += '<path d="M-62 250Q-70 300 -40 320M62 250Q70 300 40 320" stroke="' + C.steel3 + '" stroke-width="5" fill="none"/>';
    // gear-shaped irises
    s += '<ellipse cx="-26" cy="246" rx="19" ry="12" fill="#05070a"/><ellipse cx="26" cy="246" rx="19" ry="12" fill="#05070a"/>';
    s += '<path transform="translate(-26 246)" d="' + gearPath(11, 8.5, 10) + circlePath(3) + '" fill-rule="evenodd" fill="' + C.gold + '" class="glowpulse"/>';
    s += '<path transform="translate(26 246)" d="' + gearPath(11, 8.5, 10) + circlePath(3) + '" fill-rule="evenodd" fill="' + C.gold + '" class="glowpulse"/>';
    s += '<path d="M-12 292Q0 298 12 292" stroke="#2a2f38" stroke-width="3" fill="none"/>';
    s += "</g>";
    return s;
  };

  P.p3c = function (w, h) { // core ejects the shield; Dan catches
    var s = "", r = rng(9), i;
    s += '<defs><radialGradient id="i-core" cx=".5" cy=".18" r=".7"><stop offset="0" stop-color="#fffbe0"/><stop offset=".3" stop-color="#ffd27a" stop-opacity=".8"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs>';
    s += '<rect width="' + w + '" height="' + h + '" fill="#0a0d11"/><rect width="' + w + '" height="' + h + '" fill="url(#i-core)"/>';
    var cx = w / 2;
    // core at top, opening iris
    s += '<g transform="translate(' + cx + ' 120)"><circle r="104" fill="#232930" stroke="#ffd27a" stroke-width="5"/>' + gearAt(0, 0, 90, 76, 24, "#4a5560", 'stroke="#ffd27a" stroke-width="2"') + '<circle r="52" fill="#fff6c8" class="glowpulse"/></g>';
    for (i = 0; i < 12; i++) s += '<path d="M' + cx + " 120L" + f1(cx - 200 + r() * 400) + " " + f1(300 + r() * 200) + '" stroke="#ffe9a0" stroke-width="1.5" opacity=".35"/>';
    // the Shield, dormant, descending
    s += shieldAt(cx, 400, 0.88, "dormant");
    // gleam on stars
    s += '<g transform="translate(' + cx + " 400) scale(.88)" + '" fill="#fff" opacity=".8"><path d="M-60 -170l4 14l14 4l-14 4l-4 14l-4 -14l-14 -4l14 -4Z"/><path d="M90 70l3 10l10 3l-10 3l-3 10l-3 -10l-10 -3l10 -3Z"/></g>';
    // Dan's hands catching from below
    s += '<g transform="translate(' + cx + ' ' + (h - 10) + ')"><path d="M-130 0L-120 -220L-90 -300L-60 -240L-70 0Z M130 0L120 -220L90 -300L60 -240L70 0Z" fill="' + C.steel + '" stroke="' + C.gold + '" stroke-width="3"/>' +
      '<path d="M-120 -230L-84 -310M120 -230L84 -310" stroke="#ffe9a0" stroke-width="4" class="glowpulse"/>' +
      '<rect x="-96" y="-318" width="46" height="26" rx="6" fill="#14181e" stroke="' + C.gold + '" stroke-width="2"/><rect x="50" y="-318" width="46" height="26" rx="6" fill="#14181e" stroke="' + C.gold + '" stroke-width="2"/></g>';
    return s;
  };

  window.GH = { C: C, shield: shield, shieldAt: shieldAt, panels: P, gearPath: gearPath };
  if (typeof module !== "undefined") module.exports = window.GH;
})();
