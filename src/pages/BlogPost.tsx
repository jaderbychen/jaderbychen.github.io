import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { getBlogPost } from "@/data/blogData";
import { useEffect, useState } from "react";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const blogPost = getBlogPost(id);
      setPost(blogPost);
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Header />
        <main className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/blog" className="flex items-center gap-2">
                <ArrowLeft size={18} />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="ghost" size="sm" className="rounded-full mb-6">
              <Link to="/blog" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Blog
              </Link>
            </Button>
          </div>

          <article className="bg-surface-elevated rounded-3xl overflow-hidden shadow-[0_20px_50px_hsl(var(--shadow-soft))]">
            <div className="aspect-video overflow-hidden">
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                {post.title}
              </h1>
              
              <div 
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary/20"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.replace(/\n/g, '<br />').replace(/#{1,6}\s/g, match => {
                    const level = match.trim().length;
                    const tag = `h${level}`;
                    return `<${tag} class="text-${level === 1 ? '3xl' : level === 2 ? '2xl' : 'xl'} font-bold mt-8 mb-4">`;
                  }).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                    .replace(/---/g, '<hr class="my-8 border-border" />')
                }}
              />
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;