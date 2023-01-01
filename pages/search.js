import Head from 'next/head'
import SearchHeader from '../components/SearchHeader'
import SearchResults from '../components/SearchResults'
import Response from '../Response'
import { useRouter } from 'next/router'

const Search = ({results}) => {
  const router = useRouter()
  console.log(results)
  return (
    <div>
        <Head>
          <title>{router.query.term} - Search</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* SEARCH HEADER */}
        <SearchHeader />
        {/* SEARCH RESULTS */}
        <SearchResults results={results} />
    </div>
  )
}

export default Search

export async function getServerSideProps(ctx) {
  const startIndex = ctx.query.start || "1"
  const mockData = true
  const data = mockData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${ctx.query.term}${ctx.query.searchType && "&searchType=image"}&start=${startIndex}`).then((res) => res.json())
  return {
    props: {
      results: data
    }
  }
}