// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<Script src="https://kit.fontawesome.com/e015ee243a.js" crossOrigin="anonymous"></Script>
				</Head>
				<body className='font-m-plus'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument