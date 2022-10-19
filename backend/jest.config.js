module.exports = {
    roots: ["<rootDir>/"],
    testMatch: [
        "**/tests/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    testPathIgnorePatterns: ["/node_modules/", "/build/"],
    verbose: true,
    testEnvironment: "node"
}