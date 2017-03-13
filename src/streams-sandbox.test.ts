import test from 'ava'

import {
  Subject,
  Subscription,
  Observable
} from '@reactivex/rxjs'

test('playing with streams', t => {

  const observable = Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  })

  const subscription = observable.subscribe(
    value => console.log(value),
    err => { },
    () => console.log('this is the end')
  );
})