v_posts
===

v_posts -&gt; Vodo -&gt; V_Todo | :D 

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/v_posts.svg)](https://npmjs.org/package/v_posts)
[![Downloads/week](https://img.shields.io/npm/dw/v_posts.svg)](https://npmjs.org/package/v_posts)
[![License](https://img.shields.io/npm/l/v_posts.svg)](https://github.com/V-tech-tools/v_posts/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g v_posts
$ v_posts COMMAND
running command...
$ v_posts (-v|--version|version)
v_posts/1.0.1 win32-x64 node-v14.17.5
$ v_posts --help [COMMAND]
USAGE
  $ v_posts COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`v_posts config ACTION`](#v_posts-config-action)
* [`v_posts notes ACTION`](#v_posts-notes-action)
* [`v_posts tasks ACTION`](#v_posts-tasks-action)
* [`v_posts welcome`](#v_posts-welcome)

## `v_posts config ACTION`

Handles Vdo App configurations

```
USAGE
  $ v_posts config ACTION

ARGUMENTS
  ACTION  (view|create|registerOption) action/function/method you want it to execute

OPTIONS
  -a, --all=all      all
  -n, --name=name    name
  -v, --value=value  value

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/config.js](https://github.com/V-tech-tools/v_posts/blob/v1.0.1/src/commands/config.js)_

## `v_posts notes ACTION`

Describe the command here

```
USAGE
  $ v_posts notes ACTION

ARGUMENTS
  ACTION  (view|new|trash|untrash|edit|update|complete|incomplete|total_number|generate_test|purge_system) [default:
          view] action/function/method you want it to execute

OPTIONS
  -a, --all=all                            all
  -c, --content=content                    content to use
  -d, --description=description            description to use
  -h, --shortDescription=shortDescription  shortDescription to use
  -i, --id=id                              id to use
  -s, --status=status                      status to use
  -t, --title=title                        title to use

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/notes.js](https://github.com/V-tech-tools/v_posts/blob/v1.0.1/src/commands/notes.js)_

## `v_posts tasks ACTION`

Describe the command here

```
USAGE
  $ v_posts tasks ACTION

ARGUMENTS
  ACTION  (view|new|trash|untrash|edit|update|complete|incomplete|total_number|generate_test|purge_system) [default:
          view] action/function/method you want it to execute

OPTIONS
  -a, --all=all                            all
  -c, --content=content                    content to use
  -d, --description=description            description to use
  -g, --generate_number=generate_number    Number to generate as test
  -h, --shortDescription=shortDescription  shortDescription to use
  -i, --id=id                              id to use
  -r, --ref_url=ref_url                    Reference URL to use
  -s, --status=status                      status to use
  -t, --title=title                        title to use
  -y, --yes=yes                            Auto Confirm YES

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/tasks.js](https://github.com/V-tech-tools/v_posts/blob/v1.0.1/src/commands/tasks.js)_

## `v_posts welcome`

Describe the command here

```
USAGE
  $ v_posts welcome

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/welcome.js](https://github.com/V-tech-tools/v_posts/blob/v1.0.1/src/commands/welcome.js)_
<!-- commandsstop -->
