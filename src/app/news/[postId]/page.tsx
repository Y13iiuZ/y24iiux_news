import { NewsListProps } from "../list/page";
// import { useParams } from "next/navigation";
import Link from "next/link";

type Props = NewsListProps & {
  content: string;
  author_name: string;
  published_at: string;
};

async function getNewsDetail(postId: string): Promise<Props> {
  const resp = await fetch(
    `https://unidemo.dcloud.net.cn/api/news/36kr/${postId}`
  );
  const res = await resp.json();
  return res;
}

export default async function NewsDetail({
  params,
}: {
  params: { postId: string };
}) {
  const NewsDetail = await getNewsDetail(params.postId);
  return (
    <>
      <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}>
        {NewsDetail.title}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#888",
        }}>
        <div>{NewsDetail.published_at}</div>
        <div>{NewsDetail.author_name}</div>
      </div>
      <div style={{ marginTop: 20 }}>
        <Link
          href={`/news/list`}
          style={{ color: "#3cddf5", textDecoration: "none" }}>
          &lt;返回列表
        </Link>
      </div>
      <div dangerouslySetInnerHTML={{ __html: NewsDetail.content }}></div>
    </>
  );
}
