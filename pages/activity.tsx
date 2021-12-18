import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function activity() {
  return (
    <>
      <PageSEO title={`Activity - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Activity
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">List my activity</p>
        </div>
        <div>
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            <span className="pr-2" role="img" aria-label="wave">
              🌳
            </span>
            Github.
          </h1>
        </div>
        <div>
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            <span className="pr-2" role="img" aria-label="wave">
              📚
            </span>
            Today I Learned.
          </h1>
        </div>
      </div>
    </>
  )
}
