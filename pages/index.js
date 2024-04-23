import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import Layout from "../components/layout/layout";
import { getFeaturedPosts } from "../lib/posts-util";
import { getSession, useSession } from "next-auth/react"

export default function HomePage(props ){

//  const Dummy_post = [
//     {slug : 'getting-started-with-nextjs' ,  title:"This is title" , image: 'getting-started-nextjs.png' , excerpt : 'Next JS as REct framework',  date : '2022-02-12' },
//  ]

    const { data: session } = useSession()
    console.log( "Session Dasboard :: ",session)

    return(
        <>
           <Hero/>
           <FeaturedPosts posts={props.posts} />
        </>
    )
}

export async function getStaticProps() {
   const featuredPosts = getFeaturedPosts();
   
   return {
     props: {
       posts: featuredPosts,
     },
   };
 }
  

 HomePage.getLayout = page => <Layout>{page}</Layout>

