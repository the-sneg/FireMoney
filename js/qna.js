parcelRequire = (function (e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && 'string' == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    YGIr: [
      function (require, module, exports) {
        (() => {
          const e = {
            openDetalBtn: document.querySelector('[data-detalis-open]'),
            detalis: document.querySelector('[data-detalis]'),
            wrap: document.querySelector('[data-detalis-wrap]'),
          };
          function t() {
            e.detalis.classList.toggle('is_open');
            e.openDetalBtn.classList.toggle('qna_btn_is_open');
            e.wrap.classList.toggle('is_open');
          }
          e.openDetalBtn.addEventListener('click', t), e.detalis.addEventListener('click', t);
          const a = {
            openDetalBtn2: document.querySelector('[data-detalis-open2]'),
            detalis2: document.querySelector('[data-detalis2]'),
            wrap: document.querySelector('[data-detalis-wrap2]'),
          };
          function n() {
            a.detalis2.classList.toggle('is_open');
            a.openDetalBtn2.classList.toggle('qna_btn_is_open');
            a.wrap.classList.toggle('is_open');
          }
          a.openDetalBtn2.addEventListener('click', n), a.detalis2.addEventListener('click', n);
          const l = {
            openDetalBtn3: document.querySelector('[data-detalis-open3]'),
            detalis3: document.querySelector('[data-detalis3]'),
            wrap: document.querySelector('[data-detalis-wrap3]'),
          };
          function s() {
            l.detalis3.classList.toggle('is_open');
            l.openDetalBtn3.classList.toggle('qna_btn_is_open');
            l.wrap.classList.toggle('is_open');
          }
          l.openDetalBtn3.addEventListener('click', s), l.detalis3.addEventListener('click', s);
          const z = {
            openDetalBtn4: document.querySelector('[data-detalis-open4]'),
            detalis4: document.querySelector('[data-detalis4]'),
            wrap: document.querySelector('[data-detalis-wrap4]'),
          };
          function zz() {
            z.detalis4.classList.toggle('is_open');
            z.openDetalBtn4.classList.toggle('qna_btn_is_open');
            z.wrap.classList.toggle('is_open');
          }
          z.openDetalBtn4.addEventListener('click', zz), l.detalis3.addEventListener('click', zz);
          const x = {
            openDetalBtn5: document.querySelector('[data-detalis-open5]'),
            detalis5: document.querySelector('[data-detalis5]'),
            wrap: document.querySelector('[data-detalis-wrap5]'),
          };
          function xx() {
            x.detalis5.classList.toggle('is_open');
            x.openDetalBtn5.classList.toggle('qna_btn_is_open');
            x.wrap.classList.toggle('is_open');
          }
          x.openDetalBtn5.addEventListener('click', xx), l.detalis3.addEventListener('click', xx);
          const c = {
            openDetalBtn6: document.querySelector('[data-detalis-open6]'),
            detalis6: document.querySelector('[data-detalis6]'),
            wrap: document.querySelector('[data-detalis-wrap6]'),
          };
          function cc() {
            c.detalis6.classList.toggle('is_open');
            c.openDetalBtn6.classList.toggle('qna_btn_is_open');
            c.wrap.classList.toggle('is_open');
          }
          c.openDetalBtn6.addEventListener('click', cc), l.detalis3.addEventListener('click', cc);
        })();
      },
      {},
    ],
  },
  {},
  ['YGIr'],
  null
);
//# sourceMappingURL=/html-css-project-10/detalis.db8c7ccb.js.map
