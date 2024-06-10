import Link from "next/link";
import fsp from "fs/promises";

export type NewsListProps = {
  from_id: string;
  title: string;
  post_id: string;
  cover: string;
  summary: string;
};

async function getNewsList(): Promise<NewsListProps[]> {
  //   const resp = await fetch("https://unidemo.dcloud.net.cn/api/news");
  //   const res = await resp.json();
  //本地json缓存 渲染更快
  const res = JSON.parse((await fsp.readFile("./newsList.json")).toString());
  return res;
}

export default async function NewsList() {
  const newList = await getNewsList();
  return (
    <div>
      {newList.map((news) => (
        <div style={{ display: "flex", marginBottom: 10 }}>
          <img
            src={news.cover}
            alt="img"
            style={{ objectFit: "cover", width: 100, height: 120 }}
          />
          <div style={{ marginLeft: 10 }}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}>
              <Link
                href={`/news/${news.post_id}`}
                style={{ color: "inherit", textDecoration: "none" }}>
                {news.title}
              </Link>
            </div>
            <div style={{ color: "#888" }}>{news.summary}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
