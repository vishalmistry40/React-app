// @vitest-environment jsdom
import React from 'react';
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Signin from './Signin.jsx';

describe('sign-in UI demo', () => {
  it('never represents demo submission as authentication or keeps the password', () => {
    render(<Signin />);
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'demo' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'sample-value' } });
    fireEvent.click(screen.getByRole('button', { name: /Preview form submission/ }));
    expect(screen.getByRole('status').textContent).toContain('does not sign you in');
    expect(screen.getByLabelText('Password').value).toBe('');
    expect(screen.getByText(/Nothing is verified, transmitted, or stored/)).toBeTruthy();
  });
});
