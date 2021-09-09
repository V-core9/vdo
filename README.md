vdo
===

vdo -&gt; Vodo -&gt; V_Todo | :D 

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/vdo.svg)](https://npmjs.org/package/vdo)
[![Downloads/week](https://img.shields.io/npm/dw/vdo.svg)](https://npmjs.org/package/vdo)
[![License](https://img.shields.io/npm/l/vdo.svg)](https://github.com/V-tech-tools/vdo/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g vdo
$ vdo COMMAND
running command...
$ vdo (-v|--version|version)
vdo/1.0.1 win32-x64 node-v14.17.5
$ vdo --help [COMMAND]
USAGE
  $ vdo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`vdo config ACTION`](#vdo-config-action)
* [`vdo notes ACTION`](#vdo-notes-action)
* [`vdo tasks ACTION`](#vdo-tasks-action)
* [`vdo welcome`](#vdo-welcome)

## `vdo config ACTION`

Handles Vdo App configurations

```
USAGE
  $ vdo config ACTION

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

_See code: [src/commands/config.js](https://github.com/V-tech-tools/vdo/blob/v1.0.1/src/commands/config.js)_

## `vdo notes ACTION`

Describe the command here

```
USAGE
  $ vdo notes ACTION

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

_See code: [src/commands/notes.js](https://github.com/V-tech-tools/vdo/blob/v1.0.1/src/commands/notes.js)_

## `vdo tasks ACTION`

Describe the command here

```
USAGE
  $ vdo tasks ACTION

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

_See code: [src/commands/tasks.js](https://github.com/V-tech-tools/vdo/blob/v1.0.1/src/commands/tasks.js)_

## `vdo welcome`

Describe the command here

```
USAGE
  $ vdo welcome

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/welcome.js](https://github.com/V-tech-tools/vdo/blob/v1.0.1/src/commands/welcome.js)_
<!-- commandsstop -->
