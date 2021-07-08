const PROXY_CONFIG = [
  {
    context: [
      "/_framework"
    ],
    target: "https://localhost:5001",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
