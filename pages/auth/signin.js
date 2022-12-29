import Header from "../../components/Header"
import { getProviders, signIn } from "next-auth/react" 

const signin = ({providers}) => {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map(provider => {
          return (
            <div key={provider.name} className="flex flex-col items-center">
              <img className="w-52 object-cover" src="../../Googlelogo.svg.png" alt="Google Logo" />
              <p className="text-sm italic my-10 text-center">This website is created for learning purposes</p>
              <button className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500" onClick={() => signIn(provider.id, {callbackUrl: "/"})}>Sign In With {provider.name}</button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default signin

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers
    }
  }
}