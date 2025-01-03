import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { visit } from 'unist-util-visit';

const POSTS_DIRECTORY = 'src/posts';

const postsDirectory = path.join(process.cwd(), POSTS_DIRECTORY);

interface Post {
  id: string;
  title: string;
  date: string;
  thumbnail?: string;
  excerpt?: string;
  category?: string;
  tags?: string[];
  contentHtml?: string;
}

/**
 * Recursively reads all Markdown files in a directory.
 * @param {string} dirPath - The directory path to read.
 * @param {string[]} [arrayOfFiles=[]] - The array to store file paths.
 * @returns {string[]} The array of Markdown file paths.
 */
function getAllMarkdownFiles(
  dirPath: string,
  arrayOfFiles: string[] = [],
): string[] {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllMarkdownFiles(filePath, arrayOfFiles);
    } else if (file.endsWith('.md')) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

/**
 * Gets sorted post data from Markdown files.
 * @returns {Post[]} The sorted array of post data.
 */
export function getSortedPostsData(): Post[] {
  const filePaths = getAllMarkdownFiles(postsDirectory);
  const allPostsData = filePaths.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    const id = path.relative(postsDirectory, filePath).replace(/\.md$/, '');
    return {
      id,
      title: data.title,
      date: data.date,
      contentHtml: data.contentHtml,
    };
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPosts(category: string = ''): Post[] {
  const filePaths = getAllMarkdownFiles(postsDirectory);
  const allPostsData = filePaths.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    const id = path.basename(filePath).replace(/\.md$/, '');
    return {
      ...data,
      id,
    } as Post;
  });
  return allPostsData
    .filter((post) => (category ? post.category === category : post))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Gets all post IDs from Markdown files.
 * @returns {Object[]} The array of post IDs.
 */
export function getAllPostSlugs() {
  const filePaths = getAllMarkdownFiles(postsDirectory);
  return filePaths.map((filePath) => {
    const slug = path.basename(filePath).replace(/\.md$/, '');
    return {
      slug,
    };
  });
}

/**
 * Custom remark plugin to handle image paths.
 * @param {string} postFolder - The folder containing the post.
 * @returns {Function} The remark plugin function.
 */
function imagePathPlugin(postFolder: string) {
  return () => (tree: any) => {
    visit(tree, 'image', (node) => {
      const imageName = path.basename(node.url);
      node.url = `/posts/${postFolder}/${imageName}`;
    });
  };
}

/**
 * Fetches post data by slug.
 * @param {string} slug - The slug of the post.
 * @returns {Promise<Post>} The post data.
 */
export async function getPost(slug: string): Promise<Post> {
  const postsDirectory = path.join(process.cwd(), POSTS_DIRECTORY, slug);
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // 使用 remark 將 Markdown 轉換為 HTML
  const processedContent = await remark()
    .use(imagePathPlugin(slug))
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    id: slug,
    title: data.title,
    date: data.date,
    thumbnail: data.thumbnail,
    excerpt: data.excerpt,
    category: data.category,
    tags: data.tags,
    contentHtml: contentHtml,
  };
}
