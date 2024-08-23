// first run "npm init -y" in .github/actions/deploy-s3-javascript folder to install Node in that folder (will install package.json file)
// afterwards run "npm install @actions/..."" to install actions toolkit dependencies (JS packages to be used in JS actions for GitHub)
const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    core.notice('Hello from my custom JavaScript action!');
}

run();