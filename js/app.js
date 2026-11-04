/* GEARHEART viewer: page data, navigation, Shield Lab. No dependencies. */
(function () {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";
  var G = window.GH;
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* rect = [x, y, w, h] in a 800 x 1100 page. ov = overlays in HTML. */
  var PAGES = [
    { label: "Prologue", panels: [
      { rect: [0, 0, 800, 1100], art: "prologue", ov: [
        { t: "cap", pos: "tl", text: "Once, this country built everything. Then one day, it stopped." }] }] },
    { label: "Page 1", panels: [
      { rect: [12, 12, 776, 520], art: "p1a", ov: [
        { t: "cap dan wide", pos: "tl", text: "My father worked this floor for thirty-one years. He used to say a machine is just a promise that someone's hands made." }] },
      { rect: [12, 544, 380, 544], art: "p1b", ov: [] },
      { rect: [404, 544, 384, 544], art: "p1c", ov: [
        { t: "sfx hum", pos: "tl", text: "hmmmmmmMMMMM" }] }] },
    { label: "Page 2", panels: [
      { rect: [12, 12, 776, 420], art: "p2a", ov: [
        { t: "cap wide", pos: "tl", text: "Nobody told the town what was under the factory. Not the owners. Not the bank. Not the government that quietly sealed it." }] },
      { rect: [12, 444, 776, 300], art: "p2b", ov: [
        { t: "bubble", pos: "tl", style: "left:6%;top:8%;--tx:30%", text: "Whatever you are... I'm done watching things die." }] },
      { rect: [12, 756, 776, 332], art: "p2c", ov: [
        { t: "sfx big", pos: "tr", text: "KRAAAAA-THOOOOOM" }] }] },
    { label: "Page 3", panels: [
      { rect: [12, 12, 776, 180], art: "p3a", ov: [
        { t: "cap wide", pos: "tl", style: "top:12%", text: "I could hear them. Every engine. Every motor. Every relay and bearing in the county. They were all talking." }] },
      { rect: [12, 204, 380, 884], art: "p3b", ov: [] },
      { rect: [404, 204, 384, 884], art: "p3c", shield: true, ov: [
        { t: "cap", pos: "bl", text: "And it was waiting for me." }] }] }
  ];

  var stage = document.getElementById("stage");
  var indicator = document.getElementById("indicator");
  var cur = 0;

  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; }

  function build(page) {
    var pg = el("section", "page");
    pg.setAttribute("aria-label", page.label);
    page.panels.forEach(function (p) {
      var r = p.rect, d = el("div", "panel" + (p.shield ? " clickable" : ""));
      d.style.left = (r[0] / 8) + "%"; d.style.top = (r[1] / 11) + "%";
      d.style.width = (r[2] / 8) + "%"; d.style.height = (r[3] / 11) + "%";
      var svg = document.createElementNS(NS, "svg");
      svg.setAttribute("class", "art");
      svg.setAttribute("viewBox", "0 0 " + r[2] + " " + r[3]);
      svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
      svg.setAttribute("role", "img");
      svg.innerHTML = G.panels[p.art](r[2], r[3]);
      d.appendChild(svg);
      p.ov.forEach(function (o) {
        var n = el("div", o.t + " " + o.pos, o.text);
        if (o.style) n.setAttribute("style", o.style);
        d.appendChild(n);
      });
      if (p.shield) {
        d.title = "Click to open the Shield Lab";
        d.addEventListener("click", openLab);
      }
      pg.appendChild(d);
    });
    return pg;
  }

  function show(i) {
    cur = Math.max(0, Math.min(PAGES.length - 1, i));
    stage.innerHTML = "";
    stage.appendChild(build(PAGES[cur]));
    indicator.textContent = PAGES[cur].label + "  (" + (cur + 1) + "/" + PAGES.length + ")";
    document.getElementById("prev").disabled = cur === 0;
    document.getElementById("next").disabled = cur === PAGES.length - 1;
    if (history.replaceState) history.replaceState(null, "", "#" + cur);
  }

  /* ---------------- Shield Lab ---------------- */
  var lab = document.getElementById("lab");
  var labStage = document.getElementById("labstage");
  var stateBtn = document.getElementById("labstate");
  var autoBtn = document.getElementById("labauto");
  var countEl = document.getElementById("labcount");
  var L = null; // lab runtime

  function openLab() {
    lab.hidden = false;
    if (!L) initLab();
    L.running = true; L.last = 0;
    requestAnimationFrame(tick);
  }
  function closeLab() { lab.hidden = true; if (L) { L.running = false; setAuto(false); } }

  function setActive(on) {
    L.active = on;
    L.g.setAttribute("class", "shield lab " + (on ? "active" : "dormant"));
    stateBtn.textContent = "State: " + (on ? "ACTIVE" : "DORMANT");
    stateBtn.setAttribute("aria-pressed", on ? "true" : "false");
  }
  function setAuto(on) {
    autoBtn.textContent = "Auto-fire: " + (on ? "ON" : "OFF");
    autoBtn.setAttribute("aria-pressed", on ? "true" : "false");
    if (L && L.timer) { clearInterval(L.timer); L.timer = null; }
    if (on && L) L.timer = setInterval(function () { fire(Math.random() * Math.PI * 2); }, 900);
  }

  function initLab() {
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "-250 -250 500 500");
    svg.innerHTML = '<g id="labshield"></g><g id="labfx"></g><line id="aim" x1="0" y1="0" x2="0" y2="0" stroke="#9fe0ff" stroke-width="2" stroke-dasharray="6 6" opacity="0"/>';
    labStage.appendChild(svg);
    var holder = svg.querySelector("#labshield");
    holder.innerHTML = G.shield("dormant");
    var g = holder.firstChild;
    L = { svg: svg, g: g, fx: svg.querySelector("#labfx"), aim: svg.querySelector("#aim"), active: false, carrier: 0, sunA: 0, pspin: 0,
      planets: [], pa: [], over: [], proj: [], sparks: [], blocked: 0, running: false, last: 0, timer: null, hover: null };
    g.setAttribute("class", "shield lab dormant");
    var ps = g.querySelectorAll(".planet");
    for (var i = 0; i < ps.length; i++) {
      L.planets.push({ outer: ps[i], spin: ps[i].querySelector(".pspin") });
      L.pa.push(i * 60 - 90); L.over.push(null);
    }
    L.sun = g.querySelector(".sunspin");
    L.carrierG = g.querySelector(".carrier");
    stateBtn.addEventListener("click", function () { setActive(!L.active); });
    autoBtn.addEventListener("click", function () { setAuto(autoBtn.getAttribute("aria-pressed") !== "true"); });
    svg.addEventListener("pointermove", function (e) {
      var a = angleOf(e); L.hover = a;
      aimAt(a, Infinity);
      L.aim.setAttribute("x2", Math.cos(a) * 240); L.aim.setAttribute("y2", Math.sin(a) * 240); L.aim.setAttribute("opacity", ".7");
    });
    svg.addEventListener("pointerleave", function () { L.hover = null; L.aim.setAttribute("opacity", "0"); releaseAll(); });
    svg.addEventListener("click", function (e) { fire(angleOf(e)); });
    setActive(false);
  }

  function angleOf(e) {
    var pt = L.svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
    var p = pt.matrixTransform(L.svg.getScreenCTM().inverse());
    return Math.atan2(p.y, p.x);
  }
  function norm(d) { while (d > 180) d -= 360; while (d < -180) d += 360; return d; }
  function deg(a) { return a * 180 / Math.PI; }

  /* choose the planet nearest the incoming angle and make it slide there.
     secs = Infinity for hover aim (released on leave), finite for fired shots. */
  function aimAt(a, secs) {
    var t = deg(a), best = -1, bd = 1e9, i;
    for (i = 0; i < 6; i++) {
      if (L.over[i] && Math.abs(norm(t - L.over[i].target)) < 8) { best = i; bd = -1; break; }
      var d = Math.abs(norm(t - L.pa[i]));
      if (d < bd) { bd = d; best = i; }
    }
    if (secs === Infinity) for (i = 0; i < 6; i++) if (i !== best && L.over[i] && L.over[i].hold === Infinity) L.over[i] = null;
    var o = L.over[best];
    if (!o || secs !== Infinity || o.hold === Infinity) L.over[best] = { target: t, hold: secs };
    else o.hold = Math.max(o.hold, secs);
    return best;
  }
  function releaseAll() { for (var i = 0; i < 6; i++) if (L.over[i] && L.over[i].hold === Infinity) L.over[i] = null; }

  function fire(a) {
    var idx = aimAt(a, 1.2);
    var c = document.createElementNS(NS, "circle");
    c.setAttribute("r", 7); c.setAttribute("fill", "#ff5a3c"); c.setAttribute("stroke", "#fff"); c.setAttribute("stroke-width", 2);
    L.fx.appendChild(c);
    L.proj.push({ node: c, a: a, d: 245, idx: idx });
  }

  function spark(x, y) {
    for (var i = 0; i < 8; i++) {
      var ln = document.createElementNS(NS, "line");
      ln.setAttribute("stroke", i % 2 ? "#ffd27a" : "#fff"); ln.setAttribute("stroke-width", 2.5);
      L.fx.appendChild(ln);
      var ang = Math.random() * Math.PI * 2;
      L.sparks.push({ n: ln, x: x, y: y, vx: Math.cos(ang) * 160, vy: Math.sin(ang) * 160, life: 0.35 });
    }
  }

  function ease(cur, tgt, dt, k) { return reduced ? tgt : cur + norm(tgt - cur) * Math.min(1, dt * k); }

  function tick(ts) {
    if (!L || !L.running) return;
    var dt = L.last ? Math.min(0.05, (ts - L.last) / 1000) : 0.016; L.last = ts;
    var i;
    if (L.active && !reduced) { L.carrier += dt * 40; L.pspin -= dt * 110; L.sunA -= dt * 70; }
    for (i = 0; i < 6; i++) {
      var o = L.over[i], base = i * 60 - 90 + L.carrier, tgt = base;
      if (o) { tgt = o.target; if (o.hold !== Infinity) { o.hold -= dt; if (o.hold <= 0) { L.over[i] = null; } } }
      L.pa[i] = ease(L.pa[i], tgt, dt, 9);
      var r = 100 + (o ? 6 : 0), rad = L.pa[i] * Math.PI / 180;
      L.planets[i].outer.setAttribute("transform", "translate(" + (Math.cos(rad) * r).toFixed(2) + " " + (Math.sin(rad) * r).toFixed(2) + ")");
      L.planets[i].spin.setAttribute("transform", "rotate(" + L.pspin.toFixed(1) + ")");
    }
    L.sun.setAttribute("transform", "rotate(" + L.sunA.toFixed(1) + ")");
    for (i = L.proj.length - 1; i >= 0; i--) {
      var p = L.proj[i];
      p.d -= reduced ? 1000 : 420 * dt;
      var hit = p.d <= 140;
      if (hit) p.d = 140;
      p.node.setAttribute("cx", (Math.cos(p.a) * p.d).toFixed(1)); p.node.setAttribute("cy", (Math.sin(p.a) * p.d).toFixed(1));
      if (hit) {
        spark(Math.cos(p.a) * 140, Math.sin(p.a) * 140);
        L.fx.removeChild(p.node); L.proj.splice(i, 1);
        L.blocked++; countEl.textContent = L.blocked;
      }
    }
    for (i = L.sparks.length - 1; i >= 0; i--) {
      var s = L.sparks[i]; s.life -= dt; s.x += s.vx * dt; s.y += s.vy * dt;
      if (s.life <= 0) { L.fx.removeChild(s.n); L.sparks.splice(i, 1); continue; }
      s.n.setAttribute("x1", s.x); s.n.setAttribute("y1", s.y); s.n.setAttribute("x2", s.x - s.vx * 0.05); s.n.setAttribute("y2", s.y - s.vy * 0.05);
      s.n.setAttribute("opacity", Math.min(1, s.life * 4));
    }
    requestAnimationFrame(tick);
  }

  /* ---------------- wiring ---------------- */
  document.getElementById("prev").addEventListener("click", function () { show(cur - 1); });
  document.getElementById("next").addEventListener("click", function () { show(cur + 1); });
  document.getElementById("labbtn").addEventListener("click", openLab);
  document.getElementById("labclose").addEventListener("click", closeLab);
  document.addEventListener("keydown", function (e) {
    if (!lab.hidden) { if (e.key === "Escape") closeLab(); return; }
    if (e.key === "ArrowRight") show(cur + 1);
    else if (e.key === "ArrowLeft") show(cur - 1);
    else if (e.key === "Home") show(0);
    else if (e.key === "End") show(PAGES.length - 1);
  });
  var start = parseInt((location.hash || "").slice(1), 10);
  show(isNaN(start) ? 0 : start);
})();
