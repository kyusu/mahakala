# mahakala
[![Node.js CI](https://github.com/kyusu/mahakala/workflows/Node.js%20CI/badge.svg)](https://github.com/kyusu/mahakala/actions/workflows/node.js.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/2a8f8276214c89a96d19/maintainability)](https://codeclimate.com/github/kyusu/mahakala/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/kyusu/mahakala/badge.svg?targetFile=package.json)](https://snyk.io/test/github/kyusu/mahakala?targetFile=package.json)
[![Coverage Status](https://coveralls.io/repos/github/kyusu/mahakala/badge.svg?branch=master)](https://coveralls.io/github/kyusu/mahakala?branch=master)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/kyusu/mahakala/graphs/commit-activity)
[![GitHub license](https://img.shields.io/github/license/kyusu/mahakala.svg)](https://github.com/kyusu/mahakala/blob/master/LICENSE)
[![DeepScan grade](https://deepscan.io/api/teams/10488/projects/13334/branches/220795/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=10488&pid=13334&bid=220795)

## Purpose
[Mahakala](https://en.wikipedia.org/wiki/Mahakala) is just a small command-line application which is able to query a NovaTime© time tracking system for your state (present/absent).

## Motivation
My current employer is using a time tracking system. And I, not being used to a punch clock, keep forgetting to "punch in" in the morning or after the lunch break which means I'm essentially working for free then. So I was looking for way to see my time tracking state in the menu bar of my mac. [BitBar](https://getbitbar.com) is an excellent way of adding information to your menu bar, but how to get the information from our NovaTime© installation?

In addition to the practical reason mentioned above, I was also looking for an excuse to try out [monad transformers](https://www.linkedin.com/pulse/monad-transformers-javascript-vladimír-gorej) or to be more precise [ReaderT](https://evilsoft.github.io/crocks/docs/crocks/ReaderT.html) as way to improve the testability of effectful code.

## Usage

In our home directory you have to create a file called `.mahakala`. The content of the file should be JSON of the following schema:
```
{"userName": "1234", "password": "secret", "url": "http://yourLocalNovaTimeInstallation/cgi-bin/htm_term.cgi"}
```
where `userName` is the account name/number which you normally use to sign in. `password` does not need any explanation and `url` should point to your local NovaTime© installation.

After that you can use run mahakala and it should output the following:

* 💓 – The system considers you being present
* 💔 – The system considers you being absent
* 💥 - Mahakala was not able to fetch the state during error, e.g. no network connection


# Disclaimer
NOVAtime and NOVAtime logo are registered trademarks of NOVAtime Technology, Inc. The name NOVAtime Technology, Inc. and NOVAtimeAnywhere are registered trademarks of NOVAtime.
