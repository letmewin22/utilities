var y = Object.defineProperty;
var p = (t, e, n) => e in t ? y(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var o = (t, e, n) => p(t, typeof e != "symbol" ? e + "" : e, n);
function m(t) {
  return t !== null && typeof t == "object" && "constructor" in t && t.constructor === Object;
}
function h(t = {}, e = {}) {
  Object.keys(e).forEach((n) => {
    typeof t[n] > "u" ? t[n] = e[n] : m(e[n]) && m(t[n]) && Object.keys(e[n]).length > 0 && h(t[n], e[n]);
  });
}
const l = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function A() {
  const t = typeof document < "u" ? document : {};
  return h(t, l), t;
}
const v = {
  document: l,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(t) {
    return t;
  },
  cancelAnimationFrame(t) {
    return t;
  }
};
function d() {
  const t = typeof window < "u" ? window : {};
  return h(t, v), t;
}
const a = d();
class w {
  constructor() {
    o(this, "cbArray");
    o(this, "raf", 0);
    o(this, "lastTime", performance.now());
    this.cbArray = [], this.animation = this.animation.bind(this), this.animation(0);
  }
  on(e) {
    this.cbArray.push(e);
  }
  off(e) {
    this.cbArray = this.cbArray.filter((n) => n !== e);
  }
  animation(e) {
    const n = performance.now(), s = n - this.lastTime;
    this.lastTime = n, this.cbArray.forEach((r) => r == null ? void 0 : r(e, s)), a && (this.raf = a.requestAnimationFrame(this.animation));
  }
  destroy() {
    a && a.cancelAnimationFrame(this.raf), this.cbArray = [];
  }
}
const u = new w(), b = {
  on: (t) => u.on(t),
  off: (t) => u.off(t),
  destroy: () => u.destroy()
}, i = d();
class E {
  constructor() {
    o(this, "cbArray");
    this.cbArray = [], this.init();
  }
  bounds() {
    this.resizeHandler = this.resizeHandler.bind(this);
  }
  init() {
    this.bounds(), typeof i < "u" && i.addEventListener("resize", this.resizeHandler);
  }
  resizeHandler() {
    this.cbArray.forEach((e) => e == null ? void 0 : e());
  }
  on(e) {
    e(), this.cbArray.push(e);
  }
  off(e) {
    this.cbArray = this.cbArray.filter((n) => n !== e);
  }
  match(e, n) {
    let s;
    e.startsWith("<") ? s = `(max-width: ${e.slice(1)})` : e.startsWith(">") ? s = `(min-width: ${e.slice(1)})` : s = `(min-width: ${e})`;
    const r = i.matchMedia(s);
    r.matches && n(), r.onchange = () => {
      r.matches && n();
    };
  }
  destroy() {
    typeof i < "u" && i.removeEventListener("resize", this.resizeHandler);
  }
}
const c = new E(), $ = {
  on: (t) => c.on(t),
  off: (t) => c.off(t),
  match: (t, e) => c.match(t, e),
  destroy: () => c.destroy()
}, g = (t, e, n) => t * (1 - n) + e * n, M = (t, e, n) => Math.max(Math.min(t, Math.max(e, n)), Math.min(e, n));
function F(t, e, n, s) {
  return g(t, e, 1 - Math.exp(-n * s));
}
function L(t, e) {
  return (t % e + e) % e;
}
const z = A(), T = (t, e) => {
  const n = z.createElement(t);
  return n.classList.add(e), n;
}, N = (t = {}) => {
  const e = {
    scale: t.scale ?? { x: 1, y: 1 },
    move: t.move ?? { x: 0, y: 0, z: 0 }
  }, n = Object.keys(e).map((s) => {
    const r = e[s];
    return typeof r == "string" || typeof r == "number" ? { x: r, y: r, z: r } : r;
  });
  return `matrix3d(
    ${n[0].x ?? 1},0,0,0,
    0,${n[0].y ?? 1},0,0,
    0,0,1,0,
    ${n[1].x ?? 0},${n[1].y ?? 0},${n[1].z ?? 0},1
    )`;
}, S = (t = 0) => new Promise((e) => {
  setTimeout(() => {
    e();
  }, t);
}), q = (t) => {
  let e = "";
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", s = n.length;
  for (let r = 0; r < t; r++)
    e += n.charAt(Math.floor(Math.random() * s));
  return e;
};
export {
  M as clamp,
  T as createNewElement,
  F as damp,
  S as delayPromise,
  q as keysGenerator,
  g as lerp,
  N as matrixTransform,
  L as modulo,
  b as raf,
  $ as resize
};
