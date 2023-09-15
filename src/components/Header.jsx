import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a href="#">Asosiy</a>
            </li>
            <li>
              <a>Universitet haqida</a>
              <ul className="p-2">
                <li>
                  <a>Halqaro bo'lim</a>
                </li>
                <li>
                  <a>Madaniyat bo'limi</a>
                </li>
                <li>
                  <a>Ilmiy bo'limi</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Asosiy</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>
                <a>Universitet haqida</a>
              </summary>
              <ul className="p-2">
                <li>
                  <a>Halqaro bo'lim</a>
                </li>
                <li>
                  <a>Madaniyat bo'limi</a>
                </li>
                <li>
                  <a>Ilmiy bo'limi</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <details>
              <summary>Til</summary>
              <ul className="p-2">
                <li>
                  <a href="#">Uz</a>
                </li>
                <li>
                  <a href="#">Ru</a>
                </li>
                <li>
                  <a href="#">Eng</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 1</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
