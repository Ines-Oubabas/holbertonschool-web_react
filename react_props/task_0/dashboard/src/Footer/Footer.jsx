import React from 'react';
import './Footer.css';
import { getCurrentYear, getFooterCopy } from '../utils/utils.js';

export default function Footer() {
  return (
    <div className="App-footer">
      <p>
        Copyright {getCurrentYear()} {getFooterCopy(false)}
      </p>
    </div>
  );
}
