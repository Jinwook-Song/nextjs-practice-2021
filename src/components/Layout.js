import Nav from "./Nav";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
}
