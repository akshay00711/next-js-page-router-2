import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props){

//  const Dummy_post = [
//     {slug : 'getting-started-with-nextjs' ,  title:"This is title" , image: 'getting-started-nextjs.png' , excerpt : 'Next JS as REct framework',  date : '2022-02-12' },
//  ]

    return(
        <>
           <Hero/>
           <FeaturedPosts posts={props.posts} />
        </>
    )
}

export function getStaticProps() {
   const featuredPosts = getFeaturedPosts();
 
   return {
     props: {
       posts: featuredPosts,
     },
   };
 }
  

export default HomePage;