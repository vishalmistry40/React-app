import React, { useState } from 'react';
import './Signin.css';

export default function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notice, setNotice] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // UI-only demonstration: deliberately do not authenticate or store credentials.
    setPassword('');
    setNotice(`Form submitted for ${username.trim()}. This demo does not sign you in.`);
  }

  return (
    <main className="page-shell">
      <div className="intro">
        <div className="eyebrow">React interface study</div>
        <h1>A simple sign-in form, made clear.</h1>
        <p>This is a front-end demo of form states and layout. It is not a real account or authentication flow.</p>
        <div className="feature"><span aria-hidden="true">01</span><p>Responsive layout that works from phone to desktop.</p></div>
        <div className="feature"><span aria-hidden="true">02</span><p>Keyboard-friendly fields with labels and clear feedback.</p></div>
      </div>
      <section className="form-card" aria-labelledby="form-title">
        <div className="card-mark" aria-hidden="true">S</div>
        <h2 id="form-title">Welcome back</h2>
        <p className="card-subtitle">Try the form with demo-only values.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" autoComplete="off" value={username} onChange={(event) => { setUsername(event.target.value); setNotice(''); }} required />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" autoComplete="off" value={password} onChange={(event) => { setPassword(event.target.value); setNotice(''); }} required />
          <button type="submit">Preview form submission <span aria-hidden="true">→</span></button>
        </form>
        {notice && <p className="notice" role="status">{notice}</p>}
        <p className="disclaimer">Demo only. Nothing is verified, transmitted, or stored.</p>
      </section>
    </main>
  );
}
