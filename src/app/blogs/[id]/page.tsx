import Container from "@/components/Container";
import { IGetArticles } from "../page";
import Link from "next/link";

interface IArticleProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

async function Article(props: IArticleProps) {
  const { id } = await props.params;
  const result = await fetch(`http://localhost:3001/articles/${id}`);
  const data = (await result.json()) as IGetArticles;
  return (
    <div>
      <Container>
        <Link href={"/blogs"}>
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-80 object-cover"
              />

              <div className="p-6 sm:p-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                  {data.title}
                </h1>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </Container>
    </div>
  );
}

export default Article;
