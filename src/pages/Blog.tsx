import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogData";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
            My Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Thoughts on development, design, and the intersection of technology and humanity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              coverImage={post.coverImage}
              date={post.date}
              delay={index * 100}
              externalLink={post.externalLink}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;