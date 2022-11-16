import Link from "next/link";

function Menu() {
  return (
    <nav>
      <Link href="/">Anasayfa</Link>
      <Link href="/about">Hakkında</Link>
      <Link href="/contact">İletişim</Link>
    </nav>
  );
}
export default Menu;
