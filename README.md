# @unction/domEvents


![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> DOMEventsConfigurationType -> DOMEventNameType -> DOMStreamType -> DOMEventStreamType

Takes a configuration, an event name, and a DOM source and returns an observable of that event type

``` javascript
domEvents({})("click")(DOM)
```

returns

``` javascript
--click--click--click-->
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/domEvents.svg?maxAge=2592000&style=flat-square

[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/domEvents.svg?maxAge=2592000&style=flat-square
