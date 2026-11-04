/* GEARHEART viewer: page data, navigation, Shield Lab. No dependencies. */
(function () {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";
  var G = window.GH;
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* rect = [x, y, w, h] in a 800 x 1100 page. ov = overlays in HTML. */
  var COMING = "Pages 4-6 are coming: Dan's current surge saves Walt, the machines start to talk to him, Walt gives him the shield from over the tool crib, and Hollis's machines ship by freight from Baltimore to Ohio. For now, Page 7 jumps ahead to the Torque Wave fight.";
  var PAGES = [
    { label: "Prologue", panels: [
      { rect: [0, 0, 800, 1100], art: "prologue", ov: [
        { t: "cap wide", pos: "tl", text: "We designed the world's machines. Then we shipped the work of building them overseas." },
        { t: "cap", pos: "bl", text: "Now we're bringing it back." }] }] },
    { label: "Page 1", panels: [
      { rect: [12, 12, 776, 520], art: "p1a", ov: [
        { t: "cap", pos: "tl", style: "max-width:30%", text: "We never stopped inventing. We stopped making." },
        { t: "bubble", pos: "tr", style: "right:2%;top:3%;max-width:44%;--tx:20%", who: "THE PRESIDENT", text: "America never stopped inventing. The best engineers in the world are still right here. What we lost was the making. The factories. The jobs. That's what we're bringing home." }] },
      { rect: [12, 544, 380, 544], art: "p1b", ov: [
        { t: "bubble", pos: "tr", style: "right:3%;top:2%;max-width:44%;--tx:60%", who: "WALT", text: "Believe him?" },
        { t: "bubble", pos: "tl", style: "left:3%;top:14%;max-width:56%;--tx:30%", who: "DAN", text: "I believe him. I just know how hard it is to move a factory." },
        { t: "cap", pos: "bl", style: "max-width:80%", text: "Dan Reyes-Holloway, 34, third-generation machinist. Beside him, his old foreman Walt Kowalski, 61." }] },
      { rect: [404, 544, 384, 544], art: "p1c", ov: [
        { t: "bubble", pos: "tl", style: "left:4%;top:3%;max-width:64%;--tx:25%", who: "THE PRESIDENT", text: "If we can't make our own steel, our own parts, our own medicine, then we depend on someone else for our survival. Not anymore." }] }] },
    { label: "Page 2", panels: [
      { rect: [12, 12, 776, 300], art: "p2a", ov: [
        { t: "cap", pos: "tl", style: "max-width:36%", text: "Elaine Hollis, CEO of Hollis Bearing Co. Her family company moved production overseas in 2004." },
        { t: "bubble", pos: "tr", style: "right:2%;top:3%;max-width:42%;--tx:30%", who: "HOLLIS", text: "We're bringing our whole line back. Sixty machines, two hundred jobs. But the people who set it up retired years ago. Nobody here knows how to stand it up." }] },
      { rect: [12, 324, 380, 380], art: "p2b", ov: [
        { t: "bubble", pos: "tl", style: "left:3%;top:3%;max-width:40%;--tx:40%", who: "THE PRESIDENT", text: "Who restored this?" },
        { t: "bubble", pos: "tr", style: "right:3%;top:17%;max-width:50%;--tx:30%", who: "WALT", text: "Him. Dan can set up a line faster than anybody I've seen in forty years." },
        { t: "cap", pos: "bl", style: "max-width:55%", text: "A 1970s turret lathe, rebuilt by hand. It already runs smooth." }] },
      { rect: [404, 324, 384, 380], art: "p2c", ov: [
        { t: "bubble", pos: "tl", style: "left:2%;top:2%;max-width:38%;--tx:50%", who: "THE PRESIDENT", text: "Then he's your man. Get that line home and get it running." }] },
      { rect: [12, 716, 776, 372], art: "p2d", ov: [
        { t: "bubble", pos: "tl", style: "left:3%;top:3%;max-width:30%;--tx:60%", who: "HOLLIS", text: "Ninety days. Can you do it?" },
        { t: "bubble", pos: "tr", style: "right:3%;top:3%;max-width:30%;--tx:30%", who: "DAN", text: "Ship me the machines." }] }] },
    { label: "Page 3", note: "Up next: Pages 4-6 are coming. This issue skips ahead to Page 7.", panels: [
      { rect: [12, 12, 776, 300], art: "p3a", ov: [
        { t: "cap wide", pos: "bl", style: "max-width:62%", text: "A boardroom overseas. Meridian Pacific Consortium, a state-backed manufacturing giant, owns the plant Hollis is leaving." }] },
      { rect: [12, 324, 380, 380], art: "p3b", ov: [
        { t: "cap", pos: "bl", style: "max-width:50%", text: "Director Shao Lin-Wei watches the Ashford speech." },
        { t: "bubble", pos: "tr", style: "right:3%;top:50%;max-width:50%;--tx:30%", who: "SHAO", text: "If Hollis brings its line home and it works, fifty companies follow. Then a hundred. They won't need us." }] },
      { rect: [404, 324, 384, 380], art: "p3c", ov: [
        { t: "cap", pos: "tl", style: "max-width:46%", text: "Marguerite Voss, an American logistics fixer who sells to the highest bidder." },
        { t: "bubble", pos: "br", style: "right:2%;bottom:5%;max-width:60%;--tx:25%", who: "VOSS", text: "Then the line never runs. Ships get delayed. Crates get damaged. Parts go missing. A factory that can't start is just a press release." }] },
      { rect: [12, 716, 776, 372], art: "p3d", ov: [
        { t: "cap", pos: "tl", style: "max-width:30%", text: "Shao slides over a file marked HOLLIS / ASHFORD." },
        { t: "bubble", pos: "tr", style: "right:2%;top:3%;max-width:31%;--tx:30%", who: "SHAO", text: "The President's program rests on the first plants succeeding. Make this one fail." }] }] },
    { label: "Page 4", panels: [
      { rect: [12, 12, 776, 360], art: "p4a", ov: [
        { t: "cap", pos: "tl", style: "max-width:40%", text: "Night. Dan and Walt restart the plant's old rolling mill for the first time in twenty years." },
        { t: "sfx big", pos: "tr", style: "font-size:5cqw;top:6%;right:6%", text: "KRAK" }] },
      { rect: [12, 384, 380, 320], art: "p4b", ov: [
        { t: "cap", pos: "bl", style: "max-width:62%", text: "Dan grabs the live drive housing to wrench it away. A surge of current arcs through him." },
        { t: "sfx big", pos: "tr", style: "font-size:4.4cqw;top:3%;right:4%", text: "KZZZRRRAAAK" }] },
      { rect: [404, 384, 384, 320], art: "p4c", ov: [
        { t: "cap", pos: "tl", style: "max-width:52%", text: "Later, in the hospital, Dan wakes up. A heart monitor beeps beside him. He turns his head toward it." },
        { t: "cap dan", pos: "bl", style: "max-width:70%", who: "DAN", text: "I could hear it. Not the beep. The machine. Its transformer was humming a little off." }] },
      { rect: [12, 716, 776, 372], art: "p4d", ov: [
        { t: "cap", pos: "tl", style: "max-width:36%", text: "Back on the plant floor, Dan touches a seized press, and it frees up and runs true." },
        { t: "cap", pos: "br", style: "max-width:54%", text: "Whatever happened that night, machines talk to me now. Where they're worn. Where they're out of true. Where they need to go." }] }] },
    { label: "Page 5", panels: [
      { rect: [12, 12, 776, 300], art: "p5a", ov: [
        { t: "cap", pos: "tl", style: "max-width:40%", text: "Dan walks an empty bay with chalk, marking the floor without measuring." },
        { t: "cap dan", pos: "br", style: "max-width:44%", who: "DAN", text: "I see a whole line before it's built." }] },
      { rect: [12, 324, 380, 380], art: "p5b", ov: [
        { t: "cap dan", pos: "bl", style: "max-width:60%", who: "DAN", text: "I make old machines run like new." }] },
      { rect: [404, 324, 384, 380], art: "p5c", ov: [
        { t: "cap dan", pos: "bl", style: "max-width:62%", who: "DAN", text: "And I can teach it. That matters most. A factory is people." }] },
      { rect: [12, 716, 776, 372], art: "p5d", ov: [
        { t: "bubble", pos: "tl", style: "left:3%;top:4%;max-width:44%;--tx:55%", who: "WALT", text: "Your dad would want you to have this back. Looks like you'll need it." }] }] },
    { label: "Page 6", panels: [
      { rect: [12, 12, 776, 360], art: "p6a", ov: [
        { t: "cap wide", pos: "bl", style: "max-width:62%", text: "The Port of Baltimore. Hollis's sixty machines arrive in crates, then load onto a freight train bound for Ohio." }] },
      { rect: [12, 384, 380, 320], art: "p6b", ov: [
        { t: "cap", pos: "tl", style: "max-width:58%", text: "Dan rides the train, with the shield strapped to his back and a hard hat on." }] },
      { rect: [404, 384, 384, 320], art: "p6c", ov: [
        { t: "cap", pos: "tl", style: "max-width:60%;font-size:1.6cqw", text: "Night in the mountains of West Virginia. Trucks with no lights pull alongside the tracks. Mercenaries led by KRAIT raise their rifles." },
        { t: "bubble", pos: "br", style: "right:3%;bottom:5%;max-width:60%;--tx:30%;font-size:1.7cqw", who: "KRAIT", text: "Hit the flatcars. Wreck the machines. No line, no factory." }] },
      { rect: [12, 716, 776, 372], art: "p6d", ov: [
        { t: "bubble", pos: "tr", style: "right:3%;top:5%;max-width:40%;--tx:40%", who: "DAN", text: "Those are two hundred jobs. You don't touch them." }] }] },
    { label: "Page 7", note: COMING, panels: [
      { rect: [12, 12, 300, 260], art: "p7a", ov: [
        { t: "cap", pos: "tl", style: "max-width:92%;font-size:1.5cqw", text: "Night, the West Virginia mountains. Krait's mercenaries, in trucks running without lights, open fire on the freight train." }] },
      { rect: [324, 12, 464, 532], art: "p7b", ov: [
        { t: "sfx", pos: "tl", style: "font-size:3.7cqw;left:3%;top:3%", text: "CHK-CHK-CHK-CHK-CHK-CHK" },
        { t: "cap", pos: "br", style: "max-width:52%", text: "Dan raises the shield. The gears spin and six star-gears orbit into place to block every round." }] },
      { rect: [12, 284, 300, 260], art: "p7c", ov: [
        { t: "cap", pos: "tl", style: "max-width:60%;font-size:1.5cqw", text: "Dan leaps from the freight car and lands hard on the trackbed." },
        { t: "bubble", pos: "tr", style: "right:3%;top:30%;max-width:46%;--tx:40%;font-size:1.7cqw", who: "KRAIT", text: "He's alone. Rush him!" }] },
      { rect: [12, 556, 776, 360], art: "p7d", shield: true, ov: [
        { t: "sfx big", pos: "tl", style: "font-size:6.4cqw", text: "VRRRRRRMMMMM \u2014 THOOOOOM" },
        { t: "sfx", pos: "tr", style: "font-size:2.4cqw;top:44%;right:6%;transform:rotate(8deg)", text: "tik tik tak tik" },
        { t: "sfx", pos: "tl", style: "font-size:2.2cqw;left:8%;top:60%;transform:rotate(-12deg)", text: "tik tak tik" },
        { t: "cap wide", pos: "bl", style: "max-width:44%", text: "Dan drops to one knee and drives the shield's rim into the gravel. Rotation sends a shock wave rolling outward." }] },
      { rect: [12, 928, 260, 160], art: "p7e", ov: [
        { t: "cap dan", pos: "tr", style: "max-width:62%;font-size:1.5cqw;top:6%", who: "DAN", text: "Every machine has a drive. This one's mine." }] },
      { rect: [284, 928, 504, 160], art: "p7f", ov: [
        { t: "sfx big", pos: "tr", style: "font-size:6cqw;top:4%;right:5%", text: "KRA-THOOM" },
        { t: "cap", pos: "bl", style: "max-width:44%;font-size:1.5cqw", text: "Krait, dazed in the dirt, slams his hand down on a detonator." }] }] },
    { label: "Page 8", panels: [
      { rect: [12, 12, 776, 360], art: "p8a", ov: [
        { t: "cap", pos: "tl", style: "max-width:40%", text: "The train jumps the track. Crates spill down the embankment." }] },
      { rect: [12, 384, 380, 320], art: "p8b", ov: [
        { t: "cap", pos: "tl", style: "max-width:60%", text: "Morning. Dan stands among the wreckage. Machines lie broken, scattered across the hillside." }] },
      { rect: [404, 384, 384, 320], art: "p8c", ov: [
        { t: "bubble", pos: "tl", style: "left:3%;top:3%;max-width:64%;--tx:40%;font-size:1.6cqw", who: "HOLLIS", text: "That's it. The insurance alone will take months. The program's first plant, and it's dead on a hillside." }] },
      { rect: [12, 716, 776, 372], art: "p8d", ov: [
        { t: "bubble", pos: "tr", style: "right:3%;top:5%;max-width:46%;--tx:35%", who: "DAN", text: "No. They're hurt, not dead. I can hear every one of them." }] }] },
    { label: "Page 9", panels: [
      { rect: [12, 12, 776, 300], art: "p9a", ov: [
        { t: "cap wide", pos: "bl", style: "max-width:62%", text: "Montage. Ashford workers drive down with flatbeds and cranes to haul the machines home." }] },
      { rect: [12, 324, 380, 380], art: "p9b", ov: [
        { t: "cap dan", pos: "tl", style: "max-width:66%", who: "DAN", text: "Some parts we machined ourselves. Some came from shops in Michigan, Indiana, and Pennsylvania that were still hanging on." }] },
      { rect: [404, 324, 384, 380], art: "p9c", ov: [
        { t: "bubble", pos: "tl", style: "left:3%;top:3%;max-width:56%;--tx:45%", who: "WALT", text: "Your granddads did this. Now it's your turn." }] },
      { rect: [12, 716, 776, 372], art: "p9d", ov: [
        { t: "cap", pos: "tl", style: "max-width:40%", text: "A calendar on the wall: DAY 87. The line is complete and gleaming." }] }] }
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
        var n = el("div", o.t + " " + o.pos);
        if (o.who) n.appendChild(el("span", "who", o.who));
        n.appendChild(document.createTextNode(o.text));
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
    if (PAGES[cur].note) stage.appendChild(el("p", "note", PAGES[cur].note));
    stage.appendChild(build(PAGES[cur]));
    indicator.textContent = PAGES[cur].label + "  (" + (cur + 1) + "/" + PAGES.length + ")" + (cur === PAGES.length - 1 ? " - Pages 4-6 coming" : "");
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
  var waveBtn = document.getElementById("labwave");

  function openLab() {
    lab.hidden = false;
    if (!L) initLab();
    L.running = true; L.last = 0;
    requestAnimationFrame(tick);
  }
  function closeLab() { lab.hidden = true; if (L) { L.running = false; setAuto(false); if (L.wave) endWave(); } }

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
    if (on && L && L.wave) return;
    if (on && L) L.timer = setInterval(function () { fire(Math.random() * Math.PI * 2); }, 900);
  }

  function initLab() {
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "-250 -250 500 500");
    svg.innerHTML = '<g id="labground" opacity="0"></g><g id="labshield"></g><g id="labfx"></g><g id="wavefx"></g><line id="aim" x1="0" y1="0" x2="0" y2="0" stroke="#9fe0ff" stroke-width="2" stroke-dasharray="6 6" opacity="0"/>';
    labStage.appendChild(svg);
    var holder = svg.querySelector("#labshield");
    var ground = svg.querySelector("#labground");
    ground.innerHTML = '<rect x="-250" y="224" width="500" height="30" fill="#3a424b"/><path d="M-250 224H250" stroke="#8a97a3" stroke-width="2"/>';
    holder.innerHTML = G.shield("dormant");
    var g = holder.firstChild;
    L = { svg: svg, g: g, fx: svg.querySelector("#labfx"), aim: svg.querySelector("#aim"), active: false, carrier: 0, sunA: 0, pspin: 0,
      holder: holder, ground: ground, wfx: svg.querySelector("#wavefx"), wave: null, boost: 1, planets: [], pa: [], over: [], proj: [], sparks: [], blocked: 0, running: false, last: 0, timer: null, hover: null };
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
      if (L.wave) return;
      var a = angleOf(e); L.hover = a;
      aimAt(a, Infinity);
      L.aim.setAttribute("x2", Math.cos(a) * 240); L.aim.setAttribute("y2", Math.sin(a) * 240); L.aim.setAttribute("opacity", ".7");
    });
    svg.addEventListener("pointerleave", function () { L.hover = null; L.aim.setAttribute("opacity", "0"); releaseAll(); });
    svg.addEventListener("click", function (e) { if (!L.wave) fire(angleOf(e)); });
    L.waveBtn = waveBtn;
    waveBtn.addEventListener("click", toggleWave);
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
    if (L.active && !reduced) { L.carrier += dt * 40 * L.boost; L.pspin -= dt * 110 * L.boost; L.sunA -= dt * 70 * L.boost; }
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
    if (L.wave && !reduced) stepWave(dt);
    requestAnimationFrame(tick);
  }


  /* ---------------- Torque Wave demo ----------------
     The shield is planted rim-first in gravel and spins up. A ring of gravel and dust erupts UPWARD
     around it, rolls outward as a wave and rains back down. A clear, calm circle stays around the shield.
     Nothing is fired at anyone. With reduced motion the final crown is shown as one static frame. */
  var GY = 224, GRAV = 520;
  function mk(tag, attrs) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }
  function toggleWave() { if (!L) return; if (L.wave) endWave(); else startWave(); }

  function startWave() {
    var i, th, rnd = Math.random, tones = ["#5b6670", "#7a8590", "#3a424b", "#a9b4be"];
    L.prevActive = L.active; setActive(true); setAuto(false); releaseAll();
    L.aim.setAttribute("opacity", "0");
    L.holder.setAttribute("transform", "translate(0 70) scale(.8)");
    L.ground.setAttribute("opacity", "1");
    var calm = mk("ellipse", { cx: 0, cy: GY + 4, rx: 10, ry: 2, fill: "#59606a", "fill-opacity": ".6", stroke: "#dfe8f2", "stroke-width": 2, "stroke-dasharray": "8 6" });
    L.wfx.appendChild(calm);
    var parts = [], dust = [];
    for (i = 0; i < 90; i++) {
      th = i / 90 * Math.PI * 2 + rnd() * 0.05;
      var n = mk("circle", { r: (2 + rnd() * 4).toFixed(1), fill: tones[Math.floor(rnd() * tones.length)], stroke: "#ffb26b", "stroke-opacity": ".5", "stroke-width": .6 });
      L.wfx.appendChild(n);
      parts.push({ n: n, x: Math.cos(th) * 40, y: Math.sin(th) * 8, z: 0, vx: Math.cos(th) * (90 + rnd() * 120), vy: Math.sin(th) * (20 + rnd() * 30), vz: 240 + rnd() * 230, landed: false });
    }
    for (i = 0; i < 20; i++) {
      th = i / 20 * Math.PI * 2;
      var d = mk("circle", { r: 12, fill: "#b8c4cf", opacity: 0 });
      L.wfx.insertBefore(d, calm.nextSibling);
      dust.push({ n: d, x: Math.cos(th) * 40, y: Math.sin(th) * 8, vx: Math.cos(th) * 80, vy: Math.sin(th) * 14, r: 12 });
    }
    L.wave = { t: 0, parts: parts, dust: dust, calm: calm };
    if (reduced) {
      /* static frame: crown frozen mid-eruption, calm circle fully open */
      var t = 0.5, w = L.wave;
      w.parts.forEach(function (p) { p.x += p.vx * t; p.y += p.vy * t; p.z = p.vz * t - 0.5 * GRAV * t * t; place(p); });
      w.dust.forEach(function (d) { d.x += d.vx * 1.2; d.y += d.vy * 1.2; d.r = 34; d.n.setAttribute("cx", d.x.toFixed(1)); d.n.setAttribute("cy", (GY + d.y - 30).toFixed(1)); d.n.setAttribute("r", 34); d.n.setAttribute("opacity", ".25"); });
      calm.setAttribute("rx", 150); calm.setAttribute("ry", 22);
      L.waveBtn.textContent = "Torque Wave: reset";
    } else L.waveBtn.textContent = "Torque Wave: stop";
  }

  function place(p) { p.n.setAttribute("cx", p.x.toFixed(1)); p.n.setAttribute("cy", (GY + p.y - Math.max(0, p.z)).toFixed(1)); }

  function stepWave(dt) {
    var w = L.wave, i;
    w.t += dt;
    L.boost = w.t < 1.2 ? 1 + w.t * 5 : Math.max(1, 7 - (w.t - 1.2) * 4);
    for (i = 0; i < w.parts.length; i++) {
      var p = w.parts[i];
      if (!p.landed) {
        p.x += p.vx * dt; p.y += p.vy * dt; p.vz -= GRAV * dt; p.z += p.vz * dt;
        if (p.z <= 0 && p.vz < 0) { p.z = 0; p.landed = true; p.vx *= 0.4; p.vy *= 0.4; }
      } else { p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= 0.95; p.vy *= 0.95; }
      place(p);
      p.n.setAttribute("opacity", w.t > 2.6 ? Math.max(0, 1 - (w.t - 2.6) * 1.2).toFixed(2) : 1);
    }
    for (i = 0; i < w.dust.length; i++) {
      var d = w.dust[i];
      d.x += d.vx * dt; d.y += d.vy * dt; d.r += 40 * dt;
      d.n.setAttribute("cx", d.x.toFixed(1)); d.n.setAttribute("cy", (GY + d.y - d.r * 0.6).toFixed(1)); d.n.setAttribute("r", d.r.toFixed(1));
      d.n.setAttribute("opacity", Math.max(0, 0.35 - w.t * 0.1).toFixed(2));
    }
    var open = Math.min(1, w.t / 0.9);
    w.calm.setAttribute("rx", (10 + 140 * open).toFixed(1)); w.calm.setAttribute("ry", (2 + 20 * open).toFixed(1));
    if (w.t > 3.6) endWave();
  }

  function endWave() {
    if (!L || !L.wave) return;
    while (L.wfx.firstChild) L.wfx.removeChild(L.wfx.firstChild);
    L.wave = null; L.boost = 1;
    L.holder.removeAttribute("transform");
    L.ground.setAttribute("opacity", "0");
    setActive(!!L.prevActive);
    L.waveBtn.textContent = "Torque Wave";
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
