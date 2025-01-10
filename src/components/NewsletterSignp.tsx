import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const NewsletterSignp = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Stay Updated on My Adventures</h2>
      <p className="mb-8">Sign up for my newsletter and never miss a story!</p>
      <form className="max-w-md mx-auto flex gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-grow bg-white text-black"
        />
        <Button type="submit" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-100">
          Subscribe
        </Button>
      </form>
    </div>
  </section>
  )
}

export default NewsletterSignp