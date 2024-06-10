/* This file is executed on each test file */

import "@testing-library/jest-dom/vitest";
import { PropsWithChildren } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { server } from "./mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers()); // make sure you use reset, not restore
afterAll(() => server.close());

// replace certain functions in this module to mock functions
vi.mock('@auth0/auth0-react', ()=>{
  return {
    useAuth0: vi.fn().mockReturnValue({
      isAuthenticate: false,
      isloading: false,
      user: undefined
    }),
    Auth0Provider: ({children}: PropsWithChildren) => children,
    withAuthenticationRequired: vi.fn()
  }
}); 

// require for testing Radix UI lib
global.ResizeObserver = ResizeObserver;

window.HTMLElement.prototype.scrollIntoView = vi.fn();
window.HTMLElement.prototype.hasPointerCapture = vi.fn();
window.HTMLElement.prototype.releasePointerCapture = vi.fn();

// add this property to the window object in the testing env
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
