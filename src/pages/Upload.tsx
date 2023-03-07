import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import UnderMaintainPage from '@/components/section/404/404'
import Header from '@/components/section/Header/Header'
import { NextPageWithLayout } from './page'

const LatestUpload: NextPageWithLayout = () => {
  return (
    <>
      <UnderMaintainPage />
    </>
  )
}

export default LatestUpload

LatestUpload.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Header />
      {page}
    </PrimaryLayout>
  )
}
