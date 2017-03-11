# Service Infrastructuee
Generic Service Infrastructure, designed for the front-end.

## Design
The design is based on best practice concepts from Micro Services infrastructure on the backend, in particular:
- [The Tao of Micro Services book](http://www.richardrodger.com/tao-of-microservices#.WMPLQ2TytE4)
- [Seneca](http://senecajs.org/) Micro Services framework

## Services
- IO service
- Service (IO)
- Data (IO) service
- API (IO) service
- Logger (Data) service

Data service uses one or more
- Storage service

But may orchestrate:
- Validator service
- Query service

A Data service may be used as a Cache service for any IO (ie. taking Input data) service

## Other Inspirations
[NinjaGoat MVVM framework](https://github.com/tierratelematics/ninjagoat/wiki/Getting-started)

## Dev tools

### Test runner
- [Ava](https://github.com/avajs/ava)

### IoC Dependency Injection
- [Inversify](http://inversify.io/)
- [inversify-devtools](https://github.com/inversify/inversify-devtools)
- [inversify-chrome-devtools](https://github.com/inversify/inversify-chrome-devtools)

See [Inversify wiki docs](https://github.com/inversify/InversifyJS/tree/master/wiki)

[Ecosystem](https://github.com/inversify/InversifyJS/blob/master/wiki/ecosystem.md)

In particular:
- [Optional dependencies](https://github.com/inversify/InversifyJS/blob/master/wiki/optional_dependencies.md)
- [Auto Factory](https://github.com/inversify/InversifyJS/blob/master/wiki/auto_factory.md)

## Event sourcing
- [Event Sourcing Pattern](https://msdn.microsoft.com/en-us/library/dn589792.aspx)
- [event-sourcing-projections](https://abdullin.com/post/event-sourcing-projections/)
- [event-projections](http://www.jefclaes.be/2013/10/event-projections.html)

[prettygoat Event Source Engine](https://github.com/tierratelematics/prettygoat)

## DBs
Store data in real DB, not just Objects!

### Graph DB
In memory:
- [tinkergraph](https://github.com/jbmusso/tinkergraph-js)
- [jseg](https://github.com/brandonbloom/jseg)
- [helios](https://github.com/zuudo/helios.js?files=1)

### Document DB
- [nedb](https://github.com/louischatriot/nedb)
- [loki](http://lokijs.org/)


## TypeScript 2.x
- [learn-typescript](https://github.com/panacloud/learn-typescript)
- [official handbook](https://www.typescriptlang.org/docs/tutorial.html)

## Typed RxJS
- [RxJs](http://reactivex.io/rxjs/)
- [RxJS book](https://xgrommx.github.io/rx-book/index.html)
- [learn-typed-rxjs](https://github.com/panacloud/learn-typed-rxjs)
- [rxjs-1st-steps](https://juristr.com/blog/2016/06/rxjs-1st-steps-subject/)
- [RxJs5 operators](https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35)
- [ESNext bind :: operator](https://github.com/tc39/proposal-bind-operator)
- [bind](http://babeljs.io/docs/plugins/transform-function-bind/)

- [typescript-rxjs-intellisense](https://www.gurustop.net/blog/2016/04/19/typescript-rxjs-intellisense-node)

Note that `@reactivex/rxjs` is the TypeScript of RxJS, ie. rxjs-ts

`import { Observable } from '@reactivex/rxjs'`

```js
import { Observable } from '@reactivexrxjs/Observable';
import '@reactivexrxjs/add/observable/of';
import '@reactivexrxjs/add/operator/map';

Observable.of(1,2,3)::map(x => x + '!!!');
```