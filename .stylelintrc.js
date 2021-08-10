module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "at-rule-no-unknown": null,
    "color-hex-length": null,
    "declaration-colon-newline-after": null,
    "declaration-empty-line-before": null,
    indentation: [
      2,
      {
        ignore: ["inside-parens"],
      },
    ],
  },
};
