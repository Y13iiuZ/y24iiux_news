import Link from 'next/link';

export default function Home() {
  return (
    <>
    <main>welcome to y24iiux news SSR page !</main>
    <Link href='/news/list' style={{ color: "skyblue", textDecoration: "none" }}>开始阅读 -&gt;</Link>
    </>
  );
}
