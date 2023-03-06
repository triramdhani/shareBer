import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import Header from '@/components/section/Header/Header'
import { NextPageWithLayout } from './page'

const Login: NextPageWithLayout = () => {
  return <div>Login</div>
}

export default Login

Login.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Header />
      {page}
    </PrimaryLayout>
  )
}
