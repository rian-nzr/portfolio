export function Footer() {
    return (
      <footer>
        <div className="items-center justify-between space-y-4 md:flex md:space-y-0 mb-8 mt-16">
          {/* <BuiltWith /> */}
          <div className=" flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div>{`Copyright © ${new Date().getFullYear()}`}</div>
            <span>{` • `}</span>
            <span>Ryan ~ junior front-end</span>
          </div>
        </div>
      </footer>
    )
  }