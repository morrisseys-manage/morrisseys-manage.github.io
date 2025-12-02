import React from 'react';

export default function Events() {
  return (
    <div className="container details">
      <h1>Events Schedule</h1>
      <article className="event">
        <h2>Welcome Drinks</h2>
        <p><strong>Friday, June 19, 2026 — 7:00 PM</strong><br />
        Lazarus Brewing Co. (Airport Blvd)</p>
        <p>Casual meet & greet. Kids welcome.</p>
      </article>
      <article className="event">
        <h2>Ceremony</h2>
        <p><strong>Saturday, June 20, 2026 — 2:00 PM</strong><br />
        Zilker Botanical Garden</p>
        <p>Please arrive by 1:30 PM. Outdoor seating; dress comfortably.</p>
      </article>
      <article className="event">
        <h2>Reception</h2>
        <p><strong>Saturday, June 20, 2026 — 5:00 PM</strong><br />
        The Allan House</p>
        <p>Dinner, toasts, and dancing. Shuttle provided from ceremony.</p>
      </article>
      <article className="event">
        <h2>Farewell Brunch</h2>
        <p><strong>Sunday, June 21, 2026 — 10:30 AM</strong><br />
        Paperboy</p>
        <p>Drop in for pastries & coffee before you head out.</p>
      </article>
    </div>
  );
}
