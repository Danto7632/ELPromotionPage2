import { css } from "@emotion/react";

export const nav = css`
  position: fixed;
  top: 0;
  width: 100%;
  background: transparent;
  transition: background 0.3s ease-in-out;
`;

export const scrolled = css`
  background: rgba(0, 0, 0, 0.8);
`;

export const hamburger = css`
  cursor: pointer;
  font-size: 24px;
`;

export const navLinks = css`
  list-style: none;
  display: flex;

  &.active {
    display: block;
  }
`;

export const scrollIndicator = css`
  position: fixed;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
`;

export const scrollDot = css`
  width: 10px;
  height: 10px;
  margin: 5px;
  background: gray;
  border-radius: 50%;
  cursor: pointer;

  &.active {
    background: white;
  }
`;

export const scrollDown = css`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;
