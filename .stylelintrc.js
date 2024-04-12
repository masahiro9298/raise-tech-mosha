module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
  ignoreFiles: ["**/node_modules/**"],
  rules: {
    "property-no-vendor-prefix": null, //ベンダープレフィックスの統一化
    "comment-empty-line-before": null, //コメントの整形
  },
};
