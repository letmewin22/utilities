var y = Object.defineProperty;
var A = (t, e, n) => e in t ? y(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var o = (t, e, n) => A(t, typeof e != "symbol" ? e + "" : e, n);
function u(t) {
  return t !== null && typeof t == "object" && "constructor" in t && t.constructor === Object;
}
function m(t = {}, e = {}) {
  Object.keys(e).forEach((n) => {
    typeof t[n] > "u" ? t[n] = e[n] : u(e[n]) && u(t[n]) && Object.keys(e[n]).length > 0 && m(t[n], e[n]);
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
function p() {
  const t = typeof document < "u" ? document : {};
  return m(t, l), t;
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
  return m(t, v), t;
}
const a = d();
class w {
  constructor() {
    o(this, "cbArray");
    o(this, "raf");
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
    const n = performance.now(), r = n - this.lastTime;
    this.lastTime = n, this.cbArray.forEach((s) => s(e, r)), a && (this.raf = a.requestAnimationFrame(this.animation));
  }
  destroy() {
    a && a.cancelAnimationFrame(this.raf), this.cbArray = [];
  }
}
const h = new w(), z = {
  on: (t) => h.on(t),
  off: (t) => h.off(t),
  destroy: () => h.destroy()
}, i = d();
class E {
  constructor() {
    o(this, "cbArray");
    this.cbArray = [], this.init();
  }
  bounds() {
    ["resizeHandler"].forEach((n) => {
      this[n] = this[n].bind(this);
    });
  }
  init() {
    this.bounds(), typeof i < "u" && i.addEventListener("resize", this.resizeHandler);
  }
  resizeHandler() {
    this.cbArray.forEach((e) => e());
  }
  on(e) {
    e(), this.cbArray.push(e);
  }
  off(e) {
    this.cbArray = this.cbArray.filter((n) => n !== e);
  }
  match(e, n) {
    let r;
    e.startsWith("<") ? r = `(max-width: ${e.slice(1)})` : e.startsWith(">") ? r = `(min-width: ${e.slice(1)})` : r = `(min-width: ${e})`;
    const s = i.matchMedia(r);
    s.matches && n(), s.onchange = () => {
      s.matches && n();
    };
  }
  destroy() {
    typeof i < "u" && i.removeEventListener("resize", this.resizeHandler);
  }
}
const c = new E(), x = {
  on: (t) => c.on(t),
  off: (t) => c.off(t),
  match: (t, e) => c.match(t, e),
  destroy: () => c.destroy()
}, $ = (t, e, n) => t * (1 - n) + e * n, F = (t, e, n) => Math.max(Math.min(t, Math.max(e, n)), Math.min(e, n)), b = p(), L = (t, e) => {
  const n = b.createElement(t);
  return n.classList.add(e), n;
}, M = (t = {}) => {
  const e = {
    scale: t.scale ?? { x: 1, y: 1 },
    move: t.move ?? { x: 0, y: 0, z: 0 }
  }, n = Object.keys(e).map((r) => typeof e[r] == "string" || typeof e[r] == "number" ? { x: e[r], y: e[r], z: e[r] } : e[r]);
  return `matrix3d(
    ${n[0].x ?? 1},0,0,0,
    0,${n[0].y ?? 1},0,0,
    0,0,1,0,
    ${n[1].x ?? 0},${n[1].y ?? 0},${n[1].z ?? 0},1
    )`;
}, T = (t = 0) => new Promise((e) => {
  setTimeout(() => {
    e();
  }, t);
}), N = (t) => {
  let e = "";
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = n.length;
  for (let s = 0; s < t; s++)
    e += n.charAt(Math.floor(Math.random() * r));
  return e;
};
export {
  F as clamp,
  L as createNewElement,
  T as delayPromise,
  N as keysGenerator,
  $ as lerp,
  M as matrixTransform,
  z as raf,
  x as resize
};
