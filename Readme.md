# Service Infrastructuee
Generic Service Infrastructure, designed for the front-end.

## Design
The design is based on best practice concepts from Micro Services infrastructure on the backend, in particular:
- [The Tao of Micro Services book](http://www.richardrodger.com/tao-of-microservices#.WMPLQ2TytE4)
- [Seneca](http://senecajs.org/) Micro Services framework

### Services
This library makes the following Services are available:
- `StreamService` (`Stream` wrapper)
- `IOService` (`StreamService` with `Input` and `Output`)
- `Service` (`IOService`)
- `DataService` (`IOService` for handling data)
- `CacheService`
- `APIService` (`IOService` for interacting with `Connection`s to external event sources)
- `LogService` (`StoreService` event logger)
- `ManagerService` (used to manage the infrastructure)

`ServiceRegistry` where services are registered and can be looked up.

Any sink (consumer) plugged into a `Service` and react on events as it sees fit.
A `Component` can and be plugged into a `Service` which is then considered a `ComponentService`.

A `Component` can wrap (or be connected) to a View Component such as a [Custom Element v1](https://developers.google.com/web/fundamentals/getting-started/primers/customelements) of the DOM. This can be considered "Data Reporting", ie. presenting a view of the data (see `DataService`). The view can be the raw data or a projection of the data in the form of queries (`QueryService`) and transformations (ie. "Materialized Views")

A Data service uses one or more
- `StoreService`

A `StoreService` may use any kind of data type for storage or even an in-memory Database.

A `DataService` may additionally orchestrate one or more:
- `ValidatorService` (validate data to store)
- `QueryService` (find data of interest for particular data consumers ie. Views etc)

A `DataService` may be used as a `CacheService` for any IO (ie. to cache incoming data)

A `Component` is an event sink (or event consumer). A component may dispatch `Action`s as response to
user actions etc. The actions are converted into `Event`s and emitted on the service `Stream`.

An `Event` must always have a unique ID and a `createdAt` timestamp for tracking purposes.

### Plug and Play
The services are designed to be Plug and Play, ie. easy to compose together. Any service has a set of Adapters (slots) and a plug. A service can be plugged into one service Adapter. When two services are plugged, the Output stream of each service is streamed into the Input stream of the other service.

A ComponentService can only be plugged into the App service.

### Gate
A `Gate` (similar to a [logic gate](https://en.wikipedia.org/wiki/Logic_gate) in electronics) controls how two or more streams are merged into one.

## Other stream based frameworks of interest
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