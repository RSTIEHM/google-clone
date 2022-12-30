import User from "./User"


const Header = () => {
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
      <div className="flex space-x-4 item-center justify-center">
        <p className="link my-2">About</p>
        <p className="link my-2">Store</p>
      </div>
      <div className="flex space-x-4 item-center">
        <p className="link my-2">Gmail</p>
        <p className="link my-2">Images</p>
        <User />
      </div>
    </header>
  )
}

export default Header