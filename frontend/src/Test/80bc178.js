(window.webpackJsonp = window.webpackJsonp || []).push([
    [24],
    {
        1291: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(10),
                o =
                    (n(60),
                    n(30),
                    n(47),
                    n(110),
                    n(32),
                    n(83),
                    n(343),
                    n(15),
                    n(34),
                    n(211),
                    n(46),
                    n(313)),
                l = {
                    Scene: o.S,
                    Camera: o.h,
                    Raycaster: o.O,
                    WebGLRenderer: o.fb,
                    WebGLRenderTarget: o.eb,
                    Vector2: o.cb,
                    Vector3: o.db,
                    Euler: o.p,
                    Group: o.v,
                    PerspectiveCamera: o.J,
                    Mesh: o.C,
                    PointLight: o.L,
                    DirectionalLight: o.n,
                    AmbientLight: o.b,
                    RectAreaLight: o.P,
                    MeshPhysicalMaterial: o.F,
                    CylinderGeometry: o.m,
                    SphereGeometry: o.X,
                    RingGeometry: o.R,
                    ConeGeometry: o.k,
                    TextureLoader: o.ab,
                    ExtrudeGeometry: o.r,
                    MeshBasicMaterial: o.D,
                    CubeTextureLoader: o.l,
                    sRGBEncoding: o.gb,
                    Shape: o.U,
                    Path: o.I,
                    FrontSide: o.u,
                    BackSide: o.c,
                    DoubleSide: o.o,
                    Box3: o.e,
                    HemisphereLight: o.w,
                    PlaneGeometry: o.K,
                    RepeatWrapping: o.Q,
                    BoxGeometry: o.f,
                },
                d = (n(326), n(140)),
                c = n(139),
                h = n(358),
                v = n(327),
                f = n(328),
                m = n(319);
            n(41), n(341), n(204);
            function w(e) {
                var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return (
                            Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {})
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = Object(m.a)(e);
                    if (t) {
                        var o = Object(m.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return Object(f.a)(this, n);
                };
            }
            var x = {
                    type: "change",
                },
                C = {
                    type: "start",
                },
                y = {
                    type: "end",
                },
                L = (function (e) {
                    Object(v.a)(n, e);
                    var t = w(n);
                    function n(object, e) {
                        var r, l, d, v, f, m, w;
                        Object(c.a)(this, n),
                            (r = t.call(this)),
                            void 0 === e &&
                                console.warn(
                                    'THREE.OrbitControls: The second parameter "domElement" is now mandatory.'
                                ),
                            e === document &&
                                console.error(
                                    'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
                                ),
                            (r.object = object),
                            (r.domElement = e),
                            (r.domElement.style.touchAction = "none"),
                            (r.enabled = !0),
                            (r.target = new o.db()),
                            (r.minDistance = 0),
                            (r.maxDistance = 1 / 0),
                            (r.minZoom = 0),
                            (r.maxZoom = 1 / 0),
                            (r.minPolarAngle = 0),
                            (r.maxPolarAngle = Math.PI),
                            (r.minAzimuthAngle = -1 / 0),
                            (r.maxAzimuthAngle = 1 / 0),
                            (r.enableDamping = !1),
                            (r.dampingFactor = 0.05),
                            (r.enableZoom = !0),
                            (r.zoomSpeed = 1),
                            (r.enableRotate = !0),
                            (r.rotateSpeed = 1),
                            (r.enablePan = !0),
                            (r.panSpeed = 1),
                            (r.screenSpacePanning = !0),
                            (r.keyPanSpeed = 7),
                            (r.autoRotate = !1),
                            (r.autoRotateSpeed = 2),
                            (r.keys = {
                                LEFT: "ArrowLeft",
                                UP: "ArrowUp",
                                RIGHT: "ArrowRight",
                                BOTTOM: "ArrowDown",
                            }),
                            (r.mouseButtons = {
                                LEFT: o.z.ROTATE,
                                MIDDLE: o.z.DOLLY,
                                RIGHT: o.z.PAN,
                            }),
                            (r.touches = {
                                ONE: o.Z.ROTATE,
                                TWO: o.Z.DOLLY_PAN,
                            }),
                            (r.target0 = r.target.clone()),
                            (r.position0 = r.object.position.clone()),
                            (r.zoom0 = r.object.zoom),
                            (r._domElementKeyEvents = null),
                            (r.getPolarAngle = function () {
                                return S.phi;
                            }),
                            (r.getAzimuthalAngle = function () {
                                return S.theta;
                            }),
                            (r.getDistance = function () {
                                return this.object.position.distanceTo(
                                    this.target
                                );
                            }),
                            (r.listenToKeyEvents = function (e) {
                                e.addEventListener("keydown", he),
                                    (this._domElementKeyEvents = e);
                            }),
                            (r.saveState = function () {
                                L.target0.copy(L.target),
                                    L.position0.copy(L.object.position),
                                    (L.zoom0 = L.object.zoom);
                            }),
                            (r.reset = function () {
                                L.target.copy(L.target0),
                                    L.object.position.copy(L.position0),
                                    (L.object.zoom = L.zoom0),
                                    L.object.updateProjectionMatrix(),
                                    L.dispatchEvent(x),
                                    L.update(),
                                    (k = M.NONE);
                            }),
                            (r.update =
                                ((l = new o.db()),
                                (d = new o.M().setFromUnitVectors(
                                    object.up,
                                    new o.db(0, 1, 0)
                                )),
                                (v = d.clone().invert()),
                                (f = new o.db()),
                                (m = new o.M()),
                                (w = 2 * Math.PI),
                                function () {
                                    var e = L.object.position;
                                    l.copy(e).sub(L.target),
                                        l.applyQuaternion(d),
                                        S.setFromVector3(l),
                                        L.autoRotate &&
                                            k === M.NONE &&
                                            Z(
                                                ((2 * Math.PI) / 60 / 60) *
                                                    L.autoRotateSpeed
                                            ),
                                        L.enableDamping
                                            ? ((S.theta +=
                                                  P.theta * L.dampingFactor),
                                              (S.phi +=
                                                  P.phi * L.dampingFactor))
                                            : ((S.theta += P.theta),
                                              (S.phi += P.phi));
                                    var t = L.minAzimuthAngle,
                                        n = L.maxAzimuthAngle;
                                    return (
                                        isFinite(t) &&
                                            isFinite(n) &&
                                            (t < -Math.PI
                                                ? (t += w)
                                                : t > Math.PI && (t -= w),
                                            n < -Math.PI
                                                ? (n += w)
                                                : n > Math.PI && (n -= w),
                                            (S.theta =
                                                t <= n
                                                    ? Math.max(
                                                          t,
                                                          Math.min(n, S.theta)
                                                      )
                                                    : S.theta > (t + n) / 2
                                                    ? Math.max(t, S.theta)
                                                    : Math.min(n, S.theta))),
                                        (S.phi = Math.max(
                                            L.minPolarAngle,
                                            Math.min(L.maxPolarAngle, S.phi)
                                        )),
                                        S.makeSafe(),
                                        (S.radius *= E),
                                        (S.radius = Math.max(
                                            L.minDistance,
                                            Math.min(L.maxDistance, S.radius)
                                        )),
                                        !0 === L.enableDamping
                                            ? L.target.addScaledVector(
                                                  D,
                                                  L.dampingFactor
                                              )
                                            : L.target.add(D),
                                        l.setFromSpherical(S),
                                        l.applyQuaternion(v),
                                        e.copy(L.target).add(l),
                                        L.object.lookAt(L.target),
                                        !0 === L.enableDamping
                                            ? ((P.theta *= 1 - L.dampingFactor),
                                              (P.phi *= 1 - L.dampingFactor),
                                              D.multiplyScalar(
                                                  1 - L.dampingFactor
                                              ))
                                            : (P.set(0, 0, 0), D.set(0, 0, 0)),
                                        (E = 1),
                                        !!(
                                            I ||
                                            f.distanceToSquared(
                                                L.object.position
                                            ) > T ||
                                            8 *
                                                (1 -
                                                    m.dot(
                                                        L.object.quaternion
                                                    )) >
                                                T
                                        ) &&
                                            (L.dispatchEvent(x),
                                            f.copy(L.object.position),
                                            m.copy(L.object.quaternion),
                                            (I = !1),
                                            !0)
                                    );
                                })),
                            (r.dispose = function () {
                                L.domElement.removeEventListener(
                                    "contextmenu",
                                    pe
                                ),
                                    L.domElement.removeEventListener(
                                        "pointerdown",
                                        se
                                    ),
                                    L.domElement.removeEventListener(
                                        "pointercancel",
                                        ce
                                    ),
                                    L.domElement.removeEventListener(
                                        "wheel",
                                        ue
                                    ),
                                    L.domElement.removeEventListener(
                                        "pointermove",
                                        le
                                    ),
                                    L.domElement.removeEventListener(
                                        "pointerup",
                                        de
                                    ),
                                    null !== L._domElementKeyEvents &&
                                        L._domElementKeyEvents.removeEventListener(
                                            "keydown",
                                            he
                                        );
                            });
                        var L = Object(h.a)(r),
                            M = {
                                NONE: -1,
                                ROTATE: 0,
                                DOLLY: 1,
                                PAN: 2,
                                TOUCH_ROTATE: 3,
                                TOUCH_PAN: 4,
                                TOUCH_DOLLY_PAN: 5,
                                TOUCH_DOLLY_ROTATE: 6,
                            },
                            k = M.NONE,
                            T = 1e-6,
                            S = new o.Y(),
                            P = new o.Y(),
                            E = 1,
                            D = new o.db(),
                            I = !1,
                            O = new o.cb(),
                            _ = new o.cb(),
                            G = new o.cb(),
                            R = new o.cb(),
                            B = new o.cb(),
                            A = new o.cb(),
                            z = new o.cb(),
                            j = new o.cb(),
                            U = new o.cb(),
                            N = [],
                            W = {};
                        function V() {
                            return Math.pow(0.95, L.zoomSpeed);
                        }
                        function Z(e) {
                            P.theta -= e;
                        }
                        function F(e) {
                            P.phi -= e;
                        }
                        var Y,
                            H =
                                ((Y = new o.db()),
                                function (e, t) {
                                    Y.setFromMatrixColumn(t, 0),
                                        Y.multiplyScalar(-e),
                                        D.add(Y);
                                }),
                            X = (function () {
                                var e = new o.db();
                                return function (t, n) {
                                    !0 === L.screenSpacePanning
                                        ? e.setFromMatrixColumn(n, 1)
                                        : (e.setFromMatrixColumn(n, 0),
                                          e.crossVectors(L.object.up, e)),
                                        e.multiplyScalar(t),
                                        D.add(e);
                                };
                            })(),
                            $ = (function () {
                                var e = new o.db();
                                return function (t, n) {
                                    var element = L.domElement;
                                    if (L.object.isPerspectiveCamera) {
                                        var r = L.object.position;
                                        e.copy(r).sub(L.target);
                                        var o = e.length();
                                        (o *= Math.tan(
                                            ((L.object.fov / 2) * Math.PI) / 180
                                        )),
                                            H(
                                                (2 * t * o) /
                                                    element.clientHeight,
                                                L.object.matrix
                                            ),
                                            X(
                                                (2 * n * o) /
                                                    element.clientHeight,
                                                L.object.matrix
                                            );
                                    } else
                                        L.object.isOrthographicCamera
                                            ? (H(
                                                  (t *
                                                      (L.object.right -
                                                          L.object.left)) /
                                                      L.object.zoom /
                                                      element.clientWidth,
                                                  L.object.matrix
                                              ),
                                              X(
                                                  (n *
                                                      (L.object.top -
                                                          L.object.bottom)) /
                                                      L.object.zoom /
                                                      element.clientHeight,
                                                  L.object.matrix
                                              ))
                                            : (console.warn(
                                                  "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                                              ),
                                              (L.enablePan = !1));
                                };
                            })();
                        function Q(e) {
                            L.object.isPerspectiveCamera
                                ? (E /= e)
                                : L.object.isOrthographicCamera
                                ? ((L.object.zoom = Math.max(
                                      L.minZoom,
                                      Math.min(L.maxZoom, L.object.zoom * e)
                                  )),
                                  L.object.updateProjectionMatrix(),
                                  (I = !0))
                                : (console.warn(
                                      "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
                                  ),
                                  (L.enableZoom = !1));
                        }
                        function K(e) {
                            L.object.isPerspectiveCamera
                                ? (E *= e)
                                : L.object.isOrthographicCamera
                                ? ((L.object.zoom = Math.max(
                                      L.minZoom,
                                      Math.min(L.maxZoom, L.object.zoom / e)
                                  )),
                                  L.object.updateProjectionMatrix(),
                                  (I = !0))
                                : (console.warn(
                                      "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
                                  ),
                                  (L.enableZoom = !1));
                        }
                        function J(e) {
                            O.set(e.clientX, e.clientY);
                        }
                        function ee(e) {
                            R.set(e.clientX, e.clientY);
                        }
                        function te() {
                            if (1 === N.length) O.set(N[0].pageX, N[0].pageY);
                            else {
                                var e = 0.5 * (N[0].pageX + N[1].pageX),
                                    t = 0.5 * (N[0].pageY + N[1].pageY);
                                O.set(e, t);
                            }
                        }
                        function ne() {
                            if (1 === N.length) R.set(N[0].pageX, N[0].pageY);
                            else {
                                var e = 0.5 * (N[0].pageX + N[1].pageX),
                                    t = 0.5 * (N[0].pageY + N[1].pageY);
                                R.set(e, t);
                            }
                        }
                        function re() {
                            var e = N[0].pageX - N[1].pageX,
                                t = N[0].pageY - N[1].pageY,
                                n = Math.sqrt(e * e + t * t);
                            z.set(0, n);
                        }
                        function ie(e) {
                            if (1 == N.length) _.set(e.pageX, e.pageY);
                            else {
                                var t = ge(e),
                                    n = 0.5 * (e.pageX + t.x),
                                    r = 0.5 * (e.pageY + t.y);
                                _.set(n, r);
                            }
                            G.subVectors(_, O).multiplyScalar(L.rotateSpeed);
                            var element = L.domElement;
                            Z((2 * Math.PI * G.x) / element.clientHeight),
                                F((2 * Math.PI * G.y) / element.clientHeight),
                                O.copy(_);
                        }
                        function oe(e) {
                            if (1 === N.length) B.set(e.pageX, e.pageY);
                            else {
                                var t = ge(e),
                                    n = 0.5 * (e.pageX + t.x),
                                    r = 0.5 * (e.pageY + t.y);
                                B.set(n, r);
                            }
                            A.subVectors(B, R).multiplyScalar(L.panSpeed),
                                $(A.x, A.y),
                                R.copy(B);
                        }
                        function ae(e) {
                            var t = ge(e),
                                n = e.pageX - t.x,
                                r = e.pageY - t.y,
                                o = Math.sqrt(n * n + r * r);
                            j.set(0, o),
                                U.set(0, Math.pow(j.y / z.y, L.zoomSpeed)),
                                Q(U.y),
                                z.copy(j);
                        }
                        function se(e) {
                            !1 !== L.enabled &&
                                (0 === N.length &&
                                    (L.domElement.setPointerCapture(
                                        e.pointerId
                                    ),
                                    L.domElement.addEventListener(
                                        "pointermove",
                                        le
                                    ),
                                    L.domElement.addEventListener(
                                        "pointerup",
                                        de
                                    )),
                                (function (e) {
                                    N.push(e);
                                })(e),
                                "touch" === e.pointerType
                                    ? (function (e) {
                                          switch ((fe(e), N.length)) {
                                              case 1:
                                                  switch (L.touches.ONE) {
                                                      case o.Z.ROTATE:
                                                          if (
                                                              !1 ===
                                                              L.enableRotate
                                                          )
                                                              return;
                                                          te(),
                                                              (k =
                                                                  M.TOUCH_ROTATE);
                                                          break;
                                                      case o.Z.PAN:
                                                          if (
                                                              !1 === L.enablePan
                                                          )
                                                              return;
                                                          ne(),
                                                              (k = M.TOUCH_PAN);
                                                          break;
                                                      default:
                                                          k = M.NONE;
                                                  }
                                                  break;
                                              case 2:
                                                  switch (L.touches.TWO) {
                                                      case o.Z.DOLLY_PAN:
                                                          if (
                                                              !1 ===
                                                                  L.enableZoom &&
                                                              !1 === L.enablePan
                                                          )
                                                              return;
                                                          L.enableZoom && re(),
                                                              L.enablePan &&
                                                                  ne(),
                                                              (k =
                                                                  M.TOUCH_DOLLY_PAN);
                                                          break;
                                                      case o.Z.DOLLY_ROTATE:
                                                          if (
                                                              !1 ===
                                                                  L.enableZoom &&
                                                              !1 ===
                                                                  L.enableRotate
                                                          )
                                                              return;
                                                          L.enableZoom && re(),
                                                              L.enableRotate &&
                                                                  te(),
                                                              (k =
                                                                  M.TOUCH_DOLLY_ROTATE);
                                                          break;
                                                      default:
                                                          k = M.NONE;
                                                  }
                                                  break;
                                              default:
                                                  k = M.NONE;
                                          }
                                          k !== M.NONE && L.dispatchEvent(C);
                                      })(e)
                                    : (function (e) {
                                          var t;
                                          switch (e.button) {
                                              case 0:
                                                  t = L.mouseButtons.LEFT;
                                                  break;
                                              case 1:
                                                  t = L.mouseButtons.MIDDLE;
                                                  break;
                                              case 2:
                                                  t = L.mouseButtons.RIGHT;
                                                  break;
                                              default:
                                                  t = -1;
                                          }
                                          switch (t) {
                                              case o.z.DOLLY:
                                                  if (!1 === L.enableZoom)
                                                      return;
                                                  !(function (e) {
                                                      z.set(
                                                          e.clientX,
                                                          e.clientY
                                                      );
                                                  })(e),
                                                      (k = M.DOLLY);
                                                  break;
                                              case o.z.ROTATE:
                                                  if (
                                                      e.ctrlKey ||
                                                      e.metaKey ||
                                                      e.shiftKey
                                                  ) {
                                                      if (!1 === L.enablePan)
                                                          return;
                                                      ee(e), (k = M.PAN);
                                                  } else {
                                                      if (!1 === L.enableRotate)
                                                          return;
                                                      J(e), (k = M.ROTATE);
                                                  }
                                                  break;
                                              case o.z.PAN:
                                                  if (
                                                      e.ctrlKey ||
                                                      e.metaKey ||
                                                      e.shiftKey
                                                  ) {
                                                      if (!1 === L.enableRotate)
                                                          return;
                                                      J(e), (k = M.ROTATE);
                                                  } else {
                                                      if (!1 === L.enablePan)
                                                          return;
                                                      ee(e), (k = M.PAN);
                                                  }
                                                  break;
                                              default:
                                                  k = M.NONE;
                                          }
                                          k !== M.NONE && L.dispatchEvent(C);
                                      })(e));
                        }
                        function le(e) {
                            !1 !== L.enabled &&
                                ("touch" === e.pointerType
                                    ? (function (e) {
                                          switch ((fe(e), k)) {
                                              case M.TOUCH_ROTATE:
                                                  if (!1 === L.enableRotate)
                                                      return;
                                                  ie(e), L.update();
                                                  break;
                                              case M.TOUCH_PAN:
                                                  if (!1 === L.enablePan)
                                                      return;
                                                  oe(e), L.update();
                                                  break;
                                              case M.TOUCH_DOLLY_PAN:
                                                  if (
                                                      !1 === L.enableZoom &&
                                                      !1 === L.enablePan
                                                  )
                                                      return;
                                                  !(function (e) {
                                                      L.enableZoom && ae(e),
                                                          L.enablePan && oe(e);
                                                  })(e),
                                                      L.update();
                                                  break;
                                              case M.TOUCH_DOLLY_ROTATE:
                                                  if (
                                                      !1 === L.enableZoom &&
                                                      !1 === L.enableRotate
                                                  )
                                                      return;
                                                  !(function (e) {
                                                      L.enableZoom && ae(e),
                                                          L.enableRotate &&
                                                              ie(e);
                                                  })(e),
                                                      L.update();
                                                  break;
                                              default:
                                                  k = M.NONE;
                                          }
                                      })(e)
                                    : (function (e) {
                                          switch (k) {
                                              case M.ROTATE:
                                                  if (!1 === L.enableRotate)
                                                      return;
                                                  !(function (e) {
                                                      _.set(
                                                          e.clientX,
                                                          e.clientY
                                                      ),
                                                          G.subVectors(
                                                              _,
                                                              O
                                                          ).multiplyScalar(
                                                              L.rotateSpeed
                                                          );
                                                      var element =
                                                          L.domElement;
                                                      Z(
                                                          (2 * Math.PI * G.x) /
                                                              element.clientHeight
                                                      ),
                                                          F(
                                                              (2 *
                                                                  Math.PI *
                                                                  G.y) /
                                                                  element.clientHeight
                                                          ),
                                                          O.copy(_),
                                                          L.update();
                                                  })(e);
                                                  break;
                                              case M.DOLLY:
                                                  if (!1 === L.enableZoom)
                                                      return;
                                                  !(function (e) {
                                                      j.set(
                                                          e.clientX,
                                                          e.clientY
                                                      ),
                                                          U.subVectors(j, z),
                                                          U.y > 0
                                                              ? Q(V())
                                                              : U.y < 0 &&
                                                                K(V()),
                                                          z.copy(j),
                                                          L.update();
                                                  })(e);
                                                  break;
                                              case M.PAN:
                                                  if (!1 === L.enablePan)
                                                      return;
                                                  !(function (e) {
                                                      B.set(
                                                          e.clientX,
                                                          e.clientY
                                                      ),
                                                          A.subVectors(
                                                              B,
                                                              R
                                                          ).multiplyScalar(
                                                              L.panSpeed
                                                          ),
                                                          $(A.x, A.y),
                                                          R.copy(B),
                                                          L.update();
                                                  })(e);
                                          }
                                      })(e));
                        }
                        function de(e) {
                            ve(e),
                                0 === N.length &&
                                    (L.domElement.releasePointerCapture(
                                        e.pointerId
                                    ),
                                    L.domElement.removeEventListener(
                                        "pointermove",
                                        le
                                    ),
                                    L.domElement.removeEventListener(
                                        "pointerup",
                                        de
                                    )),
                                L.dispatchEvent(y),
                                (k = M.NONE);
                        }
                        function ce(e) {
                            ve(e);
                        }
                        function ue(e) {
                            !1 !== L.enabled &&
                                !1 !== L.enableZoom &&
                                k === M.NONE &&
                                (e.preventDefault(),
                                L.dispatchEvent(C),
                                (function (e) {
                                    e.deltaY < 0
                                        ? K(V())
                                        : e.deltaY > 0 && Q(V()),
                                        L.update();
                                })(e),
                                L.dispatchEvent(y));
                        }
                        function he(e) {
                            !1 !== L.enabled &&
                                !1 !== L.enablePan &&
                                (function (e) {
                                    var t = !1;
                                    switch (e.code) {
                                        case L.keys.UP:
                                            $(0, L.keyPanSpeed), (t = !0);
                                            break;
                                        case L.keys.BOTTOM:
                                            $(0, -L.keyPanSpeed), (t = !0);
                                            break;
                                        case L.keys.LEFT:
                                            $(L.keyPanSpeed, 0), (t = !0);
                                            break;
                                        case L.keys.RIGHT:
                                            $(-L.keyPanSpeed, 0), (t = !0);
                                    }
                                    t && (e.preventDefault(), L.update());
                                })(e);
                        }
                        function pe(e) {
                            !1 !== L.enabled && e.preventDefault();
                        }
                        function ve(e) {
                            delete W[e.pointerId];
                            for (var i = 0; i < N.length; i++)
                                if (N[i].pointerId == e.pointerId)
                                    return void N.splice(i, 1);
                        }
                        function fe(e) {
                            var t = W[e.pointerId];
                            void 0 === t &&
                                ((t = new o.cb()), (W[e.pointerId] = t)),
                                t.set(e.pageX, e.pageY);
                        }
                        function ge(e) {
                            var t =
                                e.pointerId === N[0].pointerId ? N[1] : N[0];
                            return W[t.pointerId];
                        }
                        return (
                            L.domElement.addEventListener("contextmenu", pe),
                            L.domElement.addEventListener("pointerdown", se),
                            L.domElement.addEventListener("pointercancel", ce),
                            L.domElement.addEventListener("wheel", ue, {
                                passive: !1,
                            }),
                            r.update(),
                            r
                        );
                    }
                    return Object(d.a)(n);
                })(o.q),
                M = {
                    uniforms: {
                        tDiffuse: {
                            value: null,
                        },
                        opacity: {
                            value: 1,
                        },
                    },
                    vertexShader:
                        "\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",
                    fragmentShader:
                        "\n\n\t\tuniform float opacity;\n\n\t\tuniform sampler2D tDiffuse;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tgl_FragColor = texture2D( tDiffuse, vUv );\n\t\t\tgl_FragColor.a *= opacity;\n\n\n\t\t}",
                },
                k = (function () {
                    function e() {
                        Object(c.a)(this, e),
                            (this.enabled = !0),
                            (this.needsSwap = !0),
                            (this.clear = !1),
                            (this.renderToScreen = !1);
                    }
                    return (
                        Object(d.a)(e, [
                            {
                                key: "setSize",
                                value: function () {},
                            },
                            {
                                key: "render",
                                value: function () {
                                    console.error(
                                        "THREE.Pass: .render() must be implemented in derived pass."
                                    );
                                },
                            },
                        ]),
                        e
                    );
                })(),
                T = new o.H(-1, 1, 1, -1, 0, 1),
                S = new o.g();
            S.setAttribute(
                "position",
                new o.t([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)
            ),
                S.setAttribute("uv", new o.t([0, 2, 0, 0, 2, 0], 2));
            var P = (function () {
                function e(t) {
                    Object(c.a)(this, e), (this._mesh = new o.C(S, t));
                }
                return (
                    Object(d.a)(e, [
                        {
                            key: "dispose",
                            value: function () {
                                this._mesh.geometry.dispose();
                            },
                        },
                        {
                            key: "render",
                            value: function (e) {
                                e.render(this._mesh, T);
                            },
                        },
                        {
                            key: "material",
                            get: function () {
                                return this._mesh.material;
                            },
                            set: function (e) {
                                this._mesh.material = e;
                            },
                        },
                    ]),
                    e
                );
            })();
            function E(e) {
                var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return (
                            Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {})
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = Object(m.a)(e);
                    if (t) {
                        var o = Object(m.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return Object(f.a)(this, n);
                };
            }
            var D = (function (e) {
                Object(v.a)(n, e);
                var t = E(n);
                function n(e, r) {
                    var l;
                    return (
                        Object(c.a)(this, n),
                        ((l = t.call(this)).textureID =
                            void 0 !== r ? r : "tDiffuse"),
                        e instanceof o.T
                            ? ((l.uniforms = e.uniforms), (l.material = e))
                            : e &&
                              ((l.uniforms = o.bb.clone(e.uniforms)),
                              (l.material = new o.T({
                                  defines: Object.assign({}, e.defines),
                                  uniforms: l.uniforms,
                                  vertexShader: e.vertexShader,
                                  fragmentShader: e.fragmentShader,
                              }))),
                        (l.fsQuad = new P(l.material)),
                        l
                    );
                }
                return (
                    Object(d.a)(n, [
                        {
                            key: "render",
                            value: function (e, t, n) {
                                this.uniforms[this.textureID] &&
                                    (this.uniforms[this.textureID].value =
                                        n.texture),
                                    (this.fsQuad.material = this.material),
                                    this.renderToScreen
                                        ? (e.setRenderTarget(null),
                                          this.fsQuad.render(e))
                                        : (e.setRenderTarget(t),
                                          this.clear &&
                                              e.clear(
                                                  e.autoClearColor,
                                                  e.autoClearDepth,
                                                  e.autoClearStencil
                                              ),
                                          this.fsQuad.render(e));
                            },
                        },
                    ]),
                    n
                );
            })(k);
            function I(e) {
                var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return (
                            Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {})
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = Object(m.a)(e);
                    if (t) {
                        var o = Object(m.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return Object(f.a)(this, n);
                };
            }
            var O = (function (e) {
                    Object(v.a)(n, e);
                    var t = I(n);
                    function n(e, r) {
                        var o;
                        return (
                            Object(c.a)(this, n),
                            ((o = t.call(this)).scene = e),
                            (o.camera = r),
                            (o.clear = !0),
                            (o.needsSwap = !1),
                            (o.inverse = !1),
                            o
                        );
                    }
                    return (
                        Object(d.a)(n, [
                            {
                                key: "render",
                                value: function (e, t, n) {
                                    var r,
                                        o,
                                        l = e.getContext(),
                                        d = e.state;
                                    d.buffers.color.setMask(!1),
                                        d.buffers.depth.setMask(!1),
                                        d.buffers.color.setLocked(!0),
                                        d.buffers.depth.setLocked(!0),
                                        this.inverse
                                            ? ((r = 0), (o = 1))
                                            : ((r = 1), (o = 0)),
                                        d.buffers.stencil.setTest(!0),
                                        d.buffers.stencil.setOp(
                                            l.REPLACE,
                                            l.REPLACE,
                                            l.REPLACE
                                        ),
                                        d.buffers.stencil.setFunc(
                                            l.ALWAYS,
                                            r,
                                            4294967295
                                        ),
                                        d.buffers.stencil.setClear(o),
                                        d.buffers.stencil.setLocked(!0),
                                        e.setRenderTarget(n),
                                        this.clear && e.clear(),
                                        e.render(this.scene, this.camera),
                                        e.setRenderTarget(t),
                                        this.clear && e.clear(),
                                        e.render(this.scene, this.camera),
                                        d.buffers.color.setLocked(!1),
                                        d.buffers.depth.setLocked(!1),
                                        d.buffers.stencil.setLocked(!1),
                                        d.buffers.stencil.setFunc(
                                            l.EQUAL,
                                            1,
                                            4294967295
                                        ),
                                        d.buffers.stencil.setOp(
                                            l.KEEP,
                                            l.KEEP,
                                            l.KEEP
                                        ),
                                        d.buffers.stencil.setLocked(!0);
                                },
                            },
                        ]),
                        n
                    );
                })(k),
                _ = (function (e) {
                    Object(v.a)(n, e);
                    var t = I(n);
                    function n() {
                        var e;
                        return (
                            Object(c.a)(this, n),
                            ((e = t.call(this)).needsSwap = !1),
                            e
                        );
                    }
                    return (
                        Object(d.a)(n, [
                            {
                                key: "render",
                                value: function (e) {
                                    e.state.buffers.stencil.setLocked(!1),
                                        e.state.buffers.stencil.setTest(!1);
                                },
                            },
                        ]),
                        n
                    );
                })(k),
                G = (function () {
                    function e(t, n) {
                        if (
                            (Object(c.a)(this, e),
                            (this.renderer = t),
                            void 0 === n)
                        ) {
                            var r = t.getSize(new o.cb());
                            (this._pixelRatio = t.getPixelRatio()),
                                (this._width = r.width),
                                (this._height = r.height),
                                ((n = new o.eb(
                                    this._width * this._pixelRatio,
                                    this._height * this._pixelRatio
                                )).texture.name = "EffectComposer.rt1");
                        } else
                            (this._pixelRatio = 1),
                                (this._width = n.width),
                                (this._height = n.height);
                        (this.renderTarget1 = n),
                            (this.renderTarget2 = n.clone()),
                            (this.renderTarget2.texture.name =
                                "EffectComposer.rt2"),
                            (this.writeBuffer = this.renderTarget1),
                            (this.readBuffer = this.renderTarget2),
                            (this.renderToScreen = !0),
                            (this.passes = []),
                            void 0 === M &&
                                console.error(
                                    "THREE.EffectComposer relies on CopyShader"
                                ),
                            void 0 === D &&
                                console.error(
                                    "THREE.EffectComposer relies on ShaderPass"
                                ),
                            (this.copyPass = new D(M)),
                            (this.clock = new o.i());
                    }
                    return (
                        Object(d.a)(e, [
                            {
                                key: "swapBuffers",
                                value: function () {
                                    var e = this.readBuffer;
                                    (this.readBuffer = this.writeBuffer),
                                        (this.writeBuffer = e);
                                },
                            },
                            {
                                key: "addPass",
                                value: function (e) {
                                    this.passes.push(e),
                                        e.setSize(
                                            this._width * this._pixelRatio,
                                            this._height * this._pixelRatio
                                        );
                                },
                            },
                            {
                                key: "insertPass",
                                value: function (e, t) {
                                    this.passes.splice(t, 0, e),
                                        e.setSize(
                                            this._width * this._pixelRatio,
                                            this._height * this._pixelRatio
                                        );
                                },
                            },
                            {
                                key: "removePass",
                                value: function (e) {
                                    var t = this.passes.indexOf(e);
                                    -1 !== t && this.passes.splice(t, 1);
                                },
                            },
                            {
                                key: "isLastEnabledPass",
                                value: function (e) {
                                    for (
                                        var i = e + 1;
                                        i < this.passes.length;
                                        i++
                                    )
                                        if (this.passes[i].enabled) return !1;
                                    return !0;
                                },
                            },
                            {
                                key: "render",
                                value: function (e) {
                                    void 0 === e && (e = this.clock.getDelta());
                                    for (
                                        var t = this.renderer.getRenderTarget(),
                                            n = !1,
                                            i = 0,
                                            r = this.passes.length;
                                        i < r;
                                        i++
                                    ) {
                                        var o = this.passes[i];
                                        if (!1 !== o.enabled) {
                                            if (
                                                ((o.renderToScreen =
                                                    this.renderToScreen &&
                                                    this.isLastEnabledPass(i)),
                                                o.render(
                                                    this.renderer,
                                                    this.writeBuffer,
                                                    this.readBuffer,
                                                    e,
                                                    n
                                                ),
                                                o.needsSwap)
                                            ) {
                                                if (n) {
                                                    var l =
                                                            this.renderer.getContext(),
                                                        d =
                                                            this.renderer.state
                                                                .buffers
                                                                .stencil;
                                                    d.setFunc(
                                                        l.NOTEQUAL,
                                                        1,
                                                        4294967295
                                                    ),
                                                        this.copyPass.render(
                                                            this.renderer,
                                                            this.writeBuffer,
                                                            this.readBuffer,
                                                            e
                                                        ),
                                                        d.setFunc(
                                                            l.EQUAL,
                                                            1,
                                                            4294967295
                                                        );
                                                }
                                                this.swapBuffers();
                                            }
                                            void 0 !== O &&
                                                (o instanceof O
                                                    ? (n = !0)
                                                    : o instanceof _ &&
                                                      (n = !1));
                                        }
                                    }
                                    this.renderer.setRenderTarget(t);
                                },
                            },
                            {
                                key: "reset",
                                value: function (e) {
                                    if (void 0 === e) {
                                        var t = this.renderer.getSize(
                                            new o.cb()
                                        );
                                        (this._pixelRatio =
                                            this.renderer.getPixelRatio()),
                                            (this._width = t.width),
                                            (this._height = t.height),
                                            (e =
                                                this.renderTarget1.clone()).setSize(
                                                this._width * this._pixelRatio,
                                                this._height * this._pixelRatio
                                            );
                                    }
                                    this.renderTarget1.dispose(),
                                        this.renderTarget2.dispose(),
                                        (this.renderTarget1 = e),
                                        (this.renderTarget2 = e.clone()),
                                        (this.writeBuffer = this.renderTarget1),
                                        (this.readBuffer = this.renderTarget2);
                                },
                            },
                            {
                                key: "setSize",
                                value: function (e, t) {
                                    (this._width = e), (this._height = t);
                                    var n = this._width * this._pixelRatio,
                                        r = this._height * this._pixelRatio;
                                    this.renderTarget1.setSize(n, r),
                                        this.renderTarget2.setSize(n, r);
                                    for (var i = 0; i < this.passes.length; i++)
                                        this.passes[i].setSize(n, r);
                                },
                            },
                            {
                                key: "setPixelRatio",
                                value: function (e) {
                                    (this._pixelRatio = e),
                                        this.setSize(this._width, this._height);
                                },
                            },
                        ]),
                        e
                    );
                })(),
                R = (new o.H(-1, 1, 1, -1, 0, 1), new o.g());
            R.setAttribute(
                "position",
                new o.t([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)
            ),
                R.setAttribute("uv", new o.t([0, 2, 0, 0, 2, 0], 2));
            function B(e) {
                var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return (
                            Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {})
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = Object(m.a)(e);
                    if (t) {
                        var o = Object(m.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return Object(f.a)(this, n);
                };
            }
            var A = (function (e) {
                Object(v.a)(n, e);
                var t = B(n);
                function n(e, r, l, d, h) {
                    var v;
                    return (
                        Object(c.a)(this, n),
                        ((v = t.call(this)).scene = e),
                        (v.camera = r),
                        (v.overrideMaterial = l),
                        (v.clearColor = d),
                        (v.clearAlpha = void 0 !== h ? h : 0),
                        (v.clear = !0),
                        (v.clearDepth = !1),
                        (v.needsSwap = !1),
                        (v._oldClearColor = new o.j()),
                        v
                    );
                }
                return (
                    Object(d.a)(n, [
                        {
                            key: "render",
                            value: function (e, t, n) {
                                var r,
                                    o,
                                    l = e.autoClear;
                                (e.autoClear = !1),
                                    void 0 !== this.overrideMaterial &&
                                        ((o = this.scene.overrideMaterial),
                                        (this.scene.overrideMaterial =
                                            this.overrideMaterial)),
                                    this.clearColor &&
                                        (e.getClearColor(this._oldClearColor),
                                        (r = e.getClearAlpha()),
                                        e.setClearColor(
                                            this.clearColor,
                                            this.clearAlpha
                                        )),
                                    this.clearDepth && e.clearDepth(),
                                    e.setRenderTarget(
                                        this.renderToScreen ? null : n
                                    ),
                                    this.clear &&
                                        e.clear(
                                            e.autoClearColor,
                                            e.autoClearDepth,
                                            e.autoClearStencil
                                        ),
                                    e.render(this.scene, this.camera),
                                    this.clearColor &&
                                        e.setClearColor(this._oldClearColor, r),
                                    void 0 !== this.overrideMaterial &&
                                        (this.scene.overrideMaterial = o),
                                    (e.autoClear = l);
                            },
                        },
                    ]),
                    n
                );
            })(k);
            n(456),
                n(40),
                n(458),
                n(459),
                n(460),
                n(461),
                n(462),
                n(463),
                n(464),
                n(465),
                n(466),
                n(467),
                n(468),
                n(469),
                n(470);
            function z(e) {
                var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return (
                            Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {})
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = Object(m.a)(e);
                    if (t) {
                        var o = Object(m.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return Object(f.a)(this, n);
                };
            }
            var j = (function (e) {
                Object(v.a)(n, e);
                var t = z(n);
                function n(e, r, l, d) {
                    var h;
                    Object(c.a)(this, n),
                        ((h = t.call(this)).renderScene = r),
                        (h.renderCamera = l),
                        (h.selectedObjects = void 0 !== d ? d : []),
                        (h.visibleEdgeColor = new o.j(1, 1, 1)),
                        (h.hiddenEdgeColor = new o.j(0.1, 0.04, 0.02)),
                        (h.edgeGlow = 0),
                        (h.usePatternTexture = !1),
                        (h.edgeThickness = 1),
                        (h.edgeStrength = 3),
                        (h.downSampleRatio = 2),
                        (h.pulsePeriod = 0),
                        (h._visibilityCache = new Map()),
                        (h.resolution =
                            void 0 !== e
                                ? new o.cb(e.x, e.y)
                                : new o.cb(256, 256));
                    var v = Math.round(h.resolution.x / h.downSampleRatio),
                        f = Math.round(h.resolution.y / h.downSampleRatio);
                    (h.renderTargetMaskBuffer = new o.eb(
                        h.resolution.x,
                        h.resolution.y
                    )),
                        (h.renderTargetMaskBuffer.texture.name =
                            "OutlinePass.mask"),
                        (h.renderTargetMaskBuffer.texture.generateMipmaps = !1),
                        (h.depthMaterial = new o.E()),
                        (h.depthMaterial.side = o.o),
                        (h.depthMaterial.depthPacking = o.N),
                        (h.depthMaterial.blending = o.G),
                        (h.prepareMaskMaterial = h.getPrepareMaskMaterial()),
                        (h.prepareMaskMaterial.side = o.o),
                        (h.prepareMaskMaterial.fragmentShader = (function (
                            e,
                            t
                        ) {
                            var n = t.isPerspectiveCamera
                                ? "perspective"
                                : "orthographic";
                            return e.replace(
                                /DEPTH_TO_VIEW_Z/g,
                                n + "DepthToViewZ"
                            );
                        })(
                            h.prepareMaskMaterial.fragmentShader,
                            h.renderCamera
                        )),
                        (h.renderTargetDepthBuffer = new o.eb(
                            h.resolution.x,
                            h.resolution.y
                        )),
                        (h.renderTargetDepthBuffer.texture.name =
                            "OutlinePass.depth"),
                        (h.renderTargetDepthBuffer.texture.generateMipmaps =
                            !1),
                        (h.renderTargetMaskDownSampleBuffer = new o.eb(v, f)),
                        (h.renderTargetMaskDownSampleBuffer.texture.name =
                            "OutlinePass.depthDownSample"),
                        (h.renderTargetMaskDownSampleBuffer.texture.generateMipmaps =
                            !1),
                        (h.renderTargetBlurBuffer1 = new o.eb(v, f)),
                        (h.renderTargetBlurBuffer1.texture.name =
                            "OutlinePass.blur1"),
                        (h.renderTargetBlurBuffer1.texture.generateMipmaps =
                            !1),
                        (h.renderTargetBlurBuffer2 = new o.eb(
                            Math.round(v / 2),
                            Math.round(f / 2)
                        )),
                        (h.renderTargetBlurBuffer2.texture.name =
                            "OutlinePass.blur2"),
                        (h.renderTargetBlurBuffer2.texture.generateMipmaps =
                            !1),
                        (h.edgeDetectionMaterial =
                            h.getEdgeDetectionMaterial()),
                        (h.renderTargetEdgeBuffer1 = new o.eb(v, f)),
                        (h.renderTargetEdgeBuffer1.texture.name =
                            "OutlinePass.edge1"),
                        (h.renderTargetEdgeBuffer1.texture.generateMipmaps =
                            !1),
                        (h.renderTargetEdgeBuffer2 = new o.eb(
                            Math.round(v / 2),
                            Math.round(f / 2)
                        )),
                        (h.renderTargetEdgeBuffer2.texture.name =
                            "OutlinePass.edge2"),
                        (h.renderTargetEdgeBuffer2.texture.generateMipmaps =
                            !1);
                    (h.separableBlurMaterial1 = h.getSeperableBlurMaterial(4)),
                        h.separableBlurMaterial1.uniforms.texSize.value.set(
                            v,
                            f
                        ),
                        (h.separableBlurMaterial1.uniforms.kernelRadius.value = 1),
                        (h.separableBlurMaterial2 =
                            h.getSeperableBlurMaterial(4)),
                        h.separableBlurMaterial2.uniforms.texSize.value.set(
                            Math.round(v / 2),
                            Math.round(f / 2)
                        ),
                        (h.separableBlurMaterial2.uniforms.kernelRadius.value = 4),
                        (h.overlayMaterial = h.getOverlayMaterial()),
                        void 0 === M &&
                            console.error(
                                "THREE.OutlinePass relies on CopyShader"
                            );
                    var m = M;
                    return (
                        (h.copyUniforms = o.bb.clone(m.uniforms)),
                        (h.copyUniforms.opacity.value = 1),
                        (h.materialCopy = new o.T({
                            uniforms: h.copyUniforms,
                            vertexShader: m.vertexShader,
                            fragmentShader: m.fragmentShader,
                            blending: o.G,
                            depthTest: !1,
                            depthWrite: !1,
                            transparent: !0,
                        })),
                        (h.enabled = !0),
                        (h.needsSwap = !1),
                        (h._oldClearColor = new o.j()),
                        (h.oldClearAlpha = 1),
                        (h.fsQuad = new P(null)),
                        (h.tempPulseColor1 = new o.j()),
                        (h.tempPulseColor2 = new o.j()),
                        (h.textureMatrix = new o.B()),
                        h
                    );
                }
                return (
                    Object(d.a)(n, [
                        {
                            key: "dispose",
                            value: function () {
                                this.renderTargetMaskBuffer.dispose(),
                                    this.renderTargetDepthBuffer.dispose(),
                                    this.renderTargetMaskDownSampleBuffer.dispose(),
                                    this.renderTargetBlurBuffer1.dispose(),
                                    this.renderTargetBlurBuffer2.dispose(),
                                    this.renderTargetEdgeBuffer1.dispose(),
                                    this.renderTargetEdgeBuffer2.dispose();
                            },
                        },
                        {
                            key: "setSize",
                            value: function (e, t) {
                                this.renderTargetMaskBuffer.setSize(e, t),
                                    this.renderTargetDepthBuffer.setSize(e, t);
                                var n = Math.round(e / this.downSampleRatio),
                                    r = Math.round(t / this.downSampleRatio);
                                this.renderTargetMaskDownSampleBuffer.setSize(
                                    n,
                                    r
                                ),
                                    this.renderTargetBlurBuffer1.setSize(n, r),
                                    this.renderTargetEdgeBuffer1.setSize(n, r),
                                    this.separableBlurMaterial1.uniforms.texSize.value.set(
                                        n,
                                        r
                                    ),
                                    (n = Math.round(n / 2)),
                                    (r = Math.round(r / 2)),
                                    this.renderTargetBlurBuffer2.setSize(n, r),
                                    this.renderTargetEdgeBuffer2.setSize(n, r),
                                    this.separableBlurMaterial2.uniforms.texSize.value.set(
                                        n,
                                        r
                                    );
                            },
                        },
                        {
                            key: "changeVisibilityOfSelectedObjects",
                            value: function (e) {
                                var t = this._visibilityCache;
                                function n(object) {
                                    object.isMesh &&
                                        (!0 === e
                                            ? (object.visible = t.get(object))
                                            : (t.set(object, object.visible),
                                              (object.visible = e)));
                                }
                                for (
                                    var i = 0;
                                    i < this.selectedObjects.length;
                                    i++
                                ) {
                                    this.selectedObjects[i].traverse(n);
                                }
                            },
                        },
                        {
                            key: "changeVisibilityOfNonSelectedObjects",
                            value: function (e) {
                                var t = this._visibilityCache,
                                    n = [];
                                function r(object) {
                                    object.isMesh && n.push(object);
                                }
                                for (
                                    var i = 0;
                                    i < this.selectedObjects.length;
                                    i++
                                ) {
                                    this.selectedObjects[i].traverse(r);
                                }
                                this.renderScene.traverse(function (object) {
                                    if (object.isMesh || object.isSprite) {
                                        for (
                                            var r = !1, o = 0;
                                            o < n.length;
                                            o++
                                        ) {
                                            if (n[o].id === object.id) {
                                                r = !0;
                                                break;
                                            }
                                        }
                                        if (!1 === r) {
                                            var l = object.visible;
                                            (!1 !== e &&
                                                !0 !== t.get(object)) ||
                                                (object.visible = e),
                                                t.set(object, l);
                                        }
                                    } else (object.isPoints || object.isLine) && (!0 === e ? (object.visible = t.get(object)) : (t.set(object, object.visible), (object.visible = e)));
                                });
                            },
                        },
                        {
                            key: "updateTextureMatrix",
                            value: function () {
                                this.textureMatrix.set(
                                    0.5,
                                    0,
                                    0,
                                    0.5,
                                    0,
                                    0.5,
                                    0,
                                    0.5,
                                    0,
                                    0,
                                    0.5,
                                    0.5,
                                    0,
                                    0,
                                    0,
                                    1
                                ),
                                    this.textureMatrix.multiply(
                                        this.renderCamera.projectionMatrix
                                    ),
                                    this.textureMatrix.multiply(
                                        this.renderCamera.matrixWorldInverse
                                    );
                            },
                        },
                        {
                            key: "render",
                            value: function (e, t, r, o, l) {
                                if (this.selectedObjects.length > 0) {
                                    e.getClearColor(this._oldClearColor),
                                        (this.oldClearAlpha =
                                            e.getClearAlpha());
                                    var d = e.autoClear;
                                    (e.autoClear = !1),
                                        l &&
                                            e.state.buffers.stencil.setTest(!1),
                                        e.setClearColor(16777215, 1),
                                        this.changeVisibilityOfSelectedObjects(
                                            !1
                                        );
                                    var c = this.renderScene.background;
                                    if (
                                        ((this.renderScene.background = null),
                                        (this.renderScene.overrideMaterial =
                                            this.depthMaterial),
                                        e.setRenderTarget(
                                            this.renderTargetDepthBuffer
                                        ),
                                        e.clear(),
                                        e.render(
                                            this.renderScene,
                                            this.renderCamera
                                        ),
                                        this.changeVisibilityOfSelectedObjects(
                                            !0
                                        ),
                                        this._visibilityCache.clear(),
                                        this.updateTextureMatrix(),
                                        this.changeVisibilityOfNonSelectedObjects(
                                            !1
                                        ),
                                        (this.renderScene.overrideMaterial =
                                            this.prepareMaskMaterial),
                                        this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(
                                            this.renderCamera.near,
                                            this.renderCamera.far
                                        ),
                                        (this.prepareMaskMaterial.uniforms.depthTexture.value =
                                            this.renderTargetDepthBuffer.texture),
                                        (this.prepareMaskMaterial.uniforms.textureMatrix.value =
                                            this.textureMatrix),
                                        e.setRenderTarget(
                                            this.renderTargetMaskBuffer
                                        ),
                                        e.clear(),
                                        e.render(
                                            this.renderScene,
                                            this.renderCamera
                                        ),
                                        (this.renderScene.overrideMaterial =
                                            null),
                                        this.changeVisibilityOfNonSelectedObjects(
                                            !0
                                        ),
                                        this._visibilityCache.clear(),
                                        (this.renderScene.background = c),
                                        (this.fsQuad.material =
                                            this.materialCopy),
                                        (this.copyUniforms.tDiffuse.value =
                                            this.renderTargetMaskBuffer.texture),
                                        e.setRenderTarget(
                                            this
                                                .renderTargetMaskDownSampleBuffer
                                        ),
                                        e.clear(),
                                        this.fsQuad.render(e),
                                        this.tempPulseColor1.copy(
                                            this.visibleEdgeColor
                                        ),
                                        this.tempPulseColor2.copy(
                                            this.hiddenEdgeColor
                                        ),
                                        this.pulsePeriod > 0)
                                    ) {
                                        var h =
                                            0.625 +
                                            (0.75 *
                                                Math.cos(
                                                    (0.01 * performance.now()) /
                                                        this.pulsePeriod
                                                )) /
                                                2;
                                        this.tempPulseColor1.multiplyScalar(h),
                                            this.tempPulseColor2.multiplyScalar(
                                                h
                                            );
                                    }
                                    (this.fsQuad.material =
                                        this.edgeDetectionMaterial),
                                        (this.edgeDetectionMaterial.uniforms.maskTexture.value =
                                            this.renderTargetMaskDownSampleBuffer.texture),
                                        this.edgeDetectionMaterial.uniforms.texSize.value.set(
                                            this
                                                .renderTargetMaskDownSampleBuffer
                                                .width,
                                            this
                                                .renderTargetMaskDownSampleBuffer
                                                .height
                                        ),
                                        (this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value =
                                            this.tempPulseColor1),
                                        (this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value =
                                            this.tempPulseColor2),
                                        e.setRenderTarget(
                                            this.renderTargetEdgeBuffer1
                                        ),
                                        e.clear(),
                                        this.fsQuad.render(e),
                                        (this.fsQuad.material =
                                            this.separableBlurMaterial1),
                                        (this.separableBlurMaterial1.uniforms.colorTexture.value =
                                            this.renderTargetEdgeBuffer1.texture),
                                        (this.separableBlurMaterial1.uniforms.direction.value =
                                            n.BlurDirectionX),
                                        (this.separableBlurMaterial1.uniforms.kernelRadius.value =
                                            this.edgeThickness),
                                        e.setRenderTarget(
                                            this.renderTargetBlurBuffer1
                                        ),
                                        e.clear(),
                                        this.fsQuad.render(e),
                                        (this.separableBlurMaterial1.uniforms.colorTexture.value =
                                            this.renderTargetBlurBuffer1.texture),
                                        (this.separableBlurMaterial1.uniforms.direction.value =
                                            n.BlurDirectionY),
                                        e.setRenderTarget(
                                            this.renderTargetEdgeBuffer1
                                        ),
                                        e.clear(),
                                        this.fsQuad.render(e),
                                        (this.fsQuad.material =
                                            this.separableBlurMaterial2),
                                        (this.separableBlurMaterial2.uniforms.colorTexture.value =
                                            this.renderTargetEdgeBuffer1.texture),
                                        (this.separableBlurMaterial2.uniforms.direction.value =
                                            n.BlurDirectionX),
                                        e.setRenderTarget(
                                            this.renderTargetBlurBuffer2
                                        ),
                                        e.clear(),
                                        this.fsQuad.render(e),
                                        (this.separableBlurMaterial2.uniforms.colorTexture.value =
                                            this.renderTargetBlurBuffer2.texture),
                                        (this.separableBlurMaterial2.uniforms.direction.value =
                                            n.BlurDirectionY),
                                        e.setRenderTarget(
                                            this.renderTargetEdgeBuffer2
                                        ),
                                        e.clear(),
                                        this.fsQuad.render(e),
                                        (this.fsQuad.material =
                                            this.overlayMaterial),
                                        (this.overlayMaterial.uniforms.maskTexture.value =
                                            this.renderTargetMaskBuffer.texture),
                                        (this.overlayMaterial.uniforms.edgeTexture1.value =
                                            this.renderTargetEdgeBuffer1.texture),
                                        (this.overlayMaterial.uniforms.edgeTexture2.value =
                                            this.renderTargetEdgeBuffer2.texture),
                                        (this.overlayMaterial.uniforms.patternTexture.value =
                                            this.patternTexture),
                                        (this.overlayMaterial.uniforms.edgeStrength.value =
                                            this.edgeStrength),
                                        (this.overlayMaterial.uniforms.edgeGlow.value =
                                            this.edgeGlow),
                                        (this.overlayMaterial.uniforms.usePatternTexture.value =
                                            this.usePatternTexture),
                                        l &&
                                            e.state.buffers.stencil.setTest(!0),
                                        e.setRenderTarget(r),
                                        this.fsQuad.render(e),
                                        e.setClearColor(
                                            this._oldClearColor,
                                            this.oldClearAlpha
                                        ),
                                        (e.autoClear = d);
                                }
                                this.renderToScreen &&
                                    ((this.fsQuad.material = this.materialCopy),
                                    (this.copyUniforms.tDiffuse.value =
                                        r.texture),
                                    e.setRenderTarget(null),
                                    this.fsQuad.render(e));
                            },
                        },
                        {
                            key: "getPrepareMaskMaterial",
                            value: function () {
                                return new o.T({
                                    uniforms: {
                                        depthTexture: {
                                            value: null,
                                        },
                                        cameraNearFar: {
                                            value: new o.cb(0.5, 0.5),
                                        },
                                        textureMatrix: {
                                            value: null,
                                        },
                                    },
                                    vertexShader:
                                        "#include <morphtarget_pars_vertex>\n\t\t\t\t#include <skinning_pars_vertex>\n\n\t\t\t\tvarying vec4 projTexCoord;\n\t\t\t\tvarying vec4 vPosition;\n\t\t\t\tuniform mat4 textureMatrix;\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\t#include <skinbase_vertex>\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <morphtarget_vertex>\n\t\t\t\t\t#include <skinning_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t\tvPosition = mvPosition;\n\t\t\t\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t\t\t\t\tprojTexCoord = textureMatrix * worldPosition;\n\n\t\t\t\t}",
                                    fragmentShader:
                                        "#include <packing>\n\t\t\t\tvarying vec4 vPosition;\n\t\t\t\tvarying vec4 projTexCoord;\n\t\t\t\tuniform sampler2D depthTexture;\n\t\t\t\tuniform vec2 cameraNearFar;\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tfloat depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));\n\t\t\t\t\tfloat viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );\n\t\t\t\t\tfloat depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;\n\t\t\t\t\tgl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);\n\n\t\t\t\t}",
                                });
                            },
                        },
                        {
                            key: "getEdgeDetectionMaterial",
                            value: function () {
                                return new o.T({
                                    uniforms: {
                                        maskTexture: {
                                            value: null,
                                        },
                                        texSize: {
                                            value: new o.cb(0.5, 0.5),
                                        },
                                        visibleEdgeColor: {
                                            value: new o.db(1, 1, 1),
                                        },
                                        hiddenEdgeColor: {
                                            value: new o.db(1, 1, 1),
                                        },
                                    },
                                    vertexShader:
                                        "varying vec2 vUv;\n\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
                                    fragmentShader:
                                        "varying vec2 vUv;\n\n\t\t\t\tuniform sampler2D maskTexture;\n\t\t\t\tuniform vec2 texSize;\n\t\t\t\tuniform vec3 visibleEdgeColor;\n\t\t\t\tuniform vec3 hiddenEdgeColor;\n\n\t\t\t\tvoid main() {\n\t\t\t\t\tvec2 invSize = 1.0 / texSize;\n\t\t\t\t\tvec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);\n\t\t\t\t\tvec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);\n\t\t\t\t\tvec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);\n\t\t\t\t\tvec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);\n\t\t\t\t\tvec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);\n\t\t\t\t\tfloat diff1 = (c1.r - c2.r)*0.5;\n\t\t\t\t\tfloat diff2 = (c3.r - c4.r)*0.5;\n\t\t\t\t\tfloat d = length( vec2(diff1, diff2) );\n\t\t\t\t\tfloat a1 = min(c1.g, c2.g);\n\t\t\t\t\tfloat a2 = min(c3.g, c4.g);\n\t\t\t\t\tfloat visibilityFactor = min(a1, a2);\n\t\t\t\t\tvec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;\n\t\t\t\t\tgl_FragColor = vec4(edgeColor, 1.0) * vec4(d);\n\t\t\t\t}",
                                });
                            },
                        },
                        {
                            key: "getSeperableBlurMaterial",
                            value: function (e) {
                                return new o.T({
                                    defines: {
                                        MAX_RADIUS: e,
                                    },
                                    uniforms: {
                                        colorTexture: {
                                            value: null,
                                        },
                                        texSize: {
                                            value: new o.cb(0.5, 0.5),
                                        },
                                        direction: {
                                            value: new o.cb(0.5, 0.5),
                                        },
                                        kernelRadius: {
                                            value: 1,
                                        },
                                    },
                                    vertexShader:
                                        "varying vec2 vUv;\n\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
                                    fragmentShader:
                                        "#include <common>\n\t\t\t\tvarying vec2 vUv;\n\t\t\t\tuniform sampler2D colorTexture;\n\t\t\t\tuniform vec2 texSize;\n\t\t\t\tuniform vec2 direction;\n\t\t\t\tuniform float kernelRadius;\n\n\t\t\t\tfloat gaussianPdf(in float x, in float sigma) {\n\t\t\t\t\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\t\t\t\t\tvec2 invSize = 1.0 / texSize;\n\t\t\t\t\tfloat sigma = kernelRadius/2.0;\n\t\t\t\t\tfloat weightSum = gaussianPdf(0.0, sigma);\n\t\t\t\t\tvec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;\n\t\t\t\t\tvec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);\n\t\t\t\t\tvec2 uvOffset = delta;\n\t\t\t\t\tfor( int i = 1; i <= MAX_RADIUS; i ++ ) {\n\t\t\t\t\t\tfloat x = kernelRadius * float(i) / float(MAX_RADIUS);\n\t\t\t\t\t\tfloat w = gaussianPdf(x, sigma);\n\t\t\t\t\t\tvec4 sample1 = texture2D( colorTexture, vUv + uvOffset);\n\t\t\t\t\t\tvec4 sample2 = texture2D( colorTexture, vUv - uvOffset);\n\t\t\t\t\t\tdiffuseSum += ((sample1 + sample2) * w);\n\t\t\t\t\t\tweightSum += (2.0 * w);\n\t\t\t\t\t\tuvOffset += delta;\n\t\t\t\t\t}\n\t\t\t\t\tgl_FragColor = diffuseSum/weightSum;\n\t\t\t\t}",
                                });
                            },
                        },
                        {
                            key: "getOverlayMaterial",
                            value: function () {
                                return new o.T({
                                    uniforms: {
                                        maskTexture: {
                                            value: null,
                                        },
                                        edgeTexture1: {
                                            value: null,
                                        },
                                        edgeTexture2: {
                                            value: null,
                                        },
                                        patternTexture: {
                                            value: null,
                                        },
                                        edgeStrength: {
                                            value: 1,
                                        },
                                        edgeGlow: {
                                            value: 1,
                                        },
                                        usePatternTexture: {
                                            value: 0,
                                        },
                                    },
                                    vertexShader:
                                        "varying vec2 vUv;\n\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
                                    fragmentShader:
                                        "varying vec2 vUv;\n\n\t\t\t\tuniform sampler2D maskTexture;\n\t\t\t\tuniform sampler2D edgeTexture1;\n\t\t\t\tuniform sampler2D edgeTexture2;\n\t\t\t\tuniform sampler2D patternTexture;\n\t\t\t\tuniform float edgeStrength;\n\t\t\t\tuniform float edgeGlow;\n\t\t\t\tuniform bool usePatternTexture;\n\n\t\t\t\tvoid main() {\n\t\t\t\t\tvec4 edgeValue1 = texture2D(edgeTexture1, vUv);\n\t\t\t\t\tvec4 edgeValue2 = texture2D(edgeTexture2, vUv);\n\t\t\t\t\tvec4 maskColor = texture2D(maskTexture, vUv);\n\t\t\t\t\tvec4 patternColor = texture2D(patternTexture, 6.0 * vUv);\n\t\t\t\t\tfloat visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;\n\t\t\t\t\tvec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;\n\t\t\t\t\tvec4 finalColor = edgeStrength * maskColor.r * edgeValue;\n\t\t\t\t\tif(usePatternTexture)\n\t\t\t\t\t\tfinalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);\n\t\t\t\t\tgl_FragColor = finalColor;\n\t\t\t\t}",
                                    blending: o.a,
                                    depthTest: !1,
                                    depthWrite: !1,
                                    transparent: !0,
                                });
                            },
                        },
                    ]),
                    n
                );
            })(k);
            (j.BlurDirectionX = new o.cb(1, 0)),
                (j.BlurDirectionY = new o.cb(0, 1));
            var U = n(20),
                N = n(18);
            n(304),
                n(208),
                n(355),
                n(62),
                n(45),
                n(344),
                n(933),
                n(219),
                n(149),
                n(276),
                n(63),
                n(65),
                n(215),
                n(454),
                n(209),
                n(317);
            function W(e) {
                var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return (
                            Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {})
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = Object(m.a)(e);
                    if (t) {
                        var o = Object(m.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return Object(f.a)(this, n);
                };
            }
            var V,
                Z = (function (e) {
                    Object(v.a)(n, e);
                    var t = W(n);
                    function n(e) {
                        var r;
                        return (
                            Object(c.a)(this, n),
                            ((r = t.call(this, e)).defaultDPI = 90),
                            (r.defaultUnit = "px"),
                            r
                        );
                    }
                    return (
                        Object(d.a)(
                            n,
                            [
                                {
                                    key: "load",
                                    value: function (e, t, n, r) {
                                        var l = this,
                                            d = new o.s(l.manager);
                                        d.setPath(l.path),
                                            d.setRequestHeader(l.requestHeader),
                                            d.setWithCredentials(
                                                l.withCredentials
                                            ),
                                            d.load(
                                                e,
                                                function (text) {
                                                    try {
                                                        t(l.parse(text));
                                                    } catch (t) {
                                                        r
                                                            ? r(t)
                                                            : console.error(t),
                                                            l.manager.itemError(
                                                                e
                                                            );
                                                    }
                                                },
                                                n,
                                                r
                                            );
                                    },
                                },
                                {
                                    key: "parse",
                                    value: function (text) {
                                        var e = this;
                                        function t(path, e, t, r, o, l, d, c) {
                                            if (0 != e && 0 != t) {
                                                (r = (r * Math.PI) / 180),
                                                    (e = Math.abs(e)),
                                                    (t = Math.abs(t));
                                                var h = (d.x - c.x) / 2,
                                                    v = (d.y - c.y) / 2,
                                                    f =
                                                        Math.cos(r) * h +
                                                        Math.sin(r) * v,
                                                    m =
                                                        -Math.sin(r) * h +
                                                        Math.cos(r) * v,
                                                    w = e * e,
                                                    x = t * t,
                                                    C = f * f,
                                                    y = m * m,
                                                    L = C / w + y / x;
                                                if (L > 1) {
                                                    var s = Math.sqrt(L);
                                                    (w = (e *= s) * e),
                                                        (x = (t *= s) * t);
                                                }
                                                var M = w * y + x * C,
                                                    k = (w * x - M) / M,
                                                    q = Math.sqrt(
                                                        Math.max(0, k)
                                                    );
                                                o === l && (q = -q);
                                                var T = (q * e * m) / t,
                                                    S = (-q * t * f) / e,
                                                    P =
                                                        Math.cos(r) * T -
                                                        Math.sin(r) * S +
                                                        (d.x + c.x) / 2,
                                                    E =
                                                        Math.sin(r) * T +
                                                        Math.cos(r) * S +
                                                        (d.y + c.y) / 2,
                                                    D = n(
                                                        1,
                                                        0,
                                                        (f - T) / e,
                                                        (m - S) / t
                                                    ),
                                                    I =
                                                        n(
                                                            (f - T) / e,
                                                            (m - S) / t,
                                                            (-f - T) / e,
                                                            (-m - S) / t
                                                        ) %
                                                        (2 * Math.PI);
                                                path.currentPath.absellipse(
                                                    P,
                                                    E,
                                                    e,
                                                    t,
                                                    D,
                                                    D + I,
                                                    0 === l,
                                                    r
                                                );
                                            } else path.lineTo(c.x, c.y);
                                        }
                                        function n(e, t, n, r) {
                                            var o = e * n + t * r,
                                                l =
                                                    Math.sqrt(e * e + t * t) *
                                                    Math.sqrt(n * n + r * r),
                                                d = Math.acos(
                                                    Math.max(
                                                        -1,
                                                        Math.min(1, o / l)
                                                    )
                                                );
                                            return (
                                                e * r - t * n < 0 && (d = -d), d
                                            );
                                        }
                                        function r(e, style) {
                                            style = Object.assign({}, style);
                                            var t = {};
                                            if (e.hasAttribute("class"))
                                                for (
                                                    var n = e
                                                            .getAttribute(
                                                                "class"
                                                            )
                                                            .split(/\s/)
                                                            .filter(Boolean)
                                                            .map(function (i) {
                                                                return i.trim();
                                                            }),
                                                        i = 0;
                                                    i < n.length;
                                                    i++
                                                )
                                                    t = Object.assign(
                                                        t,
                                                        x["." + n[i]]
                                                    );
                                            function r(n, r, o) {
                                                void 0 === o &&
                                                    (o = function (e) {
                                                        return (
                                                            e.startsWith(
                                                                "url"
                                                            ) &&
                                                                console.warn(
                                                                    "SVGLoader: url access in attributes is not implemented."
                                                                ),
                                                            e
                                                        );
                                                    }),
                                                    e.hasAttribute(n) &&
                                                        (style[r] = o(
                                                            e.getAttribute(n)
                                                        )),
                                                    t[n] &&
                                                        (style[r] = o(t[n])),
                                                    e.style &&
                                                        "" !== e.style[n] &&
                                                        (style[r] = o(
                                                            e.style[n]
                                                        ));
                                            }
                                            function o(e) {
                                                return Math.max(
                                                    0,
                                                    Math.min(1, v(e))
                                                );
                                            }
                                            function l(e) {
                                                return Math.max(0, v(e));
                                            }
                                            return (
                                                e.hasAttribute("id") &&
                                                    (t = Object.assign(
                                                        t,
                                                        x[
                                                            "#" +
                                                                e.getAttribute(
                                                                    "id"
                                                                )
                                                        ]
                                                    )),
                                                r("fill", "fill"),
                                                r(
                                                    "fill-opacity",
                                                    "fillOpacity",
                                                    o
                                                ),
                                                r("fill-rule", "fillRule"),
                                                r("opacity", "opacity", o),
                                                r("stroke", "stroke"),
                                                r(
                                                    "stroke-opacity",
                                                    "strokeOpacity",
                                                    o
                                                ),
                                                r(
                                                    "stroke-width",
                                                    "strokeWidth",
                                                    l
                                                ),
                                                r(
                                                    "stroke-linejoin",
                                                    "strokeLineJoin"
                                                ),
                                                r(
                                                    "stroke-linecap",
                                                    "strokeLineCap"
                                                ),
                                                r(
                                                    "stroke-miterlimit",
                                                    "strokeMiterLimit",
                                                    l
                                                ),
                                                r("visibility", "visibility"),
                                                style
                                            );
                                        }
                                        function l(a, b) {
                                            return a - (b - a);
                                        }
                                        function d(input, e, t) {
                                            if ("string" != typeof input)
                                                throw new TypeError(
                                                    "Invalid input: " +
                                                        Object(U.a)(input)
                                                );
                                            var n,
                                                r = {
                                                    SEPARATOR:
                                                        /[ \t\r\n\,.\-+]/,
                                                    WHITESPACE: /[ \t\r\n]/,
                                                    DIGIT: /[\d]/,
                                                    SIGN: /[-+]/,
                                                    POINT: /\./,
                                                    COMMA: /,/,
                                                    EXP: /e/i,
                                                    FLAGS: /[01]/,
                                                },
                                                o = 0,
                                                l = !0,
                                                d = "",
                                                c = "",
                                                h = [];
                                            function v(e, i, t) {
                                                var n = new SyntaxError(
                                                    'Unexpected character "' +
                                                        e +
                                                        '" at index ' +
                                                        i +
                                                        "."
                                                );
                                                throw ((n.partial = t), n);
                                            }
                                            function f() {
                                                "" !== d &&
                                                    ("" === c
                                                        ? h.push(Number(d))
                                                        : h.push(
                                                              Number(d) *
                                                                  Math.pow(
                                                                      10,
                                                                      Number(c)
                                                                  )
                                                          )),
                                                    (d = ""),
                                                    (c = "");
                                            }
                                            for (
                                                var m = input.length, i = 0;
                                                i < m;
                                                i++
                                            )
                                                if (
                                                    ((n = input[i]),
                                                    Array.isArray(e) &&
                                                        e.includes(
                                                            h.length % t
                                                        ) &&
                                                        r.FLAGS.test(n))
                                                )
                                                    (o = 1), (d = n), f();
                                                else {
                                                    if (0 === o) {
                                                        if (
                                                            r.WHITESPACE.test(n)
                                                        )
                                                            continue;
                                                        if (
                                                            r.DIGIT.test(n) ||
                                                            r.SIGN.test(n)
                                                        ) {
                                                            (o = 1), (d = n);
                                                            continue;
                                                        }
                                                        if (r.POINT.test(n)) {
                                                            (o = 2), (d = n);
                                                            continue;
                                                        }
                                                        r.COMMA.test(n) &&
                                                            (l && v(n, i, h),
                                                            (l = !0));
                                                    }
                                                    if (1 === o) {
                                                        if (r.DIGIT.test(n)) {
                                                            d += n;
                                                            continue;
                                                        }
                                                        if (r.POINT.test(n)) {
                                                            (d += n), (o = 2);
                                                            continue;
                                                        }
                                                        if (r.EXP.test(n)) {
                                                            o = 3;
                                                            continue;
                                                        }
                                                        r.SIGN.test(n) &&
                                                            1 === d.length &&
                                                            r.SIGN.test(d[0]) &&
                                                            v(n, i, h);
                                                    }
                                                    if (2 === o) {
                                                        if (r.DIGIT.test(n)) {
                                                            d += n;
                                                            continue;
                                                        }
                                                        if (r.EXP.test(n)) {
                                                            o = 3;
                                                            continue;
                                                        }
                                                        r.POINT.test(n) &&
                                                            "." ===
                                                                d[
                                                                    d.length - 1
                                                                ] &&
                                                            v(n, i, h);
                                                    }
                                                    if (3 === o) {
                                                        if (r.DIGIT.test(n)) {
                                                            c += n;
                                                            continue;
                                                        }
                                                        if (r.SIGN.test(n)) {
                                                            if ("" === c) {
                                                                c += n;
                                                                continue;
                                                            }
                                                            1 === c.length &&
                                                                r.SIGN.test(
                                                                    c
                                                                ) &&
                                                                v(n, i, h);
                                                        }
                                                    }
                                                    r.WHITESPACE.test(n)
                                                        ? (f(),
                                                          (o = 0),
                                                          (l = !1))
                                                        : r.COMMA.test(n)
                                                        ? (f(),
                                                          (o = 0),
                                                          (l = !0))
                                                        : r.SIGN.test(n)
                                                        ? (f(),
                                                          (o = 1),
                                                          (d = n))
                                                        : r.POINT.test(n)
                                                        ? (f(),
                                                          (o = 2),
                                                          (d = n))
                                                        : v(n, i, h);
                                                }
                                            return f(), h;
                                        }
                                        var c = [
                                                "mm",
                                                "cm",
                                                "in",
                                                "pt",
                                                "pc",
                                                "px",
                                            ],
                                            h = {
                                                mm: {
                                                    mm: 1,
                                                    cm: 0.1,
                                                    in: 1 / 25.4,
                                                    pt: 72 / 25.4,
                                                    pc: 6 / 25.4,
                                                    px: -1,
                                                },
                                                cm: {
                                                    mm: 10,
                                                    cm: 1,
                                                    in: 1 / 2.54,
                                                    pt: 72 / 2.54,
                                                    pc: 6 / 2.54,
                                                    px: -1,
                                                },
                                                in: {
                                                    mm: 25.4,
                                                    cm: 2.54,
                                                    in: 1,
                                                    pt: 72,
                                                    pc: 6,
                                                    px: -1,
                                                },
                                                pt: {
                                                    mm: 25.4 / 72,
                                                    cm: 2.54 / 72,
                                                    in: 1 / 72,
                                                    pt: 1,
                                                    pc: 6 / 72,
                                                    px: -1,
                                                },
                                                pc: {
                                                    mm: 25.4 / 6,
                                                    cm: 2.54 / 6,
                                                    in: 1 / 6,
                                                    pt: 12,
                                                    pc: 1,
                                                    px: -1,
                                                },
                                                px: {
                                                    px: 1,
                                                },
                                            };
                                        function v(t) {
                                            var n = "px";
                                            if (
                                                "string" == typeof t ||
                                                t instanceof String
                                            )
                                                for (
                                                    var i = 0, r = c.length;
                                                    i < r;
                                                    i++
                                                ) {
                                                    var u = c[i];
                                                    if (t.endsWith(u)) {
                                                        (n = u),
                                                            (t = t.substring(
                                                                0,
                                                                t.length -
                                                                    u.length
                                                            ));
                                                        break;
                                                    }
                                                }
                                            var o = void 0;
                                            return (
                                                "px" === n &&
                                                "px" !== e.defaultUnit
                                                    ? (o =
                                                          h.in[e.defaultUnit] /
                                                          e.defaultDPI)
                                                    : (o =
                                                          h[n][e.defaultUnit]) <
                                                          0 &&
                                                      (o =
                                                          h[n].in *
                                                          e.defaultDPI),
                                                o * parseFloat(t)
                                            );
                                        }
                                        function f(e) {
                                            var t = e.elements;
                                            return Math.sqrt(
                                                t[0] * t[0] + t[1] * t[1]
                                            );
                                        }
                                        function m(e) {
                                            var t = e.elements;
                                            return Math.sqrt(
                                                t[3] * t[3] + t[4] * t[4]
                                            );
                                        }
                                        var w = [],
                                            x = {},
                                            C = [],
                                            y = new o.A(),
                                            L = new o.A(),
                                            M = new o.A(),
                                            k = new o.A(),
                                            T = new o.cb(),
                                            S = new o.db(),
                                            P = new o.A(),
                                            E = new DOMParser().parseFromString(
                                                text,
                                                "image/svg+xml"
                                            );
                                        return (
                                            (function e(n, style) {
                                                if (1 === n.nodeType) {
                                                    var c = (function (e) {
                                                            if (
                                                                !(
                                                                    e.hasAttribute(
                                                                        "transform"
                                                                    ) ||
                                                                    ("use" ===
                                                                        e.nodeName &&
                                                                        (e.hasAttribute(
                                                                            "x"
                                                                        ) ||
                                                                            e.hasAttribute(
                                                                                "y"
                                                                            )))
                                                                )
                                                            )
                                                                return null;
                                                            var t = (function (
                                                                e
                                                            ) {
                                                                var t =
                                                                        new o.A(),
                                                                    n = y;
                                                                if (
                                                                    "use" ===
                                                                        e.nodeName &&
                                                                    (e.hasAttribute(
                                                                        "x"
                                                                    ) ||
                                                                        e.hasAttribute(
                                                                            "y"
                                                                        ))
                                                                ) {
                                                                    var r = v(
                                                                            e.getAttribute(
                                                                                "x"
                                                                            )
                                                                        ),
                                                                        l = v(
                                                                            e.getAttribute(
                                                                                "y"
                                                                            )
                                                                        );
                                                                    t.translate(
                                                                        r,
                                                                        l
                                                                    );
                                                                }
                                                                if (
                                                                    e.hasAttribute(
                                                                        "transform"
                                                                    )
                                                                )
                                                                    for (
                                                                        var c =
                                                                                e
                                                                                    .getAttribute(
                                                                                        "transform"
                                                                                    )
                                                                                    .split(
                                                                                        ")"
                                                                                    ),
                                                                            h =
                                                                                c.length -
                                                                                1;
                                                                        h >= 0;
                                                                        h--
                                                                    ) {
                                                                        var f =
                                                                            c[
                                                                                h
                                                                            ].trim();
                                                                        if (
                                                                            "" !==
                                                                            f
                                                                        ) {
                                                                            var m =
                                                                                    f.indexOf(
                                                                                        "("
                                                                                    ),
                                                                                w =
                                                                                    f.length;
                                                                            if (
                                                                                m >
                                                                                    0 &&
                                                                                m <
                                                                                    w
                                                                            ) {
                                                                                var x =
                                                                                        f.slice(
                                                                                            0,
                                                                                            m
                                                                                        ),
                                                                                    C =
                                                                                        d(
                                                                                            f.slice(
                                                                                                m +
                                                                                                    1
                                                                                            )
                                                                                        );
                                                                                switch (
                                                                                    (n.identity(),
                                                                                    x)
                                                                                ) {
                                                                                    case "translate":
                                                                                        if (
                                                                                            C.length >=
                                                                                            1
                                                                                        ) {
                                                                                            var T =
                                                                                                    C[0],
                                                                                                S =
                                                                                                    T;
                                                                                            C.length >=
                                                                                                2 &&
                                                                                                (S =
                                                                                                    C[1]),
                                                                                                n.translate(
                                                                                                    T,
                                                                                                    S
                                                                                                );
                                                                                        }
                                                                                        break;
                                                                                    case "rotate":
                                                                                        if (
                                                                                            C.length >=
                                                                                            1
                                                                                        ) {
                                                                                            var P = 0,
                                                                                                E = 0,
                                                                                                D = 0;
                                                                                            (P =
                                                                                                (-C[0] *
                                                                                                    Math.PI) /
                                                                                                180),
                                                                                                C.length >=
                                                                                                    3 &&
                                                                                                    ((E =
                                                                                                        C[1]),
                                                                                                    (D =
                                                                                                        C[2])),
                                                                                                L.identity().translate(
                                                                                                    -E,
                                                                                                    -D
                                                                                                ),
                                                                                                M.identity().rotate(
                                                                                                    P
                                                                                                ),
                                                                                                k.multiplyMatrices(
                                                                                                    M,
                                                                                                    L
                                                                                                ),
                                                                                                L.identity().translate(
                                                                                                    E,
                                                                                                    D
                                                                                                ),
                                                                                                n.multiplyMatrices(
                                                                                                    L,
                                                                                                    k
                                                                                                );
                                                                                        }
                                                                                        break;
                                                                                    case "scale":
                                                                                        if (
                                                                                            C.length >=
                                                                                            1
                                                                                        ) {
                                                                                            var I =
                                                                                                    C[0],
                                                                                                O =
                                                                                                    I;
                                                                                            C.length >=
                                                                                                2 &&
                                                                                                (O =
                                                                                                    C[1]),
                                                                                                n.scale(
                                                                                                    I,
                                                                                                    O
                                                                                                );
                                                                                        }
                                                                                        break;
                                                                                    case "skewX":
                                                                                        1 ===
                                                                                            C.length &&
                                                                                            n.set(
                                                                                                1,
                                                                                                Math.tan(
                                                                                                    (C[0] *
                                                                                                        Math.PI) /
                                                                                                        180
                                                                                                ),
                                                                                                0,
                                                                                                0,
                                                                                                1,
                                                                                                0,
                                                                                                0,
                                                                                                0,
                                                                                                1
                                                                                            );
                                                                                        break;
                                                                                    case "skewY":
                                                                                        1 ===
                                                                                            C.length &&
                                                                                            n.set(
                                                                                                1,
                                                                                                0,
                                                                                                0,
                                                                                                Math.tan(
                                                                                                    (C[0] *
                                                                                                        Math.PI) /
                                                                                                        180
                                                                                                ),
                                                                                                1,
                                                                                                0,
                                                                                                0,
                                                                                                0,
                                                                                                1
                                                                                            );
                                                                                        break;
                                                                                    case "matrix":
                                                                                        6 ===
                                                                                            C.length &&
                                                                                            n.set(
                                                                                                C[0],
                                                                                                C[2],
                                                                                                C[4],
                                                                                                C[1],
                                                                                                C[3],
                                                                                                C[5],
                                                                                                0,
                                                                                                0,
                                                                                                1
                                                                                            );
                                                                                }
                                                                            }
                                                                            t.premultiply(
                                                                                n
                                                                            );
                                                                        }
                                                                    }
                                                                return t;
                                                            })(e);
                                                            C.length > 0 &&
                                                                t.premultiply(
                                                                    C[
                                                                        C.length -
                                                                            1
                                                                    ]
                                                                );
                                                            return (
                                                                P.copy(t),
                                                                C.push(t),
                                                                t
                                                            );
                                                        })(n),
                                                        h = !1,
                                                        path = null;
                                                    switch (n.nodeName) {
                                                        case "svg":
                                                        case "g":
                                                            style = r(n, style);
                                                            break;
                                                        case "style":
                                                            !(function (e) {
                                                                if (
                                                                    !e.sheet ||
                                                                    !e.sheet
                                                                        .cssRules ||
                                                                    !e.sheet
                                                                        .cssRules
                                                                        .length
                                                                )
                                                                    return;
                                                                for (
                                                                    var i = 0;
                                                                    i <
                                                                    e.sheet
                                                                        .cssRules
                                                                        .length;
                                                                    i++
                                                                ) {
                                                                    var t =
                                                                        e.sheet
                                                                            .cssRules[
                                                                            i
                                                                        ];
                                                                    if (
                                                                        1 ===
                                                                        t.type
                                                                    )
                                                                        for (
                                                                            var n =
                                                                                    t.selectorText
                                                                                        .split(
                                                                                            /,/gm
                                                                                        )
                                                                                        .filter(
                                                                                            Boolean
                                                                                        )
                                                                                        .map(
                                                                                            function (
                                                                                                i
                                                                                            ) {
                                                                                                return i.trim();
                                                                                            }
                                                                                        ),
                                                                                r = 0;
                                                                            r <
                                                                            n.length;
                                                                            r++
                                                                        ) {
                                                                            var o =
                                                                                Object.fromEntries(
                                                                                    Object.entries(
                                                                                        t.style
                                                                                    ).filter(
                                                                                        function (
                                                                                            e
                                                                                        ) {
                                                                                            return (
                                                                                                "" !==
                                                                                                Object(
                                                                                                    N.a
                                                                                                )(
                                                                                                    e,
                                                                                                    2
                                                                                                )[1]
                                                                                            );
                                                                                        }
                                                                                    )
                                                                                );
                                                                            x[
                                                                                n[
                                                                                    r
                                                                                ]
                                                                            ] =
                                                                                Object.assign(
                                                                                    x[
                                                                                        n[
                                                                                            r
                                                                                        ]
                                                                                    ] ||
                                                                                        {},
                                                                                    o
                                                                                );
                                                                        }
                                                                }
                                                            })(n);
                                                            break;
                                                        case "path":
                                                            (style = r(
                                                                n,
                                                                style
                                                            )),
                                                                n.hasAttribute(
                                                                    "d"
                                                                ) &&
                                                                    (path =
                                                                        (function (
                                                                            e
                                                                        ) {
                                                                            for (
                                                                                var path =
                                                                                        new o.V(),
                                                                                    n =
                                                                                        new o.cb(),
                                                                                    r =
                                                                                        new o.cb(),
                                                                                    c =
                                                                                        new o.cb(),
                                                                                    h =
                                                                                        !0,
                                                                                    v =
                                                                                        !1,
                                                                                    f =
                                                                                        e
                                                                                            .getAttribute(
                                                                                                "d"
                                                                                            )
                                                                                            .match(
                                                                                                /[a-df-z][^a-df-z]*/gi
                                                                                            ),
                                                                                    i = 0,
                                                                                    m =
                                                                                        f.length;
                                                                                i <
                                                                                m;
                                                                                i++
                                                                            ) {
                                                                                var w =
                                                                                        f[
                                                                                            i
                                                                                        ],
                                                                                    x =
                                                                                        w.charAt(
                                                                                            0
                                                                                        ),
                                                                                    C =
                                                                                        w
                                                                                            .slice(
                                                                                                1
                                                                                            )
                                                                                            .trim();
                                                                                !0 ===
                                                                                    h &&
                                                                                    ((v =
                                                                                        !0),
                                                                                    (h =
                                                                                        !1));
                                                                                var y =
                                                                                    void 0;
                                                                                switch (
                                                                                    x
                                                                                ) {
                                                                                    case "M":
                                                                                        for (
                                                                                            var L = 0,
                                                                                                M =
                                                                                                    (y =
                                                                                                        d(
                                                                                                            C
                                                                                                        ))
                                                                                                        .length;
                                                                                            L <
                                                                                            M;
                                                                                            L += 2
                                                                                        )
                                                                                            (n.x =
                                                                                                y[
                                                                                                    L +
                                                                                                        0
                                                                                                ]),
                                                                                                (n.y =
                                                                                                    y[
                                                                                                        L +
                                                                                                            1
                                                                                                    ]),
                                                                                                (r.x =
                                                                                                    n.x),
                                                                                                (r.y =
                                                                                                    n.y),
                                                                                                0 ===
                                                                                                L
                                                                                                    ? path.moveTo(
                                                                                                          n.x,
                                                                                                          n.y
                                                                                                      )
                                                                                                    : path.lineTo(
                                                                                                          n.x,
                                                                                                          n.y
                                                                                                      ),
                                                                                                0 ===
                                                                                                    L &&
                                                                                                    c.copy(
                                                                                                        n
                                                                                                    );
                                                                                        break;
                                                                                    case "H":
                                                                                        for (
                                                                                            var k = 0,
                                                                                                T =
                                                                                                    (y =
                                                                                                        d(
                                                                                                            C
                                                                                                        ))
                                                                                                        .length;
                                                                                            k <
                                                                                            T;
                                                                                            k++
                                                                                        )
                                                                                            (n.x =
                                                                                                y[
                                                                                                    k
                                                                                                ]),
                                                                                                (r.x =
                                                                                                    n.x),
                                                                                                (r.y =
                                                                                                    n.y),
                                                                                                path.lineTo(
                                                                                                    n.x,
                                                                                                    n.y
                                                                                                ),
                                                                                                0 ===
                                                                                                    k &&
                                                                                                    !0 ===
                                                                                                        v &&
                                                                                                    c.copy(
                                                                                                        n
                                                                                                    );
                                                                                        break;
                                                                                    case "V":
                                                                                        for (
                                                                                            var S = 0,
                                                                                                P =
                                                                                                    (y =
                                                                                                        d(
                                                                                                            C
                                                                                                        ))
                                                                                                        .length;
                                                                                            S <
                                                                                            P;
                                                                                            S++
                                                                                        )
                                                                                            (n.y =
                                                                                                y[
                                                                                                    S
                                                                                                ]),
                                                                                                (r.x =
                                                                                                    n.x),
                                                                                                (r.y =
                                                                                                    n.y),
                                                                                                path.lineTo(
                                                                                                    n.x,
                                                                                                    n.y
                                                                                                ),
                                                                                                0 ===
                                                                                                    S &&
                                                                                                    !0 ===
                                                                                                        v &&
                                                                                                    c.copy(
                                                                                                        n
                                                                                                    );
                                                                                        break;
                                                                                    case "L":
                                                                                        for (
                                                                                            var E = 0,
                                                                                                D =
                                                                                                    (y =
                                                                                                        d(
                                                                                                            C
                                                                                                        ))
                                                                                                        .length;
                                                                                            E <
                                                                                            D;
                                                                                            E += 2
                                                                                        )
                                                                                            (n.x =
                                                                                                y[
                                                                                                    E +
                                                                                                        0
                                                                                                ]),
                                                                                                (n.y =
                                                                                                    y[
                                                                                                        E +
                                                                                                            1
                                                                                                    ]),
                                                                                                (r.x =
                                                                                                    n.x),
                                                                                                (r.y =
                                                                                                    n.y),
                                                                                                path.lineTo(
                                                                                                    n.x,
                                                                                                    n.y
                                                                                                ),
                                                                                                0 ===
                                                                                                    E &&
                                                                                                    !0 ===
                                                                                                        v &&
                                                                                                    c.copy(
                                                                                                        n
                                                                                                    );
                                                                                        break;
                                                                                    case "C":
                                                                                        for (
                                                                                            var I = 0,
                                                                                                O =
                                                                                                    (y =
                                                                                                        d(
                                                                                                            C
                                                                                                        ))
                                                                                                        .length;
                                                                                            I <
                                                                                            O;
                                                                                            I += 6
                                                                                        )
                                                                                            path.bezierCurveTo(
                                                                                                y[
                                                                                                    I +
                                                                                                        0
                                                                                                ],
                                                                                                y[
                                                                                                    I +
                                                                                                        1
                                                                                                ],
                                                                                                y[
                                                                                                    I +
                                                                                                        2
                                                                                                ],
                                                                                                y[
                                                                                                    I +
                                                                                                        3
                                                                                                ],
                                                                                                y[
                                                                                                    I +
                                                                                                        4
                                                                                                ],
                                                                                                y[
                                                                                                    I +
                                                                                                        5
                                                                                                ]
                                                                                            ),
                                                                                                (r.x =
                                                                                                    y[
                                                                                                        I +
                                                                                                            2
                                                                                                    ]),
                                                                                                (r.y =
                                                                                                    y[
                                                                                                        I +
                                                                                                            3
                                                                                                    ]),
                                                                                                (n.x =
                                                                                                    y[
                                                                                                        I +
                                                                                                            4
                                                                                                    ]),
                                                                                                (n.y =
                                                                                                    y[
                                                                                                        I +
                                                                                                            5
                                                                                                    ]),
                                                                                                0 ===
                                                                                                    I &&
                                                                                                    !0 ===
                                                                                                        v &&
                                                                                                    c.copy(
                                                                                                        n
                                                                                                    );
                                                                                        break;
                                                                                    case "S":
                                                                                        for (
                                                                                            var _ = 0,
                                                                                                G =
                                                                                                    (y =
                                                                                                        d(
                                                                                                            C
                                                                                                        ))
                                                                                                        .length;
                                                                                            _ <
                                                                                            G;
                                                                                            _ += 4
                                                                                        )
                                                                                            path.bezierCurveTo(
                                                                                                l(
                                                                                                    n.x,
                                                                                                    r.x
                                                                                                ),
                                                                                                l(
                                                                                                    n.y,
                                                                                                    r.y
                                                                                                ),
                                                                                                y[
                                                                                                    _ +
                                                                                                        0
                                                                                                ],
                                                                                                y[
                                                                                                    _ +
                                                                                                        1
                                                                                                ],
                                                                                                y[
                                                                                                    _ +
                                                                                                        2
                                                                                                ],
                                                                                                y[
                                                                                                    _ +
                                                                                                        3
                                                                                                ]
                                                                                            ),
                                                                                                (r.x =
                                                                                                    y[
                                                                                                        _ +
                                                                                                            0
                                                                                                    ]),
                                                                                                (r.y =
                                                                                                    y[
                                                                                                        _ +
                                                                                                            1
                                                                                                    ]),
                                                                                                (n.x =
                                                                                                    y[
                                                                                                        _ +
                                                                                                            2
                                                                                                    ]),
                                                                                                (n.y =
                                                                                                    y[
                                                                                                        _ +
                                                                                                            3
                                                                                                    ]),
                                                                                                0 ===
                                                                                                    _ &&
                                                                                                    !0 ===
                                                                                                        v &&
                                                                                                    c.copy(
                                                                                                        n
                                                                                                    );
                                                                                        break;
                                                                                    case "Q":
                                                                                        for (
                                                                                            var R = 0,
                                                                                                B =
                                                                                                    (y =
                                                                                                        d(
                                                                                                            C
                                                                                                        ))
                                                                                                        .length;
                                                                                            R <
                                                                                            B;
                                                                                            R += 4
                                                                                        )
                                                                                            path.quadraticCurveTo(
                                                                                                y[
                                                                                                    R +
                                                                                                        0
                                                                                                ],
                                                                                                y[
                                                                                                    R +
                                                                                                        1
                                                                                                ],
                                                                                                y[
                                                                                                    R +
                                                                                                        2
                                                                                                ],
                                                                                                y[
                                                                                                    R +
                                                                                                        3
                                                                                                ]
                                                                                            ),
                                                                                                (r.x =
                                                                                                    y[
                                                                                                        R +
                                                                                                            0
                                                                                                    ]),
                                                                                                (r.y =
                                                                                                    y[
                                                                                                        R +
                                                                                                            1
                                                                                                    ]),
                                                                                                (n.x =
                                                                                                    y[
                                                                                                        R +
                                                                                                            2
                                                                                                    ]),
                                                                                                (n.y =
                                                                                                    y[
                                                                                                        R +
                                                                                                            3
                                                                                                    ]),
                                                                                                0 ===
                                                                                                    R &&
                                                                                                    !0 ===
                                                                                                        v &&
                                                                                                    c.copy(
                                                                                                        n
                                                                                                    );
                                                                                        break;
                                                                                    case "T":
                                                                                        for (
                                                                                            var A = 0,
                                                                                                z =
                                                                                                    (y =
                                                                                                        d(
                                                                                                            C
                                                                                                        ))
                                                                                                        .length;
                                                                                            A <
                                                                                            z;
                                                                                            A += 2
                                                                                        ) {
                                                                                            var j =
                                                                                                    l(
                                                                                                        n.x,
                                                                                                        r.x
                                                                                                    ),
                                                                                                U =
                                                                                                    l(
                                                                                                        n.y,
                                                                                                        r.y
                                                                                                    );
                                                                                            path.quadraticCurveTo(
                                                                                                j,
                                                                                                U,
                                                                                                y[
                                                                                                    A +
                                                                                                        0
                                                                                                ],
                                                                                                y[
                                                                                                    A +
                                                                                                        1
                                                                                                ]
                                                                                            ),
                                                                                                (r.x =
                                                                                                    j),
                                                                                                (r.y =
                                                                                                    U),
                                                                                                (n.x =
                                                                                                    y[
                                                                                                        A +
                                                                                                            0
                                                                                                    ]),
                                                                                                (n.y =
                                                                                                    y[
                                                                                                        A +
                                                                                                            1
                                                                                                    ]),
                                                                                                0 ===
                                                                                                    A &&
                                                                                                    !0 ===
                                                                                                        v &&
                                                                                                    c.copy(
                                                                                                        n
                                                                                                    );
                                                                                        }
                                                                                        break;
                                                                                    case "A":
                                                                                        for (
                                                                                            var N = 0,
                                                                                                W =
                                                                                                    (y =
                                                                                                        d(
                                                                                                            C,
                                                                                                            [
                                                                                                                3,
                                                                                                                4,
                                                                                                            ],
                                                                                                            7
                                                                                                        ))
                                                                                                        .length;
                                                                                            N <
                                                                                            W;
                                                                                            N += 7
                                                                                        )
                                                                                            if (
                                                                                                y[
                                                                                                    N +
                                                                                                        5
                                                                                                ] !=
                                                                                                    n.x ||
                                                                                                y[
                                                                                                    N +
                                                                                                        6
                                                                                                ] !=
                                                                                                    n.y
                                                                                            ) {
                                                                                                var V =
                                                                                                    n.clone();
                                                                                                (n.x =
                                                                                                    y[
                                                                                                        N +
                                                                                                            5
                                                                                                    ]),
                                                                                                    (n.y =
                                                                                                        y[
                                                                                                            N +
                                                                                                                6
                                                                                                        ]),
                                                                                                    (r.x =
                                                                                                        n.x),
                                                                                                    (r.y =
                                                                                                        n.y),
                                                                                                    t(
                                                                                                        path,
                                                                                                        y[
                                                                                                            N
                                                                                                        ],
                                                                                                        y[
                                                                                                            N +
                                                                                                                1
                                                                                                        ],
                                                                                                        y[
                                                                                                            N +
                                                                                                                2
                                                                                                        ],
                                                                                                        y[
                                                                                                            N +
                                                                                                                3
                                                                                                        ],
                                                                                                        y[
                                                                                                            N +
                                                                                                                4
                                                                                                        ],
                                                                                                        V,
                                                                                                        n
                                                                                                    ),
                                                                                                    0 ===
                                                                                                        N &&
                                                                                                        !0 ===
                                                                                                            v &&
                                                                                                        c.copy(
                                                                                                            n
                                                                                                        );
                                                                                            }
                                                                                        break;
                                                                                    case "m":
                                                                                        for (
                                                                                            var Z = 0,
                                                                                                F =
                                                                                                    (y =
                                                                                                        d(
                                                                                                            C
                                                                                                        ))
                                                                                                        .length;
                                                                                            Z <
                                                                                            F;
                                                                                            Z += 2
                                                                                        )
                                                                                            (n.x +=
                                                                                                y[
                                                                                                    Z +
                                                                                                        0
                                                                                                ]),
                                                                                                (n.y +=
                                                                                                    y[
                                                                                                        Z +
                                                                                                            1
                                                                                                    ]),
                                                                                                (r.x =
                                                                                                    n.x),
                                                                                                (r.y =
                                                                                                    n.y),
                                                                                                0 ===
                                                                                                Z
                                                                                                    ? path.moveTo(
                                                                                                          n.x,
                                                                                                          n.y
                                                                                                      )
                                                                                                    : path.lineTo(
                                                                                                          n.x,
                                                                                                          n.y
                                                                                                      ),
                                                                                                0 ===
                                                                                                    Z &&
                                                                                                    c.copy(
                                                                                                        n
                                                                                                    );
                                                                                        break;
                                                                                    case "h":
                                                                                        for (
                                                                                            var Y = 0,
                                                                                                H =
                                                                                                    (y =
                                                                                                        d(
                                                                                                            C
                                                                                                        ))
                                                                                                        .length;
                                                                                            Y <
                                                                                            H;
                                                                                            Y++
                                                                                        )
                                                                                            (n.x +=
                                                                                                y[
                                                                                                    Y
                                                                                                ]),
                                                                                                (r.x =
                                                                                                    n.x),
                                                                                                (r.y =
                                                                                                    n.y),
                                                                                                path.lineTo(
                                                                                                    n.x,
                                                                                                    n.y
                                                                                                ),
                                                                                                0 ===
                                                                                                    Y &&
                                                                                                    !0 ===
                                                                                                        v &&
                                                                                                    c.copy(
                                                                                                        n
                                                                                                    );
                                                                                        break;
                                                                                    case "v":
                                                                                        for (
                                                                                            var X = 0,
                                                                                                $ =
                                                                                                    (y =
                                                                                                        d(
                                                                                                            C
                                                                                                        ))
                                                                                                        .length;
                                                                                            X <
                                                                                            $;
                                                                                            X++
                                                                                        )
                                                                                            (n.y +=
                                                                                                y[
                                                                                                    X
                                                                                                ]),
                                                                                                (r.x =
                                                                                                    n.x),
                                                                                                (r.y =
                                                                                                    n.y),
                                                                                                path.lineTo(
                                                                                                    n.x,
                                                                                                    n.y
                                                                                                ),
                                                                                                0 ===
                                                                                                    X &&
                                                                                                    !0 ===
                                                                                                        v &&
                                                                                                    c.copy(
                                                                                                        n
                                                                                                    );
                                                                                        break;
                                                                                    case "l":
                                                                                        for (
                                                                                            var Q = 0,
                                                                                                K =
                                                                                                    (y =
                                                                                                        d(
                                                                                                            C
                                                                                                        ))
                                                                                                        .length;
                                                                                            Q <
                                                                                            K;
                                                                                            Q += 2
                                                                                        )
                                                                                            (n.x +=
                                                                                                y[
                                                                                                    Q +
                                                                                                        0
                                                                                                ]),
                                                                                                (n.y +=
                                                                                                    y[
                                                                                                        Q +
                                                                                                            1
                                                                                                    ]),
                                                                                                (r.x =
                                                                                                    n.x),
                                                                                                (r.y =
                                                                                                    n.y),
                                                                                                path.lineTo(
                                                                                                    n.x,
                                                                                                    n.y
                                                                                                ),
                                                                                                0 ===
                                                                                                    Q &&
                                                                                                    !0 ===
                                                                                                        v &&
                                                                                                    c.copy(
                                                                                                        n
                                                                                                    );
                                                                                        break;
                                                                                    case "c":
                                                                                        for (
                                                                                            var J = 0,
                                                                                                ee =
                                                                                                    (y =
                                                                                                        d(
                                                                                                            C
                                                                                                        ))
                                                                                                        .length;
                                                                                            J <
                                                                                            ee;
                                                                                            J += 6
                                                                                        )
                                                                                            path.bezierCurveTo(
                                                                                                n.x +
                                                                                                    y[
                                                                                                        J +
                                                                                                            0
                                                                                                    ],
                                                                                                n.y +
                                                                                                    y[
                                                                                                        J +
                                                                                                            1
                                                                                                    ],
                                                                                                n.x +
                                                                                                    y[
                                                                                                        J +
                                                                                                            2
                                                                                                    ],
                                                                                                n.y +
                                                                                                    y[
                                                                                                        J +
                                                                                                            3
                                                                                                    ],
                                                                                                n.x +
                                                                                                    y[
                                                                                                        J +
                                                                                                            4
                                                                                                    ],
                                                                                                n.y +
                                                                                                    y[
                                                                                                        J +
                                                                                                            5
                                                                                                    ]
                                                                                            ),
                                                                                                (r.x =
                                                                                                    n.x +
                                                                                                    y[
                                                                                                        J +
                                                                                                            2
                                                                                                    ]),
                                                                                                (r.y =
                                                                                                    n.y +
                                                                                                    y[
                                                                                                        J +
                                                                                                            3
                                                                                                    ]),
                                                                                                (n.x +=
                                                                                                    y[
                                                                                                        J +
                                                                                                            4
                                                                                                    ]),
                                                                                                (n.y +=
                                                                                                    y[
                                                                                                        J +
                                                                                                            5
                                                                                                    ]),
                                                                                                0 ===
                                                                                                    J &&
                                                                                                    !0 ===
                                                                                                        v &&
                                                                                                    c.copy(
                                                                                                        n
                                                                                                    );
                                                                                        break;
                                                                                    case "s":
                                                                                        for (
                                                                                            var te = 0,
                                                                                                ne =
                                                                                                    (y =
                                                                                                        d(
                                                                                                            C
                                                                                                        ))
                                                                                                        .length;
                                                                                            te <
                                                                                            ne;
                                                                                            te += 4
                                                                                        )
                                                                                            path.bezierCurveTo(
                                                                                                l(
                                                                                                    n.x,
                                                                                                    r.x
                                                                                                ),
                                                                                                l(
                                                                                                    n.y,
                                                                                                    r.y
                                                                                                ),
                                                                                                n.x +
                                                                                                    y[
                                                                                                        te +
                                                                                                            0
                                                                                                    ],
                                                                                                n.y +
                                                                                                    y[
                                                                                                        te +
                                                                                                            1
                                                                                                    ],
                                                                                                n.x +
                                                                                                    y[
                                                                                                        te +
                                                                                                            2
                                                                                                    ],
                                                                                                n.y +
                                                                                                    y[
                                                                                                        te +
                                                                                                            3
                                                                                                    ]
                                                                                            ),
                                                                                                (r.x =
                                                                                                    n.x +
                                                                                                    y[
                                                                                                        te +
                                                                                                            0
                                                                                                    ]),
                                                                                                (r.y =
                                                                                                    n.y +
                                                                                                    y[
                                                                                                        te +
                                                                                                            1
                                                                                                    ]),
                                                                                                (n.x +=
                                                                                                    y[
                                                                                                        te +
                                                                                                            2
                                                                                                    ]),
                                                                                                (n.y +=
                                                                                                    y[
                                                                                                        te +
                                                                                                            3
                                                                                                    ]),
                                                                                                0 ===
                                                                                                    te &&
                                                                                                    !0 ===
                                                                                                        v &&
                                                                                                    c.copy(
                                                                                                        n
                                                                                                    );
                                                                                        break;
                                                                                    case "q":
                                                                                        for (
                                                                                            var re = 0,
                                                                                                ie =
                                                                                                    (y =
                                                                                                        d(
                                                                                                            C
                                                                                                        ))
                                                                                                        .length;
                                                                                            re <
                                                                                            ie;
                                                                                            re += 4
                                                                                        )
                                                                                            path.quadraticCurveTo(
                                                                                                n.x +
                                                                                                    y[
                                                                                                        re +
                                                                                                            0
                                                                                                    ],
                                                                                                n.y +
                                                                                                    y[
                                                                                                        re +
                                                                                                            1
                                                                                                    ],
                                                                                                n.x +
                                                                                                    y[
                                                                                                        re +
                                                                                                            2
                                                                                                    ],
                                                                                                n.y +
                                                                                                    y[
                                                                                                        re +
                                                                                                            3
                                                                                                    ]
                                                                                            ),
                                                                                                (r.x =
                                                                                                    n.x +
                                                                                                    y[
                                                                                                        re +
                                                                                                            0
                                                                                                    ]),
                                                                                                (r.y =
                                                                                                    n.y +
                                                                                                    y[
                                                                                                        re +
                                                                                                            1
                                                                                                    ]),
                                                                                                (n.x +=
                                                                                                    y[
                                                                                                        re +
                                                                                                            2
                                                                                                    ]),
                                                                                                (n.y +=
                                                                                                    y[
                                                                                                        re +
                                                                                                            3
                                                                                                    ]),
                                                                                                0 ===
                                                                                                    re &&
                                                                                                    !0 ===
                                                                                                        v &&
                                                                                                    c.copy(
                                                                                                        n
                                                                                                    );
                                                                                        break;
                                                                                    case "t":
                                                                                        for (
                                                                                            var oe = 0,
                                                                                                ae =
                                                                                                    (y =
                                                                                                        d(
                                                                                                            C
                                                                                                        ))
                                                                                                        .length;
                                                                                            oe <
                                                                                            ae;
                                                                                            oe += 2
                                                                                        ) {
                                                                                            var se =
                                                                                                    l(
                                                                                                        n.x,
                                                                                                        r.x
                                                                                                    ),
                                                                                                le =
                                                                                                    l(
                                                                                                        n.y,
                                                                                                        r.y
                                                                                                    );
                                                                                            path.quadraticCurveTo(
                                                                                                se,
                                                                                                le,
                                                                                                n.x +
                                                                                                    y[
                                                                                                        oe +
                                                                                                            0
                                                                                                    ],
                                                                                                n.y +
                                                                                                    y[
                                                                                                        oe +
                                                                                                            1
                                                                                                    ]
                                                                                            ),
                                                                                                (r.x =
                                                                                                    se),
                                                                                                (r.y =
                                                                                                    le),
                                                                                                (n.x =
                                                                                                    n.x +
                                                                                                    y[
                                                                                                        oe +
                                                                                                            0
                                                                                                    ]),
                                                                                                (n.y =
                                                                                                    n.y +
                                                                                                    y[
                                                                                                        oe +
                                                                                                            1
                                                                                                    ]),
                                                                                                0 ===
                                                                                                    oe &&
                                                                                                    !0 ===
                                                                                                        v &&
                                                                                                    c.copy(
                                                                                                        n
                                                                                                    );
                                                                                        }
                                                                                        break;
                                                                                    case "a":
                                                                                        for (
                                                                                            var de = 0,
                                                                                                ce =
                                                                                                    (y =
                                                                                                        d(
                                                                                                            C,
                                                                                                            [
                                                                                                                3,
                                                                                                                4,
                                                                                                            ],
                                                                                                            7
                                                                                                        ))
                                                                                                        .length;
                                                                                            de <
                                                                                            ce;
                                                                                            de += 7
                                                                                        )
                                                                                            if (
                                                                                                0 !=
                                                                                                    y[
                                                                                                        de +
                                                                                                            5
                                                                                                    ] ||
                                                                                                0 !=
                                                                                                    y[
                                                                                                        de +
                                                                                                            6
                                                                                                    ]
                                                                                            ) {
                                                                                                var ue =
                                                                                                    n.clone();
                                                                                                (n.x +=
                                                                                                    y[
                                                                                                        de +
                                                                                                            5
                                                                                                    ]),
                                                                                                    (n.y +=
                                                                                                        y[
                                                                                                            de +
                                                                                                                6
                                                                                                        ]),
                                                                                                    (r.x =
                                                                                                        n.x),
                                                                                                    (r.y =
                                                                                                        n.y),
                                                                                                    t(
                                                                                                        path,
                                                                                                        y[
                                                                                                            de
                                                                                                        ],
                                                                                                        y[
                                                                                                            de +
                                                                                                                1
                                                                                                        ],
                                                                                                        y[
                                                                                                            de +
                                                                                                                2
                                                                                                        ],
                                                                                                        y[
                                                                                                            de +
                                                                                                                3
                                                                                                        ],
                                                                                                        y[
                                                                                                            de +
                                                                                                                4
                                                                                                        ],
                                                                                                        ue,
                                                                                                        n
                                                                                                    ),
                                                                                                    0 ===
                                                                                                        de &&
                                                                                                        !0 ===
                                                                                                            v &&
                                                                                                        c.copy(
                                                                                                            n
                                                                                                        );
                                                                                            }
                                                                                        break;
                                                                                    case "Z":
                                                                                    case "z":
                                                                                        (path.currentPath.autoClose =
                                                                                            !0),
                                                                                            path
                                                                                                .currentPath
                                                                                                .curves
                                                                                                .length >
                                                                                                0 &&
                                                                                                (n.copy(
                                                                                                    c
                                                                                                ),
                                                                                                path.currentPath.currentPoint.copy(
                                                                                                    n
                                                                                                ),
                                                                                                (h =
                                                                                                    !0));
                                                                                        break;
                                                                                    default:
                                                                                        console.warn(
                                                                                            w
                                                                                        );
                                                                                }
                                                                                v =
                                                                                    !1;
                                                                            }
                                                                            return path;
                                                                        })(n));
                                                            break;
                                                        case "rect":
                                                            (style = r(
                                                                n,
                                                                style
                                                            )),
                                                                (path =
                                                                    (function (
                                                                        e
                                                                    ) {
                                                                        var t =
                                                                                v(
                                                                                    e.getAttribute(
                                                                                        "x"
                                                                                    ) ||
                                                                                        0
                                                                                ),
                                                                            n =
                                                                                v(
                                                                                    e.getAttribute(
                                                                                        "y"
                                                                                    ) ||
                                                                                        0
                                                                                ),
                                                                            r =
                                                                                v(
                                                                                    e.getAttribute(
                                                                                        "rx"
                                                                                    ) ||
                                                                                        e.getAttribute(
                                                                                            "ry"
                                                                                        ) ||
                                                                                        0
                                                                                ),
                                                                            l =
                                                                                v(
                                                                                    e.getAttribute(
                                                                                        "ry"
                                                                                    ) ||
                                                                                        e.getAttribute(
                                                                                            "rx"
                                                                                        ) ||
                                                                                        0
                                                                                ),
                                                                            d =
                                                                                v(
                                                                                    e.getAttribute(
                                                                                        "width"
                                                                                    )
                                                                                ),
                                                                            c =
                                                                                v(
                                                                                    e.getAttribute(
                                                                                        "height"
                                                                                    )
                                                                                ),
                                                                            h = 0.448084975506,
                                                                            path =
                                                                                new o.V();
                                                                        path.moveTo(
                                                                            t +
                                                                                r,
                                                                            n
                                                                        ),
                                                                            path.lineTo(
                                                                                t +
                                                                                    d -
                                                                                    r,
                                                                                n
                                                                            ),
                                                                            (0 !==
                                                                                r ||
                                                                                0 !==
                                                                                    l) &&
                                                                                path.bezierCurveTo(
                                                                                    t +
                                                                                        d -
                                                                                        r *
                                                                                            h,
                                                                                    n,
                                                                                    t +
                                                                                        d,
                                                                                    n +
                                                                                        l *
                                                                                            h,
                                                                                    t +
                                                                                        d,
                                                                                    n +
                                                                                        l
                                                                                );
                                                                        path.lineTo(
                                                                            t +
                                                                                d,
                                                                            n +
                                                                                c -
                                                                                l
                                                                        ),
                                                                            (0 !==
                                                                                r ||
                                                                                0 !==
                                                                                    l) &&
                                                                                path.bezierCurveTo(
                                                                                    t +
                                                                                        d,
                                                                                    n +
                                                                                        c -
                                                                                        l *
                                                                                            h,
                                                                                    t +
                                                                                        d -
                                                                                        r *
                                                                                            h,
                                                                                    n +
                                                                                        c,
                                                                                    t +
                                                                                        d -
                                                                                        r,
                                                                                    n +
                                                                                        c
                                                                                );
                                                                        path.lineTo(
                                                                            t +
                                                                                r,
                                                                            n +
                                                                                c
                                                                        ),
                                                                            (0 !==
                                                                                r ||
                                                                                0 !==
                                                                                    l) &&
                                                                                path.bezierCurveTo(
                                                                                    t +
                                                                                        r *
                                                                                            h,
                                                                                    n +
                                                                                        c,
                                                                                    t,
                                                                                    n +
                                                                                        c -
                                                                                        l *
                                                                                            h,
                                                                                    t,
                                                                                    n +
                                                                                        c -
                                                                                        l
                                                                                );
                                                                        path.lineTo(
                                                                            t,
                                                                            n +
                                                                                l
                                                                        ),
                                                                            (0 !==
                                                                                r ||
                                                                                0 !==
                                                                                    l) &&
                                                                                path.bezierCurveTo(
                                                                                    t,
                                                                                    n +
                                                                                        l *
                                                                                            h,
                                                                                    t +
                                                                                        r *
                                                                                            h,
                                                                                    n,
                                                                                    t +
                                                                                        r,
                                                                                    n
                                                                                );
                                                                        return path;
                                                                    })(n));
                                                            break;
                                                        case "polygon":
                                                            (style = r(
                                                                n,
                                                                style
                                                            )),
                                                                (path =
                                                                    (function (
                                                                        e
                                                                    ) {
                                                                        function t(
                                                                            e,
                                                                            a,
                                                                            b
                                                                        ) {
                                                                            var t =
                                                                                    v(
                                                                                        a
                                                                                    ),
                                                                                n =
                                                                                    v(
                                                                                        b
                                                                                    );
                                                                            0 ===
                                                                            r
                                                                                ? path.moveTo(
                                                                                      t,
                                                                                      n
                                                                                  )
                                                                                : path.lineTo(
                                                                                      t,
                                                                                      n
                                                                                  ),
                                                                                r++;
                                                                        }
                                                                        var n =
                                                                                /(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,
                                                                            path =
                                                                                new o.V(),
                                                                            r = 0;
                                                                        return (
                                                                            e
                                                                                .getAttribute(
                                                                                    "points"
                                                                                )
                                                                                .replace(
                                                                                    n,
                                                                                    t
                                                                                ),
                                                                            (path.currentPath.autoClose =
                                                                                !0),
                                                                            path
                                                                        );
                                                                    })(n));
                                                            break;
                                                        case "polyline":
                                                            (style = r(
                                                                n,
                                                                style
                                                            )),
                                                                (path =
                                                                    (function (
                                                                        e
                                                                    ) {
                                                                        function t(
                                                                            e,
                                                                            a,
                                                                            b
                                                                        ) {
                                                                            var t =
                                                                                    v(
                                                                                        a
                                                                                    ),
                                                                                n =
                                                                                    v(
                                                                                        b
                                                                                    );
                                                                            0 ===
                                                                            r
                                                                                ? path.moveTo(
                                                                                      t,
                                                                                      n
                                                                                  )
                                                                                : path.lineTo(
                                                                                      t,
                                                                                      n
                                                                                  ),
                                                                                r++;
                                                                        }
                                                                        var n =
                                                                                /(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,
                                                                            path =
                                                                                new o.V(),
                                                                            r = 0;
                                                                        return (
                                                                            e
                                                                                .getAttribute(
                                                                                    "points"
                                                                                )
                                                                                .replace(
                                                                                    n,
                                                                                    t
                                                                                ),
                                                                            (path.currentPath.autoClose =
                                                                                !1),
                                                                            path
                                                                        );
                                                                    })(n));
                                                            break;
                                                        case "circle":
                                                            (style = r(
                                                                n,
                                                                style
                                                            )),
                                                                (path =
                                                                    (function (
                                                                        e
                                                                    ) {
                                                                        var t =
                                                                                v(
                                                                                    e.getAttribute(
                                                                                        "cx"
                                                                                    ) ||
                                                                                        0
                                                                                ),
                                                                            n =
                                                                                v(
                                                                                    e.getAttribute(
                                                                                        "cy"
                                                                                    ) ||
                                                                                        0
                                                                                ),
                                                                            r =
                                                                                v(
                                                                                    e.getAttribute(
                                                                                        "r"
                                                                                    ) ||
                                                                                        0
                                                                                ),
                                                                            l =
                                                                                new o.I();
                                                                        l.absarc(
                                                                            t,
                                                                            n,
                                                                            r,
                                                                            0,
                                                                            2 *
                                                                                Math.PI
                                                                        );
                                                                        var path =
                                                                            new o.V();
                                                                        return (
                                                                            path.subPaths.push(
                                                                                l
                                                                            ),
                                                                            path
                                                                        );
                                                                    })(n));
                                                            break;
                                                        case "ellipse":
                                                            (style = r(
                                                                n,
                                                                style
                                                            )),
                                                                (path =
                                                                    (function (
                                                                        e
                                                                    ) {
                                                                        var t =
                                                                                v(
                                                                                    e.getAttribute(
                                                                                        "cx"
                                                                                    ) ||
                                                                                        0
                                                                                ),
                                                                            n =
                                                                                v(
                                                                                    e.getAttribute(
                                                                                        "cy"
                                                                                    ) ||
                                                                                        0
                                                                                ),
                                                                            r =
                                                                                v(
                                                                                    e.getAttribute(
                                                                                        "rx"
                                                                                    ) ||
                                                                                        0
                                                                                ),
                                                                            l =
                                                                                v(
                                                                                    e.getAttribute(
                                                                                        "ry"
                                                                                    ) ||
                                                                                        0
                                                                                ),
                                                                            d =
                                                                                new o.I();
                                                                        d.absellipse(
                                                                            t,
                                                                            n,
                                                                            r,
                                                                            l,
                                                                            0,
                                                                            2 *
                                                                                Math.PI
                                                                        );
                                                                        var path =
                                                                            new o.V();
                                                                        return (
                                                                            path.subPaths.push(
                                                                                d
                                                                            ),
                                                                            path
                                                                        );
                                                                    })(n));
                                                            break;
                                                        case "line":
                                                            (style = r(
                                                                n,
                                                                style
                                                            )),
                                                                (path =
                                                                    (function (
                                                                        e
                                                                    ) {
                                                                        var t =
                                                                                v(
                                                                                    e.getAttribute(
                                                                                        "x1"
                                                                                    ) ||
                                                                                        0
                                                                                ),
                                                                            n =
                                                                                v(
                                                                                    e.getAttribute(
                                                                                        "y1"
                                                                                    ) ||
                                                                                        0
                                                                                ),
                                                                            r =
                                                                                v(
                                                                                    e.getAttribute(
                                                                                        "x2"
                                                                                    ) ||
                                                                                        0
                                                                                ),
                                                                            l =
                                                                                v(
                                                                                    e.getAttribute(
                                                                                        "y2"
                                                                                    ) ||
                                                                                        0
                                                                                ),
                                                                            path =
                                                                                new o.V();
                                                                        return (
                                                                            path.moveTo(
                                                                                t,
                                                                                n
                                                                            ),
                                                                            path.lineTo(
                                                                                r,
                                                                                l
                                                                            ),
                                                                            (path.currentPath.autoClose =
                                                                                !1),
                                                                            path
                                                                        );
                                                                    })(n));
                                                            break;
                                                        case "defs":
                                                            h = !0;
                                                            break;
                                                        case "use":
                                                            style = r(n, style);
                                                            var E = (
                                                                    n.getAttributeNS(
                                                                        "http://www.w3.org/1999/xlink",
                                                                        "href"
                                                                    ) || ""
                                                                ).substring(1),
                                                                D =
                                                                    n.viewportElement.getElementById(
                                                                        E
                                                                    );
                                                            D
                                                                ? e(D, style)
                                                                : console.warn(
                                                                      "SVGLoader: 'use node' references non-existent node id: " +
                                                                          E
                                                                  );
                                                    }
                                                    path &&
                                                        (void 0 !==
                                                            style.fill &&
                                                            "none" !==
                                                                style.fill &&
                                                            path.color.setStyle(
                                                                style.fill
                                                            ),
                                                        (function (path, e) {
                                                            function t(t) {
                                                                S.set(
                                                                    t.x,
                                                                    t.y,
                                                                    1
                                                                ).applyMatrix3(
                                                                    e
                                                                ),
                                                                    t.set(
                                                                        S.x,
                                                                        S.y
                                                                    );
                                                            }
                                                            for (
                                                                var n =
                                                                        (function (
                                                                            e
                                                                        ) {
                                                                            return (
                                                                                0 !==
                                                                                    e
                                                                                        .elements[1] ||
                                                                                0 !==
                                                                                    e
                                                                                        .elements[3]
                                                                            );
                                                                        })(e),
                                                                    r =
                                                                        path.subPaths,
                                                                    i = 0,
                                                                    o =
                                                                        r.length;
                                                                i < o;
                                                                i++
                                                            )
                                                                for (
                                                                    var l =
                                                                            r[i]
                                                                                .curves,
                                                                        d = 0;
                                                                    d <
                                                                    l.length;
                                                                    d++
                                                                ) {
                                                                    var c =
                                                                        l[d];
                                                                    c.isLineCurve
                                                                        ? (t(
                                                                              c.v1
                                                                          ),
                                                                          t(
                                                                              c.v2
                                                                          ))
                                                                        : c.isCubicBezierCurve
                                                                        ? (t(
                                                                              c.v0
                                                                          ),
                                                                          t(
                                                                              c.v1
                                                                          ),
                                                                          t(
                                                                              c.v2
                                                                          ),
                                                                          t(
                                                                              c.v3
                                                                          ))
                                                                        : c.isQuadraticBezierCurve
                                                                        ? (t(
                                                                              c.v0
                                                                          ),
                                                                          t(
                                                                              c.v1
                                                                          ),
                                                                          t(
                                                                              c.v2
                                                                          ))
                                                                        : c.isEllipseCurve &&
                                                                          (n &&
                                                                              console.warn(
                                                                                  "SVGLoader: Elliptic arc or ellipse rotation or skewing is not implemented."
                                                                              ),
                                                                          T.set(
                                                                              c.aX,
                                                                              c.aY
                                                                          ),
                                                                          t(T),
                                                                          (c.aX =
                                                                              T.x),
                                                                          (c.aY =
                                                                              T.y),
                                                                          (c.xRadius *=
                                                                              f(
                                                                                  e
                                                                              )),
                                                                          (c.yRadius *=
                                                                              m(
                                                                                  e
                                                                              )));
                                                                }
                                                        })(path, P),
                                                        w.push(path),
                                                        (path.userData = {
                                                            node: n,
                                                            style: style,
                                                        }));
                                                    for (
                                                        var I = n.childNodes,
                                                            i = 0;
                                                        i < I.length;
                                                        i++
                                                    ) {
                                                        var O = I[i];
                                                        (h &&
                                                            "style" !==
                                                                O.nodeName &&
                                                            "defs" !==
                                                                O.nodeName) ||
                                                            e(O, style);
                                                    }
                                                    c &&
                                                        (C.pop(),
                                                        C.length > 0
                                                            ? P.copy(
                                                                  C[
                                                                      C.length -
                                                                          1
                                                                  ]
                                                              )
                                                            : P.identity());
                                                }
                                            })(E.documentElement, {
                                                fill: "#000",
                                                fillOpacity: 1,
                                                strokeOpacity: 1,
                                                strokeWidth: 1,
                                                strokeLineJoin: "miter",
                                                strokeLineCap: "butt",
                                                strokeMiterLimit: 4,
                                            }),
                                            {
                                                paths: w,
                                                xml: E.documentElement,
                                            }
                                        );
                                    },
                                },
                            ],
                            [
                                {
                                    key: "createShapes",
                                    value: function (e) {
                                        var t = 999999999,
                                            n = 0,
                                            r = 1,
                                            l = 2,
                                            d = 3,
                                            c = 4,
                                            h = 5,
                                            v = 6,
                                            f = {
                                                loc: n,
                                                t: 0,
                                            };
                                        function m(e, t, r, o) {
                                            var d = e.x,
                                                c = t.x,
                                                h = r.x,
                                                v = o.x,
                                                m = e.y,
                                                x = t.y,
                                                C = r.y,
                                                y = o.y,
                                                L =
                                                    (v - h) * (m - C) -
                                                    (y - C) * (d - h),
                                                M =
                                                    (y - C) * (c - d) -
                                                    (v - h) * (x - m),
                                                k = L / M,
                                                T =
                                                    ((c - d) * (m - C) -
                                                        (x - m) * (d - h)) /
                                                    M;
                                            if (
                                                (0 === M && 0 !== L) ||
                                                k <= 0 ||
                                                k >= 1 ||
                                                T < 0 ||
                                                T > 1
                                            )
                                                return null;
                                            if (0 === L && 0 === M) {
                                                for (var i = 0; i < 2; i++) {
                                                    if (
                                                        (w(
                                                            0 === i ? r : o,
                                                            e,
                                                            t
                                                        ),
                                                        f.loc == n)
                                                    ) {
                                                        var S = 0 === i ? r : o;
                                                        return {
                                                            x: S.x,
                                                            y: S.y,
                                                            t: f.t,
                                                        };
                                                    }
                                                    if (f.loc == l)
                                                        return {
                                                            x: +(
                                                                d +
                                                                f.t * (c - d)
                                                            ).toPrecision(10),
                                                            y: +(
                                                                m +
                                                                f.t * (x - m)
                                                            ).toPrecision(10),
                                                            t: f.t,
                                                        };
                                                }
                                                return null;
                                            }
                                            for (var P = 0; P < 2; P++)
                                                if (
                                                    (w(0 === P ? r : o, e, t),
                                                    f.loc == n)
                                                ) {
                                                    var E = 0 === P ? r : o;
                                                    return {
                                                        x: E.x,
                                                        y: E.y,
                                                        t: f.t,
                                                    };
                                                }
                                            return {
                                                x: +(
                                                    d +
                                                    k * (c - d)
                                                ).toPrecision(10),
                                                y: +(
                                                    m +
                                                    k * (x - m)
                                                ).toPrecision(10),
                                                t: k,
                                            };
                                        }
                                        function w(p, e, t) {
                                            var o,
                                                m = t.x - e.x,
                                                w = t.y - e.y,
                                                x = p.x - e.x,
                                                C = p.y - e.y,
                                                y = m * C - x * w;
                                            if (p.x === e.x && p.y === e.y)
                                                return (
                                                    (f.loc = n), void (f.t = 0)
                                                );
                                            if (p.x === t.x && p.y === t.y)
                                                return (
                                                    (f.loc = r), void (f.t = 1)
                                                );
                                            y < -Number.EPSILON
                                                ? (f.loc = d)
                                                : y > Number.EPSILON
                                                ? (f.loc = c)
                                                : m * x < 0 || w * C < 0
                                                ? (f.loc = h)
                                                : Math.sqrt(m * m + w * w) <
                                                  Math.sqrt(x * x + C * C)
                                                ? (f.loc = v)
                                                : ((o =
                                                      0 !== m ? x / m : C / w),
                                                  (f.loc = l),
                                                  (f.t = o));
                                        }
                                        function x(e, t, n) {
                                            var r = new o.cb();
                                            t.getCenter(r);
                                            var l = [];
                                            return (
                                                n.forEach(function (path) {
                                                    path.boundingBox.containsPoint(
                                                        r
                                                    ) &&
                                                        (function (e, t) {
                                                            for (
                                                                var n = [],
                                                                    r = [],
                                                                    l = 1;
                                                                l < e.length;
                                                                l++
                                                            )
                                                                for (
                                                                    var d =
                                                                            e[
                                                                                l -
                                                                                    1
                                                                            ],
                                                                        c =
                                                                            e[
                                                                                l
                                                                            ],
                                                                        h =
                                                                            function (
                                                                                e
                                                                            ) {
                                                                                var l =
                                                                                        t[
                                                                                            e -
                                                                                                1
                                                                                        ],
                                                                                    h =
                                                                                        t[
                                                                                            e
                                                                                        ],
                                                                                    v =
                                                                                        m(
                                                                                            d,
                                                                                            c,
                                                                                            l,
                                                                                            h
                                                                                        );
                                                                                null !==
                                                                                    v &&
                                                                                    void 0 ===
                                                                                        n.find(
                                                                                            function (
                                                                                                i
                                                                                            ) {
                                                                                                return (
                                                                                                    i.t <=
                                                                                                        v.t +
                                                                                                            Number.EPSILON &&
                                                                                                    i.t >=
                                                                                                        v.t -
                                                                                                            Number.EPSILON
                                                                                                );
                                                                                            }
                                                                                        ) &&
                                                                                    (n.push(
                                                                                        v
                                                                                    ),
                                                                                    r.push(
                                                                                        new o.cb(
                                                                                            v.x,
                                                                                            v.y
                                                                                        )
                                                                                    ));
                                                                            },
                                                                        v = 1;
                                                                    v <
                                                                    t.length;
                                                                    v++
                                                                )
                                                                    h(v);
                                                            return r;
                                                        })(
                                                            e,
                                                            path.points
                                                        ).forEach(function (p) {
                                                            l.push({
                                                                identifier:
                                                                    path.identifier,
                                                                isCW: path.isCW,
                                                                point: p,
                                                            });
                                                        });
                                                }),
                                                l.sort(function (e, t) {
                                                    return (
                                                        e.point.x - t.point.x
                                                    );
                                                }),
                                                l
                                            );
                                        }
                                        var C = 0,
                                            y = t,
                                            L = -999999999,
                                            M = e.subPaths.map(function (p) {
                                                for (
                                                    var e = p.getPoints(),
                                                        n = -999999999,
                                                        r = t,
                                                        l = -999999999,
                                                        d = t,
                                                        i = 0;
                                                    i < e.length;
                                                    i++
                                                ) {
                                                    var c = e[i];
                                                    c.y > n && (n = c.y),
                                                        c.y < r && (r = c.y),
                                                        c.x > l && (l = c.x),
                                                        c.x < d && (d = c.x);
                                                }
                                                return (
                                                    L <= l && (L = l + 1),
                                                    y >= d && (y = d - 1),
                                                    {
                                                        curves: p.curves,
                                                        points: e,
                                                        isCW: o.W.isClockWise(
                                                            e
                                                        ),
                                                        identifier: C++,
                                                        boundingBox: new o.d(
                                                            new o.cb(d, r),
                                                            new o.cb(l, n)
                                                        ),
                                                    }
                                                );
                                            }),
                                            k = (M = M.filter(function (e) {
                                                return e.points.length > 1;
                                            })).map(function (p) {
                                                var t;
                                                return (function (
                                                    e,
                                                    t,
                                                    n,
                                                    r,
                                                    l
                                                ) {
                                                    (null != l && "" !== l) ||
                                                        (l = "nonzero");
                                                    var d = new o.cb();
                                                    e.boundingBox.getCenter(d);
                                                    var c = x(
                                                        [
                                                            new o.cb(n, d.y),
                                                            new o.cb(r, d.y),
                                                        ],
                                                        e.boundingBox,
                                                        t
                                                    );
                                                    c.sort(function (e, t) {
                                                        return (
                                                            e.point.x -
                                                            t.point.x
                                                        );
                                                    });
                                                    var h = [],
                                                        v = [];
                                                    c.forEach(function (i) {
                                                        i.identifier ===
                                                        e.identifier
                                                            ? h.push(i)
                                                            : v.push(i);
                                                    });
                                                    for (
                                                        var f = h[0].point.x,
                                                            m = [],
                                                            i = 0;
                                                        i < v.length &&
                                                        v[i].point.x < f;

                                                    )
                                                        m.length > 0 &&
                                                        m[m.length - 1] ===
                                                            v[i].identifier
                                                            ? m.pop()
                                                            : m.push(
                                                                  v[i]
                                                                      .identifier
                                                              ),
                                                            i++;
                                                    if (
                                                        (m.push(e.identifier),
                                                        "evenodd" === l)
                                                    ) {
                                                        var w =
                                                                m.length % 2 ==
                                                                0,
                                                            C = m[m.length - 2];
                                                        return {
                                                            identifier:
                                                                e.identifier,
                                                            isHole: w,
                                                            for: C,
                                                        };
                                                    }
                                                    if ("nonzero" === l) {
                                                        for (
                                                            var y = !0,
                                                                L = null,
                                                                M = null,
                                                                k = 0;
                                                            k < m.length;
                                                            k++
                                                        ) {
                                                            var T = m[k];
                                                            y
                                                                ? ((M =
                                                                      t[T]
                                                                          .isCW),
                                                                  (y = !1),
                                                                  (L = T))
                                                                : M !==
                                                                      t[T]
                                                                          .isCW &&
                                                                  ((M =
                                                                      t[T]
                                                                          .isCW),
                                                                  (y = !0));
                                                        }
                                                        return {
                                                            identifier:
                                                                e.identifier,
                                                            isHole: y,
                                                            for: L,
                                                        };
                                                    }
                                                    console.warn(
                                                        'fill-rule: "' +
                                                            l +
                                                            '" is currently not implemented.'
                                                    );
                                                })(
                                                    p,
                                                    M,
                                                    y,
                                                    L,
                                                    null === (t = e.userData) ||
                                                        void 0 === t
                                                        ? void 0
                                                        : t.style.fillRule
                                                );
                                            }),
                                            T = [];
                                        return (
                                            M.forEach(function (p) {
                                                if (!k[p.identifier].isHole) {
                                                    var e = new o.U();
                                                    (e.curves = p.curves),
                                                        k
                                                            .filter(function (
                                                                e
                                                            ) {
                                                                return (
                                                                    e.isHole &&
                                                                    e.for ===
                                                                        p.identifier
                                                                );
                                                            })
                                                            .forEach(function (
                                                                t
                                                            ) {
                                                                var n =
                                                                        M[
                                                                            t
                                                                                .identifier
                                                                        ],
                                                                    path =
                                                                        new o.I();
                                                                (path.curves =
                                                                    n.curves),
                                                                    e.holes.push(
                                                                        path
                                                                    );
                                                            }),
                                                        T.push(e);
                                                }
                                            }),
                                            T
                                        );
                                    },
                                },
                                {
                                    key: "getStrokeStyle",
                                    value: function (e, t, n, r, o) {
                                        return {
                                            strokeColor: (t =
                                                void 0 !== t ? t : "#000"),
                                            strokeWidth: (e =
                                                void 0 !== e ? e : 1),
                                            strokeLineJoin: (n =
                                                void 0 !== n ? n : "miter"),
                                            strokeLineCap: (r =
                                                void 0 !== r ? r : "butt"),
                                            strokeMiterLimit: (o =
                                                void 0 !== o ? o : 4),
                                        };
                                    },
                                },
                                {
                                    key: "pointsToStroke",
                                    value: function (e, style, t, r) {
                                        var l = [],
                                            d = [],
                                            c = [];
                                        if (
                                            0 ===
                                            n.pointsToStrokeWithBuffers(
                                                e,
                                                style,
                                                t,
                                                r,
                                                l,
                                                d,
                                                c
                                            )
                                        )
                                            return null;
                                        var h = new o.g();
                                        return (
                                            h.setAttribute(
                                                "position",
                                                new o.t(l, 3)
                                            ),
                                            h.setAttribute(
                                                "normal",
                                                new o.t(d, 3)
                                            ),
                                            h.setAttribute("uv", new o.t(c, 2)),
                                            h
                                        );
                                    },
                                },
                                {
                                    key: "pointsToStrokeWithBuffers",
                                    value: function (
                                        e,
                                        style,
                                        t,
                                        n,
                                        r,
                                        l,
                                        d,
                                        c
                                    ) {
                                        var h = new o.cb(),
                                            v = new o.cb(),
                                            f = new o.cb(),
                                            m = new o.cb(),
                                            w = new o.cb(),
                                            x = new o.cb(),
                                            C = new o.cb(),
                                            y = new o.cb(),
                                            L = new o.cb(),
                                            M = new o.cb(),
                                            k = new o.cb(),
                                            T = new o.cb(),
                                            S = new o.cb(),
                                            P = new o.cb(),
                                            E = new o.cb(),
                                            D = new o.cb(),
                                            I = new o.cb();
                                        (t = void 0 !== t ? t : 12),
                                            (n = void 0 !== n ? n : 0.001),
                                            (c = void 0 !== c ? c : 0);
                                        var O = (e = (function (e) {
                                            for (
                                                var t = !1,
                                                    i = 1,
                                                    r = e.length - 1;
                                                i < r;
                                                i++
                                            )
                                                if (
                                                    e[i].distanceTo(e[i + 1]) <
                                                    n
                                                ) {
                                                    t = !0;
                                                    break;
                                                }
                                            if (!t) return e;
                                            var o = [];
                                            o.push(e[0]);
                                            for (
                                                var l = 1, d = e.length - 1;
                                                l < d;
                                                l++
                                            )
                                                e[l].distanceTo(e[l + 1]) >=
                                                    n && o.push(e[l]);
                                            return o.push(e[e.length - 1]), o;
                                        })(e)).length;
                                        if (O < 2) return 0;
                                        var _,
                                            G,
                                            R,
                                            B,
                                            A,
                                            z,
                                            j = e[0].equals(e[O - 1]),
                                            U = e[0],
                                            N = style.strokeWidth / 2,
                                            W = 1 / (O - 1),
                                            V = 0,
                                            Z = !1,
                                            F = 0,
                                            Y = 3 * c,
                                            H = 2 * c;
                                        oe(e[0], e[1], h).multiplyScalar(N),
                                            y.copy(e[0]).sub(h),
                                            L.copy(e[0]).add(h),
                                            M.copy(y),
                                            k.copy(L);
                                        for (var X = 1; X < O; X++) {
                                            (_ = e[X]),
                                                (G =
                                                    X === O - 1
                                                        ? j
                                                            ? e[1]
                                                            : void 0
                                                        : e[X + 1]);
                                            var $ = h;
                                            if (
                                                (oe(U, _, $),
                                                f.copy($).multiplyScalar(N),
                                                T.copy(_).sub(f),
                                                S.copy(_).add(f),
                                                (R = V + W),
                                                (B = !1),
                                                void 0 !== G)
                                            ) {
                                                oe(_, G, v),
                                                    f.copy(v).multiplyScalar(N),
                                                    P.copy(_).sub(f),
                                                    E.copy(_).add(f),
                                                    (A = !0),
                                                    f.subVectors(G, U),
                                                    $.dot(f) < 0 && (A = !1),
                                                    1 === X && (Z = A),
                                                    f.subVectors(G, _),
                                                    f.normalize();
                                                var Q = Math.abs($.dot(f));
                                                if (Q > Number.EPSILON) {
                                                    var K = N / Q;
                                                    f.multiplyScalar(-K),
                                                        m.subVectors(_, U),
                                                        w
                                                            .copy(m)
                                                            .setLength(K)
                                                            .add(f),
                                                        D.copy(w).negate();
                                                    var J = w.length(),
                                                        ee = m.length();
                                                    m.divideScalar(ee),
                                                        x.subVectors(G, _);
                                                    var te = x.length();
                                                    switch (
                                                        (x.divideScalar(te),
                                                        m.dot(D) < ee &&
                                                            x.dot(D) < te &&
                                                            (B = !0),
                                                        I.copy(w).add(_),
                                                        D.add(_),
                                                        (z = !1),
                                                        B
                                                            ? A
                                                                ? (E.copy(D),
                                                                  S.copy(D))
                                                                : (P.copy(D),
                                                                  T.copy(D))
                                                            : le(),
                                                        style.strokeLineJoin)
                                                    ) {
                                                        case "bevel":
                                                            de(A, B, R);
                                                            break;
                                                        case "round":
                                                            ce(A, B),
                                                                A
                                                                    ? se(
                                                                          _,
                                                                          T,
                                                                          P,
                                                                          R,
                                                                          0
                                                                      )
                                                                    : se(
                                                                          _,
                                                                          E,
                                                                          S,
                                                                          R,
                                                                          1
                                                                      );
                                                            break;
                                                        default:
                                                            var ne =
                                                                (N *
                                                                    style.strokeMiterLimit) /
                                                                J;
                                                            if (ne < 1) {
                                                                if (
                                                                    "miter-clip" !==
                                                                    style.strokeLineJoin
                                                                ) {
                                                                    de(A, B, R);
                                                                    break;
                                                                }
                                                                ce(A, B),
                                                                    A
                                                                        ? (x
                                                                              .subVectors(
                                                                                  I,
                                                                                  T
                                                                              )
                                                                              .multiplyScalar(
                                                                                  ne
                                                                              )
                                                                              .add(
                                                                                  T
                                                                              ),
                                                                          C.subVectors(
                                                                              I,
                                                                              P
                                                                          )
                                                                              .multiplyScalar(
                                                                                  ne
                                                                              )
                                                                              .add(
                                                                                  P
                                                                              ),
                                                                          ae(
                                                                              T,
                                                                              R,
                                                                              0
                                                                          ),
                                                                          ae(
                                                                              x,
                                                                              R,
                                                                              0
                                                                          ),
                                                                          ae(
                                                                              _,
                                                                              R,
                                                                              0.5
                                                                          ),
                                                                          ae(
                                                                              _,
                                                                              R,
                                                                              0.5
                                                                          ),
                                                                          ae(
                                                                              x,
                                                                              R,
                                                                              0
                                                                          ),
                                                                          ae(
                                                                              C,
                                                                              R,
                                                                              0
                                                                          ),
                                                                          ae(
                                                                              _,
                                                                              R,
                                                                              0.5
                                                                          ),
                                                                          ae(
                                                                              C,
                                                                              R,
                                                                              0
                                                                          ),
                                                                          ae(
                                                                              P,
                                                                              R,
                                                                              0
                                                                          ))
                                                                        : (x
                                                                              .subVectors(
                                                                                  I,
                                                                                  S
                                                                              )
                                                                              .multiplyScalar(
                                                                                  ne
                                                                              )
                                                                              .add(
                                                                                  S
                                                                              ),
                                                                          C.subVectors(
                                                                              I,
                                                                              E
                                                                          )
                                                                              .multiplyScalar(
                                                                                  ne
                                                                              )
                                                                              .add(
                                                                                  E
                                                                              ),
                                                                          ae(
                                                                              S,
                                                                              R,
                                                                              1
                                                                          ),
                                                                          ae(
                                                                              x,
                                                                              R,
                                                                              1
                                                                          ),
                                                                          ae(
                                                                              _,
                                                                              R,
                                                                              0.5
                                                                          ),
                                                                          ae(
                                                                              _,
                                                                              R,
                                                                              0.5
                                                                          ),
                                                                          ae(
                                                                              x,
                                                                              R,
                                                                              1
                                                                          ),
                                                                          ae(
                                                                              C,
                                                                              R,
                                                                              1
                                                                          ),
                                                                          ae(
                                                                              _,
                                                                              R,
                                                                              0.5
                                                                          ),
                                                                          ae(
                                                                              C,
                                                                              R,
                                                                              1
                                                                          ),
                                                                          ae(
                                                                              E,
                                                                              R,
                                                                              1
                                                                          ));
                                                            } else
                                                                B
                                                                    ? (A
                                                                          ? (ae(
                                                                                L,
                                                                                V,
                                                                                1
                                                                            ),
                                                                            ae(
                                                                                y,
                                                                                V,
                                                                                0
                                                                            ),
                                                                            ae(
                                                                                I,
                                                                                R,
                                                                                0
                                                                            ),
                                                                            ae(
                                                                                L,
                                                                                V,
                                                                                1
                                                                            ),
                                                                            ae(
                                                                                I,
                                                                                R,
                                                                                0
                                                                            ),
                                                                            ae(
                                                                                D,
                                                                                R,
                                                                                1
                                                                            ))
                                                                          : (ae(
                                                                                L,
                                                                                V,
                                                                                1
                                                                            ),
                                                                            ae(
                                                                                y,
                                                                                V,
                                                                                0
                                                                            ),
                                                                            ae(
                                                                                I,
                                                                                R,
                                                                                1
                                                                            ),
                                                                            ae(
                                                                                y,
                                                                                V,
                                                                                0
                                                                            ),
                                                                            ae(
                                                                                D,
                                                                                R,
                                                                                0
                                                                            ),
                                                                            ae(
                                                                                I,
                                                                                R,
                                                                                1
                                                                            )),
                                                                      A
                                                                          ? P.copy(
                                                                                I
                                                                            )
                                                                          : E.copy(
                                                                                I
                                                                            ))
                                                                    : A
                                                                    ? (ae(
                                                                          T,
                                                                          R,
                                                                          0
                                                                      ),
                                                                      ae(
                                                                          I,
                                                                          R,
                                                                          0
                                                                      ),
                                                                      ae(
                                                                          _,
                                                                          R,
                                                                          0.5
                                                                      ),
                                                                      ae(
                                                                          _,
                                                                          R,
                                                                          0.5
                                                                      ),
                                                                      ae(
                                                                          I,
                                                                          R,
                                                                          0
                                                                      ),
                                                                      ae(
                                                                          P,
                                                                          R,
                                                                          0
                                                                      ))
                                                                    : (ae(
                                                                          S,
                                                                          R,
                                                                          1
                                                                      ),
                                                                      ae(
                                                                          I,
                                                                          R,
                                                                          1
                                                                      ),
                                                                      ae(
                                                                          _,
                                                                          R,
                                                                          0.5
                                                                      ),
                                                                      ae(
                                                                          _,
                                                                          R,
                                                                          0.5
                                                                      ),
                                                                      ae(
                                                                          I,
                                                                          R,
                                                                          1
                                                                      ),
                                                                      ae(
                                                                          E,
                                                                          R,
                                                                          1
                                                                      )),
                                                                    (z = !0);
                                                    }
                                                } else le();
                                            } else le();
                                            j ||
                                                X !== O - 1 ||
                                                ue(e[0], M, k, A, !0, V),
                                                (V = R),
                                                (U = _),
                                                y.copy(P),
                                                L.copy(E);
                                        }
                                        if (j) {
                                            if (B && r) {
                                                var re = I,
                                                    ie = D;
                                                Z !== A && ((re = D), (ie = I)),
                                                    A
                                                        ? (z || Z) &&
                                                          (ie.toArray(r, 0),
                                                          ie.toArray(r, 9),
                                                          z && re.toArray(r, 3))
                                                        : (!z && Z) ||
                                                          (ie.toArray(r, 3),
                                                          ie.toArray(r, 9),
                                                          z &&
                                                              re.toArray(r, 0));
                                            }
                                        } else ue(_, T, S, A, !1, R);
                                        return F;
                                        function oe(e, t, n) {
                                            return (
                                                n.subVectors(t, e),
                                                n.set(-n.y, n.x).normalize()
                                            );
                                        }
                                        function ae(e, u, t) {
                                            r &&
                                                ((r[Y] = e.x),
                                                (r[Y + 1] = e.y),
                                                (r[Y + 2] = 0),
                                                l &&
                                                    ((l[Y] = 0),
                                                    (l[Y + 1] = 0),
                                                    (l[Y + 2] = 1)),
                                                (Y += 3),
                                                d &&
                                                    ((d[H] = u),
                                                    (d[H + 1] = t),
                                                    (H += 2))),
                                                (F += 3);
                                        }
                                        function se(e, n, r, u, o) {
                                            h.copy(n).sub(e).normalize(),
                                                v.copy(r).sub(e).normalize();
                                            var l = Math.PI,
                                                d = h.dot(v);
                                            Math.abs(d) < 1 &&
                                                (l = Math.abs(Math.acos(d))),
                                                (l /= t),
                                                f.copy(n);
                                            for (
                                                var i = 0, c = t - 1;
                                                i < c;
                                                i++
                                            )
                                                m.copy(f).rotateAround(e, l),
                                                    ae(f, u, o),
                                                    ae(m, u, o),
                                                    ae(e, u, 0.5),
                                                    f.copy(m);
                                            ae(m, u, o),
                                                ae(r, u, o),
                                                ae(e, u, 0.5);
                                        }
                                        function le() {
                                            ae(L, V, 1),
                                                ae(y, V, 0),
                                                ae(T, R, 0),
                                                ae(L, V, 1),
                                                ae(T, R, 1),
                                                ae(S, R, 0);
                                        }
                                        function de(e, t, u) {
                                            t
                                                ? e
                                                    ? (ae(L, V, 1),
                                                      ae(y, V, 0),
                                                      ae(T, R, 0),
                                                      ae(L, V, 1),
                                                      ae(T, R, 0),
                                                      ae(D, R, 1),
                                                      ae(T, u, 0),
                                                      ae(P, u, 0),
                                                      ae(D, u, 0.5))
                                                    : (ae(L, V, 1),
                                                      ae(y, V, 0),
                                                      ae(S, R, 1),
                                                      ae(y, V, 0),
                                                      ae(D, R, 0),
                                                      ae(S, R, 1),
                                                      ae(S, u, 1),
                                                      ae(E, u, 0),
                                                      ae(D, u, 0.5))
                                                : e
                                                ? (ae(T, u, 0),
                                                  ae(P, u, 0),
                                                  ae(_, u, 0.5))
                                                : (ae(S, u, 1),
                                                  ae(E, u, 0),
                                                  ae(_, u, 0.5));
                                        }
                                        function ce(e, t) {
                                            t &&
                                                (e
                                                    ? (ae(L, V, 1),
                                                      ae(y, V, 0),
                                                      ae(T, R, 0),
                                                      ae(L, V, 1),
                                                      ae(T, R, 0),
                                                      ae(D, R, 1),
                                                      ae(T, V, 0),
                                                      ae(_, R, 0.5),
                                                      ae(D, R, 1),
                                                      ae(_, R, 0.5),
                                                      ae(P, V, 0),
                                                      ae(D, R, 1))
                                                    : (ae(L, V, 1),
                                                      ae(y, V, 0),
                                                      ae(S, R, 1),
                                                      ae(y, V, 0),
                                                      ae(D, R, 0),
                                                      ae(S, R, 1),
                                                      ae(S, V, 1),
                                                      ae(D, R, 0),
                                                      ae(_, R, 0.5),
                                                      ae(_, R, 0.5),
                                                      ae(D, R, 0),
                                                      ae(E, V, 1)));
                                        }
                                        function ue(e, t, n, o, l, u) {
                                            switch (style.strokeLineCap) {
                                                case "round":
                                                    l
                                                        ? se(e, n, t, u, 0.5)
                                                        : se(e, t, n, u, 0.5);
                                                    break;
                                                case "square":
                                                    if (l)
                                                        h.subVectors(t, e),
                                                            v.set(h.y, -h.x),
                                                            f
                                                                .addVectors(
                                                                    h,
                                                                    v
                                                                )
                                                                .add(e),
                                                            m
                                                                .subVectors(
                                                                    v,
                                                                    h
                                                                )
                                                                .add(e),
                                                            o
                                                                ? (f.toArray(
                                                                      r,
                                                                      3
                                                                  ),
                                                                  m.toArray(
                                                                      r,
                                                                      0
                                                                  ),
                                                                  m.toArray(
                                                                      r,
                                                                      9
                                                                  ))
                                                                : (f.toArray(
                                                                      r,
                                                                      3
                                                                  ),
                                                                  f.toArray(
                                                                      r,
                                                                      9
                                                                  ),
                                                                  m.toArray(
                                                                      r,
                                                                      0
                                                                  ));
                                                    else {
                                                        h.subVectors(n, e),
                                                            v.set(h.y, -h.x),
                                                            f
                                                                .addVectors(
                                                                    h,
                                                                    v
                                                                )
                                                                .add(e),
                                                            m
                                                                .subVectors(
                                                                    v,
                                                                    h
                                                                )
                                                                .add(e);
                                                        var d = r.length;
                                                        o
                                                            ? (f.toArray(
                                                                  r,
                                                                  d - 3
                                                              ),
                                                              m.toArray(
                                                                  r,
                                                                  d - 6
                                                              ),
                                                              m.toArray(
                                                                  r,
                                                                  d - 12
                                                              ))
                                                            : (f.toArray(
                                                                  r,
                                                                  d - 6
                                                              ),
                                                              m.toArray(
                                                                  r,
                                                                  d - 3
                                                              ),
                                                              m.toArray(
                                                                  r,
                                                                  d - 12
                                                              ));
                                                    }
                                            }
                                        }
                                    },
                                },
                            ]
                        ),
                        n
                    );
                })(o.y);
            function F(e) {
                var path = new V().parse(e).paths[0];
                return V.createShapes(path);
            }
            n(934);
            var Y = [
                {
                    id: "silver",
                    name: "Universe Gray",
                    hex: "#ffffff",
                    metalness: 1,
                    envMapIntensity: 3,
                },
                {
                    id: "grey",
                    name: "Lead",
                    hex: "#7a776e",
                    metalness: 1,
                    envMapIntensity: 3,
                },
                {
                    id: "sierra-blue",
                    name: "Offshore Blue",
                    hex: "#94bade",
                    metalness: 1,
                    envMapIntensity: 3.5,
                },
                {
                    id: "gold",
                    name: "Gold",
                    hex: "#fbd2a8",
                    metalness: 0.99,
                    envMapIntensity: 2,
                },
                {
                    id: "dark-green",
                    name: "Green",
                    hex: "#5b654e",
                    metalness: 1,
                    envMapIntensity: 4.5,
                },
                {
                    id: "red",
                    name: "Red",
                    hex: "#c41728",
                    metalness: 1,
                    envMapIntensity: 6,
                },
                {
                    id: "black",
                    name: "Midnight",
                    hex: "#161d25",
                    metalness: 1,
                    envMapIntensity: 6.5,
                },
                {
                    id: "purple",
                    name: "Purple",
                    hex: "#aba0e1",
                    metalness: 1,
                    envMapIntensity: 3.5,
                },
                {
                    id: "pink",
                    name: "Pink",
                    hex: "#ffc0b3",
                    metalness: 0.99,
                    envMapIntensity: 2,
                },
                {
                    id: "orange",
                    name: "Orange",
                    hex: "#ff9552",
                    metalness: 1,
                    envMapIntensity: 4.5,
                },
                {
                    id: "brown",
                    name: "Rust",
                    hex: "#6e352b",
                    metalness: 1,
                    envMapIntensity: 5.5,
                },
                {
                    id: "mustard",
                    name: "Tacky Yellow",
                    hex: "#ffc800",
                    metalness: 1,
                    envMapIntensity: 4.5,
                },
                {
                    id: "blurple",
                    name: "Blurple",
                    hex: "#210cbf",
                    metalness: 1,
                    envMapIntensity: 10,
                },
                {
                    id: "cyan",
                    name: "Cyan",
                    hex: "#0cbfb9",
                    metalness: 1,
                    envMapIntensity: 4.5,
                },
            ];
            function H(e) {
                return Y.find(function (t) {
                    return t.id === e;
                });
            }
            var X = [
                {
                    name: "Leaves",
                    id: "leaves",
                    color: "#48895E",
                    isDefault: !0,
                },
                {
                    name: "Splatter",
                    id: "splatter",
                    isDefault: !0,
                    color: "#DA87C0",
                },
                {
                    name: "Gradient",
                    id: "gradient",
                    isDefault: !0,
                    color: "#5986FD",
                },
                {
                    name: "Mountain",
                    id: "mountain",
                    color: "#FCA891",
                },
                {
                    name: "Dog",
                    id: "dog",
                    color: "#CBE7F3",
                },
                {
                    name: "Hot Air Balloons",
                    id: "hot-air-balloons",
                    color: "#018A9D",
                },
                {
                    name: "Bliss",
                    id: "bliss",
                    color: "#A5CAFF",
                },
            ];
            function $() {
                var e = X.filter(function (e) {
                    return e.isDefault;
                });
                return e[Math.floor(Math.random() * e.length)];
            }
            var Q = {},
                K = {},
                J = !1,
                ee = [
                    {
                        name: "All items",
                        id: "all",
                    },
                    {
                        name: "Cameras",
                        id: "cameras",
                    },
                    {
                        name: "Inputs",
                        id: "inputs",
                    },
                    {
                        name: "Logos",
                        id: "logos",
                    },
                    {
                        name: "Ports",
                        id: "ports",
                    },
                    {
                        name: "Accessories",
                        id: "accessories",
                    },
                ],
                te = {
                    props: {
                        current: {
                            type: Object,
                            required: !0,
                        },
                        hide: {
                            type: Boolean,
                            required: !0,
                        },
                        items: {
                            type: Array,
                            required: !0,
                        },
                        showEdit: {
                            type: Boolean,
                            required: !0,
                        },
                        isIphone: {
                            type: Boolean,
                            required: !0,
                        },
                        originalColor: {
                            type: Object,
                            required: !0,
                        },
                        originalWallpaper: {
                            type: Object,
                            required: !0,
                        },
                        showToolbar: {
                            type: Boolean,
                            required: !0,
                        },
                        canChangeColor: {
                            type: Boolean,
                            required: !0,
                        },
                    },
                    data: function () {
                        return {
                            dragging: !1,
                            selected: -1,
                            showColors: !1,
                            showWallpaper: !1,
                            showCategories: !1,
                            colors: Y,
                            showLeftArrow: !1,
                            showRightArrow: !0,
                            wallpapers: X,
                            categories: ee,
                            selectedCategory: null,
                        };
                    },
                    watch: {
                        showEdit: function () {
                            this.showEdit ||
                                ((this.showColors = !1),
                                (this.showWallpaper = !1));
                        },
                        selectedCategory: function () {
                            this.$nextTick(this.checkEnds);
                        },
                        showItems: function () {
                            this.$nextTick(this.checkEnds);
                        },
                        showColors: function () {
                            this.$nextTick(this.checkEnds);
                        },
                        showWallpaper: function () {
                            this.$nextTick(this.checkEnds),
                                this.showWallpaper &&
                                    this.$emit("showingWallpaper");
                        },
                    },
                    mounted: function () {
                        this.$addEventListener("mousemove", this.onMove),
                            this.$addEventListener("mouseup", this.onUp),
                            this.$addEventListener("touchmove", this.onMove, {
                                passive: !1,
                            }),
                            this.$addEventListener("touchend", this.onUp),
                            this.$addEventListener("touchcancel", this.onUp),
                            this.$addEventListener("resize", this.onResize);
                    },
                    computed: {
                        toolbarTitle: function () {
                            return this.showColors
                                ? "Colors"
                                : this.showWallpaper
                                ? "Wallpapers"
                                : "Items";
                        },
                        showItems: function () {
                            return (
                                !this.showColors &&
                                !this.showWallpaper &&
                                !this.showCategories
                            );
                        },
                        shownItems: function () {
                            var e = this;
                            return this.selectedCategory
                                ? this.items.filter(function (t) {
                                      return (
                                          t.category === e.selectedCategory.id
                                      );
                                  })
                                : this.items;
                        },
                        currentContainer: function () {
                            return this.showItems
                                ? this.$refs.items
                                : this.showWallpaper
                                ? this.$refs.wallpapers
                                : this.showCategories
                                ? this.$refs.categories
                                : this.showColors
                                ? this.$refs.colors
                                : void 0;
                        },
                    },
                    methods: {
                        onDragStart: function (e, i) {
                            this.dragging ||
                                ((this.dragging = !0),
                                (this.selected = i),
                                (Q = this.getCoords(e)),
                                (K = Q));
                        },
                        onWallpaperUpload: function (e) {
                            e.stopPropagation(),
                                this.$emit(
                                    "uploadWallpaper",
                                    e.target.files[0]
                                );
                        },
                        getCoords: function (e) {
                            return {
                                x: e.touches ? e.touches[0].clientX : e.clientX,
                                y: e.touches ? e.touches[0].clientY : e.clientY,
                            };
                        },
                        onResize: function (e) {
                            var t = this.currentContainer;
                            t.scrollLeft > 0 &&
                                t.scrollLeft < t.offsetWidth + t.scrollWidth &&
                                t.scrollTo({
                                    top: 0,
                                    left:
                                        t.scrollLeft -
                                        (t.scrollLeft % t.offsetWidth),
                                    behavior: "auto",
                                }),
                                this.checkEnds();
                        },
                        onUp: function (e) {
                            this.dragging &&
                                J &&
                                (this.$emit("placeItem", K),
                                (J = !1),
                                (this.selected = -1)),
                                (this.dragging = !1),
                                (document.body.style.cursor = "auto");
                        },
                        toRight: function () {
                            var e = this.currentContainer;
                            e.scrollBy({
                                left: e.offsetWidth,
                                behavior: "smooth",
                            }),
                                this.checkEnds(e.offsetWidth);
                        },
                        toLeft: function () {
                            var e = this.currentContainer;
                            e.scrollBy({
                                left: -e.offsetWidth,
                                behavior: "smooth",
                            }),
                                this.checkEnds(-e.offsetWidth);
                        },
                        checkEnds: function () {
                            var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : 0,
                                t = this.currentContainer;
                            (this.showLeftArrow = t.scrollLeft + e > 0),
                                (this.showRightArrow =
                                    t.scrollLeft + t.offsetWidth + e <
                                    t.scrollWidth);
                        },
                        onCategoryClick: function (e) {
                            "all" === e.id
                                ? (this.selectedCategory = null)
                                : (this.selectedCategory = e),
                                (this.showCategories = !1);
                        },
                        onColorClick: function (e) {
                            this.$emit("changeColor", e),
                                (this.showColors = !1);
                        },
                        onWallpaperClick: function (e) {
                            this.$emit("changeWallpaper", e),
                                (this.showWallpaper = !1);
                        },
                        onCaptureClick: function (e) {
                            (this.showColors = !1),
                                (this.showWallpaper = !1),
                                (this.showCategories = !1);
                        },
                        onTagClick: function () {
                            this.selectedCategory
                                ? (this.selectedCategory = null)
                                : (this.showCategories = !0);
                        },
                        onMouseLeaveColor: function () {
                            this.showColors &&
                                this.$emit("changeColor", this.originalColor);
                        },
                        onMouseLeaveWallpaper: function () {
                            this.showWallpaper &&
                                this.$emit(
                                    "changeWallpaper",
                                    this.originalWallpaper
                                );
                        },
                        onMove: function (e) {
                            if (this.dragging) {
                                var t = this.getCoords(e);
                                K = t;
                                t.x, Q.x;
                                var n = Q.y - t.y;
                                !J &&
                                    n > 15 &&
                                    (this.$emit(
                                        "selected",
                                        this.shownItems[this.selected]
                                    ),
                                    (J = !0),
                                    e.preventDefault(),
                                    (document.body.style.cursor = "grabbing")),
                                    J &&
                                        this.dragging &&
                                        this.$emit("moveItem", t);
                            }
                        },
                    },
                },
                ne = te,
                re = (n(935), n(28)),
                component = Object(re.a)(
                    ne,
                    function () {
                        var e = this,
                            t = e._self._c;
                        return t("div", [
                            t(
                                "div",
                                {
                                    staticClass: "items",
                                    class: {
                                        hide: e.hide,
                                    },
                                },
                                [
                                    t("div", {
                                        staticClass: "soft-edge soft-edge-left",
                                    }),
                                    e._v(" "),
                                    t("div", {
                                        staticClass:
                                            "soft-edge soft-edge-right",
                                    }),
                                    e._v(" "),
                                    t(
                                        "div",
                                        {
                                            staticClass: "top-bar",
                                            class: {
                                                "top-bar-hide": !e.showToolbar,
                                            },
                                        },
                                        [
                                            t("div", [
                                                t(
                                                    "div",
                                                    {
                                                        staticClass:
                                                            "top-bar-option",
                                                    },
                                                    [e._v(e._s(e.toolbarTitle))]
                                                ),
                                            ]),
                                            e._v(" "),
                                            t(
                                                "div",
                                                {
                                                    directives: [
                                                        {
                                                            name: "show",
                                                            rawName: "v-show",
                                                            value:
                                                                e.showItems &&
                                                                e.showEdit,
                                                            expression:
                                                                "showItems && showEdit",
                                                        },
                                                    ],
                                                    staticClass:
                                                        "top-bar-right",
                                                },
                                                [
                                                    t(
                                                        "div",
                                                        {
                                                            directives: [
                                                                {
                                                                    name: "show",
                                                                    rawName:
                                                                        "v-show",
                                                                    value: e.isIphone,
                                                                    expression:
                                                                        "isIphone",
                                                                },
                                                            ],
                                                            staticClass:
                                                                "top-bar-option top-bar-option-customize",
                                                            on: {
                                                                click: function (
                                                                    t
                                                                ) {
                                                                    t.stopPropagation(),
                                                                        (e.showWallpaper =
                                                                            !0);
                                                                },
                                                            },
                                                        },
                                                        [
                                                            t("img", {
                                                                staticClass:
                                                                    "top-bar-option-img delete-icon",
                                                                attrs: {
                                                                    src: "/design-the-next-iphone/wallpaper.svg",
                                                                },
                                                            }),
                                                            e._v(
                                                                "\n          Wallpaper\n        "
                                                            ),
                                                        ]
                                                    ),
                                                    e._v(" "),
                                                    t(
                                                        "div",
                                                        {
                                                            directives: [
                                                                {
                                                                    name: "show",
                                                                    rawName:
                                                                        "v-show",
                                                                    value:
                                                                        !e.showColors &&
                                                                        e.canChangeColor,
                                                                    expression:
                                                                        "!showColors && canChangeColor",
                                                                },
                                                            ],
                                                            staticClass:
                                                                "top-bar-option top-bar-option-customize",
                                                            on: {
                                                                click: function (
                                                                    t
                                                                ) {
                                                                    t.stopPropagation(),
                                                                        (e.showColors =
                                                                            !0);
                                                                },
                                                            },
                                                        },
                                                        [
                                                            t("img", {
                                                                staticClass:
                                                                    "top-bar-option-img color-icon",
                                                                attrs: {
                                                                    src: "/design-the-next-iphone/pinwheel.svg",
                                                                },
                                                            }),
                                                            e._v(
                                                                "\n          Color\n        "
                                                            ),
                                                        ]
                                                    ),
                                                    e._v(" "),
                                                    t(
                                                        "div",
                                                        {
                                                            directives: [
                                                                {
                                                                    name: "show",
                                                                    rawName:
                                                                        "v-show",
                                                                    value: !e.isIphone,
                                                                    expression:
                                                                        "!isIphone",
                                                                },
                                                            ],
                                                            staticClass:
                                                                "top-bar-option top-bar-option-customize",
                                                            on: {
                                                                click: function (
                                                                    t
                                                                ) {
                                                                    return e.$emit(
                                                                        "deleteItem"
                                                                    );
                                                                },
                                                            },
                                                        },
                                                        [
                                                            t("img", {
                                                                staticClass:
                                                                    "top-bar-option-img delete-icon",
                                                                attrs: {
                                                                    src: "/design-the-next-iphone/delete.svg",
                                                                },
                                                            }),
                                                            e._v(
                                                                "\n          Delete\n        "
                                                            ),
                                                        ]
                                                    ),
                                                ]
                                            ),
                                        ]
                                    ),
                                    e._v(" "),
                                    t(
                                        "div",
                                        {
                                            directives: [
                                                {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: e.showItems,
                                                    expression: "showItems",
                                                },
                                            ],
                                            ref: "items",
                                            staticClass: "items-inner",
                                            class: {
                                                "items-inner-dragging":
                                                    null !== e.current,
                                            },
                                        },
                                        e._l(e.shownItems, function (n, i) {
                                            return t(
                                                "div",
                                                {
                                                    key: i,
                                                    staticClass:
                                                        "item item-grab",
                                                    class: {
                                                        "item-selected":
                                                            n.name ===
                                                            e.current.name,
                                                    },
                                                    on: {
                                                        mousedown: function (
                                                            t
                                                        ) {
                                                            return e.onDragStart(
                                                                t,
                                                                i
                                                            );
                                                        },
                                                        touchstart: function (
                                                            t
                                                        ) {
                                                            return e.onDragStart(
                                                                t,
                                                                i
                                                            );
                                                        },
                                                    },
                                                },
                                                [
                                                    t(
                                                        "div",
                                                        {
                                                            staticClass:
                                                                "item-box",
                                                        },
                                                        [
                                                            t("img", {
                                                                staticClass:
                                                                    "item-img",
                                                                attrs: {
                                                                    src: "/design-the-next-iphone/thumbnails/".concat(
                                                                        n.name
                                                                            .toLowerCase()
                                                                            .replaceAll(
                                                                                " ",
                                                                                "-"
                                                                            ),
                                                                        ".png"
                                                                    ),
                                                                },
                                                            }),
                                                        ]
                                                    ),
                                                    e._v(" "),
                                                    t(
                                                        "div",
                                                        {
                                                            staticClass:
                                                                "item-name",
                                                        },
                                                        [
                                                            e._v(
                                                                "\n          " +
                                                                    e._s(
                                                                        n.name
                                                                    ) +
                                                                    "\n        "
                                                            ),
                                                        ]
                                                    ),
                                                ]
                                            );
                                        }),
                                        0
                                    ),
                                    e._v(" "),
                                    t(
                                        "div",
                                        {
                                            directives: [
                                                {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: e.showColors,
                                                    expression: "showColors",
                                                },
                                            ],
                                            ref: "colors",
                                            staticClass: "items-inner",
                                            on: {
                                                mouseleave: e.onMouseLeaveColor,
                                            },
                                        },
                                        e._l(e.colors, function (n, i) {
                                            return t(
                                                "div",
                                                {
                                                    key: i,
                                                    staticClass: "item",
                                                    on: {
                                                        mouseenter: function (
                                                            t
                                                        ) {
                                                            return e.$emit(
                                                                "changeColor",
                                                                n,
                                                                void 0,
                                                                !0
                                                            );
                                                        },
                                                        click: function (t) {
                                                            return (
                                                                t.stopPropagation(),
                                                                function () {
                                                                    return e.onColorClick(
                                                                        n
                                                                    );
                                                                }.apply(
                                                                    null,
                                                                    arguments
                                                                )
                                                            );
                                                        },
                                                    },
                                                },
                                                [
                                                    t(
                                                        "div",
                                                        {
                                                            staticClass:
                                                                "item-color-wrapper",
                                                            class: {
                                                                "item-color-selected":
                                                                    e.originalColor ===
                                                                    n.hex,
                                                            },
                                                        },
                                                        [
                                                            t(
                                                                "div",
                                                                {
                                                                    staticClass:
                                                                        "item-box item-color",
                                                                },
                                                                [
                                                                    t("div", {
                                                                        staticClass:
                                                                            "item-color-inner",
                                                                        style: {
                                                                            background:
                                                                                n.hex,
                                                                        },
                                                                    }),
                                                                ]
                                                            ),
                                                        ]
                                                    ),
                                                    e._v(" "),
                                                    t(
                                                        "div",
                                                        {
                                                            staticClass:
                                                                "item-name",
                                                        },
                                                        [
                                                            e._v(
                                                                "\n          " +
                                                                    e._s(
                                                                        n.name
                                                                    ) +
                                                                    "\n        "
                                                            ),
                                                        ]
                                                    ),
                                                ]
                                            );
                                        }),
                                        0
                                    ),
                                    e._v(" "),
                                    t(
                                        "div",
                                        {
                                            directives: [
                                                {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: e.showWallpaper,
                                                    expression: "showWallpaper",
                                                },
                                            ],
                                            ref: "wallpapers",
                                            staticClass: "items-inner",
                                            on: {
                                                mouseleave:
                                                    e.onMouseLeaveWallpaper,
                                            },
                                        },
                                        [
                                            t(
                                                "label",
                                                {
                                                    staticClass: "item",
                                                    attrs: {
                                                        for: "upload",
                                                    },
                                                    on: {
                                                        click: function (e) {
                                                            e.stopPropagation();
                                                        },
                                                    },
                                                },
                                                [
                                                    t("input", {
                                                        staticClass: "upload",
                                                        attrs: {
                                                            accept: "image/png, image/jpeg",
                                                            id: "upload",
                                                            type: "file",
                                                        },
                                                        on: {
                                                            change: e.onWallpaperUpload,
                                                        },
                                                    }),
                                                    e._v(" "),
                                                    t(
                                                        "div",
                                                        {
                                                            staticClass:
                                                                "item-box item-wallpaper",
                                                        },
                                                        [
                                                            t("img", {
                                                                staticClass:
                                                                    "item-wallpaper-img",
                                                                attrs: {
                                                                    src: "/design-the-next-iphone/wallpapers/upload.png",
                                                                },
                                                            }),
                                                        ]
                                                    ),
                                                    e._v(" "),
                                                    t(
                                                        "div",
                                                        {
                                                            staticClass:
                                                                "item-name",
                                                        },
                                                        [e._v("Upload")]
                                                    ),
                                                ]
                                            ),
                                            e._v(" "),
                                            e._l(e.wallpapers, function (n, i) {
                                                return t(
                                                    "div",
                                                    {
                                                        key: i,
                                                        staticClass: "item",
                                                        on: {
                                                            mouseenter:
                                                                function (t) {
                                                                    return e.$emit(
                                                                        "changeWallpaper",
                                                                        n,
                                                                        !0
                                                                    );
                                                                },
                                                            click: function (
                                                                t
                                                            ) {
                                                                return (
                                                                    t.stopPropagation(),
                                                                    function () {
                                                                        return e.onWallpaperClick(
                                                                            n
                                                                        );
                                                                    }.apply(
                                                                        null,
                                                                        arguments
                                                                    )
                                                                );
                                                            },
                                                        },
                                                    },
                                                    [
                                                        t(
                                                            "div",
                                                            {
                                                                staticClass:
                                                                    "item-box item-wallpaper",
                                                            },
                                                            [
                                                                t("img", {
                                                                    staticClass:
                                                                        "item-wallpaper-img",
                                                                    attrs: {
                                                                        src: "/design-the-next-iphone/wallpapers/".concat(
                                                                            n.name
                                                                                .toLowerCase()
                                                                                .replaceAll(
                                                                                    " ",
                                                                                    "-"
                                                                                ),
                                                                            ".png"
                                                                        ),
                                                                    },
                                                                }),
                                                            ]
                                                        ),
                                                        e._v(" "),
                                                        t(
                                                            "div",
                                                            {
                                                                staticClass:
                                                                    "item-name",
                                                            },
                                                            [
                                                                e._v(
                                                                    "\n          " +
                                                                        e._s(
                                                                            n.name
                                                                        ) +
                                                                        "\n        "
                                                                ),
                                                            ]
                                                        ),
                                                    ]
                                                );
                                            }),
                                        ],
                                        2
                                    ),
                                    e._v(" "),
                                    t("img", {
                                        staticClass: "control left-control",
                                        class: {
                                            "control-disabled":
                                                !e.showLeftArrow,
                                        },
                                        attrs: {
                                            src: "/design-the-next-iphone/arrow.svg",
                                        },
                                        on: {
                                            click: function (t) {
                                                return (
                                                    t.stopPropagation(),
                                                    e.toLeft.apply(
                                                        null,
                                                        arguments
                                                    )
                                                );
                                            },
                                        },
                                    }),
                                    e._v(" "),
                                    t("img", {
                                        staticClass: "control right-control",
                                        class: {
                                            "control-disabled":
                                                !e.showRightArrow,
                                        },
                                        attrs: {
                                            src: "/design-the-next-iphone/arrow.svg",
                                        },
                                        on: {
                                            click: function (t) {
                                                return (
                                                    t.stopPropagation(),
                                                    e.toRight.apply(
                                                        null,
                                                        arguments
                                                    )
                                                );
                                            },
                                        },
                                    }),
                                ]
                            ),
                            e._v(" "),
                            e.showColors || e.showWallpaper || e.showCategories
                                ? t("div", {
                                      staticClass: "capture",
                                      on: {
                                          touchstart: e.onCaptureClick,
                                          mousedown: e.onCaptureClick,
                                      },
                                  })
                                : e._e(),
                        ]);
                    },
                    [],
                    !1,
                    null,
                    "e84edd88",
                    null
                ),
                ie = component.exports,
                oe = n(339),
                ae = {
                    props: {
                        play: {
                            type: Boolean,
                            required: !0,
                        },
                    },
                    data: function () {
                        return {
                            sounds: ["breakthrough", "wow", "best", "big"],
                            soundIndex: 0,
                            done: !0,
                        };
                    },
                    mounted: function () {
                        this.preloadSound();
                    },
                    watch: {
                        play: function () {
                            var e = this,
                                t = new oe.Howl({
                                    src: [
                                        "/design-the-next-iphone/tim-cook/".concat(
                                            this.sounds[this.soundIndex],
                                            ".mp3"
                                        ),
                                    ],
                                    volume: 1.2,
                                    autoplay: !1,
                                    onend: function () {
                                        e.done = !0;
                                    },
                                }),
                                n = new oe.Howl({
                                    src: [
                                        "/design-the-next-iphone/tim-cook/choir.mp3",
                                    ],
                                    volume: 0.65,
                                    autoplay: !1,
                                });
                            this.play &&
                                (n.play(),
                                setTimeout(function () {
                                    e.play &&
                                        ((e.done = !1),
                                        t.play(),
                                        (e.soundIndex =
                                            (e.soundIndex + 1) %
                                            e.sounds.length));
                                }, 3500));
                        },
                        soundIndex: function () {
                            this.preloadSound();
                        },
                    },
                    methods: {
                        preloadSound: function () {
                            new oe.Howl({
                                src: [
                                    "/design-the-next-iphone/tim-cook/".concat(
                                        this.sounds[this.soundIndex],
                                        ".mp3"
                                    ),
                                ],
                            });
                        },
                    },
                },
                se =
                    (n(937),
                    Object(re.a)(
                        ae,
                        function () {
                            var e = this;
                            return (0, e._self._c)("img", {
                                staticClass: "tim-cook",
                                class: {
                                    "tim-cook-show": e.play && !e.done,
                                },
                                attrs: {
                                    src: "/design-the-next-iphone/tim-cook.png",
                                },
                            });
                        },
                        [],
                        !1,
                        null,
                        "0ef4df3c",
                        null
                    ).exports),
                le = n(33);
            n(50), n(43), n(87), n(88);
            function de(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(
                                object,
                                e
                            ).enumerable;
                        })),
                        t.push.apply(t, n);
                }
                return t;
            }
            function ce(e, t) {
                return new e.MeshPhysicalMaterial(
                    (function (e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source =
                                null != arguments[i] ? arguments[i] : {};
                            i % 2
                                ? de(Object(source), !0).forEach(function (t) {
                                      Object(le.a)(e, t, source[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                      e,
                                      Object.getOwnPropertyDescriptors(source)
                                  )
                                : de(Object(source)).forEach(function (t) {
                                      Object.defineProperty(
                                          e,
                                          t,
                                          Object.getOwnPropertyDescriptor(
                                              source,
                                              t
                                          )
                                      );
                                  });
                        }
                        return e;
                    })(
                        {
                            metalness: 1,
                            roughness: 0.1,
                            clearcoat: 0.2,
                            reflectivity: 1,
                            clearcoatRoughness: 0.5,
                            envMapIntensity: 1,
                        },
                        t
                    )
                );
            }
            var ue,
                base = n(939),
                he = n(940);
            function pe() {
                return ue;
            }
            var ve,
                fe,
                ge,
                me,
                we,
                xe,
                be,
                Ce,
                ye,
                Le = n(500);
            var Me,
                ke,
                Te,
                Se,
                Pe,
                Ee,
                De,
                Ie,
                Oe,
                _e = n(500);
            var Ge,
                Re = n(941);
            var Be,
                Ae = n(942);
            var ze,
                je,
                Ue,
                circle = n(337),
                Ne = H("red");
            function We(e, t) {
                if (!ze) {
                    var n = F(circle);
                    (ze = new t.ExtrudeGeometry(n, {
                        depth: 0.6,
                        bevelEnabled: !0,
                        bevelThickness: 0.2,
                        bevelSize: 0.2,
                        bevelOffset: 0,
                        bevelSegments: 3,
                        curveSegments: 50,
                    })).center();
                }
                var r = ce(t, {
                    color: "#262626",
                    roughness: 0.15,
                    envMapIntensity: 3,
                });
                return new t.Mesh(ze, r);
            }
            var Ve,
                Ze,
                Fe,
                Ye,
                He,
                Xe = n(943),
                qe = n.n(Xe);
            var $e = H("black");
            var Qe,
                Ke,
                Je,
                et,
                tt,
                nt,
                it = n(944);
            H("black");
            var ot,
                at,
                st = n(945),
                lt = n.n(st),
                ct = n(946),
                ut = n.n(ct);
            var ht,
                pt = n(947),
                vt = n.n(pt);
            var ft,
                gt,
                mt = n(948),
                wt = n.n(mt);
            var xt,
                bt,
                Ct,
                yt,
                Lt,
                Mt = n(949),
                kt = n.n(Mt),
                Tt = n(950),
                St = n.n(Tt),
                Pt = n(951),
                Et = n.n(Pt),
                Dt = n(337),
                It = n.n(Dt);
            function Ot(e) {
                Lt || (Lt = new e.RingGeometry(0.02, 0.07, 24));
                var t = ce(e, {
                        color: "silver",
                        roughness: 0.6,
                        side: e.DoubleSide,
                    }),
                    n = new e.Mesh(Lt, t);
                return (
                    (n.rotation.y = Math.PI / 2),
                    (n.userData = {
                        useColor: !0,
                    }),
                    n
                );
            }
            var _t,
                Gt,
                Rt = n(337);
            var Bt,
                At,
                zt,
                jt = n(952),
                Ut = n(337);
            var Nt, Wt;
            n(953);
            var Vt = n(954);
            var Zt,
                Ft,
                Yt,
                Ht = n(955);
            function Xt(e) {
                var t = F(Ht),
                    n = new e.ExtrudeGeometry(t, {
                        depth: 0.03,
                        bevelEnabled: !0,
                        bevelThickness: 0.28,
                        bevelSize: 0.28,
                        bevelOffset: 0,
                        bevelSegments: 4,
                        curveSegments: 24,
                    });
                n.scale(0.04, 0.04, 0.04), n.center();
                var r = ce(e, {
                        roughness: 0.1,
                    }),
                    o = new e.Mesh(n, r);
                return (
                    (o.rotation.z = 0),
                    (o.userData = {
                        useColor: !0,
                    }),
                    o.position.set(0, 0, 0.05),
                    o
                );
            }
            var qt,
                $t,
                Qt,
                Kt = n(956),
                Jt = n(957);
            var en,
                tn,
                nn,
                rn,
                on,
                an = n(958),
                sn = n.n(an),
                ln = n(959),
                dn = n.n(ln);
            var cn,
                un,
                hn = n(960),
                pn = n.n(hn);
            var vn,
                fn,
                gn,
                mn,
                wn,
                xn = n(961),
                bn = n.n(xn),
                Cn = n(962),
                yn = n.n(Cn),
                Ln = n(963),
                Mn = n.n(Ln);
            var kn,
                Tn,
                Sn = n(964),
                Pn = n.n(Sn);
            var En,
                Dn,
                In,
                On,
                _n,
                Gn,
                Rn,
                Bn,
                An,
                zn,
                jn,
                Un = n(965),
                Nn = n.n(Un),
                Wn = n(966),
                Vn = n.n(Wn);
            function Zn(e, t) {
                var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : "black",
                    r = (F(Nn.a), new e.RingGeometry(t, 0.5, 32)),
                    o = ce(e, {
                        roughness: 0.15,
                        color: n,
                        envMapIntensity: 2,
                    }),
                    l = new e.Mesh(r, o);
                return l.position.set(0, 0, 0.55), (l.rotation.z = -Math.PI), l;
            }
            function Fn(e) {
                var t = F(Vn.a);
                En ||
                    ((En = new e.ExtrudeGeometry(t, {
                        depth: 0.2,
                        bevelEnabled: !0,
                        bevelThickness: 0.01,
                        bevelSize: 0.1,
                        bevelOffset: 0,
                        bevelSegments: 1,
                        curveSegments: 6,
                    })).center(),
                    En.scale(0.05, 0.05, 1));
                var n = ce(e, {
                        roughness: 0.25,
                        side: e.DoubleSide,
                        color: "#1c1c1c",
                    }),
                    r = new e.Mesh(En, n);
                return (
                    r.position.set(0, 0, 0.1),
                    (r.userData = {
                        useColor: !0,
                    }),
                    r
                );
            }
            var Yn = n(967);
            var Hn = n(968),
                Xn = n(969),
                qn = n(970),
                $n = n(971),
                Qn = {};
            function Kn(e, t) {
                return function (n) {
                    var r = new n.Group();
                    if (!Qn[e]) {
                        var o = F(t),
                            l = new n.ExtrudeGeometry(o, {
                                depth: 0.01,
                                bevelEnabled: !1,
                            });
                        l.center(), l.scale(0.05, 0.05, 0.05), (Qn[e] = l);
                    }
                    var d = ce(n, {
                            roughness: 0.05,
                        }),
                        c = new n.Mesh(Qn[e], d);
                    return (
                        c.position.set(0, 0, 0.01),
                        (c.userData = {
                            useColor: !0,
                        }),
                        r.add(c),
                        r
                    );
                };
            }
            var Jn,
                er,
                nr,
                rr,
                ir,
                or,
                ar,
                sr,
                lr,
                dr = {
                    appleLogo: Kn("apple", Hn),
                    androidLogo: Kn("android", Xn),
                    pearLogo: Kn("pear", qn),
                    ibmLogo: Kn("ibm", $n),
                },
                cr = [
                    {
                        name: "Pro Camera",
                        create: function (e, t) {
                            var n = new e.Group();
                            n.add(
                                (function (e) {
                                    if (!ve) {
                                        var t = F(Le);
                                        (ve = new e.ExtrudeGeometry(t, {
                                            depth: 0.08,
                                            bevelEnabled: !0,
                                            bevelThickness: 0.05,
                                            bevelSize: 0.06,
                                            bevelOffset: 0,
                                            bevelSegments: 4,
                                            curveSegments: 65,
                                        })).center(),
                                            ve.translate(0, 0, 0.1),
                                            ve.scale(0.31, 0.31, 0.31);
                                    }
                                    var n = ce(e, {
                                            roughness: 0.14,
                                        }),
                                        r = new e.Mesh(ve, n);
                                    return (
                                        r.position.set(0, 0, 0),
                                        (r.userData = {
                                            useColor: !0,
                                        }),
                                        r
                                    );
                                })(e)
                            );
                            var r = new e.Group();
                            r.add(
                                (function (e) {
                                    if (!fe) {
                                        var t = new e.Shape();
                                        t.absarc(
                                            0,
                                            0,
                                            0.18,
                                            0,
                                            2 * Math.PI,
                                            0,
                                            !1
                                        );
                                        var n = new e.Path();
                                        n.absarc(
                                            0,
                                            0,
                                            0.155,
                                            0,
                                            2 * Math.PI,
                                            !0
                                        ),
                                            t.holes.push(n),
                                            (fe = new e.ExtrudeGeometry(t, {
                                                depth: 0.04,
                                                bevelEnabled: !1,
                                                curveSegments: 85,
                                            }));
                                    }
                                    var r = ce(e, {
                                            roughness: 0.2,
                                        }),
                                        o = new e.Mesh(fe, r);
                                    return (
                                        (o.userData = {
                                            useColor: !0,
                                        }),
                                        o
                                    );
                                })(e)
                            ),
                                r.add(
                                    (function (e) {
                                        if (!me) {
                                            var t = new e.Shape();
                                            t.absarc(
                                                0,
                                                0,
                                                0.155,
                                                0,
                                                2 * Math.PI,
                                                0,
                                                !1
                                            );
                                            var n = new e.Path();
                                            n.absarc(
                                                0,
                                                0,
                                                0.07,
                                                0,
                                                2 * Math.PI,
                                                !0
                                            ),
                                                t.holes.push(n),
                                                (me = new e.ExtrudeGeometry(t, {
                                                    depth: 0.05,
                                                    bevelEnabled: !1,
                                                    curveSegments: 16,
                                                }));
                                        }
                                        var r = ce(e, {
                                            color: "#1d1d1f",
                                            roughness: 0.1,
                                        });
                                        return new e.Mesh(me, r);
                                    })(e)
                                ),
                                r.add(
                                    (function (e) {
                                        we ||
                                            (we = new e.ConeGeometry(
                                                0.1,
                                                0.02,
                                                16,
                                                3,
                                                !0
                                            ));
                                        var t = ce(e, {
                                                color: "#4029a5",
                                                roughness: 0.15,
                                                side: e.BackSide,
                                            }),
                                            n = new e.Mesh(we, t);
                                        return (
                                            (n.rotation.x = -Math.PI / 2),
                                            n.position.set(0, 0, 0.03),
                                            (n.doubleSided = !0),
                                            n
                                        );
                                    })(e)
                                ),
                                r.add(
                                    (function (e) {
                                        ge ||
                                            (ge = new e.SphereGeometry(
                                                0.035,
                                                9,
                                                8
                                            ));
                                        var t = ce(e, {
                                                color: "#6865bb",
                                                roughness: 0,
                                                metalness: 1,
                                                envMapIntensity: 2.5,
                                            }),
                                            n = new e.Mesh(ge, t);
                                        return n.position.set(0, 0, 0.015), n;
                                    })(e)
                                ),
                                r.add(
                                    (function (e) {
                                        Ce ||
                                            (Ce = new e.CylinderGeometry(
                                                0.15,
                                                0.15,
                                                0.01,
                                                16
                                            ));
                                        var t = new e.MeshPhysicalMaterial({
                                                roughness: 0,
                                                transmission: 1,
                                                thickness: 0.01,
                                            }),
                                            n = new e.Mesh(Ce, t);
                                        return (
                                            n.position.set(0, 0, 0.045),
                                            (n.rotation.x = Math.PI / 2),
                                            n
                                        );
                                    })(e)
                                ),
                                r.scale.set(1.1, 1.1, 1.1);
                            var o = r.clone();
                            o.position.set(-0.22, -0.22, 0.05);
                            var l = r.clone();
                            l.position.set(-0.22, 0.22, 0.05);
                            var d = r.clone();
                            d.position.set(0.22, 0, 0.05),
                                n.add(o),
                                n.add(l),
                                n.add(d),
                                n.add(
                                    (function (e) {
                                        ye ||
                                            (ye = new e.CylinderGeometry(
                                                0.075,
                                                0.075,
                                                0.005,
                                                22
                                            ));
                                        var t = ce(e, {
                                                color: "#131313",
                                                roughness: 0.1,
                                                envMapIntensity: 3.8,
                                            }),
                                            n = new e.Mesh(ye, t);
                                        return (
                                            (n.rotation.x = Math.PI / 2),
                                            n.position.set(0.23, -0.32, 0.07),
                                            n
                                        );
                                    })(e)
                                );
                            var c = new e.Group();
                            return (
                                c.add(
                                    (function (e) {
                                        if (!be) {
                                            var t = new e.Shape();
                                            t.absarc(
                                                0,
                                                0,
                                                0.075,
                                                0,
                                                2 * Math.PI,
                                                0,
                                                !1
                                            );
                                            var n = new e.Path();
                                            n.absarc(
                                                0,
                                                0,
                                                0.065,
                                                0,
                                                2 * Math.PI,
                                                !0
                                            ),
                                                t.holes.push(n),
                                                (be = new e.ExtrudeGeometry(t, {
                                                    depth: 0.02,
                                                    bevelEnabled: !1,
                                                    curveSegments: 32,
                                                }));
                                        }
                                        var r = ce(e, {
                                                roughness: 0.19,
                                            }),
                                            o = new e.Mesh(be, r);
                                        return (
                                            (o.userData = {
                                                useColor: !0,
                                            }),
                                            o
                                        );
                                    })(e)
                                ),
                                c.add(
                                    (function (e) {
                                        xe ||
                                            (xe = new e.CylinderGeometry(
                                                0.065,
                                                0.065,
                                                0.04,
                                                16
                                            ));
                                        var t = ce(e, {
                                                color: "#fff8d6",
                                                roughness: 0.3,
                                                envMapIntensity: 4.5,
                                            }),
                                            n = new e.Mesh(xe, t);
                                        return (n.rotation.x = Math.PI / 2), n;
                                    })(e)
                                ),
                                n.add(c),
                                c.position.set(0.22, 0.31, 0.05),
                                n.scale.set(1.1, 1.1, 1.1),
                                n
                            );
                        },
                        category: "cameras",
                        price: 300,
                    },
                    {
                        name: "Dual Camera",
                        create: function (e, t) {
                            var n = new e.Group();
                            n.add(
                                (function (e) {
                                    if (!Me) {
                                        var t = F(_e);
                                        (Me = new e.ExtrudeGeometry(t, {
                                            depth: 0.08,
                                            bevelEnabled: !0,
                                            bevelThickness: 0.05,
                                            bevelSize: 0.07,
                                            bevelOffset: 0,
                                            bevelSegments: 4,
                                            curveSegments: 64,
                                        })).center(),
                                            Me.translate(0, 0, 0.1),
                                            Me.scale(0.25, 0.25, 0.25);
                                    }
                                    var n = ce(e, {
                                            roughness: 0.14,
                                        }),
                                        r = new e.Mesh(Me, n);
                                    return (
                                        r.position.set(0, 0, 0),
                                        (r.userData = {
                                            useColor: !0,
                                        }),
                                        r
                                    );
                                })(e)
                            );
                            var r = new e.Group();
                            r.add(
                                (function (e) {
                                    if (!ke) {
                                        var t = new e.Shape();
                                        t.absarc(
                                            0,
                                            0,
                                            0.18,
                                            0,
                                            2 * Math.PI,
                                            0,
                                            !1
                                        );
                                        var n = new e.Path();
                                        n.absarc(
                                            0,
                                            0,
                                            0.155,
                                            0,
                                            2 * Math.PI,
                                            !0
                                        ),
                                            t.holes.push(n),
                                            (ke = new e.ExtrudeGeometry(t, {
                                                depth: 0.04,
                                                steps: 1,
                                                bevelEnabled: !1,
                                                curveSegments: 80,
                                            }));
                                    }
                                    var r = ce(e, {
                                            roughness: 0.2,
                                        }),
                                        o = new e.Mesh(ke, r);
                                    return (
                                        (o.userData = {
                                            useColor: !0,
                                        }),
                                        o
                                    );
                                })(e)
                            ),
                                r.add(
                                    (function (e) {
                                        if (!Se) {
                                            var t = new e.Shape();
                                            t.absarc(
                                                0,
                                                0,
                                                0.155,
                                                0,
                                                2 * Math.PI,
                                                0,
                                                !1
                                            );
                                            var n = new e.Path();
                                            n.absarc(
                                                0,
                                                0,
                                                0.08,
                                                0,
                                                2 * Math.PI,
                                                !0
                                            ),
                                                t.holes.push(n),
                                                (Se = new e.ExtrudeGeometry(t, {
                                                    depth: 0.05,
                                                    steps: 1,
                                                    bevelEnabled: !1,
                                                    curveSegments: 16,
                                                }));
                                        }
                                        var r = ce(e, {
                                            color: "#1d1d1f",
                                            roughness: 0.1,
                                        });
                                        return new e.Mesh(Se, r);
                                    })(e)
                                ),
                                r.add(
                                    (function (e) {
                                        Pe ||
                                            (Pe = new e.ConeGeometry(
                                                0.11,
                                                0.02,
                                                16,
                                                10,
                                                !0
                                            ));
                                        var t = ce(e, {
                                                color: "#231078",
                                                roughness: 0.15,
                                                side: e.BackSide,
                                            }),
                                            n = new e.Mesh(Pe, t);
                                        return (
                                            (n.rotation.x = -Math.PI / 2),
                                            n.position.set(0, 0, 0.03),
                                            (n.doubleSided = !0),
                                            n
                                        );
                                    })(e)
                                ),
                                r.add(
                                    (function (e) {
                                        Te ||
                                            (Te = new e.SphereGeometry(
                                                0.035,
                                                9,
                                                9
                                            ));
                                        var t = ce(e, {
                                                color: "#6865bb",
                                                roughness: 0,
                                                metalness: 1,
                                                envMapIntensity: 2.5,
                                            }),
                                            n = new e.Mesh(Te, t);
                                        return n.position.set(0, 0, 0.015), n;
                                    })(e)
                                ),
                                r.add(
                                    (function (e) {
                                        Ie ||
                                            (Ie = new e.CylinderGeometry(
                                                0.15,
                                                0.15,
                                                0.01,
                                                16
                                            ));
                                        var t = new e.MeshPhysicalMaterial({
                                                roughness: 0,
                                                transmission: 1,
                                                thickness: 0.01,
                                            }),
                                            n = new e.Mesh(Ie, t);
                                        return (
                                            n.position.set(0, 0, 0.045),
                                            (n.rotation.x = Math.PI / 2),
                                            n
                                        );
                                    })(e)
                                ),
                                r.scale.set(1.04, 1.04, 1.04);
                            var o = r.clone();
                            o.position.set(0.16, -0.16, 0.05);
                            var l = r.clone();
                            l.position.set(-0.16, 0.16, 0.05),
                                n.add(o),
                                n.add(l),
                                n.add(
                                    (function (e) {
                                        Oe ||
                                            (Oe = new e.CylinderGeometry(
                                                0.03,
                                                0.03,
                                                0.005,
                                                24
                                            ));
                                        var t = ce(e, {
                                                color: "#131313",
                                                roughness: 0.1,
                                                envMapIntensity: 3.8,
                                            }),
                                            n = new e.Mesh(Oe, t);
                                        return (
                                            (n.rotation.x = Math.PI / 2),
                                            n.position.set(-0.21, -0.21, 0.07),
                                            n
                                        );
                                    })(e)
                                );
                            var d = new e.Group();
                            return (
                                d.add(
                                    (function (e) {
                                        if (!De) {
                                            var t = new e.Shape();
                                            t.absarc(
                                                0,
                                                0,
                                                0.075,
                                                0,
                                                2 * Math.PI,
                                                0,
                                                !1
                                            );
                                            var n = new e.Path();
                                            n.absarc(
                                                0,
                                                0,
                                                0.065,
                                                0,
                                                2 * Math.PI,
                                                !0
                                            ),
                                                t.holes.push(n),
                                                (De = new e.ExtrudeGeometry(t, {
                                                    depth: 0.02,
                                                    steps: 1,
                                                    bevelEnabled: !1,
                                                    curveSegments: 24,
                                                }));
                                        }
                                        var r = ce(e, {
                                                roughness: 0.19,
                                            }),
                                            o = new e.Mesh(De, r);
                                        return (
                                            (o.userData = {
                                                useColor: !0,
                                            }),
                                            o
                                        );
                                    })(e)
                                ),
                                d.add(
                                    (function (e) {
                                        Ee ||
                                            (Ee = new e.CylinderGeometry(
                                                0.065,
                                                0.065,
                                                0.04,
                                                16
                                            ));
                                        var t = ce(e, {
                                                color: "#fff8d6",
                                                roughness: 0.3,
                                                envMapIntensity: 4.5,
                                            }),
                                            n = new e.Mesh(Ee, t);
                                        return (n.rotation.x = Math.PI / 2), n;
                                    })(e)
                                ),
                                n.add(d),
                                d.position.set(0.22, 0.22, 0.05),
                                n.scale.set(1.1, 1.1, 1.1),
                                n
                            );
                        },
                        category: "cameras",
                        price: 100,
                    },
                    {
                        name: "Volume Button",
                        create: function (e) {
                            var t = F(Re);
                            Ge ||
                                ((Ge = new e.ExtrudeGeometry(t, {
                                    depth: 0.29,
                                    bevelEnabled: !0,
                                    bevelThickness: 0.2,
                                    bevelSize: 0.2,
                                    bevelOffset: 0,
                                    bevelSegments: 5,
                                })).center(),
                                Ge.translate(0, 0, 0.1),
                                Ge.scale(0.029, 0.029, 0.029));
                            var n = ce(e, {
                                    roughness: 0.11,
                                }),
                                r = new e.Mesh(Ge, n);
                            return (
                                (r.userData = {
                                    useColor: !0,
                                }),
                                r
                            );
                        },
                        rotateOnTop: !0,
                        category: "inputs",
                        price: 75,
                    },
                    {
                        name: "Lightning Port",
                        create: function (e) {
                            var t = new e.Group();
                            return (
                                t.add(
                                    (function (e) {
                                        var t = F(lt.a);
                                        ot ||
                                            ((ot = new e.ExtrudeGeometry(t, {
                                                depth: 1.2,
                                                bevelEnabled: !1,
                                            })).center(),
                                            ot.scale(0.11, 0.11, 0.11));
                                        var n = ce(e, {
                                                color: "black",
                                                roughness: 1,
                                                metalness: 0,
                                            }),
                                            r = new e.Mesh(ot, n);
                                        return (
                                            (r.rotation.z = -Math.PI / 2),
                                            r.position.set(0, 0, -0.065),
                                            r
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        var t = F(ut.a);
                                        at ||
                                            ((at = new e.ExtrudeGeometry(t, {
                                                depth: 0.01,
                                                bevelEnabled: !1,
                                            })).center(),
                                            at.scale(0.115, 0.13, 0.13));
                                        var n = ce(e, {
                                                roughness: 0.5,
                                                metalness: 0,
                                            }),
                                            r = new e.Mesh(at, n);
                                        return (
                                            (r.rotation.z = -Math.PI / 2),
                                            r.position.set(0, 0, 0.001),
                                            (r.userData = {
                                                useColor: !0,
                                            }),
                                            r
                                        );
                                    })(e)
                                ),
                                t
                            );
                        },
                        rotateOnTop: !0,
                        rotateOnFront: !0,
                        category: "ports",
                        price: 100,
                    },
                    {
                        name: "Notch",
                        create: function (e) {
                            var t = new e.Group(),
                                n = F(Vt),
                                r = new e.ExtrudeGeometry(n, {
                                    depth: 0.001,
                                    bevelEnabled: !1,
                                });
                            r.scale(0.053, 0.053, 0.053), r.center();
                            var o = ce(e, {
                                    color: "black",
                                    roughness: 1,
                                }),
                                l = new e.Mesh(r, o);
                            return (
                                l.position.set(0, 0, 0.002),
                                (l.rotation.z = -Math.PI / 2),
                                t.add(l),
                                (t.userData = {
                                    isNotch: !0,
                                }),
                                t
                            );
                        },
                        rotateOnTop: !0,
                        category: "accessories",
                        price: 100,
                    },
                    {
                        name: "Apple Logo",
                        create: dr.appleLogo,
                        category: "logos",
                        price: 200,
                    },
                    {
                        name: "Android Logo",
                        create: dr.androidLogo,
                        category: "logos",
                        price: -100,
                    },
                    {
                        name: "Home Button",
                        create: function (e) {
                            var t = new e.Group();
                            return (
                                t.add(
                                    (function (e) {
                                        Nt ||
                                            (Nt = new e.RingGeometry(
                                                0.215,
                                                0.24,
                                                32
                                            ));
                                        var t = ce(e, {
                                                roughness: 0,
                                                side: e.DoubleSide,
                                            }),
                                            n = new e.Mesh(Nt, t);
                                        return (
                                            n.position.set(0, 0, 0.001),
                                            (n.userData = {
                                                useColor: !0,
                                            }),
                                            n
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        Wt ||
                                            (Wt = new e.CylinderGeometry(
                                                0.215,
                                                0.215,
                                                0.001,
                                                32
                                            ));
                                        var t = ce(e, {
                                                roughness: 0.2,
                                                side: e.DoubleSide,
                                            }),
                                            n = new e.Mesh(Wt, t);
                                        return (
                                            n.position.set(0, 0, 0.001),
                                            (n.rotation.x = Math.PI / 2),
                                            (n.userData = {
                                                useColor: !0,
                                            }),
                                            n
                                        );
                                    })(e)
                                ),
                                t
                            );
                        },
                        category: "inputs",
                        price: 100,
                    },
                    {
                        name: "Power Button",
                        create: function (e) {
                            var t = F(Ae);
                            Be ||
                                ((Be = new e.ExtrudeGeometry(t, {
                                    depth: 0.29,
                                    bevelEnabled: !0,
                                    bevelThickness: 0.2,
                                    bevelSize: 0.2,
                                    bevelOffset: 0,
                                    bevelSegments: 5,
                                })).center(),
                                Be.translate(0, 0, 0.1),
                                Be.scale(0.029, 0.029, 0.029));
                            var n = ce(e, {
                                    roughness: 0.11,
                                }),
                                r = new e.Mesh(Be, n);
                            return (
                                (r.userData = {
                                    useColor: !0,
                                }),
                                r
                            );
                        },
                        rotateOnTop: !0,
                        category: "inputs",
                        price: 100,
                    },
                    {
                        name: "Silencer",
                        create: function (e) {
                            var t = new e.Group();
                            return (
                                t.add(
                                    (function (e) {
                                        var t = F(Pn.a);
                                        kn ||
                                            ((kn = new e.ExtrudeGeometry(t, {
                                                depth: 0.005,
                                                bevelEnabled: !0,
                                                bevelThickness: 0.005,
                                                bevelSize: 0.1,
                                                bevelOffset: 0,
                                                bevelSegments: 3,
                                                curveSegments: 32,
                                            })).scale(0.0059, 0.0059, 1),
                                            kn.center());
                                        var n = ce(e, {
                                                roughness: 0.1,
                                            }),
                                            r = new e.Mesh(kn, n);
                                        return (
                                            (r.userData = {
                                                useColor: !0,
                                            }),
                                            r.position.set(-0.01, 0, 0.01),
                                            (r.rotation.z = -Math.PI),
                                            r
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        var t = F(Pn.a);
                                        Tn ||
                                            ((Tn = new e.ExtrudeGeometry(t, {
                                                depth: 0.001,
                                                bevelEnabled: !1,
                                                curveSegments: 24,
                                            })).scale(0.0059, 0.0059, 1),
                                            Tn.center());
                                        var n = ce(e, {
                                                roughness: 0.1,
                                                metalness: 0.99,
                                                color: "#ff5353",
                                                envMapIntensity: 2,
                                            }),
                                            r = new e.Mesh(Tn, n);
                                        return (
                                            r.position.set(0.01, 0, 0.01),
                                            (r.rotation.z = -Math.PI),
                                            r
                                        );
                                    })(e)
                                ),
                                t
                            );
                        },
                        category: "inputs",
                        price: 50,
                        rotateOnTop: !0,
                    },
                    {
                        name: "Front Camera",
                        create: function (e) {
                            var t = new e.Group();
                            return (
                                t.add(
                                    (function (e) {
                                        mn ||
                                            (mn = new e.CylinderGeometry(
                                                0.042,
                                                0.042,
                                                0.02,
                                                16
                                            ));
                                        var t = ce(e, {
                                                roughness: 0,
                                                metalness: 0.99,
                                                envMapIntensity: 1,
                                                color: "#19235e",
                                            }),
                                            n = new e.Mesh(mn, t);
                                        return (
                                            (n.rotation.x = -Math.PI / 2),
                                            n.position.set(0, 0, -0.005),
                                            n
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        wn ||
                                            (wn = new e.CylinderGeometry(
                                                0.025,
                                                0.025,
                                                0.02,
                                                16
                                            ));
                                        var t = ce(e, {
                                                roughness: 0,
                                                metalness: 0.99,
                                                envMapIntensity: 1.5,
                                                color: "#1a2581",
                                            }),
                                            n = new e.Mesh(wn, t);
                                        return (
                                            (n.rotation.x = -Math.PI / 2),
                                            n.position.set(0, 0, -0.0045),
                                            n
                                        );
                                    })(e)
                                ),
                                t
                            );
                        },
                        category: "cameras",
                        price: 125,
                    },
                    {
                        name: "Pro Notch",
                        create: function (e) {
                            var t = new e.Group(),
                                n = F(Yn),
                                r = new e.ExtrudeGeometry(n, {
                                    depth: 0.001,
                                    bevelEnabled: !1,
                                });
                            r.scale(0.0515, 0.0515, 0.0515), r.center();
                            var o = ce(e, {
                                    color: "black",
                                    roughness: 1,
                                }),
                                l = new e.Mesh(r, o);
                            return (
                                l.position.set(0, 0, 0.002),
                                (l.rotation.z = -Math.PI / 2),
                                t.add(l),
                                (t.userData = {
                                    isNotch: !0,
                                    offset: -0.055,
                                }),
                                t
                            );
                        },
                        category: "logos",
                        price: 100,
                        rotateOnTop: !0,
                    },
                    {
                        name: "Single Camera",
                        create: function (e, t) {
                            var n = new e.Group();
                            return (
                                n.add(
                                    (function (e) {
                                        jn ||
                                            (jn = new e.CylinderGeometry(
                                                0.185,
                                                0.185,
                                                0.01,
                                                24
                                            ));
                                        var t = ce(e, {
                                                roughness: 0.2,
                                            }),
                                            n = new e.Mesh(jn, t);
                                        return (
                                            (n.rotation.x = Math.PI / 2),
                                            n.position.set(0, 0, 0),
                                            (n.userData = {
                                                useColor: !0,
                                            }),
                                            n
                                        );
                                    })(e)
                                ),
                                n.add(
                                    (function (e) {
                                        if (!Gn) {
                                            var t = new e.Shape();
                                            t.absarc(
                                                0,
                                                0,
                                                0.18,
                                                0,
                                                2 * Math.PI,
                                                0,
                                                !1
                                            );
                                            var n = new e.Path();
                                            n.absarc(
                                                0,
                                                0,
                                                0.155,
                                                0,
                                                2 * Math.PI,
                                                !0
                                            ),
                                                t.holes.push(n),
                                                (Gn = new e.ExtrudeGeometry(t, {
                                                    depth: 0.04,
                                                    bevelEnabled: !1,
                                                    curveSegments: 85,
                                                }));
                                        }
                                        var r = ce(e, {
                                                roughness: 0.2,
                                            }),
                                            o = new e.Mesh(Gn, r);
                                        return (
                                            (o.userData = {
                                                useColor: !0,
                                            }),
                                            o
                                        );
                                    })(e)
                                ),
                                n.add(
                                    (function (e) {
                                        if (!Bn) {
                                            var t = new e.Shape();
                                            t.absarc(
                                                0,
                                                0,
                                                0.155,
                                                0,
                                                2 * Math.PI,
                                                0,
                                                !1
                                            );
                                            var n = new e.Path();
                                            n.absarc(
                                                0,
                                                0,
                                                0.07,
                                                0,
                                                2 * Math.PI,
                                                !0
                                            ),
                                                t.holes.push(n),
                                                (Bn = new e.ExtrudeGeometry(t, {
                                                    depth: 0.05,
                                                    bevelEnabled: !1,
                                                    curveSegments: 16,
                                                }));
                                        }
                                        var r = ce(e, {
                                            color: "#1d1d1f",
                                            roughness: 0.1,
                                        });
                                        return new e.Mesh(Bn, r);
                                    })(e)
                                ),
                                n.add(
                                    (function (e) {
                                        An ||
                                            (An = new e.ConeGeometry(
                                                0.1,
                                                0.02,
                                                16,
                                                3,
                                                !0
                                            ));
                                        var t = ce(e, {
                                                color: "#4029a5",
                                                roughness: 0.15,
                                                side: e.BackSide,
                                            }),
                                            n = new e.Mesh(An, t);
                                        return (
                                            (n.rotation.x = -Math.PI / 2),
                                            n.position.set(0, 0, 0.03),
                                            (n.doubleSided = !0),
                                            n
                                        );
                                    })(e)
                                ),
                                n.add(
                                    (function (e) {
                                        Rn ||
                                            (Rn = new e.SphereGeometry(
                                                0.035,
                                                9,
                                                8,
                                                0,
                                                2 * Math.PI,
                                                0,
                                                0.5 * Math.PI
                                            ));
                                        var t = ce(e, {
                                                color: "#6865bb",
                                                roughness: 0,
                                                metalness: 1,
                                                envMapIntensity: 2.5,
                                            }),
                                            n = new e.Mesh(Rn, t);
                                        return (
                                            n.position.set(0, 0, 0.015),
                                            (n.rotation.x = Math.PI / 2),
                                            n
                                        );
                                    })(e)
                                ),
                                n.add(
                                    (function (e) {
                                        zn ||
                                            (zn = new e.CylinderGeometry(
                                                0.15,
                                                0.15,
                                                0.01,
                                                16
                                            ));
                                        var t = new e.MeshPhysicalMaterial({
                                                roughness: 0,
                                                transmission: 1,
                                                thickness: 0.01,
                                            }),
                                            n = new e.Mesh(zn, t);
                                        return (
                                            n.position.set(0, 0, 0.045),
                                            (n.rotation.x = Math.PI / 2),
                                            n
                                        );
                                    })(e)
                                ),
                                n.scale.set(1.1, 1.1, 1.1),
                                new e.Group().add(n),
                                n
                            );
                        },
                        category: "cameras",
                        price: 50,
                    },
                    {
                        name: "Click wheel",
                        create: function (e) {
                            var t = new e.Group();
                            return (
                                t.add(
                                    (function (e) {
                                        Ve ||
                                            (Ve = new e.RingGeometry(
                                                0.2,
                                                0.6,
                                                52
                                            ));
                                        var t = ce(e, {
                                                roughness: 0.2,
                                                side: e.DoubleSide,
                                            }),
                                            n = new e.Mesh(Ve, t);
                                        return (
                                            n.position.set(0, 0, 0.001),
                                            (n.userData = {
                                                useColor: !0,
                                            }),
                                            n
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        var t = F(qe.a);
                                        Ze ||
                                            ((Ze = new e.ExtrudeGeometry(t, {
                                                depth: 0.01,
                                                bevelEnabled: !1,
                                            })).center(),
                                            Ze.scale(0.051, 0.051, 0.051));
                                        var n = ce(e, {
                                                roughness: 1,
                                                metalness: 0,
                                                color: "white",
                                            }),
                                            r = new e.Mesh(Ze, n);
                                        return r.position.set(0, 0, 0.001), r;
                                    })(e)
                                ),
                                t
                            );
                        },
                        category: "inputs",
                        price: 50,
                    },
                    {
                        name: "Headphone Jack",
                        create: function (e) {
                            var t = new e.Group();
                            return (
                                t.add(
                                    (function (e) {
                                        Qe ||
                                            (Qe = new e.CylinderGeometry(
                                                0.053,
                                                0.053,
                                                0.2,
                                                32
                                            ));
                                        var t = new e.MeshBasicMaterial({
                                                color: "black",
                                            }),
                                            n = new e.Mesh(Qe, t);
                                        return (
                                            n.position.set(0, 0, -0.099),
                                            (n.rotation.x = -Math.PI / 2),
                                            n
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        Ke ||
                                            (Ke = new e.RingGeometry(
                                                0.053,
                                                0.062,
                                                32
                                            ));
                                        var t = ce(e, {
                                                roughness: 0.15,
                                            }),
                                            n = new e.Mesh(Ke, t);
                                        return (
                                            (n.userData = {
                                                useColor: !0,
                                            }),
                                            n
                                        );
                                    })(e)
                                ),
                                t
                            );
                        },
                        category: "ports",
                        price: 200,
                    },
                    {
                        name: "Antenna",
                        create: function (e) {
                            var t = new e.Group();
                            return (
                                t.add(
                                    (function (e) {
                                        Je ||
                                            (Je = new e.CylinderGeometry(
                                                0.055,
                                                0.055,
                                                0.3,
                                                16
                                            ));
                                        var t = ce(e, {
                                                roughness: 0.1,
                                            }),
                                            n = new e.Mesh(Je, t);
                                        return (
                                            (n.userData = {
                                                useColor: !0,
                                            }),
                                            (n.rotation.x = -Math.PI / 2),
                                            n.position.set(0, 0, 0.15),
                                            n
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        et ||
                                            (et = new e.CylinderGeometry(
                                                0.042,
                                                0.042,
                                                0.7,
                                                16
                                            ));
                                        var t = ce(e, {
                                                roughness: 0.1,
                                            }),
                                            n = new e.Mesh(et, t);
                                        return (
                                            (n.userData = {
                                                useColor: !0,
                                            }),
                                            (n.rotation.x = -Math.PI / 2),
                                            n.position.set(0, 0, 0.55),
                                            n
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        tt ||
                                            (tt = new e.CylinderGeometry(
                                                0.031,
                                                0.031,
                                                1,
                                                16
                                            ));
                                        var t = ce(e, {
                                                roughness: 0.1,
                                            }),
                                            n = new e.Mesh(tt, t);
                                        return (
                                            (n.userData = {
                                                useColor: !0,
                                            }),
                                            (n.rotation.x = -Math.PI / 2),
                                            n.position.set(0, 0, 1),
                                            n
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        nt ||
                                            (nt = new e.SphereGeometry(
                                                0.05,
                                                16,
                                                16
                                            ));
                                        var t = ce(e, {
                                                color: "silver",
                                                roughness: 0.1,
                                                side: e.DoubleSide,
                                            }),
                                            n = new e.Mesh(nt, t);
                                        return (
                                            (n.userData = {
                                                useColor: !0,
                                            }),
                                            (n.rotation.x = -Math.PI / 2),
                                            n.position.set(0, 0, 1.5),
                                            n
                                        );
                                    })(e)
                                ),
                                t
                            );
                        },
                        category: "accessories",
                        price: 50,
                    },
                    {
                        name: "Pro Feet",
                        create: function (e) {
                            var t = new e.Group();
                            return (
                                t.add(
                                    (function (e) {
                                        _t = new e.CylinderGeometry(
                                            0.08,
                                            0.08,
                                            0.4,
                                            24
                                        );
                                        var t = ce(e, {
                                                roughness: 0.11,
                                            }),
                                            n = new e.Mesh(_t, t);
                                        return (
                                            n.position.set(0, 0, 0.2),
                                            (n.rotation.x = Math.PI / 2),
                                            (n.userData = {
                                                useColor: !0,
                                            }),
                                            n
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        if (!Gt) {
                                            var t = F(Rt);
                                            (Gt = new e.ExtrudeGeometry(t, {
                                                depth: 0.03,
                                                bevelEnabled: !0,
                                                bevelThickness: 0.02,
                                                bevelSize: 0.1,
                                                bevelOffset: 0,
                                                bevelSegments: 4,
                                                curveSegments: 80,
                                            })).scale(0.15, 0.15, 1),
                                                Gt.center();
                                        }
                                        var n = ce(e, {
                                                roughness: 0.2,
                                            }),
                                            r = new e.Mesh(Gt, n);
                                        return (
                                            (r.userData = {
                                                useColor: !0,
                                            }),
                                            r.position.set(0, 0, 0.4),
                                            r
                                        );
                                    })(e)
                                ),
                                t
                            );
                        },
                        category: "accessories",
                        price: 75,
                    },
                    {
                        name: "Googly Eyes",
                        create: function (e) {
                            var t = new e.Group();
                            return (
                                t.add(
                                    (function (e) {
                                        He ||
                                            (He = new e.CylinderGeometry(
                                                0.23,
                                                0.23,
                                                0.02,
                                                32
                                            ));
                                        var t = ce(e, {
                                                color: "white",
                                                roughness: 0.99,
                                                envMapIntensity: 4.6,
                                            }),
                                            n = new e.Mesh(He, t);
                                        return (n.rotation.x = -Math.PI / 2), n;
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        Fe ||
                                            (Fe = new e.CylinderGeometry(
                                                0.12,
                                                0.12,
                                                0.007,
                                                32
                                            ));
                                        var t = ce(e, {
                                                roughness: 0.2,
                                            }),
                                            n = new e.Mesh(Fe, t);
                                        return (
                                            (n.rotation.x = -Math.PI / 2),
                                            n.position.set(0, -0.08, 0.02),
                                            (n.userData = {
                                                useColor: !0,
                                            }),
                                            n
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        Ye ||
                                            (Ye = new e.SphereGeometry(
                                                0.23,
                                                16,
                                                16,
                                                0,
                                                Math.PI
                                            ));
                                        var t = new e.MeshPhysicalMaterial({
                                                roughness: 0.015,
                                                transmission: 1,
                                                thickness: 0.01,
                                            }),
                                            n = new e.Mesh(Ye, t);
                                        return (
                                            n.position.set(0, 0, 0.01),
                                            n.scale.set(1, 1, 0.38),
                                            n
                                        );
                                    })(e)
                                ),
                                (t.userData = {
                                    defaultColor: $e,
                                }),
                                t
                            );
                        },
                        category: "accessories",
                        price: 75,
                    },
                    {
                        name: "Pro Stand",
                        create: function (e) {
                            var t = new e.Group();
                            t.add(
                                (function (e) {
                                    var t = F(kt.a);
                                    xt ||
                                        ((xt = new e.ExtrudeGeometry(t, {
                                            depth: 0.13,
                                            bevelEnabled: !1,
                                            curveSegments: 25,
                                        })).center(),
                                        xt.scale(0.7, 0.7, 0.7));
                                    var n = ce(e, {
                                            color: "silver",
                                            roughness: 0.25,
                                        }),
                                        r = new e.Mesh(xt, n);
                                    return (
                                        r.position.set(0, -1.3, 0.78),
                                        (r.userData = {
                                            useColor: !0,
                                        }),
                                        r
                                    );
                                })(e)
                            ),
                                t.add(
                                    (function (e) {
                                        var t = F(St.a);
                                        bt ||
                                            ((bt = new e.ExtrudeGeometry(t, {
                                                depth: 0.13,
                                                bevelEnabled: !1,
                                            })).center(),
                                            bt.scale(0.56, 0.56, 0.7));
                                        var n = ce(e, {
                                                color: "silver",
                                                roughness: 0.25,
                                            }),
                                            r = new e.Mesh(bt, n);
                                        return (
                                            r.position.set(0, -2.56, 0.78),
                                            (r.rotation.x = Math.PI / 2),
                                            (r.userData = {
                                                useColor: !0,
                                            }),
                                            r
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        var t = F(Et.a);
                                        Ct ||
                                            ((Ct = new e.ExtrudeGeometry(t, {
                                                depth: 1.9,
                                                bevelEnabled: !1,
                                            })).center(),
                                            Ct.scale(0.3, 0.3, 0.3));
                                        var n = ce(e, {
                                                color: "silver",
                                                roughness: 0.25,
                                            }),
                                            r = new e.Mesh(Ct, n);
                                        return (
                                            r.position.set(0, -0.14, 0.39),
                                            (r.rotation.y = Math.PI / 2),
                                            (r.rotation.x = Math.PI / 2 + 0.4),
                                            (r.userData = {
                                                useColor: !0,
                                            }),
                                            r
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        if (!yt) {
                                            var t = F(It.a);
                                            (yt = new e.ExtrudeGeometry(t, {
                                                depth: 0.02,
                                                bevelEnabled: !0,
                                                bevelThickness: 0.02,
                                                bevelSize: 0.1,
                                                bevelOffset: 0,
                                                bevelSegments: 3,
                                                curveSegments: 64,
                                            })).scale(0.15, 0.15, 1),
                                                yt.center();
                                        }
                                        var n = ce(e, {
                                                roughness: 0.25,
                                            }),
                                            r = new e.Mesh(yt, n);
                                        return (
                                            (r.userData = {
                                                useColor: !0,
                                            }),
                                            r.position.set(0, 0, 0.025),
                                            r
                                        );
                                    })(e)
                                );
                            var n = Ot(e);
                            n.position.set(0.29, -0.045, 0.17);
                            var r = Ot(e);
                            r.position.set(0.29, -0.24, 0.62);
                            var o = Ot(e);
                            o.position.set(-0.29, -0.045, 0.17);
                            var l = Ot(e);
                            return (
                                l.position.set(-0.29, -0.24, 0.62),
                                t.add(n),
                                t.add(r),
                                t.add(o),
                                t.add(l),
                                t.scale.set(1.05, 1.05, 1.05),
                                t
                            );
                        },
                        category: "accessories",
                        price: 1e3,
                    },
                    {
                        name: "HDMI",
                        create: function (e) {
                            var t = new e.Group();
                            return (
                                t.add(
                                    (function (e) {
                                        if (!qt) {
                                            var t = F(Kt);
                                            (qt = new e.ExtrudeGeometry(t, {
                                                depth: 2.8,
                                                bevelEnabled: !0,
                                                bevelThickness: 0.1,
                                                bevelSize: 0.1,
                                                bevelOffset: 0,
                                                bevelSegments: 3,
                                            })).center(),
                                                qt.scale(0.06, 0.06, 0.06);
                                        }
                                        var n = ce(e, {
                                                roughness: 0.15,
                                            }),
                                            r = new e.Mesh(qt, n);
                                        return (
                                            r.position.set(0, 0, -0.09),
                                            (r.rotation.z = -Math.PI / 2),
                                            (r.userData = {
                                                useColor: !0,
                                            }),
                                            r
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        if (!$t) {
                                            var t = F(Kt);
                                            ($t = new e.ExtrudeGeometry(t, {
                                                depth: 0.01,
                                                bevelEnabled: !1,
                                            })).center(),
                                                $t.scale(0.0575, 0.053, 0.053);
                                        }
                                        var n = ce(e, {
                                                color: "black",
                                            }),
                                            r = new e.Mesh($t, n);
                                        return (
                                            r.position.set(0, 0, 5e-4),
                                            (r.rotation.z = -Math.PI / 2),
                                            r
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        if (!Qt) {
                                            var t = F(Jt);
                                            (Qt = new e.ExtrudeGeometry(t, {
                                                depth: 0.01,
                                                bevelEnabled: !1,
                                            })).center(),
                                                Qt.scale(0.015, 0.01, 0.015);
                                        }
                                        var n = ce(e, {
                                                roughness: 0.15,
                                            }),
                                            r = new e.Mesh(Qt, n);
                                        return (
                                            r.position.set(0, 0, 7e-4),
                                            (r.rotation.z = -Math.PI / 2),
                                            (r.userData = {
                                                useColor: !0,
                                            }),
                                            r
                                        );
                                    })(e)
                                ),
                                t
                            );
                        },
                        rotateOnFront: !0,
                        rotateOnTop: !0,
                        category: "ports",
                        price: 25,
                    },
                    {
                        name: "Digital Crown",
                        create: function (e) {
                            var t = new e.Group();
                            return (
                                t.add(
                                    (function (e) {
                                        var t = F(Ut);
                                        At ||
                                            ((At = new e.ExtrudeGeometry(t, {
                                                depth: 0.2,
                                                bevelEnabled: !0,
                                                bevelThickness: 0.8,
                                                bevelSize: 0.8,
                                                bevelOffset: 0,
                                                bevelSegments: 3,
                                                curveSegments: 48,
                                            })).center(),
                                            At.scale(0.047, 0.047, 0.047));
                                        var n = ce(e, {
                                                roughness: 0.2,
                                            }),
                                            r = new e.Mesh(At, n);
                                        return (
                                            r.position.set(0, 0, 0.039),
                                            (r.userData = {
                                                useColor: !0,
                                            }),
                                            r
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        var t = F(jt);
                                        Bt ||
                                            ((Bt = new e.ExtrudeGeometry(t, {
                                                depth: 0.08,
                                                bevelEnabled: !1,
                                            })).center(),
                                            Bt.scale(0.345, 0.345, 0.345));
                                        var n = ce(e, {
                                                roughness: 0.2,
                                            }),
                                            r = new e.Mesh(Bt, n);
                                        return (
                                            r.position.set(0, 0, 0.055),
                                            (r.userData = {
                                                useColor: !0,
                                            }),
                                            r
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        zt ||
                                            (zt = new e.RingGeometry(
                                                0.08,
                                                0.1,
                                                24
                                            ));
                                        var t = ce(e, {
                                                roughness: 1,
                                            }),
                                            n = new e.Mesh(zt, t);
                                        return (
                                            (n.userData = {
                                                useColor: !0,
                                            }),
                                            n.position.set(0, 0, 0.083),
                                            n
                                        );
                                    })(e)
                                ),
                                t
                            );
                        },
                        category: "inputs",
                        price: 100,
                    },
                    {
                        name: "Pear Logo",
                        create: dr.pearLogo,
                        category: "logos",
                        price: 25,
                    },
                    {
                        name: "Pro Handle",
                        create: function (e) {
                            var t = F(vt.a),
                                n = new e.Group();
                            ht ||
                                ((ht = new e.ExtrudeGeometry(t, {
                                    depth: 0.001,
                                    bevelEnabled: !0,
                                    bevelThickness: 0.15,
                                    bevelSize: 0.15,
                                    bevelOffset: 0,
                                    bevelSegments: 24,
                                    curveSegments: 48,
                                })).center(),
                                ht.scale(0.45, 0.45, 0.45));
                            var r = ce(e, {
                                    roughness: 0.14,
                                    metalness: 1,
                                }),
                                o = new e.Mesh(ht, r);
                            return (
                                (o.rotation.y = -Math.PI / 2),
                                (o.rotation.x = -Math.PI / 2),
                                o.position.set(0, 0, 0.24),
                                (o.userData = {
                                    useColor: !0,
                                }),
                                n.add(o),
                                n
                            );
                        },
                        rotateOnTop: !0,
                        category: "accessories",
                        price: 75,
                    },
                    {
                        name: "Joystick",
                        create: function (e) {
                            var t = new e.Group(),
                                n = We(0, e);
                            n.position.set(0, 0, 0.09),
                                n.scale.set(0.18, 0.18, 0.18);
                            var r = We(0, e);
                            return (
                                r.position.set(0, 0, 0.21),
                                r.scale.set(0.11, 0.11, 0.11),
                                t.add(n),
                                t.add(r),
                                t.add(
                                    (function (e) {
                                        je ||
                                            (je = new e.CylinderGeometry(
                                                0.05,
                                                0.09,
                                                0.7,
                                                16,
                                                6
                                            ));
                                        var t = ce(e, {
                                                color: "#262626",
                                                roughness: 0.15,
                                                envMapIntensity: 3,
                                            }),
                                            n = new e.Mesh(je, t);
                                        return (
                                            (n.rotation.x = -Math.PI / 2),
                                            n.position.set(0, 0, 0.5),
                                            n
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        Ue ||
                                            (Ue = new e.SphereGeometry(
                                                0.17,
                                                24,
                                                16
                                            ));
                                        var t = ce(e, {
                                                roughness: 0.15,
                                                metalness: 1,
                                                clearcoat: 0,
                                                clearcoatRoughness: 0,
                                                reflectivity: 1,
                                            }),
                                            n = new e.Mesh(Ue, t);
                                        return (
                                            n.position.set(0, 0, 0.8),
                                            (n.userData = {
                                                useColor: !0,
                                            }),
                                            n
                                        );
                                    })(e)
                                ),
                                (t.userData = {
                                    defaultColor: Ne,
                                }),
                                t
                            );
                        },
                        category: "inputs",
                        price: 50,
                    },
                    {
                        name: "Dpad",
                        create: function (e) {
                            var t = new e.Group();
                            return (
                                t.add(
                                    (function (e) {
                                        var t = F(it),
                                            n = new e.ExtrudeGeometry(t, {
                                                depth: 0.02,
                                                bevelEnabled: !0,
                                                bevelThickness: 0.02,
                                                bevelSize: 0.25,
                                                bevelOffset: 0,
                                                bevelSegments: 4,
                                                curveSegments: 24,
                                            });
                                        n.center();
                                        var r = ce(e, {
                                                roughness: 0.15,
                                            }),
                                            o = new e.Mesh(n, r);
                                        return (
                                            (o.userData = {
                                                useColor: !0,
                                            }),
                                            o.scale.set(0.055, 0.055, 1),
                                            o.position.set(0, 0, 0.023),
                                            o.updateMatrix(),
                                            o
                                        );
                                    })(e)
                                ),
                                t
                            );
                        },
                        category: "inputs",
                        price: 50,
                    },
                    {
                        name: "Pro Wheel",
                        create: function (e) {
                            var t = new e.Group();
                            return (
                                t.add(
                                    (function (e) {
                                        var t = F(wt.a),
                                            n = new e.Group();
                                        ft ||
                                            ((ft = new e.ExtrudeGeometry(t, {
                                                depth: 0.3,
                                                bevelEnabled: !0,
                                                bevelThickness: 0.3,
                                                bevelSize: 0.11,
                                                bevelOffset: 0,
                                                bevelSegments: 10,
                                                curveSegments: 36,
                                            })).center(),
                                            ft.scale(0.38, 0.38, 0.38)),
                                            gt ||
                                                ((gt = new e.ExtrudeGeometry(
                                                    t,
                                                    {
                                                        depth: 0.3,
                                                        bevelEnabled: !0,
                                                        bevelThickness: 0.3,
                                                        bevelSize: 0.11,
                                                        bevelOffset: 0,
                                                        bevelSegments: 3,
                                                        curveSegments: 32,
                                                    }
                                                )).center(),
                                                gt.scale(0.38, 0.38, 0.38));
                                        var r = ce(e, {
                                                color: "#171E27",
                                                roughness: 0.9,
                                                metalness: 1,
                                            }),
                                            o = ce(e, {
                                                roughness: 0.2,
                                            }),
                                            l = new e.Mesh(gt, r);
                                        l.scale.set(0.85, 0.85, 0.48),
                                            l.position.set(0, 0, 0.11);
                                        var d = l.clone();
                                        d.position.set(0, 0, -0.11);
                                        var c = new e.Mesh(ft, o);
                                        return (
                                            c.scale.set(0.7, 0.7, 1.13),
                                            (c.userData = {
                                                useColor: !0,
                                            }),
                                            n.add(l),
                                            n.add(d),
                                            n.add(c),
                                            (n.rotation.x = Math.PI / 2),
                                            n.position.set(0, 0, 0.5),
                                            n
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        var t = new e.CylinderGeometry(
                                                0.075,
                                                0.075,
                                                0.3,
                                                24
                                            ),
                                            n = ce(e, {
                                                roughness: 0.1,
                                            }),
                                            r = new e.Mesh(t, n);
                                        return (
                                            r.position.set(0, 0, 0.15),
                                            (r.rotation.x = Math.PI / 2),
                                            (r.userData = {
                                                useColor: !0,
                                            }),
                                            r
                                        );
                                    })(e)
                                ),
                                t
                            );
                        },
                        rotateOnTop: !0,
                        rotateOnFront: !0,
                        category: "accessories",
                        price: 175,
                    },
                    {
                        name: "Rotary Dial",
                        create: function (e) {
                            var t = new e.Group();
                            return (
                                t.add(
                                    (function (e) {
                                        var t = F(sn.a);
                                        en ||
                                            ((en = new e.ExtrudeGeometry(t, {
                                                depth: 0.1,
                                                bevelEnabled: !0,
                                                bevelThickness: 0.06,
                                                bevelSize: 0.09,
                                                bevelOffset: 0,
                                                bevelSegments: 2,
                                                curveSegments: 38,
                                            })).center(),
                                            en.scale(0.22, 0.22, 0.22));
                                        var n = ce(e, {
                                                roughness: 0.15,
                                            }),
                                            r = new e.Mesh(en, n);
                                        return (
                                            (r.userData = {
                                                useColor: !0,
                                            }),
                                            r.position.set(0, 0, 0.09),
                                            r
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        tn ||
                                            (tn = new e.CylinderGeometry(
                                                0.82,
                                                0.82,
                                                0.01,
                                                48
                                            ));
                                        var t = new e.TextureLoader(),
                                            n = ce(e, {
                                                roughness: 0.2,
                                                color: "white",
                                                envMapIntensity: 4,
                                                map: t.load(
                                                    "/design-the-next-iphone/rotary-numbers.png"
                                                ),
                                            }),
                                            r = new e.Mesh(tn, n);
                                        return (
                                            r.position.set(0, 0, 0.01),
                                            (r.rotation.x = -Math.PI / 2),
                                            r
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        var t = F(It.a);
                                        nn ||
                                            ((nn = new e.ExtrudeGeometry(t, {
                                                depth: 0.04,
                                                bevelEnabled: !0,
                                                bevelThickness: 0.06,
                                                bevelSize: 0.18,
                                                bevelOffset: 0,
                                                bevelSegments: 4,
                                                curveSegments: 32,
                                            })).scale(0.16, 0.16, 1),
                                            nn.center());
                                        var n = ce(e, {
                                                roughness: 0.3,
                                            }),
                                            r = new e.Mesh(nn, n);
                                        return (
                                            r.position.set(0, 0, 0.1),
                                            (r.userData = {
                                                useColor: !0,
                                            }),
                                            r
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        var t = F(dn.a);
                                        rn ||
                                            ((rn = new e.ExtrudeGeometry(t, {
                                                depth: 0.01,
                                                bevelEnabled: !0,
                                                bevelThickness: 0.02,
                                                bevelSize: 0.18,
                                                bevelOffset: 0,
                                                bevelSegments: 1,
                                                curveSegments: 20,
                                            })).scale(0.023, 0.023, 1),
                                            rn.center());
                                        var n = ce(e, {
                                                roughness: 0.1,
                                            }),
                                            r = new e.Mesh(rn, n);
                                        return (
                                            r.position.set(0.65, 0, 0.12),
                                            (r.userData = {
                                                useColor: !0,
                                            }),
                                            r
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        on ||
                                            (on = new e.BoxGeometry(
                                                0.03,
                                                0.1,
                                                0.14
                                            ));
                                        var t = ce(e, {
                                                roughness: 0.1,
                                            }),
                                            n = new e.Mesh(on, t);
                                        return (
                                            n.position.set(0.82, 0, 0.07),
                                            (n.rotation.y = 0.6),
                                            (n.userData = {
                                                useColor: !0,
                                            }),
                                            n
                                        );
                                    })(e)
                                ),
                                t.scale.set(0.9, 0.9, 0.9),
                                t
                            );
                        },
                        category: "inputs",
                        price: 200,
                    },
                    {
                        name: "Cup Holder",
                        create: function (e) {
                            var t = new e.Group();
                            return (
                                t.add(
                                    (function (e) {
                                        var t = F(bn.a);
                                        vn ||
                                            ((vn = new e.ExtrudeGeometry(t, {
                                                depth: 0.02,
                                                bevelEnabled: !0,
                                                bevelThickness: 0.02,
                                                bevelSize: 0.5,
                                                bevelOffset: 0,
                                                bevelSegments: 4,
                                                curveSegments: 56,
                                            })).scale(0.064, 0.064, 1),
                                            vn.center());
                                        var n = ce(e, {
                                                roughness: 0.15,
                                            }),
                                            r = new e.Mesh(vn, n);
                                        return (
                                            (r.rotation.x = Math.PI / 2),
                                            r.position.set(0, 0.45, 0.38),
                                            (r.userData = {
                                                useColor: !0,
                                            }),
                                            r
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        var t = F(yn.a);
                                        fn ||
                                            ((fn = new e.ExtrudeGeometry(t, {
                                                depth: 0.02,
                                                bevelEnabled: !0,
                                                bevelThickness: 0.02,
                                                bevelSize: 0.5,
                                                bevelOffset: 0,
                                                bevelSegments: 4,
                                                curveSegments: 48,
                                            })).scale(0.065, 0.065, 1),
                                            fn.center());
                                        var n = ce(e, {
                                                roughness: 0.15,
                                            }),
                                            r = new e.Mesh(fn, n);
                                        return (
                                            (r.rotation.x = Math.PI / 2),
                                            r.position.set(0, -0.45, 0.35),
                                            (r.userData = {
                                                useColor: !0,
                                            }),
                                            r
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        var t = F(Mn.a);
                                        gn ||
                                            ((gn = new e.ExtrudeGeometry(t, {
                                                depth: 0.02,
                                                bevelEnabled: !0,
                                                bevelThickness: 0.02,
                                                bevelSize: 0.5,
                                                bevelOffset: 0,
                                                bevelSegments: 3,
                                                curveSegments: 48,
                                            })).scale(0.063, 0.061, 1),
                                            gn.center());
                                        var n = ce(e, {
                                                roughness: 0.15,
                                            }),
                                            r = new e.Mesh(gn, n);
                                        return (
                                            (r.userData = {
                                                useColor: !0,
                                            }),
                                            r.position.set(0, 0, 0.03),
                                            r
                                        );
                                    })(e)
                                ),
                                t.scale.set(1.2, 1.2, 1.2),
                                t
                            );
                        },
                        category: "accessories",
                        price: 50,
                    },
                    {
                        name: "Pro Max Camera",
                        create: function (e) {
                            var t = new e.Group();
                            t.add(Fn(e));
                            var n = Zn(e, 0.35, "#1c1c1c");
                            n.position.set(0, 0, 0.55), t.add(n);
                            var r = Zn(e, 0.25, "#3b3b3b");
                            r.position.set(0, 0, 0.45), t.add(r);
                            var o = Zn(e, 0.15, "#686868");
                            o.position.set(0, 0, 0.32), t.add(o);
                            var l = Zn(e, 0.05, "#003052");
                            l.position.set(0, 0, 0.25),
                                t.add(l),
                                t.add(
                                    (function (e) {
                                        On ||
                                            (On = new e.CylinderGeometry(
                                                0.35,
                                                0.35,
                                                0.04,
                                                24
                                            ));
                                        var t = new e.MeshPhysicalMaterial({
                                                roughness: 0.015,
                                                transmission: 1,
                                                thickness: 0.02,
                                            }),
                                            n = new e.Mesh(On, t);
                                        return (
                                            n.position.set(0, 0, 0.52),
                                            (n.rotation.x = -Math.PI / 2),
                                            n
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        _n ||
                                            (_n = new e.SphereGeometry(
                                                0.15,
                                                20,
                                                20
                                            ));
                                        var t = ce(e, {
                                                roughness: 0.1,
                                                color: "#5946ff",
                                                envMapIntensity: 2,
                                            }),
                                            n = new e.Mesh(_n, t);
                                        return n.position.set(0, 0, 0.14), n;
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        In ||
                                            (In = new e.CylinderGeometry(
                                                0.4,
                                                0.4,
                                                0.3,
                                                32,
                                                32,
                                                !0
                                            ));
                                        var t = ce(e, {
                                                roughness: 0.15,
                                                color: "#1c1c1c",
                                                side: e.DoubleSide,
                                            }),
                                            n = new e.Mesh(In, t);
                                        return (
                                            n.position.set(0, 0, 0.4),
                                            (n.rotation.x = Math.PI / 2),
                                            n
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        Dn ||
                                            (Dn = new e.CylinderGeometry(
                                                0.5,
                                                0.5,
                                                0.5,
                                                32,
                                                32,
                                                !0
                                            ));
                                        var t = ce(e, {
                                                roughness: 0.15,
                                            }),
                                            n = new e.Mesh(Dn, t);
                                        return (
                                            n.position.set(0, 0, 0.3),
                                            (n.rotation.x = Math.PI / 2),
                                            (n.userData = {
                                                useColor: !0,
                                            }),
                                            n
                                        );
                                    })(e)
                                );
                            var d = Fn(e);
                            t.add(Fn(e));
                            var c = d.clone();
                            return (
                                c.position.set(0, 0, 0.4),
                                c.scale.set(0.95, 0.95, 0.8),
                                t.add(c),
                                t
                            );
                        },
                        category: "accessories",
                        price: 1e3,
                    },
                    {
                        name: "Steering Wheel",
                        create: function (e) {
                            var t = new e.Group();
                            return (
                                t.add(
                                    (function (e) {
                                        var t = F(pn.a);
                                        cn ||
                                            ((cn = new e.ExtrudeGeometry(t, {
                                                depth: 0.01,
                                                bevelEnabled: !0,
                                                bevelThickness: 0.06,
                                                bevelSize: 0.7,
                                                bevelOffset: 0,
                                                bevelSegments: 5,
                                                curveSegments: 54,
                                            })).scale(0.07, 0.07, 1),
                                            cn.center());
                                        var n = ce(e, {
                                                roughness: 0.2,
                                            }),
                                            r = new e.Mesh(cn, n);
                                        return (
                                            (r.userData = {
                                                useColor: !0,
                                            }),
                                            r.position.set(0, 0, 0.2),
                                            (r.rotation.z = -Math.PI),
                                            r
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        var t = F(It.a);
                                        un ||
                                            ((un = new e.ExtrudeGeometry(t, {
                                                depth: 0.2,
                                                bevelEnabled: !0,
                                                bevelThickness: 0.06,
                                                bevelSize: 0.7,
                                                bevelOffset: 0,
                                                bevelSegments: 5,
                                                curveSegments: 32,
                                            })).scale(0.055, 0.055, 1),
                                            un.center());
                                        var n = ce(e, {
                                                roughness: 0.1,
                                                color: "#262626",
                                                envMapIntensity: 3,
                                            }),
                                            r = new e.Mesh(un, n);
                                        return (
                                            r.position.set(0, 0.03, 0.15),
                                            (r.rotation.z = -Math.PI),
                                            r
                                        );
                                    })(e)
                                ),
                                t
                            );
                        },
                        category: "inputs",
                        price: 100,
                    },
                    {
                        name: "Copter Blade",
                        create: function (e) {
                            var t = new e.Group();
                            t.add(
                                (function (e) {
                                    Zt ||
                                        (Zt = new e.CylinderGeometry(
                                            0.15,
                                            0.15,
                                            0.2,
                                            32
                                        ));
                                    var t = ce(e, {
                                            roughness: 0.4,
                                            color: "#1b1b1c",
                                            envMapIntensity: 4,
                                        }),
                                        n = new e.Mesh(Zt, t);
                                    return (
                                        (n.rotation.x = -Math.PI / 2),
                                        n.position.set(0, 0, 0.1),
                                        n
                                    );
                                })(e)
                            ),
                                t.add(
                                    (function (e) {
                                        Ft ||
                                            (Ft = new e.CylinderGeometry(
                                                0.15,
                                                0.15,
                                                0.07,
                                                36
                                            ));
                                        var t = ce(e, {
                                                roughness: 0.1,
                                            }),
                                            n = new e.Mesh(Ft, t);
                                        return (
                                            (n.rotation.x = -Math.PI / 2),
                                            n.position.set(0, 0, 0.24),
                                            (n.userData = {
                                                useColor: !0,
                                            }),
                                            n
                                        );
                                    })(e)
                                ),
                                t.add(
                                    (function (e) {
                                        Yt ||
                                            (Yt = new e.SphereGeometry(
                                                0.15,
                                                18,
                                                12,
                                                0,
                                                2 * Math.PI,
                                                0,
                                                0.5 * Math.PI
                                            ));
                                        var t = ce(e, {
                                                roughness: 0.1,
                                            }),
                                            n = new e.Mesh(Yt, t);
                                        return (
                                            (n.rotation.x = Math.PI / 2),
                                            n.position.set(0, 0, 0.25),
                                            (n.userData = {
                                                useColor: !0,
                                            }),
                                            n
                                        );
                                    })(e)
                                );
                            var n = Xt(e);
                            n.position.set(0.6, -0.2, 0.3),
                                (n.rotation.z -= 0.3),
                                (n.rotation.x = -0.25);
                            var r = Xt(e);
                            r.position.set(-0.6, 0.2, 0.3),
                                (r.rotation.x = 0.25),
                                (r.rotation.y = -Math.PI),
                                (r.rotation.z += 0.3),
                                (r.scale.y = -1);
                            var o = Xt(e);
                            o.position.set(0, -0.6, 0.3),
                                (o.rotation.z = -Math.PI / 2),
                                (o.rotation.y = 0.25);
                            var l = Xt(e);
                            return (
                                l.position.set(0, 0.6, 0.3),
                                (l.rotation.z = Math.PI / 2),
                                (l.rotation.y = -0.25),
                                t.add(n),
                                t.add(r),
                                t
                            );
                        },
                        category: "accessories",
                        price: 250,
                    },
                ],
                ur = n(972),
                pr = 1e3,
                vr = 1e3,
                fr = (function () {
                    var e = Object(r.a)(
                        regeneratorRuntime.mark(function e(
                            t,
                            n,
                            r,
                            o,
                            l,
                            text,
                            d,
                            c
                        ) {
                            return regeneratorRuntime.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (sr = text),
                                                Cr(n, r, l),
                                                (er =
                                                    document.getElementById(
                                                        "renderer"
                                                    )),
                                                yr(),
                                                (ar = c),
                                                (or = d),
                                                (e.next = 8),
                                                gr()
                                            );
                                        case 8:
                                            animate(t, r, l, function () {
                                                try {
                                                    rr.stop();
                                                } catch (e) {}
                                            }),
                                                wr();
                                        case 10:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t, n, r, o, l, d, c, h) {
                        return e.apply(this, arguments);
                    };
                })();
            function gr() {
                return mr.apply(this, arguments);
            }
            function mr() {
                return (mr = Object(r.a)(
                    regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return e.abrupt(
                                            "return",
                                            new Promise(function (e, t) {
                                                var img = new Image();
                                                (img.onload = function () {
                                                    (lr = img), e();
                                                }),
                                                    (img.src =
                                                        "/design-the-next-iphone/watermark.png");
                                            })
                                        );
                                    case 1:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
            function wr() {
                var e = Jn.captureStream(40),
                    t = !0;
                try {
                    rr = new MediaRecorder(e, {
                        mimeType: "video/mp4;",
                    });
                } catch (n) {
                    try {
                        (rr = new MediaRecorder(e, {
                            mimeType: "video/webm;codecs=h264",
                        })),
                            (t = !1);
                    } catch (e) {
                        xr(), ar();
                    }
                }
                var n = [];
                (rr.ondataavailable = function (e) {
                    ir ||
                        (n.push(e.data),
                        t
                            ? Mr(
                                  new Blob(n, {
                                      type: "video/mp4",
                                  })
                              )
                            : (function (e) {
                                  Lr.apply(this, arguments);
                              })(
                                  new Blob(n, {
                                      type: "video/webm",
                                  })
                              ));
                }),
                    rr.start();
            }
            function xr() {
                ir = !0;
                try {
                    rr.stop();
                } catch (e) {}
            }
            function Cr(e, t, n) {
                var r = pr,
                    o = vr;
                e.setSize(r, o),
                    e.setPixelRatio(1),
                    t.setSize(r, o),
                    (n.aspect = 1),
                    n.updateProjectionMatrix(),
                    e.setClearColor(16777215, 1);
            }
            function animate(e, t, n, r) {
                var o,
                    l = Math.PI / 2,
                    d = l,
                    c = new e.Vector3(0, 0, 0);
                ir = !1;
                !(function e(time) {
                    ir ||
                        ((n.position.x = 4.91 * Math.cos(d)),
                        (n.position.y = 0.5 + 0.5 * Math.sin(d + Math.PI / 2)),
                        (n.position.z = 4.91 * Math.sin(d)),
                        n.lookAt(c),
                        (d += 1 * ((time - o) / 1e3 || 0)),
                        t.render(),
                        (function () {
                            nr.drawImage(er, 0, 122);
                            var e = sr.length > 18 ? 66 : 80;
                            (nr.font = "bold ".concat(e, "px HelveticaNeue")),
                                (nr.fillStyle = "#1d1d1f");
                            var t = nr.measureText(sr).width;
                            nr.fillText(sr, 500 - t / 2, 130);
                            var n = "Starting at $".concat(or.toLocaleString());
                            (nr.font = "36px HelveticaNeue"),
                                (nr.fillStyle = "#686868");
                            var r = nr.measureText(n).width;
                            nr.fillText(n, 500 - r / 2, 190),
                                nr.drawImage(lr, 1030, 1135, 141, 35);
                        })(),
                        (o = time),
                        d - l < 2 * Math.PI + 0.08
                            ? requestAnimationFrame(e)
                            : r());
                })(performance.now());
            }
            function yr() {
                ((Jn = document.createElement("canvas")).width = pr),
                    (Jn.height = vr),
                    ((nr = Jn.getContext("2d")).fillStyle = "white"),
                    nr.fillRect(0, 0, pr, vr);
            }
            function Lr() {
                return (Lr = Object(r.a)(
                    regeneratorRuntime.mark(function e(t) {
                        var data, n;
                        return regeneratorRuntime.wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (data = new FormData()).append(
                                                    "video",
                                                    t
                                                ),
                                                (e.prev = 2),
                                                (e.next = 5),
                                                fetch(
                                                    "https://design-the-next-iphone.neal.fun",
                                                    {
                                                        method: "POST",
                                                        body: data,
                                                    }
                                                )
                                            );
                                        case 5:
                                            if ((n = e.sent).ok) {
                                                e.next = 8;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 8:
                                            return (e.next = 10), n.blob();
                                        case 10:
                                            Mr(e.sent), (e.next = 17);
                                            break;
                                        case 14:
                                            (e.prev = 14),
                                                (e.t0 = e.catch(2)),
                                                ar();
                                        case 17:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[2, 14]]
                        );
                    })
                )).apply(this, arguments);
            }
            function Mr(e) {
                "video/mp4" !== e.type || ir || ur.saveAs(e, "iPhone.mp4"),
                    ar();
            }
            function kr() {
                var e = !1,
                    t = document.createElement("canvas"),
                    n = (t.getContext("2d"), t.captureStream());
                try {
                    new MediaRecorder(n, {
                        mimeType: "video/mp4",
                    }),
                        (e = !0);
                } catch (t) {
                    try {
                        new MediaRecorder(n, {
                            mimeType: "video/webm;codecs=h264",
                        }),
                            (e = !0);
                    } catch (e) {}
                }
                return e;
            }
            var Tr,
                Sr,
                Pr,
                Er,
                Dr,
                Ir,
                Or,
                _r,
                Gr,
                Rr,
                Br,
                Ar,
                zr,
                jr,
                Ur,
                Nr,
                Wr,
                Vr,
                Zr = n(310),
                Fr = 0,
                Yr = {},
                Hr = !1,
                Xr = !1,
                qr = {
                    components: {
                        ItemBar: ie,
                        TimCook: se,
                    },
                    head: {
                        bodyAttrs: {
                            class: "design-the-next-iphone-body",
                        },
                    },
                    data: function () {
                        return {
                            items: cr,
                            selected: {},
                            selectedItem: null,
                            showEdit: !1,
                            present: !1,
                            isRecording: !1,
                            canDownload: !1,
                            hasPlaced: !1,
                            defaultColor: Y[0],
                            originalWallpaper: {},
                            price: 400,
                            presentTitle: "The all new iPhone",
                            isDestroyed: !1,
                        };
                    },
                    watch: {
                        selectedItem: function () {
                            Dr &&
                                (this.selectedItem
                                    ? (Dr.selectedObjects = [this.selectedItem])
                                    : (Dr.selectedObjects = []),
                                (this.showEdit = null !== this.selectedItem),
                                this.render());
                        },
                    },
                    computed: {
                        isIphoneSelected: function () {
                            return (
                                !!this.selectedItem &&
                                "iphone" === this.selectedItem.name
                            );
                        },
                        originalColor: function () {
                            return this.selectedItem
                                ? this.selectedItem.userData.color
                                : this.defaultColor;
                        },
                        canChangeColor: function () {
                            if (!this.selectedItem) return !1;
                            var e = !1;
                            return (
                                this.selectedItem.traverse(function (t) {
                                    t instanceof l.Mesh &&
                                        t.userData.useColor &&
                                        (e = !0);
                                }),
                                e
                            );
                        },
                    },
                    mounted:
                        ((Vr = Object(r.a)(
                            regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    (Gr = Math.min(
                                                        2.5,
                                                        window.devicePixelRatio
                                                    )),
                                                        (Tr = new l.Scene()),
                                                        (Sr =
                                                            new l.PerspectiveCamera(
                                                                75,
                                                                window.innerWidth /
                                                                    window.innerHeight,
                                                                0.1,
                                                                9
                                                            )),
                                                        (Br =
                                                            window.innerWidth >
                                                            600
                                                                ? 5.1
                                                                : 5.3),
                                                        (Sr.position.z = -Br),
                                                        this.createRenderer(),
                                                        this.loadSVG(),
                                                        this.addLights(),
                                                        this.addIphone(),
                                                        this.createComposer(),
                                                        this.createRaycaster(),
                                                        this.addCubeTexture(),
                                                        this.createOrbit(),
                                                        this.setupResize(),
                                                        this.setupItemClick(),
                                                        this.update(),
                                                        this.render(),
                                                        (this.canDownload =
                                                            kr()),
                                                        setTimeout(function () {
                                                            Or.visible = !0;
                                                        }, 3500);
                                                case 19:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    this
                                );
                            })
                        )),
                        function () {
                            return Vr.apply(this, arguments);
                        }),
                    methods: {
                        update: function (time) {
                            _r.update(),
                                Zr.c.update(time),
                                this.isDestroyed ||
                                    requestAnimationFrame(this.update);
                        },
                        placeItem: function (e) {
                            0 === this.getIntersection(e, [Or]).length
                                ? this.deleteItem(Ir)
                                : ((this.selectedItem = Ir),
                                  (this.price += Ir.userData.price),
                                  (Ir.matrixAutoUpdate = !1),
                                  (this.hasPlaced = !0),
                                  Fr++),
                                (this.selected = {}),
                                (this.$refs.ghostImg.style = "none");
                        },
                        moveItem: function (e) {
                            var t =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : Ir,
                                n = this.getIntersection(e, [Or]);
                            if (
                                ((this.$refs.ghostImg.style.transform =
                                    "translate(calc("
                                        .concat(e.x, "px - 50%), calc(")
                                        .concat(e.y, "px - 50%))")),
                                0 === n.length)
                            )
                                return (
                                    (this.$refs.ghostImg.style.display =
                                        "block"),
                                    (t.visible = !1),
                                    void this.render()
                                );
                            (t.visible = !0),
                                (this.$refs.ghostImg.style.display = "none");
                            var r = n[0],
                                o = r.point,
                                d = r.face;
                            t.position.copy(o),
                                t.setRotationFromEuler(
                                    new l.Euler(0, 0, 0, "XYZ")
                                ),
                                t.updateMatrixWorld();
                            var c = d.normal.clone(),
                                h = !1,
                                v = !1,
                                f = !1;
                            if (
                                (0 === c.x && 0 === c.z && (h = !0),
                                0 === c.x && 0 === c.y && (v = !0),
                                0 === c.y && 0 === c.z && (f = !0),
                                c.transformDirection(t.matrixWorld),
                                c.add(o),
                                t.lookAt(c),
                                h &&
                                    t.userData.rotateOnTop &&
                                    (t.rotation.z += Math.PI / 2),
                                v &&
                                    t.userData.rotateOnFront &&
                                    (t.rotation.z += Math.PI / 2),
                                f &&
                                    t.userData.rotateOnSide &&
                                    (t.rotation.z += Math.PI / 2),
                                t.userData.isNotch && v)
                            ) {
                                var m = c.z < 0,
                                    w = t.userData.offset || 0,
                                    x = (m ? 0.955 : 0.905) + w,
                                    C = (m ? 1.935 : 1.893) + w,
                                    y = Math.abs(c.x),
                                    L = Math.abs(c.y - jr),
                                    M = Math.abs(L - C),
                                    k = Math.abs(y - x);
                                (t.rotation.z = -Math.PI / 2),
                                    k < M
                                        ? c.x > 0
                                            ? ((t.position.x = x),
                                              (t.rotation.z += Math.PI / 2))
                                            : ((t.position.x = -x),
                                              (t.rotation.z += -Math.PI / 2))
                                        : c.y + jr > 0
                                        ? ((t.position.y = C + jr),
                                          (t.rotation.z += m ? 0 : Math.PI))
                                        : ((t.position.y = -C + jr),
                                          (t.rotation.z += m ? Math.PI : 0));
                            }
                            t.position.add(c.clone().multiplyScalar(1e-5 * Fr)),
                                this.render();
                        },
                        itemSelected: function (i) {
                            (this.selected = i),
                                ((Ir =
                                    this.selected.create(
                                        l
                                    )).userData.rotateOnTop =
                                    this.selected.rotateOnTop || !1),
                                (Ir.userData.rotateOnFront =
                                    this.selected.rotateOnFront || !1),
                                (Ir.userData.rotateOnSide =
                                    this.selected.rotateOnSide || !1),
                                (Ir.userData.price = this.selected.price),
                                (this.$refs.ghostImg.src =
                                    "/design-the-next-iphone/thumbnails/".concat(
                                        this.selected.name
                                            .toLowerCase()
                                            .replaceAll(" ", "-"),
                                        ".png"
                                    )),
                                Tr.add(Ir),
                                this.changeColor(
                                    Ir.userData.defaultColor ||
                                        this.defaultColor,
                                    Ir
                                );
                        },
                        deleteItem: function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : this.selectedItem;
                            console.log("before", Pr.info.memory),
                                e &&
                                    "iphone" !== e.name &&
                                    ((this.price -= e.userData.price),
                                    Tr.remove(e),
                                    this.render()),
                                console.log("after", Pr.info.memory);
                        },
                        setupResize: function () {
                            var e = this;
                            this.$addEventListener("resize", function () {
                                e.resize();
                            });
                        },
                        resize: function () {
                            this.isRecording ||
                                ((Sr.aspect =
                                    window.innerWidth / window.innerHeight),
                                Sr.updateProjectionMatrix(),
                                Er.setSize(
                                    window.innerWidth * Gr,
                                    window.innerHeight * Gr
                                ),
                                Dr.setSize(
                                    window.innerWidth * Gr,
                                    window.innerHeight * Gr
                                ),
                                Pr.setSize(
                                    window.innerWidth,
                                    window.innerHeight
                                ),
                                this.render());
                        },
                        getIntersection: function (e, t) {
                            return (
                                (zr = new l.Raycaster()),
                                (Ur.x = (e.x / window.innerWidth) * 2 - 1),
                                (Ur.y = (-e.y / window.innerHeight) * 2 + 1),
                                zr.setFromCamera(Ur, Sr),
                                zr.intersectObjects(t)
                            );
                        },
                        setupItemClick: function () {
                            var e = this;
                            this.$addEventListener("mousedown", function (e) {
                                Yr = {
                                    x: e.clientX,
                                    y: e.clientY,
                                };
                            }),
                                this.$addEventListener(
                                    "touchstart",
                                    function (e) {
                                        Ar = !1;
                                    }
                                ),
                                this.$addEventListener(
                                    "touchmove",
                                    function (e) {
                                        Ar = !0;
                                    }
                                ),
                                this.$addEventListener("click", function (t) {
                                    if (
                                        !(
                                            e.present ||
                                            Ar ||
                                            (t.clientX !== Yr.x &&
                                                t.clientY !== Yr.y)
                                        )
                                    ) {
                                        var n = {
                                                x: t.clientX,
                                                y: t.clientY,
                                            },
                                            r = e.getIntersection(
                                                n,
                                                Tr.children
                                            );
                                        if (0 !== r.length) {
                                            for (
                                                var o = r[0].object;
                                                "Scene" !== o.parent.type;

                                            )
                                                o = o.parent;
                                            e.selectedItem = o;
                                        } else e.selectedItem = null;
                                    }
                                });
                        },
                        changeColor: function (e) {
                            var t =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : this.selectedItem,
                                n =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2] &&
                                    arguments[2];
                            n || (t.userData.color = e);
                            var r = function (t) {
                                t.color.set(e.hex),
                                    (t.metalness = e.metalness),
                                    (t.envMapIntensity = e.envMapIntensity);
                            };
                            t.traverse(function (e) {
                                e instanceof l.Mesh &&
                                    e.userData.useColor &&
                                    (Array.isArray(e.material)
                                        ? e.material.forEach(function (e) {
                                              r(e);
                                          })
                                        : r(e.material));
                            }),
                                Er && this.render();
                        },
                        tweenToAngle: function (e, t) {
                            var n = this,
                                r = Math.sqrt(
                                    Math.pow(Sr.position.x, 2) +
                                        Math.pow(Sr.position.z, 2)
                                ),
                                o = Math.atan(Sr.position.x / Sr.position.z);
                            Sr.position.z < 0 &&
                                (Sr.position.x >= 0
                                    ? (o += Math.PI)
                                    : (o -= Math.PI));
                            var l = {
                                angle: o,
                                y: Sr.position.y,
                                distance: r,
                            };
                            new Zr.c.Tween(l)
                                .to(
                                    {
                                        angle: e,
                                        y: 0,
                                        distance: t,
                                    },
                                    1300
                                )
                                .easing(Zr.c.Easing.Cubic.InOut)
                                .onUpdate(function () {
                                    n.isRecording ||
                                        ((Sr.position.x =
                                            Math.sin(l.angle) * l.distance),
                                        (Sr.position.z =
                                            Math.cos(l.angle) * l.distance),
                                        (Sr.position.y = l.y));
                                })
                                .start();
                        },
                        changeWallpaper: function (e) {
                            var t = this,
                                n =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1] &&
                                    arguments[1],
                                r =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2] &&
                                    arguments[2],
                                o = pe();
                            e || (e = $()), n || (this.originalWallpaper = e);
                            var d =
                                    "upload" === e.id
                                        ? e.src
                                        : "/design-the-next-iphone/wallpapers/".concat(
                                              e.id,
                                              ".png"
                                          ),
                                c = new l.TextureLoader().load(d, function (e) {
                                    var n =
                                        e.image.width / e.image.height / 0.508;
                                    (e.offset.x = n > 1 ? (1 - 1 / n) / 2 : 0),
                                        (e.repeat.x =
                                            0.005 * (n > 1 ? 1 / n : 1)),
                                        (e.offset.y = n > 1 ? 0 : (1 - n) / 2),
                                        (e.repeat.y = 0.0025 * (n > 1 ? 1 : n)),
                                        (e.flipY = !0),
                                        (e.anisotropy = 2),
                                        t.render(),
                                        r && ((Hr = !0), t.startFirstSpin());
                                });
                            (e.encoding = l.sRGBEncoding), (o.map = c);
                        },
                        uploadWallpaper: function (e) {
                            var t = this,
                                n = new FileReader();
                            n.addEventListener(
                                "load",
                                function () {
                                    var e = {
                                        name: "Upload",
                                        id: "upload",
                                        src: n.result,
                                    };
                                    t.changeWallpaper(e, !1, !1);
                                },
                                !1
                            ),
                                n.readAsDataURL(e);
                        },
                        addStats: function () {},
                        startFirstSpin: function () {
                            Hr && Xr && this.tweenToAngle(0, Br);
                        },
                        addLights: function () {
                            var e = new l.AmbientLight(16777215, 50);
                            Tr.add(e);
                        },
                        addIphone: function () {
                            ((Or = (function (e, t) {
                                var n,
                                    r = new e.Group(),
                                    o = F(base),
                                    l = F(he),
                                    d = 0.0104,
                                    c = new e.ExtrudeGeometry(
                                        o,
                                        ((n = {
                                            depth: 15.4,
                                            bevelEnabled: !1,
                                            curveSegments: 128,
                                        }),
                                        Object(le.a)(n, "bevelEnabled", !0),
                                        Object(le.a)(n, "bevelThickness", 0.5),
                                        Object(le.a)(n, "bevelSize", 0.5),
                                        Object(le.a)(n, "bevelOffset", 0),
                                        Object(le.a)(n, "bevelSegments", 1),
                                        n)
                                    );
                                c.scale(d, d, d), c.center();
                                var h = new e.ExtrudeGeometry(o, {
                                    depth: 0.3,
                                    bevelEnabled: !1,
                                });
                                h.scale(d, d, d), h.center();
                                var v = new e.ExtrudeGeometry(l, {
                                    depth: 0.3,
                                    bevelEnabled: !1,
                                });
                                v.scale(d, d, d), v.center();
                                var f = ce(e, {
                                        color: t,
                                        side: e.FrontSide,
                                        roughness: 0.06,
                                    }),
                                    m = ce(e, {
                                        color: t,
                                        side: e.FrontSide,
                                        roughness: 0.32,
                                    }),
                                    w = ce(e, {
                                        color: "black",
                                        roughness: 0,
                                    });
                                ue = new e.MeshBasicMaterial();
                                var x = new e.Mesh(c, f),
                                    C = new e.Mesh(h, m);
                                C.position.set(0, 0, -0.085),
                                    C.scale.set(0.995, 0.997, 1);
                                var y = new e.Mesh(h, w);
                                y.position.set(0, 0, 0.085),
                                    y.scale.set(0.985, 0.993, 1);
                                var L = new e.Mesh(v, ue);
                                return (
                                    L.position.set(0, 0, 0.086),
                                    L.scale.set(0.94, 0.974, 1),
                                    (x.userData = {
                                        useColor: !0,
                                    }),
                                    (C.userData = {
                                        useColor: !0,
                                    }),
                                    r.add(x),
                                    r.add(C),
                                    r.add(y),
                                    r.add(L),
                                    r
                                );
                            })(l, this.defaultColor)).name = "iphone"),
                                (jr = window.innerWidth > 700 ? 0.25 : 0.2),
                                Or.position.set(0, jr, 0),
                                (Or.visible = !1),
                                this.changeWallpaper(null, !1, !0),
                                this.changeColor(this.defaultColor, Or),
                                Tr.add(Or);
                        },
                        createRenderer: function () {
                            (Pr = new l.WebGLRenderer({
                                canvas: this.$refs.render,
                                alpha: !1,
                                antialias: !1,
                                stencil: !0,
                                powerPreference: "high-performance",
                            })).setSize(window.innerWidth, window.innerHeight),
                                Pr.setClearColor(0, 0),
                                Pr.setPixelRatio(Gr);
                        },
                        addCubeTexture: function () {
                            var e = this,
                                t = new l.CubeTextureLoader();
                            t.setPath("/design-the-next-iphone/cubemap/");
                            var n = t.load(
                                [
                                    "px.png",
                                    "nx.png",
                                    "py.png",
                                    "ny.png",
                                    "pz.png",
                                    "nz.png",
                                ],
                                function () {
                                    (Xr = !0),
                                        (Or.visible = !0),
                                        e.startFirstSpin(),
                                        e.render();
                                }
                            );
                            (n.encoding = l.sRGBEncoding), (Tr.environment = n);
                        },
                        createOrbit: function () {
                            var e = this;
                            ((_r = new L(Sr, this.$refs.render)).enableDamping =
                                !0),
                                (_r.enablePan = !1),
                                (_r.dampingFactor = 0.075),
                                (_r.rotateSpeed =
                                    window.innerWidth > 800 ? 1.7 : 1.8),
                                (_r.maxDistance = 6),
                                (_r.minDistance = 4),
                                _r.addEventListener("change", function (t) {
                                    e.render();
                                }),
                                _r.addEventListener("start", function () {
                                    (Dr.selectedObjects = []),
                                        (e.selectedItem = null);
                                });
                        },
                        createRaycaster: function () {
                            (zr = new l.Raycaster()), (Ur = new l.Vector2());
                        },
                        createComposer: function () {
                            var e = Pr.getDrawingBufferSize(new l.Vector2()),
                                t = window.innerWidth <= 700 ? 1 : 4,
                                n = new l.WebGLRenderTarget(
                                    e.width * Gr,
                                    e.height * Gr,
                                    {
                                        samples: t,
                                    }
                                );
                            Er = new G(Pr, n);
                            var r = new A(Tr, Sr);
                            Er.addPass(r),
                                Er.setSize(
                                    window.innerWidth * Gr,
                                    window.innerHeight * Gr
                                ),
                                ((Dr = new j(
                                    new l.Vector2(
                                        window.innerWidth * Gr,
                                        window.innerHeight * Gr
                                    ),
                                    Tr,
                                    Sr
                                )).edgeGlow = 0.2 * Gr),
                                (Dr.edgeThickness = 1 * Gr),
                                (Dr.edgeStrength = 2 * Gr),
                                Dr.hiddenEdgeColor.set("white"),
                                Dr.visibleEdgeColor.set("white"),
                                new l.TextureLoader().load(
                                    "/design-the-next-iphone/grid.jpg",
                                    function (e) {
                                        (Dr.patternTexture = e),
                                            (Dr.usePatternTexture = !0),
                                            (e.wrapS = l.RepeatWrapping),
                                            (e.wrapT = l.RepeatWrapping);
                                    }
                                ),
                                Er.addPass(Dr);
                        },
                        startRecording:
                            ((Wr = Object(r.a)(
                                regeneratorRuntime.mark(function e() {
                                    return regeneratorRuntime.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (!this.isRecording) {
                                                            e.next = 2;
                                                            break;
                                                        }
                                                        return e.abrupt(
                                                            "return"
                                                        );
                                                    case 2:
                                                        (_r.autoRotate = !1),
                                                            (Rr =
                                                                Sr.position.clone()),
                                                            (this.isRecording =
                                                                !0),
                                                            this.render(),
                                                            (this.$refs.recordingPlaceholder.src =
                                                                this.$refs.render.toDataURL()),
                                                            fr(
                                                                l,
                                                                Pr,
                                                                Er,
                                                                Tr,
                                                                Sr,
                                                                this
                                                                    .presentTitle,
                                                                this.price,
                                                                this
                                                                    .afterRecording
                                                            );
                                                    case 8:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            )),
                            function () {
                                return Wr.apply(this, arguments);
                            }),
                        afterRecording: function () {
                            Pr.setPixelRatio(Gr),
                                Pr.setClearColor(0, 0),
                                Sr.position.set(Rr.x, Rr.y, Rr.z),
                                (_r.autoRotate = !0),
                                (this.isRecording = !1),
                                this.resize();
                        },
                        loadSVG: function () {
                            V = Z;
                        },
                        onWallpaperShow: function () {
                            this.tweenToAngle(0, Br);
                        },
                        enterPresent: function () {
                            var e = this;
                            (this.present = !0),
                                (this.selectedItem = null),
                                this.tweenToAngle(0, Br + 0.2),
                                setTimeout(function () {
                                    e.present &&
                                        ((_r.autoRotate = !0),
                                        (_r.autoRotateSpeed = -10));
                                }, 1800);
                        },
                        exitPresent: function () {
                            this.isRecording && (xr(), this.afterRecording()),
                                (this.present = !1),
                                (this.isRecording = !1),
                                (_r.autoRotate = !1);
                        },
                        render:
                            ((Nr = Object(r.a)(
                                regeneratorRuntime.mark(function e() {
                                    return regeneratorRuntime.wrap(function (
                                        e
                                    ) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    Er.render();
                                                case 1:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e);
                                })
                            )),
                            function () {
                                return Nr.apply(this, arguments);
                            }),
                    },
                    beforeDestroy: function () {
                        _r && (_r.dispose(), (this.isDestroyed = !0));
                    },
                },
                $r = qr,
                Qr =
                    (n(973),
                    n(977),
                    Object(re.a)(
                        $r,
                        function () {
                            var e = this,
                                t = e._self._c;
                            return t(
                                "div",
                                {
                                    staticClass: "container",
                                    class: {
                                        present: e.present,
                                    },
                                },
                                [
                                    t("div", {
                                        staticClass: "fade-bottom",
                                    }),
                                    e._v(" "),
                                    t("canvas", {
                                        ref: "render",
                                        class: {
                                            "renderer-recording": e.isRecording,
                                        },
                                        attrs: {
                                            id: "renderer",
                                        },
                                    }),
                                    e._v(" "),
                                    t("img", {
                                        staticClass: "exit-present-button",
                                        attrs: {
                                            src: "/design-the-next-iphone/delete.svg",
                                        },
                                        on: {
                                            click: e.exitPresent,
                                        },
                                    }),
                                    e._v(" "),
                                    t("img", {
                                        directives: [
                                            {
                                                name: "show",
                                                rawName: "v-show",
                                                value: e.isRecording,
                                                expression: "isRecording",
                                            },
                                        ],
                                        ref: "recordingPlaceholder",
                                        staticClass: "recording-placeholder",
                                    }),
                                    e._v(" "),
                                    t(
                                        "button",
                                        {
                                            staticClass: "present-button",
                                            on: {
                                                click: e.enterPresent,
                                            },
                                        },
                                        [
                                            t("img", {
                                                staticClass:
                                                    "present-button-img",
                                                attrs: {
                                                    src: "/design-the-next-iphone/play.svg",
                                                },
                                            }),
                                            e._v("Present\n  "),
                                        ]
                                    ),
                                    e._v(" "),
                                    t(
                                        "div",
                                        {
                                            staticClass: "recording-loading",
                                            class: {
                                                "recording-loading-show":
                                                    e.isRecording,
                                            },
                                        },
                                        [
                                            e.isRecording
                                                ? t("img", {
                                                      staticClass:
                                                          "recording-spinner",
                                                      attrs: {
                                                          src: "/design-the-next-iphone/pinwheel.svg",
                                                      },
                                                  })
                                                : e._e(),
                                            e._v("\n    Generating video\n  "),
                                        ]
                                    ),
                                    e._v(" "),
                                    t(
                                        "div",
                                        {
                                            staticClass: "instruction",
                                            class: {
                                                "instruction-hide":
                                                    e.hasPlaced || e.present,
                                            },
                                        },
                                        [
                                            e._v(
                                                "\n    Drag & drop items onto your iPhone\n  "
                                            ),
                                        ]
                                    ),
                                    e._v(" "),
                                    t(
                                        "div",
                                        {
                                            staticClass: "title",
                                        },
                                        [e._v("Design the Next iPhone")]
                                    ),
                                    e._v(" "),
                                    t(
                                        "nuxt-link",
                                        {
                                            attrs: {
                                                to: "/",
                                            },
                                        },
                                        [
                                            t("img", {
                                                staticClass: "site-title",
                                                attrs: {
                                                    src: "/general/logo.svg",
                                                },
                                            }),
                                        ]
                                    ),
                                    e._v(" "),
                                    t(
                                        "div",
                                        {
                                            staticClass: "present-overlay",
                                        },
                                        [
                                            t(
                                                "div",
                                                {
                                                    staticClass: "present-top",
                                                },
                                                [
                                                    t("input", {
                                                        directives: [
                                                            {
                                                                name: "model",
                                                                rawName:
                                                                    "v-model",
                                                                value: e.presentTitle,
                                                                expression:
                                                                    "presentTitle",
                                                            },
                                                        ],
                                                        staticClass:
                                                            "present-title",
                                                        attrs: {
                                                            spellcheck: "false",
                                                            maxlength: "25",
                                                        },
                                                        domProps: {
                                                            value: e.presentTitle,
                                                        },
                                                        on: {
                                                            input: function (
                                                                t
                                                            ) {
                                                                t.target
                                                                    .composing ||
                                                                    (e.presentTitle =
                                                                        t.target.value);
                                                            },
                                                        },
                                                    }),
                                                    e._v(" "),
                                                    t(
                                                        "div",
                                                        {
                                                            staticClass:
                                                                "present-price",
                                                        },
                                                        [
                                                            e._v(
                                                                "\n        Starting at $" +
                                                                    e._s(
                                                                        Math.max(
                                                                            e.price,
                                                                            0
                                                                        ).toLocaleString()
                                                                    ) +
                                                                    "\n      "
                                                            ),
                                                        ]
                                                    ),
                                                ]
                                            ),
                                            e._v(" "),
                                            e.canDownload
                                                ? t(
                                                      "button",
                                                      {
                                                          staticClass:
                                                              "present-download",
                                                          on: {
                                                              click: e.startRecording,
                                                          },
                                                      },
                                                      [
                                                          e._v(
                                                              "\n      Download video\n    "
                                                          ),
                                                      ]
                                                  )
                                                : e._e(),
                                        ]
                                    ),
                                    e._v(" "),
                                    t("TimCook", {
                                        attrs: {
                                            play: e.present,
                                        },
                                    }),
                                    e._v(" "),
                                    t("ItemBar", {
                                        attrs: {
                                            current: e.selected,
                                            items: e.items,
                                            showToolbar: e.hasPlaced,
                                            showEdit: e.showEdit,
                                            originalColor: e.originalColor,
                                            originalWallpaper:
                                                e.originalWallpaper,
                                            isIphone: e.isIphoneSelected,
                                            canChangeColor: e.canChangeColor,
                                            hide: e.present,
                                        },
                                        on: {
                                            selected: e.itemSelected,
                                            placeItem: e.placeItem,
                                            moveItem: e.moveItem,
                                            changeColor: e.changeColor,
                                            changeWallpaper: e.changeWallpaper,
                                            uploadWallpaper: e.uploadWallpaper,
                                            showingWallpaper: e.onWallpaperShow,
                                            deleteItem: e.deleteItem,
                                        },
                                    }),
                                    e._v(" "),
                                    t("img", {
                                        ref: "ghostImg",
                                        staticClass: "ghost-img",
                                        attrs: {
                                            src: "/design-the-next-iphone/thumbnails/apple-logo.png",
                                        },
                                    }),
                                ],
                                1
                            );
                        },
                        [],
                        !1,
                        null,
                        "07d7360d",
                        null
                    ));
            t.default = Qr.exports;
        },
        304: function (e, t, n) {
            var r = n(2),
                o = n(305),
                l = n(113);
            r(
                {
                    target: "Array",
                    proto: !0,
                },
                {
                    fill: o,
                }
            ),
                l("fill");
        },
        310: function (e, t, n) {
            "use strict";
            (function (e) {
                n.d(t, "a", function () {
                    return r;
                }),
                    n.d(t, "b", function () {
                        return v;
                    });
                var a,
                    r = {
                        Linear: {
                            None: function (e) {
                                return e;
                            },
                        },
                        Quadratic: {
                            In: function (e) {
                                return e * e;
                            },
                            Out: function (e) {
                                return e * (2 - e);
                            },
                            InOut: function (e) {
                                return (e *= 2) < 1
                                    ? 0.5 * e * e
                                    : -0.5 * (--e * (e - 2) - 1);
                            },
                        },
                        Cubic: {
                            In: function (e) {
                                return e * e * e;
                            },
                            Out: function (e) {
                                return --e * e * e + 1;
                            },
                            InOut: function (e) {
                                return (e *= 2) < 1
                                    ? 0.5 * e * e * e
                                    : 0.5 * ((e -= 2) * e * e + 2);
                            },
                        },
                        Quartic: {
                            In: function (e) {
                                return e * e * e * e;
                            },
                            Out: function (e) {
                                return 1 - --e * e * e * e;
                            },
                            InOut: function (e) {
                                return (e *= 2) < 1
                                    ? 0.5 * e * e * e * e
                                    : -0.5 * ((e -= 2) * e * e * e - 2);
                            },
                        },
                        Quintic: {
                            In: function (e) {
                                return e * e * e * e * e;
                            },
                            Out: function (e) {
                                return --e * e * e * e * e + 1;
                            },
                            InOut: function (e) {
                                return (e *= 2) < 1
                                    ? 0.5 * e * e * e * e * e
                                    : 0.5 * ((e -= 2) * e * e * e * e + 2);
                            },
                        },
                        Sinusoidal: {
                            In: function (e) {
                                return 1 - Math.cos((e * Math.PI) / 2);
                            },
                            Out: function (e) {
                                return Math.sin((e * Math.PI) / 2);
                            },
                            InOut: function (e) {
                                return 0.5 * (1 - Math.cos(Math.PI * e));
                            },
                        },
                        Exponential: {
                            In: function (e) {
                                return 0 === e ? 0 : Math.pow(1024, e - 1);
                            },
                            Out: function (e) {
                                return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
                            },
                            InOut: function (e) {
                                return 0 === e
                                    ? 0
                                    : 1 === e
                                    ? 1
                                    : (e *= 2) < 1
                                    ? 0.5 * Math.pow(1024, e - 1)
                                    : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
                            },
                        },
                        Circular: {
                            In: function (e) {
                                return 1 - Math.sqrt(1 - e * e);
                            },
                            Out: function (e) {
                                return Math.sqrt(1 - --e * e);
                            },
                            InOut: function (e) {
                                return (e *= 2) < 1
                                    ? -0.5 * (Math.sqrt(1 - e * e) - 1)
                                    : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
                            },
                        },
                        Elastic: {
                            In: function (e) {
                                return 0 === e
                                    ? 0
                                    : 1 === e
                                    ? 1
                                    : -Math.pow(2, 10 * (e - 1)) *
                                      Math.sin(5 * (e - 1.1) * Math.PI);
                            },
                            Out: function (e) {
                                return 0 === e
                                    ? 0
                                    : 1 === e
                                    ? 1
                                    : Math.pow(2, -10 * e) *
                                          Math.sin(5 * (e - 0.1) * Math.PI) +
                                      1;
                            },
                            InOut: function (e) {
                                return 0 === e
                                    ? 0
                                    : 1 === e
                                    ? 1
                                    : (e *= 2) < 1
                                    ? -0.5 *
                                      Math.pow(2, 10 * (e - 1)) *
                                      Math.sin(5 * (e - 1.1) * Math.PI)
                                    : 0.5 *
                                          Math.pow(2, -10 * (e - 1)) *
                                          Math.sin(5 * (e - 1.1) * Math.PI) +
                                      1;
                            },
                        },
                        Back: {
                            In: function (e) {
                                var s = 1.70158;
                                return e * e * ((s + 1) * e - s);
                            },
                            Out: function (e) {
                                var s = 1.70158;
                                return --e * e * ((s + 1) * e + s) + 1;
                            },
                            InOut: function (e) {
                                var s = 2.5949095;
                                return (e *= 2) < 1
                                    ? e * e * ((s + 1) * e - s) * 0.5
                                    : 0.5 *
                                          ((e -= 2) * e * ((s + 1) * e + s) +
                                              2);
                            },
                        },
                        Bounce: {
                            In: function (e) {
                                return 1 - r.Bounce.Out(1 - e);
                            },
                            Out: function (e) {
                                return e < 1 / 2.75
                                    ? 7.5625 * e * e
                                    : e < 2 / 2.75
                                    ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                                    : e < 2.5 / 2.75
                                    ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                                    : 7.5625 * (e -= 2.625 / 2.75) * e +
                                      0.984375;
                            },
                            InOut: function (e) {
                                return e < 0.5
                                    ? 0.5 * r.Bounce.In(2 * e)
                                    : 0.5 * r.Bounce.Out(2 * e - 1) + 0.5;
                            },
                        },
                    },
                    o =
                        "undefined" == typeof self && void 0 !== e && e.hrtime
                            ? function () {
                                  var time = e.hrtime();
                                  return 1e3 * time[0] + time[1] / 1e6;
                              }
                            : "undefined" != typeof self &&
                              void 0 !== self.performance &&
                              void 0 !== self.performance.now
                            ? self.performance.now.bind(self.performance)
                            : void 0 !== Date.now
                            ? Date.now
                            : function () {
                                  return new Date().getTime();
                              },
                    l = (function () {
                        function e() {
                            (this._tweens = {}),
                                (this._tweensAddedDuringUpdate = {});
                        }
                        return (
                            (e.prototype.getAll = function () {
                                var e = this;
                                return Object.keys(this._tweens).map(function (
                                    t
                                ) {
                                    return e._tweens[t];
                                });
                            }),
                            (e.prototype.removeAll = function () {
                                this._tweens = {};
                            }),
                            (e.prototype.add = function (e) {
                                (this._tweens[e.getId()] = e),
                                    (this._tweensAddedDuringUpdate[e.getId()] =
                                        e);
                            }),
                            (e.prototype.remove = function (e) {
                                delete this._tweens[e.getId()],
                                    delete this._tweensAddedDuringUpdate[
                                        e.getId()
                                    ];
                            }),
                            (e.prototype.update = function (time, e) {
                                void 0 === time && (time = o()),
                                    void 0 === e && (e = !1);
                                var t = Object.keys(this._tweens);
                                if (0 === t.length) return !1;
                                for (; t.length > 0; ) {
                                    this._tweensAddedDuringUpdate = {};
                                    for (var i = 0; i < t.length; i++) {
                                        var n = this._tweens[t[i]],
                                            r = !e;
                                        n &&
                                            !1 === n.update(time, r) &&
                                            !e &&
                                            delete this._tweens[t[i]];
                                    }
                                    t = Object.keys(
                                        this._tweensAddedDuringUpdate
                                    );
                                }
                                return !0;
                            }),
                            e
                        );
                    })(),
                    d = {
                        Linear: function (e, t) {
                            var n = e.length - 1,
                                r = n * t,
                                i = Math.floor(r),
                                o = d.Utils.Linear;
                            return t < 0
                                ? o(e[0], e[1], r)
                                : t > 1
                                ? o(e[n], e[n - 1], n - r)
                                : o(e[i], e[i + 1 > n ? n : i + 1], r - i);
                        },
                        Bezier: function (e, t) {
                            for (
                                var b = 0,
                                    n = e.length - 1,
                                    r = Math.pow,
                                    o = d.Utils.Bernstein,
                                    i = 0;
                                i <= n;
                                i++
                            )
                                b += r(1 - t, n - i) * r(t, i) * e[i] * o(n, i);
                            return b;
                        },
                        CatmullRom: function (e, t) {
                            var n = e.length - 1,
                                r = n * t,
                                i = Math.floor(r),
                                o = d.Utils.CatmullRom;
                            return e[0] === e[n]
                                ? (t < 0 && (i = Math.floor((r = n * (1 + t)))),
                                  o(
                                      e[(i - 1 + n) % n],
                                      e[i],
                                      e[(i + 1) % n],
                                      e[(i + 2) % n],
                                      r - i
                                  ))
                                : t < 0
                                ? e[0] - (o(e[0], e[0], e[1], e[1], -r) - e[0])
                                : t > 1
                                ? e[n] -
                                  (o(e[n], e[n], e[n - 1], e[n - 1], r - n) -
                                      e[n])
                                : o(
                                      e[i ? i - 1 : 0],
                                      e[i],
                                      e[n < i + 1 ? n : i + 1],
                                      e[n < i + 2 ? n : i + 2],
                                      r - i
                                  );
                        },
                        Utils: {
                            Linear: function (e, t, n) {
                                return (t - e) * n + e;
                            },
                            Bernstein: function (e, i) {
                                var t = d.Utils.Factorial;
                                return t(e) / t(i) / t(e - i);
                            },
                            Factorial:
                                ((a = [1]),
                                function (e) {
                                    var s = 1;
                                    if (a[e]) return a[e];
                                    for (var i = e; i > 1; i--) s *= i;
                                    return (a[e] = s), s;
                                }),
                            CatmullRom: function (e, t, n, r, o) {
                                var l = 0.5 * (n - e),
                                    d = 0.5 * (r - t),
                                    c = o * o;
                                return (
                                    (2 * t - 2 * n + l + d) * (o * c) +
                                    (-3 * t + 3 * n - 2 * l - d) * c +
                                    l * o +
                                    t
                                );
                            },
                        },
                    },
                    c = (function () {
                        function e() {}
                        return (
                            (e.nextId = function () {
                                return e._nextId++;
                            }),
                            (e._nextId = 0),
                            e
                        );
                    })(),
                    h = new l(),
                    v = (function () {
                        function e(e, t) {
                            void 0 === t && (t = h),
                                (this._object = e),
                                (this._group = t),
                                (this._isPaused = !1),
                                (this._pauseStart = 0),
                                (this._valuesStart = {}),
                                (this._valuesEnd = {}),
                                (this._valuesStartRepeat = {}),
                                (this._duration = 1e3),
                                (this._initialRepeat = 0),
                                (this._repeat = 0),
                                (this._yoyo = !1),
                                (this._isPlaying = !1),
                                (this._reversed = !1),
                                (this._delayTime = 0),
                                (this._startTime = 0),
                                (this._easingFunction = r.Linear.None),
                                (this._interpolationFunction = d.Linear),
                                (this._chainedTweens = []),
                                (this._onStartCallbackFired = !1),
                                (this._id = c.nextId()),
                                (this._isChainStopped = !1),
                                (this._goToEnd = !1);
                        }
                        return (
                            (e.prototype.getId = function () {
                                return this._id;
                            }),
                            (e.prototype.isPlaying = function () {
                                return this._isPlaying;
                            }),
                            (e.prototype.isPaused = function () {
                                return this._isPaused;
                            }),
                            (e.prototype.to = function (e, t) {
                                return (
                                    (this._valuesEnd = Object.create(e)),
                                    void 0 !== t && (this._duration = t),
                                    this
                                );
                            }),
                            (e.prototype.duration = function (e) {
                                return (this._duration = e), this;
                            }),
                            (e.prototype.start = function (time) {
                                if (this._isPlaying) return this;
                                if (
                                    (this._group && this._group.add(this),
                                    (this._repeat = this._initialRepeat),
                                    this._reversed)
                                )
                                    for (var e in ((this._reversed = !1),
                                    this._valuesStartRepeat))
                                        this._swapEndStartRepeatValues(e),
                                            (this._valuesStart[e] =
                                                this._valuesStartRepeat[e]);
                                return (
                                    (this._isPlaying = !0),
                                    (this._isPaused = !1),
                                    (this._onStartCallbackFired = !1),
                                    (this._isChainStopped = !1),
                                    (this._startTime =
                                        void 0 !== time
                                            ? "string" == typeof time
                                                ? o() + parseFloat(time)
                                                : time
                                            : o()),
                                    (this._startTime += this._delayTime),
                                    this._setupProperties(
                                        this._object,
                                        this._valuesStart,
                                        this._valuesEnd,
                                        this._valuesStartRepeat
                                    ),
                                    this
                                );
                            }),
                            (e.prototype._setupProperties = function (
                                e,
                                t,
                                n,
                                r
                            ) {
                                for (var o in n) {
                                    var l = e[o],
                                        d = Array.isArray(l),
                                        c = d ? "array" : typeof l,
                                        h = !d && Array.isArray(n[o]);
                                    if ("undefined" !== c && "function" !== c) {
                                        if (h) {
                                            var v = n[o];
                                            if (0 === v.length) continue;
                                            (v = v.map(
                                                this._handleRelativeValue.bind(
                                                    this,
                                                    l
                                                )
                                            )),
                                                (n[o] = [l].concat(v));
                                        }
                                        if (("object" !== c && !d) || !l || h)
                                            void 0 === t[o] && (t[o] = l),
                                                d || (t[o] *= 1),
                                                (r[o] = h
                                                    ? n[o].slice().reverse()
                                                    : t[o] || 0);
                                        else {
                                            for (var f in ((t[o] = d ? [] : {}),
                                            l))
                                                t[o][f] = l[f];
                                            (r[o] = d ? [] : {}),
                                                this._setupProperties(
                                                    l,
                                                    t[o],
                                                    n[o],
                                                    r[o]
                                                );
                                        }
                                    }
                                }
                            }),
                            (e.prototype.stop = function () {
                                return (
                                    this._isChainStopped ||
                                        ((this._isChainStopped = !0),
                                        this.stopChainedTweens()),
                                    this._isPlaying
                                        ? (this._group &&
                                              this._group.remove(this),
                                          (this._isPlaying = !1),
                                          (this._isPaused = !1),
                                          this._onStopCallback &&
                                              this._onStopCallback(
                                                  this._object
                                              ),
                                          this)
                                        : this
                                );
                            }),
                            (e.prototype.end = function () {
                                return (
                                    (this._goToEnd = !0),
                                    this.update(1 / 0),
                                    this
                                );
                            }),
                            (e.prototype.pause = function (time) {
                                return (
                                    void 0 === time && (time = o()),
                                    this._isPaused ||
                                        !this._isPlaying ||
                                        ((this._isPaused = !0),
                                        (this._pauseStart = time),
                                        this._group &&
                                            this._group.remove(this)),
                                    this
                                );
                            }),
                            (e.prototype.resume = function (time) {
                                return (
                                    void 0 === time && (time = o()),
                                    this._isPaused && this._isPlaying
                                        ? ((this._isPaused = !1),
                                          (this._startTime +=
                                              time - this._pauseStart),
                                          (this._pauseStart = 0),
                                          this._group && this._group.add(this),
                                          this)
                                        : this
                                );
                            }),
                            (e.prototype.stopChainedTweens = function () {
                                for (
                                    var i = 0, e = this._chainedTweens.length;
                                    i < e;
                                    i++
                                )
                                    this._chainedTweens[i].stop();
                                return this;
                            }),
                            (e.prototype.group = function (e) {
                                return (this._group = e), this;
                            }),
                            (e.prototype.delay = function (e) {
                                return (this._delayTime = e), this;
                            }),
                            (e.prototype.repeat = function (e) {
                                return (
                                    (this._initialRepeat = e),
                                    (this._repeat = e),
                                    this
                                );
                            }),
                            (e.prototype.repeatDelay = function (e) {
                                return (this._repeatDelayTime = e), this;
                            }),
                            (e.prototype.yoyo = function (e) {
                                return (this._yoyo = e), this;
                            }),
                            (e.prototype.easing = function (e) {
                                return (this._easingFunction = e), this;
                            }),
                            (e.prototype.interpolation = function (e) {
                                return (this._interpolationFunction = e), this;
                            }),
                            (e.prototype.chain = function () {
                                for (
                                    var e = [], t = 0;
                                    t < arguments.length;
                                    t++
                                )
                                    e[t] = arguments[t];
                                return (this._chainedTweens = e), this;
                            }),
                            (e.prototype.onStart = function (e) {
                                return (this._onStartCallback = e), this;
                            }),
                            (e.prototype.onUpdate = function (e) {
                                return (this._onUpdateCallback = e), this;
                            }),
                            (e.prototype.onRepeat = function (e) {
                                return (this._onRepeatCallback = e), this;
                            }),
                            (e.prototype.onComplete = function (e) {
                                return (this._onCompleteCallback = e), this;
                            }),
                            (e.prototype.onStop = function (e) {
                                return (this._onStopCallback = e), this;
                            }),
                            (e.prototype.update = function (time, e) {
                                if (
                                    (void 0 === time && (time = o()),
                                    void 0 === e && (e = !0),
                                    this._isPaused)
                                )
                                    return !0;
                                var t,
                                    n,
                                    r = this._startTime + this._duration;
                                if (!this._goToEnd && !this._isPlaying) {
                                    if (time > r) return !1;
                                    e && this.start(time);
                                }
                                if (
                                    ((this._goToEnd = !1),
                                    time < this._startTime)
                                )
                                    return !0;
                                !1 === this._onStartCallbackFired &&
                                    (this._onStartCallback &&
                                        this._onStartCallback(this._object),
                                    (this._onStartCallbackFired = !0)),
                                    (n =
                                        (time - this._startTime) /
                                        this._duration),
                                    (n = 0 === this._duration || n > 1 ? 1 : n);
                                var l = this._easingFunction(n);
                                if (
                                    (this._updateProperties(
                                        this._object,
                                        this._valuesStart,
                                        this._valuesEnd,
                                        l
                                    ),
                                    this._onUpdateCallback &&
                                        this._onUpdateCallback(this._object, n),
                                    1 === n)
                                ) {
                                    if (this._repeat > 0) {
                                        for (t in (isFinite(this._repeat) &&
                                            this._repeat--,
                                        this._valuesStartRepeat))
                                            this._yoyo ||
                                                "string" !=
                                                    typeof this._valuesEnd[t] ||
                                                (this._valuesStartRepeat[t] =
                                                    this._valuesStartRepeat[t] +
                                                    parseFloat(
                                                        this._valuesEnd[t]
                                                    )),
                                                this._yoyo &&
                                                    this._swapEndStartRepeatValues(
                                                        t
                                                    ),
                                                (this._valuesStart[t] =
                                                    this._valuesStartRepeat[t]);
                                        return (
                                            this._yoyo &&
                                                (this._reversed =
                                                    !this._reversed),
                                            void 0 !== this._repeatDelayTime
                                                ? (this._startTime =
                                                      time +
                                                      this._repeatDelayTime)
                                                : (this._startTime =
                                                      time + this._delayTime),
                                            this._onRepeatCallback &&
                                                this._onRepeatCallback(
                                                    this._object
                                                ),
                                            !0
                                        );
                                    }
                                    this._onCompleteCallback &&
                                        this._onCompleteCallback(this._object);
                                    for (
                                        var i = 0,
                                            d = this._chainedTweens.length;
                                        i < d;
                                        i++
                                    )
                                        this._chainedTweens[i].start(
                                            this._startTime + this._duration
                                        );
                                    return (this._isPlaying = !1), !1;
                                }
                                return !0;
                            }),
                            (e.prototype._updateProperties = function (
                                e,
                                t,
                                n,
                                r
                            ) {
                                for (var o in n)
                                    if (void 0 !== t[o]) {
                                        var l = t[o] || 0,
                                            d = n[o],
                                            c = Array.isArray(e[o]),
                                            h = Array.isArray(d);
                                        !c && h
                                            ? (e[o] =
                                                  this._interpolationFunction(
                                                      d,
                                                      r
                                                  ))
                                            : "object" == typeof d && d
                                            ? this._updateProperties(
                                                  e[o],
                                                  l,
                                                  d,
                                                  r
                                              )
                                            : "number" ==
                                                  typeof (d =
                                                      this._handleRelativeValue(
                                                          l,
                                                          d
                                                      )) &&
                                              (e[o] = l + (d - l) * r);
                                    }
                            }),
                            (e.prototype._handleRelativeValue = function (
                                e,
                                t
                            ) {
                                return "string" != typeof t
                                    ? t
                                    : "+" === t.charAt(0) || "-" === t.charAt(0)
                                    ? e + parseFloat(t)
                                    : parseFloat(t);
                            }),
                            (e.prototype._swapEndStartRepeatValues = function (
                                e
                            ) {
                                var t = this._valuesStartRepeat[e],
                                    n = this._valuesEnd[e];
                                (this._valuesStartRepeat[e] =
                                    "string" == typeof n
                                        ? this._valuesStartRepeat[e] +
                                          parseFloat(n)
                                        : this._valuesEnd[e]),
                                    (this._valuesEnd[e] = t);
                            }),
                            e
                        );
                    })(),
                    f = c.nextId,
                    m = h,
                    w = m.getAll.bind(m),
                    x = m.removeAll.bind(m),
                    C = m.add.bind(m),
                    y = m.remove.bind(m),
                    L = m.update.bind(m),
                    M = {
                        Easing: r,
                        Group: l,
                        Interpolation: d,
                        now: o,
                        Sequence: c,
                        nextId: f,
                        Tween: v,
                        VERSION: "18.6.4",
                        getAll: w,
                        removeAll: x,
                        add: C,
                        remove: y,
                        update: L,
                    };
                t.c = M;
            }).call(this, n(138));
        },
        337: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 4 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-1.21851,-3.52748)">\n        <circle cx="3.206" cy="5.515" r="1.988" style="fill:rgb(235,235,235);"/>\n    </g>\n</svg>\n';
        },
        343: function (e, t, n) {
            n(382);
        },
        344: function (e, t, n) {
            "use strict";
            var r = n(85),
                o = n(8),
                l = n(4),
                d = n(117),
                c = n(11),
                h = n(42),
                v = n(143),
                f = n(24),
                m = n(141),
                w = n(148),
                x = n(64),
                C = n(13),
                y = n(51),
                L = n(147),
                M = n(114),
                k = n(116),
                T = n(151),
                S = n(3),
                P = T.UNSUPPORTED_Y,
                E = 4294967295,
                D = Math.min,
                I = [].push,
                O = l(/./.exec),
                _ = l(I),
                G = l("".slice),
                R = !S(function () {
                    var e = /(?:)/,
                        t = e.exec;
                    e.exec = function () {
                        return t.apply(this, arguments);
                    };
                    var n = "ab".split(e);
                    return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
                });
            d(
                "split",
                function (e, t, n) {
                    var l;
                    return (
                        (l =
                            "c" == "abbc".split(/(b)*/)[1] ||
                            4 != "test".split(/(?:)/, -1).length ||
                            2 != "ab".split(/(?:ab)*/).length ||
                            4 != ".".split(/(.?)(.?)/).length ||
                            ".".split(/()()/).length > 1 ||
                            "".split(/.?/).length
                                ? function (e, n) {
                                      var l = C(f(this)),
                                          d = void 0 === n ? E : n >>> 0;
                                      if (0 === d) return [];
                                      if (void 0 === e) return [l];
                                      if (!v(e)) return o(t, l, e, d);
                                      for (
                                          var c,
                                              h,
                                              m,
                                              output = [],
                                              w =
                                                  (e.ignoreCase ? "i" : "") +
                                                  (e.multiline ? "m" : "") +
                                                  (e.unicode ? "u" : "") +
                                                  (e.sticky ? "y" : ""),
                                              x = 0,
                                              y = new RegExp(e.source, w + "g");
                                          (c = o(k, y, l)) &&
                                          !(
                                              (h = y.lastIndex) > x &&
                                              (_(output, G(l, x, c.index)),
                                              c.length > 1 &&
                                                  c.index < l.length &&
                                                  r(I, output, L(c, 1)),
                                              (m = c[0].length),
                                              (x = h),
                                              output.length >= d)
                                          );

                                      )
                                          y.lastIndex === c.index &&
                                              y.lastIndex++;
                                      return (
                                          x === l.length
                                              ? (!m && O(y, "")) ||
                                                _(output, "")
                                              : _(output, G(l, x)),
                                          output.length > d
                                              ? L(output, 0, d)
                                              : output
                                      );
                                  }
                                : "0".split(void 0, 0).length
                                ? function (e, n) {
                                      return void 0 === e && 0 === n
                                          ? []
                                          : o(t, this, e, n);
                                  }
                                : t),
                        [
                            function (t, n) {
                                var r = f(this),
                                    d = h(t) ? void 0 : y(t, e);
                                return d ? o(d, t, r, n) : o(l, C(r), t, n);
                            },
                            function (e, r) {
                                var o = c(this),
                                    d = C(e),
                                    h = n(l, o, d, r, l !== t);
                                if (h.done) return h.value;
                                var v = m(o, RegExp),
                                    f = o.unicode,
                                    y =
                                        (o.ignoreCase ? "i" : "") +
                                        (o.multiline ? "m" : "") +
                                        (o.unicode ? "u" : "") +
                                        (P ? "g" : "y"),
                                    L = new v(
                                        P ? "^(?:" + o.source + ")" : o,
                                        y
                                    ),
                                    k = void 0 === r ? E : r >>> 0;
                                if (0 === k) return [];
                                if (0 === d.length)
                                    return null === M(L, d) ? [d] : [];
                                for (var p = 0, q = 0, T = []; q < d.length; ) {
                                    L.lastIndex = P ? 0 : q;
                                    var S,
                                        I = M(L, P ? G(d, q) : d);
                                    if (
                                        null === I ||
                                        (S = D(
                                            x(L.lastIndex + (P ? q : 0)),
                                            d.length
                                        )) === p
                                    )
                                        q = w(d, q, f);
                                    else {
                                        if ((_(T, G(d, p, q)), T.length === k))
                                            return T;
                                        for (var i = 1; i <= I.length - 1; i++)
                                            if ((_(T, I[i]), T.length === k))
                                                return T;
                                        q = p = S;
                                    }
                                }
                                return _(T, G(d, p)), T;
                            },
                        ]
                    );
                },
                !R,
                P
            );
        },
        382: function (e, t, n) {
            "use strict";
            var r = n(2),
                o = n(8),
                l = n(4),
                d = n(24),
                c = n(5),
                h = n(42),
                v = n(143),
                f = n(13),
                m = n(51),
                w = n(152),
                x = n(213),
                C = n(7),
                y = n(19),
                L = C("replace"),
                M = TypeError,
                k = l("".indexOf),
                T = l("".replace),
                S = l("".slice),
                P = Math.max,
                E = function (e, t, n) {
                    return n > e.length ? -1 : "" === t ? n : k(e, t, n);
                };
            r(
                {
                    target: "String",
                    proto: !0,
                },
                {
                    replaceAll: function (e, t) {
                        var n,
                            r,
                            l,
                            C,
                            D,
                            I,
                            O,
                            _,
                            G,
                            R = d(this),
                            B = 0,
                            A = 0,
                            z = "";
                        if (!h(e)) {
                            if ((n = v(e)) && ((r = f(d(w(e)))), !~k(r, "g")))
                                throw M(
                                    "`.replaceAll` does not allow non-global regexes"
                                );
                            if ((l = m(e, L))) return o(l, e, R, t);
                            if (y && n) return T(f(R), e, t);
                        }
                        for (
                            C = f(R),
                                D = f(e),
                                (I = c(t)) || (t = f(t)),
                                O = D.length,
                                _ = P(1, O),
                                B = E(C, D, 0);
                            -1 !== B;

                        )
                            (G = I ? f(t(D, B, C)) : x(D, C, B, [], void 0, t)),
                                (z += S(C, A, B) + G),
                                (A = B + O),
                                (B = E(C, D, B + _));
                        return A < C.length && (z += S(C, A)), z;
                    },
                }
            );
        },
        498: function (e, t, n) {
            var content = n(936);
            content.__esModule && (content = content.default),
                "string" == typeof content && (content = [[e.i, content, ""]]),
                content.locals && (e.exports = content.locals);
            (0, n(108).default)("cf7331e4", content, !0, {
                sourceMap: !1,
            });
        },
        499: function (e, t, n) {
            var content = n(938);
            content.__esModule && (content = content.default),
                "string" == typeof content && (content = [[e.i, content, ""]]),
                content.locals && (e.exports = content.locals);
            (0, n(108).default)("47982702", content, !0, {
                sourceMap: !1,
            });
        },
        500: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 3 3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(0.0168539,0,0,0.0168539,-2.83146,-2.29213)">\n        <path d="M346,180.5C346,155.94 326.06,136 301.5,136L212.5,136C187.94,136 168,155.94 168,180.5L168,269.5C168,294.06 187.94,314 212.5,314L301.5,314C326.06,314 346,294.06 346,269.5L346,180.5Z" style="fill:none;"/>\n    </g>\n</svg>\n';
        },
        501: function (e, t, n) {
            var content = n(974);
            content.__esModule && (content = content.default),
                "string" == typeof content && (content = [[e.i, content, ""]]),
                content.locals && (e.exports = content.locals);
            (0, n(108).default)("7045efd0", content, !0, {
                sourceMap: !1,
            });
        },
        502: function (e, t, n) {
            var content = n(978);
            content.__esModule && (content = content.default),
                "string" == typeof content && (content = [[e.i, content, ""]]),
                content.locals && (e.exports = content.locals);
            (0, n(108).default)("449cce48", content, !0, {
                sourceMap: !1,
            });
        },
        933: function (e, t, n) {
            var r = n(2),
                o = n(145),
                l = n(55);
            r(
                {
                    target: "Object",
                    stat: !0,
                },
                {
                    fromEntries: function (e) {
                        var t = {};
                        return (
                            o(
                                e,
                                function (e, n) {
                                    l(t, e, n);
                                },
                                {
                                    AS_ENTRIES: !0,
                                }
                            ),
                            t
                        );
                    },
                }
            );
        },
        934: function (e, t, n) {
            "use strict";
            var r = n(2),
                o = n(66).findIndex,
                l = n(113),
                d = "findIndex",
                c = !0;
            d in [] &&
                Array(1)[d](function () {
                    c = !1;
                }),
                r(
                    {
                        target: "Array",
                        proto: !0,
                        forced: c,
                    },
                    {
                        findIndex: function (e) {
                            return o(
                                this,
                                e,
                                arguments.length > 1 ? arguments[1] : void 0
                            );
                        },
                    }
                ),
                l(d);
        },
        935: function (e, t, n) {
            "use strict";
            n(498);
        },
        936: function (e, t, n) {
            var r = n(107)(!1);
            r.push([
                e.i,
                '.items[data-v-e84edd88]{position:fixed;bottom:10px;left:50%;transform:translateX(-50%);z-index:3;font-family:HelveticaNeue;transition:transform .5s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none}.hide[data-v-e84edd88]{transform:translateX(-50%) translateY(200px)}.items-inner[data-v-e84edd88]{padding-top:10px;padding-bottom:10px;display:flex;overflow-x:scroll;scroll-behavior:smooth;max-width:1210px;touch-action:pan-x;scrollbar-width:none}.items-inner[data-v-e84edd88]::-webkit-scrollbar{display:none}.item[data-v-e84edd88]{min-width:110px;transition:opacity .15s ease-in-out,transform .08s linear;cursor:pointer}.item-box[data-v-e84edd88],.item-grab[data-v-e84edd88]{cursor:grab}.item-box[data-v-e84edd88]{width:75px;height:75px;background:#fff;color:#000;display:flex;justify-content:center;align-items:center;border-radius:15px;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin-left:auto;margin-right:auto;box-shadow:.6px .6px 1.9px rgba(0,0,0,.035),5px 5px 15px rgba(0,0,0,.07)}.item[data-v-e84edd88]:hover{transform:scale(1.04)}.item-color[data-v-e84edd88],.item-wallpaper[data-v-e84edd88]{cursor:pointer}.item-color[data-v-e84edd88]{background:none;box-shadow:none}.item-color-inner[data-v-e84edd88]{border-radius:100%;width:84%;height:84%;position:relative;-webkit-backdrop-filter:none;backdrop-filter:none;cursor:pointer;box-shadow:0 3px 5px 1px rgba(0,0,0,.15),inset 7px -7px 10px rgba(0,0,0,.45);margin-top:4px}.item-color-inner[data-v-e84edd88]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at 75%,at 25%,hsla(0,0%,100%,.9) 0,rgba(0,0,0,.1) 50%);background:radial-gradient(circle at 75% 25%,hsla(0,0%,100%,.9) 10%,rgba(0,0,0,.1) 50%);opacity:1;mix-blend-mode:overlay;border-radius:100%}.item-name[data-v-e84edd88]{margin-top:7px;font-size:13px;text-align:center;line-height:1.3em;-moz-user-select:none;-webkit-user-select:none;user-select:none;white-space:nowrap}.item-selected[data-v-e84edd88]{opacity:.5}.right-control[data-v-e84edd88]{right:-35px}.left-control[data-v-e84edd88]{left:-35px;transform:scaleX(-1)}.control[data-v-e84edd88]{position:absolute;width:25px;height:25px;cursor:pointer;bottom:55px;display:block;transition:opacity .15s linear;user-drag:none;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.control-disabled[data-v-e84edd88]{opacity:.15;pointer-events:none}.top-bar[data-v-e84edd88]{position:absolute;top:-24px;left:0;font-size:17px;width:100%;padding:0 20px;display:flex;justify-content:space-between;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:opacity .25s ease-in-out}.top-bar-hide[data-v-e84edd88]{opacity:0;pointer-events:none}.top-bar-right[data-v-e84edd88]{display:flex;grid-gap:10px}.top-bar-option[data-v-e84edd88]{padding:5px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.top-bar-option-customize[data-v-e84edd88]{padding:5px 10px;cursor:pointer}.top-bar-option-clickable[data-v-e84edd88]:hover,.top-bar-option-customize[data-v-e84edd88]:hover{transform:scale(1.03)}.top-bar-option-clickable[data-v-e84edd88]{cursor:pointer}.top-bar-option-tag[data-v-e84edd88]{background:#dadada;border-radius:6px;padding:4px 9px 5px 25px;font-size:15px;position:relative}.top-bar-option-tag[data-v-e84edd88]:after{content:"";position:absolute;top:9px;left:9px;width:10px;height:10px;background:url(/design-the-next-iphone/delete.svg);background-size:10px 10px;background-repeat:no-repeat;opacity:.5}.top-bar-option-img[data-v-e84edd88]{margin-right:1px}.delete-icon[data-v-e84edd88]{height:11px}.color-icon[data-v-e84edd88]{position:relative;height:14px;top:2px}.item-img[data-v-e84edd88],.item-wallpaper-img[data-v-e84edd88]{width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;border-radius:15px}.item-wallpaper-img[data-v-e84edd88]{height:100%;-o-object-fit:cover;object-fit:cover}.item-color-selected[data-v-e84edd88]{position:relative}.item-color-selected[data-v-e84edd88]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-image:url(/design-the-next-iphone/checkmark.svg);background-size:25px 20px;background-position:center 54%;background-repeat:no-repeat;mix-blend-mode:difference}.capture[data-v-e84edd88]{position:fixed;top:0;left:0;width:100%;height:100%}.soft-edge[data-v-e84edd88]{position:absolute;top:0;width:15px;height:100%;background:linear-gradient(180deg,#ededed,#ebebeb);z-index:2;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.soft-edge-left[data-v-e84edd88]{left:0;-webkit-mask-image:linear-gradient(270deg,transparent 0,#000);mask-image:linear-gradient(270deg,transparent 0,#000)}.soft-edge-right[data-v-e84edd88]{right:0;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000);mask-image:linear-gradient(90deg,transparent 0,#000)}.upload[data-v-e84edd88]{display:none}@media only screen and (max-width:1340px){.items-inner[data-v-e84edd88]{max-width:1100px}}@media only screen and (max-width:1270px){.items-inner[data-v-e84edd88]{max-width:990px}}@media only screen and (max-width:1160px){.items-inner[data-v-e84edd88]{max-width:880px}.left-control[data-v-e84edd88]{left:-30px}.right-control[data-v-e84edd88]{right:-30px}}@media only screen and (max-width:990px){.items-inner[data-v-e84edd88]{max-width:770px}}@media only screen and (max-width:885px){.items-inner[data-v-e84edd88]{max-width:660px}}@media only screen and (max-width:750px){.items-inner[data-v-e84edd88]{max-width:550px}.top-bar-option-customize[data-v-e84edd88]{padding:5px}.top-bar[data-v-e84edd88]{font-size:16px}}@media only screen and (min-width:600px) and (max-height:660px){.items[data-v-e84edd88]{bottom:0}.item-box[data-v-e84edd88]{width:70px;height:70px}}@media only screen and (min-width:600px) and (max-height:600px){.items[data-v-e84edd88]{padding-bottom:5px}}@media (hover:none) and (pointer:coarse){.items[data-v-e84edd88]{bottom:0}.soft-edge-left[data-v-e84edd88]{display:none}.soft-edge[data-v-e84edd88]{width:50px}.items-inner[data-v-e84edd88]{max-width:100vw;width:100vw;padding-left:8px;padding-right:8px}.control[data-v-e84edd88]{display:none}.item[data-v-e84edd88]{min-width:100px}.top-bar[data-v-e84edd88]{padding:0 13px 0 21px}}@media only screen and (max-width:470px){.item[data-v-e84edd88]{min-width:25.5vw}}@media only screen and (max-width:425px){.item[data-v-e84edd88]{min-width:26.5vw}}@media only screen and (max-width:380px){.item[data-v-e84edd88]{min-width:28vw}}@media only screen and (max-width:340px){.item[data-v-e84edd88]{min-width:30vw}}@media only screen and (max-width:319px){.item[data-v-e84edd88]{min-width:35vw}}@media only screen and (max-width:500px) and (max-height:550px){.top-bar[data-v-e84edd88]{top:-20px}.item-box[data-v-e84edd88]{width:73px;height:73px}}',
                "",
            ]),
                (e.exports = r);
        },
        937: function (e, t, n) {
            "use strict";
            n(499);
        },
        938: function (e, t, n) {
            var r = n(107)(!1);
            r.push([
                e.i,
                ".tim-cook[data-v-0ef4df3c]{position:fixed;right:0;top:50%;transform:translateY(-65%) translateX(100%);pointer-events:none;width:100px;transition:transform .2s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none}.tim-cook-show[data-v-0ef4df3c]{opacity:1;transform:translateY(-65%) translateX(0)}@media only screen and (max-width:1000px){.tim-cook[data-v-0ef4df3c]{width:94px}}@media only screen and (max-width:900px){.tim-cook[data-v-0ef4df3c]{width:85px}}@media only screen and (max-width:600px){.tim-cook[data-v-0ef4df3c]{width:80px}.tim-cook-show[data-v-0ef4df3c]{transform:translateY(-65%) translateX(10%)}}",
                "",
            ]),
                (e.exports = r);
        },
        939: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 204 391" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1.00256,0,0)">\n        <path d="M203.04,24.562C203.04,11.006 192.006,0 178.415,0L24.625,0C11.034,0 0,11.006 0,24.562L0,365.438C0,378.994 11.034,390 24.625,390L178.415,390C192.006,390 203.04,378.994 203.04,365.438L203.04,24.562Z" style="fill:rgb(235,235,235);"/>\n    </g>\n</svg>\n';
        },
        940: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 204 391" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1.00256,0,0)">\n        <path d="M203.04,23.149C203.04,10.373 192.641,0 179.832,0L23.208,0C10.399,0 0,10.373 0,23.149L0,366.851C0,379.627 10.399,390 23.208,390L179.832,390C192.641,390 203.04,379.627 203.04,366.851L203.04,23.149Z" style="fill:rgb(235,235,235);"/>\n    </g>\n</svg>\n';
        },
        941: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 3 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-0.0003705,0.00058322)">\n        <g transform="matrix(1,0,0,1.12471,-3.90825,-0.224613)">\n            <g transform="matrix(1.0049,0,0,1.71376,0.296005,-3.14951)">\n                <path d="M6.154,2.646C6.154,2.462 6.019,2.287 5.779,2.157C5.54,2.027 5.215,1.954 4.876,1.954L4.872,1.954C4.533,1.954 4.208,2.027 3.969,2.157C3.729,2.287 3.595,2.462 3.595,2.646L3.595,7.488C3.595,7.672 3.729,7.848 3.969,7.977C4.208,8.107 4.533,8.18 4.872,8.18L4.876,8.18C5.215,8.18 5.54,8.107 5.779,7.977C6.019,7.848 6.154,7.672 6.154,7.488L6.154,2.646Z" style="fill:rgb(235,235,235);"/>\n            </g>\n        </g>\n    </g>\n</svg>\n';
        },
        942: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 3 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1.08514,0,0,1.37058,0,0)">\n        <path d="M2.357,0.933C2.357,0.418 1.829,0 1.178,0C0.528,0 0,0.418 0,0.933L0,11.29C0,11.805 0.528,12.223 1.178,12.223C1.829,12.223 2.357,11.805 2.357,11.29L2.357,0.933Z" style="fill:rgb(235,235,235);"/>\n    </g>\n</svg>\n';
        },
        943: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-39.7446,-455.043)">\n        <g id="path6054" transform="matrix(0.0464342,0,0,-0.0464342,37.8991,477.118)">\n            <path d="M227.842,451.289L250.804,463.074L227.948,475.407L227.842,451.289ZM264.208,475.407L264.208,451.289L270.984,451.289L270.984,475.407L264.208,475.407ZM277.382,475.407L277.382,451.289L284.158,451.289L284.158,475.407L277.382,475.407ZM45.727,267.384L45.727,244.259L39.745,244.259L39.745,267.474L45.727,267.384ZM466.273,267.384L466.273,244.259L472.255,244.259L472.255,267.474L466.273,267.384ZM65.443,256.045L83.852,267.295L83.765,244.795L65.443,256.045ZM46.433,256.045L64.842,267.295L64.756,244.795L46.433,256.045ZM446.557,256.045L428.148,267.295L428.235,244.795L446.557,256.045ZM465.567,256.045L447.158,267.295L447.244,244.795L465.567,256.045ZM210.038,60.444L211.048,36.86L216.857,36.86L222.16,51.507L227.463,36.86L233.019,36.86L234.534,60.444L230.241,60.444L228.978,46.456L224.685,60.444L220.14,60.444L215.594,45.951L214.836,60.444L210.038,60.444ZM240.343,60.444L240.343,36.86L253.98,36.86L253.98,40.396L245.015,40.396L245.015,46.204L253.475,46.204L253.475,49.739L245.015,49.739L245.015,56.053L254.232,56.053L254.232,60.444L240.343,60.444ZM259.646,60.444L259.646,36.86L264.193,36.86L273.43,52.219L273.43,36.86L277.78,36.86L277.78,60.444L273.43,60.444L264.193,44.345L264.193,60.444L259.646,60.444ZM283.653,36.86L288.577,36.86L288.577,53.906C288.577,57.949 296.785,57.073 296.785,53.906L296.785,36.86L301.962,36.86L301.962,54.411C301.962,58.515 297.353,60.443 292.744,60.444C288.136,60.445 283.527,58.519 283.527,54.411L283.653,36.86Z" style="fill:rgb(169,169,168);fill-rule:nonzero;"/>\n        </g>\n    </g>\n</svg>\n';
        },
        944: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 11 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-0.773037,-973.455)">\n        <g transform="matrix(0.747844,0,0,0.747844,-1.9356,250.505)">\n            <path d="M8.235,971.326L4.793,971.326C4.147,971.326 3.622,971.851 3.622,972.497L3.622,974.839C3.622,975.485 4.147,976.01 4.793,976.01L8.235,976.01L8.235,979.452C8.235,980.098 8.76,980.623 9.406,980.623L11.747,980.623C12.394,980.623 12.918,980.098 12.918,979.452L12.918,976.01L16.36,976.01C17.007,976.01 17.531,975.485 17.531,974.839L17.531,972.497C17.531,971.851 17.007,971.326 16.36,971.326L12.918,971.326L12.918,967.884C12.918,967.238 12.394,966.713 11.747,966.713L9.406,966.713C8.76,966.713 8.235,967.238 8.235,967.884L8.235,971.326Z" style="fill:rgb(235,235,235);"/>\n        </g>\n    </g>\n</svg>\n';
        },
        945: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 2 1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-0.624285,-8.86727)">\n        <g transform="matrix(1.08151,0,0,0.833544,-0.0508831,1.58802)">\n            <path d="M2.374,9.137C2.374,8.914 2.235,8.733 2.063,8.733L0.935,8.733C0.764,8.733 0.624,8.914 0.624,9.137C0.624,9.359 0.764,9.54 0.935,9.54L2.063,9.54C2.235,9.54 2.374,9.359 2.374,9.137Z"/>\n        </g>\n    </g>\n</svg>\n';
        },
        946: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 3 1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-0.599285,-7.69825)">\n        <g transform="matrix(1.12828,0,0,0.869593,-0.0800823,0.129185)">\n            <path d="M2.396,9.137C2.396,8.898 2.247,8.704 2.063,8.704L0.935,8.704C0.751,8.704 0.602,8.898 0.602,9.137C0.602,9.375 0.751,9.569 0.935,9.569L2.063,9.569C2.247,9.569 2.396,9.375 2.396,9.137ZM2.352,9.137C2.352,9.343 2.222,9.511 2.063,9.511C2.063,9.511 0.935,9.511 0.935,9.511C0.776,9.511 0.646,9.343 0.646,9.137C0.646,8.93 0.776,8.762 0.935,8.762C0.935,8.762 2.063,8.762 2.063,8.762C2.222,8.762 2.352,8.93 2.352,9.137Z"/>\n        </g>\n    </g>\n</svg>\n';
        },
        947: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 4 2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-6.01013,-7.77597)">\n        <g transform="matrix(1.44521,0,0,1,-4.30901,-0.00672073)">\n            <path d="M7.14,8.783L7.175,8.783L7.175,8.164C7.175,7.981 7.277,7.833 7.404,7.833C7.879,7.833 8.915,7.833 9.39,7.833C9.516,7.833 9.619,7.981 9.619,8.164L9.619,8.783L9.654,8.783L9.654,8.164C9.654,7.953 9.535,7.783 9.39,7.783C8.915,7.783 7.879,7.783 7.404,7.783C7.258,7.783 7.14,7.953 7.14,8.164L7.14,8.783Z"/>\n        </g>\n    </g>\n</svg>\n';
        },
        948: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 2 2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">\n    <g transform="matrix(1,0,0,1,-0.827657,-5.36316)">\n        <path d="M1.732,5.388C2.218,5.388 2.612,5.782 2.612,6.268C2.612,6.753 2.218,7.148 1.732,7.148C1.247,7.148 0.853,6.753 0.853,6.268C0.853,5.782 1.247,5.388 1.732,5.388ZM1.732,5.507C2.152,5.507 2.493,5.848 2.493,6.268C2.493,6.688 2.152,7.029 1.732,7.029C1.312,7.029 0.971,6.688 0.971,6.268C0.971,5.848 1.312,5.507 1.732,5.507Z" style="fill:none;stroke:black;stroke-width:0.05px;"/>\n    </g>\n</svg>\n';
        },
        949: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 2 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">\n    <g transform="matrix(1,0,0,1,-5.06225,-5.25799)">\n        <g transform="matrix(1,0,0,-1,0,14.2816)">\n            <path d="M6.749,5.434C6.749,5.351 6.681,5.283 6.598,5.283L5.238,5.283C5.155,5.283 5.087,5.351 5.087,5.434L5.087,8.848C5.087,8.931 5.155,8.999 5.238,8.999L6.598,8.999C6.681,8.999 6.749,8.931 6.749,8.848L6.749,5.434ZM6.185,6.45C6.185,6.302 6.065,6.183 5.918,6.183C5.771,6.183 5.652,6.302 5.652,6.45L5.652,7.153C5.652,7.3 5.771,7.42 5.918,7.42C6.065,7.42 6.185,7.3 6.185,7.153L6.185,6.45Z" style="fill:none;stroke:black;stroke-width:0.05px;"/>\n        </g>\n    </g>\n</svg>\n';
        },
        950: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 3 2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">\n    <g transform="matrix(1,0,0,1,-7.34112,-6.85114)">\n        <g transform="matrix(0.991025,0,0,0.874836,0.0661127,1.09011)">\n            <path d="M9.462,6.796C9.462,6.696 9.389,6.614 9.3,6.614L7.527,6.614C7.438,6.614 7.366,6.696 7.366,6.796L7.366,8.527C7.366,8.628 7.438,8.709 7.527,8.709L9.3,8.709C9.389,8.709 9.462,8.628 9.462,8.527L9.462,6.796Z" style="fill:none;stroke:black;stroke-width:0.05px;"/>\n        </g>\n    </g>\n</svg>\n';
        },
        951: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 1 3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">\n    <g transform="matrix(1,0,0,1,-7.4122,-3.41171)">\n        <g transform="matrix(1.83468,0,0,6.12502,-6.20769,-20.3132)">\n            <path d="M7.856,3.94C7.856,3.906 7.762,3.878 7.646,3.878C7.531,3.878 7.437,3.906 7.437,3.94L7.437,4.216C7.437,4.251 7.531,4.279 7.646,4.279C7.762,4.279 7.856,4.251 7.856,4.216L7.856,3.94Z" style="fill:none;stroke:black;stroke-width:0.01px;"/>\n        </g>\n    </g>\n</svg>\n';
        },
        952: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 1 1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-7.13093,-8.89483)">\n        <path d="M7.522,8.895C7.511,8.895 7.501,8.895 7.49,8.895L7.485,8.913C7.477,8.914 7.469,8.915 7.461,8.916L7.453,8.899C7.442,8.9 7.432,8.902 7.421,8.905L7.42,8.923C7.412,8.925 7.404,8.927 7.397,8.93L7.386,8.915C7.375,8.918 7.365,8.922 7.355,8.926L7.357,8.945C7.35,8.948 7.343,8.952 7.336,8.956L7.322,8.943C7.313,8.948 7.304,8.954 7.295,8.96L7.3,8.978C7.294,8.982 7.287,8.987 7.281,8.992L7.265,8.982C7.257,8.989 7.249,8.996 7.241,9.004L7.25,9.021C7.244,9.026 7.239,9.032 7.234,9.038L7.216,9.031C7.21,9.04 7.203,9.048 7.197,9.057L7.208,9.072C7.204,9.079 7.2,9.085 7.196,9.092L7.177,9.089C7.172,9.098 7.167,9.108 7.163,9.118L7.177,9.13C7.174,9.137 7.171,9.145 7.168,9.152L7.15,9.152C7.146,9.162 7.143,9.173 7.141,9.183L7.157,9.193C7.155,9.201 7.154,9.209 7.152,9.216L7.134,9.22C7.132,9.23 7.131,9.241 7.131,9.252L7.149,9.258C7.148,9.266 7.148,9.274 7.149,9.282L7.131,9.289C7.131,9.3 7.132,9.31 7.134,9.321L7.152,9.324C7.154,9.332 7.155,9.34 7.157,9.348L7.141,9.357C7.143,9.368 7.146,9.378 7.15,9.389L7.168,9.388C7.171,9.396 7.174,9.403 7.177,9.411L7.163,9.423C7.167,9.433 7.172,9.443 7.177,9.452L7.196,9.448C7.2,9.455 7.204,9.462 7.208,9.469L7.197,9.484C7.203,9.492 7.21,9.501 7.216,9.509L7.234,9.502C7.239,9.508 7.244,9.514 7.25,9.52L7.241,9.537C7.249,9.544 7.257,9.552 7.265,9.559L7.281,9.548C7.287,9.553 7.294,9.558 7.3,9.563L7.295,9.581C7.304,9.587 7.313,9.593 7.322,9.598L7.336,9.585C7.343,9.589 7.35,9.592 7.357,9.596L7.355,9.614C7.365,9.619 7.375,9.623 7.386,9.626L7.397,9.611C7.404,9.613 7.412,9.616 7.42,9.618L7.421,9.636C7.432,9.639 7.442,9.641 7.453,9.642L7.461,9.625C7.469,9.626 7.477,9.627 7.485,9.627L7.49,9.646C7.501,9.646 7.511,9.646 7.522,9.646L7.527,9.627C7.535,9.627 7.543,9.626 7.551,9.625L7.559,9.642C7.57,9.641 7.58,9.639 7.591,9.636L7.592,9.618C7.6,9.616 7.608,9.613 7.615,9.611L7.626,9.626C7.637,9.623 7.647,9.619 7.657,9.614L7.655,9.596C7.662,9.592 7.669,9.589 7.676,9.585L7.69,9.598C7.699,9.593 7.708,9.587 7.717,9.581L7.712,9.563C7.718,9.558 7.725,9.553 7.731,9.548L7.747,9.559C7.755,9.552 7.763,9.544 7.771,9.537L7.762,9.52C7.768,9.514 7.773,9.508 7.778,9.502L7.796,9.509C7.803,9.501 7.809,9.492 7.815,9.484L7.804,9.469C7.808,9.462 7.812,9.455 7.816,9.448L7.835,9.452C7.84,9.443 7.845,9.433 7.849,9.423L7.835,9.411C7.838,9.403 7.841,9.396 7.844,9.388L7.862,9.389C7.866,9.378 7.869,9.368 7.871,9.357L7.855,9.348C7.857,9.34 7.858,9.332 7.86,9.324L7.878,9.321C7.88,9.31 7.881,9.3 7.881,9.289L7.864,9.282C7.864,9.274 7.864,9.266 7.864,9.258L7.881,9.252C7.881,9.241 7.88,9.23 7.878,9.22L7.86,9.216C7.858,9.209 7.857,9.201 7.855,9.193L7.871,9.183C7.869,9.173 7.866,9.162 7.862,9.152L7.844,9.152C7.841,9.145 7.838,9.137 7.835,9.13L7.849,9.118C7.845,9.108 7.84,9.098 7.835,9.089L7.816,9.092C7.812,9.085 7.808,9.079 7.804,9.072L7.815,9.057C7.809,9.048 7.803,9.04 7.796,9.031L7.778,9.038C7.773,9.032 7.768,9.026 7.762,9.021L7.771,9.004C7.763,8.996 7.755,8.989 7.747,8.982L7.731,8.992C7.725,8.987 7.718,8.982 7.712,8.978L7.717,8.96C7.708,8.954 7.699,8.948 7.69,8.943L7.676,8.956C7.669,8.952 7.662,8.948 7.655,8.945L7.657,8.926C7.647,8.922 7.637,8.918 7.626,8.915L7.615,8.93C7.608,8.927 7.6,8.925 7.592,8.923L7.591,8.905C7.58,8.902 7.57,8.9 7.559,8.899L7.551,8.916C7.543,8.915 7.535,8.914 7.527,8.913L7.522,8.895Z"/>\n    </g>\n</svg>\n';
        },
        953: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 6 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-373.534,-435.989)">\n        <g transform="matrix(0.0273686,0,0,0.0273686,369.549,427.363)">\n            <path d="M336.572,356.799C336.572,333.835 317.928,315.192 294.964,315.192L187.232,315.192C164.268,315.192 145.625,333.835 145.625,356.799C145.625,356.799 145.625,464.531 145.625,464.531C145.625,487.495 164.268,506.139 187.232,506.139C187.232,506.139 294.964,506.139 294.964,506.139C317.928,506.139 336.572,487.495 336.572,464.531C336.572,464.531 336.572,356.799 336.572,356.799ZM326.261,356.799L326.261,464.531C326.261,481.804 312.237,495.828 294.964,495.828L187.232,495.828C169.959,495.828 155.936,481.804 155.936,464.531L155.936,356.799C155.936,339.526 169.959,325.503 187.232,325.503C187.232,325.503 294.964,325.503 294.964,325.503C312.237,325.503 326.261,339.526 326.261,356.799Z" style="fill:white;"/>\n        </g>\n    </g>\n</svg>\n';
        },
        954: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 17 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-41.5701,-532.625)">\n        <g transform="matrix(0.126188,0,0,-0.126188,2.59249,560.517)">\n            <path d="M423.617,221.039L328.102,221.039C322.992,221.039 312.886,216.008 311.119,207.586C310.572,204.979 310.685,200.719 310.255,197.749C309.85,194.958 308.884,193.372 308.884,193.372L375.86,193.49L442.835,193.372C442.835,193.372 441.869,194.958 441.464,197.749C441.034,200.719 441.148,204.979 440.601,207.586C438.833,216.008 428.728,221.039 423.617,221.039Z"/>\n        </g>\n    </g>\n</svg>\n';
        },
        955: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 25 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-66.6775,-252.799)">\n        <g transform="matrix(1.42811e-17,0.233228,-0.233228,1.42811e-17,135.583,213.474)">\n            <path d="M180.006,294.322C180.006,294.322 172.41,281.935 169.843,278.738C167.275,275.54 169.023,265.451 172.233,254.92C175.443,244.388 178.335,204.917 181.171,194.814C184.007,184.712 191.592,193.456 192.454,205.442C193.317,217.427 197.969,286.848 191.911,295.443C188.929,294.795 185.157,293.582 180.006,294.322Z"/>\n        </g>\n    </g>\n</svg>\n';
        },
        956: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 10 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-515,-274.968)">\n        <g transform="matrix(0.0939968,0,0,0.0966322,466.498,251.68)">\n            <path d="M569.193,241.151C572.81,241.133 600.594,241 604.746,241C609.19,241 608.236,247.109 615.443,250.626C622.977,254.302 622.375,254.226 622.375,254.226C622.375,254.226 622.275,262.742 622.348,271.336C622.416,279.305 613.248,278.261 613.248,278.261L569.693,278.288L569.693,278.289L569.193,278.289L568.693,278.289L568.693,278.288L525.138,278.261C525.138,278.261 515.971,279.305 516.039,271.336C516.112,262.742 516.011,254.226 516.011,254.226C516.011,254.226 515.409,254.302 522.944,250.626C530.151,247.109 529.197,241 533.64,241C537.793,241 565.577,241.133 569.193,241.151Z"/>\n        </g>\n    </g>\n</svg>\n';
        },
        957: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 17 2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-515,-388.455)">\n        <g transform="matrix(0.257576,0,0,0.257576,382.348,289.545)">\n            <path d="M581,385.5C581,384.672 580.328,384 579.5,384L516.5,384C515.672,384 515,384.672 515,385.5L515,388.5C515,389.328 515.672,390 516.5,390L579.5,390C580.328,390 581,389.328 581,388.5L581,385.5Z"/>\n        </g>\n    </g>\n</svg>\n';
        },
        958: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-307.503,-535.817)">\n        <g transform="matrix(0.06022,-0.00300718,0.00300718,0.06022,297.976,513.167)">\n            <path d="M196.273,386C229.538,386 256.545,413.007 256.545,446.273C256.545,479.538 229.538,506.545 196.273,506.545C163.007,506.545 136,479.538 136,446.273C136,413.007 163.007,386 196.273,386ZM194.925,503.302C188.793,503.157 183.932,498.061 184.077,491.929C184.222,485.797 189.318,480.936 195.45,481.081C201.582,481.226 206.443,486.322 206.298,492.454C206.153,498.586 201.057,503.447 194.925,503.302ZM225.844,495.055C220.599,498.235 213.759,496.558 210.579,491.312C207.399,486.067 209.076,479.227 214.322,476.048C219.567,472.868 226.407,474.545 229.587,479.79C232.766,485.036 231.089,491.876 225.844,495.055ZM164.43,493.603C159.34,490.18 157.988,483.268 161.412,478.179C164.836,473.09 171.748,471.738 176.837,475.161C181.926,478.585 183.278,485.497 179.854,490.586C176.43,495.675 169.519,497.027 164.43,493.603ZM143.955,469.011C141.51,463.385 144.092,456.833 149.718,454.388C155.343,451.944 161.895,454.526 164.34,460.151C166.785,465.777 164.203,472.329 158.577,474.774C152.952,477.219 146.4,474.636 143.955,469.011ZM139.943,437.263C140.912,431.206 146.616,427.076 152.673,428.044C158.729,429.013 162.86,434.717 161.892,440.774C160.923,446.83 155.219,450.961 149.162,449.993C143.105,449.024 138.974,443.32 139.943,437.263ZM239.584,409.147C243.576,413.804 243.036,420.826 238.379,424.818C233.722,428.81 226.7,428.27 222.708,423.613C218.716,418.956 219.256,411.934 223.913,407.942C228.571,403.95 235.592,404.49 239.584,409.147ZM153.657,408.351C157.735,403.768 164.765,403.359 169.348,407.436C173.93,411.514 174.339,418.544 170.262,423.127C166.184,427.709 159.154,428.119 154.571,424.041C149.989,419.963 149.58,412.933 153.657,408.351ZM212.78,391.668C218.651,393.443 221.977,399.651 220.202,405.522C218.427,411.393 212.219,414.719 206.348,412.944C200.477,411.169 197.151,404.961 198.926,399.09C200.701,393.219 206.908,389.893 212.78,391.668ZM180.781,391.371C186.684,389.705 192.829,393.146 194.495,399.049C196.161,404.952 192.721,411.097 186.817,412.763C180.914,414.429 174.769,410.988 173.103,405.085C171.437,399.182 174.878,393.037 180.781,391.371Z"/>\n        </g>\n    </g>\n</svg>\n';
        },
        959: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 19 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-914.847,-799.359)">\n        <g transform="matrix(0.115726,0.0668145,0.0668145,-0.115726,806.117,830.973)">\n            <path d="M659.896,623.336C643.687,618.19 608.187,595.979 601.982,594.873C595.777,593.767 586.212,601.653 599.114,616.481C609.471,628.384 661.297,652.372 678.074,661.18C691.506,668.231 699.73,671.013 710.347,675.907C717.628,661.823 734.866,632.389 734.866,632.389C734.866,632.389 731.379,618.321 699.237,625.75C680.879,629.993 674.744,628.05 659.896,623.336Z"/>\n        </g>\n    </g>\n</svg>\n';
        },
        960: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-503.142,-513)">\n        <g transform="matrix(0.132911,0,0,0.132911,436.269,463.025)">\n            <path d="M582.142,376C625.743,376 661.142,411.399 661.142,455C661.142,498.601 625.743,534 582.142,534C538.541,534 503.142,498.601 503.142,455C503.142,411.399 538.541,376 582.142,376ZM511.692,467.553C511.692,467.553 532.866,523.869 569.84,523.426C577.453,520.898 580.913,522.624 580.704,498.939C580.495,475.254 579.586,477.86 571.047,463.931C562.508,450.002 560.41,450.196 552.939,450.652C543.047,451.256 504.872,451.192 511.692,467.553ZM654.593,467.059C654.593,467.059 633.418,523.376 596.445,522.933C588.831,520.405 585.371,522.131 585.58,498.446C585.789,474.761 586.698,477.367 595.237,463.438C603.776,449.509 605.874,449.703 613.345,450.159C623.238,450.762 661.413,450.699 654.593,467.059ZM518.52,448.493C518.52,448.493 513.536,446.54 512.025,441.796C510.515,437.052 518.659,422.304 526.096,412.775C533.534,403.245 551.695,378.374 592.122,383.753C632.55,389.132 644.789,418.383 649.489,427.285C654.189,436.188 654.128,446.008 642.995,446.261C631.862,446.514 616.257,434.93 583.617,433.983C550.977,433.035 528.282,452.41 518.52,448.493Z" style="fill:white;"/>\n        </g>\n    </g>\n</svg>\n';
        },
        961: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 16 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-487.25,-479.25)">\n        <g transform="matrix(-1,0,0,1,994.177,-2)">\n            <path d="M503.664,481.493C503.689,481.513 503.733,481.547 503.77,481.575C504.509,482.134 506.718,483.835 506.912,486.288C507.041,487.914 506.333,489.931 503.583,492.157C503.261,492.417 502.789,492.368 502.528,492.046C502.268,491.724 502.317,491.252 502.639,490.991C504.824,489.223 505.52,487.699 505.417,486.407C505.264,484.483 503.445,483.21 502.865,482.772C502.856,482.764 502.846,482.757 502.837,482.75C502.837,482.75 495.382,482.75 495.382,482.75C495.372,482.758 495.361,482.767 495.349,482.775C494.759,483.214 492.903,484.489 492.726,486.416C492.607,487.706 493.291,489.226 495.472,490.991C495.794,491.252 495.843,491.724 495.583,492.046C495.323,492.368 494.85,492.417 494.528,492.157C491.774,489.927 491.082,487.907 491.232,486.279C491.458,483.829 493.704,482.13 494.454,481.572C494.491,481.544 494.536,481.51 494.561,481.49C494.7,481.34 494.898,481.25 495.111,481.25L503.111,481.25C503.325,481.25 503.524,481.341 503.664,481.493Z"/>\n        </g>\n    </g>\n</svg>\n';
        },
        962: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 12 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-510,-478.835)">\n        <path d="M513.473,480.464C513.799,480.105 514.014,479.515 513,478.835L519,478.835C517.986,479.515 518.201,480.105 518.527,480.464C520.577,481.26 522,482.993 522,485C522,486.635 521.057,488.087 519.599,489L512.401,489C510.943,488.087 510,486.635 510,485C510,482.993 511.423,481.26 513.473,480.464Z" style="fill:white;"/>\n    </g>\n</svg>\n';
        },
        963: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 10 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-490.895,-491.574)">\n        <g transform="matrix(0.728442,0,0,1,135.369,-0.425954)">\n            <path d="M500.816,493.695C500.816,492.759 499.773,492 498.489,492L490.39,492C489.106,492 488.063,492.759 488.063,493.695L488.063,504.711C488.063,505.646 489.106,506.406 490.39,506.406L498.489,506.406C499.773,506.406 500.816,505.646 500.816,504.711L500.816,493.695Z"/>\n        </g>\n    </g>\n</svg>\n';
        },
        964: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 7 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-756.42,-646.453)">\n        <g transform="matrix(0.100647,0,0,0.172156,681.189,558.597)">\n            <path d="M813.34,529.583C813.34,518.957 798.583,510.329 780.407,510.329C762.231,510.329 747.474,518.957 747.474,529.583L747.474,662.162C747.474,672.788 762.231,681.415 780.407,681.415C798.583,681.415 813.34,672.788 813.34,662.162L813.34,529.583Z"/>\n        </g>\n    </g>\n</svg>\n';
        },
        965: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-213.026,-376.956)">\n        <g transform="matrix(0.0725125,0,0,0.0725125,197.579,368.936)">\n            <path d="M356.617,110.598C435.867,110.598 500.208,174.939 500.208,254.189C500.208,333.439 435.867,397.78 356.617,397.78C277.367,397.78 213.026,333.439 213.026,254.189C213.026,174.939 277.367,110.598 356.617,110.598ZM356.617,133.337C423.317,133.337 477.469,187.489 477.469,254.189C477.469,320.889 423.317,375.041 356.617,375.041C289.917,375.041 235.765,320.889 235.765,254.189C235.765,187.489 289.917,133.337 356.617,133.337Z" style="fill:rgb(235,235,235);"/>\n        </g>\n    </g>\n</svg>\n';
        },
        966: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-213.026,-400.882)">\n        <path d="M223.989,400.896C223.622,400.877 223.254,400.877 222.887,400.896L222.775,401.031C222.565,401.045 222.356,401.065 222.147,401.091L222.011,400.98C221.647,401.03 221.286,401.1 220.929,401.188L220.845,401.342C220.641,401.395 220.439,401.454 220.239,401.52L220.085,401.436C219.737,401.555 219.396,401.691 219.062,401.846L219.008,402.013C218.818,402.103 218.631,402.2 218.447,402.302L218.28,402.249C217.961,402.431 217.651,402.63 217.353,402.845L217.332,403.019C217.162,403.144 216.997,403.274 216.836,403.409L216.662,403.389C216.383,403.628 216.116,403.882 215.864,404.149L215.876,404.324C215.733,404.479 215.596,404.638 215.463,404.801L215.288,404.814C215.059,405.102 214.846,405.401 214.649,405.712L214.694,405.881C214.583,406.06 214.478,406.242 214.378,406.427L214.209,406.473C214.039,406.799 213.886,407.134 213.751,407.476L213.827,407.634C213.752,407.83 213.684,408.029 213.621,408.23L213.463,408.307C213.358,408.659 213.271,409.017 213.204,409.378L213.308,409.519C213.272,409.726 213.242,409.934 213.218,410.143L213.078,410.249C213.042,410.614 213.024,410.982 213.026,411.35L213.155,411.468C213.159,411.678 213.169,411.888 213.185,412.098L213.068,412.228C213.101,412.594 213.153,412.958 213.225,413.319L213.374,413.411C213.417,413.617 213.467,413.821 213.523,414.024L213.432,414.174C213.534,414.527 213.654,414.875 213.793,415.215L213.957,415.277C214.038,415.471 214.125,415.662 214.219,415.851L214.158,416.015C214.325,416.343 214.509,416.662 214.709,416.97L214.882,416.999C214.998,417.174 215.121,417.346 215.248,417.513L215.219,417.686C215.445,417.977 215.686,418.255 215.941,418.519L216.116,418.516C216.264,418.665 216.416,418.811 216.573,418.951L216.578,419.126C216.854,419.368 217.143,419.596 217.444,419.808L217.615,419.771C217.789,419.89 217.966,420.004 218.146,420.112L218.184,420.283C218.501,420.469 218.828,420.637 219.163,420.788L219.325,420.72C219.517,420.804 219.713,420.882 219.911,420.954L219.98,421.115C220.327,421.237 220.68,421.341 221.037,421.425L221.183,421.328C221.388,421.374 221.595,421.414 221.803,421.447L221.901,421.592C222.265,421.646 222.631,421.681 222.998,421.697L223.122,421.573C223.333,421.58 223.543,421.58 223.754,421.573L223.878,421.697C224.245,421.681 224.611,421.646 224.975,421.592L225.074,421.447C225.281,421.414 225.488,421.374 225.693,421.328L225.839,421.425C226.196,421.341 226.549,421.237 226.896,421.115L226.966,420.954C227.163,420.882 227.359,420.804 227.551,420.72L227.713,420.788C228.048,420.637 228.375,420.469 228.692,420.283L228.73,420.112C228.91,420.004 229.087,419.89 229.261,419.771L229.432,419.808C229.733,419.596 230.022,419.368 230.299,419.126L230.303,418.951C230.46,418.811 230.612,418.665 230.76,418.516L230.935,418.519C231.19,418.255 231.431,417.977 231.657,417.686L231.628,417.513C231.756,417.346 231.878,417.174 231.994,416.999L232.167,416.97C232.367,416.662 232.551,416.343 232.718,416.015L232.657,415.851C232.751,415.662 232.838,415.471 232.92,415.277L233.084,415.215C233.222,414.875 233.342,414.527 233.444,414.174L233.353,414.024C233.409,413.821 233.459,413.617 233.502,413.411L233.651,413.319C233.723,412.958 233.775,412.594 233.808,412.228L233.691,412.098C233.707,411.888 233.717,411.678 233.721,411.468L233.85,411.35C233.852,410.982 233.835,410.614 233.798,410.249L233.658,410.143C233.634,409.934 233.604,409.726 233.568,409.519L233.672,409.378C233.605,409.017 233.518,408.659 233.413,408.307L233.255,408.23C233.193,408.029 233.124,407.83 233.049,407.634L233.125,407.476C232.99,407.134 232.837,406.799 232.667,406.473L232.498,406.427C232.398,406.242 232.293,406.06 232.182,405.881L232.227,405.712C232.03,405.401 231.817,405.102 231.588,404.814L231.413,404.801C231.28,404.638 231.143,404.479 231,404.324L231.012,404.149C230.76,403.882 230.493,403.628 230.214,403.389L230.04,403.409C229.879,403.274 229.714,403.144 229.544,403.019L229.523,402.845C229.225,402.63 228.915,402.431 228.596,402.249L228.429,402.302C228.245,402.2 228.058,402.103 227.868,402.013L227.814,401.846C227.48,401.691 227.139,401.555 226.791,401.436L226.637,401.52C226.437,401.454 226.235,401.395 226.031,401.342L225.947,401.188C225.59,401.1 225.229,401.03 224.865,400.98L224.729,401.091C224.521,401.065 224.311,401.045 224.101,401.031L223.989,400.896ZM223.438,402.41C228.341,402.41 232.321,406.391 232.321,411.294C232.321,416.197 228.341,420.177 223.438,420.177C218.535,420.177 214.555,416.197 214.555,411.294C214.555,406.391 218.535,402.41 223.438,402.41Z" style="fill:rgb(235,235,235);"/>\n    </g>\n</svg>\n';
        },
        967: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 13 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,3.66374e-15,-2.509)">\n        <g transform="matrix(0.864257,0,0,1,-0.864257,2)">\n            <g>\n                <path d="M16,2.254C16,1.291 15.218,0.509 14.254,0.509L2.746,0.509C1.782,0.509 1,1.291 1,2.254C1,3.218 1.782,4 2.746,4L14.254,4C15.218,4 16,3.218 16,2.254Z"/>\n            </g>\n        </g>\n    </g>\n</svg>\n';
        },
        968: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 11 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,0,-987.588)">\n        <g transform="matrix(1,0,0,-1,0,1987.49)">\n            <path d="M9.704,991.785C9.633,991.841 8.372,992.551 8.372,994.131C8.372,995.958 9.977,996.605 10.025,996.621C10.017,996.66 9.77,997.506 9.179,998.368C8.652,999.127 8.101,999.884 7.264,999.884C6.427,999.884 6.211,999.398 5.244,999.398C4.302,999.398 3.967,999.9 3.202,999.9C2.436,999.9 1.901,999.198 1.287,998.336C0.575,997.324 0,995.752 0,994.259C0,991.865 1.556,990.596 3.088,990.596C3.902,990.596 4.581,991.13 5.092,991.13C5.578,991.13 6.337,990.564 7.263,990.564C7.614,990.564 8.874,990.596 9.704,991.785ZM6.823,989.55C7.206,989.096 7.477,988.465 7.477,987.835C7.477,987.748 7.469,987.659 7.453,987.588C6.83,987.611 6.089,988.002 5.642,988.521C5.291,988.92 4.964,989.55 4.964,990.189C4.964,990.285 4.98,990.382 4.987,990.412C5.026,990.42 5.09,990.428 5.155,990.428C5.714,990.428 6.417,990.054 6.823,989.55Z" style="fill-rule:nonzero;"/>\n        </g>\n    </g>\n</svg>\n';
        },
        969: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 11 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-42.544,-540.727)">\n        <g transform="matrix(0.0222794,0,0,-0.0222794,41.5961,553.049)">\n            <path d="M123.971,406.804C123.971,417.006 127.514,425.642 134.601,432.729C141.694,439.816 150.33,443.359 160.525,443.359L185.121,443.359L185.458,518.813C185.458,528.341 188.781,536.432 195.427,543.079C202.073,549.726 210.054,553.049 219.356,553.049C228.879,553.049 236.969,549.726 243.616,543.079C250.263,536.432 253.586,528.342 253.586,518.813L253.586,443.366L299.45,443.366L299.45,518.813C299.45,528.341 302.772,536.432 309.419,543.079C316.066,549.726 324.149,553.049 333.679,553.049C343.202,553.049 351.292,549.726 357.939,543.079C364.586,536.432 367.908,528.342 367.908,518.813L367.908,443.366L392.836,443.366C402.805,443.366 411.33,439.822 418.43,432.735C425.516,425.648 429.061,417.012 429.061,406.811L429.061,185.45L123.971,185.45L123.971,406.804ZM76.774,179.141C67.245,179.141 59.16,182.464 52.514,189.11C45.868,195.756 42.544,203.731 42.544,213.039L42.544,355.953C42.544,365.494 45.867,373.572 52.514,380.219C59.16,386.865 67.245,390.189 76.774,390.189C86.296,390.189 94.332,386.866 100.875,380.219C107.405,373.573 110.679,365.494 110.679,355.953L110.679,213.039C110.679,203.73 107.356,195.756 100.709,189.11C94.062,182.464 86.082,179.141 76.774,179.141ZM476.275,179.141C466.966,179.141 458.992,182.415 452.345,188.945C445.699,195.487 442.376,203.523 442.376,213.039L442.376,355.953C442.376,365.494 445.698,373.572 452.345,380.219C458.992,386.866 466.972,390.189 476.275,390.189C485.798,390.189 493.888,386.866 500.535,380.219C507.182,373.572 510.504,365.494 510.504,355.953L510.504,213.039C510.504,203.522 507.182,195.487 500.535,188.945C493.888,182.415 485.798,179.141 476.275,179.141ZM351.972,50.847L375.57,7.315C377.119,4.433 376.568,2.223 373.912,0.669C371.029,-0.671 368.814,0.008 367.266,2.658L343.338,46.538C322.283,37.229 300.014,32.566 276.531,32.566C253.043,32.566 230.772,37.23 209.725,46.538L185.796,2.658C184.241,0.008 182.026,-0.665 179.15,0.669C176.488,2.23 175.937,4.433 177.492,7.315L201.091,50.847C177.162,63.05 158.104,80.045 143.924,101.869C129.744,123.705 122.651,147.567 122.651,173.497L430.077,173.497C430.077,147.573 422.983,123.71 408.804,101.869C394.623,80.045 375.675,63.05 351.972,50.847ZM215.539,114.165C212.987,116.723 209.939,117.996 206.396,117.996C202.846,117.996 199.86,116.723 197.424,114.165C194.988,111.619 193.77,108.583 193.77,105.028C193.77,101.485 194.988,98.443 197.424,95.891C199.86,93.345 202.853,92.072 206.396,92.072C209.939,92.072 212.987,93.345 215.539,95.891C218.085,98.449 219.364,101.485 219.364,105.028C219.357,108.577 218.079,111.619 215.539,114.165ZM355.625,114.165C353.184,116.723 350.191,117.996 346.654,117.996C343.103,117.996 340.056,116.723 337.509,114.165C334.958,111.619 333.685,108.583 333.685,105.028C333.685,101.485 334.958,98.443 337.509,95.891C340.056,93.345 343.103,92.072 346.654,92.072C350.197,92.072 353.183,93.345 355.625,95.891C358.063,98.449 359.279,101.485 359.279,105.028C359.279,108.577 358.062,111.619 355.625,114.165Z" style="fill-rule:nonzero;"/>\n        </g>\n    </g>\n</svg>\n';
        },
        970: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 8 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-33.9793,-439.097)">\n        <g transform="matrix(0.116779,0,0,-0.116779,28.4305,483.471)">\n            <path d="M113.088,352.439C113.088,352.439 97.446,350.915 93.969,337.123C90.492,323.331 98.061,319.916 99.918,316.804C99.152,312.945 98.575,293.087 78.929,293.87C69.937,295.859 66.923,297.868 62.974,309.023C61.449,313.327 61.47,324.261 54.097,330.567C46.724,336.874 44.619,357.447 52.612,366.313C60.604,375.179 66.45,380.261 71.356,379.871C76.262,379.482 85.17,378.91 91.18,379.936C97.189,380.962 115.021,363.72 113.088,352.439ZM78.929,291.558C78.929,291.558 83.408,291.194 87.757,288.886C92.107,286.578 96.326,282.326 95.805,274.55C90.951,274.754 80.281,275.629 78.929,291.558Z"/>\n        </g>\n    </g>\n</svg>\n';
        },
        971: function (e, t) {
            e.exports =
                '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 15 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1,0,0,1,-41.4839,-284.062)">\n        <g transform="matrix(0.0149138,0,0,-0.0149138,41.4839,290.045)">\n            <path id="Rectangle-path" d="M222.167,400.852L429.279,401.149C457.013,401.149 482.072,390.452 500.792,373.217L222.167,373.217L222.167,400.852ZM0,373.217L194.433,373.217L194.433,401.05L0,401.05L0,373.217ZM861.034,373.217L1000,373.217L1000,401.05L861.034,401.05L861.034,373.217ZM555.567,373.217L694.433,373.217L694.433,401.05L555.567,401.05L555.567,373.217ZM777.734,400.852L787.341,373.217L768.126,373.217L777.734,400.852ZM861.034,319.83L1000,319.83L1000,347.761L861.034,347.761L861.034,319.83ZM555.567,319.83L694.433,319.83L694.433,347.761L555.567,347.761L555.567,319.83ZM222.167,347.761L521.196,347.761C526.247,339.144 530.011,329.734 532.29,319.829L222.167,319.829L222.167,347.761ZM759.311,347.761L796.157,347.761L806.062,319.83L749.505,319.83L759.311,347.761ZM0,319.83L194.433,319.83L194.433,347.761L0,347.761L0,319.83ZM55.468,266.541L138.867,266.541L138.867,294.473L55.468,294.473L55.468,266.541ZM861.034,266.541L944.433,266.541L944.433,294.473L861.034,294.473L861.034,266.541ZM611.034,266.541L694.433,266.541L694.433,294.473L611.034,294.473L611.034,266.541ZM444.433,266.541L444.433,294.473L535.36,294.473C535.36,284.865 534.072,275.456 531.596,266.541L444.433,266.541ZM740.59,294.473L814.877,294.473L824.683,266.541L730.784,266.541L740.59,294.473ZM277.734,266.541L361.034,266.541L361.034,294.473L277.734,294.473L277.734,266.541ZM55.468,213.253L138.867,213.253L138.867,241.185L55.468,241.185L55.468,213.253ZM861.034,213.253L944.433,213.253L944.433,241.185L861.034,241.185L861.034,213.253ZM611.034,213.253L694.433,213.253L694.433,241.185L611.034,241.185L611.034,213.253ZM721.969,241.185L833.597,241.185L843.106,213.253L712.361,213.253L721.969,241.185ZM497.92,213.253L277.734,213.253L277.734,241.185L521.197,241.185C514.857,230.487 507.032,221.078 497.92,213.253ZM861.034,187.896L944.433,187.896L944.433,159.964L785.559,159.964L777.734,182.548L769.909,159.964L611.034,159.964L611.034,187.896L694.433,187.896L694.433,162.242L703.249,187.896L852.219,187.896L861.034,162.242L861.034,187.896ZM55.468,159.964L138.867,159.964L138.867,187.896L55.468,187.896L55.468,159.964ZM277.734,159.964L277.734,187.896L497.92,187.896C507.231,180.071 515.055,170.661 521.197,159.964L277.734,159.964ZM55.468,106.577L138.867,106.577L138.867,134.509L55.468,134.509L55.468,106.577ZM944.433,106.577L803.982,106.577L794.374,134.509L944.433,134.509L944.433,106.577ZM611.034,134.509L761.093,134.509L751.486,106.577L611.034,106.577L611.034,134.509ZM361.034,106.577L277.734,106.577L277.734,134.509L361.034,134.509L361.034,106.577ZM444.433,134.509L531.596,134.509C534.072,125.595 535.36,116.185 535.36,106.577L444.433,106.577L444.433,134.509ZM194.433,53.288L0,53.288L0,81.22L194.433,81.22L194.433,53.288ZM733.063,53.288L555.567,53.288L555.567,81.22L742.67,81.22L733.063,53.288ZM812.896,81.22L1000,81.22L1000,53.288L822.405,53.288L812.896,81.22ZM521.197,53.288L222.167,53.288L222.167,81.22L532.29,81.22C529.715,71.315 525.951,61.906 521.197,53.288ZM194.433,0L0,0L0,27.932L194.433,27.932L194.433,0ZM840.927,0L831.319,27.932L1000,27.932L1000,0L840.927,0ZM429.279,0L222.167,0L222.167,27.932L500.693,27.932C482.072,10.697 456.815,0 429.279,0ZM714.639,0L555.567,0L555.567,27.932L724.247,27.932L714.639,0Z" style="fill-rule:nonzero;"/>\n        </g>\n    </g>\n</svg>\n';
        },
        972: function (e, t, n) {
            (function (n) {
                var r, o, l;
                (o = []),
                    void 0 ===
                        (l =
                            "function" ==
                            typeof (r = function () {
                                "use strict";
                                function b(a, b) {
                                    return (
                                        void 0 === b
                                            ? (b = {
                                                  autoBom: !1,
                                              })
                                            : "object" != typeof b &&
                                              (console.warn(
                                                  "Deprecated: Expected third argument to be a object"
                                              ),
                                              (b = {
                                                  autoBom: !b,
                                              })),
                                        b.autoBom &&
                                        /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                                            a.type
                                        )
                                            ? new Blob(["\ufeff", a], {
                                                  type: a.type,
                                              })
                                            : a
                                    );
                                }
                                function t(a, b, e) {
                                    var t = new XMLHttpRequest();
                                    t.open("GET", a),
                                        (t.responseType = "blob"),
                                        (t.onload = function () {
                                            g(t.response, b, e);
                                        }),
                                        (t.onerror = function () {
                                            console.error(
                                                "could not download file"
                                            );
                                        }),
                                        t.send();
                                }
                                function r(a) {
                                    var b = new XMLHttpRequest();
                                    b.open("HEAD", a, !1);
                                    try {
                                        b.send();
                                    } catch (a) {}
                                    return 200 <= b.status && 299 >= b.status;
                                }
                                function o(a) {
                                    try {
                                        a.dispatchEvent(
                                            new MouseEvent("click")
                                        );
                                    } catch (e) {
                                        var b =
                                            document.createEvent("MouseEvents");
                                        b.initMouseEvent(
                                            "click",
                                            !0,
                                            !0,
                                            window,
                                            0,
                                            0,
                                            0,
                                            80,
                                            20,
                                            !1,
                                            !1,
                                            !1,
                                            !1,
                                            0,
                                            null
                                        ),
                                            a.dispatchEvent(b);
                                    }
                                }
                                var l =
                                        "object" == typeof window &&
                                        window.window === window
                                            ? window
                                            : "object" == typeof self &&
                                              self.self === self
                                            ? self
                                            : "object" == typeof n &&
                                              n.global === n
                                            ? n
                                            : void 0,
                                    a =
                                        l.navigator &&
                                        /Macintosh/.test(navigator.userAgent) &&
                                        /AppleWebKit/.test(
                                            navigator.userAgent
                                        ) &&
                                        !/Safari/.test(navigator.userAgent),
                                    g =
                                        l.saveAs ||
                                        ("object" != typeof window ||
                                        window !== l
                                            ? function () {}
                                            : "download" in
                                                  HTMLAnchorElement.prototype &&
                                              !a
                                            ? function (b, g, e) {
                                                  var i = l.URL || l.webkitURL,
                                                      n =
                                                          document.createElement(
                                                              "a"
                                                          );
                                                  (g =
                                                      g ||
                                                      b.name ||
                                                      "download"),
                                                      (n.download = g),
                                                      (n.rel = "noopener"),
                                                      "string" == typeof b
                                                          ? ((n.href = b),
                                                            n.origin ===
                                                            location.origin
                                                                ? o(n)
                                                                : r(n.href)
                                                                ? t(b, g, e)
                                                                : o(
                                                                      n,
                                                                      (n.target =
                                                                          "_blank")
                                                                  ))
                                                          : ((n.href =
                                                                i.createObjectURL(
                                                                    b
                                                                )),
                                                            setTimeout(
                                                                function () {
                                                                    i.revokeObjectURL(
                                                                        n.href
                                                                    );
                                                                },
                                                                4e4
                                                            ),
                                                            setTimeout(
                                                                function () {
                                                                    o(n);
                                                                },
                                                                0
                                                            ));
                                              }
                                            : "msSaveOrOpenBlob" in navigator
                                            ? function (e, g, n) {
                                                  if (
                                                      ((g =
                                                          g ||
                                                          e.name ||
                                                          "download"),
                                                      "string" != typeof e)
                                                  )
                                                      navigator.msSaveOrOpenBlob(
                                                          b(e, n),
                                                          g
                                                      );
                                                  else if (r(e)) t(e, g, n);
                                                  else {
                                                      var i =
                                                          document.createElement(
                                                              "a"
                                                          );
                                                      (i.href = e),
                                                          (i.target = "_blank"),
                                                          setTimeout(
                                                              function () {
                                                                  o(i);
                                                              }
                                                          );
                                                  }
                                              }
                                            : function (b, e, n, g) {
                                                  if (
                                                      ((g =
                                                          g ||
                                                          open("", "_blank")) &&
                                                          (g.document.title =
                                                              g.document.body.innerText =
                                                                  "downloading..."),
                                                      "string" == typeof b)
                                                  )
                                                      return t(b, e, n);
                                                  var r =
                                                          "application/octet-stream" ===
                                                          b.type,
                                                      i =
                                                          /constructor/i.test(
                                                              l.HTMLElement
                                                          ) || l.safari,
                                                      o = /CriOS\/[\d]+/.test(
                                                          navigator.userAgent
                                                      );
                                                  if (
                                                      (o || (r && i) || a) &&
                                                      "undefined" !=
                                                          typeof FileReader
                                                  ) {
                                                      var d = new FileReader();
                                                      (d.onloadend =
                                                          function () {
                                                              var a = d.result;
                                                              (a = o
                                                                  ? a
                                                                  : a.replace(
                                                                        /^data:[^;]*;/,
                                                                        "data:attachment/file;"
                                                                    )),
                                                                  g
                                                                      ? (g.location.href =
                                                                            a)
                                                                      : (location =
                                                                            a),
                                                                  (g = null);
                                                          }),
                                                          d.readAsDataURL(b);
                                                  } else {
                                                      var c =
                                                              l.URL ||
                                                              l.webkitURL,
                                                          h =
                                                              c.createObjectURL(
                                                                  b
                                                              );
                                                      g
                                                          ? (g.location = h)
                                                          : (location.href = h),
                                                          (g = null),
                                                          setTimeout(
                                                              function () {
                                                                  c.revokeObjectURL(
                                                                      h
                                                                  );
                                                              },
                                                              4e4
                                                          );
                                                  }
                                              });
                                (l.saveAs = g.saveAs = g), (e.exports = g);
                            })
                                ? r.apply(t, o)
                                : r) || (e.exports = l);
            }).call(this, n(37));
        },
        973: function (e, t, n) {
            "use strict";
            n(501);
        },
        974: function (e, t, n) {
            var r = n(107),
                o = n(200),
                l = n(975),
                d = n(976),
                c = r(!1),
                h = o(l),
                v = o(d);
            c.push([
                e.i,
                "@font-face{font-family:HelveticaNeue;src:url(" +
                    h +
                    ")}@font-face{font-family:HelveticaNeue;src:url(" +
                    v +
                    ");font-weight:700}.design-the-next-iphone-body{width:100%;height:100vh;background:linear-gradient(180deg,#fff 60%,#e4e4e4)!important;background-repeat:no-repeat!important;background-attachment:fixed!important;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;overscroll-behavior-y:none;touch-action:none}",
                "",
            ]),
                (e.exports = c);
        },
        975: function (e, t, n) {
            e.exports = n.p + "fonts/HelveticaNeue-Light.08ba8c3.woff2";
        },
        976: function (e, t, n) {
            e.exports = n.p + "fonts/HelveticaNeue-Black.7fdfad1.woff2";
        },
        977: function (e, t, n) {
            "use strict";
            n(502);
        },
        978: function (e, t, n) {
            var r = n(107)(!1);
            r.push([
                e.i,
                ".fade-bottom[data-v-07d7360d]{position:fixed;bottom:0;width:100%;height:390px;background:linear-gradient(180deg,hsla(0,0%,92.2%,0) 60%,#ebebeb);z-index:2;pointer-events:none}.container[data-v-07d7360d]{font-family:HelveticaNeue,Helvetica,sans-serif;color:#1d1d1f}#renderer[data-v-07d7360d]{position:fixed;top:0;left:0;width:100%;height:100%}canvas[data-v-07d7360d]{touch-action:none}.present-button[data-v-07d7360d],canvas[data-v-07d7360d]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.present-button[data-v-07d7360d]{position:fixed;top:13px;right:13px;font-size:18px;border:none;cursor:pointer;padding:10px 16px;border-radius:5px;transition:opacity .2s ease-in-out;font-family:HelveticaNeue,Helvetica,sans-serif;color:#efefef;background:#1d1d1f}.present-button-img[data-v-07d7360d]{height:14px;margin-right:6px;position:relative;top:1px;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.present-overlay[data-v-07d7360d]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;opacity:0;transition:opacity .6s ease-in-out;pointer-events:none}.present-title[data-v-07d7360d]{font-size:42px;font-weight:700;white-space:nowrap;position:absolute;top:5%;left:50%;transform:translateX(-50%);text-align:center;border:none;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:5px;-webkit-text-decoration-color:#e7e7e7;text-decoration-color:#e7e7e7;transition:-webkit-text-decoration-color .25s ease-in-out;transition:text-decoration-color .25s ease-in-out;transition:text-decoration-color .25s ease-in-out,-webkit-text-decoration-color .25s ease-in-out;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%;background:none;font-family:HelveticaNeue}.present-title[data-v-07d7360d]:focus{-webkit-text-decoration-color:#000;text-decoration-color:#000;outline:none}.present .present-title[data-v-07d7360d]{pointer-events:auto;-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}.present-price[data-v-07d7360d]{font-size:20px;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;white-space:nowrap;color:#686868;position:fixed;top:calc(5% + 51px);left:50%;transform:translateX(-50%)}.present .present-overlay[data-v-07d7360d]{opacity:1}.present .present-button[data-v-07d7360d]{opacity:0;pointer-events:none}.present-download[data-v-07d7360d]{position:absolute;bottom:75px;left:50%;transform:translateX(-50%);pointer-events:none;display:block;background:#1d1d1f;border-radius:5px;font-size:18px;font-family:HelveticaNeue;padding:14px 16px;border:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap;color:#fff;transition:transform .1s ease-in-out;box-shadow:.2px .2px .6px rgba(0,0,0,.006),.4px .4px 1.5px rgba(0,0,0,.009),.9px .9px 3px rgba(0,0,0,.011),1.8px 1.8px 6.2px rgba(0,0,0,.014),5px 5px 17px rgba(0,0,0,.02)}.present .present-download[data-v-07d7360d]{pointer-events:all}.present-download[data-v-07d7360d]:hover{transform:translateX(-50%) scale(1.03)}.exit-present-button[data-v-07d7360d],.renderer-recording[data-v-07d7360d]{pointer-events:none;opacity:0}.exit-present-button[data-v-07d7360d]{width:23px;position:fixed;top:17px;right:17px;cursor:pointer;transition:opacity .2s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.present .exit-present-button[data-v-07d7360d]{opacity:.5;pointer-events:all;z-index:12}.recording-placeholder[data-v-07d7360d]{z-index:10}.recording-loading[data-v-07d7360d],.recording-placeholder[data-v-07d7360d]{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none}.recording-loading[data-v-07d7360d]{font-size:22px;z-index:11;background:hsla(0,0%,100%,.8);display:flex;justify-content:center;align-items:center;opacity:0;transition:opacity .3s ease-in-out}.recording-loading-show[data-v-07d7360d]{opacity:1;pointer-events:all}.title[data-v-07d7360d]{position:fixed;-webkit-user-select:none;-moz-user-select:none;user-select:none;top:15px;left:50%;transform:translateX(-50%);font-size:25px;pointer-events:none;transition:opacity .2s ease-in-out;color:#1d1d1f}.present .title[data-v-07d7360d]{opacity:0}.site-title[data-v-07d7360d]{position:fixed;top:10px;left:10px;width:125px;z-index:12;user-drag:none;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.site-title[data-v-07d7360d]:hover{transform:scale(1.05)}.instruction[data-v-07d7360d]{position:fixed;bottom:140px;left:50%;transform:translateX(-50%);font-size:20px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:opacity .2s ease-in-out;white-space:nowrap;animation:blink-07d7360d 2s ease-in-out 1.5s infinite alternate-reverse}.instruction-hide[data-v-07d7360d]{opacity:0;animation:none}@keyframes blink-07d7360d{0%{opacity:0}55%{opacity:1}}.present .instruction[data-v-07d7360d]{opacity:0}.ghost-img[data-v-07d7360d]{position:fixed;width:75px;height:75px;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;z-index:10;top:0;left:0;transform:translateX(-50%) translateY(-50%);display:none;border-radius:15px}.recording-spinner[data-v-07d7360d]{width:20px;margin-right:8px;animation:spin-07d7360d 2.5s linear infinite}@keyframes spin-07d7360d{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media only screen and (min-width:600px) and (max-height:710px){.instruction[data-v-07d7360d]{bottom:140px;font-size:18px}.present-download[data-v-07d7360d]{bottom:50px;font-size:18px}}@media only screen and (min-width:600px) and (max-height:650px){.instruction[data-v-07d7360d]{bottom:118px;font-size:16px}}@media only screen and (max-width:1000px){.present-title[data-v-07d7360d]{font-size:40px}.present-price[data-v-07d7360d]{font-size:18px;top:calc(5% + 53px)}}@media only screen and (max-width:850px){.present-button[data-v-07d7360d]{font-size:18px;top:10px;right:10px}.present-title[data-v-07d7360d]{font-size:34px}.present-price[data-v-07d7360d]{top:calc(5% + 44px)}.site-title[data-v-07d7360d]{width:110px}.title[data-v-07d7360d]{font-size:23px}.exit-present-button[data-v-07d7360d]{width:20px}.present-download[data-v-07d7360d]{font-size:19px}}@media only screen and (max-width:700px){.title[data-v-07d7360d]{font-size:21px;top:13px}.site-title[data-v-07d7360d]{width:100px}.instruction[data-v-07d7360d]{font-size:18px;bottom:125px}.present-button[data-v-07d7360d]{top:5px;right:5px}.present-title[data-v-07d7360d]{font-size:34px}.present-price[data-v-07d7360d]{font-size:17px;top:calc(5% + 44px)}.present .site-title[data-v-07d7360d]{display:none}}@media only screen and (max-width:600px){.site-title[data-v-07d7360d]{width:97px;top:9px;left:9px}.title[data-v-07d7360d]{top:55px;font-size:17px;width:100%;text-align:center;opacity:.4}.present-button[data-v-07d7360d]{font-size:16px;top:8px;right:8px;padding:9px 14px}.present-title[data-v-07d7360d]{font-size:28px;top:9%}.present-price[data-v-07d7360d]{top:auto;bottom:105px;font-size:20px}.exit-present-button[data-v-07d7360d]{top:12px;right:15px;width:30px;padding:5px}.present-download[data-v-07d7360d]{bottom:30px;font-size:18px}}@media only screen and (max-width:500px) and (max-height:550px){.instruction[data-v-07d7360d]{bottom:118px}.title[data-v-07d7360d]{top:51px;font-size:16px}}@media only screen and (min-width:600px) and (max-height:600px){.instruction[data-v-07d7360d]{bottom:118px}}",
                "",
            ]),
                (e.exports = r);
        },
    },
]);
