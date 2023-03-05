import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

// const client = "789975008659-k7e36785mqd2te0g0adtm590p83mou16.apps.googleusercontent.com";
// const secret = "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"
export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      httpOptions: {
        timeout: 40000
      }
    })
    // Passwordless / email sign in
  ]
  // useSecureCookies: false,
})
