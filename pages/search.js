import Head from 'next/head'
import SearchHeader from '../components/SearchHeader'


const Search = ({results}) => {
  console.log(results)
  return (
    <div>
        <Head>
          <title>Search Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* SEARCH HEADER */}
        <SearchHeader />
        {/* SEARCH RESULTS */}
    </div>
  )
}

export default Search

export async function getServerSideProps(ctx) {
  const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${ctx.query.term}${ctx.query.searchType && "&searchType=image"}`).then((res) => res.json())
  return {
    props: {
      results: data
    }
  }
}