# How to Contribute

## Code of Conduct
Citizen has adopted a Code of Conduct that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

## Open development
All work on Jest happens directly on GitHub. Both core team members and external contributors send pull requests which go through the same review process.

### Workflow and Pull Requests
Before submitting a pull request, please make sure the following is done…

1. Fork the repo and create your branch from master. A guide on how to fork a repository: https://help.github.com/articles/fork-a-repo/

Open terminal (e.g. Terminal, iTerm, Git Bash or Git Shell) and type:

```
$ git clone https://github.com/<your_username>/citizen
$ cd citizen
$ git checkout -b my_branch
```

Note: Replace <your_username> with your GitHub username

2. Citizen uses node, npm and expo for running development scripts. If you haven't already done so, please install them globally. If you want to use your smartphone to test your code changes on, download the Expo app on your phone as well.

3. Run `npm install`

4. To start the app, run `npm run start`. Use the QR code to render the app on your phone. Make sure your computer and your phone are on the same wifi network.

5. Pick an issue on our Github [Project Board](https://github.com/eseite47/citizen/projects/1_) and mark it `In progress`. If you stop working on it, make sure to move it back to `To Do`.

### Testing
We do not currently have unit test suites, but we have plan to add testing to our workflow in the coming months. See our [Testing feature request](https://github.com/eseite47/citizen/issues/7).

## Bugs

### Where to Find Known Issues
We will be using [GitHub Issues](https://github.com/eseite47/citizen/issues) for our public bugs. We will keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new issue, try to make sure your problem doesn't already exist.

### Reporting New Issues
The best way to get your bug fixed is to provide a reduced test case. [Open an issue](https://github.com/eseite47/citizen/issues/new/choose) on Github Issues.

## Code Conventions
- 2 spaces for indentation (no tabs).
- 80 character line length strongly preferred.
- Prefer ' over ".
- ES6 syntax when possible.
- Use Flow types.
- Use semicolons;
- Trailing commas,
- Avd abbr wrds.

## License
By contributing to Citizen, you agree that your contributions will be licensed under its [MIT License](https://choosealicense.com/licenses/mit/).