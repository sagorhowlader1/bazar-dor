import NavMenu from "./NavMenu";

const NavLinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
  const data = await res.json();

  return <NavMenu items={data} />;
};

export default NavLinks;
