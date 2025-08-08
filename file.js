"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4356],
  {
    502: (e, a, t) => {
      t.d(a, { A: () => n });
      var l = t(95155),
        r = t(98137);
      function n(e) {
        var a, t, n;
        let { ApplicationData: o, userData: i, translate: s, language: d } = e,
          c = (null == i ? void 0 : i.preferred_username) || "",
          u = (0, r.xN)(c).age,
          m = [
            {
              label: "ar" === d ? "Ø§Ù„Ø§Ø³Ù… ÙƒØ§Ù…Ù„" : "FullName",
              key: "fullName",
            },
            {
              label: "".concat(s("formData.personalInfo.nationalId")),
              key: "nationalId",
            },
            {
              label: "".concat(s("formData.contactInfo.emailInput")),
              key: "email",
            },
            {
              label: "".concat(s("formData.contactInfo.mobileInput")),
              key: "mobile",
            },
            {
              label: "".concat(s("formData.contactInfo.anotherPhone")),
              key: "phone",
            },
            {
              label: "".concat(s("formData.personalInfo.dateOfBirth")),
              key: "dateOfBirth",
            },
            {
              label: "".concat(s("formData.personalInfo.personWithDisabiltys")),
              key: "personWithDisability",
            },
            {
              label: "".concat(s("formData.personalInfo.maritalStatus")),
              key: "maritalStatus",
            },
            { label: s("formData.addressInfo.city"), key: "city" },
            { label: s("formData.addressInfo.street1"), key: "streetLine1" },
            { label: s("formData.addressInfo.street2"), key: "streetLine2" },
            {
              label:
                "ar" === d
                  ? "Ø§Ø®ØªØ§Ø± Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ø¯ÙØ¹"
                  : "Choose a payment method",
              key: "paymentOptions",
            },
          ],
          p =
            "1" ===
            (null == o || null === (a = o.data) || void 0 === a
              ? void 0
              : a.personWithDisability),
          g =
            "2" ===
            (null == o ||
            null === (n = o.data) ||
            void 0 === n ||
            null === (t = n.maritalStatus) ||
            void 0 === t
              ? void 0
              : t.id),
          f = [...m];
        return (
          u < 21
            ? f.push(
                {
                  label: "".concat(s("formData.minorInfo.guardianNational")),
                  key: "guardianNationalId",
                },
                {
                  label: "".concat(s("formData.minorInfo.idNumber")),
                  key: "lowestNumberGuardianId",
                },
                {
                  label: "".concat(s("formData.minorInfo.idFrontPhoto")),
                  key: "guardianNationalIdFront",
                  type: "file",
                },
                {
                  label: "".concat(s("formData.minorInfo.idBackPhoto")),
                  key: "guardianNationalIdBack",
                  type: "file",
                },
                {
                  label: "".concat(s("formData.minorInfo.birthCertificate")),
                  key: "birthCert",
                  type: "file",
                }
              )
            : f.push(
                {
                  label: "".concat(s("formData.adultInfo.idNumber")),
                  key: "lowestNumberId",
                },
                {
                  label: "".concat(s("formData.adultInfo.idFrontPhoto")),
                  key: "nationalIdFront",
                  type: "file",
                },
                {
                  label: "".concat(s("formData.adultInfo.idBackPhoto")),
                  key: "nationalIdBack",
                  type: "file",
                }
              ),
          p &&
            f.push({
              label: "".concat(s("formData.disabilityInfo.disabilityType")),
              key: "proofOfDisability",
              type: "file",
            }),
          g &&
            f.push(
              {
                label: s("formData.spouseInfo.spouseFullName1"),
                key: "spouseName1",
              },
              {
                label: s("formData.spouseInfo.spouseNationalId_1"),
                key: "nationalIdSpouse",
              },
              {
                label: s("formData.spouseInfo.marriageCertication1"),
                key: "proofOfMarriage1",
                type: "file",
              }
            ),
          (0, l.jsx)("div", {
            className: "p-4 ",
            children: (0, l.jsx)("div", {
              className:
                "grid gap-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1",
              children: f.map((e) => {
                var a, t, n, i, s, c;
                let { label: u, key: m, type: p } = e;
                return (0, l.jsxs)(
                  "div",
                  {
                    children: [
                      (0, l.jsx)("label", {
                        className: "block font-medium",
                        children: u,
                      }),
                      "file" === p
                        ? (0, l.jsx)("img", {
                            src:
                              null == o ||
                              null === (t = o.data) ||
                              void 0 === t ||
                              null === (a = t[m]) ||
                              void 0 === a
                                ? void 0
                                : a.signed_url,
                            alt: "Uploaded Preview",
                            className: "object-cover h-16 rounded-md w-[16rem]",
                          })
                        : (0, l.jsx)("p", {
                            children:
                              "personWithDisability" === m
                                ? "1" ===
                                  (null == o ||
                                  null === (n = o.data) ||
                                  void 0 === n
                                    ? void 0
                                    : n[m])
                                  ? "ar" === d
                                    ? "Ù†Ø¹Ù…"
                                    : "Yes"
                                  : "ar" === d
                                  ? "Ù„Ø§"
                                  : "No"
                                : "object" ==
                                  typeof (null == o ||
                                  null === (i = o.data) ||
                                  void 0 === i
                                    ? void 0
                                    : i[m])
                                ? (() => {
                                    var e;
                                    let a =
                                        null == o ||
                                        null === (e = o.data) ||
                                        void 0 === e
                                          ? void 0
                                          : e[m],
                                      t =
                                        "ar" === d
                                          ? (null == a ? void 0 : a.name_ar)
                                            ? "name_ar"
                                            : "name"
                                          : (null == a ? void 0 : a.name_en)
                                          ? "name_en"
                                          : "name";
                                    return (null == a ? void 0 : a[t]) || "N/A";
                                  })()
                                : "email" === m
                                ? (null == o ||
                                  null === (s = o.data) ||
                                  void 0 === s
                                    ? void 0
                                    : s[m]) || "N/A"
                                : (0, r.Xp)(
                                    null == o ||
                                      null === (c = o.data) ||
                                      void 0 === c
                                      ? void 0
                                      : c[m]
                                  ) || "N/A",
                          }),
                    ],
                  },
                  m
                );
              }),
            }),
          })
        );
      }
    },
    25249: (e, a, t) => {
      t.d(a, { A: () => i });
      var l = t(95155),
        r = t(68358),
        n = t(98137),
        o = t(12115);
      function i(e) {
        var a, t;
        let { unit: i } = e,
          { translate: s, language: d } = (0, o.useContext)(r.x);
        console.log("unit", i);
        let c = {
          notice: {
            message_ar: "".concat(
              (0, n.Bj)(
                null == i || null === (a = i.data) || void 0 === a
                  ? void 0
                  : a.application_closing_date,
                "ar"
              ),
              " Ø¢Ø®Ø± ÙŠÙˆÙ… Ù„Ù„ØªÙ‚Ø¯Ù… ÙÙŠ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹"
            ),
            message_en: "".concat(
              (0, n.Bj)(
                null == i || null === (t = i.data) || void 0 === t
                  ? void 0
                  : t.application_closing_date,
                "en"
              ),
              "  is the last day to apply for the project"
            ),
          },
        };
        return (0, l.jsxs)("div", {
          className:
            "flex items-center gap-3 p-3 mb-4 bg-orange-100 rounded-md shadow-md ",
          children: [
            (0, l.jsx)("div", { className: "alert-icon xs:ps-4 md:ps-0 " }),
            (0, l.jsx)("p", {
              className:
                "lg:desktop-body-content-accent xs:mobile-body-content-accent",
              children: "ar" === d ? c.notice.message_ar : c.notice.message_en,
            }),
          ],
        });
      }
    },
    32717: (e, a, t) => {
      t.d(a, { A: () => g });
      var l = t(95155),
        r = t(12115),
        n = t(70213),
        o = t(68358),
        i = t(60501),
        s = t(502),
        d = t(98137);
      function c(e) {
        let { ApplicationData: a, language: t } = e,
          r = (e, r, n) => {
            var o, i;
            return (
              null == a ||
              null === (i = a.data) ||
              void 0 === i ||
              null === (o = i[e]) ||
              void 0 === o
                ? void 0
                : o.length
            )
              ? (0, l.jsxs)("div", {
                  className: "flex flex-col justify-center",
                  children: [
                    (0, l.jsx)("label", {
                      className: "!pb-[0.4rem] !p-0",
                      children: "ar" === t ? r : n,
                    }),
                    a.data[e].map((e, a) =>
                      (0, l.jsx)(
                        "div",
                        {
                          className:
                            "ps-4 pe-2 gap-2 py-[0.4rem] rounded-lg ".concat(
                              "en" === t ? "w-full" : "lg:w-[100%] xs:w-full",
                              " bg-gray-50"
                            ),
                          children: [
                            {
                              key: "request_status",
                              labelEn: "Status:",
                              labelAr: "Ø§Ù„Ø­Ø§Ù„Ø©:",
                            },
                            {
                              key: "date_created",
                              labelEn: "Date Created:",
                              labelAr: "ØªØ§Ø±ÙŠØ® Ø§Ù„Ø¥Ù†Ø´Ø§Ø¡:",
                            },
                            {
                              key: "date_updated",
                              labelEn: "Date Updated:",
                              labelAr: "ØªØ§Ø±ÙŠØ® Ø§Ù„ØªØ­Ø¯ÙŠØ«:",
                            },
                          ].map((a) => {
                            let { key: r, labelEn: n, labelAr: o } = a;
                            return (null == e ? void 0 : e[r])
                              ? (0, l.jsxs)(
                                  "div",
                                  {
                                    className: "flex items-center gap-3",
                                    children: [
                                      (0, l.jsx)("span", {
                                        className:
                                          "font-semibold lg:desktop-body-caption-regular xs:mobile-body-caption-regular",
                                        children: "ar" === t ? o : n,
                                      }),
                                      (0, l.jsx)("p", {
                                        className: "text-gray-700",
                                        children: r.includes("date")
                                          ? (0, d.Xp)((0, d._x)(e[r]))
                                          : e[r],
                                      }),
                                    ],
                                  },
                                  r
                                )
                              : null;
                          }),
                        },
                        a
                      )
                    ),
                  ],
                })
              : null;
          };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            r(
              "refundRequest",
              "Ø·Ù„Ø¨ Ø§Ù„Ø§Ø³ØªØ±Ø¯Ø§Ø¯",
              "Refund Request Status"
            ),
            r(
              "transferRequest",
              "Ø·Ù„Ø¨ Ù†Ù‚Ù„ Ø§Ù„ÙˆØ­Ø¯Ø©",
              "Transfer Request Status"
            ),
          ],
        });
      }
      function u(e) {
        var a, t, r, n, o, d, u;
        let {
          dataApply: m,
          dataRejected: p,
          status: g,
          language: f,
          reason: b,
          message: h,
          formNumber: v,
          ApplicationData: y,
          userData: x,
          translate: N,
          projectName: D,
          showInfo: S,
          unit: j,
        } = e;
        console.log("applicationdata", j), console.log("for", v);
        let k = {
          pending: {
            message:
              "ar" === f
                ? "ÙŠØªÙ… Ù…Ø±Ø§Ø¬Ø¹Ø© Ø§Ù„Ø·Ù„Ø¨"
                : "The application is being reviewed.",
            color: "bg-[#FCEFDE] !text-Warning-300",
          },
          approved: {
            message:
              "ar" === f
                ? "ØªÙ…Øª Ø§Ù„Ù…ÙˆØ§ÙÙ‚Ø© Ø¹Ù„Ù‰ Ø§Ù„Ø·Ù„Ø¨"
                : "The application has been approved.",
            color: "bg-Primary-50 !text-Primary-800",
          },
          rejected: {
            message:
              "ar" === f
                ? "ØªÙ… Ø±ÙØ¶ Ø§Ù„Ø·Ù„Ø¨"
                : "The application has been rejected.",
            color: "bg-[#F7D0D4] text-Error-300",
          },
          refunded: {
            message:
              "ar" === f
                ? "ØªÙ… Ø·Ù„Ø¨ Ø§Ø³ØªØ±Ø¯Ø§Ø¯ Ø¬Ø¯ÙŠØ© Ø§Ù„Ø­Ø¬Ø²"
                : "Refund request has been submitted.",
            color: "bg-[#F7D0D4] text-Error-300",
          },
          active: {
            message:
              "ar" === f
                ? "ØªÙ…Øª Ø§Ù„Ù…ÙˆØ§ÙÙ‚Ø© Ø¹Ù„Ù‰ Ø§Ù„Ø·Ù„Ø¨"
                : "The application has been approved.",
            color: "bg-Primary-50 !text-Primary-800",
          },
          stopped: {
            message:
              "ar" === f
                ? "ØªÙ… Ø±ÙØ¶ Ø§Ù„Ø·Ù„Ø¨"
                : "The application has been rejected.",
            color: "bg-[#F7D0D4] text-Error-300",
          },
        };
        return (0, l.jsxs)("div", {
          className: "flex flex-col gap-2 mt-2 ",
          children: [
            (0, l.jsxs)("div", {
              children: [
                (0, l.jsx)("label", {
                  className: "!pb-[0.4rem] !p-0",
                  children:
                    "ar" === f ? "Ø§Ø³Ù… Ø§Ù„Ù…Ø´Ø±ÙˆØ¹" : "project Name",
                }),
                (0, l.jsx)("p", {
                  children:
                    (null == j || null === (a = j.data) || void 0 === a
                      ? void 0
                      : a["ar" === f ? "name_ar" : "name_en"]) ||
                    (null == j || null === (t = j.data) || void 0 === t
                      ? void 0
                      : t.name) ||
                    D ||
                    (null == y ||
                    null === (n = y.data) ||
                    void 0 === n ||
                    null === (r = n.project) ||
                    void 0 === r
                      ? void 0
                      : r.name) ||
                    "N/A",
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: "".concat(
                S ? "grid lg:grid-cols-2 xs:grid-cols-1 " : "flex flex-col",
                " gap-4"
              ),
              children: [
                (0, l.jsx)("div", {
                  className: "mt-2",
                  children: (0, l.jsx)(i.A, {
                    label: m.name,
                    id: m.name,
                    type: m.type,
                    placeholder: m.placeholder,
                    defaultValue: v,
                    disabled: !0,
                    name: m.name,
                  }),
                }),
                (h ||
                  (null === (o = k[g]) || void 0 === o ? void 0 : o.message) ||
                  g) &&
                  (0, l.jsxs)("div", {
                    className: "flex flex-col justify-center",
                    children: [
                      (0, l.jsx)("label", {
                        className: "!pb-[0.4rem] !p-0",
                        children:
                          "ar" === f
                            ? "Ø­Ø§Ù„Ø© Ø§Ù„Ø·Ù„Ø¨"
                            : "status of apply",
                      }),
                      (0, l.jsx)("div", {
                        className: "ps-4 pe-2 gap-2 py-[0.4rem]  rounded-lg "
                          .concat(
                            "en" === f ? "w-full" : "lg:w-[70%] xs:w-full",
                            "  "
                          )
                          .concat(
                            null === (d = k[g]) || void 0 === d
                              ? void 0
                              : d.color,
                            " "
                          ),
                        children: (0, l.jsx)("p", {
                          className:
                            "lg:desktop-body-caption-regular xs:mobile-body-caption-regular ",
                          children:
                            h ||
                            (null === (u = k[g]) || void 0 === u
                              ? void 0
                              : u.message),
                        }),
                      }),
                    ],
                  }),
                b &&
                  (0, l.jsx)(i.A, {
                    label: p.name,
                    id: p.name,
                    type: p.type,
                    placeholder: p.placeholder,
                    name: p.name,
                  }),
                S && (0, l.jsx)(c, { ApplicationData: y, language: f }),
              ],
            }),
            S &&
              (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)("label", {
                    className: "!pb-[0.4rem] !p-0",
                    children:
                      "ar" === f
                        ? " Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø´Ø®ØµÙŠØ©"
                        : " Personal Information ",
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "flex flex-col gap-4 p-2 border border-black rounded-lg border-opacity-20 ",
                    children: (0, l.jsx)(s.A, {
                      formNumber: v,
                      ApplicationData: y,
                      userData: x,
                      status: g,
                      translate: N,
                      language: f,
                      reason: b,
                      message: h,
                    }),
                  }),
                ],
              }),
          ],
        });
      }
      var m = t(68817),
        p = t(6522);
      function g(e) {
        let {
            isFilterDataModalOpened: a,
            closeFilterDataModal: t,
            reason: i,
            status: s,
            onClick: d,
            message: c,
            formNumber: g,
            isDismissable: f,
            projectName: b,
            showInfo: h,
            unit: v,
            showBtnClose: y,
            handelButtonCloseAppHome: x,
          } = e,
          { translate: N, language: D } = (0, r.useContext)(o.x),
          { userData: S, userToken: j } = (0, m.Z)(),
          { data: k } = (0, p.YY)(g);
        return (
          console.log("ApplicationData", k),
          (0, l.jsx)(n.A, {
            handelButtonCloseAppHome: x,
            showBtnClose: y,
            buttonsNo: h ? 2 : 1,
            opened: a,
            onCloseModal: t,
            onAction: d,
            isDismissable: f,
            buttonText: "ar" === D ? "Ø§Ø°Ù‡Ø¨ Ù„Ù„Ù…Ø´Ø±ÙˆØ±Ø¹" : "go project",
            classNameButton:
              "!bg-Primary-800 lg:desktop-body-caption-accent xs:mobile-body-caption-accent",
            number: "ReservationApplyModal",
            customStyle: " ".concat(
              h
                ? "lg:!w-[45.875rem] xs:!h-[80%]"
                : "lg:!w-[32.875rem] md:!w-[21.438rem] xs:!w-[18rem] !h-fit xs:!h-fit ",
              "   xs:!scrollbar-hide    xs:!sticky overflow-y-scroll xs:!my-40  "
            ),
            customStyleHeader: " !sticky !bg-[#fff] z-50  px-base shadow-sm ",
            customStyleFooter:
              " !sticky !bg-[#fff] z-50 !bottom-0  !py-4 !mt-2  !px-4",
            className:
              " min-w-fit xs:!scrollbar-hide lg:!sticky overflow-y-scroll  ",
            headerContent: (0, l.jsx)("h5", {
              className: "text-PrimaryTextTitle desktop-body-highlight-bold",
              children: "ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø·Ù„Ø¨",
            }),
            decription:
              i &&
              (0, l.jsx)("p", {
                className:
                  "!text-PrimaryTextBody desktop-body-caption-regular lg:w-full xs:w-[13.688rem]",
                children:
                  "ØªØ­Ù‚Ù‚ Ù…Ù† Ø¬Ù…ÙŠØ¹ ØªÙØ§ØµÙŠÙ„ Ø·Ù„Ø¨Ùƒ Ù…Ù† ØªÙ‚Ø¯ÙŠÙ…Ù‡ ÙˆØ­ØªÙ‰ Ø¢Ø®Ø± ØªØ­Ø¯ÙŠØ« ØªÙ… Ø¥Ø¬Ø±Ø§Ø¤Ù‡.",
              }),
            children: (0, l.jsx)(u, {
              unit: v,
              showInfo: h,
              projectName: b,
              formNumber: g,
              dataApply: {
                name:
                  "ar" === D ? "Ø±Ù‚Ù… Ø§Ù„Ø§Ø³ØªÙ…Ø§Ø±Ø©" : "number of form",
                type: "text",
                placeholder:
                  "ar" === D ? "Ø±Ù‚Ù… Ø§Ù„Ø§Ø³ØªÙ…Ø§Ø±Ø©" : "number of form",
              },
              dataRejected: {
                name: "ar" === D ? "Ø³Ø¨Ø¨ Ø§Ù„Ø±ÙØ¶ " : "Reason for rejection",
                type: "text",
                placeholder:
                  "ar" === D ? "Ø³Ø¨Ø¨ Ø§Ù„Ø±ÙØ¶ " : "Reason for rejection",
              },
              status: s,
              ApplicationData: null == k ? void 0 : k.data,
              userData: S,
              translate: N,
              language: D,
              reason: i,
              message: c,
            }),
          })
        );
      }
    },
    33631: (e, a, t) => {
      t.d(a, {
        BS: () => n,
        Dl: () => r,
        Qg: () => i,
        U4: () => o,
        aq: () => d,
        p1: () => s,
      });
      var l = t(56348);
      async function r(e, a) {
        try {
          return await l.SP.post(e, a, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        } catch (e) {
          return (0, l.H4)(e), e;
        }
      }
      async function n(e, a) {
        try {
          return await l.SP.patch(e, a, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        } catch (e) {
          return (0, l.H4)(e), e;
        }
      }
      async function o(e, a) {
        try {
          return await l.SP.post("wishlist", {
            applicationsId: e,
            propertiesId: a,
          });
        } catch (e) {
          return (0, l.H4)(e), e;
        }
      }
      async function i(e) {
        try {
          return await l.SP.delete("wishlist/".concat(e));
        } catch (e) {
          return (0, l.H4)(e), e;
        }
      }
      async function s(e) {
        try {
          return await l.SP.post("refund/".concat(e));
        } catch (e) {
          return (0, l.H4)(e), e;
        }
      }
      async function d(e) {
        try {
          return await l.SP.post("transfer/AddTransfer?application=".concat(e));
        } catch (e) {
          return (0, l.H4)(e), e;
        }
      }
    },
    68817: (e, a, t) => {
      t.d(a, { A: () => u, Z: () => c });
      var l = t(95155),
        r = t(56348),
        n = t(6522),
        o = t(14765),
        i = t(12115),
        s = t(68358);
      let d = (0, i.createContext)(),
        c = () => (0, i.useContext)(d);
      function u(e) {
        let { children: a } = e,
          { language: t } = (0, i.useContext)(s.x),
          [c, u] = (0, i.useState)(null),
          [m, p] = (0, i.useState)(!1),
          [g, f] = (0, i.useState)(null),
          [b, h] = (0, i.useState)(null),
          [v, y] = (0, i.useState)(null),
          { data: x, mutate: N } = (0, n.xc)(g);
        return (
          (0, i.useEffect)(() => {
            console.log("language============>", t);
          }, [t]),
          (0, i.useEffect)(() => {
            r.SP.interceptors.request.use(
              (e) => (g && (e.headers.Authorization = g), e),
              (e) => Promise.reject(e)
            );
          }, [g]),
          (0, i.useEffect)(() => {
            let e = r.SP.interceptors.response.use(
              (e) => e,
              async (e) => {
                var a, l;
                let n = e.config;
                if (
                  (401 ===
                    (null === (a = e.response) || void 0 === a
                      ? void 0
                      : a.status) ||
                    403 ===
                      (null === (l = e.response) || void 0 === l
                        ? void 0
                        : l.status)) &&
                  !n._retry
                ) {
                  n._retry = !0;
                  try {
                    if (await (null == c ? void 0 : c.updateToken(5)))
                      return (
                        console.log("Token refreshed"),
                        f(null == c ? void 0 : c.token),
                        localStorage.setItem(
                          "TOKEN",
                          null == c ? void 0 : c.token
                        ),
                        (n.headers.Authorization =
                          null == c ? void 0 : c.token),
                        (0, r.SP)(n)
                      );
                  } catch (e) {
                    console.error("Failed to refresh token:", e),
                      await (null == c
                        ? void 0
                        : c.logout({
                            redirectUri: window.location.origin,
                            locale: t,
                          })),
                      localStorage.removeItem("TOKEN"),
                      localStorage.removeItem("USER_DATA"),
                      f(null),
                      h(null),
                      p(!1);
                  }
                }
                return Promise.reject(e);
              }
            );
            return () => {
              r.SP.interceptors.response.eject(e);
            };
          }, [c]),
          (0, i.useEffect)(() => {
            void 0 !== localStorage.getItem("TOKEN") &&
              f(localStorage.getItem("TOKEN")),
              void 0 !== localStorage.getItem("USER_DATA") &&
                h(JSON.parse(localStorage.getItem("USER_DATA")));
          }, []),
          (0, i.useEffect)(() => {
            (async () => {
              let e = new o.A({
                url: "https://auth-newera-uat.hdb-reservation.com/",
                realm: "HDB",
                clientId: "hdb_front",
              });
              try {
                let a = await e.init({ checkLoginIframe: !1 });
                p(a),
                  u(e),
                  a &&
                    (console.log("authenticated"),
                    f(e.token),
                    h(e.tokenParsed),
                    localStorage.setItem("TOKEN", e.token),
                    localStorage.setItem(
                      "USER_DATA",
                      JSON.stringify(e.tokenParsed)
                    )),
                  (e.onTokenExpired = async () => {
                    console.log("Token expired"),
                      await (null == e
                        ? void 0
                        : e.logout({
                            redirectUri: window.location.origin,
                            locale: t,
                          })),
                      localStorage.removeItem("TOKEN"),
                      localStorage.removeItem("USER_DATA"),
                      f(null),
                      h(null),
                      p(!1);
                  });
              } catch (e) {
                console.error("Failed to initialize Keycloak", e);
              }
            })();
          }, []),
          (0, i.useEffect)(() => {
            x && y(null == x ? void 0 : x.data);
          }, [x]),
          (0, l.jsx)(d.Provider, {
            value: {
              keycloak: c,
              isAuthenticated: m,
              userToken: g,
              userData: b,
              logout: async function () {
                await (null == c
                  ? void 0
                  : c.logout({
                      redirectUri: window.location.origin,
                      locale: t,
                    })),
                  localStorage.removeItem("TOKEN"),
                  localStorage.removeItem("USER_DATA"),
                  f(null),
                  h(null),
                  p(!1);
              },
              redirectToUpdate: function (e) {
                c.login({ action: e, locale: t });
              },
              redirectToDeleteAccount: function () {
                c.login({
                  action: "delete_account",
                  redirectUri: window.location.origin,
                  locale: t,
                }),
                  localStorage.removeItem("TOKEN"),
                  localStorage.removeItem("USER_DATA"),
                  f(null),
                  h(null),
                  p(!1);
              },
              profileData: v,
              profileMutate: N,
            },
            children: a,
          })
        );
      }
    },
    85482: (e, a, t) => {
      t.d(a, { A: () => r });
      var l = t(95155);
      function r(e) {
        let {
          options: a,
          activeFilter: t,
          onFilterChange: r,
          classNameDev: n,
          classNameButton: o,
        } = e;
        return (0, l.jsx)(
          "div",
          {
            className:
              "flex gap-1 p-[0.125rem] lg:desktop-body-caption-bold xs:mobile-body-caption-bold bg-Primary-50  rounded-s ".concat(
                n,
                " h-[2.5rem] "
              ),
            children:
              null == a
                ? void 0
                : a.map((e) =>
                    (0, l.jsx)(
                      "button",
                      {
                        type: "button",
                        className: "px-3 py-2 gap-2 flex "
                          .concat(
                            o,
                            " justify-center items-center h-[2.25rem] "
                          )
                          .concat(
                            t === (e.value || e.label)
                              ? "bg-white text-Primary-700 rounded-s"
                              : "bg-Primary-50 text-Primary-TextBody"
                          ),
                        onClick: () => r(e.value || e.label),
                        children: e.name || e.label,
                      },
                      e.id || e.key
                    )
                  ),
          },
          "filtertabs"
        );
      }
      t(12115);
    },
    92270: (e, a, t) => {
      t.d(a, { A: () => h });
      var l = t(95155),
        r = t(12115),
        n = t(27854),
        o = t(15667),
        i = t(49851);
      t(27828);
      var s = t(60501),
        d = t(68358);
      t(99175);
      var c = t(3726),
        u = t(68817),
        m = t(69606),
        p = t(16741);
      function g(e) {
        var a, t, n, o, g, f;
        let {
            field: b,
            register: h,
            errors: v,
            handleSelectChange: y = () => {},
            control: x,
            isSelected: N,
            getValues: D,
            setValue: S,
            setIsSelected: j,
            select: k,
            valueSelected: I,
            unregister: w,
            setValueSelected: A = () => {},
            formData: T,
          } = e,
          { translate: P, language: _ } = (0, r.useContext)(d.x),
          { userData: C } = (0, u.Z)(),
          E = "select" === b.type,
          F = "checkbox" === b.type,
          R = (e, a, t) => {
            let l = a.find((a) => a.id === e);
            return l ? l.name_ar || l.name || l.label : t;
          };
        return (0, l.jsxs)(
          "div",
          {
            children: [
              E &&
                (0, l.jsx)(m.xI, {
                  name: b.name,
                  control: x,
                  defaultValue: b.defaultValue[0],
                  rules: {
                    required: {
                      value: b.isRequired,
                      message:
                        (null === (t = b.errorMessage) ||
                        void 0 === t ||
                        null === (a = t.required) ||
                        void 0 === a
                          ? void 0
                          : a.message) || "This field is required.",
                    },
                  },
                  render: (e) => {
                    var a, t, r, n;
                    let {
                      field: { onChange: o, value: s },
                    } = e;
                    return "city" === b.name
                      ? (0, l.jsx)(p.A, {
                          selectedKeys: b.defaultValue,
                          labelClass: "right-0 my-2 !text-start",
                          errorMessage:
                            null === (a = v[b.fieldName]) || void 0 === a
                              ? void 0
                              : a.message,
                          errors: v,
                          isRequired: b.isRequired,
                          placeholder: R(I[b.name], b.options, b.fieldName),
                          label: b.fieldName,
                          labelPlacement: "outside",
                          items:
                            null == b ||
                            null === (t = b.options) ||
                            void 0 === t
                              ? void 0
                              : t.map((e) => ({
                                  id: e.id,
                                  key: e.id,
                                  value: e.label || e.id,
                                  label:
                                    e.label ||
                                    ("ar" === _ ? e.name_ar : e.name_en),
                                  defaultLabel: e.label || e.name,
                                })),
                          onChange: (e) => {
                            S(b.name, e.target.value),
                              y(b.name, e.target.value, b.setValue);
                          },
                          value: I[b.name] || D(b.name) || b.name,
                          name: b.name,
                          disabled: b.disabled,
                        })
                      : (0, l.jsx)(i.A, {
                          selectedKeys: b.defaultValue,
                          labelClass: "right-0 my-2 !text-start",
                          errorMessage:
                            null === (r = v[b.fieldName]) || void 0 === r
                              ? void 0
                              : r.message,
                          errors: v,
                          isRequired: b.isRequired,
                          placeholder: R(I[b.name], b.options, b.fieldName),
                          label: b.fieldName,
                          labelPlacement: "outside",
                          items:
                            null == b ||
                            null === (n = b.options) ||
                            void 0 === n
                              ? void 0
                              : n.map((e) => ({
                                  id: e.id,
                                  key: e.id,
                                  value: e.label || e.id,
                                  label:
                                    e.label ||
                                    ("ar" === _ ? e.name_ar : e.name_en),
                                  defaultLabel: e.label || e.name,
                                })),
                          onChange: (e) => {
                            S(b.name, e.target.value),
                              y(b.name, e.target.value, b.setValue);
                          },
                          value: I[b.name] || D(b.name) || b.name,
                          name: b.name,
                          disabled: b.disabled,
                        });
                  },
                }),
              F &&
                (0, l.jsx)(c.A, {
                  disabled: b.disabled,
                  defaultValue: b.defaultValue,
                  label: b.fieldName,
                  items: b.options,
                  name: b.name,
                  control: x,
                  isSelected: N,
                  nameDisability: b.fieldName,
                  handleChange: (e) => {
                    j(e),
                      "0" === e && T.disabilityInfo.forEach((e) => w(e.name));
                  },
                  type: "single",
                }),
              "file" === b.type &&
                (0, l.jsxs)("div", {
                  className: "flex !mb-1  ",
                  children: [
                    (0, l.jsx)("p", {
                      className:
                        " !text-PrimaryTextTitle !p-0 xs:mobile-body-caption-accent lg:desktop-body-caption-accent ",
                      children: b.fieldName,
                    }),
                    (0, l.jsx)("div", { className: " required-icon" }),
                  ],
                }),
              !E &&
                !F &&
                (0, l.jsx)(m.xI, {
                  name: b.name,
                  control: x,
                  rules: {
                    ...((null == b ||
                    null === (n = b.errorMessage) ||
                    void 0 === n
                      ? void 0
                      : n.pattern) && {
                      pattern:
                        null === (o = b.errorMessage) || void 0 === o
                          ? void 0
                          : o.pattern,
                    }),
                  },
                  render: (e) => {
                    var a, t, r;
                    let { field: n } = e;
                    return (0, l.jsx)(s.A, {
                      defaultValue: b.defaultValue,
                      field: b,
                      control: x,
                      setValue: S,
                      getValues: D,
                      errorMessage:
                        null === (a = v[b.fieldName]) || void 0 === a
                          ? void 0
                          : a.message,
                      errors: v,
                      labelPlacement: "outside",
                      label: b.fieldName,
                      isRequired: b.isRequired,
                      id: b.fieldName,
                      type: b.type,
                      placeholder: b.placeholder,
                      ...h(b.name, {
                        required:
                          b.isRequired &&
                          (null === (r = b.errorMessage) ||
                          void 0 === r ||
                          null === (t = r.required) ||
                          void 0 === t
                            ? void 0
                            : t.message),
                      }),
                      accept: ".pdf,.jpeg,.jpg",
                      name: b.name,
                      disabled: b.disabled,
                    });
                  },
                }),
              (null === (g = v[b.name]) || void 0 === g ? void 0 : g.message) &&
                (0, l.jsx)("p", {
                  className: "text-sm text-red-500",
                  children:
                    null === (f = v[b.name]) || void 0 === f
                      ? void 0
                      : f.message,
                }),
            ],
          },
          b.fieldName
        );
      }
      t(85482);
      var f = t(25249);
      let b = {
        base: "!px-0 shadow-none !rounded-lg sm:border xs:border-none !border-Primary-200 sm:bg-PrimaryShadeBG xs:bg-transparent",
        title: "text-PrimaryTextTitle lg:desktop-heading-6 xs:mobile-heading-6",
        trigger:
          "!p-4 gap-2 flex sm:bg-Primary-50 xs:bg-transparent sm:!border-2 xs:border-none !border-Primary-200 rounded-lg data-[open=true]:rounded-b-none",
        indicator:
          "!w-[1.5rem] !h-[1.5rem] !bg-PrimaryTextBody accordion-arrow transition-transform duration-300 ease-in-out ltr:data-[open=true]:rotate-180 ltr:rotate-0 rtl:rotate-360 rtl:data-[open=true]:rotate-180   ",
        content:
          "sm:!px-6 xs:!px-0 !py-4 sm:!border xs:border-none !border-Primary-200",
      };
      function h(e) {
        let {
            data: a,
            register: t,
            errors: i,
            unit: s,
            addSpouseInfo: d,
            setAddSpouseInfo: c = () => {},
            handleSelectChange: u,
            control: m,
            setValue: p,
            getValues: h,
            handelAddspouseInfo: v = () => {},
            handleRemoveSpouse: y = () => {},
            isSelected: x,
            setIsSelected: N,
            valueSelected: D,
            setValueSelected: S = () => {},
            unregister: j,
            formData: k,
            showAlert: I,
          } = e,
          [w, A] = (0, r.useState)(
            new Set(["1", "2", "3", "4", "5", "6", "7"])
          );
        return (
          (0, r.useEffect)(() => {}, [d]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              I && (0, l.jsx)(f.A, { unit: s }),
              (0, l.jsx)(n.D, {
                itemClasses: b,
                variant: "splitted",
                className: "!px-0 ",
                selectedKeys: w,
                selectionMode: "multiple",
                hideIndicator: !0,
                disableIndicatorAnimation: !0,
                onSelectionChange: () => {},
                children: a.map((e) => {
                  var a, r;
                  return (0, l.jsx)(
                    o.R,
                    {
                      id: e.key,
                      title: e.title,
                      className: "!expanded ",
                      children: (0, l.jsx)("div", {
                        className: "".concat(
                          (null == e || null === (a = e.fields) || void 0 === a
                            ? void 0
                            : a.length) > 3
                            ? "lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1"
                            : "sm:grid-cols-2 xs:grid-cols-1",
                          " grid gap-4  "
                        ),
                        children: (null == e ? void 0 : e.addFields)
                          ? null == e
                            ? void 0
                            : e.fields
                                .slice(0, d + 1)
                                .map((a, r) =>
                                  a.map((a) =>
                                    (0, l.jsx)(
                                      g,
                                      {
                                        formData: k,
                                        unregister: j,
                                        valueSelected: D,
                                        getValues: h,
                                        setValue: p,
                                        isSelected: x,
                                        setIsSelected: N,
                                        control: m,
                                        errorMessage: a.errorMessage,
                                        field: a,
                                        register: t,
                                        errors: i,
                                        section: e.key,
                                        handleSelectChange: u,
                                      },
                                      a.fieldName
                                    )
                                  )
                                )
                          : null == e || null === (r = e.fields) || void 0 === r
                          ? void 0
                          : r.map((a) =>
                              (0, l.jsx)(
                                g,
                                {
                                  formData: k,
                                  unregister: j,
                                  valueSelected: D,
                                  setValue: p,
                                  getValues: h,
                                  control: m,
                                  isSelected: x,
                                  setIsSelected: N,
                                  errorMessage: a.errorMessage,
                                  field: a,
                                  register: t,
                                  errors: i,
                                  section: e.key,
                                  handleSelectChange: u,
                                },
                                a.fieldName
                              )
                            ),
                      }),
                    },
                    e.key
                  );
                }),
              }),
            ],
          })
        );
      }
    },
    98137: (e, a, t) => {
      function l(e) {
        let a =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ar";
        if (!e) return "";
        let t = new Date(e);
        if (Number.isNaN(t.getTime()))
          return "ar" === a ? "ØªØ§Ø±ÙŠØ® ØºÙŠØ± ØµØ§Ù„Ø­" : "Invalid date";
        let l = "ar" === a ? "arab" : "latn",
          r = new Intl.DateTimeFormat(a, {
            day: "numeric",
            numberingSystem: l,
          }).format(t),
          n = new Intl.DateTimeFormat(a, { month: "long" }).format(t),
          o = new Intl.DateTimeFormat(a, {
            year: "numeric",
            numberingSystem: l,
          }).format(t);
        return "".concat(r, " ").concat(n, " ").concat(o);
      }
      function r(e) {
        let a,
          t,
          l =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "ar",
          r = new Date(e),
          n = new Date();
        if (Number.isNaN(r.getTime())) return "";
        let o = Math.floor(Math.abs(n - r) / 6e4),
          i = Math.floor(o / 60),
          s = Math.floor(i / 24);
        if (
          (o < 60
            ? ((a = o), (t = "minute"))
            : i < 24
            ? ((a = i), (t = "hour"))
            : ((a = s), (t = "day")),
          "ar" === l)
        ) {
          let e = {
            minute: 1 === a ? "Ø¯Ù‚ÙŠÙ‚Ø©" : "Ø¯Ù‚Ø§Ø¦Ù‚",
            hour: 1 === a ? "Ø³Ø§Ø¹Ø©" : "Ø³Ø§Ø¹Ø§Øª",
            day: 1 === a ? "ÙŠÙˆÙ…" : "Ø£ÙŠØ§Ù…",
          };
          return "Ù†Ø²Ù„ Ù…Ù† ".concat(a, " ").concat(e[t]);
        }
        return new Intl.RelativeTimeFormat(l, { numeric: "auto" }).format(
          -a,
          t
        );
      }
      function n(e) {
        let a = ["Ù ", "Ù¡", "Ù¢", "Ù£", "Ù¤", "Ù¥", "Ù¦", "Ù§", "Ù¨", "Ù©"];
        return null == e
          ? null
          : e
              .toString()
              .replace(/\s+/g, "")
              .split("")
              .map((e) => (/\d/.test(e) ? a[e] : e))
              .join("");
      }
      function o(e) {
        let a;
        if (14 !== e.length || isNaN(e))
          return "Ø±Ù‚Ù… Ø§Ù„Ù‡ÙˆÙŠØ© Ø§Ù„ÙˆØ·Ù†ÙŠ ØºÙŠØ± ØµØ§Ù„Ø­";
        let t = e[0],
          l = e.substring(1, 3),
          r = e.substring(3, 5),
          n = e.substring(5, 7);
        if ("3" === t) a = "20" + l;
        else {
          if ("2" !== t)
            return "Ø±Ù‚Ù… Ø§Ù„Ù‡ÙˆÙŠØ© Ø§Ù„ÙˆØ·Ù†ÙŠ ØºÙŠØ± ØµØ§Ù„Ø­";
          a = "19" + l;
        }
        let o = new Date("".concat(a, "-").concat(r, "-").concat(n)),
          i = new Date(),
          s = i.getFullYear() - o.getFullYear();
        !(
          i.getMonth() > o.getMonth() ||
          (i.getMonth() === o.getMonth() && i.getDate() >= o.getDate())
        ) && s--;
        let d = a;
        return {
          formattedDate: "".concat(d, "-").concat(r, "-").concat(n),
          age: s,
          year: d,
          month: r,
          day: n,
        };
      }
      function i(e) {
        if (!e) return "";
        let a = new Date(e);
        if (isNaN(a.getTime())) return "";
        let t = String(a.getDate()).padStart(2, "0"),
          l = String(a.getMonth() + 1).padStart(2, "0"),
          r = a.getFullYear();
        return "".concat(t, "/").concat(l, "/").concat(r);
      }
      function s(e) {
        if (!e) return !1;
        let a = new Date(e),
          t = new Date(),
          l = a.toLocaleDateString("en-CA"),
          r = t.toLocaleDateString("en-CA");
        return l === r ? 0 : l > r ? 1 : -1;
      }
      function d(e) {
        if (!e) return !1;
        let a = new Date(e).getTime(),
          t = new Date().getTime();
        return a === t ? 0 : a > t ? 1 : -1;
      }
      function c(e) {
        return new Date(e).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: !0,
        });
      }
      t.d(a, {
        Bj: () => l,
        T9: () => s,
        Xp: () => n,
        _x: () => i,
        fw: () => r,
        rJ: () => d,
        ry: () => c,
        xN: () => o,
      });
    },
  },
]);
