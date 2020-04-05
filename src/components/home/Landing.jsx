import  React from 'react';
import './Landing.scss';
import { Link } from 'react-router-dom';

export function Landing(){
  return (
    <div className="container">
        <nav className="header">
            <ul>
                <li className="logo">Fancy Events </li>
                <li className="blank"> </li>
                <li className="auth">About</li>
            </ul>
        </nav>
      <main className="main">
        <div>some other stuff will come here </div>
      </main>
    </div>
  ) 
}