Package.describe({
  summary: "Moved to the 'markdown' package",
  version: '1.0.6-rc.6'
});

Package.onUse(function (api) {
  api.imply("markdown");
});
