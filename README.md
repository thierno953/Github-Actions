# CI/CD Github Actions

- Github Actions is a continuous integration and continuous devlivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline.
- You can create workflows that build and test every pull request to your repository, or deploy merged pull requests to production.
- Github provides Linux Windows, and Mac virtual machines to run your workflows, or you can host your own self-hosted runners in your own data center or cloud infrastructure.

```shell
Event<------> Runner 1 <------------------------------------>Runner  2
                |                                             |
              Job 1                                          Job 2
                Step 1: Run action                              Step 1: Run action
                Step 2: Run script                              Step 2: Run script
                Step 3: Run script                              Step 3: Run script
                Step 4: Run action
```

# Workflows

- A worklow is a configurable automated process that will run one or more jobs.
- Workflows are definied by a YAML file checked in to your repository and will run when triggered by an even in your repository, or they can be triggered manually, or at a defined schedule.
- Workflows are defined in the **.github/workflows** directory in a repository, and a repository can have multiple workflows, each of which can perform a different set of tasks.

# Events

- An event is a specific activity in a repository that triggers a workflow run.
- **For example**, activity can originate from Github when someone creates a pull request, opens an issue, or purshes a commit to a repository.

```shell
name: Publish Docker image

on:
  push:
    branches: ["main"]
```

# Jobs

- A job is a set of steps in a workflow that execute on the same runner.
- Each step is either a shell script that will be executed, or an action that will be run.
- You can configure a job's dependencies with other jobs; by default, jobs have no dependencies and run in parallel with each other. When a job takes a dependency on another job, it will wait for the dependent job to complete before it can run.

# Actions

- An action is a custum application for the Github Actions platform that performs a complex but frequently repeated task.
- Use an action to help reduce the amount of repetitive code that you write in your workflow files.
- You can write your own actions, or you can find actions to use in your workflows in the Github Marketplace.

# Runner

- A runner is a server that runs your workflows when they're triggered.
- Each runner can run a single job at a time.
- Github provides Ubuntu Linux, Microsoft Windows, and macOS runners to run your workflows; each workflow run executes in a fresh, newly-provisioned virtual machine.

## Which CI/CD tool will we use: Github Actions

[More Github Actions](https://github.com/features/actions)

#### Marketplace :

[Search Github marketplace](https://github.com/marketplace?type=)

#### Build Docker

[Github Marketplace docker](https://github.com/marketplace/actions/build-and-push-docker-images)

#### Deploy Heroku

[Github Marketplace heroku](https://github.com/marketplace/actions/deploy-to-heroku)

#### Security Trivy

[Github Marketplace trivy](https://github.com/marketplace/actions/aqua-security-trivy)

#### OWASP ZAP Baseline Scan

[Github Marketplace scan](https://github.com/marketplace/actions/owasp-zap-baseline-scan)

#### Beanstalk Deploy

[Github Marketplace beanstalk](https://github.com/marketplace/actions/beanstalk-deploy)
