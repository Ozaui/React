import React from "react";

export const users = [
  {
    username: `enes`,
    password: `1234 `,
  },
  {
    username: `enes`,
    password: `1234 `,
  },
  {
    username: `enes`,
    password: `1234 `,
  },
  {
    username: `enes`,
    password: `1234 `,
  },
];

function Login() {
  return (
    <div>
      <div>
        <p>Kullanici ADiniz</p>
        <input type="text" />
      </div>

      <div>
        <p>Sifreniz</p>
        <input type="password" />
      </div>

      <button>Giris Yap</button>
    </div>
  );
}

export default Login;
