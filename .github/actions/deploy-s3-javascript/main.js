// first run "npm init -y" in .github/actions/deploy-s3-javascript folder to install Node in that folder (will install package.json file)
// afterwards run "npm install @actions/..."" to install actions toolkit dependencies (JS packages to be used in JS actions for GitHub)
const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    // 1) Get input values
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: true });
    const distFolder = core.getInput('dist-folder', { required: true });

    // 2) Upload files to AWS S3 bucket (using exec package)
    const s3Uri = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

    // 3) Generate website url
    const websiteUrl = `http://${bucket}.s3-website.${bucketRegion}.amazonaws.com`;
    core.setOutput('website-url', websiteUrl);
}

run();