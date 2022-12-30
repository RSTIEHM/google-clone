import Head from 'next/head'
import SearchHeader from '../components/SearchHeader'
const Search = () => {
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