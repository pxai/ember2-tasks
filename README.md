# tasks-ember

[![Build Status](https://travis-ci.com/pxai/ember2-tasks.svg?token=arqgKqUXMMcY8kTPhsyy&branch=master)](https://travis-ci.com/pxai/ember2-tasks)

Simple classic todo-list implemented in Ember 2.18.2. The official tutorial is nice but you'll probably miss how
to do certain things. This simple app covers the classic CRUD operations.

Notes: I started this using node 8, but when I introduced ember-cli-mirage I started having problems to run this.
mirage does not work with node 8, so I had to move to node 10.

## Generators:

* `ember g acceptance-test list-tasks`
* `ember generate route about`
* `ember generate adapter application`
* `ember g component task-listing`
* `ember g helper task-category-type`
* `ember g model task`

## Mirage

You can create factories for data:

* `ember g mirage-factory task`
Then you can just add functions
https://www.ember-cli-mirage.com/versions/v0.4.x/shorthands/

Running single tests:
* `ember test --filter "Acceptance | list tasks"`
* `ember test --module "Acceptance | list tasks"`

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd tasks-ember`
* `npm install`

## Plugins installed:

Tutorial style
* ember install ember-cli-tutorial-style

Mirage, a kind of fake server
* ember install ember-cli-mirage

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember t`
If you want an UI
* `ember test --server`  

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
