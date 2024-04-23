import Head from 'next/head';
import { Fragment } from 'react';

import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
import Layout from '../../components/layout/layout';
import { useSession } from 'next-auth/react';

export default function AllPostsPage(props) {

  const { data: session } = useSession()
  console.log( "Session AllPostsPage :: ",session)

  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

AllPostsPage.getLayout = page => <Layout>{page}</Layout>