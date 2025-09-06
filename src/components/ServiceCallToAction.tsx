import { Container } from '@/components/Container'

interface ServiceCallToActionProps {
  title?: string
  description?: string
}

export function ServiceCallToAction({ 
  title = "CALL OR COME IN FOR AN ESTIMATE",
  description = "Contact us today for expert service and honest estimates on all your repair needs."
}: ServiceCallToActionProps) {
  return (
    <section className="bg-orange-600 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-orange-100">
            {description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="tel:+1234567890"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Call Now
            </a>
            <a href="#contact" className="text-sm font-semibold leading-6 text-white">
              Visit Our Shop <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}