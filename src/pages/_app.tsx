import '../css/reset.css'
import '../css/styles.css'
import Menu from '@/common/components/Menu'
import Notifications from 'react-notify-toast'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu></Menu>
      <Notifications/>
      <Component {...pageProps} />
    </>
  )
}
