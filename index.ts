export default function domEvents (options) {
  return function domEventsOptions (name) {
    return function domEventsOptionsName (dom) {
      return dom.events(name, options);
    };
  };
}
