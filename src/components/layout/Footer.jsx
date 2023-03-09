import React from "react";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MBA Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @mbaburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://youtube.com">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/__priyansh__96">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/PriyanshVerma01">
          <AiFillGithub />
        </a>
        <a href="https://twitter.com/priyanshverma01">
          <AiFillTwitterCircle />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
