import contentfulClient from "@/contentful/contentfulClient";
import { TypeBlogSkeleton } from "@/contentful/types/blog.types";
import RichText from "@/view/components/richText";

const getBlogContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBlogSkeleton>({
      content_type: "blog",
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default async function Isicontentful() {
  const blogs = await getBlogContentful();
  return (
    <div className="mx-auto py-20 px-4 md:px-8">
      <div className=" items-center text-justify bg-white text-[#33251c] rounded-lg space-x-4 grid grid-cols-1 sm:grid-cols-2 p-20">
        {blogs &&
          blogs.items?.map((blog, idx) => (
            <div
              key={idx}
              className=" p-6 sm:p-8 mb-8 max-w-full sm:max-w-2xl md:max-w-4xl mx-8 py-9"
            >
              <p className="text-3xl sm:text-4xl font-bold mb-4 text-center">{blog.fields.title}</p>
              <div className="text-gray-800 mt-4 text-justify p-10">
                <RichText document={blog.fields.body} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
