import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { PomoTimer } from "./PomoTimer";

describe("PomoTimer Logic", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-03-30T12:00:00Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('calculates remaining timew correctly after 5 minutes', () => {
    const timer = new PomoTimer(25 * 60);
    timer.start();
    vi.advanceTimersByTime(5 * 60 * 1000);

    expect(timer.getRemainingSeconds()).toBe(20 * 60);
  });

  it('stops at zero and does not go negative', () => {
    const timer = new PomoTimer(10);
    timer.start();
    vi.advanceTimersByTime(60 * 60 * 100);
    expect(timer.getRemainingSeconds()).toBe(0);
  })
})
