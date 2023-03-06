import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import Header from '@/components/section/Header/Header'
import { NextPageWithLayout } from './page'

const FileDowloadPage: NextPageWithLayout = () => {
  return <div>FileDowloadPage</div>
}

export default FileDowloadPage

FileDowloadPage.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Header />
      {page}
    </PrimaryLayout>
  )
}
