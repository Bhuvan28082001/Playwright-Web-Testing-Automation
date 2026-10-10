# Playwright — Web Test Automation

A web test automation project built with **Playwright and JavaScript**, with cloud browser execution using **LambdaTest**. This project covers three web-testing scenarios on the TestMu AI Selenium Playground.

## Project Overview

The goal of this project is to practice browser automation, interact with web elements, validate form behavior, and execute automated tests in a cloud browser environment.

### Test Scenarios

| Test Scenario | What It Tests |
|---|---|
| Simple Form Demo | Entering and submitting text and verifying the result |
| Drag and Drop Slider | Interacting with a range slider and validating its value |
| Input Form Submit | Filling out and submitting a form |

## Tech Stack

- **Playwright** — Browser automation and testing
- **JavaScript** — Test scripting
- **LambdaTest** — Cloud browser test execution
- **Node.js & npm** — JavaScript runtime and package management
- **Git & GitHub** — Version control and project hosting
- **TestMu AI Selenium Playground** — Application under test

## Project Structure

```text
Playwright-101-assignment/
├── tests/
│   └── assignment.spec.js
├── playwright.config.js
├── lambdatest-setup.js
├── lambdatest-cloud.js
├── package.json
├── package-lock.json
└── README.md
```

*Note: Your actual repository structure may vary depending on which files you committed.*

## Getting Started

### 1. Prerequisites

Install Node.js and npm, then clone the repository:

```bash
git clone https://github.com/Bhuvan28082001/Playwright-101-assignment.git
cd Playwright-101-assignment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Tests

To run the Playwright test suite:

```bash
npx playwright test
```

The configured LambdaTest setup may require valid LambdaTest credentials and the appropriate cloud execution configuration.

**Security:** Store credentials in environment variables. Never commit access keys, passwords, or `.env` files containing secrets to GitHub.

## Cloud Test Execution

The test scenarios were executed using LambdaTest with a remote Chrome browser environment.

The project configuration includes test reporting and options for collecting debugging evidence, such as screenshots, video recordings, and traces.

## Key Learning Outcomes

- Writing browser automation tests with Playwright
- Working with locators and web elements
- Interacting with forms and sliders
- Using assertions to validate expected behavior
- Executing tests on a cloud browser platform
- Reviewing test execution results and debugging evidence
- Organizing automated tests in a JavaScript project

## Project Status

The three configured test scenarios were successfully executed in LambdaTest during the assignment.

## Author

**Bhuvan Chandra**

Master's Student in Data Science | QA & Test Automation

**GitHub:** [Playwright-101-Assignment](https://github.com/Bhuvan28082001/Playwright-101-assignment)

---

*This project was completed as part of practical learning in web test automation using Playwright and LambdaTest.*
