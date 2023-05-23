README, HELP
rozszerzenie md - markdown

Commands
check NodeJS version
node -v

new project with Playwright
npm init playwright@latest

record tests for given site
npx playwright codegen https://

run tests without browser GUI
npx playwright test

run tests with browser GUI
npx playwright test --headed

view report
npx playwright show-report

cancelling Node process
hit twice Ctrl + C

Playwright snippets
import:
import { test, expect } from '@playwright/test';

test:
test('test description', async ({ page }) => { });

describe:
`test.describe('Group description', () => {

});`

running given test:
test.only

trace.playwrigth.dev - test klatka po klatce; retain-on-failure
Visual Studio Code
Preview: for README.md
Autosave: in File -> Auto Save
Timeline: file context menu -> Open Timeline
Formatting: editor -> context menu -> Format Document
Searching: editor -> CTRL + F
Accept hint in editor: Enter
Comment/Uncomment: Ctrl + /
Duplicate line: Alt + Shift
Use more than one terminal: + button in TERMINAL -inline parameters for VSCode pwdebug=1