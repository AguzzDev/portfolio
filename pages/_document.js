import { Metatags } from "components/Metatags"
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/logo.png" />
        <Metatags />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
