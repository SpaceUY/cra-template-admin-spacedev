# Contributing

We want this community to be friendly and respectful to each other. Please follow it in all your interactions with the project.

## Development workflow

**If it's your first time using `react-admin` then the official docs offer a [30min tutorial](https://marmelab.com/react-admin/Tutorial.html) that's great to get up and running quickly.**

```sh
yarn
```
To get started with the project, run `yarn` in the root directory to install the required dependencies for each package.

```sh
yarn start
```

To run the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```sh
yarn lint --fix
```

To fix formatting errors.

### Project structure

**Consistency is key**, this is the base structure we want all our projects to follow, whatever you need to add to it so it better suits your needs stick to it 100%, be consistent!

Folder by folder this is what we put in each top level directory:

- `assets` - multimedia files that you need.
- `auth` - where your `authProvider` will be
- `components` - reusable components like buttons, links, cards, modals...
- `hooks` - reusable hooks.
- `localization` - handle i18n here.
- `resources` - these are the components you link to resources, for instance, should you make a `UserEdit` component to use as `<Resource name="user" edit={UserEdit} />` then it is to be placed here within a folder called the same as the resource (`user/UserEdit.js`).
- `theme` - read [this documentation](https://material-ui.com/customization/theming/) to get your nails done.

### Branching policies

These are the branches we use and ask you to adhere to:

- `dev`: Active development branch, when creating a `feature` branch start here
- `staging`: This branch is the one you update once or twice per sprint and your customer will test the code present within it
- `master`: Latest stable code - accessible to end users (production)

- `feat/<feature>#<card_no>`: A feature that's wip. Make a PR with it to dev when ready. Always use snake case for the feature description - **delete branch after merged!**
- `fix/<desc>#<card_no>`: Bug fix that's not urgent, it will be merged to dev - **delete branch after merged!**
- `hotfix/<desc>#<card_no>`: Urgent bug fix, merged directly to master (production) - **delete branch after merged!**

### Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module..
- `test`: adding or updating tests, e.g. add integration tests using detox.
- `chore`: tooling changes, e.g. change CI config.

Our pre-commit hooks verify that your commit message matches this format when committing.

### Linting and tests

[ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

We use [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/) for linting and formatting the code.

> **Is the linter bullying you?** We're sorry but it's there for a reason, try to comply with it as much as humanly possible. If you think you run into an edge case and want to disable it add a comment nearby so we know why and whoever reviews the PR can propose alternatives if they can think of any.

Our pre-commit hooks verify that the linter passes when committing.

### Sending a pull request

> **Working on your first pull request?** You can learn how from this _free_ series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

When you're sending a pull request:

- Prefer small pull requests focused on one change.
- Verify that linters are passing.

## Code of Conduct

### Our Pledge

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.

### Our Standards

Examples of behavior that contributes to a positive environment for our community include:

- Demonstrating empathy and kindness toward other people
- Being respectful of differing opinions, viewpoints, and experiences
- Giving and gracefully accepting constructive feedback
- Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience
- Focusing on what is best not just for us as individuals, but for the overall community

Examples of unacceptable behavior include:

- The use of sexualized language or imagery, and sexual attention or
  advances of any kind
- Trolling, insulting or derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or email
  address, without their explicit permission
- Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.

Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.

### Scope

This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.
