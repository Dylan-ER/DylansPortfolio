import Header from "../components/header";

export default function Page({ children }) {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  );
}
