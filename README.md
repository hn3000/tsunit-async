
This is just the tsUnit testrunner from 
[tsUnit #20](https://github.com/Steve-Fenton/tsUnit/pull/20)
as a standalone npm module so I can install from git.

See

* [npm #2974](https://github.com/npm/npm/issues/2974#issuecomment-169451651)
* [MS nodejstools #471](https://github.com/Microsoft/nodejstools/issues/471)

for some of the reasons why this is necessary.

TL;DR
* npm only supports install from github where package.json is on the toplevel of the repo
* git install always pulls down the complete repo
* universal projects with VS and VS code / npm are more work

