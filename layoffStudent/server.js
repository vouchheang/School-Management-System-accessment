import mongoose from 'mongoose'
import Blog from './blockModel.js';

mongoose.connect("mongodb+srv://sopheabtb9988:cWJ1ZWFWa6Us5xd8@cluster0.gkbww.mongodb.net/myNewDatabase")



async function createBlog(title, slug, published, content, tags) {
  const article = new Blog({ title, slug, published, content, tags });
  await article.save();
}


await createBlog(
  'test!',
  'awesome-post',
  true,
  'This is the best post ever',
  ['featured', 'announcement']
);

// const article = await Blog.findById("67495f40bb245a9cc4558f3b").exec();
const article = await Blog.findById("67495f40bb245a9cc4558f3b", "title slug content").exec();
console.log(article);
console.log(article);


