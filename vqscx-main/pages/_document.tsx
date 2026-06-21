import React from 'react';
import Document, {
   Html,
   Head,
   Main,
   NextScript,
   DocumentContext,
   DocumentInitialProps,
} from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { globalStyles } from '../styles/global.stitches';

class MyDocument extends Document {
   static async getInitialProps(
      ctx: DocumentContext
   ): Promise<DocumentInitialProps> {
      const initialProps = await Document.getInitialProps(ctx);
      return {
         ...initialProps,
         styles: React.Children.toArray([initialProps.styles]),
      };
   }

   render() {
      return (
         <Html lang="en">
            <title>VQS | Valuable Quality Service</title>
            <meta name="title" content="VQS | Valuable Quality Service" />
            <meta name="description" content="VQS has you in mind, building comfort, security, and powerful tools."></meta>
            <link rel="icon" href='../VQS.png' />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://vqssecurity.com/" />
            <meta property="og:title" content="VQS | Valuable Quality Service" />
            <meta property="og:description" content="VQS has you in mind, building comfort, security, and powerful tools." />
            <meta property="og:image" content="../VQS.png"></meta>
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://vqssecurity.com/" />
            <meta property="twitter:title" content="VQS | Valuable Quality Service"/>
            <meta property="twitter:description" content="VQS has you in mind, building comfort, security, and powerful tools."/>
            <meta property="twitter:image" content="../VQS.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />

            <link
               href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
               rel="stylesheet"
            />
            <script src="https://cdn.sellix.io/static/js/embed.js"></script>
            <link href="https://cdn.sellix.io/static/css/embed.css" rel="stylesheet" />
            <Head>{CssBaseline.flush()}


            </Head>

            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
