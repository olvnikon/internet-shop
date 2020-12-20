const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "https://olvlesya.github.io/internet-shop/out/" : "",
};
