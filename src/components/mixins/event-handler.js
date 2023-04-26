/** Automatic this-binding and creation of bound method for removal, */
const EventHandlerMixin = (Parent) => {
  class EventHandler extends Parent {
    /** */
    addEventHandler(eventType, handler, target = this) {
      const boundHandler = handler.bind(this);
      this[EventHandler.#genBoundHandlerName(handler)] = boundHandler;
      target.addEventListener(eventType, boundHandler);
      return boundHandler;
    }

    removeEventHandler = (eventType, handler, target = this) => {
      const boundHandlerName = EventHandler.#genBoundHandlerName(handler);
      if (!(boundHandlerName in this)) return;
      target.removeEventListener(eventType, this[boundHandlerName]);
    };
    // NOTE: As an alternative to using removeEventHandler, removeEventListener
    // can be used on the target with the Bound suffixed handler.

    static #genBoundHandlerName(handler) {
      return `${handler.name}Bound`;
    }
  }

  return EventHandler;
};

export { EventHandlerMixin };
