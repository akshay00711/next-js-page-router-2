import { Fragment } from 'react';
import Head from 'next/head';

import ContactForm from '../components/contact/contact-form';
import Layout from '../components/layout/layout';
import { useSession } from 'next-auth/react';

export default function ContactPage() {
  const { data: session } = useSession()
  console.log( "Session ContactPage :: ",session)
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

ContactPage.getLayout = page => <Layout>{page}</Layout>